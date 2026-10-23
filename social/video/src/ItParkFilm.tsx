/**
 * IT Park — the film. The storyboard frames from ItPark.tsx, animated to
 * the voice (public/audio/itpark-vo.wav, 76.7 s).
 *
 * Every cue below is read off the voice's word timings, so a thing appears
 * on the word that names it: the payslips on «зарплата», the net on «на
 * руки», the taxes falling on «не платит», each exam ticked on its own
 * word, the stamp on «отбирают», the laptops going dark on «погасшие».
 * The card and the lost status are one shot: the same card fails its third
 * exam, rather than cutting to a new picture of it.
 */

import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import "./font";
import { ACCENT, BG, FONT, INK, RULE, SUB } from "./theme";
import { copy, impact, Lines, Note, Rail, Stage } from "./kit";
import { deg, mixPose } from "./world/camera";
import { Model } from "./world/Model";
import { Desk, Laptop, LAPTOP, SITTING, Sitter } from "./world/Office";
import { Shell } from "./world/Props";
import { UzMap } from "./world/UzMap";
import { Reflect, Scene } from "./world/World";
import { Cue, Sound } from "./Sound";
import {
  Arc,
  at,
  Badge,
  Card,
  Chip,
  CityName,
  EXPORTERS,
  lens,
  LOCAL,
  MAP_AT,
  MAP_SCALE,
  mapPose,
  Payslip,
  Pin,
  SPOTS,
} from "./ItPark";

const BUILDING = "models/building.glb";
const FPS = 30;
const HANDOFF = 12;

// ── the clock ────────────────────────────────────────────────────────

/** Beat starts, in frames, from the voice's word timings. */
const START = {
  hook: 0, // «Два программиста» 0.0 s
  why: 354, // «Сама компания» 12.12 s
  status: 633, // «Многие думают» 21.42 s
  card: 867, // «Но статус» 29.02 s; the lost status runs on in the same shot
  export: 1560, // «А теперь главное» 52.30 s
  gauge: 2040, // «Посчитайте» 68.28 s
};
type Key = keyof typeof START;
const ORDER = Object.keys(START) as Key[];

/** The voice ends at 76.5 s; the end card holds a little past it. */
export const ITPARK_TOTAL = 2370;

const ENTRY: Record<Key, "cut" | "push" | "fade"> = {
  hook: "cut",
  why: "push",
  status: "push",
  card: "push",
  export: "push",
  gauge: "push",
};

const len = (k: Key) => {
  const i = ORDER.indexOf(k);
  const next = ORDER[i + 1];
  if (!next) return ITPARK_TOTAL - START[k];
  return START[next] - START[k] + (ENTRY[next] === "cut" ? 0 : HANDOFF);
};

/** A word's time in the voice, as a frame local to the beat it falls in. */
const local = (k: Key, seconds: number) => Math.round(seconds * FPS) - START[k];

// ── motion ───────────────────────────────────────────────────────────

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const glide = Easing.bezier(0.45, 0, 0.2, 1);
const ramp = (f: number, a: number, b: number, ease = glide) => interpolate(f, [a, b], [0, 1], { ...clamp, easing: ease });

/** A thing popping in on its word: a short, critically damped scale-up. */
const usePop = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (at: number) => spring({ frame: frame - at, fps, config: { damping: 18, stiffness: 220, mass: 0.6 } });
};

const Popped: React.FC<{ s: number; children: React.ReactNode }> = ({ s, children }) => (
  <div style={{ opacity: Math.min(1, s * 1.4), transform: `scale(${0.7 + 0.3 * s})` }}>{children}</div>
);

// ── 1. same programmer, same salary, different take-home ─────────────

const Hook: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pop = usePop();
  const pose = mixPose(
    lens({ az: deg(-3), el: deg(11), dist: 17.4, target: [0, 0.75, 0], shiftY: -150 }),
    lens({ az: deg(2), el: deg(11), dist: 15.8, target: [0, 0.75, 0], shiftY: -150 }),
    ramp(frame, 0, len),
  );
  const SIDE = 1.2;
  const slipL = pop(local("hook", 1.38));
  const slipR = pop(local("hook", 1.66));
  const tax = ramp(frame, local("hook", 3.9), local("hook", 4.3));
  const net = ramp(frame, local("hook", 4.1), local("hook", 5.3), Easing.out(Easing.cubic));
  const extra = pop(local("hook", 5.4));
  const resident = pop(local("hook", 10.4));
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      world={
        <>
          <Scene pose={pose} focus={0} models={[SITTING, LAPTOP]}>
            <Reflect>
              {[-1, 1].map((s) => (
                <group key={s} position={[s * SIDE, 0, 0]}>
                  <Shell w={1.75} h={1.2} d={0.5} z={-1.15} tone={s < 0 ? "graphite" : "ceramic"} />
                  <Sitter x={0.28} z={0.15} ry={-0.35} seat={0.47} />
                  <Desk x={-0.5} z={0.2} w={0.62} d={0.48} h={0.66} />
                  <Laptop x={-0.5} y={0.66} z={0.22} ry={0.5} length={0.42} />
                </group>
              ))}
            </Reflect>
          </Scene>
          <Pin pose={pose} at={[-SIDE, 1.5, -1.15]} dy={-26}>
            <Popped s={slipL}>
              <Badge text="БАНК" dim />
            </Popped>
          </Pin>
          <Pin pose={pose} at={[SIDE, 1.5, -1.15]} dy={-26}>
            <Popped s={resident}>
              <Badge text="РЕЗИДЕНТ IT PARK" />
            </Popped>
          </Pin>
          <Payslip x={74} y={1000} rate="12%" tax={1_200_000} show={slipL} taxShow={tax} netShow={net} />
          <Payslip x={596} y={1000} rate="7,5%" tax={750_000} hot show={slipR} taxShow={tax} netShow={net} />
          <div style={{ position: "absolute", left: 596, top: 1270, width: 410, display: "flex", justifyContent: "center" }}>
            <Popped s={extra}>
              <Badge text="+450 000 В МЕСЯЦ" />
            </Popped>
          </div>
        </>
      }
    >
      <Rail>
        <Lines lines={["ОДНА ЗАРПЛАТА —", "РАЗНОЕ НА РУКИ"]} max={150} delay={2} />
      </Rail>
    </Stage>
  );
};

// ── 2. the company pays nothing — on what is in the list ─────────────

/** Where each tax chip starts (stacked on the company) and lands. */
const CHIPS = [
  { label: "НДС", from: [-0.55, 1.41, -0.2], to: [-0.95, 1.62, 0.5], tilt: 0.3, spin: 0.25, fly: true },
  { label: "ПРИБЫЛЬ", from: [0.55, 1.41, -0.25], to: [0.95, 1.45, 0.4], tilt: -0.45, spin: -0.3, fly: true },
  { label: "СОЦНАЛОГ", from: [-0.5, 1.41, 0.35], to: [-1.05, 0.16, 1.55], tilt: 0, spin: 0.45, fly: false },
  { label: "ИМУЩЕСТВО", from: [0.5, 1.41, 0.4], to: [1.1, 0.16, 1.6], tilt: 0, spin: -0.25, fly: false },
] as const;

const Why: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pose = mixPose(
    lens({ az: deg(18), el: deg(14), dist: 15, target: [0, 0.9, 0], shiftY: -150 }),
    lens({ az: deg(10), el: deg(14), dist: 14.2, target: [0, 0.9, 0], shiftY: -150 }),
    ramp(frame, 0, len),
  );
  // «не платит вовсе»: the taxes come off the company one after another.
  const off = local("why", 13.3);
  const rule = copy(frame, FPS, local("why", 14.64));
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.02}
      world={
        <Scene pose={pose} focus={0}>
          <Reflect>
            <Shell w={2.4} h={1.25} d={1.5} tone="ceramic" label="IT-КОМПАНИЯ" />
            {CHIPS.map((c, i) => {
              const t = ramp(frame, off + i * 6, off + i * 6 + 22, Easing.bezier(0.3, 0, 0.7, 1));
              // A short hop off the company, kept under the headline.
              const lift = Math.sin(Math.PI * t) * (c.fly ? 0.3 : 0.22);
              const x = c.from[0] + (c.to[0] - c.from[0]) * t;
              const y = c.from[1] + (c.to[1] - c.from[1]) * t + lift;
              const z = c.from[2] + (c.to[2] - c.from[2]) * t;
              return <Chip key={c.label} x={x} y={y} z={z} tilt={c.tilt * t} spin={c.spin * t} label={c.label} />;
            })}
          </Reflect>
        </Scene>
      }
    >
      <Rail>
        <Lines lines={["КОМПАНИЯ —", "БЕЗ НАЛОГОВ"]} max={150} delay={2} />
      </Rail>
      <div style={{ position: "absolute", left: 96, top: 1180, opacity: rule, transform: `translateY(${(1 - rule) * 16}px)` }}>
        <Note text={"Только с того, что есть в разрешённом списке."} />
      </div>
    </Stage>
  );
};

// ── 3. not a building — a status ─────────────────────────────────────

const Status: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pop = usePop();
  const pose = mixPose(
    { ...mapPose, dist: mapPose.dist + 1.2, az: deg(-3) },
    { ...mapPose, az: deg(2) },
    ramp(frame, 0, len),
  );
  const rise = ramp(frame, 0, 22, Easing.out(Easing.cubic));
  const tash = at("Ташкент");
  const drop = ramp(frame, 18, 42, Easing.bezier(0.3, 0, 0.2, 1));
  const no = local("status", 24.76);
  const gone = ramp(frame, no + 2, no + 24);
  const question = pop(local("status", 23.3)) * (1 - ramp(frame, no, no + 8));
  const warmth = ramp(frame, no + 30, no + 80) * 0.05;
  const thought = copy(frame, FPS, local("status", 21.5)) * (1 - ramp(frame, no - 4, no + 4));
  const answer = copy(frame, FPS, no + 30);
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.015}
      world={
        <>
          <Scene pose={pose} focus={0} models={[BUILDING, LAPTOP]}>
            <Reflect>
              <UzMap scale={MAP_SCALE} x={MAP_AT[0]} z={MAP_AT[1]} y={-0.14 * (1 - rise)} warmAll={warmth} />
              {gone < 0.999 ? (
                <Model
                  file={BUILDING}
                  height={1.5}
                  x={tash[0]}
                  z={tash[1] - 0.1}
                  y={0.06 + (1 - drop) * 2.2}
                  opacity={drop * (1 - gone)}
                  hide={["Plane.001", "Text_4", "leaf"]}
                />
              ) : null}
              {SPOTS.map(({ city }, i) => {
                const s = pop(no + 22 + i * 9);
                if (s < 0.01) return null;
                const [x, z] = at(city);
                return (
                  <group key={city} position={[x, 0.06, z]} scale={[s, s, s]}>
                    <Laptop length={0.36} />
                  </group>
                );
              })}
            </Reflect>
          </Scene>
          <Pin pose={pose} at={[tash[0], 1.85, tash[1]]}>
            <Popped s={question}>
              <Badge text="IT PARK?" dim />
            </Popped>
          </Pin>
          {SPOTS.map(({ city, lift }, i) => {
            const s = pop(no + 28 + i * 9);
            const [x, z] = at(city);
            return (
              <React.Fragment key={city}>
                <Pin pose={pose} at={[x, lift, z]}>
                  <Popped s={s}>
                    <Badge text="РЕЗИДЕНТ" />
                  </Popped>
                </Pin>
                <Pin pose={pose} at={[x, 0.06, z + 0.32]}>
                  <div style={{ opacity: s }}>
                    <CityName text={city} />
                  </div>
                </Pin>
              </React.Fragment>
            );
          })}
        </>
      }
    >
      <Rail>
        {frame < no ? (
          <Lines lines={["IT PARK —", "ЗДАНИЕ В ТАШКЕНТЕ?"]} max={150} delay={4} />
        ) : (
          <Lines lines={["IT PARK —", "НЕ ЗДАНИЕ, А СТАТУС"]} max={150} delay={no} />
        )}
      </Rail>
      <div style={{ position: "absolute", left: 96, top: 1150, opacity: thought }}>
        <Note text={"Многие думают, что это здание в Ташкенте."} />
      </div>
      <div style={{ position: "absolute", left: 96, top: 1150, opacity: answer, transform: `translateY(${(1 - answer) * 16}px)` }}>
        <Note text={"Статус работает в любом городе — даже без офиса."} />
      </div>
    </Stage>
  );
};

// ── 4. the student card, and failing it ──────────────────────────────

/** Local frames in the card shot, from the voice. */
const C = {
  list: local("card", 35.7),
  dues: local("card", 36.42),
  audit: local("card", 37.64),
  scan: local("card", 39.06),
  what: local("card", 40.96),
  where: local("card", 43.0),
  fail: local("card", 44.84),
  stamp: local("card", 45.62),
  taxes: local("card", 46.86),
  forty: local("card", 48.4),
};

const CardShot: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = usePop();
  const show = copy(frame, fps, 2);
  const checks =
    ramp(frame, C.list, C.list + 8) + ramp(frame, C.dues, C.dues + 8) + ramp(frame, C.audit, C.audit + 8);
  const failed = frame >= C.fail;
  const stamp = failed ? impact(frame, fps, C.stamp) : 0;
  // The auditor's beam: one pass down the card.
  const beam = ramp(frame, C.scan, C.scan + 36, Easing.inOut(Easing.cubic));
  const beamOn = frame >= C.scan && frame <= C.scan + 40 ? 1 : 0;
  const questions = 1 - ramp(frame, C.fail - 6, C.fail + 4);
  const q1 = pop(C.what) * questions;
  const q2 = pop(C.where) * questions;
  const back = ramp(frame, C.taxes, C.taxes + 30, Easing.inOut(Easing.cubic));
  const budget = copy(frame, fps, C.taxes - 6) * (1 - ramp(frame, C.forty - 8, C.forty));
  const forty = copy(frame, fps, C.forty + 2);
  const lostHead = frame >= C.fail;
  return (
    <Stage len={len} dir="push" amount={0.015}>
      <Rail>
        {lostHead ? (
          <Lines lines={["НЕ СДАЛИ —", "НАЛОГИ ДОНАЧИСЛЯТ"]} max={150} delay={C.fail} />
        ) : (
          <Lines lines={["СТАТУС — КАК", "СТУДЕНЧЕСКИЙ БИЛЕТ"]} max={150} delay={4} />
        )}
      </Rail>
      <Card failed={failed} checks={checks} stamp={stamp} show={show} top={650} />
      {beamOn ? (
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 700 + beam * 480,
            width: 960,
            height: 4,
            backgroundColor: ACCENT,
            boxShadow: `0 0 30px 6px ${ACCENT}AA`,
            transform: "rotate(-3deg)",
          }}
        />
      ) : null}
      <div style={{ position: "absolute", left: 96, top: 1250, display: "flex", gap: 20 }}>
        <Popped s={q1}>
          <Badge text="ЧЕМ ЗАНИМАЕТЕСЬ?" />
        </Popped>
        <Popped s={q2}>
          <Badge text="ДОЛЯ ЭКСПОРТА?" />
        </Popped>
      </div>
      {/* The relief going back to the budget. */}
      <div style={{ opacity: budget }}>
        {[0, 1, 2].map((i) => {
          const t = Math.max(0, Math.min(1, back * 1.4 - i * 0.2));
          return (
            <Img
              key={i}
              src={staticFile("sprites/cash.png")}
              style={{
                position: "absolute",
                left: 150 + i * 70 + t * (430 - i * 40),
                top: 1210 + i * 20 - Math.sin(Math.PI * t) * 60,
                width: 170,
                opacity: Math.min(1, back * 3) * (1 - Math.max(0, t - 0.85) / 0.15),
              }}
            />
          );
        })}
        <Img src={staticFile("sprites/budget.png")} style={{ position: "absolute", left: 640, top: 1150, width: 360 }} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 96,
          top: 1190,
          fontFamily: FONT,
          display: "flex",
          alignItems: "center",
          gap: 22,
          opacity: forty,
          transform: `translateY(${(1 - forty) * 20}px)`,
        }}
      >
        <span style={{ fontSize: 120, fontWeight: 800, color: ACCENT, letterSpacing: "-0.02em" }}>≈40</span>
        <span style={{ fontSize: 34, lineHeight: 1.25, color: INK }}>
          компаний лишились
          <br />
          статуса в&nbsp;2022 году
        </span>
      </div>
    </Stage>
  );
};

// ── 5. the exporters' club ───────────────────────────────────────────

const ExportShot: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const pop = usePop();
  const pose = mixPose({ ...mapPose, dist: mapPose.dist + 1.0, az: deg(2) }, { ...mapPose, az: deg(-2) }, ramp(frame, 0, len));
  const club = local("export", 54.3);
  const year = local("export", 57.5);
  const dark = local("export", 65.0);
  const tile = copy(frame, FPS, year);
  return (
    <Stage
      len={len}
      dir="push"
      amount={0.015}
      world={
        <>
          <Scene pose={pose} focus={0} models={[LAPTOP]}>
            <Reflect>
              <UzMap scale={MAP_SCALE} x={MAP_AT[0]} z={MAP_AT[1]} />
              {EXPORTERS.map(({ city }) => {
                const [x, z] = at(city);
                return <Laptop key={city} x={x} z={z} y={0.06} length={0.36} />;
              })}
              {LOCAL.map((city) => {
                const [x, z] = at(city);
                return <Laptop key={city} x={x} z={z} y={0.06} length={0.36} lit={frame < dark} />;
              })}
            </Reflect>
            {EXPORTERS.map(({ city, to }, i) => (
              <Arc key={city} from={at(city)} to={to} draw={ramp(frame, club + i * 8, club + i * 8 + 40, Easing.inOut(Easing.cubic))} />
            ))}
          </Scene>
          {LOCAL.map((city) => {
            const [x, z] = at(city);
            return (
              <Pin key={city} pose={pose} at={[x, 0.55, z]}>
                <Popped s={pop(dark + 6)}>
                  <Badge text="БЕЗ ЛЬГОТ С 2028" dim />
                </Popped>
              </Pin>
            );
          })}
          <div
            style={{
              position: "absolute",
              left: 96,
              top: 1150,
              width: 888,
              padding: "22px 28px",
              boxSizing: "border-box",
              borderRadius: 20,
              border: `2px solid ${RULE}`,
              backgroundColor: "rgba(20,19,18,0.7)",
              fontFamily: FONT,
              display: "flex",
              alignItems: "center",
              gap: 26,
              opacity: tile,
              transform: `translateY(${(1 - tile) * 20}px)`,
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 800, color: ACCENT }}>2028</div>
            <div style={{ fontSize: 30, lineHeight: 1.3, color: INK }}>
              Льготы — только если больше половины выручки от&nbsp;клиентов за&nbsp;границей
            </div>
          </div>
        </>
      }
    >
      <Rail>
        <Lines lines={["IT PARK —", "КЛУБ ЭКСПОРТЁРОВ"]} max={150} delay={4} />
      </Rail>
    </Stage>
  );
};

// ── 6. count it now — and write to us ────────────────────────────────

const GaugeShot: React.FC<{ len: number }> = ({ len }) => {
  const frame = useCurrentFrame();
  const L = 96;
  const W = 888;
  const fill = interpolate(frame, [10, 70], [0, 0.62], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const crossed = fill >= 0.5;
  const help = copy(frame, FPS, local("gauge", 70.7));
  return (
    <Stage len={len} dir="push" amount={0.015} hold>
      <Rail>
        <Lines lines={["ПОСЧИТАЙТЕ", "ДОЛЮ ЭКСПОРТА"]} max={150} delay={4} />
      </Rail>
      <div style={{ position: "absolute", left: L, top: 700, fontFamily: FONT, fontSize: 30, letterSpacing: "0.16em", color: SUB }}>
        ВЫРУЧКА ОТ ИНОСТРАННЫХ КЛИЕНТОВ
      </div>
      <div style={{ position: "absolute", left: L, top: 820, width: W, height: 36, borderRadius: 18, backgroundColor: "#24221F" }} />
      <div
        style={{
          position: "absolute",
          left: L,
          top: 820,
          width: W * fill,
          height: 36,
          borderRadius: 18,
          background: crossed ? `linear-gradient(90deg, #6E1B25 0%, ${ACCENT} 100%)` : "linear-gradient(90deg, #3A3633 0%, #6A645E 100%)",
          boxShadow: crossed ? `0 0 40px ${ACCENT}88` : "none",
        }}
      />
      <div style={{ position: "absolute", left: L + W * 0.5 - 2, top: 790, width: 4, height: 96, backgroundColor: INK }} />
      <div style={{ position: "absolute", left: L + W * 0.5, top: 910, transform: "translateX(-50%)", fontFamily: FONT, textAlign: "center" }}>
        <div style={{ fontSize: 44, fontWeight: 800, color: INK }}>50%</div>
        <div style={{ fontSize: 26, letterSpacing: "0.14em", color: SUB }}>ПОРОГ С 2028</div>
      </div>
      <div
        style={{
          position: "absolute",
          left: L + W * fill,
          top: 760,
          transform: "translateX(-50%)",
          fontFamily: FONT,
          fontSize: 40,
          fontWeight: 800,
          color: crossed ? ACCENT : INK,
          opacity: ramp(frame, 12, 20),
        }}
      >
        {Math.round(fill * 100)}%
      </div>
      <div style={{ position: "absolute", left: L, top: 1060, width: 860, opacity: help, transform: `translateY(${(1 - help) * 16}px)` }}>
        <Note text={"Поможем получить статус, пройти проверки и подготовиться к 2028 году."} size={34} width={860} />
      </div>
    </Stage>
  );
};

// ── sound ────────────────────────────────────────────────────────────

const mid = (k: Key) => START[k] + HANDOFF / 2;

export const ITPARK_CUES: Cue[] = [
  ...(["why", "status", "card", "export", "gauge"] as Key[]).map((k): Cue => ({ sfx: "whoosh", at: mid(k), gain: 0.28 })),
  // The extra 450 000 landing.
  { sfx: "hit", at: Math.round(5.4 * FPS), gain: 0.3 },
  // The taxes hitting the floor.
  { sfx: "thud", at: START.why + local("why", 13.3) + 22, gain: 0.55 },
  { sfx: "thud", at: START.why + local("why", 13.3) + 40, gain: 0.45 },
  // The building gone, the laptops on.
  { sfx: "whoosh", at: START.status + local("status", 24.76) + 10, gain: 0.14 },
  // The stamp.
  { sfx: "hit", at: START.card + C.stamp + 2, gain: 0.8 },
  // The arcs going abroad.
  { sfx: "whoosh", at: START.export + local("export", 54.3) + 10, gain: 0.16 },
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
  why: Why,
  status: Status,
  card: CardShot,
  export: ExportShot,
  gauge: GaugeShot,
};

const VO = "audio/itpark-vo.wav";
const MUSIC = "audio/itpark-music.wav";

export const ItParkFilm: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BG }}>
    <Sound cues={ITPARK_CUES} total={ITPARK_TOTAL} fps={FPS} vo={VO} music={MUSIC} />
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

/** The soundtrack alone, so a mix change does not mean re-rendering 3D. */
export const ItParkSoundtrack: React.FC = () => (
  <Sound cues={ITPARK_CUES} total={ITPARK_TOTAL} fps={FPS} vo={VO} music={MUSIC} />
);

export const ITPARK_TIMELINE = ORDER.map((k) => ({ key: k, start: START[k], len: len(k) }));
