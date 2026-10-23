/**
 * IT Park, explained with one programmer and two payslips.
 *
 * The idea the film carries: IT Park is a status, not a building — it
 * travels with the company anywhere in the country, like a student card
 * that works in every city as long as you pass your exams. And the exams
 * are changing: from 2028 the card only works for exporters.
 *
 * This file holds the key frames for the storyboard (the `itpark-mock`
 * composition, one still per shot). The animated film is built on the
 * same scenes once the storyboard is approved.
 */

import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import * as THREE from "three";

import "./font";
import { ACCENT, FONT, INK, RULE, SUB } from "./theme";
import { Lines, Lockup, Note, Rail, Stage } from "./kit";
import { deg, Pose, project } from "./world/camera";
import { Model } from "./world/Model";
import { Desk, Laptop, LAPTOP, SITTING, Sitter } from "./world/Office";
import { Shell } from "./world/Props";
import { cityAt, UzMap } from "./world/UzMap";
import { Reflect, Scene, useGlow } from "./world/World";

const BUILDING = "models/building.glb";

const lens = (p: Partial<Pose>): Pose => ({
  az: 0,
  el: deg(13),
  dist: 14,
  target: [0, 0.6, 0],
  fov: 30,
  shiftY: 110,
  ...p,
});

// ── DOM pieces ───────────────────────────────────────────────────────

/** Words pinned to a point in the scene. */
const Pin: React.FC<{
  pose: Pose;
  at: [number, number, number];
  dy?: number;
  children: React.ReactNode;
}> = ({ pose, at, dy = 0, children }) => {
  const p = project(pose, at);
  return (
    <div style={{ position: "absolute", left: p.x, top: p.y + dy, transform: "translate(-50%, -50%)" }}>
      {children}
    </div>
  );
};

const CityName: React.FC<{ text: string }> = ({ text }) => (
  <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 22, letterSpacing: "0.12em", color: "#5E5850", whiteSpace: "nowrap" }}>
    {text.toUpperCase()}
  </div>
);

const Badge: React.FC<{ text: string; dim?: boolean }> = ({ text, dim = false }) => (
  <div
    style={{
      padding: "7px 14px",
      borderRadius: 999,
      backgroundColor: dim ? "#2A2826" : ACCENT,
      color: dim ? SUB : INK,
      fontFamily: FONT,
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "0.14em",
      whiteSpace: "nowrap",
      boxShadow: dim ? "none" : `0 0 24px ${ACCENT}66`,
    }}
  >
    {text}
  </div>
);

const money = (n: number) => n.toLocaleString("ru-RU").replace(/,/g, " ");

/** A payslip: what was earned, what was held back, what is left. */
const Payslip: React.FC<{ x: number; y: number; rate: string; tax: number; hot?: boolean }> = ({
  x,
  y,
  rate,
  tax,
  hot = false,
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: 410,
      padding: "26px 28px 24px",
      borderRadius: 22,
      background: "linear-gradient(180deg, #F1EDE6 0%, #E2DCD2 100%)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.55)",
      fontFamily: FONT,
      color: "#2A2724",
    }}
  >
    <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "0.16em", color: "#8A847C" }}>РАСЧЁТНЫЙ ЛИСТОК</div>
    {[
      ["Начислено", money(10_000_000)],
      [`НДФЛ ${rate}`, `−${money(tax)}`],
    ].map(([k, v]) => (
      <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 28, marginTop: 14 }}>
        <span>{k}</span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>{v}</span>
      </div>
    ))}
    <div style={{ height: 2, backgroundColor: "#CFC8BD", margin: "16px 0 12px" }} />
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 32, fontWeight: 800 }}>
      <span>На руки</span>
      <span style={{ fontVariantNumeric: "tabular-nums", color: hot ? ACCENT : undefined }}>{money(10_000_000 - tax)}</span>
    </div>
  </div>
);

// ── 3D pieces ────────────────────────────────────────────────────────

/** A labelled chip, tipped over by `tilt` — a tax falling away. */
const Chip: React.FC<{ x: number; z: number; y: number; tilt: number; spin: number; label: string }> = ({
  x,
  z,
  y,
  tilt,
  spin,
  label,
}) => (
  <group position={[x, y, z]} rotation={[0, spin, tilt]}>
    <group position={[0, -0.16, 0]}>
      <Shell w={1.05} h={0.32} d={0.55} tone="graphite" label={label} />
    </group>
  </group>
);

/** Export: an arc leaving the country from a laptop. */
const Arc: React.FC<{ from: [number, number]; to: [number, number]; height?: number }> = ({ from, to, height = 1.3 }) => {
  const m = useGlow(ACCENT, 1.6);
  const geometry = React.useMemo(() => {
    const a = new THREE.Vector3(from[0], 0.32, from[1]);
    const b = new THREE.Vector3(to[0], 0.05, to[1]);
    const mid = a.clone().lerp(b, 0.5).setY(height);
    return new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a, mid, b), 48, 0.018, 8, false);
  }, [from, to, height]);
  return <mesh geometry={geometry} material={m} />;
};

// ── the shots ────────────────────────────────────────────────────────

/** 1. Same programmer, same salary, different take-home. */
const Hook: React.FC = () => {
  const pose = lens({ az: deg(0), el: deg(11), dist: 16.5, target: [0, 0.75, 0], shiftY: -150 });
  const SIDE = 1.2;
  return (
    <Stage
      len={120}
      foot={<Lockup instant />}
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
            <Badge text="БАНК" dim />
          </Pin>
          <Pin pose={pose} at={[SIDE, 1.5, -1.15]} dy={-26}>
            <Badge text="РЕЗИДЕНТ IT PARK" />
          </Pin>
          <Payslip x={74} y={1000} rate="12%" tax={1_200_000} />
          <Payslip x={596} y={1000} rate="7,5%" tax={750_000} hot />
          <div style={{ position: "absolute", left: 596, top: 1270, width: 410, display: "flex", justifyContent: "center" }}>
            <Badge text="+450 000 В МЕСЯЦ" />
          </div>
        </>
      }
    >
      <Rail>
        <Lines lines={["ОДНА ЗАРПЛАТА —", "РАЗНОЕ НА РУКИ"]} max={150} instant />
      </Rail>
    </Stage>
  );
};

/** 2. The company itself pays nothing: the taxes fall away. */
const Why: React.FC = () => {
  const pose = lens({ az: deg(14), el: deg(14), dist: 14.5, target: [0, 0.9, 0], shiftY: -150 });
  return (
    <Stage
      len={120}
      foot={<Lockup instant />}
      world={
        <Scene pose={pose} focus={0}>
          <Reflect>
            <Shell w={2.4} h={1.25} d={1.5} tone="ceramic" label="IT-КОМПАНИЯ" />
            <Chip x={-0.95} z={0.5} y={1.62} tilt={0.3} spin={0.25} label="НДС" />
            <Chip x={0.95} z={0.4} y={1.45} tilt={-0.45} spin={-0.3} label="ПРИБЫЛЬ" />
            <Chip x={-1.05} z={1.55} y={0.16} tilt={0} spin={0.45} label="СОЦНАЛОГ" />
            <Chip x={1.1} z={1.6} y={0.16} tilt={0} spin={-0.25} label="ИМУЩЕСТВО" />
          </Reflect>
        </Scene>
      }
    >
      <Rail>
        <Lines lines={["КОМПАНИЯ —", "БЕЗ НАЛОГОВ"]} max={150} instant />
      </Rail>
      <div style={{ position: "absolute", left: 96, top: 1180 }}>
        <Note text={"Пока делает то, что есть в разрешённом списке."} />
      </div>
    </Stage>
  );
};

const MAP_SCALE = 0.42;
const MAP_AT: [number, number] = [0, 0.15];
const at = (city: string) => cityAt(city, MAP_SCALE, MAP_AT);
const mapPose = lens({ az: deg(0), el: deg(46), dist: 21, target: [0.05, 0, 0.2], fov: 24, shiftY: -60 });
const SPOTS: { city: string; lift: number }[] = [
  { city: "Нукус", lift: 0.55 },
  { city: "Бухара", lift: 0.55 },
  { city: "Термез", lift: 0.55 },
  { city: "Фергана", lift: 0.55 },
];

/** 3. Not a building — a status that goes wherever the company goes. */
const Status: React.FC<{ ghost: boolean }> = ({ ghost }) => {
  const pose = mapPose;
  const tash = at("Ташкент");
  return (
    <Stage
      len={120}
      foot={<Lockup instant />}
      world={
        <>
          <Scene pose={pose} focus={0} models={[BUILDING, LAPTOP]}>
            <Reflect>
              <UzMap scale={MAP_SCALE} x={MAP_AT[0]} z={MAP_AT[1]} warmAll={ghost ? 0.04 : 0} />
              {ghost ? null : (
                <Model file={BUILDING} height={1.5} x={tash[0]} z={tash[1] - 0.1} y={0.06} hide={["Plane.001", "Text_4", "leaf"]} />
              )}
              {ghost
                ? SPOTS.map(({ city }) => {
                    const [x, z] = at(city);
                    return <Laptop key={city} x={x} z={z} y={0.06} length={0.36} ry={0} />;
                  })
                : null}
            </Reflect>
          </Scene>
          {ghost
            ? SPOTS.map(({ city, lift }) => {
                const [x, z] = at(city);
                return (
                  <React.Fragment key={city}>
                    <Pin pose={pose} at={[x, lift, z]}>
                      <Badge text="РЕЗИДЕНТ" />
                    </Pin>
                    <Pin pose={pose} at={[x, 0.06, z + 0.32]}>
                      <CityName text={city} />
                    </Pin>
                  </React.Fragment>
                );
              })
            : (
              <Pin pose={pose} at={[tash[0], 1.85, tash[1]]}>
                <Badge text="IT PARK?" dim />
              </Pin>
            )}
        </>
      }
    >
      <Rail>
        <Lines lines={["IT PARK —", "НЕ ЗДАНИЕ, А СТАТУС"]} max={150} instant />
      </Rail>
      <div style={{ position: "absolute", left: 96, top: 1150 }}>
        <Note
          text={
            ghost
              ? "Резидентом можно быть в\u00a0любом городе — хоть с\u00a0виртуальным офисом."
              : "Многие думают, что это здание в\u00a0Ташкенте."
          }
        />
      </div>
    </Stage>
  );
};

/** The student card: three exams, and the auditor's two questions. */
const Card: React.FC<{ failed: boolean }> = ({ failed }) => {
  const rows = ["Работа по перечню", "Отчисления парку", "Аудит до 1 июля"];
  return (
    <div
      style={{
        position: "absolute",
        left: 120,
        top: failed ? 640 : 700,
        width: 840,
        height: 500,
        padding: "40px 46px",
        boxSizing: "border-box",
        borderRadius: 34,
        background: "linear-gradient(160deg, #F4F0E9 0%, #E4DED4 60%, #D9D2C7 100%)",
        boxShadow: failed ? `0 0 0 5px ${ACCENT}, 0 40px 80px rgba(0,0,0,0.6)` : "0 40px 80px rgba(0,0,0,0.6)",
        fontFamily: FONT,
        color: "#2A2724",
        transform: "rotate(-3deg)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "0.2em", color: "#8A847C" }}>IT PARK</div>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-0.01em" }}>РЕЗИДЕНТ</div>
        </div>
        <div style={{ width: 120, height: 120, borderRadius: 20, backgroundColor: "#CFC8BD" }} />
      </div>
      <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 20 }}>
        {rows.map((r, i) => {
          const bad = failed && i === 2;
          return (
            <div key={r} style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 36, fontWeight: 600 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: bad ? ACCENT : "#2A2724",
                  color: INK,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                {bad ? "✕" : "✓"}
              </div>
              <span style={{ color: bad ? ACCENT : undefined }}>{r}</span>
            </div>
          );
        })}
      </div>
      {failed ? (
        <div
          style={{
            position: "absolute",
            right: 40,
            top: 150,
            padding: "10px 22px",
            border: `5px solid ${ACCENT}`,
            borderRadius: 12,
            color: ACCENT,
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: "0.08em",
            transform: "rotate(-12deg)",
          }}
        >
          СТАТУС ЛИШЁН
        </div>
      ) : null}
    </div>
  );
};

const Questions: React.FC = () => (
  <>
    {/* The auditor's beam across the card. */}
    <div
      style={{
        position: "absolute",
        left: 60,
        top: 905,
        width: 960,
        height: 4,
        backgroundColor: ACCENT,
        boxShadow: `0 0 30px 6px ${ACCENT}AA`,
        transform: "rotate(-3deg)",
      }}
    />
    <div style={{ position: "absolute", left: 96, top: 1250, display: "flex", gap: 20 }}>
      <Badge text="ЧЕМ ЗАНИМАЕТЕСЬ?" />
      <Badge text="ДОЛЯ ЭКСПОРТА?" />
    </div>
  </>
);

/** 4. The status is a student card: good anywhere, while you pass your exams. */
const Student: React.FC = () => (
  <Stage len={120} foot={<Lockup instant />}>
    <Rail>
      <Lines lines={["СТАТУС — КАК", "СТУДЕНЧЕСКИЙ БИЛЕТ"]} max={150} instant />
    </Rail>
    <Card failed={false} />
    <Questions />
  </Stage>
);

/** 5. Fail an exam: the status goes, and the taxes come back. */
const Lost: React.FC = () => (
  <Stage len={120} foot={<Lockup instant />}>
    <Rail>
      <Lines lines={["НЕ СДАЛИ —", "НАЛОГИ ДОНАЧИСЛЯТ"]} max={150} instant />
    </Rail>
    <Card failed />
    {/* The relief going back: cash on its way to the budget. */}
    {[0, 1, 2].map((i) => (
      <Img
        key={i}
        src={staticFile("sprites/cash.png")}
        style={{ position: "absolute", left: 180 + i * 150, top: 1190 + i * 26, width: 190, opacity: 0.55 + i * 0.2 }}
      />
    ))}
    <Img src={staticFile("sprites/budget.png")} style={{ position: "absolute", left: 640, top: 1150, width: 360 }} />
  </Stage>
);

const EXPORTERS: { city: string; to: [number, number] }[] = [
  { city: "Ташкент", to: [3.6, -0.6] },
  { city: "Бухара", to: [-3.4, 1.0] },
  { city: "Нукус", to: [-3.7, -0.9] },
];
const LOCAL = ["Самарканд", "Термез"];

/** 6. The club is becoming an exporters' club. */
const Exporters: React.FC = () => {
  const pose = mapPose;
  return (
    <Stage
      len={120}
      foot={<Lockup instant />}
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
                return <Laptop key={city} x={x} z={z} y={0.06} length={0.36} lit={false} />;
              })}
            </Reflect>
            {EXPORTERS.map(({ city, to }) => (
              <Arc key={city} from={at(city)} to={to} />
            ))}
          </Scene>
          {LOCAL.map((city) => {
            const [x, z] = at(city);
            return (
              <Pin key={city} pose={pose} at={[x, 0.55, z]}>
                <Badge text="БЕЗ ЛЬГОТ С 2028" dim />
              </Pin>
            );
          })}
          <div style={{ position: "absolute", left: 96, top: 1180, display: "flex", gap: 24 }}>
            {[
              ["2025", "Дивиденды иностранцам — как у местных, только экспортёрам"],
              ["2028", "НДС — всем. Освобождение — при экспорте больше 50%"],
            ].map(([year, text]) => (
              <div
                key={year}
                style={{
                  width: 432,
                  padding: "20px 24px",
                  borderRadius: 20,
                  border: `2px solid ${RULE}`,
                  backgroundColor: "rgba(20,19,18,0.7)",
                  fontFamily: FONT,
                }}
              >
                <div style={{ fontSize: 40, fontWeight: 800, color: ACCENT }}>{year}</div>
                <div style={{ fontSize: 26, lineHeight: 1.3, color: INK, marginTop: 6 }}>{text}</div>
              </div>
            ))}
          </div>
        </>
      }
    >
      <Rail>
        <Lines lines={["IT PARK —", "КЛУБ ЭКСПОРТЁРОВ"]} max={150} instant />
      </Rail>
    </Stage>
  );
};

/** 7. Count your export share now. */
const Gauge: React.FC = () => {
  const L = 96;
  const W = 888;
  const value = 0.62;
  return (
    <Stage len={120} foot={<Lockup instant />}>
      <Rail>
        <Lines lines={["ПОСЧИТАЙТЕ", "ДОЛЮ ЭКСПОРТА"]} max={150} instant />
      </Rail>
      <div style={{ position: "absolute", left: L, top: 760, fontFamily: FONT, fontSize: 30, letterSpacing: "0.16em", color: SUB }}>
        ЭКСПОРТ В ДОХОДЕ КОМПАНИИ
      </div>
      <div style={{ position: "absolute", left: L, top: 900, width: W, height: 36, borderRadius: 18, backgroundColor: "#24221F" }} />
      <div
        style={{
          position: "absolute",
          left: L,
          top: 900,
          width: W * value,
          height: 36,
          borderRadius: 18,
          background: `linear-gradient(90deg, #6E1B25 0%, ${ACCENT} 100%)`,
          boxShadow: `0 0 40px ${ACCENT}88`,
        }}
      />
      {/* The 2028 line. */}
      <div style={{ position: "absolute", left: L + W * 0.5 - 2, top: 870, width: 4, height: 96, backgroundColor: INK }} />
      <div style={{ position: "absolute", left: L + W * 0.5, top: 990, transform: "translateX(-50%)", fontFamily: FONT, textAlign: "center" }}>
        <div style={{ fontSize: 44, fontWeight: 800, color: INK }}>50%</div>
        <div style={{ fontSize: 26, letterSpacing: "0.14em", color: SUB }}>ПОРОГ 2028</div>
      </div>
      <div style={{ position: "absolute", left: L, top: 990, fontFamily: FONT, fontSize: 30, color: SUB }}>0%</div>
      <div style={{ position: "absolute", left: L + W, top: 990, transform: "translateX(-100%)", fontFamily: FONT, fontSize: 30, color: SUB }}>100%</div>
      <div style={{ position: "absolute", left: L + W * value, top: 830, transform: "translateX(-50%)", fontFamily: FONT, fontSize: 40, fontWeight: 800, color: ACCENT }}>
        62%
      </div>
      <div style={{ position: "absolute", left: L, top: 1130, width: 760 }}>
        <Note text={"Пока есть время перестроиться: по действующему кодексу порог начинает работать 1 января 2028 года."} />
      </div>
    </Stage>
  );
};

export type MockShot = "hook" | "why" | "status-a" | "status-b" | "card" | "lost" | "export" | "gauge";

export const ItParkMock: React.FC<{ shot: MockShot }> = ({ shot }) => (
  <AbsoluteFill>
    {shot === "hook" ? <Hook /> : null}
    {shot === "why" ? <Why /> : null}
    {shot === "status-a" ? <Status ghost={false} /> : null}
    {shot === "status-b" ? <Status ghost /> : null}
    {shot === "card" ? <Student /> : null}
    {shot === "lost" ? <Lost /> : null}
    {shot === "export" ? <Exporters /> : null}
    {shot === "gauge" ? <Gauge /> : null}
  </AbsoluteFill>
);

