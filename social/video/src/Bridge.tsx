/**
 * The line-carry: the piece's one signature transition.
 *
 * Every other handoff in the reel is a cut or a push. This one does not
 * change scene at all — a line already on screen extends, the camera
 * follows it, it turns a right angle, and it draws the rule that the
 * next beat's term sits on. The audience's eye never leaves it, so the
 * graphic continuity *is* the transition.
 *
 * The line has to mean something or it is decoration. Here it leaves
 * from the front edge of the bar, where the two shares meet the floor, so
 * the thread runs from the company whose sale just died to the clause
 * that would have saved it.
 *
 * Three rules from the recipe, all of them load-bearing:
 *
 *   * The pen head stays pinned near 77% of frame width. If the line
 *     outruns or lags the camera the viewer loses it, and losing the
 *     line is losing the transition.
 *   * Velocity is continuous at every junction — each phase starts and
 *     ends at zero speed, so the handoffs do not read as separate moves.
 *   * Corners are hard right angles. Rounding them loses the draughting
 *     feel the whole device is built on.
 */

import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

import { ACCENT, BG } from "./theme";
import { Finish, Lockup, MARGIN, RULE_Y, Room } from "./kit";
import { deg, Pose, project } from "./world/camera";
import {
  BAR_L,
  BLOCK_D,
  MAJOR_L,
  MAJOR_X,
  MINOR_L,
  MINOR_X,
  World,
} from "./world/World";

// Straight on, so the bar's front edge is a horizontal line the pen can
// leave along.
const POSE: Pose = {
  az: 0,
  el: deg(13),
  dist: 21.5,
  target: [0, 0.5, 0],
  fov: 30,
  shiftY: 110,
};
const EDGE = project(POSE, [BAR_L / 2, 0, BLOCK_D / 2]);

// World coordinates. The camera shows 0…1080, then travels to 1080…2160.
const BASE_Y = EDGE.y; // the bar's front edge, where it meets the floor
const TURN_X = MARGIN + 1080; // where the line turns up, in world space
const RUN_END = MARGIN + 1080 + 888; // the far end of the term's rule
const CAM = 1080;

const ease = Easing.bezier(0.65, 0, 0.35, 1);
const swift = Easing.bezier(0.33, 0, 0.12, 1);
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

export const Bridge: React.FC<{ len: number }> = () => {
  const frame = useCurrentFrame();

  // Phase 1 — the line leaves the bar's front edge, to the right.
  const ext = interpolate(frame, [4, 18], [EDGE.x, TURN_X], { ...clamp, easing: swift });
  // Phase 2 — hard right angle, climbing to the rule's height.
  const climb = interpolate(frame, [18, 27], [BASE_Y, RULE_Y], { ...clamp, easing: ease });
  // Phase 3 — the rule draws itself across the measure.
  const run = interpolate(frame, [27, 48], [TURN_X, RUN_END], { ...clamp, easing: ease });

  // The camera is driven off the pen, not off its own curve, which is
  // what keeps the head pinned instead of drifting.
  const pen =
    frame < 18
      ? { x: ext, y: BASE_Y }
      : frame < 27
        ? { x: TURN_X, y: climb }
        : { x: run, y: RULE_Y };
  const cam = Math.min(CAM, Math.max(0, pen.x - 830));

  const headOut = interpolate(frame, [48, 56], [1, 0], clamp);
  const light = interpolate(frame, [27, 52], [0, 1], clamp);

  return (
    <AbsoluteFill style={{ backgroundColor: BG, overflow: "hidden" }}>
      <Room />
      <AbsoluteFill style={{ opacity: light }}>
        <Room light />
      </AbsoluteFill>
      <AbsoluteFill style={{ transform: `translateX(${-cam}px)` }}>
        <AbsoluteFill style={{ opacity: interpolate(frame, [0, 16], [1, 0], clamp) }}>
          <World
            pose={POSE}
            focus={MAJOR_X}
            blocks={[
              { id: "major", x: MAJOR_X, len: MAJOR_L, tone: "ceramic", label: "70%" },
              { id: "minor", x: MINOR_X, len: MINOR_L, tone: "red", label: "30%" },
            ]}
          />
        </AbsoluteFill>
        <svg
          width={2160}
          height={1920}
          viewBox="0 0 2160 1920"
          style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}
        >
          <line
            x1={EDGE.x}
            y1={BASE_Y}
            x2={ext}
            y2={BASE_Y}
            stroke={ACCENT}
            strokeWidth={3}
            strokeLinecap="butt"
          />
          {frame >= 18 ? (
            <line
              x1={TURN_X}
              y1={BASE_Y}
              x2={TURN_X}
              y2={climb}
              stroke={ACCENT}
              strokeWidth={3}
              strokeLinecap="butt"
            />
          ) : null}
          {frame >= 27 ? (
            <line
              x1={TURN_X}
              y1={RULE_Y}
              x2={run}
              y2={RULE_Y}
              stroke={ACCENT}
              strokeWidth={3}
              strokeLinecap="butt"
            />
          ) : null}
          {headOut > 0 ? (
            <circle cx={pen.x} cy={pen.y} r={7} fill={ACCENT} opacity={headOut} />
          ) : null}
        </svg>
      </AbsoluteFill>
      <Lockup instant dark={light > 0.5} />
      <Finish />
    </AbsoluteFill>
  );
};
