/**
 * Uzbekistan as a ceramic plate on the studio floor.
 *
 * Every region is its own slab, so one can be lifted or warmed without
 * the rest; the seams between them are drawn on the top face. The
 * outline is Natural Earth (public domain), built into uzbekistan.json by
 * scripts/uzbekistan_map.py — x runs east, z runs south.
 */

import React, { useMemo } from "react";
import * as THREE from "three";

import data from "./uzbekistan.json";
import { ABOVE, BELOW, mirrored, useFinish, useMirror } from "./World";

type Ring = number[][];
type Region = { name: string; parts: Ring[][] };

const REGIONS = data.regions as Region[];
export const CITY = data.cities as unknown as Record<string, [number, number]>;
export const MAP_W = data.width;
export const MAP_D = data.depth;

const THICK = 0.12;

/** A city's point on a map drawn at `scale` and placed at `at`. */
export const cityAt = (name: string, scale = 1, at: [number, number] = [0, 0]): [number, number] => {
  const [x, z] = CITY[name];
  return [at[0] + x * scale, at[1] + z * scale];
};

const shapeOf = (part: Ring[]) => {
  // Shapes are drawn in x/y and stood on the floor by turning them over
  // x: shape y becomes world -z, so z is negated here to land the right
  // way round.
  const toVec = (r: Ring) => r.map(([x, z]) => new THREE.Vector2(x, -z));
  const shape = new THREE.Shape(toVec(part[0]));
  part.slice(1).forEach((hole) => shape.holes.push(new THREE.Path(toVec(hole))));
  return shape;
};

const geometryCache = new Map<string, THREE.ExtrudeGeometry>();
const regionGeometry = (r: Region) => {
  let g = geometryCache.get(r.name);
  if (!g) {
    g = new THREE.ExtrudeGeometry(r.parts.map(shapeOf), { depth: THICK, bevelEnabled: false });
    g.rotateX(-Math.PI / 2);
    geometryCache.set(r.name, g);
  }
  return g;
};

const seamCache = new Map<string, THREE.BufferGeometry>();
const seamGeometry = (r: Region) => {
  let g = seamCache.get(r.name);
  if (!g) {
    const pts: number[] = [];
    r.parts.forEach((part) =>
      part.forEach((ring) => {
        for (let i = 0; i < ring.length - 1; i++) {
          pts.push(ring[i][0], THICK + 0.003, ring[i][1], ring[i + 1][0], THICK + 0.003, ring[i + 1][1]);
        }
      }),
    );
    g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    seamCache.set(r.name, g);
  }
  return g;
};

const Slab: React.FC<{ region: Region; lift: number; warm: number; seam: string }> = ({
  region,
  lift,
  warm,
  seam,
}) => {
  const mirror = useMirror();
  const m = useFinish("ceramic", "red", warm);
  const line = useMemo(() => {
    const base = new THREE.LineBasicMaterial({ color: seam, transparent: true, opacity: 0.7 });
    base.clippingPlanes = [ABOVE];
    if (!mirror) return base;
    const r = mirrored(base);
    r.clippingPlanes = [BELOW];
    return r;
  }, [mirror, seam]);
  return (
    <group position={[0, lift, 0]}>
      <mesh geometry={regionGeometry(region)} material={m} castShadow={!mirror} receiveShadow={!mirror} />
      <lineSegments geometry={seamGeometry(region)} material={line} />
    </group>
  );
};

export const UzMap: React.FC<{
  x?: number;
  z?: number;
  /** 1 = MAP_W units wide. */
  scale?: number;
  /** Per-region lift above the plate, world units, by region name. */
  lift?: Record<string, number>;
  /** Per-region warmth towards the house red, 0–1, by region name. */
  warm?: Record<string, number>;
  /** Warmth for every region, under the per-region values. */
  warmAll?: number;
  seam?: string;
}> = ({ x = 0, z = 0, scale = 1, lift = {}, warm = {}, warmAll = 0, seam = "#8E877E" }) => (
  <group position={[x, 0, z]} scale={[scale, 1, scale]}>
    {REGIONS.map((r) => (
      <Slab key={r.name} region={r} lift={lift[r.name] ?? 0} warm={Math.max(warmAll, warm[r.name] ?? 0)} seam={seam} />
    ))}
  </group>
);

export const REGION_NAMES = REGIONS.map((r) => r.name);
