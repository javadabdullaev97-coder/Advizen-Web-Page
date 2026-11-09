"use client";

import { useState } from "react";

type Item = { q: string; a: string };

/* Every answer is in the HTML; closed ones collapse to zero height. The first starts open. */
export default function ServicePageFaq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-6 py-6 max-sm:py-5 text-left text-[19px] max-sm:text-[17px] font-semibold leading-[1.35] tracking-[-0.01em] text-foreground-hi cursor-pointer touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground-hi"
              >
                {item.q}
                <span
                  aria-hidden
                  className={`relative shrink-0 w-3.5 h-3.5 transition-transform duration-300 ease-[var(--ease-out)] motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`}
                >
                  <span className="absolute inset-x-0 top-1.5 h-[1.6px] bg-foreground-hi" />
                  <span className="absolute inset-x-0 top-1.5 h-[1.6px] bg-foreground-hi rotate-90" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              inert={!isOpen}
              className="grid transition-[grid-template-rows] duration-[400ms] ease-[var(--ease-out)] motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-[17px] leading-[1.6] text-foreground-2 max-w-[38em]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
