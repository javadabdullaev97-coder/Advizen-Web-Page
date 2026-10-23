/**
 * A workplace in the studio's materials: a laptop with our own screen,
 * a plain desk, something to sit on, and the person sitting on it.
 *
 * The laptop model (models/laptop.glb) shipped with Apple's own pictures
 * on its screen and keyboard; the screen gets a code editor drawn here
 * and the keys go plain graphite, so no one else's artwork is in shot.
 */

import React, { useMemo } from "react";
import * as THREE from "three";

import { ACCENT } from "../theme";
import { Model } from "./Model";
import { Shell } from "./Props";

export const LAPTOP = "models/laptop.glb";
export const SITTING = "models/sitting-lite.glb";

/** Where the model's screen sits in its texture, in pixels of a 1024 square. */
const SCREEN = { x: 275, y: 235, w: 455, h: 595 };

const screens: Record<string, THREE.CanvasTexture> = {};
/** A dark editor: line numbers, code, one red line where the cursor is. */
const editor = (lit: boolean, probe = false) => {
  const key = `${lit}-${probe}`;
  if (screens[key]) return screens[key];
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 1024;
  const g = c.getContext("2d")!;
  g.fillStyle = "#0B0C0E";
  g.fillRect(0, 0, 1024, 1024);
  g.save();
  g.translate(SCREEN.x, SCREEN.y);
  g.fillStyle = lit ? "#15171B" : "#0E0F11";
  g.fillRect(0, 0, SCREEN.w, SCREEN.h);
  if (probe) {
    // Orientation check: red top-left, white top-right.
    g.fillStyle = "#FF0000";
    g.fillRect(0, 0, 120, 120);
    g.fillStyle = "#FFFFFF";
    g.fillRect(SCREEN.w - 120, 0, 120, 60);
  } else if (lit) {
    const rows = 22;
    for (let i = 0; i < rows; i++) {
      const y = 24 + i * ((SCREEN.h - 48) / rows);
      g.fillStyle = "#3A3E44";
      g.fillRect(14, y, 18, 10);
      const indent = [0, 1, 1, 2, 2, 1, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 2, 1, 1, 0, 1, 0][i] * 26;
      const len = [180, 260, 120, 300, 210, 90, 160, 280, 230, 140, 260, 110, 0, 200, 250, 170, 300, 120, 220, 0, 160, 90][i];
      g.fillStyle = i === 9 ? ACCENT : ["#8C8F94", "#C9C4BC", "#6E7378"][i % 3];
      g.fillRect(48 + indent, y, Math.min(len, SCREEN.w - 70 - indent), 10);
    }
  }
  g.restore();
  const t = new THREE.CanvasTexture(c);
  t.flipY = false; // glTF convention: v runs down the image
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  screens[key] = t;
  return t;
};

/** An open laptop. `lit` = the screen is on. */
export const Laptop: React.FC<{
  x?: number;
  y?: number;
  z?: number;
  ry?: number;
  length?: number;
  lit?: boolean;
  probe?: boolean;
}> = ({ x = 0, y = 0, z = 0, ry = 0, length = 0.42, lit = true, probe = false }) => {
  const maps = useMemo(() => ({ "Material.003": { map: editor(lit, probe), glow: lit ? 0.9 : 0.05 } }), [lit, probe]);
  return (
    <Model file={LAPTOP} x={x} y={y} z={z} ry={ry} length={length} maps={maps} recolor={{ "Material.001": "#1C1D20" }} />
  );
};

/** A plain desk: a ceramic top on two graphite panels. */
export const Desk: React.FC<{ x?: number; z?: number; w?: number; d?: number; h?: number; ry?: number }> = ({
  x = 0,
  z = 0,
  w = 1.3,
  d = 0.62,
  h = 0.72,
  ry = 0,
}) => (
  <group position={[x, 0, z]} rotation={[0, ry, 0]}>
    <Shell w={w} h={0.045} d={d} lift={h - 0.045} tone="ceramic" />
    <Shell x={-w / 2 + 0.06} w={0.035} h={h - 0.045} d={d - 0.08} tone="graphite" />
    <Shell x={w / 2 - 0.06} w={0.035} h={h - 0.045} d={d - 0.08} tone="graphite" />
  </group>
);

/** The seated figure on a ceramic block; `seat` is the block's height. */
export const Sitter: React.FC<{ x?: number; z?: number; ry?: number; height?: number; seat?: number }> = ({
  x = 0,
  z = 0,
  ry = 0,
  height = 1.25,
  seat = 0.5,
}) => (
  <group position={[x, 0, z]} rotation={[0, ry, 0]}>
    <Shell w={0.46} h={seat} d={0.46} z={-0.1} tone="ceramic" />
    <Model file={SITTING} height={height} />
  </group>
);
