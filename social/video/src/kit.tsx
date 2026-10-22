/**
 * The parts every Advizen reel is built from.
 *
 * DragAlong is the first piece and the plan has twenty topics behind it,
 * so anything reusable lives here and a new reel is a script, not a
 * renderer.
 *
 * Three rules, taken from the still cards and from what went wrong in
 * the first cut:
 *
 *   * One grid. The headline starts at the same y in every beat, so the
 *     eye does not have to find it again after each cut. A primary line
 *     that wanders a thousand pixels across seven cuts is most of what
 *     reads as a slideshow, before a single frame of animation is
 *     considered.
 *   * One rail. Type is set flush to the left or the right margin and
 *     rags on the far side, alternating by argument group. Centring
 *     everything is what makes a template look like a template.
 *   * Three springs, not one. A hero word, a sentence and a moving
 *     graphic must not share physics, or nothing reads as heavy or
 *     light — and energy is contrast in velocity, not amount of travel.
 */

import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { ACCENT, BG, FONT, INK, RULE, SUB } from "./theme";

// ── the grid ─────────────────────────────────────────────────────────

/**
 * Instagram draws its own interface over the frame: the account row at
 * the top, the caption and audio strip across the bottom, the action
 * rail down the right. Nothing that has to be read may sit outside this.
 */
export const MARGIN = 96;
export const MEASURE = 888; // 96 … 984, for headlines in the upper band
export const DECK = 720; // notes stay visibly narrower than the headline
export const HEAD_Y = 300; // cap-top of the primary line, every beat
export const BAND_Y = 800; // where the graphic band starts
export const FOOT_Y = 1420; // lockup rail, and the floor for read-critical type
/**
 * The display scale, a 1.2 ratio. Sizes are chosen from it, never nudged
 * to fit: when the cards go big the jump is unmistakable, and that only
 * works if the small sizes hold a line.
 */
export const SIZE = { caption: 108, head: 128, hit: 184 };

/**
 * The two terms are the one exception to the scale: they are matched on
 * measured width rather than on point size, because set flush to the
 * same rail they then fill the same block and the pair rhymes as a
 * shape. DRAG-ALONG is a letter longer, so it is set smaller.
 */
export const TERM = { drag: 136, tag: 150 };

// ── springs ──────────────────────────────────────────────────────────

/** A hero word landing. Overshoots visibly. */
export const hero = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: { damping: 11, stiffness: 220, mass: 0.7 },
  });

/** A sentence arriving. Critically damped — the serious lines do not wobble. */
export const copy = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: { damping: 20, stiffness: 160, mass: 0.6 },
  });

/** Something with mass moving: the ring, a block, a rule. Glides. */
export const heavy = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 100, mass: 1.4 },
  });

/** Tracking tightens as type grows; a grotesque needs it. */
/**
 * The cards track display type at about -0.008em and banner.py applies
 * none at all. Anything near -0.03em reads as a current template rather
 * than as this brand.
 */
export const tracking = (size: number) => (size >= 150 ? "-0.015em" : "-0.005em");

// ── surface ──────────────────────────────────────────────────────────

/** Grain and a vignette, so a flat ground reads as a lit one. */
export const Surface: React.FC = () => {
  const frame = useCurrentFrame();
  // Shifted every frame: a still grain reads as dirt on the lens.
  const step = Math.floor(frame / 3);
  const x = (step * 21) % 256;
  const y = (step * 33) % 256;
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          backgroundImage: `url(${staticFile("noise.png")})`,
          backgroundSize: "256px 256px",
          backgroundPosition: `${x}px ${y}px`,
          opacity: 0.05,
          mixBlendMode: "overlay",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(118% 76% at 50% 40%, rgba(0,0,0,0) 36%, rgba(0,0,0,0.42) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

/**
 * One shot.
 *
 * `type` and `graphic` are separate layers so they can leave at
 * different moments — the words go first, the picture a few frames
 * behind, which reads as an exit rather than as a cut. The camera pushes
 * or settles across the beat, alternating, because a locked frame in
 * this format is read as a still image.
 */
export const Stage: React.FC<{
  len: number;
  dir?: "push" | "settle";
  amount?: number;
  /** Local frame of a hard beat: a brightness lift and a scale punch. */
  punchAt?: number | null;
  /** Skip the exit: for the final beat, so the loop seam is not black. */
  hold?: boolean;
  children: React.ReactNode;
  graphic?: React.ReactNode;
}> = ({
  len,
  dir = "push",
  amount = 0.035,
  punchAt = null,
  hold = false,
  children,
  graphic,
}) => {
  const frame = useCurrentFrame();

  const scale =
    dir === "push"
      ? interpolate(frame, [0, len], [1, 1 + amount], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.22, 0.61, 0.36, 1),
        })
      : interpolate(frame, [0, len], [1 + amount, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        });

  const leave = (delay: number) =>
    hold
      ? 0
      : interpolate(frame, [len - 11 + delay, len - 1 + delay], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
          easing: Easing.in(Easing.quad),
        });

  const words = leave(0);
  const picture = leave(3);

  // A hard beat lifts the picture that is already there rather than
  // washing the frame in colour. A full-bleed red field is the one
  // energy device that cannot be made to look expensive, and in both
  // card systems red is always a bounded object, never a field.
  const lift =
    punchAt === null
      ? 1
      : interpolate(frame, [punchAt, punchAt + 2, punchAt + 8], [1, 1.14, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  const punch =
    punchAt === null
      ? 0
      : interpolate(frame, [punchAt, punchAt + 6], [0.025, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, overflow: "hidden" }}>
      <AbsoluteFill style={{ filter: `brightness(${lift})` }}>
        {graphic ? (
          <AbsoluteFill
            style={{
              opacity: 1 - picture,
              transform: `scale(${1 + (scale - 1) * 1.5 + punch}) translateY(${-picture * 26}px)`,
              transformOrigin: "50% 980px",
            }}
          >
            {graphic}
          </AbsoluteFill>
        ) : null}
        <AbsoluteFill
          style={{
            opacity: 1 - words,
            transform: `scale(${1 + (scale - 1) * 0.55}) translateY(${-words * 44}px)`,
            transformOrigin: "20% 300px",
          }}
        >
          {children}
        </AbsoluteFill>
      </AbsoluteFill>
      <Surface />
    </AbsoluteFill>
  );
};

/**
 * A block pinned to a rail at a fixed height.
 *
 * Everything readable goes through this, which is what keeps the primary
 * line in the same place from beat to beat.
 */
export const Rail: React.FC<{
  align?: "left" | "right";
  y?: number;
  width?: number;
  gap?: number;
  children: React.ReactNode;
}> = ({ align = "left", y = HEAD_Y, width = MEASURE, gap = 40, children }) => (
  <div
    style={{
      position: "absolute",
      top: y,
      left: align === "left" ? MARGIN : undefined,
      right: align === "right" ? MARGIN : undefined,
      width,
      display: "flex",
      flexDirection: "column",
      alignItems: align === "right" ? "flex-end" : "flex-start",
      textAlign: align,
      gap,
    }}
  >
    {children}
  </div>
);

// ── type ─────────────────────────────────────────────────────────────

/**
 * Heavy uppercase, a word at a time.
 *
 * The rise scales with the point size rather than being a constant, and
 * a short blur carries the first frames, so an entrance reads as speed.
 * Because the block is flush to a rail and not centred, settled words do
 * not slide sideways as later ones arrive.
 */
export const Headline: React.FC<{
  text: string;
  delay?: number;
  size?: number;
  color?: string;
  accent?: string;
  align?: "left" | "right";
  /** Rendered fully arrived, for the opening frame. */
  instant?: boolean;
  /** Smear on entry. Reserved for the payoff lines. */
  blur?: boolean;
}> = ({
  text,
  delay = -4,
  size = 134,
  color = INK,
  accent,
  align = "left",
  instant = false,
  blur = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const hot = accent ? accent.split(" ") : [];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: size * 0.23,
        rowGap: size * 0.04,
        justifyContent: align === "right" ? "flex-end" : "flex-start",
      }}
    >
      {text.split(" ").map((word, i) => {
        const s = instant ? 1 : hero(frame, fps, delay + i * 2);
        return (
          <span
            key={`${word}-${i}`}
            style={{
              fontFamily: FONT,
              fontWeight: 800,
              fontSize: size,
              lineHeight: 1.0,
              letterSpacing: tracking(size),
              color: hot.includes(word) ? ACCENT : color,
              opacity: Math.min(1, s * 1.5),
              transform: `translateY(${(1 - s) * size * 0.18}px)`,
              filter: `blur(${blur ? (1 - s) * 7 : 0}px)`,
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

/** The small tracked label above a headline. */
export const Eyebrow: React.FC<{ text: string; delay?: number }> = ({
  text,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = copy(frame, fps, delay);
  return (
    <div
      style={{
        fontFamily: FONT,
        fontWeight: 500,
        fontSize: 34,
        letterSpacing: "0.18em",
        color: SUB,
        opacity: s,
      }}
    >
      {text}
    </div>
  );
};

/**
 * The quiet line under a headline.
 *
 * Russian wraps badly when left to the browser — a preposition or an
 * adjective ends up orphaned from what it governs — so `text` may carry
 * non-breaking spaces and the measure is fixed and narrower than the
 * headline's.
 */
export const Note: React.FC<{
  text: string;
  delay?: number;
  size?: number;
  width?: number;
}> = ({ text, delay = 0, size = 40, width = DECK }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = copy(frame, fps, delay);
  return (
    <div
      style={{
        fontFamily: FONT,
        fontWeight: 400,
        fontSize: size,
        lineHeight: 1.34,
        color: SUB,
        maxWidth: width,
        opacity: s,
        transform: `translateY(${(1 - s) * 16}px)`,
      }}
    >
      {text}
    </div>
  );
};

/** A number that counts up to its value instead of appearing at it. */
export const Counter: React.FC<{
  to: number;
  delay?: number;
  dur?: number;
  size?: number;
  color?: string;
}> = ({ to, delay = 0, dur = 20, size = 108, color = INK }) => {
  const frame = useCurrentFrame();
  const v = Math.round(
    interpolate(frame - delay, [0, dur], [0, to], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    }),
  );
  return (
    <span
      style={{
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: size,
        letterSpacing: tracking(size),
        color,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {v}%
    </span>
  );
};

/** A hairline across the measure, drawn on from one side. */
export const Hairline: React.FC<{
  delay?: number;
  from?: "left" | "right";
  width?: number;
  weight?: number;
  color?: string;
}> = ({ delay = 0, from = "left", width = MEASURE, weight = 1, color = RULE }) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <div
      style={{
        width,
        height: weight,
        backgroundColor: color,
        transform: `scaleX(${t})`,
        transformOrigin: from,
      }}
    />
  );
};

/** The lockup, on the foot rail where the cards put it. */
export const Lockup: React.FC<{ delay?: number; instant?: boolean }> = ({
  delay = 0,
  instant = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = instant ? 1 : copy(frame, fps, delay);
  return (
    <div
      style={{
        position: "absolute",
        top: FOOT_Y,
        left: MARGIN,
        display: "flex",
        alignItems: "center",
        gap: 30,
        opacity: s,
      }}
    >
      <Img
        src={staticFile("logo.png")}
        style={{
          height: 40,
          opacity: Math.max(0, (s - 0.4) / 0.6),
          // The asset is the site oxblood; the dark tone needs its own
          // red, so the mark is recoloured rather than drawn as-is.
          filter:
            "brightness(0) saturate(100%) invert(26%) sepia(72%) saturate(3002%) hue-rotate(338deg) brightness(92%) contrast(95%)",
        }}
      />
      <span
        style={{
          fontFamily: FONT,
          fontWeight: 500,
          fontSize: 34,
          letterSpacing: "0.2em",
          color: INK,
        }}
      >
        ADVIZEN
      </span>
    </div>
  );
};

