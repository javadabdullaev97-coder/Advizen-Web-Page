/**
 * Cut-outs for the dividend chain: the same studio light and lens as the
 * 3D beats, but no room and no floor, so the objects can stand in a flat
 * diagram and still look like the rest of the film.
 *
 * Every kind is shot from one camera at one distance, so the sprites keep
 * their real sizes relative to each other and share one perspective.
 * scripts/sprites.sh renders them into public/sprites/.
 */

import React from "react";
import { AbsoluteFill } from "remotion";

import "./font";
import { deg, Pose } from "./world/camera";
import { Model } from "./world/Model";
import { Cash, Shell } from "./world/Props";
import { Scene } from "./world/World";

export type SpriteKind = "man" | "ooo" | "holding" | "hollow" | "cash";

const MAN = "models/ankit.glb";
const BILL = "models/bill.glb";
const MAN_H = 1.32;
export const CARD = { w: 1.6, h: 0.58, d: 1.0 };

const AZ = deg(24);
const pose = (y: number, el = 16): Pose => ({ az: AZ, el: deg(el), dist: 10, target: [0, y, 0], fov: 22, shiftY: 0 });

const SUBJECT: Record<SpriteKind, { y: number; el?: number; node: React.ReactNode }> = {
  // Turned to face the lens, mid-idle.
  man: { y: MAN_H / 2, node: <Model file={MAN} height={MAN_H} ry={AZ} time={2.2} /> },
  ooo: { y: CARD.h / 2, node: <Shell {...CARD} tone="ceramic" label="ООО" /> },
  holding: { y: CARD.h / 2, node: <Shell {...CARD} tone="graphite" label="ХОЛДИНГ" /> },
  // The same box with nothing inside: what the holding turns out to be.
  hollow: { y: CARD.h / 2, node: <Shell {...CARD} tone="glass" solid={0.32} edges={1} edgeColor="#ECE8E2" /> },
  // The dividend. From higher up than the rest, so the note's face reads
  // and not just the side of a stack — it is a token travelling, not a
  // thing standing on the floor with them.
  cash: { y: 0.08, el: 30, node: <Cash /> },
};

export const Sprite: React.FC<{ kind: SpriteKind }> = ({ kind }) => {
  const s = SUBJECT[kind];
  return (
    <AbsoluteFill>
      <Scene pose={pose(s.y, s.el)} cutout models={kind === "man" ? [MAN] : kind === "cash" ? [BILL] : []}>
        {s.node}
      </Scene>
    </AbsoluteFill>
  );
};
