/**
 * Drag-along and tag-along, explained on a coffee shop.
 *
 * The argument runs concrete first: a reader watches two people own a
 * business, watches a sale die, and only then is told that the thing
 * which would have saved it has a name.
 *
 * The piece turns on a flip. Drag-along is the larger holder's clause
 * and tag-along is the smaller holder's, so the viewer cannot stay on
 * one side of the table for thirty seconds. The seventh beat plays that
 * rather than hiding it: the marker saying which share is yours slides
 * from the larger row to the smaller one, and the close is that a
 * contract needs both lines because which one protects you depends on
 * where you are sitting.
 *
 * Layout obeys kit.tsx: one grid, one rail, three springs. The two term
 * beats are set flush right and everything else flush left, so the
 * argument has a shape before any of it has moved. The ring keeps one
 * seat in the frame across every beat it appears in.
 */

import React from "react";
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import "./font";
import { ACCENT, BG, FONT, INK, SUB } from "./theme";
import {
  BAND_Y,
  Eyebrow,
  Hairline,
  Headline,
  Lockup,
  MARGIN,
  MEASURE,
  Note,
  Rail,
  SIZE,
  TERM,
  Stage,
  hero,
} from "./kit";
import { Arrow, Block, Ring, Shares } from "./Ring";

const BEATS = [
  { key: "stake", len: 54 },
  { key: "hook", len: 78 },
  { key: "buyer", len: 84 },
  { key: "refusal", len: 60 },
  { key: "dead", len: 72 },
  { key: "dragTerm", len: 78 },
  { key: "dragDemo", len: 60 },
  { key: "flip", len: 72 },
  { key: "stranded", len: 84 },
  { key: "tagTerm", len: 78 },
  { key: "tagDemo", len: 60 },
  { key: "close", len: 90 },
];

const AT: Record<string, { from: number; len: number }> = {};
BEATS.reduce((from, b) => {
  AT[b.key] = { from, len: b.len };
  return from + b.len;
}, 0);

export const TOTAL = BEATS.reduce((n, b) => n + b.len, 0);

/** Every beat knows its own length and its absolute start. */
type Beat = { len: number; at: number };

// The ring's seat. Every beat that shows it puts it here, so it never
// jumps across a cut; only its arcs, colour and travel change.
const RING = { cx: 630, cy: 1000, r: 190, stroke: 46 };
// Mirrored for the term beats, still clear of the rail.
const RING_MIRROR = { ...RING, cx: 400 };

// ── beats ────────────────────────────────────────────────────────────

/**
 * Frame 0 is the cover frame in the feed, so it carries the whole stake
 * already arrived — no assembly, no empty black. The ring is one
 * unbroken circle here and divides in the next beat: drawing it on from
 * nothing looks like a buffering spinner and throws away the strongest
 * idea in the picture, which is one business becoming two.
 */
const Stake: React.FC<Beat> = ({ len, at }) => (
  <Stage len={len} dir="push" amount={0.035} graphic={<Ring {...RING} clock={at} major={1} />}>
    <Rail>
      <Headline
        text="30% МОГУТ ОТМЕНИТЬ СДЕЛКУ"
        size={SIZE.head}
        accent="30%"
        instant
      />
    </Rail>
    <Lockup instant />
  </Stage>
);

const Hook: React.FC<Beat> = ({ len, at }) => {
  const frame = useCurrentFrame();
  // The circle divides rather than draws: one gesture, and it carries
  // the meaning instead of merely revealing the graphic.
  const major = interpolate(frame, [4, 22], [1, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  return (
    <Stage
      len={len}
      dir="settle"
      graphic={
        <>
          <Ring {...RING} clock={at} major={major} />
          <Shares marker={0} delay={18} y={BAND_Y} width={430} />
        </>
      }
    >
      <Rail>
        <Headline text="КОФЕЙНЯ НА ДВОИХ" size={SIZE.head} />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

const Buyer: React.FC<Beat> = ({ len, at }) => (
  <Stage
    len={len}
    dir="push"
    graphic={
      <>
        <Ring {...RING} clock={at} />
        <Block text="ПОКУПАТЕЛЬ" delay={10} y={960} />
        <Arrow delay={20} x={330} y={806} height={200} rotate={90} />
      </>
    }
  >
    <Rail gap={44}>
      <Headline text="ПРИХОДИТ ПОКУПАТЕЛЬ" size={SIZE.head} />
      <Note text="Ему нужна вся кофейня. 70% не подойдут." delay={26} />
    </Rail>
    <Lockup delay={0} />
  </Stage>
);

const Refusal: React.FC<Beat> = ({ len, at }) => {
  const frame = useCurrentFrame();
  // One flinch through the whole frame on the refusal, then still. A
  // shake that runs the beat reads as a broken render, not as a shock.
  const kick =
    frame >= 8 && frame < 30
      ? Math.cos((frame - 8) * 1.1) *
        interpolate(frame, [8, 30], [16, 0], { extrapolateRight: "clamp" })
      : 0;
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.035}
      punchAt={8}
      graphic={
        <AbsoluteFill style={{ transform: `translateX(${kick}px)` }}>
          <Ring {...RING} clock={at} />
          <Block text="ПОКУПАТЕЛЬ" delay={0} y={960} />
          <Arrow delay={0} breakAt={8} x={330} y={806} height={200} rotate={90} />
        </AbsoluteFill>
      }
    >
      <Rail>
        <Headline text="ПАРТНЁР ГОВОРИТ НЕТ" size={SIZE.head} delay={4} />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

const Dead: React.FC<Beat> = ({ len, at }) => (
  <Stage
    len={len}
    dir="push"
    amount={0.035}
    graphic={<Ring {...RING} clock={at} opacity={0.22} />}
  >
    <Rail gap={40}>
      <Headline text="СДЕЛКИ НЕТ" size={SIZE.hit} accent="НЕТ" blur />
      <Note
        text="Либо вся компания, либо ничего."
        delay={10}
        size={46}
      />
    </Rail>
    <Lockup delay={0} />
  </Stage>
);

/**
 * A term arriving after the problem it solves.
 *
 * The two of them must rhyme without repeating, so drag lands from above
 * its size — the larger holder's power, something arriving on you — and
 * tag reaches up to it, something you take hold of. The rule runs the
 * full measure under both, wiping from opposite sides.
 */
const Term: React.FC<Beat & {
  lead: string;
  term: string;
  note: string;
  size: number;
  mode: "drag" | "tag";
}> = ({ len, at, lead, term, note, size, mode }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = hero(frame, fps, 8);
  const from = mode === "drag" ? 1.14 : 0.86;
  return (
    <Stage
      len={len}
      dir={mode === "drag" ? "push" : "settle"}
      amount={0.03}
      graphic={
        <Ring
          {...RING_MIRROR} clock={at}
          opacity={0.2}
        />
      }
    >
      <Rail align="right" gap={22}>
        <Eyebrow text={lead} />
        <div
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: size,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: INK,
            opacity: Math.min(1, s * 1.6),
            transform: `scale(${interpolate(s, [0, 1], [from, 1])})`,
            transformOrigin: "right center",
            whiteSpace: "nowrap",
            filter: `blur(${(1 - Math.min(1, s)) * 6}px)`,
          }}
        >
          {term}
        </div>
        <Hairline
          delay={22}
          from={mode === "drag" ? "left" : "right"}
          width={MEASURE}
          weight={2}
          color={ACCENT}
        />
        <Note text={note} delay={30} />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

/**
 * The clause acted out.
 *
 * Both demos are the same picture twice and the difference between them
 * is the whole lesson: under drag-along the smaller share leaves locked
 * to the larger one, under tag-along it chooses and follows a beat
 * behind. The shares travel to the buyer rather than off-screen — a
 * share drifting into nothing reads as a glitch, a share arriving
 * somewhere reads as a sale.
 */
const Demo: React.FC<Beat & { mode: "drag" | "tag"; caption: string }> = ({
  len,
  at,
  mode,
  caption,
}) => {
  const frame = useCurrentFrame();
  const trip = (delay: number) =>
    interpolate(frame, [delay, delay + 26], [0, 350], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    });
  const major = trip(14);
  const minor = mode === "drag" ? major : trip(26);
  const landed = interpolate(frame, [40, 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.04}
      graphic={
        <>
          <Ring
            cx={330}
            cy={1000}
            r={178}
            stroke={44}
            clock={at}
            majorPull={major}
            minorPull={minor}
            minorColor={mode === "tag" ? ACCENT : SUB}
          />
          <div
            style={{
              position: "absolute",
              right: MARGIN,
              top: 1110,
              backgroundColor: "#1A1917",
              padding: "22px 36px",
              fontFamily: FONT,
              fontWeight: 800,
              fontSize: 38,
              letterSpacing: "0.03em",
              color: INK,
              transform: `scale(${1 + landed * 0.07})`,
            }}
          >
            ПОКУПАТЕЛЬ
          </div>
        </>
      }
    >
      <Rail>
        <Headline text={caption} size={SIZE.caption} />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

const Flip: React.FC<Beat> = ({ len, at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const marker = hero(frame, fps, 24);
  return (
    <Stage
      len={len}
      dir="settle"
      punchAt={24}
      graphic={
        <>
          <Ring {...RING} clock={at} />
          <Shares
            marker={marker}
            delay={0}
            count={false}
            y={BAND_Y}
            width={430}
          />
        </>
      }
    >
      <Rail gap={40}>
        <Headline text="ТЕПЕРЬ НАОБОРОТ" size={SIZE.head} />
        <Note
          text="Теперь меньшая доля ваша."
          delay={34}
        />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

const Stranded: React.FC<Beat> = ({ len, at }) => {
  const frame = useCurrentFrame();
  // Anticipation, then out: a wind-up back towards the ring before the
  // larger share leaves, so the one argument-carrying move in the piece
  // does not read as a constant slide.
  const back = interpolate(frame, [14, 22], [0, 26], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const out = interpolate(frame, [22, 50], [0, 820], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const gone = interpolate(frame, [44, 52], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const arriving = interpolate(frame, [50, 64], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <Stage
      len={len}
      dir="push"
      graphic={
        <>
          <Ring
            {...RING_MIRROR} clock={at}
            majorPull={back + out}
            minorColor="transparent"
            opacity={gone}
          />
          <Ring
            {...RING_MIRROR} clock={at}
            stranger
            opacity={arriving}
            minorColor="transparent"
          />
          <Ring {...RING_MIRROR} clock={at} majorColor="transparent" minorColor={ACCENT} />
        </>
      }
    >
      <Rail align="right" gap={40}>
        <Headline text="ПАРТНЁР ПРОДАЁТ" size={SIZE.head} align="right" />
        <Note
          text="На его месте — чужой человек."
          delay={62}
        />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

const Close: React.FC<Beat> = ({ len, at }) => {
  const frame = useCurrentFrame();
  // The ring ghosts back as the piece ends so the loop to frame 0 reads
  // as deliberate rather than as a cut to black.
  const ghost = interpolate(frame, [len - 22, len - 2], [0, 0.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Stage
      len={len}
      dir="settle"
      amount={0.025}
      hold
      graphic={<Ring {...RING} clock={at} opacity={ghost} />}
    >
      <Rail gap={44}>
        <Headline text="НУЖНЫ ОБЕ СТРОКИ" size={140} accent="ОБЕ" />
        <Note
          text="Какая защищает вас — зависит от доли."
          delay={12}
        />
        <Headline
          text="ПРОВЕРЬТЕ СВОЙ ДОГОВОР"
          size={56}
          delay={26}
        />
      </Rail>
      <Lockup delay={34} />
    </Stage>
  );
};

// ── the piece ────────────────────────────────────────────────────────

export const DragAlong: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG }}>
    <Sequence from={AT.stake.from} durationInFrames={AT.stake.len}>
      <Stake len={AT.stake.len} at={AT.stake.from} />
    </Sequence>
    <Sequence from={AT.hook.from} durationInFrames={AT.hook.len}>
      <Hook len={AT.hook.len} at={AT.hook.from} />
    </Sequence>
    <Sequence from={AT.buyer.from} durationInFrames={AT.buyer.len}>
      <Buyer len={AT.buyer.len} at={AT.buyer.from} />
    </Sequence>
    <Sequence from={AT.refusal.from} durationInFrames={AT.refusal.len}>
      <Refusal len={AT.refusal.len} at={AT.refusal.from} />
    </Sequence>
    <Sequence from={AT.dead.from} durationInFrames={AT.dead.len}>
      <Dead len={AT.dead.len} at={AT.dead.from} />
    </Sequence>
    <Sequence from={AT.dragTerm.from} durationInFrames={AT.dragTerm.len}>
      <Term
        len={AT.dragTerm.len} at={AT.dragTerm.from}
        mode="drag"
        size={TERM.drag}
        lead="У ЭТОГО ПРАВА ЕСТЬ ИМЯ"
        term="DRAG-ALONG"
        note="Владелец большей доли вправе обязать остальных продать — по той же цене."
      />
    </Sequence>
    <Sequence from={AT.dragDemo.from} durationInFrames={AT.dragDemo.len}>
      <Demo len={AT.dragDemo.len} at={AT.dragDemo.from} mode="drag" caption="ВЫБОРА У НЕЁ НЕТ" />
    </Sequence>
    <Sequence from={AT.flip.from} durationInFrames={AT.flip.len}>
      <Flip len={AT.flip.len} at={AT.flip.from} />
    </Sequence>
    <Sequence from={AT.stranded.from} durationInFrames={AT.stranded.len}>
      <Stranded len={AT.stranded.len} at={AT.stranded.from} />
    </Sequence>
    <Sequence from={AT.tagTerm.from} durationInFrames={AT.tagTerm.len}>
      <Term
        len={AT.tagTerm.len} at={AT.tagTerm.from}
        mode="tag"
        size={TERM.tag}
        lead="ВАША ЗАЩИТА НАЗЫВАЕТСЯ"
        term="TAG-ALONG"
        note="Право уйти вместе с ним — на тех же условиях."
      />
    </Sequence>
    <Sequence from={AT.tagDemo.from} durationInFrames={AT.tagDemo.len}>
      <Demo len={AT.tagDemo.len} at={AT.tagDemo.from} mode="tag" caption="ВЫБОР ЕЁ" />
    </Sequence>
    <Sequence from={AT.close.from} durationInFrames={AT.close.len}>
      <Close len={AT.close.len} at={AT.close.from} />
    </Sequence>
  </AbsoluteFill>
);
