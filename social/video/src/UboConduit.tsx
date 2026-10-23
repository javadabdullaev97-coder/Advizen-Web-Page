/**
 * The pass-through holding, drawn as the chain it is: the company at the
 * bottom, the holding above it, the person at the top, and the dividend
 * going up through all of it.
 *
 * The 3D version put the holding, the relief, the dividend and the tax on
 * one floor and they ran into each other. Here each idea gets its own
 * place and its own moment, in the order the voice says them:
 *
 *   pays up      — the dividend leaves the company and goes up the line;
 *   passes on    — it goes into the holding and straight out the top;
 *   a courier    — the holding turns to glass: nothing stayed inside;
 *   no relief    — the treaty relief next to it is struck out;
 *   the tax      — taken where the money leaves, worked out by the person
 *                  at the top: the line goes round the holding to him.
 *
 * The objects are cut-outs from the 3D studio (UboSprites.tsx), so they
 * carry the same light and materials as the rest of the film.
 */

import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

import "./font";
import { ACCENT, FONT, INK, RULE, SUB } from "./theme";
import { copy, Lines, Lockup, Rail, Stage } from "./kit";
import { Cue } from "./Sound";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const swap = Easing.bezier(0.65, 0, 0.35, 1);
const ramp = (f: number, a: number, b: number, ease = swap) =>
  interpolate(f, [a, b], [0, 1], { ...clamp, easing: ease });

// ── layout ───────────────────────────────────────────────────────────

/**
 * Sprite sizes as trim_sprites.py crops them, the scale they are drawn
 * at, and the points on each that matter, as shares of the sprite —
 * projected from the sprite camera, not guessed.
 */
const K = 0.4;
const CARD = { w: 948 * K, h: 509 * K };
const MAN = { w: 210 * K, h: 667 * K };
const PARCEL = { w: 630 * 0.25, h: 505 * 0.25 };
/** Centre of a card's top face, where things stand on it. */
const CARD_SEAT = { x: 0.506, y: 0.195 };
/** The card's front face: its centre, and how far its top edge falls left to right. */
const CARD_FRONT = { x: 0.407, y: 0.595, slope: 6.7 };
/** The card's lowest point. */
const CARD_BOTTOM = 0.982;
const PARCEL_FOOT = { x: 0.508, y: 0.814 };
const MAN_FOOT = { x: 0.49, y: 0.958 };

/** The chain's axis runs through the top faces; each object stands on it. */
const AXIS = 300;
const CARD_X = AXIS - CARD_SEAT.x * CARD.w;
const TOP = { man: 560, holding: 880, ooo: 1157 };
const SEAT = {
  holding: TOP.holding + CARD_SEAT.y * CARD.h,
  ooo: TOP.ooo + CARD_SEAT.y * CARD.h,
};
const HOLDING_BOTTOM = TOP.holding + CARD_BOTTOM * CARD.h;
const FEET = TOP.man + MAN_FOOT.y * MAN.h;
const MAN_X = AXIS - 80;
/** Where the dividend ends up: on the ground beside the person. */
const LANDING = { x: AXIS + 62, y: FEET };

/** Annotations hang on one column, clear of the right-hand buttons. */
const NOTE_X = 540;
/** The tax line runs up between the chain and the notes, round the holding. */
const BYPASS_X = 512;

const Y = {
  owner: TOP.man + 0.35 * MAN.h,
  relief: TOP.holding + 0.5 * CARD.h,
  money: SEAT.ooo - 0.42 * PARCEL.h,
};

// ── pieces ───────────────────────────────────────────────────────────

const Sprite: React.FC<{ name: string; x: number; y: number; w: number; opacity?: number }> = ({
  name,
  x,
  y,
  w,
  opacity = 1,
}) => (
  <Img
    src={staticFile(`sprites/${name}.png`)}
    style={{ position: "absolute", left: x, top: y, width: w, opacity }}
  />
);

/** Light falling on the shelf an object stands on, and its contact shadow. */
const Pool: React.FC<{ x: number; y: number; w: number; opacity?: number }> = ({ x, y, w, opacity = 1 }) => (
  <>
    <div
      style={{
        position: "absolute",
        left: x - w * 0.8,
        top: y - w * 0.22,
        width: w * 1.6,
        height: w * 0.44,
        background: "radial-gradient(closest-side, rgba(255,236,214,0.10), rgba(255,236,214,0))",
        opacity,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: x - w * 0.5,
        top: y - w * 0.06,
        width: w,
        height: w * 0.12,
        background: "radial-gradient(closest-side, rgba(0,0,0,0.75), rgba(0,0,0,0))",
        opacity,
      }}
    />
  </>
);

/** A thin rule, drawn on from one end. */
const Line: React.FC<{
  x: number;
  y: number;
  len: number;
  vertical?: boolean;
  draw: number;
  color?: string;
  weight?: number;
  from?: "start" | "end";
  glow?: boolean;
}> = ({ x, y, len, vertical = false, draw, color = RULE, weight = 2, from = "start", glow = false }) => (
  <div
    style={{
      position: "absolute",
      left: vertical ? x - weight / 2 : x,
      top: vertical ? y : y - weight / 2,
      width: vertical ? weight : len,
      height: vertical ? len : weight,
      backgroundColor: color,
      transform: vertical ? `scaleY(${draw})` : `scaleX(${draw})`,
      transformOrigin: vertical ? (from === "start" ? "50% 0%" : "50% 100%") : from === "start" ? "0% 50%" : "100% 50%",
      boxShadow: glow ? `0 0 14px ${color}` : undefined,
    }}
  />
);

const Label: React.FC<{
  lines: string[];
  x: number;
  y: number;
  show: number;
  color?: string;
  size?: number;
}> = ({ lines, x, y, show, color = INK, size = 32 }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      transform: `translateY(-50%) translateX(${(1 - show) * -14}px)`,
      opacity: show,
      fontFamily: FONT,
      fontWeight: 600,
      fontSize: size,
      lineHeight: 1.22,
      letterSpacing: "0.14em",
      color,
      whiteSpace: "nowrap",
    }}
  >
    {lines.map((l) => (
      <div key={l}>{l}</div>
    ))}
  </div>
);

/** A callout: a dot on the object, a leader to the column, and the words. */
const Callout: React.FC<{
  from: number;
  y: number;
  show: number;
  color?: string;
  children: React.ReactNode;
}> = ({ from, y, show, color = SUB, children }) => (
  <>
    <div
      style={{
        position: "absolute",
        left: from - 5,
        top: y - 5,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: color === SUB ? INK : color,
        opacity: show,
      }}
    />
    <Line x={from} y={y} len={NOTE_X - 18 - from} draw={show} color={color} />
    {children}
  </>
);

// ── the beat ─────────────────────────────────────────────────────────

/** Local frames, from the voice: "Компания… пересылает дивиденды дальше — тоже курьер. Льготы… не будет. Налог считают по настоящему получателю." */
const T = {
  build: 0,
  rise: 44, // "пересылает"
  inside: [62, 80] as const,
  land: 98,
  courier: 100, // "тоже курьер"
  relief: 126, // "Льготы"
  struck: 180, // "не будет"
  tax: 204, // "Налог"
  bypass: [214, 240] as const, // "считают по…"
  owner: 236, // "…настоящему получателю"
};

export const CONDUIT_LEN = 275;

export const Conduit: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = (d: number) => copy(frame, fps, d);

  // The chain builds from the bottom up, the way the money will travel.
  const ooo = enter(T.build);
  const holding = enter(T.build + 10);
  const man = enter(T.build + 20);
  const spineLow = ramp(frame, 6, 18);
  const spineHigh = ramp(frame, 16, 28);

  // The dividend, by the point it stands on: up the line, into the holding,
  // out of the top, and down beside the person.
  const up = ramp(frame, T.rise, T.land, Easing.bezier(0.5, 0, 0.25, 1));
  const footY = interpolate(up, [0, 1], [SEAT.ooo, LANDING.y]);
  const footX = interpolate(ramp(frame, T.land - 16, T.land), [0, 1], [AXIS, LANDING.x]);
  const parcelX = footX - PARCEL_FOOT.x * PARCEL.w;
  const parcelTop = footY - PARCEL_FOOT.y * PARCEL.h;
  // While it overlaps the holding it is drawn under it: it goes in at the
  // bottom and comes out of the top face, which reads as passing through.
  const behind = parcelTop < HOLDING_BOTTOM && footY > TOP.holding;

  // Nothing stayed inside: the holding goes to glass.
  const glass = ramp(frame, T.courier, T.courier + 12);
  const courierWord = enter(T.courier + 4);
  const busy = interpolate(frame, [T.inside[0], T.inside[0] + 6, T.inside[1], T.inside[1] + 10], [0, 1, 1, 0], clamp);

  const relief = enter(T.relief);
  const strikes = [0, 1].map((i) => ramp(frame, T.struck + i * 5, T.struck + i * 5 + 8, Easing.out(Easing.cubic)));
  const reliefGone = ramp(frame, T.tax - 8, T.tax + 4);

  const tax = enter(T.tax);
  const bypass = ramp(frame, T.bypass[0], T.bypass[1], Easing.bezier(0.45, 0, 0.2, 1));
  const ownerRed = ramp(frame, T.owner, T.owner + 8);

  // The travelled line steps back once the tax line is the point.
  const trailOpacity = 1 - 0.6 * ramp(frame, T.tax, T.tax + 12);
  const dividendName = ooo * (1 - ramp(frame, T.rise + 4, T.rise + 14));

  const parcel = <Sprite name="parcel" x={parcelX} y={parcelTop} w={PARCEL.w} opacity={ooo} />;

  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      foot={<Lockup instant />}
      world={
        <AbsoluteFill>
          {/* One seamless wall: a diagram has no floor to stand on. */}
          <AbsoluteFill
            style={{
              background:
                "radial-gradient(90% 60% at 30% 52%, #1F1E1B 0%, #161513 40%, #0C0C0B 78%, #080807 100%)",
            }}
          />

          {/* The line the money travels, and the part of it already travelled. */}
          <Line x={AXIS} y={FEET} len={SEAT.holding - FEET} vertical draw={spineHigh} from="end" />
          <Line x={AXIS} y={SEAT.holding} len={SEAT.ooo - SEAT.holding} vertical draw={spineLow} from="end" />
          <div style={{ opacity: trailOpacity }}>
            <Line x={AXIS} y={footY} len={SEAT.ooo - footY} vertical draw={1} color={ACCENT} weight={3} glow />
          </div>

          {/* The person at the top. */}
          <Pool x={MAN_X} y={FEET} w={150} opacity={man} />
          <div style={{ opacity: man, transform: `translateY(${(1 - man) * 18}px)` }}>
            <Sprite name="man" x={MAN_X - MAN_FOOT.x * MAN.w} y={TOP.man} w={MAN.w} />
          </div>

          {/* The company at the bottom, with the dividend on it. */}
          <Pool x={AXIS} y={TOP.ooo + CARD_BOTTOM * CARD.h - 8} w={CARD.w * 1.05} opacity={ooo} />
          <div style={{ opacity: ooo, transform: `translateY(${(1 - ooo) * 18}px)` }}>
            <Sprite name="ooo" x={CARD_X} y={TOP.ooo} w={CARD.w} />
          </div>
          {behind ? parcel : null}

          {/* The holding: solid, then glass. */}
          <Pool x={AXIS} y={HOLDING_BOTTOM - 8} w={CARD.w * 1.05} opacity={holding} />
          <div style={{ opacity: holding, transform: `translateY(${(1 - holding) * 18}px)` }}>
            <Sprite name="holding" x={CARD_X} y={TOP.holding} w={CARD.w} opacity={1 - glass} />
            <Sprite name="hollow" x={CARD_X} y={TOP.holding} w={CARD.w} opacity={glass} />
            {/* The dividend passing through lights the holding from inside, for a moment. */}
            <div
              style={{
                position: "absolute",
                left: CARD_X + CARD.w * 0.1,
                top: TOP.holding + CARD.h * 0.2,
                width: CARD.w * 0.8,
                height: CARD.h * 0.7,
                background: `radial-gradient(closest-side, ${ACCENT}55, ${ACCENT}00)`,
                opacity: busy * (1 - glass),
                mixBlendMode: "screen",
              }}
            />
          </div>
          {behind ? null : parcel}

          {/* "Тоже курьер": printed on the empty box's front face, in its perspective. */}
          <div
            style={{
              position: "absolute",
              left: CARD_X + CARD_FRONT.x * CARD.w,
              top: TOP.holding + CARD_FRONT.y * CARD.h,
              transform: `translate(-50%, -50%) skewY(${CARD_FRONT.slope}deg) scale(${0.94 + 0.06 * courierWord})`,
              opacity: courierWord,
              fontFamily: FONT,
              fontWeight: 800,
              fontSize: 50,
              letterSpacing: "0.1em",
              color: ACCENT,
            }}
          >
            КУРЬЕР
          </div>

          {/* The dividend's name, where it starts. */}
          <Callout from={parcelX + PARCEL.w + 8} y={Y.money} show={dividendName}>
            <Label lines={["ДИВИДЕНДЫ"]} x={NOTE_X} y={Y.money} show={dividendName} color={ACCENT} />
          </Callout>

          {/* Who it is really for. */}
          <Callout from={MAN_X + MAN.w / 2 + 12} y={Y.owner} show={man} color={ownerRed > 0.5 ? ACCENT : SUB}>
            <Label
              lines={["НАСТОЯЩИЙ", "ПОЛУЧАТЕЛЬ"]}
              x={NOTE_X}
              y={Y.owner}
              show={man}
              color={ownerRed > 0.5 ? ACCENT : INK}
            />
          </Callout>

          {/* The treaty relief the holding was there for — struck out, line by line. */}
          <div style={{ opacity: 1 - reliefGone }}>
            <Callout from={CARD_X + 0.99 * CARD.w} y={Y.relief} show={relief}>
              <div
                style={{
                  position: "absolute",
                  left: NOTE_X,
                  top: Y.relief,
                  transform: `translateY(-50%) translateX(${(1 - relief) * -14}px)`,
                  opacity: relief,
                  padding: "16px 22px",
                  border: `2px solid ${RULE}`,
                  borderRadius: 14,
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 30,
                  lineHeight: 1.3,
                  letterSpacing: "0.12em",
                  color: INK,
                }}
              >
                {["ЛЬГОТА ПО", "СОГЛАШЕНИЮ"].map((l, i) => (
                  <div key={l} style={{ position: "relative" }}>
                    <span style={{ opacity: 1 - strikes[i] * 0.5 }}>{l}</span>
                    <div
                      style={{
                        position: "absolute",
                        left: -6,
                        right: -2,
                        top: "50%",
                        height: 4,
                        marginTop: -3,
                        borderRadius: 2,
                        backgroundColor: ACCENT,
                        transform: `scaleX(${strikes[i]})`,
                        transformOrigin: "0% 50%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </Callout>
          </div>

          {/* The tax: taken where the money leaves, worked out by the person at the top. */}
          <Callout from={AXIS + 6} y={Y.money} show={tax}>
            <div
              style={{
                position: "absolute",
                left: NOTE_X,
                top: Y.money,
                transform: `translateY(-50%) translateX(${(1 - tax) * -14}px)`,
                opacity: tax,
                padding: "12px 22px",
                borderRadius: 12,
                backgroundColor: ACCENT,
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 32,
                letterSpacing: "0.14em",
                color: INK,
              }}
            >
              НАЛОГ
            </div>
          </Callout>
          <Line x={BYPASS_X} y={Y.owner} len={Y.money - Y.owner} vertical draw={bypass} color={ACCENT} weight={3} from="end" glow />
          <div
            style={{
              position: "absolute",
              left: BYPASS_X - 9,
              top: Y.owner - 9,
              width: 18,
              height: 18,
              borderRadius: 9,
              backgroundColor: ACCENT,
              boxShadow: `0 0 18px ${ACCENT}`,
              opacity: ramp(frame, T.bypass[1] - 4, T.bypass[1]),
            }}
          />
        </AbsoluteFill>
      }
    >
      <Rail gap={30}>
        <Lines lines={["ПЕРЕСЫЛАЕТЕ —", "ЗНАЧИТ, КУРЬЕР"]} max={150} delay={6} />
      </Rail>
    </Stage>
  );
};

/** Sound for the beat, at its start in the film. */
export const conduitCues = (start: number): Cue[] => [
  { sfx: "whoosh", at: start + T.rise + 8, gain: 0.14 },
  { sfx: "thud", at: start + T.struck + 2, gain: 0.7 },
];

/** The beat alone, for previewing it. */
export const ConduitPreview: React.FC = () => <Conduit len={CONDUIT_LEN} />;
