import type { ReactNode } from "react";
import type { ArticleContentBlock } from "@/lib/publications";
import { Link } from "@/i18n/navigation";
import { listItems } from "./article-utils";
import FuelCalculator from "./FuelCalculator";

/* Structured article blocks: tables, figures, worked examples, steps and the like (types in
   lib/publications.ts). Server-rendered, no client code. Brand red appears as the bright triple
   205,30,70 at low alpha, and #f0a3b3 / #f6b8c5 for small red accents on the dark surface. */

type Block<T extends ArticleContentBlock["type"]> = Extract<ArticleContentBlock, { type: T }>;

const PINK = "text-[#f0a3b3]";

function Svg({ children, className = "size-[18px]" }: { children: ReactNode; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`flex-none ${className}`}>
      {children}
    </svg>
  );
}
const Tick = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
);

/** Bold label from "Label. text" / "Label — text" items, as in plain lists. */
function Labelled({ items, render }: { items: string[]; render: (label: ReactNode, text: string, i: number) => ReactNode }) {
  return <>{listItems(items).map((it, i) => render(it.label ? <b className="font-semibold text-foreground-hi">{it.label}</b> : null, it.text, i))}</>;
}

function Table({ b }: { b: Block<"table"> }) {
  const last = b.head.length - 1;
  return (
    <div className="rounded-[16px] border border-line overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[16px] max-sm:text-[15px] leading-[1.45]">
          <thead>
            <tr>
              {b.head.map((h) => (
                <th key={h} scope="col" className="px-[18px] py-[13px] max-sm:px-3 text-left text-[13px] font-semibold text-muted bg-white/[.03] border-b border-line whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r, i) => (
              <tr key={i} className={`${r.highlight ? "bg-[rgba(205,30,70,.07)]" : ""} [&:not(:last-child)>*]:border-b [&>*]:border-line`}>
                {r.cells.map((c, j) => {
                  const cls = "px-[18px] py-[15px] max-sm:px-3 max-sm:py-[13px] text-left align-middle";
                  if (j === 0)
                    return (
                      <th key={j} scope="row" className={`${cls} font-semibold text-foreground-hi tabular-nums sm:whitespace-nowrap`}>
                        {c}
                      </th>
                    );
                  return (
                    <td key={j} className={`${cls} text-foreground-2`}>
                      {j === last && r.bar != null ? (
                        <span className="flex items-center gap-3 max-sm:gap-2">
                          <span aria-hidden className="block flex-none w-[180px] max-sm:w-16">
                            <i
                              className="block h-2 rounded-full bg-[linear-gradient(90deg,var(--primary),var(--primary-light))]"
                              style={{ width: `${Math.round(r.bar * 100)}%` }}
                            />
                          </span>
                          <b className="font-semibold text-foreground-hi tabular-nums whitespace-nowrap">{c}</b>
                        </span>
                      ) : (
                        c
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.caption && <p className="px-[18px] max-sm:px-3 pt-3 pb-3.5 border-t border-line text-[14px] leading-[1.5] text-muted">{b.caption}</p>}
    </div>
  );
}

function Checks({ b }: { b: Block<"checks"> }) {
  const cell = "flex gap-3 items-start p-[18px] rounded-[16px] text-[15.5px] leading-[1.45]";
  return (
    <ul className="grid sm:grid-cols-2 gap-3">
      {b.items.map((it) => (
        <li key={it} className={`${cell} bg-surface text-foreground`}>
          <Tick className={`size-[22px] mt-px ${PINK}`} />
          {it}
        </li>
      ))}
      {b.except && (
        <li className={`${cell} border border-dashed border-white/15 text-muted`}>
          <Svg className="size-[22px] mt-px">
            <path d="M6 12h12" />
          </Svg>
          {b.except}
        </li>
      )}
    </ul>
  );
}

function Figures({ b }: { b: Block<"figures"> }) {
  return (
    <dl className={`grid ${b.items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"} border-y border-line`}>
      {b.items.map((f, i) => (
        <div key={f.label} className={`flex flex-col py-6 sm:pr-6 ${i > 0 ? "max-sm:border-t sm:border-l sm:pl-6 border-line" : ""}`}>
          <dt className="mt-2.5 text-[15px] leading-[1.45] text-foreground-2">{f.label}</dt>
          <dd className="order-first text-[clamp(40px,5vw,56px)] leading-none tracking-[-0.04em] font-semibold text-foreground-hi tabular-nums">
            {f.value}
            {f.unit && <span className={`ml-1.5 align-top relative top-[.35em] text-[.4em] tracking-normal ${PINK}`}>{f.unit}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Takeaway({ b }: { b: Block<"takeaway"> }) {
  return (
    <aside className="px-[30px] py-7 max-sm:px-5 max-sm:py-[22px] rounded-[16px] border border-[rgba(205,30,70,.28)] bg-[linear-gradient(135deg,rgba(205,30,70,.14),rgba(205,30,70,.04)_60%)]">
      <p className="flex items-center gap-2.5 text-[14px] font-semibold tracking-[.02em] text-[#f6b8c5]">
        <Svg>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v5M12 16.5v.01" />
        </Svg>
        {b.title}
      </p>
      <ul className="mt-3.5 grid gap-2.5">
        {b.items.map((it) => (
          <li key={it} className="flex gap-3 text-[17px] leading-[1.55] text-foreground-hi">
            <Tick className={`size-[18px] mt-[.2em] ${PINK}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Sources({ b }: { b: Block<"sources"> }) {
  return (
    <ul className="grid gap-2">
      {b.items.map((s) => {
        const inner = (
          <>
            <span aria-hidden className="grid place-items-center size-10 max-sm:size-9 rounded-[10px] bg-surface-light text-foreground-2">
              <Svg className="size-[18px] stroke-[1.7]">
                <path d="M6 3h9l4 4v14H6z" />
                <path d="M15 3v4h4M9 12h7M9 16h7" />
              </Svg>
            </span>
            <span className="min-w-0">
              <b className="block text-[15.5px] leading-[1.35] font-semibold text-foreground-hi">{s.title}</b>
              {s.meta && <span className="block mt-0.5 text-[13.5px] leading-[1.4] text-muted">{s.meta}</span>}
            </span>
            {s.href && (
              <span className="max-sm:hidden text-[13px] text-muted whitespace-nowrap transition-colors duration-200 group-hover:text-foreground-hi">
                {new URL(s.href).hostname.replace(/^www\./, "")} ↗
              </span>
            )}
          </>
        );
        const cls = "grid grid-cols-[40px_minmax(0,1fr)_auto] max-sm:grid-cols-[36px_minmax(0,1fr)] gap-3.5 items-center px-4 py-3.5 rounded-[14px] bg-surface";
        return (
          <li key={s.title}>
            {s.href ? (
              <a href={s.href} target="_blank" rel="noopener noreferrer" className={`group ${cls} transition-colors duration-200 hover:bg-surface-light/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-hi`}>
                {inner}
              </a>
            ) : (
              <div className={cls}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const TONE = { light: "bg-foreground", red: "bg-primary-light", dark: "bg-primary-dark" } as const;

function Example({ b }: { b: Block<"example"> }) {
  return (
    <div className="m-tile p-[30px] max-sm:px-[18px] max-sm:py-[22px] max-sm:rounded-[20px]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-[20px] font-semibold tracking-[-0.015em] text-foreground-hi">{b.title}</p>
        {b.meta && <p className="text-[14px] text-muted">{b.meta}</p>}
      </div>
      {b.split && (
        <>
          <div aria-hidden className="mt-[22px] mb-2 flex h-3.5 gap-0.5 rounded-full overflow-hidden">
            {b.split.map((s) => (
              <i key={s.label} className={`block ${TONE[s.tone]}`} style={{ flex: s.value }} />
            ))}
          </div>
          <ul aria-hidden className="flex flex-wrap gap-x-[18px] gap-y-1.5 text-[13.5px] text-muted">
            {b.split.map((s) => (
              <li key={s.label} className="flex items-center gap-[7px]">
                <i className={`size-[9px] rounded-[3px] ${TONE[s.tone]}`} />
                {s.label}
              </li>
            ))}
          </ul>
        </>
      )}
      <dl className="mt-[18px]">
        {b.rows.map((r) => (
          <div
            key={r.label}
            className={`flex justify-between gap-4 ${r.kind === "sum" ? "pt-4 text-[18px] font-semibold text-foreground-hi" : "py-[13px] border-b border-line text-[16px] text-foreground-2"}`}
          >
            <dt>
              {r.label}
              {r.note && <span className="block mt-0.5 text-[13px] font-normal leading-[1.45] text-muted">{r.note}</span>}
            </dt>
            <dd
              className={`font-semibold tabular-nums whitespace-nowrap ${r.kind === "minus" ? PINK : "text-foreground-hi"} ${r.kind === "sum" ? "text-[22px]" : ""}`}
            >
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Deadlines({ b }: { b: Block<"deadlines"> }) {
  return (
    <ul className="grid sm:grid-cols-3 gap-3">
      {b.items.map((d) => (
        <li key={d.what} className="flex flex-col items-start p-5 rounded-[16px] border border-line">
          <p className="flex flex-wrap items-baseline gap-x-2">
            <b className={`font-semibold text-foreground-hi tracking-[-0.03em] ${d.when.length > 6 ? "text-[24px] leading-[34px]" : "text-[34px] leading-none"}`}>{d.when}</b>
            {d.whenNote && <span className="text-[14px] text-muted">{d.whenNote}</span>}
          </p>
          <p className="mt-3 text-[15.5px] leading-[1.45] text-foreground">{d.what}</p>
          {d.freq && <span className="mt-auto pt-3"><span className="inline-block text-[12px] font-semibold px-[9px] py-[3px] rounded-full bg-white/[.07] text-foreground-2">{d.freq}</span></span>}
        </li>
      ))}
    </ul>
  );
}

function Risks({ b }: { b: Block<"risks"> }) {
  return (
    <aside className="px-7 py-[26px] max-sm:px-5 max-sm:py-[22px] rounded-[16px] bg-surface border-l-[3px] border-primary-light">
      {b.title && <p className="mb-3.5 text-[17px] font-semibold text-foreground-hi">{b.title}</p>}
      <ul className="grid gap-3">
        <Labelled
          items={b.items}
          render={(label, text, i) => (
            <li key={i} className="grid grid-cols-[20px_minmax(0,1fr)] gap-3 text-[16px] leading-[1.5] text-foreground-2">
              <span aria-hidden className="grid place-items-center size-5 mt-0.5 rounded-full bg-[rgba(205,30,70,.2)] text-[#f6b8c5] text-[12px] font-bold">
                !
              </span>
              <span>
                {label} {text}
              </span>
            </li>
          )}
        />
      </ul>
    </aside>
  );
}

function Steps({ b }: { b: Block<"steps"> }) {
  return (
    <>
      <ol>
        {b.items.map((s, i) => (
          <li key={s.title} className="relative grid grid-cols-[44px_minmax(0,1fr)] max-sm:grid-cols-[36px_minmax(0,1fr)] gap-[18px] max-sm:gap-3.5 pb-7 last:pb-0">
            {i < b.items.length - 1 && <span aria-hidden className="absolute left-[21.5px] max-sm:left-[17.5px] top-11 max-sm:top-9 bottom-0 w-px bg-white/[.12]" />}
            <span
              aria-hidden
              className={`relative grid place-items-center size-11 max-sm:size-9 rounded-full border text-[15px] max-sm:text-[14px] font-semibold text-foreground-hi tabular-nums ${
                s.key ? "bg-primary border-primary-light" : "bg-surface border-white/[.12]"
              }`}
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <h3 className="mt-[9px] max-sm:mt-[5px] flex flex-wrap items-center gap-x-3 gap-y-2 text-[18px] leading-[1.35] font-semibold text-foreground-hi text-balance">
                {s.title}
                {s.due && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[.07] text-[12.5px] font-semibold leading-none text-foreground whitespace-nowrap">
                    <Svg className="size-[13px]">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </Svg>
                    {s.due}
                  </span>
                )}
              </h3>
              {s.text.map((t, j) => (
                <p key={j} className="mt-2 text-[16.5px] max-sm:text-[16px] leading-[1.62] text-foreground-2 text-pretty">
                  {t}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
      {b.summary && (
        <p className="mt-7 flex flex-wrap gap-x-7 gap-y-2.5 px-[22px] py-[18px] rounded-[16px] bg-surface text-[15px] text-foreground-2">
          {b.summary.map((s) => (
            <span key={s.label}>
              {s.label} <b className="font-semibold text-foreground-hi">{s.value}</b>
            </span>
          ))}
        </p>
      )}
    </>
  );
}

const RANK = ["bg-primary-light", "bg-[rgba(205,30,70,.45)]", "bg-white/10"];
const INDENT = ["", "sm:ml-7", "sm:ml-14"];

function Priority({ b }: { b: Block<"priority"> }) {
  return (
    <ol className="grid gap-2">
      {b.items.map((p, i) => (
        <li key={p.title} className={`grid grid-cols-[56px_minmax(0,1fr)] items-center gap-4 py-4 pl-4 pr-5 rounded-[16px] bg-surface ${INDENT[Math.min(i, 2)]}`}>
          <span aria-hidden className={`grid place-items-center size-14 rounded-[14px] text-[22px] font-semibold text-white ${RANK[Math.min(i, 2)]}`}>
            {i + 1}
          </span>
          <span>
            <b className="block text-[16.5px] leading-[1.4] font-semibold text-foreground-hi">{p.title}</b>
            {p.text && <span className="block mt-0.5 text-[14px] leading-[1.45] text-muted">{p.text}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Checklist({ b }: { b: Block<"checklist"> }) {
  return (
    <div className="m-tile px-7 py-[26px] max-sm:px-[18px] max-sm:py-[22px] max-sm:rounded-[20px]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[18px] font-semibold text-foreground-hi">{b.title}</p>
        {b.meta && <p className="text-[13.5px] text-muted">{b.meta}</p>}
      </div>
      <ul className="mt-4">
        {b.items.map((it) => (
          <li key={it.text} className="grid grid-cols-[22px_minmax(0,1fr)] gap-3.5 py-[13px] border-t border-line text-[16px] leading-[1.45] text-foreground">
            <span aria-hidden className="size-[22px] mt-px rounded-[7px] border-[1.5px] border-white/25" />
            <span>
              {it.text}
              {it.note && <span className="block mt-0.5 text-[13.5px] text-muted">{it.note}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Offer({ b }: { b: Block<"offer"> }) {
  const external = (href: string) => /^https?:/.test(href);
  const button = (l: { label: string; href: string }, cls: string) =>
    external(l.href) ? (
      <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {l.label}
      </a>
    ) : (
      <Link href={l.href} className={cls}>
        {l.label}
      </Link>
    );
  return (
    <aside className="relative overflow-hidden rounded-[var(--radius-tile)] border border-[rgba(205,30,70,.3)] bg-[linear-gradient(140deg,rgba(205,30,70,.2),rgba(205,30,70,.05)_55%,rgba(255,255,255,.02))] px-9 py-9 max-sm:px-5 max-sm:py-7">
      <p className="text-[26px] max-sm:text-[23px] font-semibold leading-[1.15] tracking-[-0.025em] text-foreground-hi text-balance">{b.title}</p>
      {b.text && <p className="mt-3 text-[16.5px] leading-[1.55] text-foreground-2 max-w-[34em]">{b.text}</p>}
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {b.items.map((it) => (
          <li key={it} className="flex gap-3 text-[15.5px] leading-[1.45] text-foreground">
            <Tick className={`size-[18px] mt-[.15em] ${PINK}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        {button(b.button, "m-btn m-btn-p max-sm:w-full")}
        {b.secondary && button(b.secondary, "m-btn m-btn-g max-sm:w-full")}
      </div>
    </aside>
  );
}

const RENDER: { [T in ArticleContentBlock["type"]]?: (props: { b: Block<T> }) => ReactNode } = {
  calculator: ({ b }) => <FuelCalculator t={b} />,
  offer: Offer,
  table: Table,
  checks: Checks,
  figures: Figures,
  takeaway: Takeaway,
  sources: Sources,
  example: Example,
  deadlines: Deadlines,
  risks: Risks,
  steps: Steps,
  priority: Priority,
  checklist: Checklist,
};

/** Renders a structured block, or returns null for the prose types Prose handles itself. */
export function ArticleBlock({ block, afterHeading }: { block: ArticleContentBlock; afterHeading: boolean }) {
  const Render = RENDER[block.type] as ((props: { b: ArticleContentBlock }) => ReactNode) | undefined;
  if (!Render) return null;
  return <div className={afterHeading ? "mt-6" : "mt-8"}>{Render({ b: block })}</div>;
}
