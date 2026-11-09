"use client";

import { useState, useRef, useCallback } from "react";
import { Plus } from "lucide-react";
import { useLocale } from "next-intl";
import { FAQ_DATA, type FaqPage } from "@/lib/faqData";

type Locale = "en" | "ru" | "uz";

const HEADINGS: Record<Locale, string> = {
  en: "Common questions",
  ru: "Частые вопросы",
  uz: "Koʻp beriladigan savollar",
};

// Separate component so each item gets its own refs (hooks can't be in .map())
function FaqItem({
  q,
  a,
  i,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  i: number;
  open: number | null;
  onToggle: (i: number) => void;
}) {
  const startYRef = useRef(0);
  const scrolledRef = useRef(false);
  const touchHandledRef = useRef(false);
  const isOpen = open === i;

  return (
    <div className="border-b border-line">
      <button
        className="w-full flex items-center justify-between py-6 text-left gap-4 focus-visible:outline-2 focus-visible:outline-foreground-hi touch-manipulation cursor-pointer"
        onTouchStart={(e) => {
          startYRef.current = e.touches[0].clientY;
          scrolledRef.current = false;
          touchHandledRef.current = false;
        }}
        onTouchMove={(e) => {
          if (Math.abs(e.touches[0].clientY - startYRef.current) > 8) {
            scrolledRef.current = true;
          }
        }}
        onTouchEnd={() => {
          if (!scrolledRef.current) {
            touchHandledRef.current = true;
            onToggle(i);
          }
        }}
        onClick={() => {
          if (touchHandledRef.current) {
            touchHandledRef.current = false;
            return;
          }
          onToggle(i);
        }}
        aria-expanded={isOpen}
      >
        <span className="faq-question text-[17px] lg:text-[19px] text-foreground-hi font-semibold tracking-[-0.01em]">{q}</span>
        <Plus
          aria-hidden
          className={`w-5 h-5 text-foreground-2 shrink-0 transition-transform duration-300 ease-[var(--ease-out)] ${isOpen ? "rotate-45" : ""}`}
        />
      </button>
      {/* CSS grid accordion — no JS measurement, no Framer Motion overhead */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s var(--ease-out)",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="pb-6 text-[16px] lg:text-[17px] text-foreground-2 leading-relaxed max-w-[36em]"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: isOpen ? "opacity 0.18s ease 0.08s" : "opacity 0.12s ease",
            }}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection({ page }: { page: FaqPage }) {
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState<number | null>(0);
  const items = FAQ_DATA[page][locale] ?? FAQ_DATA[page].en;

  const handleToggle = useCallback((i: number) => {
    setOpen((prev) => (prev === i ? null : i));
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section id="faq-section" className="m-wrap pt-24 lg:pt-32 pb-28 lg:pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <h2 className="m-h2 text-[36px] sm:text-[44px] lg:text-[clamp(40px,4.4vw,64px)] lg:sticky lg:top-28 self-start">
          {HEADINGS[locale]}
        </h2>
        <div className="border-t border-line">
          {items.map(({ q, a }, i) => (
            <FaqItem key={i} q={q} a={a} i={i} open={open} onToggle={handleToggle} />
          ))}
        </div>
      </div>
    </section>
  );
}
