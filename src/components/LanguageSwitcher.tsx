"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, { code: string; name: string }> = {
  en: { code: "EN", name: "English" },
  ru: { code: "RU", name: "Русский" },
  uz: { code: "UZ", name: "Oʻzbek" },
};

function useLangSwitch() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    startTransition(() => {
      // @ts-expect-error -- pathname is dynamic
      router.replace({ pathname, params }, { locale: next });
    });
  };

  return { locale, isPending, switchTo };
}

/* ── Desktop dropdown ─────────────────────────────────── */
export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, isPending, switchTo } = useLangSwitch();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler as EventListener);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler as EventListener);
    };
  }, []);

  const handleSwitch = (l: Locale) => {
    switchTo(l);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className={cn(
          "flex items-center gap-1.5 cursor-pointer transition-colors duration-200",
          compact
            ? "text-[13px] text-foreground-2 hover:text-foreground-hi py-1"
            : "text-[15px] font-medium text-foreground-2 hover:text-foreground-hi"
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span>{labels[locale].code}</span>
        <ChevronDown aria-hidden className={cn("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: "top right" }}
            className="absolute right-0 top-full mt-3 min-w-[170px] p-1.5 rounded-[16px] bg-surface/90 backdrop-blur-xl border border-line shadow-[0_16px_40px_rgba(0,0,0,0.45)] z-50"
          >
            {routing.locales.map((l) => {
              const active = l === locale;
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => handleSwitch(l)}
                  className={cn(
                    "w-full h-10 flex items-center justify-between gap-3 px-3 rounded-[10px] text-left text-[15px] transition-colors duration-150 cursor-pointer",
                    active ? "text-foreground-hi" : "text-foreground-2 hover:text-foreground-hi hover:bg-white/[0.06]"
                  )}
                >
                  <span>{labels[l].name}</span>
                  {active && <Check className="w-4 h-4 text-foreground-hi" strokeWidth={2} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Mobile inline row — three flag+code pills, tap to select ── */
export function MobileLanguageSwitcher() {
  const { locale, isPending, switchTo } = useLangSwitch();

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            disabled={isPending}
            onClick={() => switchTo(l)}
            className={cn(
              "px-3.5 py-2 rounded-full text-[14px] font-medium transition-colors touch-manipulation",
              active ? "bg-foreground-hi text-background" : "bg-white/[0.07] text-foreground-2"
            )}
          >
            {labels[l].name}
          </button>
        );
      })}
    </div>
  );
}

/* ── Footer: the three languages as plain text links ── */
export function LanguageLinks() {
  const { locale, isPending, switchTo } = useLangSwitch();
  return (
    <div className="flex items-center gap-4">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          disabled={isPending}
          onClick={() => switchTo(l)}
          aria-current={l === locale ? "true" : undefined}
          className={cn("cursor-pointer transition-colors", l === locale ? "text-foreground-hi" : "hover:text-foreground-hi")}
        >
          {labels[l].name}
        </button>
      ))}
    </div>
  );
}
