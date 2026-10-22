/**
 * A holding drawn as a bar, and what happens to it in a sale.
 *
 * The first cut drew this as a donut. A donut can only be redrawn or
 * rotated, so every beat looked alike and the mechanism — one holder
 * taking the other out of the company with him — had no picture at all.
 * Blocks can be pushed, held back, left behind and latched onto, which
 * is the entire argument.
 *
 * Everything lives in one horizontal lane with fixed coordinates, so
 * nothing here can ever cross the type band above it. That was the other
 * failure of the first cut: the arrow moved when the grid changed and
 * landed on the headline.
 */

import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

import { ACCENT, BG, FONT, INK, PANEL, RULE, SUB } from "./theme";
import { HORIZON, MARGIN, copy } from "./kit";

// The bar stands ON the floor rather than floating above it.
export const LANE_Y = HORIZON - 150;
export const BAR_H = 150;
export const BAR_W = 440; // 96 … 536
const GAP = 14;
const BUYER_X = 660; // 660 … 900, clear of the action rail
const BUYER_W = 240;
// A block is fully gone before its leading edge could overlap the buyer:
// sliding a solid block across the box reads as a layering mistake, not
// as a sale.
const TRIP = 270;

type Seg = { from: number; width: number };

/** A lit face rather than a flat fill: light from upper left, as the room is. */
const face = (base: string, top: string, bottom: string) =>
  `linear-gradient(176deg, ${top} 0%, ${base} 52%, ${bottom} 100%)`;

export const FILL = {
  ink: face("#E9E5DE", "#F6F3ED", "#D6D1C8"),
  sub: face("#8F8982", "#A8A29A", "#766F69"),
  accent: face("#C6283A", "#DC3A4B", "#981F2E"),
};

const split = (major: number): [Seg, Seg] => {
  const usable = BAR_W - GAP;
  const a = usable * major;
  return [
    { from: 0, width: a },
    { from: a + GAP, width: usable - a },
  ];
};

export const Bar: React.FC<{
  major?: number;
  draw?: number;
  majorPull?: number;
  minorPull?: number;
  majorColor?: string;
  minorColor?: string;
  /**
   * The larger block leaves upward instead of along the lane. It sits to
   * the LEFT of the smaller one, so travelling right would drag it over
   * its neighbour — which reads as a layering fault, not as a sale.
   */
  majorLift?: number;
  /** The larger block is gone; an outline stands in its seat. */
  stranger?: boolean;
  /** Which block is the viewer's, continuous so the flip can be played. */
  marker?: number | null;
  y?: number;
}> = ({
  major = 0.7,
  draw = 1,
  majorPull = 0,
  minorPull = 0,
  majorLift = 0,
  majorColor = FILL.ink,
  minorColor = FILL.sub,
  stranger = false,
  marker = null,
  y = LANE_Y,
}) => {
  const [a, b] = split(major);

  // A block fades as it reaches the buyer, so it is absorbed rather than
  // sliding out of frame past everything.
  const arrive = (pull: number) =>
    interpolate(pull, [TRIP - 90, TRIP], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  const block = (
    seg: Seg,
    pull: number,
    colour: string,
    value: string,
    outline: boolean,
    lift = 0,
  ) => (
    <div
      style={{
        position: "absolute",
        left: seg.from,
        top: 0,
        width: Math.max(0, seg.width),
        height: BAR_H,
        background: outline ? "transparent" : colour,
        border: outline ? `3px dashed ${RULE}` : undefined,
        boxShadow: outline
          ? undefined
          : "0 20px 44px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `translate(${pull}px, ${-lift}px) scaleX(${draw})`,
        transformOrigin: "left center",
        opacity: outline
          ? 1
          : Math.min(
              arrive(pull),
              interpolate(lift, [60, 200], [1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            ),
      }}
    >
      {seg.width > 96 ? (
        <span
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: 52,
            letterSpacing: "-0.01em",
            color: outline ? SUB : BG,
            transform: `scaleX(${1 / Math.max(0.01, draw)})`,
          }}
        >
          {value}
        </span>
      ) : null}
    </div>
  );

  return (
    <div
      style={{
        position: "absolute",
        left: MARGIN,
        top: y,
        width: BAR_W,
        height: BAR_H,
      }}
    >
      {/* The seat, so a departure leaves a visible hole. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: `1px solid ${RULE}`,
          opacity: 0.45,
        }}
      />
      {stranger
        ? block(a, 0, RULE, "", true)
        : block(a, majorPull, majorColor, "70%", false, majorLift)}
      {block(b, minorPull, minorColor, "30%", false)}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: BAR_H,
          width: BAR_W,
          height: BAR_H,
          transform: "scaleY(-1)",
          transformOrigin: "top center",
          opacity: 0.2,
          filter: "blur(2px)",
          maskImage:
            "linear-gradient(0deg, rgba(0,0,0,0) 8%, rgba(0,0,0,0.9) 100%)",
          WebkitMaskImage:
            "linear-gradient(0deg, rgba(0,0,0,0) 8%, rgba(0,0,0,0.9) 100%)",
          pointerEvents: "none",
        }}
      >
        {stranger
          ? null
          : block(a, majorPull, majorColor, "", false, majorLift)}
        {block(b, minorPull, minorColor, "", false)}
      </div>
      {marker === null ? null : (
        <div
          style={{
            position: "absolute",
            top: -44,
            left: interpolate(
              marker,
              [0, 1],
              [a.width / 2 - 22, b.from + b.width / 2 - 22],
            ),
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: 26,
            letterSpacing: "0.18em",
            color: ACCENT,
          }}
        >
          ВЫ
        </div>
      )}
    </div>
  );
};

/** What each block is, written under the lane. */
export const Legend: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = copy(frame, fps, delay);
  const [a, b] = split(0.7);
  const cell = (seg: Seg, text: string) => (
    <div
      key={text}
      style={{
        position: "absolute",
        left: seg.from,
        width: seg.width,
        textAlign: "center",
        fontFamily: FONT,
        fontWeight: 400,
        fontSize: 22,
        letterSpacing: "0.18em",
        color: SUB,
      }}
    >
      {text}
    </div>
  );
  return (
    <div
      style={{
        position: "absolute",
        left: MARGIN,
        top: LANE_Y + BAR_H + 24,
        width: BAR_W,
        opacity: s,
      }}
    >
      {cell(a, "ПАРТНЁР")}
      {cell(b, "ВЫ")}
    </div>
  );
};

/** Where the shares are going. Fills when they arrive. */
export const Buyer: React.FC<{ delay?: number; landed?: number }> = ({
  delay = 0,
  landed = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = copy(frame, fps, delay);
  const full = landed > 0.5;
  return (
    <div
      style={{
        position: "absolute",
        left: BUYER_X,
        top: LANE_Y,
        width: BUYER_W,
        height: BAR_H,
        border: `2px ${full ? "solid" : "dashed"} ${full ? INK : RULE}`,
        background: full
          ? "linear-gradient(176deg, #24221F 0%, #1C1A18 60%, #141311 100%)"
          : "transparent",
        boxShadow: full
          ? "0 18px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)"
          : undefined,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: s,
        transform: `translateX(${(1 - s) * 36}px)`,
      }}
    >
      <span
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 25,
          letterSpacing: "0.12em",
          color: INK,
        }}
      >
        ПОКУПАТЕЛЬ
      </span>
    </div>
  );
};

/**
 * The reach from the buyer to the bar, and the moment it breaks.
 *
 * One object across the beat: the audience has to watch the solid arrow
 * become the broken one, or the sale dying arrives as a state rather
 * than as an event.
 */
export const Reach: React.FC<{ delay?: number; breakAt?: number | null }> = ({
  delay = 0,
  breakAt = null,
}) => {
  const frame = useCurrentFrame();
  const x1 = MARGIN + BAR_W + 16; // 552
  const x2 = BUYER_X - 16; // 684
  const w = x2 - x1;
  const cy = BAR_H / 2;

  const grow = interpolate(frame - delay, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const broke =
    breakAt === null
      ? 0
      : interpolate(frame, [breakAt, breakAt + 4], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  const cross =
    breakAt === null
      ? 0
      : interpolate(frame, [breakAt + 2, breakAt + 10], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.back(3)),
        });

  const colour = broke > 0.5 ? ACCENT : INK;

  return (
    <svg
      width={w}
      height={BAR_H}
      viewBox={`0 0 ${w} ${BAR_H}`}
      style={{ position: "absolute", left: x1, top: LANE_Y }}
    >
      <line
        x1={w}
        y1={cy}
        x2={w - (w - 18) * grow}
        y2={cy}
        stroke={colour}
        strokeWidth={5}
        strokeDasharray={broke > 0 ? "12 10" : undefined}
      />
      <polygon
        points={`2,${cy} 26,${cy - 14} 26,${cy + 14}`}
        fill={colour}
        opacity={(1 - broke) * (grow > 0.9 ? 1 : 0)}
      />
      {cross > 0 ? (
        <g
          stroke={ACCENT}
          strokeWidth={8}
          strokeLinecap="round"
          transform={`translate(${w / 2} ${cy}) scale(${cross}) translate(${-w / 2} ${-cy})`}
        >
          <line x1={w / 2 - 19} y1={cy - 19} x2={w / 2 + 19} y2={cy + 19} />
          <line x1={w / 2 + 19} y1={cy - 19} x2={w / 2 - 19} y2={cy + 19} />
        </g>
      ) : null}
    </svg>
  );
};
