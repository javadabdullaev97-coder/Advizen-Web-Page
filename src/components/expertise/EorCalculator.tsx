"use client";

import { useId, useState } from "react";

export type EorPlan = { key: string; name: string; rates: string; pit: number; soc: number };
export type EorCalcLabels = {
  field: string;
  inHand: string;
  youPay: string;
  perYear: string;
  net: string;
  pit: string;
  gross: string;
  soc: string;
  fee: string;
};

const FEE = 249;
const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

// Pure: what the client pays each month for a given net salary.
function cost(net: number, plan: EorPlan) {
  const gross = net / (1 - plan.pit);
  const soc = gross * plan.soc;
  return { net, pit: gross - net, gross, soc, fee: FEE, total: gross + soc + FEE };
}

/* Cost parts are steps of the neutral ramp; only our fee carries the brand red. */
const PART = {
  net: "bg-foreground-hi",
  pit: "bg-[#8e8e93]",
  soc: "bg-[#4a4a4e]",
  fee: "bg-primary-light",
} as const;

export default function EorCalculator({ plans, labels }: { plans: EorPlan[]; labels: EorCalcLabels }) {
  const id = useId();
  const [value, setValue] = useState("1500");
  const parsed = parseFloat(value);
  const net = Number.isFinite(parsed) && parsed > 0 ? parsed : 0;

  return (
    <div className="grid gap-6">
      <div className="grid gap-2 sm:max-w-[320px]">
        <label htmlFor={id} className="text-[14px] font-semibold text-muted">{labels.field}</label>
        <div className="flex items-center gap-1.5 rounded-[var(--radius-inner)] border border-border-light bg-surface px-[18px] transition-colors duration-150 focus-within:border-foreground-2">
          <span aria-hidden className="text-[26px] font-semibold text-muted">$</span>
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={0}
            step={50}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full min-w-0 bg-transparent py-3 text-[32px] font-semibold tracking-[-0.03em] tabular-nums text-foreground-hi caret-primary-light outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <span className="whitespace-nowrap text-[14px] font-semibold text-muted">{labels.inHand}</span>
        </div>
      </div>

      <div className="m-tile grid lg:grid-cols-2">
        {plans.map((plan, i) => {
          const c = cost(net, plan);
          const parts = [
            { k: "net" as const, v: c.net },
            { k: "pit" as const, v: c.pit },
            { k: "soc" as const, v: c.soc },
            { k: "fee" as const, v: c.fee },
          ];
          const rows = [
            { k: "net" as const, label: labels.net, v: c.net },
            { k: "pit" as const, label: labels.pit, v: c.pit },
            { k: null, label: labels.gross, v: c.gross },
            { k: "soc" as const, label: labels.soc, v: c.soc },
            { k: "fee" as const, label: labels.fee, v: c.fee },
          ];
          return (
            <article
              key={plan.key}
              className={`grid content-start gap-6 p-8 max-sm:px-[22px] max-sm:py-7 ${i > 0 ? "border-line max-lg:border-t lg:border-l" : ""}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-foreground-hi">{plan.name}</h3>
                <p className="text-[14px] text-muted">{plan.rates}</p>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-muted">{labels.youPay}</p>
                <p className="m-fig mt-2 text-[52px] max-sm:text-[44px]" aria-live="polite">{usd(c.total)}</p>
                <p className="mt-2 text-[15px] text-foreground-2 tabular-nums">{usd(c.total * 12)} {labels.perYear}</p>
              </div>
              <div aria-hidden className="flex h-2.5 gap-0.5 overflow-hidden rounded-full">
                {parts.filter((p) => p.v > 0).map((p) => (
                  <i
                    key={p.k}
                    className={`block h-full basis-0 transition-[flex-grow] duration-[240ms] ease-[var(--ease-out)] motion-reduce:transition-none ${PART[p.k]}`}
                    style={{ flexGrow: p.v }}
                  />
                ))}
              </div>
              <ul>
                {rows.map((r) => {
                  const zero = r.k !== null && r.v === 0;
                  return (
                    <li
                      key={r.label}
                      className="flex items-center gap-3 border-t border-line py-3 text-[16px] max-sm:text-[15px] tabular-nums"
                    >
                      {r.k && <span aria-hidden className={`h-2.5 w-2.5 shrink-0 rounded-[3px] ${PART[r.k]}`} />}
                      <span className={r.k === null ? "font-semibold text-foreground-hi" : zero ? "text-muted-dark" : "text-foreground-2"}>{r.label}</span>
                      <span className={`ml-auto font-semibold ${zero ? "text-muted-dark" : "text-foreground-hi"}`}>{usd(r.v)}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
