/**
 * Drag-along and tag-along, explained on a coffee shop.
 *
 * The argument runs concrete first: a reader watches two people own a
 * business, watches a sale die, and only then is told that the thing
 * which would have saved it has a name. The piece turns on a flip,
 * because drag-along is the larger holder's clause and tag-along the
 * smaller holder's — so the viewer holds 70% in the first half, changes
 * sides, holds 30% in the second, and the close is that a contract needs
 * both lines.
 *
 * The holdings are lit 3D objects in a studio (see world/World.tsx); the
 * type stays in the DOM on top of them. Each beat is its own shot with
 * its own slow camera move, and the edit cuts between shots the way a
 * product film does.
 */

import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  interpolateColors,
  useCurrentFrame,
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
  LIGHT,
  Lines,
  Lockup,
  MEASURE,
  Note,
  Rail,
  RULE_Y,
  SIZE,
  Stage,
  Term as TermWord,
} from "./kit";
import { Bridge } from "./Bridge";
import { Cue, Sound } from "./Sound";
import { deg, mixPose, Pose } from "./world/camera";
import { Mark } from "./world/Mark";
import {
  BAR_L,
  BlockState,
  MAJOR_L,
  MAJOR_X,
  MINOR_L,
  MINOR_X,
  GAP,
  BLOCK_H,
  PAD_D,
  World,
} from "./world/World";

const HANDOFF = 12;

// ── the clock ────────────────────────────────────────────────────────

/**
 * Where each beat starts, in frames, read off the voiceover's word
 * timings. The read is the master clock: a beat starts a few frames
 * ahead of its first word, so the picture leads the voice.
 */
const START = {
  stake: 0,
  setup: 80,
  buyer: 217,
  refusal: 327,
  bridge: 416,
  dragTerm: 476,
  dragDemo: 600,
  flip: 693,
  stranded: 800,
  tagTerm: 924,
  tagDemo: 999,
  close: 1085,
};
type Key = keyof typeof START;
const ORDER = Object.keys(START) as Key[];

/** The voice ends at 42.2s; the last frame holds a second past it. */
export const TOTAL = 1297;

/** How each beat comes in. A cut costs no overlap; the rest eat HANDOFF. */
const ENTRY: Record<Key, "cut" | "push-up" | "push-left" | "push-right" | "wipe" | "fade"> = {
  stake: "cut",
  setup: "push-up",
  buyer: "wipe",
  refusal: "cut",
  bridge: "cut",
  dragTerm: "cut",
  dragDemo: "push-up",
  flip: "push-left",
  stranded: "push-right",
  tagTerm: "fade",
  tagDemo: "push-up",
  close: "push-up",
};

const len = (k: Key) => {
  const i = ORDER.indexOf(k);
  const next = ORDER[i + 1];
  if (!next) return TOTAL - START[k];
  return START[next] - START[k] + (ENTRY[next] === "cut" ? 0 : HANDOFF);
};

// ── motion vocabulary ────────────────────────────────────────────────

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
/** Camera: slow in, slower out — a dolly on a track, not a spring. */
const glide = Easing.bezier(0.45, 0, 0.2, 1);
/** Objects arriving: fast, then a long settle. */
const land = Easing.bezier(0.16, 1, 0.3, 1);
const swap = Easing.bezier(0.65, 0, 0.35, 1);

const ramp = (f: number, a: number, b: number, ease = swap) =>
  interpolate(f, [a, b], [0, 1], { ...clamp, easing: ease });

// ── the shots ────────────────────────────────────────────────────────

/**
 * A long lens, the bar a little below centre, the type band left clear.
 * Pulled back and nudged left so the 30% never runs under Instagram's
 * action rail (x > 900 through the middle of the frame).
 */
const lens = (p: Partial<Pose>): Pose => ({
  az: 0,
  el: deg(13),
  dist: 23.4,
  target: [0.25, 0.5, 0],
  fov: 30,
  shiftY: 110,
  ...p,
});

const move = (frame: number, n: number, a: Pose, b: Pose) =>
  mixPose(a, b, ramp(frame, 0, n, glide));

/**
 * Where the buyer's footprint sits: straight behind the bar, upstage. A
 * portrait frame is too narrow to hold the bar and the whole-bar pad side
 * by side, but it is tall — so the sale travels into depth, and the pad
 * lands in the band between the headline and the bar.
 */
const PAD_Z = -6;

const seats = (
  major: Partial<BlockState> = {},
  minor: Partial<BlockState> = {},
): BlockState[] => [
  { id: "major", x: MAJOR_X, len: MAJOR_L, tone: "ceramic", label: "70%", ...major },
  { id: "minor", x: MINOR_X, len: MINOR_L, tone: "red", label: "30%", ...minor },
];

/** The wide shot that holds both the bar and the pad behind it. */
const upstage = lens({ az: deg(8), el: deg(18), dist: 31, target: [0.3, 0.5, -3], shiftY: 40 });

/**
 * "ПОКУПАТЕЛЬ", written just behind the pad, and lifted with the
 * silhouette as it appears — so it never floats over empty floor.
 */
const BuyerMark: React.FC<{ pose: Pose; opacity: number; rise: number }> = ({
  pose,
  opacity,
  rise,
}) => (
  <Mark
    pose={pose}
    x={0}
    y={BLOCK_H * rise}
    z={PAD_Z - PAD_D / 2 - 0.4}
    text="ПОКУПАТЕЛЬ"
    color={INK}
    opacity={opacity}
    dy={-58 - 8 * rise}
  />
);

/** "Вы" is ink while you hold the ceramic 70%, and turns red with the flip. */
const YOU_FIRST = INK;

// ── beats ────────────────────────────────────────────────────────────

/**
 * Frame 0 is the cover in the feed, so it carries the whole stake
 * already arrived — and the one object the stake is about, alone.
 */
const Stake: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(30), el: deg(10), dist: 12.5, shiftY: 120 }),
    lens({ az: deg(18), el: deg(11), dist: 11.3, shiftY: 120 }),
  );
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.03}
      foot={<Lockup instant />}
      world={
        <World
          pose={pose}
          focus={0}
          blocks={[{ id: "minor", x: 0, len: MINOR_L, tone: "red", label: "30%" }]}
        />
      }
    >
      <Rail>
        <Lines
          lines={["30% МОГУТ", "ОТМЕНИТЬ", "ВАШУ СДЕЛКУ"]}
          accent="30%"
          instant
        />
      </Rail>
    </Stage>
  );
};

/**
 * The company arrives whole and divides. The smaller part slides clear,
 * overshoots and settles, and changes material as it goes: from here on
 * red is the 30%, whoever holds it.
 */
const Setup: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(18), dist: 24.5 }),
    lens({ az: deg(6) }),
  );
  const rise = interpolate(frame, [2, 26], [-1.06, 0], { ...clamp, easing: land });
  const split = frame >= 48;
  // Both halves spring apart and settle. The 70% takes most of the
  // recoil: the 30% sits by Instagram's action rail and can only open by
  // a hair past its seat.
  const open = interpolate(frame, [48, 60, 80], [0, GAP + 0.07, GAP], {
    ...clamp,
    easing: swap,
  });
  const recoil = interpolate(frame, [48, 60, 80], [0, 0.32, 0], { ...clamp, easing: swap });
  const blocks: BlockState[] = split
    ? seats(
        { x: MAJOR_X - recoil, labelOpacity: ramp(frame, 58, 72) },
        {
          x: MINOR_X - GAP + open,
          tone: "ceramic",
          toneTo: "red",
          mix: ramp(frame, 52, 68),
          labelOpacity: ramp(frame, 62, 76),
        },
      )
    : [{ id: "whole", x: 0, y: rise, len: BAR_L, tone: "ceramic" }];
  return (
    <Stage
      len={len}
      dir="settle"
      foot={<Lockup delay={0} />}
      world={
        <>
          <World pose={pose} focus={MAJOR_X} blocks={blocks} />
          <Mark pose={pose} x={MAJOR_X} text="ВЫ" color={YOU_FIRST} opacity={ramp(frame, 54, 64)} />
          <Mark pose={pose} x={MINOR_X} text="ПАРТНЁР" opacity={ramp(frame, 92, 102)} />
        </>
      }
    >
      <Rail gap={40}>
        <Lines lines={["КОФЕЙНЯ", "НА ДВОИХ"]} max={150} delay={2} />
        <Note text="У вас 70%, у партнёра 30%." delay={50} />
      </Rail>
    </Stage>
  );
};

/**
 * The buyer is a footprint of light the exact shape of the whole bar —
 * so "he wants all of it" is a picture, not a sentence. The camera
 * trucks across to find it.
 */
const Buyer: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  // A crane up and back from the last shot's framing, to find the pad.
  const pose = mixPose(lens({ az: deg(6) }), upstage, ramp(frame, 0, 76, glide));
  const ghost = ramp(frame, 82, 98);
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      foot={<Lockup instant />}
      world={
        <>
          <World
            pose={pose}
            focus={0}
            blocks={seats()}
            pad={{
              x: 0,
              z: PAD_Z,
              on: ramp(frame, 8, 24, land),
              ghost,
            }}
          />
          <Mark pose={pose} x={MAJOR_X} text="ВЫ" color={YOU_FIRST} />
          <Mark pose={pose} x={MINOR_X} text="ПАРТНЁР" />
          <BuyerMark pose={pose} opacity={ramp(frame, 20, 32)} rise={ghost} />
        </>
      }
    >
      <Rail gap={22}>
        <Eyebrow text="ПРИХОДИТ ПОКУПАТЕЛЬ" delay={6} />
        <Lines lines={["НУЖНА ВСЯ", "КОФЕЙНЯ"]} max={150} delay={44} />
      </Rail>
    </Stage>
  );
};

/**
 * A cut in, close on the 30%. It shakes its head on the word "нет", and
 * on "сделки нет" the buyer's light goes red and out.
 */
const Refusal: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(12), el: deg(15), dist: 23.5, target: [0.8, 0.5, -3], shiftY: 40 }),
    lens({ az: deg(10), el: deg(14), dist: 22, target: [0.8, 0.5, -3], shiftY: 40 }),
  );
  const shake =
    frame >= 26 && frame < 48
      ? Math.sin((frame - 26) * 1.25) *
        interpolate(frame, [26, 48], [0.2, 0], clamp)
      : 0;
  const alarm = ramp(frame, 62, 70);
  const on = 1 - ramp(frame, 72, 92);
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.03}
      punchAt={26}
      foot={<Lockup instant />}
      world={
        <>
          <World
            pose={pose}
            focus={MINOR_X}
            // The cut-in crops the 70%; its print would read "0%".
            blocks={seats({ labelOpacity: 0 }, { x: MINOR_X + shake })}
            pad={{ x: 0, z: PAD_Z, on, alarm, ghost: 1 }}
          />
          <Mark pose={pose} x={MINOR_X} text="ПАРТНЁР" />
        </>
      }
    >
      <Rail gap={40}>
        <Lines lines={["ПАРТНЁР", "ГОВОРИТ НЕТ"]} accent="НЕТ" max={150} delay={0} />
        <Note text="Сделки нет." delay={60} />
      </Rail>
    </Stage>
  );
};

/**
 * A term arriving after the problem it solves. Type only, on the light
 * ground: a chapter break, and the one shot with nothing to look at but
 * the word.
 */
const Term: React.FC<{
  len: number;
  lead: string;
  term: string;
  note?: string;
  mode: "drag" | "tag";
  /** When the term itself lands, on the word in the voiceover. */
  at?: number;
  noteAt?: number;
  /** The rule was already drawn by the bridge, so it must not draw again. */
  carried?: boolean;
}> = ({ len, lead, term, note, mode, at = 8, noteAt = 28, carried = false }) => {
  const from = mode === "drag" ? 1.04 : 0.94;
  return (
    <Stage
      len={len}
      light
      dir={mode === "drag" ? "push" : "settle"}
      amount={0.022}
      foot={<Lockup instant dark />}
    >
      <Rail gap={22}>
        <Eyebrow text={lead} color={LIGHT.sub} delay={carried ? 0 : 4} />
        <TermWord text={term} scaleFrom={from} color={LIGHT.ink} delay={at} />
      </Rail>
      <div style={{ position: "absolute", left: 96, top: RULE_Y }}>
        <Hairline
          delay={carried ? -40 : at + 10}
          from={mode === "drag" ? "left" : "right"}
          width={MEASURE}
          weight={3}
          color={ACCENT}
        />
      </div>
      {note ? (
        <div style={{ position: "absolute", left: 96, top: RULE_Y + 32 }}>
          <Note text={note} delay={noteAt} color={LIGHT.sub} width={780} />
        </div>
      ) : null}
    </Stage>
  );
};

/** Wide, three-quarter, the buyer's light on: the stage for a sale. */
const demoTo = lens({ az: deg(4), el: deg(20), dist: 27, target: [0.25, 0.5, -4.4], shiftY: 70 });

/**
 * The clause acted out. Both demos are the same picture twice and the
 * difference is the lesson: under drag-along the 30% leaves locked to the
 * 70%, one rigid body; under tag-along it starts late and catches up —
 * taken, versus choosing to come.
 */
const Demo: React.FC<{
  len: number;
  mode: "drag" | "tag";
  lead: string;
  lines: string[];
  note?: string;
  leadAt: number;
  linesAt: number;
  noteAt?: number;
  /** When the 70% sets off. */
  go: number;
}> = ({ len, mode, lead, lines, note, leadAt, linesAt, noteAt, go }) => {
  const frame = useCurrentFrame();
  const trip = (start: number, n: number) =>
    interpolate(frame, [start, start + n], [0, PAD_Z], { ...clamp, easing: swap });
  const major = trip(go, 34);
  const minor = mode === "drag" ? major : trip(go + 16, 30);
  const arrived = Math.max(major, minor) / PAD_Z;
  const pose = mixPose(upstage, demoTo, ramp(frame, go - 6, go + 50, glide));
  const fill = ramp(frame, go + (mode === "drag" ? 30 : 42), go + (mode === "drag" ? 42 : 54));
  const you = mode === "drag" ? "major" : "minor";
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.03}
      foot={<Lockup delay={0} />}
      world={
        <>
          <World
            pose={pose}
            focus={you === "major" ? MAJOR_X : MINOR_X}
            focusZ={you === "major" ? major : minor}
            blocks={seats({ z: major }, { z: minor })}
            pad={{ x: 0, z: PAD_Z, on: 1, fill, ghost: 1 - arrived }}
          />
          <Mark
            pose={pose}
            x={MAJOR_X}
            z={major}
            text={you === "major" ? "ВЫ" : "ПАРТНЁР"}
            color={you === "major" ? YOU_FIRST : SUB}
          />
          <Mark
            pose={pose}
            x={MINOR_X}
            z={minor}
            text={you === "minor" ? "ВЫ" : "ПАРТНЁР"}
            color={you === "minor" ? ACCENT : SUB}
          />
        </>
      }
    >
      <Rail gap={22}>
        <Eyebrow text={lead} delay={leadAt} />
        <Lines lines={lines} max={SIZE.caption + 24} delay={linesAt} />
        {note ? (
          <>
            <div style={{ height: 12 }} />
            <Note text={note} delay={noteAt} />
          </>
        ) : null}
      </Rail>
    </Stage>
  );
};

/**
 * "Change places" played as a camera move: the shot swings round the
 * bar, and the light — which has followed "you" the whole first half —
 * crosses from the 70% to the 30%.
 */
const Flip: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = mixPose(
    // Starting further round than -16° puts the rim light's mirror
    // highlight on the floor in shot: a beige flash, not a camera move.
    lens({ az: deg(-16), el: deg(14), dist: 24 }),
    lens({ az: deg(24), el: deg(13), dist: 24.3, target: [0.35, 0.5, 0] }),
    ramp(frame, 2, 72, glide),
  );
  const cross = ramp(frame, 62, 82);
  return (
    <Stage
      len={len}
      dir="settle"
      punchAt={64}
      foot={<Lockup delay={0} />}
      world={
        <>
          <World
            pose={pose}
            focus={MAJOR_X + (MINOR_X - MAJOR_X) * cross}
            blocks={seats()}
          />
          <Mark
            pose={pose}
            x={MAJOR_X + (MINOR_X - MAJOR_X) * cross}
            text="ВЫ"
            color={interpolateColors(cross, [0.3, 0.8], [YOU_FIRST, ACCENT])}
          />
          <Mark pose={pose} x={MINOR_X} text="ПАРТНЁР" opacity={1 - ramp(frame, 56, 62)} />
          <Mark pose={pose} x={MAJOR_X} text="ПАРТНЁР" opacity={ramp(frame, 80, 90)} />
        </>
      }
    >
      <Rail gap={40}>
        <Lines lines={["ТЕПЕРЬ", "НАОБОРОТ"]} max={168} delay={2} />
        <Note text={"Меньшая доля\u00a0— ваша."} delay={62} />
      </Rail>
    </Stage>
  );
};

/**
 * The partner's 70% goes down through the floor like a stage lift, the
 * seat stands empty for a breath, and a graphite block — a stranger —
 * comes up into it.
 */
const Stranded: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(14), dist: 24, target: [0.3, 0.5, 0] }),
    lens({ az: deg(5), dist: 23.2 }),
  );
  const down = interpolate(frame, [22, 46], [0, -1.08], {
    ...clamp,
    easing: Easing.in(Easing.cubic),
  });
  const up = interpolate(frame, [84, 108], [-1.08, 0], { ...clamp, easing: land });
  const stranger = frame >= 84;
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.03}
      foot={<Lockup delay={0} />}
      world={
        <>
          <World
            pose={pose}
            focus={MINOR_X * 0.6}
            blocks={seats(
              stranger
                ? { id: "stranger", y: up, tone: "graphite", labelOpacity: ramp(frame, 96, 106) }
                : { y: down, labelOpacity: 1 - ramp(frame, 22, 30) },
            )}
          />
          <Mark pose={pose} x={MINOR_X} text="ВЫ" color={ACCENT} />
          <Mark pose={pose} x={MAJOR_X} text="ПАРТНЁР" opacity={1 - ramp(frame, 22, 34)} />
          <Mark pose={pose} x={MAJOR_X} text="ЧУЖОЙ" color={INK} opacity={ramp(frame, 92, 100)} />
        </>
      }
    >
      <Rail gap={40}>
        <Lines lines={["ПАРТНЁР", "ПРОДАЁТ", "ПЕРВЫМ"]} max={150} delay={2} />
        <Note text={"На\u00a0его месте\u00a0— чужой человек."} delay={56} />
      </Rail>
    </Stage>
  );
};

/**
 * The two blocks back together, the camera on a slow arc, and each line
 * written under the holding it protects.
 */
const Close: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(-12), el: deg(12), dist: 24.3, target: [0.2, 0.5, 0], shiftY: 140 }),
    lens({ az: deg(8), el: deg(12), dist: 23.4, target: [0.3, 0.5, 0], shiftY: 140 }),
  );
  return (
    <Stage
      len={len}
      dir="settle"
      amount={0.02}
      foot={<Lockup delay={0} />}
      world={
        <>
          <World pose={pose} focus={0} blocks={seats()} />
          <Mark pose={pose} x={MAJOR_X} text="DRAG-ALONG" color={INK} opacity={ramp(frame, 96, 108)} />
          <Mark pose={pose} x={MINOR_X} text="TAG-ALONG" color={ACCENT} opacity={ramp(frame, 104, 116)} />
        </>
      }
    >
      <Rail gap={34}>
        <Lines lines={["НУЖНЫ ОБЕ", "СТРОКИ"]} accent="ОБЕ" max={168} delay={2} />
        <Note text={"Какая защитит именно вас\u00a0— зависит от\u00a0доли."} delay={52} />
        <div
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: 52,
            letterSpacing: "0.02em",
            color: INK,
            opacity: interpolate(frame, [136, 150], [0, 1], clamp),
            marginTop: 10,
          }}
        >
          ПРОВЕРЬТЕ СВОЙ ДОГОВОР
        </div>
      </Rail>
    </Stage>
  );
};

// ── the piece ────────────────────────────────────────────────────────

const entry = (k: Key) => {
  const e = ENTRY[k];
  if (e === "cut") return null;
  if (e === "wipe")
    return (
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: HANDOFF })}
      />
    );
  if (e === "fade")
    return (
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: HANDOFF })}
      />
    );
  const direction =
    e === "push-up" ? "from-bottom" : e === "push-left" ? "from-right" : "from-left";
  return (
    <TransitionSeries.Transition
      presentation={slide({ direction })}
      timing={springTiming({ config: { damping: 200 }, durationInFrames: HANDOFF })}
    />
  );
};

const DragTerm: React.FC<{ len: number }> = ({ len }) => (
  <Term
    len={len}
    carried
    mode="drag"
    lead="ЭТОЙ СТРОКИ НЕ БЫЛО В ДОГОВОРЕ"
    term="DRAG-ALONG"
    at={0}
    note={"С ней вы могли бы обязать партнёра продать\u00a0— по\u00a0той же цене."}
    noteAt={20}
  />
);

const DragDemo: React.FC<{ len: number }> = ({ len }) => (
  <Demo
    len={len}
    mode="drag"
    lead="ПО ТОЙ ЖЕ ЦЕНЕ"
    lines={["ВЫБОРА НЕТ"]}
    leadAt={6}
    linesAt={40}
    go={12}
  />
);

const TagTerm: React.FC<{ len: number }> = ({ len }) => (
  <Term len={len} mode="tag" lead="ВАША СТРОКА В ДОГОВОРЕ" term="TAG-ALONG" at={32} />
);

const TagDemo: React.FC<{ len: number }> = ({ len }) => (
  <Demo
    len={len}
    mode="tag"
    lead="ПРАВО"
    lines={["УЙТИ", "ВМЕСТЕ С НИМ"]}
    note={"На\u00a0тех же условиях."}
    leadAt={4}
    linesAt={14}
    noteAt={48}
    go={6}
  />
);

const BEAT: Record<Key, React.FC<{ len: number }>> = {
  stake: Stake,
  setup: Setup,
  buyer: Buyer,
  refusal: Refusal,
  bridge: Bridge,
  dragTerm: DragTerm,
  dragDemo: DragDemo,
  flip: Flip,
  stranded: Stranded,
  tagTerm: TagTerm,
  tagDemo: TagDemo,
  close: Close,
};

// ── sound ────────────────────────────────────────────────────────────

/** A push or wipe peaks halfway through its HANDOFF. */
const mid = (k: Key) => START[k] + HANDOFF / 2;

export const CUES: Cue[] = [
  // The cover lands on a hit, so the first frame has weight.
  { sfx: "hit", at: 0, gain: 0.55 },
  ...(["setup", "buyer", "dragDemo", "flip", "stranded", "tagDemo", "close"] as Key[]).map(
    (k): Cue => ({ sfx: "whoosh", at: mid(k), gain: 0.32 }),
  ),
  // The split settling into its seat.
  { sfx: "click", at: START.setup + 80, gain: 0.5 },
  // "нет": the head-shake and the punch.
  { sfx: "hit", at: START.refusal + 26, gain: 0.9 },
  // "и сделки нет": the buyer's light dying.
  { sfx: "thud", at: START.refusal + 62, gain: 1 },
  // The line turning its corner.
  { sfx: "whoosh", at: START.bridge + 22, gain: 0.22 },
  // Drag: one rigid body lands.
  { sfx: "click", at: START.dragDemo + 12 + 34, gain: 0.8 },
  // The partner going down, the stranger coming up.
  { sfx: "thud", at: START.stranded + 46, gain: 1 },
  { sfx: "click", at: START.stranded + 98, gain: 0.7 },
  // Tag: two landings, the second one yours.
  { sfx: "click", at: START.tagDemo + 6 + 34, gain: 0.6 },
  { sfx: "click", at: START.tagDemo + 6 + 16 + 30, gain: 0.8 },
];

export const DragAlong: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG }}>
    <Sound cues={CUES} total={TOTAL} fps={30} />
    <TransitionSeries>
      {ORDER.map((k) => {
        const Beat = BEAT[k];
        return (
          <React.Fragment key={k}>
            {entry(k)}
            <TransitionSeries.Sequence durationInFrames={len(k)}>
              <Beat len={len(k)} />
            </TransitionSeries.Sequence>
          </React.Fragment>
        );
      })}
    </TransitionSeries>
  </AbsoluteFill>
);

/** Where each beat starts and how long it runs, for checking stills. */
export const TIMELINE = ORDER.map((k) => ({ key: k, start: START[k], len: len(k) }));
