"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { routing, type Locale } from "@/i18n/routing";
import { FlagBadge } from "@/components/Flags";

const labels: Record<Locale, { code: string; name: string }> = {
  en: { code: "EN", name: "English" },
  ru: { code: "RU", name: "Русский" },
  uz: { code: "UZ", name: "O'zbek" },
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
            ? "text-[12px] text-foreground/70 hover:text-foreground py-1"
            : "text-[12px] text-foreground-2 hover:text-foreground-hi"
        )}
      >
        <FlagBadge code={locale} size={17} />
        <span className="font-medium tracking-wide">{labels[locale].code}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-3 min-w-[160px] bg-[#0D0D0D]/95 backdrop-blur-2xl border border-white/[0.08] rounded shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden z-50"
          >
            {routing.locales.map((l) => {
              const active = l === locale;
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => handleSwitch(l)}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-[12px] tracking-wide transition-colors duration-150 cursor-pointer border-b border-white/[0.04] last:border-0",
                    active ? "text-foreground bg-white/[0.03]" : "text-muted hover:text-foreground hover:bg-white/[0.02]"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <FlagBadge code={l} size={16} />
                    <span>{labels[l].name}</span>
                  </div>
                  {active && <Check className="w-3 h-3 text-primary" strokeWidth={2} />}
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
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-colors touch-manipulation",
              active
                ? "border-white/30 text-foreground bg-white/[0.06]"
                : "border-white/[0.08] text-white/40"
            )}
          >
            <FlagBadge code={l} size={15} />
            <span className="text-[11px] font-medium tracking-wide">{labels[l].code}</span>
          </button>
        );
      })}
    </div>
  );
}
