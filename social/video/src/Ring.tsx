/**
 * A holding drawn as a ring, and the two shares written out beside it.
 *
 * Shared by any piece about who owns what — drag-along here, deadlock
 * next.
 *
 * The ring is placed by its centre in frame coordinates rather than by a
 * layout box, so it occupies the same spot from beat to beat. Remounted
 * inside a flex column it lands wherever the children above happen to
 * push it, and the one continuous object in the argument appears to jump
 * at every cut.
 */

import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

import { ACCENT, FONT, INK, PANEL, RULE, SUB } from "./theme";
import { Counter, Hairline, MARGIN, MEASURE, copy, heavy } from "./kit";

export const Ring: React.FC<{
  cx?: number;
  cy?: number;
  r?: number;
  stroke?: number;
  draw?: number;
  major?: number;
  majorColor?: string;
  minorColor?: string;
  /** Sideways travel in frame pixels, applied outside the rotation. */
  majorPull?: number;
  minorPull?: number;
  /** The larger share is replaced by an outline: a holder you did not pick. */
  stranger?: boolean;
  shake?: number;
  opacity?: number;
  /** The beat's absolute start, so the idle does not reset at the cut. */
  clock?: number;
}> = ({
  cx = 756,
  cy = 1120,
  r = 272,
  stroke = 64,
  draw = 1,
  major = 0.7,
  majorColor = INK,
  minorColor = SUB,
  majorPull = 0,
  minorPull = 0,
  stranger = false,
  shake = 0,
  opacity = 1,
  clock = 0,
}) => {
  const frame = useCurrentFrame();
  const C = 2 * Math.PI * r;
  const gap = 12;
  const majorLen = C * major - gap;
  const minorLen = C * (1 - major) - gap;
  const box = (r + stroke / 2) * 2 + 8;
  // A degree a second. The hero graphic is then never completely still,
  // which is cheap and keeps a held frame from reading as a JPEG.
  const idle = (frame + clock) * 0.035;

  return (
    <svg
      width={box}
      height={box}
      viewBox={`0 0 ${box} ${box}`}
      style={{
        position: "absolute",
        left: cx - box / 2,
        top: cy - box / 2,
        overflow: "visible",
        opacity,
      }}
    >
      <circle
        cx={box / 2}
        cy={box / 2}
        r={r}
        fill="none"
        stroke={RULE}
        strokeWidth={1}
        opacity={0.4}
      />
      <g transform={`translate(${majorPull + shake} 0)`}>
        {stranger ? (
          <>
            <circle
              cx={box / 2}
              cy={box / 2}
              r={r}
              fill="none"
              stroke={RULE}
              strokeWidth={stroke}
              strokeDasharray={`${majorLen} ${C}`}
              transform={`rotate(${-90 + idle} ${box / 2} ${box / 2})`}
              opacity={0.2}
            />
            <circle
              cx={box / 2}
              cy={box / 2}
              r={r}
              fill="none"
              stroke={SUB}
              strokeWidth={3}
              strokeDasharray={`20 16`}
              transform={`rotate(${-90 + idle} ${box / 2} ${box / 2})`}
              opacity={0.75}
            />
          </>
        ) : (
          <circle
            cx={box / 2}
            cy={box / 2}
            r={r}
            fill="none"
            stroke={majorColor}
            strokeWidth={stroke}
            strokeDasharray={`${Math.max(0, majorLen * draw)} ${C}`}
            transform={`rotate(${-90 + idle} ${box / 2} ${box / 2})`}
          />
        )}
      </g>
      <g transform={`translate(${minorPull} 0)`}>
        <circle
          cx={box / 2}
          cy={box / 2}
          r={r}
          fill="none"
          stroke={minorColor}
          strokeWidth={stroke}
          strokeDasharray={`${Math.max(0, minorLen * draw)} ${C}`}
          transform={`rotate(${-90 + 360 * major + idle} ${box / 2} ${box / 2})`}
        />
      </g>
    </svg>
  );
};

const ROW = 136;

/**
 * The two shares as rail rows — value at the margin, label indented, a
 * hairline under each — which is the idiom the numbered list on the
 * cards already uses, rather than a centred pair of figures.
 *
 * `marker` is continuous rather than an index so the flip can be played:
 * drag-along is the larger holder's clause and tag-along is the smaller
 * holder's, so the viewer changes sides halfway through and the marker
 * slides down a row to say so.
 */
export const Shares: React.FC<{
  marker: number;
  delay?: number;
  hot?: 0 | 1 | null;
  count?: boolean;
  y?: number;
  width?: number;
}> = ({ marker, delay = 0, hot = null, count = true, y = 820, width = 268 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rows: Array<[number, string]> = [
    [70, "БОЛЬШАЯ"],
    [30, "МЕНЬШАЯ"],
  ];

  return (
    <div style={{ position: "absolute", left: MARGIN, top: y, width }}>
      {rows.map(([value, label], i) => {
        const s = copy(frame, fps, delay + i * 5);
        return (
          <div
            key={value}
            style={{
              position: "absolute",
              top: i * ROW,
              left: 0,
              width,
              opacity: s,
              transform: `translateY(${(1 - s) * 18}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 22 }}>
              {count ? (
                <Counter
                  to={value}
                  delay={delay + i * 5 + 2}
                  size={76}
                  color={hot === i ? ACCENT : INK}
                />
              ) : (
                <span
                  style={{
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: 76,
                    letterSpacing: "-0.01em",
                    color: hot === i ? ACCENT : INK,
                  }}
                >
                  {value}%
                </span>
              )}
              <span
                style={{
                  fontFamily: FONT,
                  fontWeight: 400,
                  fontSize: 22,
                  letterSpacing: "0.18em",
                  color: SUB,
                }}
              >
                {label}
              </span>
            </div>
            <Hairline delay={delay + i * 5 + 4} width={width} />
          </div>
        );
      })}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: -32,
          transform: `translateY(${marker * ROW}px)`,
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 28,
          letterSpacing: "0.18em",
          color: ACCENT,
        }}
      >
        ВЫ
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 96,
          width,
          height: 2,
          backgroundColor: ACCENT,
          transform: `translateY(${marker * ROW}px)`,
        }}
      />
    </div>
  );
};

/**
 * One arrow, carried across the cut and broken as an event.
 *
 * `breakAt` is a local frame: before it the arrow is solid ink, over the
 * four frames after it the shaft fractures and goes to the accent and
 * the cross strikes in. Drawing a second, already-broken arrow instead
 * means the audience never sees the sale die — the one real event in the
 * piece arrives as a state.
 */
export const Arrow: React.FC<{
  delay?: number;
  breakAt?: number | null;
  x?: number;
  y?: number;
  height?: number;
  /** Degrees. 90 points the arrow right instead of up. */
  rotate?: number;
}> = ({ delay = 0, breakAt = null, x = 540, y = 980, height = 200, rotate = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const grow = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const head = interpolate(frame - delay, [11, 19], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(2.4)),
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
      : interpolate(frame, [breakAt + 3, breakAt + 9], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.back(3)),
        });

  const colour = broke > 0.5 ? ACCENT : INK;
  const dash = broke > 0 ? `${18 - broke * 4} ${broke * 15}` : undefined;

  return (
    <svg
      width={140}
      height={height}
      viewBox={`0 0 140 ${height}`}
      style={{
        position: "absolute",
        left: x - 70,
        top: y,
        overflow: "visible",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        transformOrigin: `70px ${height - 4}px`,
      }}
    >
      <line
        x1={70}
        y1={height - 4}
        x2={70}
        y2={height - 4 - (height - 56) * grow}
        stroke={colour}
        strokeWidth={6}
        strokeDasharray={dash}
      />
      <polygon
        points="70,4 91,46 49,46"
        fill={colour}
        opacity={(1 - broke) * Math.min(1, head)}
        transform={`translate(70 25) scale(${head}) translate(-70 -25)`}
      />
      {cross > 0 ? (
        <g
          stroke={ACCENT}
          strokeWidth={9}
          strokeLinecap="round"
          transform={`translate(70 26) scale(${cross}) translate(-70 -26)`}
        >
          <line x1={44} y1={2} x2={96} y2={50} />
          <line x1={96} y1={2} x2={44} y2={50} />
        </g>
      ) : null}
    </svg>
  );
};

/** A square block in the house vocabulary — no radius, no outline pill. */
export const Block: React.FC<{
  text: string;
  delay?: number;
  x?: number;
  y?: number;
  align?: "left" | "right" | "center";
  lift?: number;
}> = ({ text, delay = 0, x = MARGIN, y = 1230, align = "left", lift = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = copy(frame, fps, delay);
  return (
    <div
      style={{
        position: "absolute",
        left: align === "right" ? undefined : x,
        right: align === "right" ? MARGIN : undefined,
        top: y,
        backgroundColor: PANEL,
        padding: "22px 40px",
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: 42,
        letterSpacing: "0.03em",
        color: INK,
        opacity: s,
        transform: `translateY(${(1 - s) * 36 - lift}px)`,
        maxWidth: MEASURE,
      }}
    >
      {text}
    </div>
  );
};
