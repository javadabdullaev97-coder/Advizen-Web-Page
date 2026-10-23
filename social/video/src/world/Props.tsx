/**
 * The objects the UBO film is told with.
 *
 * Every one of them is built from the same few studio finishes as the
 * blocks — ceramic, anodised red, graphite, tinted glass — so the car, the
 * nested companies and the parcel read as one designed set, not as clip
 * art from different places. All of them are pure functions of props;
 * the film moves them, they never move themselves.
 */

import React, { useMemo } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

import { ACCENT } from "../theme";
import { Model } from "./Model";
import { Edges, Print, Tone, useFinish, useGlow, useMirror } from "./World";

const rounded = new Map<string, THREE.BufferGeometry>();
/** Rounded boxes are cached by size: the film builds the same ones a lot. */
const box = (w: number, h: number, d: number, r = 0.06, seg = 4) => {
  const k = [w, h, d, r, seg].map((n) => n.toFixed(3)).join("|");
  let g = rounded.get(k);
  if (!g) {
    g = new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2, h / 2, d / 2));
    rounded.set(k, g);
  }
  return g;
};

const outlines = new Map<string, THREE.BufferGeometry>();
/**
 * A sharp box of the same size, for outlines. A rounded box has no edge
 * steep enough to count as one, so its outline comes out as eight dots.
 */
const outline = (w: number, h: number, d: number) => {
  const k = [w, h, d].map((n) => n.toFixed(3)).join("|");
  let g = outlines.get(k);
  if (!g) {
    g = new THREE.BoxGeometry(w, h, d);
    outlines.set(k, g);
  }
  return g;
};

const BODY = new THREE.CapsuleGeometry(0.2, 0.36, 8, 24);
const HEAD = new THREE.SphereGeometry(0.165, 40, 20);
const PUCK = new THREE.CylinderGeometry(0.3, 0.3, 0.09, 48);

// ── the person ───────────────────────────────────────────────────────

/**
 * The one human in every chain: a small figure in Advizen red that is its
 * own light source, so it reads as "the answer" wherever it appears.
 */
export const Person: React.FC<{
  x?: number;
  z?: number;
  y?: number;
  scale?: number;
  glow?: number;
  opacity?: number;
}> = ({ x = 0, z = 0, y = 0, scale = 1, glow = 0.6, opacity = 1 }) => {
  const mirror = useMirror();
  const m = useGlow(ACCENT, glow, opacity);
  const pool = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: ACCENT,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        map: radial(),
      }),
    [],
  );
  pool.opacity = Math.min(1, glow) * 0.55 * opacity;
  if (opacity <= 0.001) return null;
  return (
    <group position={[x, y, z]} scale={scale}>
      <mesh geometry={BODY} material={m} position={[0, 0.38, 0]} castShadow={!mirror} />
      <mesh geometry={HEAD} material={m} position={[0, 0.985, 0]} castShadow={!mirror} />
      {mirror ? null : (
        <mesh material={pool} position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
        </mesh>
      )}
    </group>
  );
};

let radialTex: THREE.CanvasTexture | null = null;
/** A soft round falloff, for light pooled on the floor. */
const radial = () => {
  if (radialTex) return radialTex;
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.35, "rgba(255,255,255,0.35)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  radialTex = new THREE.CanvasTexture(c);
  return radialTex;
};

// ── one layer of the matryoshka ──────────────────────────────────────

/**
 * A company as a closed box. Opening it lifts it clear and dissolves the
 * solid into its outline, so the layer is still there — documented, seen
 * through — rather than gone.
 */
export const Shell: React.FC<{
  w: number;
  h: number;
  d: number;
  x?: number;
  z?: number;
  /** Height above the floor. Negative sinks it through the floor. */
  lift?: number;
  /** 1 = a solid box, 0 = only its outline. */
  solid?: number;
  edges?: number;
  edgeColor?: string;
  tone?: Tone;
  label?: string;
  labelOpacity?: number;
}> = ({
  w,
  h,
  d,
  x = 0,
  z = 0,
  lift = 0,
  solid = 1,
  edges = 0,
  edgeColor,
  tone = "ceramic",
  label,
  labelOpacity = 1,
}) => {
  const mirror = useMirror();
  const g = box(w, h, d, 0.06, 4);
  const m = useFinish(tone, tone, 0, solid);
  return (
    <group position={[x, h / 2 + lift, z]}>
      {solid > 0.001 ? (
        <mesh geometry={g} material={m} castShadow={!mirror && solid > 0.6} receiveShadow={!mirror && solid > 0.6} />
      ) : null}
      <Edges geometry={outline(w, h, d)} opacity={edges} color={edgeColor} />
      {label ? (
        <Print
          text={label}
          tone={tone}
          width={Math.min(w * 0.62, 1.7)}
          position={[0, 0, d / 2 + 0.004]}
          // Only a solid face carries its name: through glass, the names
          // of the layers behind pile up into noise.
          opacity={labelOpacity * Math.max(0, Math.min(1, (solid - 0.75) / 0.2))}
        />
      ) : null}
    </group>
  );
};

// ── paperwork ────────────────────────────────────────────────────────

let docTex: THREE.CanvasTexture | null = null;
/** Ruled lines and a heading bar, so a white card reads as a document. */
const docLines = () => {
  if (docTex) return docTex;
  const c = document.createElement("canvas");
  c.width = 384;
  c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "#8D8780";
  g.fillRect(48, 56, 180, 26);
  g.fillStyle = "#B4AEA6";
  for (let i = 0; i < 9; i++) g.fillRect(48, 130 + i * 38, i % 3 === 2 ? 170 : 288, 12);
  g.fillStyle = ACCENT;
  g.fillRect(48, 470, 70, 10);
  docTex = new THREE.CanvasTexture(c);
  docTex.colorSpace = THREE.SRGBColorSpace;
  docTex.anisotropy = 8;
  return docTex;
};

/** A document lying flat. */
export const Doc: React.FC<{ x: number; y?: number; z: number; ry?: number; scale?: number }> = ({
  x,
  y = 0,
  z,
  ry = 0,
  scale = 1,
}) => {
  const mirror = useMirror();
  const paper = useFinish("ceramic");
  const ink = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: docLines(),
        transparent: true,
        roughness: 0.6,
        polygonOffset: true,
        polygonOffsetFactor: -2,
      }),
    [],
  );
  return (
    <group position={[x, y + 0.016 * scale, z]} rotation={[0, ry, 0]} scale={scale}>
      <mesh geometry={box(0.9, 0.032, 1.2, 0.014, 2)} material={paper} castShadow={!mirror} receiveShadow={!mirror} />
      {mirror ? null : (
        <mesh material={ink} position={[0, 0.0175, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.84, 1.12]} />
        </mesh>
      )}
    </group>
  );
};

// ── the parcel and the courier ───────────────────────────────────────

/** A ceramic box with red tape round it: unmistakably a parcel. */
export const Parcel: React.FC<{ x: number; z?: number; y?: number }> = ({ x, z = 0, y = 0 }) => {
  const mirror = useMirror();
  const card = useFinish("ceramic");
  const tape = useFinish("red");
  const cast = !mirror;
  return (
    <group position={[x, y + 0.36, z]}>
      <mesh geometry={box(1.0, 0.72, 0.86, 0.05, 4)} material={card} castShadow={cast} receiveShadow={cast} />
      <mesh geometry={box(1.014, 0.734, 0.14, 0.02, 2)} material={tape} />
      <mesh geometry={box(0.14, 0.734, 0.874, 0.02, 2)} material={tape} />
    </group>
  );
};

let edgeTex: THREE.CanvasTexture | null = null;
/** The side of a stack of notes: hundreds of paper edges. */
const paperEdges = () => {
  if (edgeTex) return edgeTex;
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#E7E5DA";
  g.fillRect(0, 0, 64, 256);
  for (let y = 0; y < 256; y += 4) {
    g.fillStyle = y % 12 === 0 ? "#C9C6B6" : "#D8D5C8";
    g.fillRect(0, y, 64, 1);
  }
  edgeTex = new THREE.CanvasTexture(c);
  edgeTex.colorSpace = THREE.SRGBColorSpace;
  return edgeTex;
};

const BILL = "models/bill.glb";
/** A US note is 156 × 66 mm. */
const NOTE = 0.07 / 0.16;
/** The scan is warm; under the warm key it goes pink. Pulled back towards the note's grey-green. */
const NOTE_TINT = "#DCE6DA";

/**
 * Money, unmistakably: a strapped bundle of notes with a loose one on top.
 * The note itself is the glTF (models/bill.glb); the stack under it is
 * paper edges, the strap is the house red.
 */
export const Cash: React.FC<{ x?: number; z?: number; y?: number; length?: number; ry?: number }> = ({
  x = 0,
  z = 0,
  y = 0,
  length = 1.1,
  ry = 0,
}) => {
  const mirror = useMirror();
  const tape = useFinish("red");
  const d = length * NOTE;
  const h = length * 0.13;
  const edges = useMemo(
    () => new THREE.MeshStandardMaterial({ map: paperEdges(), roughness: 0.9, metalness: 0, dithering: true }),
    [],
  );
  return (
    <group position={[x, y, z]} rotation={[0, ry, 0]}>
      <mesh position={[0, h / 2, 0]} material={edges} castShadow={!mirror} receiveShadow={!mirror}>
        <boxGeometry args={[length * 0.985, h, d * 0.97]} />
      </mesh>
      {/* Turned so the portrait is the right way up from the front. */}
      <Model file={BILL} length={length} y={h} ry={Math.PI} tint={NOTE_TINT} />
      <mesh position={[0, h / 2 + 0.004, 0]} material={tape}>
        <boxGeometry args={[length * 0.17, h + 0.016, d + 0.016]} />
      </mesh>
      {/* The loose note on top, knocked a little out of line. */}
      <Model file={BILL} length={length} y={h + 0.02} x={length * 0.05} z={-d * 0.04} ry={Math.PI - 0.14} tint={NOTE_TINT} />
    </group>
  );
};

// ── signals ──────────────────────────────────────────────────────────

/** A payment in flight: a disc of light. */
export const Puck: React.FC<{ x: number; z?: number; glow?: number }> = ({ x, z = 0, glow = 1 }) => {
  const m = useGlow("#FFF4E6", 0.2 + glow * 1.6);
  return <mesh geometry={PUCK} material={m} position={[x, 0.045, z]} />;
};

/** A red slab that comes up through the floor across the path. */
export const Barrier: React.FC<{ x: number; z?: number; up: number }> = ({ x, z = 0, up }) => {
  const mirror = useMirror();
  const m = useFinish("red");
  if (up <= 0.001) return null;
  return (
    <mesh
      geometry={box(0.16, 1.1, 1.8, 0.04, 3)}
      material={m}
      position={[x, -0.55 + 1.1 * up, z]}
      castShadow={!mirror}
    />
  );
};

/**
 * The bank's look: a sheet of light sweeping through an object, like an
 * airport scanner. Not reflected — it is light, not a thing.
 */
export const Scan: React.FC<{ x: number; z?: number; h: number; d: number; strength: number }> = ({
  x,
  z = 0,
  h,
  d,
  strength,
}) => {
  const mirror = useMirror();
  if (mirror || strength <= 0.001) return null;
  return (
    <group position={[x, h / 2, z]}>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[d, h]} />
        <meshBasicMaterial
          color="#FFF4E6"
          transparent
          opacity={0.16 * strength}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[d, 0.025]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={strength} toneMapped={false} />
      </mesh>
    </group>
  );
};

// ── the chain on one sheet ───────────────────────────────────────────

/** A sheet of paper, big enough to lay a whole ownership chain out on. */
export const Sheet: React.FC<{ x?: number; z?: number; w: number; d: number }> = ({
  x = 0,
  z = 0,
  w,
  d,
}) => {
  const mirror = useMirror();
  const m = useFinish("ceramic");
  return (
    <mesh
      geometry={box(w, 0.05, d, 0.02, 2)}
      material={m}
      position={[x, 0.025, z]}
      receiveShadow={!mirror}
      castShadow={!mirror}
    />
  );
};

/**
 * A red rule drawn across a surface from one point to another, `draw`
 * of the way. Flat on whatever height it is given.
 */
export const Rule: React.FC<{
  from: [number, number];
  to: [number, number];
  y: number;
  draw: number;
  width?: number;
}> = ({ from, to, y, draw, width = 0.06 }) => {
  const mirror = useMirror();
  if (mirror || draw <= 0.001) return null;
  const dx = to[0] - from[0];
  const dz = to[1] - from[1];
  const len = Math.hypot(dx, dz) * Math.min(1, draw);
  const ang = Math.atan2(dz, dx);
  const cx = from[0] + Math.cos(ang) * (len / 2);
  const cz = from[1] + Math.sin(ang) * (len / 2);
  return (
    <mesh position={[cx, y, cz]} rotation={[-Math.PI / 2, 0, -ang]}>
      <planeGeometry args={[len, width]} />
      <meshBasicMaterial color={ACCENT} toneMapped={false} />
    </mesh>
  );
};
