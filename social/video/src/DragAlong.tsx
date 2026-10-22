/**
 * Drag-along and tag-along, explained on a coffee shop.
 *
 * The argument runs concrete first: a reader watches two people own a
 * business, watches a sale die, and only then is told that the thing
 * which would have saved it has a name. The piece turns on a flip,
 * because drag-along is the larger holder's clause and tag-along the
 * smaller holder's — so the viewer changes sides halfway through, and
 * the close is that a contract needs both lines.
 *
 * Three things the first cut got wrong and this one fixes:
 *
 *   * It was too fast to read. Eleven beats at 2.6 seconds each left no
 *     time for a Russian headline and a sentence under it. Eight beats
 *     now, 3.5 to 5 seconds, sized to what the beat actually says.
 *   * Graphics landed on type. Everything below the type band now lives
 *     in one fixed lane with fixed coordinates, so the bar, the buyer
 *     and the arrow between them cannot reach the words.
 *   * Every beat looked the same. The ring is gone: a donut can only be
 *     redrawn or rotated, so it gave eleven identical frames and no
 *     picture of the mechanism. Blocks can be dragged and left behind,
 *     and half the beats now carry no graphic at all.
 */

import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";

import "./font";
import { ACCENT, BG, FONT, INK, SUB } from "./theme";
import {
  Eyebrow,
  Hairline,
  Lines,
  Lockup,
  MEASURE,
  Note,
  Rail,
  Stage,
  Term as TermWord,
  hero,
} from "./kit";
import { Bar, Buyer, Legend, Reach } from "./Bar";

const HANDOFF = 12;

const BEATS = [
  { key: "stake", len: 105 },
  { key: "setup", len: 126 },
  { key: "refusal", len: 156 },
  { key: "dragTerm", len: 156 },
  { key: "flip", len: 111 },
  { key: "stranded", len: 141 },
  { key: "tagTerm", len: 156 },
  { key: "close", len: 141 },
];

/** A transition eats its own length out of the two beats it joins. */
export const TOTAL =
  BEATS.reduce((n, b) => n + b.len, 0) - (BEATS.length - 1) * HANDOFF;

// ── beats ────────────────────────────────────────────────────────────

/**
 * Frame 0 is the cover frame in the feed, so it carries the whole stake
 * already arrived — no assembly, no empty black, no graphic to wait for.
 */
const Stake: React.FC<{ len: number }> = ({ len }) => (
  <Stage len={len} dir="push" amount={0.03}>
    <Rail>
      <Lines
        lines={["30% МОГУТ", "ОТМЕНИТЬ", "ВАШУ СДЕЛКУ"]}
        accent="30%"
        instant
      />
    </Rail>
    <Lockup instant />
  </Stage>
);

const Setup: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  // One bar arrives whole and divides. Drawing it on from nothing was
  // what made the old ring read as a loading spinner.
  const draw = interpolate(frame, [6, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const major = interpolate(frame, [26, 46], [1, 0.7], {
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
          <Bar draw={draw} major={major} />
          <Legend delay={48} />
        </>
      }
    >
      <Rail gap={40}>
        <Lines lines={["КОФЕЙНЯ", "НА ДВОИХ"]} max={150} />
        <Note text="У партнёра 70%, у вас 30%." delay={30} />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

/**
 * One beat for the whole collapse: the buyer reaches for the company,
 * the smaller block refuses, the reach breaks. Splitting the refusal and
 * the death across two beats spent eight seconds on one idea.
 */
const Refusal: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const kick =
    frame >= 54 && frame < 76
      ? Math.cos((frame - 54) * 1.1) *
        interpolate(frame, [54, 76], [14, 0], { extrapolateRight: "clamp" })
      : 0;
  const refused = frame >= 54;
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.03}
      punchAt={54}
      graphic={
        <AbsoluteFill style={{ transform: `translateX(${kick}px)` }}>
          <Bar minorColor={refused ? ACCENT : SUB} />
          <Legend delay={0} />
          <Buyer delay={6} />
          <Reach delay={22} breakAt={54} />
        </AbsoluteFill>
      }
    >
      <Rail gap={40}>
        <Lines lines={["ПАРТНЁР", "ГОВОРИТ НЕТ"]} max={150} delay={58} />
        <Note
          text="Покупателю нужна вся кофейня."
          delay={78}
        />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

/**
 * A term arriving after the problem it solves, and then acted out.
 *
 * The two of them rhyme without repeating: drag lands from above its own
 * size — the larger holder's power, something arriving on you — and tag
 * reaches up to it, something you take hold of. The rule under them
 * wipes from opposite sides.
 */
const Term: React.FC<{
  len: number;
  lead: string;
  term: string;
  note: string;
  caption: string;
  mode: "drag" | "tag";
}> = ({ len, lead, term, note, caption, mode }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = hero(frame, fps, 8);
  const from = mode === "drag" ? 1.12 : 0.88;

  const trip = (delay: number) =>
    interpolate(frame, [delay, delay + 32], [0, 270], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    });
  // Under drag-along the smaller block has no choice and leaves locked
  // to the larger one. Under tag-along it starts late and catches up,
  // which is the difference between being taken and choosing to come.
  const major = trip(84);
  const minor = mode === "drag" ? major : trip(96);
  const landed = interpolate(frame, [112, 126], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Stage
      len={len}
      dir={mode === "drag" ? "push" : "settle"}
      amount={0.025}
      graphic={
        <>
          <Bar
            majorPull={major}
            minorPull={minor}
            minorColor={mode === "tag" ? ACCENT : SUB}
          />
          <Buyer delay={72} landed={landed} />
        </>
      }
    >
      <Rail gap={20}>
        <Eyebrow text={lead} />
        <TermWord text={term} scaleFrom={from} />
        <Hairline
          delay={22}
          from={mode === "drag" ? "left" : "right"}
          width={MEASURE}
          weight={2}
          color={ACCENT}
        />
        <Note text={note} delay={34} />
      </Rail>
      <div
        style={{
          position: "absolute",
          left: 96,
          top: 1230,
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 44,
          letterSpacing: "0.02em",
          color: INK,
          opacity: interpolate(frame, [96, 110], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {caption}
      </div>
      <Lockup delay={0} />
    </Stage>
  );
};

const Flip: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const marker = hero(frame, fps, 34);
  return (
    <Stage
      len={len}
      dir="settle"
      punchAt={34}
      graphic={
        <>
          <Bar marker={marker} />
          <Legend delay={0} />
        </>
      }
    >
      <Rail gap={40}>
        <Lines lines={["ТЕПЕРЬ", "НАОБОРОТ"]} max={168} />
        <Note
          text="Меньшая доля теперь ваша."
          delay={44}
        />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

const Stranded: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  // A wind-up back towards the bar before the larger block leaves, so
  // the one argument-carrying move has anticipation instead of a
  // constant slide and a dead stop.
  // A wind-up down into the seat, then up and out.
  const back = interpolate(frame, [26, 34], [0, -16], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const out = interpolate(frame, [34, 66], [0, 230], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const stranger = frame >= 66;
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.03}
      graphic={
        <>
          <Bar
            majorLift={stranger ? 0 : back + out}
            minorColor={ACCENT}
            stranger={stranger}
          />
          <Buyer delay={40} landed={interpolate(frame, [64, 76], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })} />
        </>
      }
    >
      <Rail gap={40}>
        <Lines lines={["ПАРТНЁР", "ПРОДАЁТ", "ПЕРВЫМ"]} max={150} />
        <Note text="На его месте — чужой человек." delay={82} />
      </Rail>
      <Lockup delay={0} />
    </Stage>
  );
};

const Close: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  return (
    <Stage len={len} dir="settle" amount={0.02}>
      <Rail gap={38}>
        <Lines lines={["НУЖНЫ ОБЕ", "СТРОКИ"]} accent="ОБЕ" max={168} />
        <Note text="Какая защитит именно вас — зависит от доли." delay={14} />
        <div
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: 52,
            letterSpacing: "0.02em",
            color: INK,
            opacity: interpolate(frame, [34, 50], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            marginTop: 14,
          }}
        >
          ПРОВЕРЬТЕ СВОЙ ДОГОВОР
        </div>
      </Rail>
      <Lockup delay={46} />
    </Stage>
  );
};

// ── the piece ────────────────────────────────────────────────────────

const push = (direction: "from-right" | "from-left" | "from-bottom") => ({
  presentation: slide({ direction }),
  timing: springTiming({
    config: { damping: 200 },
    durationInFrames: HANDOFF,
  }),
});

const at = (key: string) => BEATS.find((b) => b.key === key)!.len;

export const DragAlong: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={at("stake")}>
        <Stake len={at("stake")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition {...push("from-bottom")} />

      <TransitionSeries.Sequence durationInFrames={at("setup")}>
        <Setup len={at("setup")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: HANDOFF })}
      />

      <TransitionSeries.Sequence durationInFrames={at("refusal")}>
        <Refusal len={at("refusal")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: HANDOFF })}
      />

      <TransitionSeries.Sequence durationInFrames={at("dragTerm")}>
        <Term
          len={at("dragTerm")}
          mode="drag"
          lead="У ЭТОГО ПРАВА ЕСТЬ ИМЯ"
          term="DRAG-ALONG"
          note="Вправе обязать остальных продать по той же цене."
          caption="ВЫБОРА У МЕНЬШЕЙ ДОЛИ НЕТ"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition {...push("from-right")} />

      <TransitionSeries.Sequence durationInFrames={at("flip")}>
        <Flip len={at("flip")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition {...push("from-left")} />

      <TransitionSeries.Sequence durationInFrames={at("stranded")}>
        <Stranded len={at("stranded")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: HANDOFF })}
      />

      <TransitionSeries.Sequence durationInFrames={at("tagTerm")}>
        <Term
          len={at("tagTerm")}
          mode="tag"
          lead="ВАША ЗАЩИТА НАЗЫВАЕТСЯ"
          term="TAG-ALONG"
          note="Право уйти вместе с ним — на тех же условиях."
          caption="МЕНЬШАЯ ДОЛЯ УХОДИТ САМА"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition {...push("from-bottom")} />

      <TransitionSeries.Sequence durationInFrames={at("close")}>
        <Close len={at("close")} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
