/**
 * Drag-along and tag-along, explained on a coffee shop.
 *
 * The argument runs concrete first: a reader watches two people own a
 * business, watches the sale die, and only then is told that the thing
 * that would have saved it has a name. The term lands as relief rather
 * than as vocabulary.
 *
 * Everything here is drawn — there is no photograph in the piece. The
 * palette and the type are the carousel's, in the dark tone, so the reel
 * and the cards read as the same account.
 */

import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import "./font";
import { ACCENT, BG, FONT, INK, RULE, SUB } from "./theme";

// ── the beats ────────────────────────────────────────────────────────
export const BEATS = {
  stake: { from: 0, len: 150 },
  buyer: { from: 150, len: 150 },
  dead: { from: 300, len: 120 },
  drag: { from: 420, len: 120 },
  mirror: { from: 540, len: 150 },
  tag: { from: 690, len: 120 },
  close: { from: 810, len: 120 },
};
export const TOTAL = 930;

const snap = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 190, mass: 0.6 },
  });

// ── pieces ───────────────────────────────────────────────────────────

/** A line of heavy type whose words arrive one after another. */
const Line: React.FC<{
  text: string;
  delay?: number;
  size?: number;
  color?: string;
  weight?: number;
  tracking?: string;
  accent?: string;
}> = ({
  text,
  delay = 0,
  size = 86,
  color = INK,
  weight = 800,
  tracking = "-0.025em",
  accent,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: size * 0.26,
        rowGap: size * 0.12,
        padding: "0 70px",
      }}
    >
      {text.split(" ").map((word, i) => {
        const s = snap(frame, fps, delay + i * 3);
        const hot = accent !== undefined && word === accent;
        return (
          <span
            key={`${word}-${i}`}
            style={{
              fontFamily: FONT,
              fontWeight: weight,
              fontSize: size,
              lineHeight: 1.04,
              letterSpacing: tracking,
              color: hot ? ACCENT : color,
              opacity: s,
              transform: `translateY(${(1 - s) * 56}px)`,
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

/** Quiet sentence case under a headline. */
const Note: React.FC<{ text: string; delay?: number; size?: number }> = ({
  text,
  delay = 0,
  size = 36,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = snap(frame, fps, delay);
  return (
    <div
      style={{
        fontFamily: FONT,
        fontWeight: 400,
        fontSize: size,
        lineHeight: 1.36,
        color: SUB,
        textAlign: "center",
        padding: "0 110px",
        opacity: s,
        transform: `translateY(${(1 - s) * 26}px)`,
      }}
    >
      {text}
    </div>
  );
};

const R = 215;
const STROKE = 54;
const C = 2 * Math.PI * R;
const GAP = 9;

/**
 * The holding, as a ring: the larger share in ink, the smaller one beside
 * it. `draw` runs the two arcs on, `pull` slides the minor arc away from
 * its seat, and `hot` turns it to the accent.
 */
const Ring: React.FC<{
  draw: number;
  major?: number;
  pull?: number;
  majorPull?: number;
  hot?: boolean;
  shake?: number;
}> = ({ draw, major = 0.7, pull = 0, majorPull = 0, hot = false, shake = 0 }) => {
  const majorLen = C * major - GAP;
  const minorLen = C * (1 - major) - GAP;
  return (
    <svg width={560} height={560} viewBox="0 0 560 560">
      <circle
        cx={280}
        cy={280}
        r={R}
        fill="none"
        stroke={RULE}
        strokeWidth={1}
        opacity={0.5}
      />
      <circle
        cx={280}
        cy={280}
        r={R}
        fill="none"
        stroke={INK}
        strokeWidth={STROKE}
        strokeDasharray={`${majorLen * draw} ${C}`}
        transform={`rotate(-90 280 280) translate(${majorPull} 0)`}
      />
      <circle
        cx={280}
        cy={280}
        r={R}
        fill="none"
        stroke={hot ? ACCENT : SUB}
        strokeWidth={STROKE}
        strokeDasharray={`${minorLen * draw} ${C}`}
        transform={`rotate(${-90 + 360 * major} 280 280) translate(${pull + shake} 0)`}
      />
    </svg>
  );
};

/** Who holds what, written out under the ring. */
const Holders: React.FC<{ delay: number; hot?: boolean }> = ({
  delay,
  hot = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = snap(frame, fps, delay);
  const cell = (label: string, value: string, colour: string) => (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 64,
          color: colour,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 400,
          fontSize: 30,
          color: SUB,
          marginTop: 6,
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </div>
    </div>
  );
  return (
    <div
      style={{
        display: "flex",
        gap: 120,
        justifyContent: "center",
        opacity: s,
        transform: `translateY(${(1 - s) * 24}px)`,
      }}
    >
      {cell("ВЫ", "70%", INK)}
      {cell("ПАРТНЁР", "30%", hot ? ACCENT : INK)}
    </div>
  );
};

/** A labelled block that slides up into the frame. */
const Chip: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = snap(frame, fps, delay);
  return (
    <div
      style={{
        alignSelf: "center",
        border: `2px solid ${RULE}`,
        borderRadius: 10,
        padding: "22px 46px",
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: 44,
        letterSpacing: "0.04em",
        color: INK,
        opacity: s,
        transform: `translateY(${(1 - s) * 48}px)`,
      }}
    >
      {text}
    </div>
  );
};

/** An arrow pointing up at the ring, drawn on, then optionally cut. */
const Arrow: React.FC<{ delay: number; broken?: boolean }> = ({
  delay,
  broken = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = interpolate(frame - delay, [0, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const colour = broken ? ACCENT : INK;
  const len = 150;
  return (
    <svg width={120} height={190} viewBox="0 0 120 190" style={{ alignSelf: "center" }}>
      <line
        x1={60}
        y1={186}
        x2={60}
        y2={186 - len * t}
        stroke={colour}
        strokeWidth={5}
        strokeDasharray={broken ? "16 14" : undefined}
      />
      {t > 0.96 && !broken ? (
        <polygon points="60,20 78,54 42,54" fill={colour} />
      ) : null}
      {broken ? (
        <g stroke={ACCENT} strokeWidth={7} strokeLinecap="round">
          <line x1={34} y1={20} x2={86} y2={66} />
          <line x1={86} y1={20} x2={34} y2={66} />
        </g>
      ) : null}
    </svg>
  );
};

const Stage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      backgroundColor: BG,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 46,
    }}
  >
    {children}
  </AbsoluteFill>
);

// ── the beats, in order ──────────────────────────────────────────────

const Stake: React.FC = () => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [18, 56], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Stage>
      <Line text="КОФЕЙНЯ НА ДВОИХ" size={96} />
      <Ring draw={draw} />
      <Holders delay={56} />
    </Stage>
  );
};

const Buyer: React.FC = () => (
  <Stage>
    <Line text="ПРИХОДИТ ПОКУПАТЕЛЬ" size={76} delay={2} />
    <Ring draw={1} />
    <Arrow delay={26} />
    <Chip text="ХОЧЕТ ВСЮ ЦЕЛИКОМ" delay={34} />
    <Note text="Вы согласны. Партнёр — нет." delay={58} />
  </Stage>
);

const Dead: React.FC = () => {
  const frame = useCurrentFrame();
  // The ring flinches once on the refusal and settles; a shake that runs
  // the whole beat reads as a glitch rather than as a shock.
  const shake =
    frame < 30 ? Math.sin(frame * 1.5) * interpolate(frame, [0, 28], [16, 0]) : 0;
  return (
    <Stage>
      <Ring draw={1} hot shake={shake} />
      <Holders delay={0} hot />
      <Arrow delay={6} broken />
      <Line text="СДЕЛКИ НЕТ" size={118} delay={22} accent="НЕТ" />
      <Note
        text="Покупателю не нужны ваши 70% без его 30%"
        delay={40}
      />
    </Stage>
  );
};

/** A term arriving after the problem it solves. */
const Term: React.FC<{ lead: string; term: string; note: string }> = ({
  lead,
  term,
  note,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = snap(frame, fps, 16);
  const rule = interpolate(frame, [30, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Stage>
      <Line text={lead} size={44} weight={500} color={SUB} tracking="0.08em" />
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 132,
          letterSpacing: "-0.04em",
          color: INK,
          opacity: s,
          transform: `scale(${interpolate(s, [0, 1], [0.86, 1])})`,
        }}
      >
        {term}
      </div>
      <div style={{ width: 760 * rule, height: 3, backgroundColor: ACCENT }} />
      <Note text={note} delay={44} size={38} />
    </Stage>
  );
};

const Mirror: React.FC = () => {
  const frame = useCurrentFrame();
  const leave = interpolate(frame, [40, 78], [0, 330], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Stage>
      <Line text="А ЕСЛИ ПРОДАЁТ ОН?" size={82} />
      <Ring draw={1} majorPull={leave} />
      <Note
        text="Партнёр выходит, а вы остаётесь с 30% и новым совладельцем, которого не выбирали"
        delay={58}
      />
    </Stage>
  );
};

const Close: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = snap(frame, fps, 30);
  return (
    <Stage>
      <Line text="В УСТАВЕ ЭТИХ СТРОК НЕТ" size={72} />
      <Note
        text="Место — корпоративный договор. В венчурных сделках они идут стандартным блоком."
        delay={18}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 22,
          marginTop: 60,
          opacity: s,
        }}
      >
        <Img src={staticFile("logo.png")} style={{ height: 52 }} />
        <span
          style={{
            fontFamily: FONT,
            fontWeight: 500,
            fontSize: 46,
            letterSpacing: "0.34em",
            color: INK,
          }}
        >
          ADVIZEN
        </span>
      </div>
    </Stage>
  );
};

export const DragAlong: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG }}>
    <Sequence from={BEATS.stake.from} durationInFrames={BEATS.stake.len}>
      <Stake />
    </Sequence>
    <Sequence from={BEATS.buyer.from} durationInFrames={BEATS.buyer.len}>
      <Buyer />
    </Sequence>
    <Sequence from={BEATS.dead.from} durationInFrames={BEATS.dead.len}>
      <Dead />
    </Sequence>
    <Sequence from={BEATS.drag.from} durationInFrames={BEATS.drag.len}>
      <Term
        lead="У ЭТОГО ПРАВА ЕСТЬ ИМЯ"
        term="DRAG-ALONG"
        note="Владелец большей доли вправе обязать остальных продать — по той же цене"
      />
    </Sequence>
    <Sequence from={BEATS.mirror.from} durationInFrames={BEATS.mirror.len}>
      <Mirror />
    </Sequence>
    <Sequence from={BEATS.tag.from} durationInFrames={BEATS.tag.len}>
      <Term
        lead="ВАША ЗАЩИТА НАЗЫВАЕТСЯ"
        term="TAG-ALONG"
        note="Право уйти вместе с ним — на тех же условиях"
      />
    </Sequence>
    <Sequence from={BEATS.close.from} durationInFrames={BEATS.close.len}>
      <Close />
    </Sequence>
  </AbsoluteFill>
);
