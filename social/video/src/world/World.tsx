/**
 * The shares as physical objects in a lit studio.
 *
 * The flat cut drew the holdings as rectangles, and no amount of
 * gradient made them look like anything but rectangles. Product films
 * get their look from three things a 2D comp cannot fake, so this
 * builds all three for real:
 *
 *   * Studio reflections. The environment is a dark room with softboxes
 *     in it, so every chamfer carries a long specular highlight — the
 *     thing the eye reads as "machined".
 *   * A floor that grounds them: a key-light pool, a soft shadow and a
 *     fading mirror reflection, falling off into fog so the floor never
 *     shows an edge.
 *   * A long lens with a shifted, not tilted, camera — compressed
 *     perspective and straight verticals.
 *
 * Everything here is a pure function of props. No `useFrame`: Remotion
 * renders frames out of order and in parallel, so any state the canvas
 * kept for itself would flicker.
 */

import React, { useEffect, useMemo, useState } from "react";
import { ThreeCanvas } from "@remotion/three";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { continueRender, delayRender } from "remotion";

import { ACCENT, BG, FONT, H, W } from "../theme";
import { applyPose, Pose } from "./camera";

// ── the objects' fixed geometry, in world units ──────────────────────

export const BAR_L = 5;
export const BLOCK_H = 1;
export const BLOCK_D = 1.5;
export const GAP = 0.14;
export const MAJOR_L = (BAR_L - GAP) * 0.7;
export const MINOR_L = (BAR_L - GAP) * 0.3;
/** Centre of each block in its seat. */
export const MAJOR_X = -BAR_L / 2 + MAJOR_L / 2;
export const MINOR_X = BAR_L / 2 - MINOR_L / 2;
/** The buyer's footprint: the whole company's shape, outlined in light. */
export const PAD_L = BAR_L + 0.36;
export const PAD_D = BLOCK_D + 0.36;

export type Tone = "ceramic" | "red" | "graphite";

export type BlockState = {
  id: string;
  /** Centre x. */
  x: number;
  /** Base height; negative sinks the block through the floor. */
  y?: number;
  z?: number;
  len: number;
  tone: Tone;
  /** Finish the block is turning into, and how far along it is. */
  toneTo?: Tone;
  mix?: number;
  label?: string;
  labelOpacity?: number;
};

export type PadState = {
  x: number;
  z?: number;
  /** 0 = dark, 1 = lit. */
  on: number;
  /** How much of the footprint is claimed: brightens the panel. */
  fill?: number;
  /** The deal dying: the outline turns red and drops out. */
  alarm?: number;
  /** The whole company's silhouette standing on the pad: what is wanted. */
  ghost?: number;
};

// ── materials ────────────────────────────────────────────────────────

type Finish = {
  color: string;
  roughness: number;
  metalness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  envMapIntensity: number;
};

/**
 * Ceramic for the larger holding, anodised red for the smaller, graphite
 * for the stranger. Three finishes, so a change of owner is a change of
 * material and not just of colour.
 */
const FINISH: Record<Tone, Finish> = {
  ceramic: {
    color: "#E8E3DB",
    roughness: 0.38,
    metalness: 0,
    clearcoat: 0.45,
    clearcoatRoughness: 0.22,
    envMapIntensity: 0.9,
  },
  red: {
    color: ACCENT,
    roughness: 0.3,
    metalness: 0.42,
    clearcoat: 1,
    clearcoatRoughness: 0.07,
    envMapIntensity: 1.15,
  },
  graphite: {
    color: "#2C2B2A",
    roughness: 0.42,
    metalness: 0.65,
    clearcoat: 0.6,
    clearcoatRoughness: 0.18,
    envMapIntensity: 1,
  },
};

const ca = new THREE.Color();
const cb = new THREE.Color();
/** Blend two finishes in place, so a block can change hands on screen. */
const paint = (m: THREE.MeshPhysicalMaterial, a: Tone, b: Tone, t: number) => {
  const A = FINISH[a];
  const B = FINISH[b];
  const l = (x: number, y: number) => x + (y - x) * t;
  m.color.copy(ca.set(A.color)).lerp(cb.set(B.color), t);
  m.roughness = l(A.roughness, B.roughness);
  m.metalness = l(A.metalness, B.metalness);
  m.clearcoat = l(A.clearcoat, B.clearcoat);
  m.clearcoatRoughness = l(A.clearcoatRoughness, B.clearcoatRoughness);
  m.envMapIntensity = l(A.envMapIntensity, B.envMapIntensity);
};

/**
 * The mirrored copy under the floor. Same surface, darkened with depth
 * below the floor plane, so the reflection is strong at the contact line
 * and gone a block-height down — the way a polished floor behaves.
 */
const mirrored = (base: THREE.Material) => {
  const m = base.clone();
  m.side = THREE.DoubleSide;
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying float vDepth;")
      .replace(
        "#include <project_vertex>",
        "#include <project_vertex>\nvDepth = (modelMatrix * vec4(transformed, 1.0)).y;",
      );
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vDepth;")
      .replace(
        "#include <dithering_fragment>",
        "#include <dithering_fragment>\n  gl_FragColor.rgb *= 0.5 * smoothstep(-1.05, 0.0, vDepth);",
      );
  };
  return m;
};

// ── type printed on a face ───────────────────────────────────────────

const labelCache = new Map<string, THREE.CanvasTexture>();

const labelTexture = (text: string, ink: string) => {
  const key = `${text}|${ink}`;
  const hit = labelCache.get(key);
  if (hit) return hit;
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 384;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = ink;
  ctx.font = `800 300px ${FONT}`;
  (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "-6px";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(text, 512, 300);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  labelCache.set(key, tex);
  return tex;
};

const LABEL_INK: Record<Tone, string> = {
  ceramic: "#24211E",
  red: "#FBF5EE",
  graphite: "#B9B3AC",
};

/** Waits for the brand face before any label is drawn into a canvas. */
const useFont = () => {
  const [ready, setReady] = useState(false);
  const [handle] = useState(() => delayRender("label font"));
  useEffect(() => {
    document.fonts
      .load(`800 300px ${FONT}`)
      .then(() => {
        setReady(true);
        continueRender(handle);
      })
      .catch(() => continueRender(handle));
  }, [handle]);
  return ready;
};

// ── one block ────────────────────────────────────────────────────────

const geometryCache = new Map<string, THREE.BufferGeometry>();
const slab = (len: number) => {
  const key = len.toFixed(3);
  let g = geometryCache.get(key);
  if (!g) {
    g = new RoundedBoxGeometry(len, BLOCK_H, BLOCK_D, 5, 0.07);
    geometryCache.set(key, g);
  }
  return g;
};

const ABOVE = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const BELOW = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);

const Block: React.FC<{ b: BlockState; font: boolean; mirror?: boolean }> = ({
  b,
  font,
  mirror = false,
}) => {
  const surface = useMemo(() => {
    // Dithered: the near-black falloffs band badly once encoded.
    const m = new THREE.MeshPhysicalMaterial({ dithering: true });
    m.clippingPlanes = [ABOVE];
    return (
      mirror ? Object.assign(mirrored(m), { clippingPlanes: [BELOW] }) : m
    ) as THREE.MeshPhysicalMaterial;
  }, [mirror]);
  paint(surface, b.tone, b.toneTo ?? b.tone, b.mix ?? 0);
  const print = useMemo(() => {
    // The reflection carries the slab but not the print: mirrored digits
    // sat right under the labels and read as a second, garbled number.
    if (!b.label || !font || mirror) return null;
    const m = new THREE.MeshStandardMaterial({
      map: labelTexture(b.label, LABEL_INK[(b.mix ?? 0) > 0.5 ? b.toneTo ?? b.tone : b.tone]),
      transparent: true,
      roughness: 0.5,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
    m.clippingPlanes = [ABOVE];
    return mirror ? Object.assign(mirrored(m), { clippingPlanes: [BELOW] }) : m;
  }, [b.label, b.tone, b.toneTo, (b.mix ?? 0) > 0.5, font, mirror]);
  if (print) print.opacity = b.labelOpacity ?? 1;
  const y = (b.y ?? 0) + BLOCK_H / 2;
  const labelW = Math.min(b.len * 0.78, 1.5);
  return (
    <group position={[b.x, mirror ? -y : y, b.z ?? 0]} scale={[1, mirror ? -1 : 1, 1]}>
      <mesh geometry={slab(b.len)} material={surface} castShadow={!mirror} receiveShadow={!mirror} />
      {print ? (
        <mesh position={[0, -0.02, BLOCK_D / 2 + 0.003]} material={print}>
          <planeGeometry args={[labelW, labelW * 0.375]} />
        </mesh>
      ) : null}
    </group>
  );
};

// ── the buyer's footprint ────────────────────────────────────────────

const SILHOUETTE = new THREE.BoxGeometry(BAR_L, BLOCK_H, BLOCK_D);

const Pad: React.FC<{ p: PadState }> = ({ p }) => {
  const fill = p.fill ?? 0;
  const alarm = p.alarm ?? 0;
  const ghost = p.ghost ?? 0;
  const edge = useMemo(() => new THREE.Color(), []);
  edge.set("#FFF6EC").lerp(new THREE.Color(ACCENT), alarm);
  // Emissive past 1.0 so the outline reads as a light source, not paint.
  const k = p.on * (1.6 + fill * 1.2) * (1 - alarm * 0.55);
  // Strips across the line of sight are foreshortened by the camera's
  // elevation, so they are drawn deeper to read the same weight as the
  // sides.
  const strip = (w: number, d: number, x: number, z: number, key: string) => (
    <mesh key={key} position={[x, 0.006, z]} rotation={[-Math.PI / 2, 0, 0]} renderOrder={2}>
      <planeGeometry args={[w, d]} />
      <meshBasicMaterial color={edge.clone().multiplyScalar(k)} toneMapped={false} transparent opacity={Math.min(1, p.on)} />
    </mesh>
  );
  const t = 0.035;
  const across = 0.1;
  return (
    <group position={[p.x, 0, p.z ?? 0]}>
      {strip(PAD_L + t, across, 0, PAD_D / 2, "f")}
      {strip(PAD_L + t, across, 0, -PAD_D / 2, "b")}
      {strip(t, PAD_D, -PAD_L / 2, 0, "l")}
      {strip(t, PAD_D, PAD_L / 2, 0, "r")}
      <mesh position={[0, 0.004, 0]} rotation={[-Math.PI / 2, 0, 0]} renderOrder={2}>
        <planeGeometry args={[PAD_L, PAD_D]} />
        <meshBasicMaterial
          color={edge}
          transparent
          opacity={p.on * (0.05 + fill * 0.1) * (1 - alarm * 0.7)}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {ghost > 0 ? (
        <lineSegments position={[0, BLOCK_H / 2 + 0.01, 0]} renderOrder={2}>
          <edgesGeometry args={[SILHOUETTE]} />
          <lineBasicMaterial color={edge} transparent opacity={ghost * 0.55 * (1 - alarm)} toneMapped={false} />
        </lineSegments>
      ) : null}
    </group>
  );
};

// ── the studio ───────────────────────────────────────────────────────

/** A black room with softboxes in it, baked into an environment map. */
const Studio: React.FC = () => {
  const { gl, scene } = useThree();
  useMemo(() => {
    const room = new THREE.Scene();
    room.add(
      new THREE.Mesh(
        new THREE.BoxGeometry(40, 20, 40),
        new THREE.MeshBasicMaterial({ color: 0x030303, side: THREE.BackSide }),
      ),
    );
    const panel = (w: number, h: number, pos: [number, number, number], rot: [number, number, number], k: number) => {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(k, k * 0.97, k * 0.93), side: THREE.DoubleSide }),
      );
      m.position.set(...pos);
      m.rotation.set(...rot);
      room.add(m);
    };
    panel(16, 7, [0, 9.8, 2], [Math.PI / 2, 0, 0], 3.2); // overhead box
    panel(2.4, 12, [-15, 3, 6], [0, Math.PI / 2, 0], 7); // key-side strip
    panel(1.6, 12, [15, 3, -2], [0, -Math.PI / 2, 0], 3.5); // fill-side strip
    panel(30, 1.4, [0, 1.2, -19.5], [0, 0, 0], 4); // low back strip, for rims
    panel(10, 2, [0, 2, 19.5], [0, Math.PI, 0], 0.6); // faint front bounce
    const pm = new THREE.PMREMGenerator(gl);
    scene.environment = pm.fromScene(room, 0.03).texture;
    pm.dispose();
  }, [gl, scene]);
  return null;
};

/** Applies the pose and renderer settings every frame, before the draw. */
const Rig: React.FC<{ pose: Pose }> = ({ pose }) => {
  const { camera, gl } = useThree();
  gl.toneMapping = THREE.NeutralToneMapping;
  gl.toneMappingExposure = 1;
  gl.localClippingEnabled = true;
  applyPose(camera as THREE.PerspectiveCamera, pose);
  return null;
};

export const World: React.FC<{
  pose: Pose;
  blocks: BlockState[];
  pad?: PadState;
  /** The x the key light is aimed at: the light follows "you". */
  focus?: number;
  focusZ?: number;
}> = ({ pose, blocks, pad, focus = 0, focusZ = 0 }) => {
  const font = useFont();
  const target = useMemo(() => new THREE.Object3D(), []);
  target.position.set(focus, 0.4, focusZ);
  target.updateMatrixWorld();
  return (
    <ThreeCanvas
      width={W}
      height={H}
      shadows
      gl={{ antialias: true, alpha: false }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={[BG]} />
      <fog attach="fog" args={[BG, pose.dist + 2, pose.dist + 26]} />
      <Studio />
      <Rig pose={pose} />
      <primitive object={target} />
      <spotLight
        position={[focus - 4, 10, focusZ + 7]}
        target={target}
        angle={0.42}
        penumbra={1}
        intensity={420}
        decay={2}
        color="#FFF3E6"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.00025}
        shadow-normalBias={0.02}
        shadow-radius={6}
      />
      <directionalLight position={[6, 4, -9]} intensity={2.2} color="#FFE2D2" />
      <hemisphereLight args={["#ffffff", "#000000", 0.12]} />
      {blocks.map((b) => (
        <React.Fragment key={b.id}>
          <Block b={b} font={font} />
          <Block b={b} font={font} mirror />
        </React.Fragment>
      ))}
      {pad ? <Pad p={pad} /> : null}
      {/* Polished dark floor, laid over the reflections. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow renderOrder={1}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#0D0C0B" roughness={0.42} metalness={0} transparent opacity={0.8} dithering />
      </mesh>
    </ThreeCanvas>
  );
};
