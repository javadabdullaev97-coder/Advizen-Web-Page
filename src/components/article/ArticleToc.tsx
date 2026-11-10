"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import type { TocItem } from "./article-utils";

const SPY_LINE = 130; // px from the top of the viewport, just under the nav

function jumpTo(e: MouseEvent<HTMLAnchorElement>, id: string, before?: () => void) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  before?.();
  const smooth = matchMedia("(prefers-reduced-motion: no-preference)").matches;
  // Wait a frame so a collapsing list above the target has settled before measuring.
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    el.focus({ preventScroll: true });
    history.replaceState(null, "", `#${id}`);
  });
}

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Desktop: sticky list beside the text that marks the section being read, with `footer` below it. */
export function ArticleToc({ items, label, footer }: { items: TocItem[]; label: string; footer?: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const heads = items.map((it) => document.getElementById(it.id)).filter((el): el is HTMLElement => !!el);
    let frame = 0;
    const spy = () => {
      let id: string | null = null;
      for (const h of heads) if (h.getBoundingClientRect().top <= SPY_LINE) id = h.id;
      setActive(id);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(spy);
    };
    spy();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <aside
      aria-label={label}
      className="sticky top-28 self-start max-h-[calc(100vh-140px)] overflow-auto pr-2 [scrollbar-width:thin] max-[1180px]:hidden"
    >
      <span className="block mb-3.5 text-[14px] text-muted">{label}</span>
      <ol className="border-l border-line">
        {items.map((it, i) => {
          const on = it.id === active;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => jumpTo(e, it.id)}
                aria-current={on ? "true" : undefined}
                className={`relative grid grid-cols-[26px_minmax(0,1fr)] gap-1.5 py-2 pl-[18px] text-[14px] leading-[1.4] transition-colors duration-200 hover:text-foreground-hi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-hi before:absolute before:-left-px before:inset-y-2 before:w-0.5 before:rounded-sm before:bg-foreground-hi before:origin-center before:transition-transform before:duration-300 before:ease-[var(--ease-out)] motion-reduce:before:transition-none ${
                  on ? "text-foreground-hi before:scale-y-100" : "text-muted before:scale-y-0"
                }`}
              >
                <b className={`font-medium tabular-nums transition-colors duration-200 ${on ? "text-foreground-2" : "text-white/30"}`}>{num(i)}</b>
                <span>{it.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
      {footer}
    </aside>
  );
}

/** Smaller screens: a collapsed list above the text that closes after a jump. */
export function ArticleMobileToc({ items, label }: { items: TocItem[]; label: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (ref.current) ref.current.open = false;
  };
  return (
    <details ref={ref} className="group/toc mb-4 bg-surface rounded-[var(--radius-inner)] min-[1181px]:hidden">
      <summary className="flex justify-between items-center gap-4 px-[22px] py-[18px] text-[16px] font-semibold text-foreground-hi cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-[var(--radius-inner)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-hi">
        <span>{label}</span>
        <i
          aria-hidden
          className="size-2 border-r-[1.6px] border-b-[1.6px] border-foreground-2 -translate-y-0.5 rotate-45 transition-transform duration-300 ease-[var(--ease-out)] motion-reduce:transition-none group-open/toc:translate-y-0.5 group-open/toc:-rotate-[135deg]"
        />
      </summary>
      <ol className="px-[22px] pb-3.5 border-t border-line">
        {items.map((it, i) => (
          <li key={it.id} className="border-b border-line last:border-b-0">
            <a
              href={`#${it.id}`}
              onClick={(e) => jumpTo(e, it.id, close)}
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-1.5 py-3 text-[15px] leading-[1.4] text-foreground-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-hi"
            >
              <b className="font-medium text-muted tabular-nums">{num(i)}</b>
              <span>{it.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
