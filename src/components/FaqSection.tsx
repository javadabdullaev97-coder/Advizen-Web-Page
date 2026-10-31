"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLocale } from "next-intl";
import { FAQ_DATA, type FaqPage } from "@/lib/faqData";

type Locale = "en" | "ru" | "uz";

const HEADINGS: Record<Locale, string> = {
  en: "Frequently Asked Questions",
  ru: "Часто задаваемые вопросы",
  uz: "Ko'p so'raladigan savollar",
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
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 focus-visible:outline-2 focus-visible:outline-foreground-hi touch-manipulation cursor-pointer"
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
        {isOpen ? (
          <Minus className="w-5 h-5 text-muted shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-muted shrink-0" />
        )}
      </button>
      {/* CSS grid accordion — no JS measurement, no Framer Motion overhead */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.28s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="pb-6 text-[16px] text-foreground leading-relaxed max-w-[40em]"
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

export default function FaqSection({
  page,
  variant = "page",
}: {
  page: FaqPage;
  variant?: "page" | "sidebar";
}) {
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState<number | null>(variant === "page" ? 0 : null);
  const items = FAQ_DATA[page][locale] ?? FAQ_DATA[page].en;

  const handleToggle = useCallback((i: number) => {
    setOpen((prev) => (prev === i ? null : i));
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#faq-section h2", ".faq-question"],
    },
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  if (variant === "sidebar") {
    return (
      <div className="bg-[#080808] border border-white/[0.10] rounded-xl p-6 mt-3">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="text-[10px] tracking-[0.18em] uppercase text-white/50 mb-4">FAQ</p>
        <div className="space-y-px">
          {items.map(({ q, a }, i) => (
            <div key={i} className="border-b border-white/[0.07] last:border-b-0">
              <button
                className="w-full flex items-start justify-between py-3 text-left gap-3 focus-visible:outline-none touch-manipulation"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-[12px] text-white/80 font-medium leading-snug">{q}</span>
                {open === i ? (
                  <Minus className="w-3 h-3 text-white/30 shrink-0 mt-0.5" />
                ) : (
                  <Plus className="w-3 h-3 text-white/30 shrink-0 mt-0.5" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18, delay: 0.06 }}
                      className="pb-3 text-[11px] text-white/65 leading-relaxed"
                    >
                      {a}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="faq-section" className="m-wrap py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <h2 className="m-h2 text-[34px] lg:text-[clamp(36px,3.8vw,58px)]">
          {HEADINGS[locale]}
        </h2>
        <div className="border-t border-border">
          {items.map(({ q, a }, i) => (
            <FaqItem key={i} q={q} a={a} i={i} open={open} onToggle={handleToggle} />
          ))}
        </div>
      </div>
    </section>
  );
}
