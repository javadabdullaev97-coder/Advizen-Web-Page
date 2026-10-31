"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "cookie_consent";
const CHANGE_EVENT = "cookie-consent-change";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function hasConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

const COPY = {
  en: {
    text: "We use cookies to improve your experience and run analytics.",
    accept: "Accept",
    more: "Cookie Policy",
  },
  ru: {
    text: "Мы используем файлы cookie для аналитики и улучшения сайта.",
    accept: "Принять",
    more: "Политика cookie",
  },
  uz: {
    text: "Saytni yaxshilash va tahlil uchun cookie-fayllardan foydalanamiz.",
    accept: "Qabul qilish",
    more: "Cookie siyosati",
  },
} as const;

export default function CookieBanner() {
  const locale = useLocale() as keyof typeof COPY;
  // On the server and during hydration the banner stays hidden, so the HTML matches.
  const visible = !useSyncExternalStore(subscribe, hasConsent, () => true);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const copy = COPY[locale] ?? COPY.en;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-5 py-4 md:px-8 bg-[#0d0d0d] border-t border-white/[0.07]"
        >
          <p className="text-[13px] text-white/50 leading-snug max-w-xl">
            {copy.text}{" "}
            <Link href="/cookies" className="underline underline-offset-2 text-white/60 hover:text-white/90 transition-colors">
              {copy.more}
            </Link>
          </p>
          <button
            onClick={accept}
            className="shrink-0 text-[12px] tracking-[0.1em] uppercase px-5 py-2 border border-white/[0.18] text-white/70 hover:border-white/40 hover:text-white transition-colors duration-200"
          >
            {copy.accept}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
