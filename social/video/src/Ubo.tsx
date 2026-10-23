/**
 * UBO, explained with a car registered to someone's mother.
 *
 * One idea carries the whole film: the bank and the tax office have both
 * stopped believing paper. Neither asks "whose name is on it" any more —
 * both ask "whose is it really". The car opens that question in a way
 * anyone already understands; the nested companies show the bank asking
 * it; the parcel and the courier show the tax office asking it about
 * money; and the car closes it.
 *
 * Three things a viewer should not have known before: every chain of
 * companies ends in a person; an extra layer does not hide anyone, it only
 * adds questions — and a layer that cannot be opened stops the payment; a
 * company that only passes dividends on is a courier, and gets no treaty
 * rate.
 */

import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import "./font";
import { ACCENT, BG } from "./theme";
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
  Stage,
  Term as TermWord,
} from "./kit";
import { deg, mixPose, Pose } from "./world/camera";
import { Mark } from "./world/Mark";
import { Model } from "./world/Model";
import { BLOCK_D, Reflect, Scene } from "./world/World";
import { Barrier, Doc, Parcel, Person, Puck, Rule, Scan, Sheet, Shell, Tray } from "./world/Props";
import { Cue, Sound } from "./Sound";

const HANDOFF = 12;

// ── the clock ────────────────────────────────────────────────────────

/** Beat starts in frames, read off the voiceover's word timings. */
const START = {
  hook: 0,
  bank: 184,
  term: 399,
  nest: 467,
  open: 607,
  layers: 713,
  refuse: 928,
  courier: 1035,
  conduit: 1213,
  sheet: 1488,
  callback: 1740,
};
type Key = keyof typeof START;
const ORDER = Object.keys(START) as Key[];

/** The voice ends at 64.3 s; the last frame holds a second past it. */
export const UBO_TOTAL = 1963;

/**
 * The bank beat's animation runs for this many frames and then holds.
 * The re-voiced line «Не — на кого́ она записана…» came out 23 frames
 * longer than the first take; the shot was already at rest, so it holds
 * still for the difference rather than everything else being re-timed.
 */
const BANK_ACTIVE = 192;

const ENTRY: Record<Key, "cut" | "push" | "fade"> = {
  hook: "cut",
  bank: "push",
  term: "cut",
  nest: "cut",
  open: "cut",
  layers: "cut",
  refuse: "cut",
  courier: "push",
  conduit: "cut",
  sheet: "push",
  callback: "fade",
};

const len = (k: Key) => {
  const i = ORDER.indexOf(k);
  const next = ORDER[i + 1];
  if (!next) return UBO_TOTAL - START[k];
  return START[next] - START[k] + (ENTRY[next] === "cut" ? 0 : HANDOFF);
};

// ── motion ───────────────────────────────────────────────────────────

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const glide = Easing.bezier(0.45, 0, 0.2, 1);
const land = Easing.bezier(0.16, 1, 0.3, 1);
const swap = Easing.bezier(0.65, 0, 0.35, 1);
const ramp = (f: number, a: number, b: number, ease = swap) =>
  interpolate(f, [a, b], [0, 1], { ...clamp, easing: ease });

const lens = (p: Partial<Pose>): Pose => ({
  az: 0,
  el: deg(13),
  dist: 21,
  target: [0, 0.6, 0],
  fov: 30,
  shiftY: 110,
  ...p,
});
const move = (frame: number, n: number, a: Pose, b: Pose) => mixPose(a, b, ramp(frame, 0, n, glide));

/** Mark under an object whose front face is at `front` (Mark adds BLOCK_D / 2). */
const at = (front: number) => front - BLOCK_D / 2;

// ── the nested companies ─────────────────────────────────────────────

/** Three companies, one inside the other, and the person at the centre. */
const LAYERS = [
  { w: 3.0, h: 1.6, d: 1.9, tone: "ceramic" as const, label: "ООО" },
  { w: 2.3, h: 1.25, d: 1.45, tone: "graphite" as const, label: "ХОЛДИНГ" },
  { w: 1.65, h: 0.95, d: 1.05, tone: "ceramic" as const, label: "КОМПАНИЯ" },
];
/** How high each layer floats once opened, so the outlines stack as a halo. */
const OPEN_LIFT = [0.9, 0.6, 0.32];

type LayerState = { solid: number; edges: number; lift: number };

const Matryoshka: React.FC<{
  x?: number;
  layers: LayerState[];
  glow: number;
  edgeColor?: string;
}> = ({ x = 0, layers, glow, edgeColor }) => (
  <>
    {LAYERS.map((l, i) => (
      <Shell
        key={l.label}
        x={x}
        w={l.w}
        h={l.h}
        d={l.d}
        tone={l.tone}
        label={l.label}
        solid={layers[i].solid}
        edges={layers[i].edges}
        lift={layers[i].lift}
        edgeColor={edgeColor}
      />
    ))}
    <Person x={x} scale={0.62} glow={glow} />
  </>
);

// ── beats ────────────────────────────────────────────────────────────

const CAR_X = -0.4;

/** The real-world cast: a car, a man, a van. Everything abstract stays built in. */
const CAR = "models/red-car.glb";
const MAN = "models/ankit.glb";
const VAN = "models/van.glb";
/** The van comes in DHL livery: repainted plain, stickered glass made plain glass. */
const PLAIN_VAN: Record<string, string> = {
  CARROCERIA: "#ECE9E3",
  cajuela: "#ECE9E3",
  cofre: "#ECE9E3",
  puertasbake: "#ECE9E3",
  puertastras: "#ECE9E3",
  CRIST_LAT: "#15171A",
  "CRIST_LAT.001": "#15171A",
  cristtras: "#15171A",
};
/** Car length and a man's height, in world units, in real proportion. */
const CAR_LEN = 3.6;
const MAN_H = 1.32;

/** Someone standing, breathing: the rig's idle clip, run off the frame. */
const Man: React.FC<{ x: number; z?: number; ry?: number; frame: number }> = ({ x, z = 0, ry = 0, frame }) => (
  <Model file={MAN} height={MAN_H} x={x} z={z} ry={ry} time={frame / 30} />
);
/** "You" stand just off the nose: clear of the body from either side. */
const YOU = { x: 1.9, z: -0.1 };

/**
 * The cover and the question. Frame 0 already carries the whole stake:
 * the car, the line on screen, and whose name is on it.
 */
const Hook: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(30), el: deg(11), dist: 20, target: [0.45, 0.65, 0.3], shiftY: 110 }),
    lens({ az: deg(22), el: deg(11), dist: 19, target: [0.45, 0.65, 0.3], shiftY: 110 }),
  );
  const drive = ramp(frame, 62, 80);
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      foot={<Lockup instant />}
      world={
        <>
          <Scene pose={pose} focus={CAR_X} focusZ={0.4} models={[CAR, MAN]}>
            <Reflect>
              <Model file={CAR} length={CAR_LEN} x={CAR_X} ry={Math.PI / 2} />
              <Man x={YOU.x} z={YOU.z} ry={-0.35} frame={frame} />
            </Reflect>
          </Scene>
          <Mark pose={pose} x={CAR_X} z={at(0.8)} text="ЗАПИСАНА НА МАМУ" dy={34} />
          <Mark pose={pose} x={YOU.x} z={at(YOU.z + 0.2)} text="ЕЗДИТЕ ВЫ" color={ACCENT} opacity={drive} dy={30} />
        </>
      }
    >
      <Rail gap={30}>
        <Lines lines={["МАШИНА ЗАПИСАНА", "НА МАМУ"]} instant max={150} />
        <Lines lines={["ЧЬЯ ОНА?"]} accent="ЧЬЯ ОНА?" max={150} delay={136} />
      </Rail>
    </Stage>
  );
};

/**
 * The same question, asked of a company. The bank's look is a sheet of
 * light sweeping through it — and what it finds inside is not paper.
 */
const Bank: React.FC<{ len: number }> = () => {
  const frame = Math.min(useCurrentFrame(), BANK_ACTIVE - 1);
  const len = BANK_ACTIVE;
  const pose = move(
    frame,
    len,
    lens({ az: deg(12), el: deg(14), dist: 22.5, target: [-0.45, 0.7, 0], shiftY: 100 }),
    lens({ az: deg(4), el: deg(14), dist: 21, target: [-0.4, 0.7, 0], shiftY: 100 }),
  );
  const sweep = interpolate(frame, [98, 168], [-0.75, 2.55], { ...clamp, easing: swap });
  const xray = ramp(frame, 120, 160);
  const COMPANY_X = 0.9;
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.025}
      foot={<Lockup delay={0} />}
      world={
        <>
          <Scene pose={pose} focus={0} keyLight={1}>
            <Reflect>
              <Shell x={-2.65} w={1.6} h={1.25} d={1.4} tone="graphite" label="БАНК" />
              <Matryoshka
                x={COMPANY_X}
                glow={0.2 + xray * 0.9}
                layers={[
                  { solid: 1 - xray * 0.84, edges: xray * 0.85, lift: 0 },
                  { solid: 1 - xray * 0.8, edges: xray * 0.85, lift: 0 },
                  { solid: 1 - xray * 0.76, edges: xray * 0.85, lift: 0 },
                ]}
              />
              <Scan x={sweep} z={0} h={1.9} d={2.3} strength={ramp(frame, 96, 104) * (1 - ramp(frame, 166, 176))} />
            </Reflect>
          </Scene>
          <Mark pose={pose} x={COMPANY_X} z={at(0.95)} text="ВАША КОМПАНИЯ" opacity={ramp(frame, 10, 22)} />
        </>
      }
    >
      <Rail gap={22}>
        <Eyebrow text="БАНК СПРАШИВАЕТ ТО ЖЕ САМОЕ" delay={6} />
        <Lines lines={["НЕ НА КОГО ЗАПИСАНА,", "А ЧЬЯ НА САМОМ ДЕЛЕ"]} accent="ЧЬЯ" max={110} delay={92} />
      </Rail>
    </Stage>
  );
};

/** The word, on the light ground: the one beat with nothing to look at but it. */
const TermCard: React.FC<{ len: number }> = ({ len }) => (
  <Stage len={len} light dir="push" amount={0.02} foot={<Lockup instant dark />}>
    <Rail gap={22}>
      <Eyebrow text="ОТВЕТ НАЗЫВАЕТСЯ" color={LIGHT.sub} delay={2} />
      <TermWord text="БЕНЕФИЦИАР" scaleFrom={1.04} color={LIGHT.ink} delay={30} />
    </Rail>
    <div style={{ position: "absolute", left: 96, top: RULE_Y }}>
      <Hairline delay={40} from="left" width={MEASURE} weight={3} color={ACCENT} />
    </div>
  </Stage>
);

/** X-ray: the outer company turns to glass and shows the one inside it, then the next. */
const Nest: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(22), el: deg(14), dist: 17.5, target: [0, 0.75, 0], shiftY: 90 }),
    lens({ az: deg(10), el: deg(15), dist: 16.2, target: [0, 0.75, 0], shiftY: 90 }),
  );
  const a = ramp(frame, 8, 40);
  const b = ramp(frame, 80, 102);
  const close = ramp(frame, 112, 134);
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      foot={<Lockup instant />}
      world={
        <Scene pose={pose} focus={0}>
          <Reflect>
            <Matryoshka
              glow={0.2 + b * 0.8 * (1 - close)}
              layers={[
                { solid: 1 - a * 0.82 * (1 - close), edges: a * 0.9 * (1 - close), lift: 0 },
                { solid: 1 - b * 0.78 * (1 - close), edges: b * 0.9 * (1 - close), lift: 0 },
                { solid: 1, edges: 0, lift: 0 },
              ]}
            />
          </Reflect>
        </Scene>
      }
    >
      <Rail gap={30}>
        <Lines lines={["КОМПАНИЯ", "ВНУТРИ КОМПАНИИ"]} max={130} delay={4} />
        <Note text="Как матрёшка." delay={112} />
      </Rail>
    </Stage>
  );
};

/** One layer at a time, until there is a person. */
const Open: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(8), el: deg(16), dist: 16.5, target: [0, 0.9, 0], shiftY: 90 }),
    lens({ az: deg(2), el: deg(17), dist: 14.5, target: [0, 1.05, 0], shiftY: 60 }),
  );
  const step = (i: number) => ramp(frame, 8 + i * 22, 26 + i * 22, Easing.bezier(0.33, 0, 0.2, 1));
  const layers = [0, 1, 2].map((i) => {
    const s = step(i);
    return { solid: 1 - s, edges: s * 0.95, lift: OPEN_LIFT[i] * s };
  });
  const found = ramp(frame, 74, 92);
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      punchAt={86}
      foot={<Lockup instant />}
      world={
        <>
          <Scene pose={pose} focus={0}>
            <Reflect>
              <Matryoshka layers={layers} glow={0.25 + found * 1.2} />
            </Reflect>
          </Scene>
          <Mark pose={pose} x={0} z={at(0.25)} text="БЕНЕФИЦИАР" color={ACCENT} opacity={ramp(frame, 86, 98)} dy={26} />
        </>
      }
    >
      <Rail gap={30}>
        <Lines lines={["БАНК ОТКРЫВАЕТ", "ДО ЧЕЛОВЕКА"]} accent="ДО ЧЕЛОВЕКА" max={150} delay={2} />
      </Rail>
    </Stage>
  );
};

/** All three in glass, the person visible at the centre — the vitrine the next two beats are set in. */
const GLASS: LayerState[] = [
  { solid: 0.14, edges: 0.85, lift: 0 },
  { solid: 0.18, edges: 0.85, lift: 0 },
  { solid: 0.22, edges: 0.85, lift: 0 },
];
const SET_X = -1.3;
const STACK_X = 2.1;
const WALL_X = 1.45;
const EXTRA = { w: 3.8, h: 2.05, d: 2.4 };

/** An extra layer drops over the set — and the person still shows through. Paperwork piles up. */
const Layers: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(16), el: deg(15), dist: 21.5, target: [-0.2, 0.9, 0], shiftY: 90 }),
    lens({ az: deg(8), el: deg(15), dist: 20.5, target: [-0.2, 0.9, 0], shiftY: 90 }),
  );
  const drop = interpolate(frame, [56, 82], [1.7, 0], { ...clamp, easing: Easing.in(Easing.cubic) });
  const dropIn = ramp(frame, 50, 60);
  const docs = [118, 138, 158, 178, 198].map((t) => ({
    t,
    y: interpolate(frame, [t, t + 10], [1.6, 0], { ...clamp, easing: Easing.in(Easing.quad) }),
  }));
  return (
    <Stage
      len={len}
      dir="settle"
      amount={0.02}
      foot={<Lockup instant />}
      world={
        <>
          <Scene pose={pose} focus={0.6}>
            <Reflect>
              <Matryoshka x={SET_X} layers={GLASS} glow={1.1} />
              {frame >= 50 ? (
                <Shell x={SET_X} {...EXTRA} lift={drop} solid={0.12 * dropIn} edges={0.9 * dropIn} />
              ) : null}
              {docs.map((d, i) =>
                frame >= d.t ? (
                  <Doc key={d.t} x={STACK_X + (i % 2) * 0.06} y={i * 0.045 + d.y} z={0.2 - (i % 3) * 0.05} ry={(i - 2) * 0.06} scale={1.35} />
                ) : null,
              )}
            </Reflect>
          </Scene>
          <Mark pose={pose} x={STACK_X} z={at(1.1)} text="ДОКУМЕНТЫ" opacity={ramp(frame, 124, 136)} />
        </>
      }
    >
      <Rail gap={22}>
        <Eyebrow text="НЕОЧЕВИДНОЕ" delay={4} />
        <Lines lines={["ЛИШНИЙ СЛОЙ", "НЕ ПРЯЧЕТ"]} max={150} delay={50} />
        <div style={{ height: 8 }} />
        <Note text={"Каждый слой — новый вопрос и новые документы."} delay={114} />
      </Rail>
    </Stage>
  );
};

/** The outer layer goes dark: nothing to open it with. The payment meets a wall. */
const Refuse: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(20), el: deg(13), dist: 20, target: [0.1, 0.85, 0], shiftY: 100 }),
    lens({ az: deg(15), el: deg(13), dist: 18.8, target: [0.1, 0.85, 0], shiftY: 100 }),
  );
  const shut = ramp(frame, 8, 30);
  const puck = interpolate(frame, [30, 66], [4.8, WALL_X + 0.5], { ...clamp, easing: Easing.out(Easing.cubic) });
  const wall = ramp(frame, 56, 68, land);
  const stopped = ramp(frame, 66, 80);
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.03}
      punchAt={68}
      foot={<Lockup instant />}
      world={
        <Scene pose={pose} focus={0.4}>
          <Reflect>
            <Matryoshka x={SET_X} layers={GLASS} glow={1.1 * (1 - shut * 0.7)} />
            <Shell
              x={SET_X}
              {...EXTRA}
              tone="graphite"
              solid={0.12 + shut * 0.88}
              edges={0.9}
              edgeColor={shut > 0.5 ? ACCENT : undefined}
            />
            <Barrier x={WALL_X} up={wall} />
            <Puck x={puck} glow={1 - stopped * 0.85} />
          </Reflect>
        </Scene>
      }
    >
      <Rail gap={30}>
        <Lines lines={["НЕЧЕМ ОТКРЫТЬ —", "ОТКАЗ В ПЛАТЕЖЕ"]} accent="ОТКАЗ" max={150} delay={8} />
      </Rail>
    </Stage>
  );
};

const RECIPIENT_X = 1.9;
const ORIGIN_X = -2.5;
const wide = lens({ az: deg(5), el: deg(14), dist: 24, target: [-0.1, 0.6, 0], shiftY: 110 });

const VAN_STOP = -1.35;
const VAN_LEN = 3.9;
const HANDOVER = { x: 1.15, z: 1.0 };
const RECEIVER = { x: 1.9, z: 0.55 };

/** Tax asks the same thing about money. A van brings a parcel — and the parcel is not the van's. */
const Courier: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(12), el: deg(13), dist: 23, target: [-0.3, 0.75, 0.4], shiftY: 110 }),
    lens({ az: deg(6), el: deg(13), dist: 21.5, target: [-0.1, 0.75, 0.4], shiftY: 110 }),
  );
  // The van pulls up, the parcel comes out of its side door and goes on
  // to the one it is for. The van stays where it stopped.
  const vanX = interpolate(frame, [64, 112], [-7.5, VAN_STOP], { ...clamp, easing: land });
  const out = ramp(frame, 116, 132);
  const across = ramp(frame, 136, 166);
  const parcelX = VAN_STOP + 0.3 + across * (HANDOVER.x - VAN_STOP - 0.3);
  const parcelZ = 0.2 + out * (HANDOVER.z - 0.2);
  const parcelY = 0.35 * (1 - ramp(frame, 124, 132, Easing.in(Easing.quad)));
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      foot={<Lockup delay={0} />}
      world={
        <>
          <Scene pose={pose} focus={0.2} focusZ={0.5} models={[VAN, MAN]}>
            <Reflect>
              <Model file={VAN} length={VAN_LEN} x={vanX} ry={Math.PI / 2} recolor={PLAIN_VAN} />
              {frame >= 116 ? <Parcel x={parcelX} z={parcelZ} y={parcelY} /> : null}
              <Man x={RECEIVER.x} z={RECEIVER.z} ry={-0.7} frame={frame + 200} />
            </Reflect>
          </Scene>
          <Mark pose={pose} x={vanX} z={at(0.85)} text="КУРЬЕР" opacity={ramp(frame, 104, 116)} />
          <Mark pose={pose} x={RECEIVER.x} z={at(RECEIVER.z + 0.3)} text="ПОЛУЧАТЕЛЬ" color={ACCENT} opacity={ramp(frame, 158, 170)} />
        </>
      }
    >
      <Rail gap={22}>
        <Eyebrow text="НАЛОГОВАЯ — ПРО ДЕНЬГИ" delay={6} />
        <Lines lines={["ПОСЫЛКА —", "НЕ КУРЬЕРА"]} max={150} delay={96} />
      </Rail>
    </Stage>
  );
};

/**
 * Match cut: the courier's tray is now a holding, the parcel is a
 * dividend, and it does the same thing — rides across and moves on.
 */
const Conduit: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  // Once the dividend has left the company, the shot closes in on where it ends up.
  const pose = mixPose(wide, lens({ az: deg(2), el: deg(14), dist: 18.5, target: [0.6, 0.62, 0], shiftY: 110 }), ramp(frame, 60, 200, glide));
  const onTray = interpolate(frame, [16, 54], [ORIGIN_X + 1.0, 0], { ...clamp, easing: swap });
  const onward = ramp(frame, 62, 92);
  const divX = onTray + onward * (RECIPIENT_X - 0.95 - onTray);
  const divY = 0.2 * (1 - ramp(frame, 76, 86, Easing.in(Easing.quad)));
  const relief = ramp(frame, 150, 176, Easing.in(Easing.cubic));
  const tax = interpolate(frame, [206, 228], [0.9, 0], { ...clamp, easing: Easing.in(Easing.quad) });
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      foot={<Lockup instant />}
      world={
        <>
          <Scene pose={pose} focus={0.2} models={[MAN]}>
            <Reflect>
              <Shell x={ORIGIN_X} w={1.4} h={0.95} d={1.2} tone="ceramic" label="ООО" />
              <Tray x={0} label="ХОЛДИНГ" />
              {/* The treaty relief rides on the holding — and goes down with it. */}
              <Shell x={0.1} z={-0.32} w={1.05} h={0.4} d={0.5} lift={0.2 - relief * 0.62} tone="ceramic" label="ЛЬГОТА" />
              <Shell x={divX} w={0.9} h={0.46} d={0.68} lift={divY} tone="red" />
              {frame >= 206 ? (
                // The tax lands on the money where it actually ends up.
                <Shell x={RECIPIENT_X - 0.95} w={0.9} h={0.34} d={0.6} lift={0.46 + tax} tone="graphite" label="НАЛОГ" />
              ) : null}
              <Man x={RECIPIENT_X + 0.15} z={0.2} ry={-0.55} frame={frame + 400} />
            </Reflect>
          </Scene>
          <Mark pose={pose} x={divX} y={0.9} z={at(0.34)} text="ДИВИДЕНДЫ" color={ACCENT} opacity={1 - ramp(frame, 96, 110)} dy={-40} />
          <Mark pose={pose} x={RECIPIENT_X} z={at(0.3)} text="ПОЛУЧАТЕЛЬ" color={ACCENT} opacity={1 - ramp(frame, 200, 210)} />
        </>
      }
    >
      <Rail gap={30}>
        <Lines lines={["ПЕРЕСЫЛАЕТЕ —", "ЗНАЧИТ, КУРЬЕР"]} max={150} delay={6} />
        <Note text={"Льготы по\u00a0налоговому соглашению нет: налог\u00a0— по\u00a0настоящему получателю."} delay={128} />
      </Rail>
    </Stage>
  );
};

/** The chain, laid out on one sheet and handed over before anyone asks. */
const NODES = [
  { z: -1.45, label: "ООО", tone: "ceramic" as const },
  { z: -0.45, label: "ХОЛДИНГ", tone: "graphite" as const },
  { z: 0.55, label: "КОМПАНИЯ", tone: "ceramic" as const },
];
const PERSON_Z = 1.9;
const BANK_Z = -4.6;

const SheetBeat: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(-6), el: deg(36), dist: 19.5, target: [0, 0.2, -0.5], shiftY: 50 }),
    lens({ az: deg(6), el: deg(30), dist: 21, target: [0, 0.2, -1.6], shiftY: 130 }),
  );
  const draw = (i: number) => ramp(frame, 88 + i * 28, 112 + i * 28, Easing.bezier(0.33, 0, 0.2, 1));
  const slideZ = interpolate(frame, [184, 222], [0, -1.2], { ...clamp, easing: swap });
  const asked = ramp(frame, 232, 246);
  const bankUp = interpolate(frame, [168, 196], [-1.4, 0], { ...clamp, easing: land });
  const Y = 0.05;
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      foot={<Lockup delay={0} />}
      world={
        <>
          <Scene pose={pose} focus={0} focusZ={-1.2}>
            <Reflect>
              <Shell x={0} z={BANK_Z} w={2.4} h={1.3} d={1.5} lift={bankUp} tone="graphite" label="БАНК" />
              <Shell x={0} z={BANK_Z} w={2.42} h={0.06} d={1.52} lift={1.3 + bankUp} solid={0} edges={asked} edgeColor="#FFF4E6" />
              <group position={[0, 0, slideZ]}>
                <Sheet w={3.2} d={4.1} z={0.05} />
                {NODES.map((n) => (
                  <Shell key={n.label} x={0} z={n.z} w={1.5} h={0.34} d={0.62} lift={Y} tone={n.tone} label={n.label} />
                ))}
                {NODES.map((n, i) => (
                  <Rule
                    key={`r${n.label}`}
                    from={[0, n.z + 0.31]}
                    to={[0, (NODES[i + 1]?.z ?? PERSON_Z) - (NODES[i + 1] ? 0.31 : 0.25)]}
                    y={Y + 0.004}
                    draw={draw(i)}
                    width={0.07}
                  />
                ))}
                <Person x={0} z={PERSON_Z} y={Y} scale={0.62} glow={0.2 + ramp(frame, 160, 178) * 1.1} />
              </group>
            </Reflect>
          </Scene>
        </>
      }
    >
      <Rail gap={30}>
        <Lines lines={["ЦЕПОЧКА —", "НА ОДНОМ ЛИСТЕ"]} max={150} delay={6} />
        <Note text={"До конкретного человека — и у банка раньше, чем он спросит."} delay={146} />
      </Rail>
    </Stage>
  );
};

/** Back to the car, now straight on: the light leaves the car and finds the driver. */
const Callback: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = move(
    frame,
    len,
    lens({ az: deg(12), el: deg(11), dist: 19.5, target: [0.4, 0.65, 0.3], shiftY: 110 }),
    lens({ az: deg(4), el: deg(11), dist: 19, target: [0.4, 0.65, 0.3], shiftY: 110 }),
  );
  const told = ramp(frame, 110, 130);
  const first = 1 - ramp(frame, 100, 110);
  return (
    <Stage
      len={len}
      dir="settle"
      amount={0.02}
      foot={<Lockup instant />}
      world={
        <>
          <Scene
            pose={pose}
            focus={CAR_X + (YOU.x - CAR_X) * told}
            focusZ={0.4 + (YOU.z - 0.4) * told}
            models={[CAR, MAN]}
          >
            <Reflect>
              <Model file={CAR} length={CAR_LEN} x={CAR_X} ry={Math.PI / 2} />
              <Man x={YOU.x} z={YOU.z} ry={-0.2} frame={frame + 600} />
            </Reflect>
          </Scene>
          <Mark pose={pose} x={CAR_X} z={at(0.8)} text="ЗАПИСАНА НА МАМУ" dy={34} opacity={1 - told * 0.6} />
          <Mark pose={pose} x={YOU.x} z={at(YOU.z + 0.2)} text="ЕЗДИТЕ ВЫ" color={ACCENT} dy={30} />
        </>
      }
    >
      <div style={{ opacity: first }}>
        <Rail gap={30}>
          <Lines lines={["ЗАПИСАТЬ МОЖНО", "НА КОГО УГОДНО"]} max={150} delay={48} />
        </Rail>
      </div>
      <Rail gap={30}>
        <Lines lines={["СПРАШИВАЮТ", "С ТОГО, КТО ЕЗДИТ"]} accent="С ТОГО, КТО ЕЗДИТ" max={150} delay={110} />
      </Rail>
    </Stage>
  );
};

// ── sound ────────────────────────────────────────────────────────────

const mid = (k: Key) => START[k] + HANDOFF / 2;

export const UBO_CUES: Cue[] = [
  { sfx: "hit", at: 0, gain: 0.5 },
  { sfx: "hit", at: START.hook + 138, gain: 0.35 },
  ...(["bank", "courier", "sheet", "callback"] as Key[]).map((k): Cue => ({ sfx: "whoosh", at: mid(k), gain: 0.3 })),
  // The scanner passing through.
  { sfx: "whoosh", at: START.bank + 130, gain: 0.16 },
  // Three lids coming off.
  ...[0, 1, 2].map((i): Cue => ({ sfx: "whoosh", at: START.open + 14 + i * 22, gain: 0.14 })),
  { sfx: "hit", at: START.open + 86, gain: 0.45 },
  // The extra layer landing over the set. No glassy click anywhere in this piece:
  // it reads as cheap here, though it suits drag-along.
  { sfx: "thud", at: START.layers + 82, gain: 0.9 },
  // The wall.
  { sfx: "hit", at: START.refuse + 68, gain: 0.85 },
  // The relief going through the floor.
  { sfx: "thud", at: START.conduit + 172, gain: 0.9 },
  // The light finding the driver.
  { sfx: "hit", at: START.callback + 112, gain: 0.4 },
];

// ── the piece ────────────────────────────────────────────────────────

const entry = (k: Key) => {
  const e = ENTRY[k];
  if (e === "cut") return null;
  if (e === "fade")
    return <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: HANDOFF })} />;
  return (
    <TransitionSeries.Transition
      presentation={slide({ direction: "from-bottom" })}
      timing={springTiming({ config: { damping: 200 }, durationInFrames: HANDOFF })}
    />
  );
};

const BEAT: Record<Key, React.FC<{ len: number }>> = {
  hook: Hook,
  bank: Bank,
  term: TermCard,
  nest: Nest,
  open: Open,
  layers: Layers,
  refuse: Refuse,
  courier: Courier,
  conduit: Conduit,
  sheet: SheetBeat,
  callback: Callback,
};

export const Ubo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG }}>
    <Sound cues={UBO_CUES} total={UBO_TOTAL} fps={30} vo="audio/ubo-vo.wav" music="audio/ubo-music.wav" />
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

export const UBO_TIMELINE = ORDER.map((k) => ({ key: k, start: START[k], len: len(k) }));
