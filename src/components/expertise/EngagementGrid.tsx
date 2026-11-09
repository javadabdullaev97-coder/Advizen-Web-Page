"use client";

import { useState } from "react";

export type EngagementCard = { metric: string; meta: string; text: string; tags: string[] };

const FIRST = 6;

/* All engagements are in the HTML; the rest unfold on request. */
export default function EngagementGrid({ items, showAll }: { items: EngagementCard[]; showAll: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((e, i) => (
          <li
            key={i}
            className={`m-tile flex flex-col p-7 min-h-[250px] ${!open && i >= FIRST ? "hidden" : ""}`}
          >
            <span className="m-fig text-[44px]">{e.metric}</span>
            <span className="mt-2.5 text-[14px] text-muted">{e.meta}</span>
            <p className="mt-4 text-[16px] leading-[1.55] text-foreground-2">{e.text}</p>
            <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
              {e.tags.map((t) => (
                <span key={t} className="text-[13px] px-2.5 py-1 rounded-full bg-white/[0.07] text-foreground-2">{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {!open && items.length > FIRST && (
        <div className="mt-6 flex justify-center">
          <button type="button" onClick={() => setOpen(true)} className="m-btn m-btn-g">{showAll}</button>
        </div>
      )}
    </>
  );
}
