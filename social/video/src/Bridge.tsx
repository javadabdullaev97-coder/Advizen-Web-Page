/**
 * The line-carry: the piece's one signature transition.
 *
 * Every other handoff in the reel is a cut or a push. This one does not
 * change scene at all — a line already on screen extends, the camera
 * follows it, it turns a right angle, and it draws the rule that the
 * next beat's term sits on. The audience's eye never leaves it, so the
 * graphic continuity *is* the transition.
 *
 * The line has to mean something or it is decoration. Here it is the
 * base the two shares stand on — which sits exactly on the room's
 * horizon — so the thread runs from the company whose sale just died to
 * the clause that would have saved it.
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
import { Bar, BAR_W, LANE_Y, BAR_H, FILL, Legend } from "./Bar";

// World coordinates. The camera shows 0…1080, then travels to 1080…2160.
const BASE_Y = LANE_Y + BAR_H; // the bar's base, on the horizon
const TURN_X = MARGIN + 1080; // where the line turns up, in world space
const RUN_END = MARGIN + 1080 + 888; // the far end of the term's rule
const CAM = 1080;

const ease = Easing.bezier(0.65, 0, 0.35, 1);
const swift = Easing.bezier(0.33, 0, 0.12, 1);

export const Bridge: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();

  // Phase 1 — the base extends out of the bar, to the right.
  const ext = interpolate(frame, [8, 26], [MARGIN + BAR_W, TURN_X], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: swift,
  });
  // Phase 2 — hard right angle, climbing to the rule's height.
  const climb = interpolate(frame, [26, 38], [BASE_Y, RULE_Y], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  // Phase 3 — the rule draws itself across the measure.
  const run = interpolate(frame, [38, 66], [TURN_X, RUN_END], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  // The camera is driven off the pen, not off its own curve, which is
  // what keeps the head pinned instead of drifting.
  const pen =
    frame < 26
      ? { x: ext, y: BASE_Y }
      : frame < 38
        ? { x: TURN_X, y: climb }
        : { x: run, y: RULE_Y };
  const cam = Math.min(CAM, Math.max(0, pen.x - 830));

  const headOut = interpolate(frame, [66, 76], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, overflow: "hidden" }}>
      <Room />
      <AbsoluteFill
        style={{
          opacity: interpolate(frame, [38, 72], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <Room light />
      </AbsoluteFill>
      <AbsoluteFill style={{ transform: `translateX(${-cam}px)` }}>
        <div
          style={{
            opacity: interpolate(frame, [0, 22], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <Bar minorColor={FILL.accent} />
          <Legend delay={-20} />
        </div>
        <svg
          width={2160}
          height={1920}
          viewBox="0 0 2160 1920"
          style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}
        >
          <line
            x1={MARGIN}
            y1={BASE_Y}
            x2={ext}
            y2={BASE_Y}
            stroke={ACCENT}
            strokeWidth={3}
            strokeLinecap="butt"
          />
          {frame >= 26 ? (
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
          {frame >= 38 ? (
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
            <circle
              cx={pen.x}
              cy={pen.y}
              r={7}
              fill={ACCENT}
              opacity={headOut}
            />
          ) : null}
        </svg>
      </AbsoluteFill>
      <Lockup
        instant
        dark={interpolate(frame, [38, 72], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }) > 0.5}
      />
      <Finish />
    </AbsoluteFill>
  );
};
