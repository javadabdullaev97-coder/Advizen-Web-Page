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

import { fitText } from "@remotion/layout-utils";

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
export const RULE_Y = 648; // the crimson rule under a term, so a
                           // carried line can land exactly on it
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

/**
 * A hero word landing. Critically damped — it arrives fast and stops.
 *
 * Everything in the first cuts overshot, and forty wobbling entrances
 * is what reads as a template. Bounce is earned by momentum: something
 * that was actually travelling gets `impact`, everything else lands.
 */
export const hero = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: { damping: 25, stiffness: 220, mass: 0.7 },
  });

/** The one spring allowed to overshoot: a mass that carried momentum. */
export const impact = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: { damping: 19, stiffness: 240, mass: 0.6 },
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

/**
 * The room the piece happens in.
 *
 * A flat fill is what reads as 1995: the still cards all stand in a lit
 * space — a graphite wall with a soft gradient, a polished floor, a
 * reflection — and the reel had none of it. Depth anchors here are the
 * same ones the multiplane card names: a light source, a horizon, and a
 * falloff. Grain sits on top so the gradient cannot band.
 */
export const HORIZON = 1080;

/**
 * The light tone, taken from the card system rather than invented.
 * Used for the two term beats only: a ground that changes is a chapter
 * break, and it is the one device that costs nothing and reads at a
 * glance.
 */
export const LIGHT = {
  ink: "#3A3F44",
  sub: "#7A8086",
  rule: "#CFCBC4",
};

export const Room: React.FC<{ drift?: number; light?: boolean }> = ({
  drift = 0,
  light = false,
}) => (
  <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* Wall: one soft light from upper left, falling off down and right. */}
      <AbsoluteFill
        style={{
          background: light
            ? "radial-gradient(118% 82% at 26% 16%, #F4F1EA 0%, #EDE9E1 40%, #E2DDD3 100%)"
            : "radial-gradient(118% 82% at 26% 16%, #201F1C 0%, #161514 38%, #0C0C0B 74%, #070706 100%)",
          transform: `translateY(${drift * 0.35}px)`,
        }}
      />
      {/* Floor: the wall meets it at the horizon and turns over. */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: HORIZON,
          bottom: 0,
          background: light
            ? "linear-gradient(180deg, #E6E1D8 0%, #DCD7CD 40%, #D3CDC2 100%)"
            : "linear-gradient(180deg, #111110 0%, #0B0B0A 28%, #080807 100%)",
          transform: `translateY(${drift * 0.55}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: HORIZON,
          height: 1,
          background: light
            ? "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.12) 30%, rgba(0,0,0,0.04) 100%)"
            : "linear-gradient(90deg, rgba(236,232,226,0) 0%, rgba(236,232,226,0.16) 30%, rgba(236,232,226,0.05) 100%)",
          transform: `translateY(${drift * 0.55}px)`,
        }}
      />
  </AbsoluteFill>
);

/** Grain and a vignette, over everything. */
export const Finish: React.FC = () => {
  const frame = useCurrentFrame();
  // Stepped at 10fps: a tile that changes all two million pixels every
  // frame spends the bit budget the type edges needed.
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
          opacity: 0.045,
          mixBlendMode: "overlay",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(122% 80% at 48% 38%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.44) 100%)",
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
  /** Invert to the light tone: a chapter break in the argument. */
  light?: boolean;
  /** Skip the exit: for the final beat, so the loop seam is not black. */
  hold?: boolean;
  children: React.ReactNode;
  graphic?: React.ReactNode;
}> = ({
  len,
  dir = "push",
  amount = 0.035,
  punchAt = null,
  light = false,
  hold = true,
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
    <AbsoluteFill
      style={{
        backgroundColor: light ? "#EDE9E1" : BG,
        overflow: "hidden",
      }}
    >
      <Room drift={(scale - 1) * 900} light={light} />
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
            filter: `blur(${(scale - 1) * 26}px)`,
          }}
        >
          {children}
        </AbsoluteFill>
      </AbsoluteFill>
      <Finish />
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

/**
 * A headline set as explicit lines, each filling the measure.
 *
 * Point sizes were being picked by eye and then nudged when a word ran
 * past the frame or wrapped into a widow. Measuring instead removes the
 * whole class of bug: the breaks are the author's, the size is whatever
 * makes the longest line fill the column, and every beat therefore
 * reads at the largest size its own words allow — which is also where
 * the scale contrast between beats comes from.
 */
export const Lines: React.FC<{
  lines: string[];
  delay?: number;
  max?: number;
  color?: string;
  accent?: string;
  align?: "left" | "right";
  blur?: boolean;
  instant?: boolean;
}> = ({
  lines,
  delay = -4,
  max = 168,
  color = INK,
  accent,
  align = "left",
  blur = false,
  instant = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const hot = accent ? accent.split(" ") : [];

  const size = Math.min(
    max,
    ...lines.map(
      (line) =>
        fitText({
          text: line,
          withinWidth: MEASURE,
          fontFamily: FONT,
          fontWeight: 800,
          letterSpacing: tracking(max),
        }).fontSize,
    ),
  );

  let n = 0;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "right" ? "flex-end" : "flex-start",
      }}
    >
      {lines.map((line, li) => (
        <div
          key={`${line}-${li}`}
          style={{
            display: "flex",
            columnGap: size * 0.23,
            justifyContent: align === "right" ? "flex-end" : "flex-start",
          }}
        >
          {line.split(" ").map((word, wi) => {
            const s = instant ? 1 : hero(frame, fps, delay + n++ * 2);
            return (
              <span
                key={`${word}-${wi}`}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  paddingBottom: size * 0.06,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: size,
                    lineHeight: 1.02,
                    letterSpacing: tracking(size),
                    color: hot.includes(word) ? ACCENT : color,
                    opacity: Math.min(1, s * 2),
                    transform: `translateY(${(1 - s) * 104}%)`,
                    filter: `blur(${blur ? (1 - s) * 7 : 0}px)`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {word}
                </span>
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

/** A single word sized to fill the measure — the two terms. */
export const Term: React.FC<{
  text: string;
  size?: number;
  scaleFrom?: number;
  delay?: number;
  color?: string;
}> = ({ text, size = 168, scaleFrom = 1, delay = 8, color = INK }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = hero(frame, fps, delay);
  const fitted = Math.min(
    size,
    fitText({
      text,
      withinWidth: MEASURE,
      fontFamily: FONT,
      fontWeight: 800,
      letterSpacing: tracking(size),
    }).fontSize,
  );
  return (
    <div
      style={{
        position: "relative",
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: fitted,
        lineHeight: 1,
        letterSpacing: `${interpolate(s, [0, 1], [0.16, -0.012])}em`,
        color,
        opacity: Math.min(1, s * 1.6),
        transform: `scale(${interpolate(s, [0, 1], [scaleFrom, 1])})`,
        transformOrigin: "left center",
        whiteSpace: "nowrap",
        filter: `blur(${(1 - Math.min(1, s)) * 6}px)`,
      }}
    >
      {text}
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: fitted,
          lineHeight: 1,
          letterSpacing: `${interpolate(s, [0, 1], [0.16, -0.012])}em`,
          whiteSpace: "nowrap",
          color: "transparent",
          backgroundImage:
            "linear-gradient(115deg, rgba(255,255,255,0) 42%, rgba(255,255,255,0.62) 50%, rgba(255,255,255,0) 58%)",
          backgroundSize: "260% 100%",
          backgroundPosition: `${interpolate(frame, [26, 54], [140, -60], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.cubic),
          })}% 0`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          opacity: frame > 20 && frame < 60 ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        {text}
      </span>
    </div>
  );
};

/** The small tracked label above a headline. */
export const Eyebrow: React.FC<{
  text: string;
  delay?: number;
  color?: string;
}> = ({ text, delay = 0, color = SUB }) => {
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
        color,
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
  color?: string;
}> = ({ text, delay = 0, size = 40, width = DECK, color = SUB }) => {
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
        color,
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
export const Lockup: React.FC<{
  delay?: number;
  instant?: boolean;
  /** Dark ink, for the light chapter. */
  dark?: boolean;
}> = ({ delay = 0, instant = false, dark = false }) => {
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
          color: dark ? LIGHT.ink : INK,
        }}
      >
        ADVIZEN
      </span>
    </div>
  );
};

