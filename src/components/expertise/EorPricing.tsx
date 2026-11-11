import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import EorCalculator, { type EorCalcLabels, type EorPlan } from "@/components/expertise/EorCalculator";

type Plan = { name: string; desc: string; soc: string; pit: string; roles: string[]; rates: string };
type Column = { title: string; items: string[] };

const RATES: Record<string, { pit: number; soc: number }> = {
  standard: { pit: 0.12, soc: 0.12 },
  it: { pit: 0.075, soc: 0 },
};

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;
const H2 = "m-h2 text-[36px] sm:text-[44px] lg:text-[clamp(40px,4.4vw,64px)]";

/* EOR pricing: two plans at one price, what the price covers, and a calculator fed by one net-salary input. */
export default async function EorPricing({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "EorPricing" });
  const plans = t.raw("plans") as Record<string, Plan>;
  const columns = t.raw("terms") as Column[];
  const calc = t.raw("calc") as EorCalcLabels & { title: string; lede: string };

  const calcPlans: EorPlan[] = Object.entries(plans).map(([key, p]) => ({
    key,
    name: p.name,
    rates: p.rates,
    ...RATES[key],
  }));

  return (
    <section className="m-wrap pt-24 lg:pt-32" aria-labelledby="pricing" id="pricing">
      <div data-reveal className="mb-10 lg:mb-14 grid gap-5">
        <h2 id="pricing" className={H2}>{t("title")}</h2>
        <p className="text-[18px] lg:text-[20px] leading-[1.5] text-foreground-2 max-w-[34em] text-pretty">{t("lede")}</p>
      </div>

      <ul data-reveal className="grid gap-4 lg:grid-cols-2">
        {Object.entries(plans).map(([key, p]) => (
          <li
            key={key}
            className="m-tile row-span-4 grid grid-rows-subgrid gap-y-7 p-9 max-lg:p-8 max-sm:px-[22px] max-sm:py-7"
          >
            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-foreground-hi">{p.name}</h3>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="m-fig text-[64px] max-sm:text-[52px]">$249</span>
                <span className="text-[16px] text-foreground-2">{t("perEmployee")}</span>
              </p>
            </div>
            <p className="text-[17px] leading-[1.55] text-foreground-2 text-pretty">{p.desc}</p>
            <dl className="grid grid-cols-2 border-y border-line">
              <div className="py-4 pr-5 border-r border-line">
                <dt className="text-[14px] text-muted">{t("socLabel")}</dt>
                <dd className="m-fig mt-2 text-[30px]">{p.soc}</dd>
              </div>
              <div className="py-4 pl-6 max-sm:pl-4">
                <dt className="text-[14px] text-muted">{t("pitLabel")}</dt>
                <dd className="m-fig mt-2 text-[30px]">{p.pit}</dd>
              </div>
            </dl>
            <div>
              <p className="text-[14px] font-semibold text-muted">{t("rolesLabel")}</p>
              <ul className="mt-3 grid gap-2.5">
                {p.roles.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[17px] max-sm:text-[16px] text-foreground-hi">
                    <svg aria-hidden viewBox="0 0 16 16" className="mt-[5px] h-4 w-4 shrink-0 text-primary-light">
                      <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div data-reveal style={delay(0.08)} className="m-tile mt-4 grid lg:grid-cols-[1.3fr_1fr_1fr]">
        {columns.map((col, i) => (
          <div key={col.title} className={`p-9 max-lg:p-8 max-sm:px-[22px] max-sm:py-7 ${i > 0 ? "border-line max-lg:border-t lg:border-l" : ""}`}>
            <h3 className="text-[18px] font-semibold text-foreground-hi">{col.title}</h3>
            <ul className="mt-4 grid gap-2.5">
              {col.items.map((item) => (
                <li key={item} className="relative pl-4 text-[16px] leading-[1.5] text-foreground-2 before:absolute before:left-0 before:top-[.68em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-border-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-24 lg:pt-32">
        <div data-reveal className="mb-8 grid gap-4">
          <h2 className="m-h2 text-[28px] lg:text-[clamp(28px,3vw,40px)] leading-[1.08]">{calc.title}</h2>
          <p className="text-[17px] text-foreground-2 max-w-[34em]">{calc.lede}</p>
        </div>
        <div data-reveal style={delay(0.08)}>
          <EorCalculator plans={calcPlans} labels={calc} />
        </div>
      </div>
    </section>
  );
}
