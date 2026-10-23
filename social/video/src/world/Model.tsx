/**
 * Third-party 3D models (glTF / GLB) placed in the studio.
 *
 * A model arrives in whatever units, orientation and offset its author
 * used. This fits it to a size in our world units, stands it on the
 * floor, and gives its materials the same treatment as everything else:
 * clipped to its side of the floor, and darkened with depth in the
 * reflection pass.
 */

import React, { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone as cloneRigged } from "three/examples/jsm/utils/SkeletonUtils.js";
import { cancelRender, continueRender, delayRender, staticFile } from "remotion";

import { ABOVE, BELOW, mirrored, useMirror } from "./World";

const cache = new Map<string, Promise<GLTF>>();

const load = (file: string) => {
  let p = cache.get(file);
  if (!p) {
    p = new Promise<GLTF>((resolve, reject) =>
      new GLTFLoader().load(staticFile(file), resolve, undefined, reject),
    );
    cache.set(file, p);
  }
  return p;
};

const ready = new Map<string, GLTF>();

/**
 * Loads models before the canvas exists. The canvas only draws when the
 * frame changes, so a model that arrived after its first draw would never
 * be seen; the Scene waits on this and mounts the canvas once all are in.
 */
export const useModels = (files: string[]) => {
  const key = files.join("|");
  const [done, setDone] = useState(() => files.every((f) => ready.has(f)));
  const [handle] = useState(() => (done ? null : delayRender(`models ${key}`)));
  useEffect(() => {
    if (done) return;
    Promise.all(files.map((f) => load(f).then((g) => ready.set(f, g))))
      .then(() => {
        setDone(true);
        if (handle !== null) continueRender(handle);
      })
      .catch((err) => cancelRender(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return done;
};

export const Model: React.FC<{
  file: string;
  x?: number;
  y?: number;
  z?: number;
  /** Turn about the vertical axis, radians. */
  ry?: number;
  /** Fit the longest horizontal side to this length… */
  length?: number;
  /** …or the height to this. */
  height?: number;
  /** Swap one material's base colour, by material name. */
  recolor?: Record<string, string>;
  /**
   * Seconds into the model's first animation clip. Driven by the frame,
   * never by a clock, so every frame renders the same way twice.
   */
  time?: number;
}> = ({ file, x = 0, y = 0, z = 0, ry = 0, length, height, recolor, time }) => {
  const mirror = useMirror();
  const gltf = ready.get(file) ?? null;
  const fitted = useMemo(() => {
    if (!gltf) return null;
    // SkeletonUtils, not Object3D.clone: a plain clone of a rigged figure
    // keeps pointing at the original's bones.
    const root = cloneRigged(gltf.scene);
    // FBX exports bring their lights and cameras along.
    const strays: THREE.Object3D[] = [];
    root.traverse((o) => {
      if ((o as THREE.Light).isLight || (o as THREE.Camera).isCamera) strays.push(o);
    });
    strays.forEach((o) => o.parent?.remove(o));
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const k = height ? height / size.y : length ? length / Math.max(size.x, size.z) : 1;
    const centre = box.getCenter(new THREE.Vector3());
    const holder = new THREE.Group();
    root.position.set(-centre.x * k, -box.min.y * k, -centre.z * k);
    root.scale.setScalar(k);
    holder.add(root);
    holder.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const swap = (m: THREE.Material) => {
        const base = m.clone() as THREE.MeshStandardMaterial;
        const tint = recolor?.[m.name];
        if (tint && base.color) {
          base.color.set(tint);
          base.map = null;
        }
        base.dithering = true;
        // Real refraction costs a whole extra pass per frame on a CPU
        // renderer; tinted, see-through glass reads the same at this size.
        const phys = base as THREE.MeshPhysicalMaterial;
        if (phys.transmission > 0) {
          phys.transmission = 0;
          phys.transparent = true;
          phys.opacity = 0.45;
          phys.color.set("#1A1C1F");
          phys.roughness = 0.05;
        }
        base.clippingPlanes = [ABOVE];
        if (!mirror) return base;
        const r = mirrored(base) as THREE.MeshStandardMaterial;
        r.clippingPlanes = [BELOW];
        return r;
      };
      mesh.material = Array.isArray(mesh.material) ? mesh.material.map(swap) : swap(mesh.material);
      mesh.castShadow = !mirror;
      mesh.receiveShadow = !mirror;
    });
    const clip = gltf.animations[0];
    const mixer = clip ? new THREE.AnimationMixer(root) : null;
    if (mixer && clip) mixer.clipAction(clip).play();
    return { holder, mixer, clip };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gltf, mirror, length, height, JSON.stringify(recolor ?? {})]);
  if (!fitted) return null;
  if (fitted.mixer && fitted.clip && time !== undefined) {
    fitted.mixer.setTime(time % fitted.clip.duration);
  }
  return <primitive object={fitted.holder} position={[x, y, z]} rotation={[0, ry, 0]} />;
};
