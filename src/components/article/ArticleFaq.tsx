"use client";

import { useId, useState } from "react";
import type { ArticleFaqItem } from "@/lib/publications";

/* Accordion; every answer is in the server HTML, closed ones are only collapsed. */
export default function ArticleFaq({ items }: { items: ArticleFaqItem[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const base = useId();
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
        const on = open.has(i);
        const q = `${base}-q${i}`;
        const a = `${base}-a${i}`;
        return (
          <div key={i} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={q}
                aria-expanded={on}
                aria-controls={a}
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center gap-6 py-6 max-sm:py-5 text-left text-[19px] max-sm:text-[17px] font-semibold leading-[1.35] tracking-[-0.01em] text-foreground-hi cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-hi"
              >
                {item.question}
                <i
                  aria-hidden
                  className={`relative flex-none size-3.5 transition-transform duration-300 ease-[var(--ease-out)] motion-reduce:transition-none before:absolute before:inset-x-0 before:top-1.5 before:h-[1.6px] before:bg-foreground-hi after:absolute after:inset-x-0 after:top-1.5 after:h-[1.6px] after:bg-foreground-hi after:rotate-90 ${
                    on ? "rotate-45" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={a}
              role="region"
              aria-labelledby={q}
              inert={!on}
              className={`grid transition-[grid-template-rows] duration-[400ms] ease-[var(--ease-out)] motion-reduce:transition-none ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 max-w-[38em] text-[17px] leading-[1.6] text-foreground-2">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
