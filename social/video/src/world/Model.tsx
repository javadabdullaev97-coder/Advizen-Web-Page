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
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { cancelRender, continueRender, delayRender, staticFile } from "remotion";

import { ABOVE, BELOW, mirrored, useMirror } from "./World";

const cache = new Map<string, Promise<THREE.Group>>();

const load = (file: string) => {
  let p = cache.get(file);
  if (!p) {
    p = new Promise<THREE.Group>((resolve, reject) =>
      new GLTFLoader().load(staticFile(file), (g) => resolve(g.scene), undefined, reject),
    );
    cache.set(file, p);
  }
  return p;
};

const ready = new Map<string, THREE.Group>();

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
}> = ({ file, x = 0, y = 0, z = 0, ry = 0, length, height, recolor }) => {
  const mirror = useMirror();
  const scene = ready.get(file) ?? null;
  const fitted = useMemo(() => {
    if (!scene) return null;
    const root = scene.clone(true);
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
    return holder;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, mirror, length, height, JSON.stringify(recolor ?? {})]);
  if (!fitted) return null;
  return <primitive object={fitted} position={[x, y, z]} rotation={[0, ry, 0]} />;
};
