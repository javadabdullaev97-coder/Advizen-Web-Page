"use client";

import { useId, useState } from "react";
import type { FuelCalculatorText } from "@/lib/publications";

/* Sufficiency check for a hybrid car: how far the fuel and electricity booked for a period would
   take the car at its norms, compared with the odometer. Everything runs in the browser. */

type Key = keyof FuelCalculatorText["defaults"];
const KEYS: Key[] = ["fuel", "fuelNorm", "power", "powerNorm", "distance", "tolerance"];

/* Numbers are formatted by hand so the server and the browser print exactly the same text. */
function fmt(n: number, dec: "," | ".", digits = 0): string {
  const fixed = Math.abs(n).toFixed(digits);
  const [int, frac] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${n < 0 ? "−" : ""}${grouped}${frac ? dec + frac : ""}`;
}

function show(n: number, dec: "," | "."): string {
  return Number.isInteger(n) ? String(n) : String(n).replace(".", dec);
}

function parse(s: string): number {
  const n = Number(s.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : NaN;
}

/* Four result cells: a 2×2 grid on phones, one row from sm up. */
const CELL = ["pr-3", "pl-4 border-l", "max-sm:border-t sm:border-l sm:pl-4", "pl-4 border-l max-sm:border-t"];

const fill = (t: string, v: Record<string, string>) => t.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? "");

export default function FuelCalculator({ t }: { t: FuelCalculatorText }) {
  const id = useId();
  const initial = () => Object.fromEntries(KEYS.map((k) => [k, show(t.defaults[k], t.decimal)])) as Record<Key, string>;
  const [raw, setRaw] = useState<Record<Key, string>>(initial);
  const v = Object.fromEntries(KEYS.map((k) => [k, parse(raw[k])])) as Record<Key, number>;
  const d = t.decimal;

  const fuelKm = v.fuelNorm > 0 && v.fuel >= 0 ? (v.fuel * 100) / v.fuelNorm : NaN;
  const powerKm = v.powerNorm > 0 && v.power >= 0 ? (v.power * 100) / v.powerNorm : v.power === 0 ? 0 : NaN;
  const total = fuelKm + powerKm;
  const tol = v.tolerance >= 0 ? v.tolerance : 5;
  const ready = [fuelKm, powerKm, v.distance].every(Number.isFinite);
  const delta = total - v.distance;
  const pct = v.distance > 0 ? (delta / v.distance) * 100 : NaN;

  type State = "idle" | "noDistance" | "ok" | "over" | "under";
  const state: State = !ready
    ? "idle"
    : v.distance === 0
      ? total > 0
        ? "noDistance"
        : "idle"
      : Math.abs(pct) <= tol
        ? "ok"
        : pct > 0
          ? "over"
          : "under";

  /* Bar scale: room for both the energy bar and the tolerance band around the odometer. */
  const scale = ready ? Math.max(total, v.distance * (1 + tol / 100), 1) * 1.08 : 1;
  const w = (n: number) => `${Math.max(0, Math.min(100, (n / scale) * 100))}%`;

  const tone = {
    ok: "border-white/15 bg-white/[.04]",
    over: "border-[rgba(205,30,70,.45)] bg-[rgba(205,30,70,.12)]",
    under: "border-[rgba(240,163,179,.35)] bg-[rgba(240,163,179,.06)]",
    noDistance: "border-[rgba(205,30,70,.45)] bg-[rgba(205,30,70,.12)]",
    idle: "border-line bg-transparent",
  }[state];

  const badge = {
    ok: "✓",
    over: "+",
    under: "−",
    noDistance: "!",
    idle: "?",
  }[state];

  const verdict = t.verdict[state];
  const vals: Record<string, string> = {
    pct: Number.isFinite(pct) ? fmt(Math.abs(pct), d, 1) : "",
    km: Number.isFinite(delta) ? fmt(Math.abs(delta), d) : "",
    tol: fmt(tol, d, Number.isInteger(tol) ? 0 : 1),
    l: Number.isFinite(delta) && total > 0 ? fmt((v.fuel * delta) / total, d, 1) : "",
    kwh: Number.isFinite(delta) && total > 0 ? fmt((v.power * delta) / total, d, 1) : "",
  };

  const field = (k: Key, label: string, unit: string) => (
    <label key={k} htmlFor={`${id}-${k}`} className="flex flex-col gap-2">
      <span className="text-[13.5px] leading-[1.35] text-foreground-2">{label}</span>
      <span className="relative flex items-center">
        <input
          id={`${id}-${k}`}
          inputMode="decimal"
          autoComplete="off"
          value={raw[k]}
          onChange={(e) => setRaw((r) => ({ ...r, [k]: e.target.value }))}
          aria-invalid={Number.isNaN(v[k]) || undefined}
          className="w-full h-12 pl-4 pr-[4.5rem] rounded-[12px] bg-background/60 border border-white/[.12] text-[17px] font-semibold text-foreground-hi tabular-nums outline-none transition-colors duration-150 hover:border-white/25 focus:border-[#f0a3b3] aria-[invalid]:border-primary-light"
        />
        <span aria-hidden className="pointer-events-none absolute right-4 text-[13px] text-muted">
          {unit}
        </span>
      </span>
    </label>
  );

  return (
    <section aria-labelledby={`${id}-title`} className="m-tile p-[30px] max-sm:px-[18px] max-sm:py-[22px] max-sm:rounded-[20px]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 id={`${id}-title`} className="text-[20px] font-semibold tracking-[-0.015em] text-foreground-hi">
          {t.title}
        </h3>
        <button
          type="button"
          onClick={() => setRaw(initial())}
          className="text-[13.5px] text-muted underline underline-offset-4 decoration-white/20 transition-colors duration-150 hover:text-foreground-hi"
        >
          {t.reset}
        </button>
      </div>
      {t.intro && <p className="mt-2 text-[15px] leading-[1.5] text-foreground-2 max-w-[36em]">{t.intro}</p>}

      <div className="mt-6 grid sm:grid-cols-2 gap-x-4 gap-y-4">
        {field("fuel", t.fields.fuel, t.units.l)}
        {field("fuelNorm", t.fields.fuelNorm, t.units.per100)}
        {field("power", t.fields.power, t.units.kwh)}
        {field("powerNorm", t.fields.powerNorm, t.units.kwhPer100)}
        {field("distance", t.fields.distance, t.units.km)}
        {field("tolerance", t.fields.tolerance, "%")}
      </div>

      <div aria-hidden className="mt-8">
        <div className="relative h-4">
          <div className="absolute inset-0 rounded-full bg-white/[.06]" />
          {ready && (
            <>
              <i className="absolute inset-y-0 left-0 rounded-l-full bg-primary-light" style={{ width: w(fuelKm) }} />
              <i className="absolute inset-y-0 bg-foreground" style={{ left: w(fuelKm), width: w(powerKm) }} />
              {v.distance > 0 && (
                <>
                  <span
                    className="absolute -inset-y-1.5 border-x border-dashed border-white/40 bg-white/[.07]"
                    style={{ left: w(v.distance * (1 - tol / 100)), width: w(v.distance * (2 * tol) / 100) }}
                  />
                  <span className="absolute -inset-y-2.5 w-0.5 -ml-px rounded bg-foreground-hi" style={{ left: w(v.distance) }} />
                </>
              )}
            </>
          )}
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-[18px] gap-y-1.5 text-[13px] text-muted">
          <li className="flex items-center gap-[7px]">
            <i className="size-[9px] rounded-[3px] bg-primary-light" />
            {t.out.fuelKm}
          </li>
          <li className="flex items-center gap-[7px]">
            <i className="size-[9px] rounded-[3px] bg-foreground" />
            {t.out.powerKm}
          </li>
          <li className="flex items-center gap-[7px]">
            <i className="w-0.5 h-3 rounded bg-foreground-hi" />
            {t.out.odometer}
          </li>
          <li className="flex items-center gap-[7px]">
            <i className="w-3 h-3 border border-dashed border-white/40 bg-white/[.07]" />
            {fill(t.out.band, vals)}
          </li>
        </ul>
      </div>

      <dl className="mt-5 grid grid-cols-2 sm:grid-cols-4 border-y border-line">
        {[
          [t.out.fuelKm, fuelKm],
          [t.out.powerKm, powerKm],
          [t.out.total, total],
          [t.out.odometer, v.distance],
        ].map(([label, n], i) => (
          <div key={label as string} className={`py-4 border-line ${CELL[i]}`}>
            <dt className="text-[13px] leading-[1.35] text-muted">{label as string}</dt>
            <dd className="mt-1 text-[22px] font-semibold tracking-[-0.02em] text-foreground-hi tabular-nums">
              {Number.isFinite(n as number) ? fmt(n as number, d) : "–"}
              <span className="ml-1 text-[13px] font-normal tracking-normal text-muted">{t.units.km}</span>
            </dd>
          </div>
        ))}
      </dl>

      <div aria-live="polite" className={`mt-5 grid grid-cols-[36px_minmax(0,1fr)] gap-3.5 p-5 rounded-[16px] border ${tone}`}>
        <span
          aria-hidden
          className={`grid place-items-center size-9 rounded-full text-[17px] font-bold ${
            state === "over" || state === "noDistance" ? "bg-primary-light text-white" : state === "ok" ? "bg-white/10 text-[#f0a3b3]" : "bg-white/[.07] text-foreground-2"
          }`}
        >
          {badge}
        </span>
        <div>
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[17px] font-semibold leading-[1.35] text-foreground-hi">
            {fill(verdict.title, vals)}
            {(state === "ok" || state === "over" || state === "under") && (
              <span className="text-[14px] font-semibold text-muted tabular-nums">
                {t.out.deviation} {delta >= 0 ? "+" : "−"}
                {vals.pct}%
              </span>
            )}
          </p>
          <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground-2">{fill(verdict.text, vals)}</p>
          {state === "over" && <p className="mt-2 text-[14px] leading-[1.5] text-[#f6b8c5]">{fill(t.verdict.over.split, vals)}</p>}
          {ready && v.distance > 0 && v.distance < 1000 && <p className="mt-2 text-[14px] leading-[1.5] text-muted">{t.verdict.short}</p>}
        </div>
      </div>

      <p className="mt-4 flex items-center gap-2 text-[13px] text-muted">
        <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[14px] flex-none">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        {t.privacy}
      </p>
    </section>
  );
}
