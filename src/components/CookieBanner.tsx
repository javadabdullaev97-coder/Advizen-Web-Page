"use client";

import { useSyncExternalStore } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "cookie_consent";
const CHANGE_EVENT = "cookie-consent-change";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function hasChoice() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

// GTM reads consent commands only in the shape gtag.js pushes them: the arguments object itself.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

// .m-btn is unlayered CSS, so its size is adjusted inline rather than with utilities.
const BTN = { height: 38, padding: "0 14px", fontSize: 14 };

const COPY = {
  en: {
    text: "We use cookies for analytics, only with your consent.",
    accept: "Accept",
    reject: "Reject",
    more: "Cookie Policy",
  },
  ru: {
    text: "Мы используем cookie для аналитики, только с вашего согласия.",
    accept: "Принять",
    reject: "Отклонить",
    more: "Политика cookie",
  },
  uz: {
    text: "Tahlil uchun cookie-fayllardan faqat roziligingiz bilan foydalanamiz.",
    accept: "Qabul qilish",
    reject: "Rad etish",
    more: "Cookie siyosati",
  },
} as const;

export default function CookieBanner() {
  const locale = useLocale() as keyof typeof COPY;
  // On the server and during hydration the banner stays hidden, so the HTML matches.
  const visible = !useSyncExternalStore(subscribe, hasChoice, () => true);

  const decide = (choice: "granted" | "denied") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    gtag("consent", "update", {
      ad_storage: choice,
      ad_user_data: choice,
      ad_personalization: choice,
      analytics_storage: choice,
    });
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const copy = COPY[locale] ?? COPY.en;

  return (
    visible && (
        <div
          role="dialog"
          aria-label={copy.more}
          className="cookie-in fixed z-50 right-5 bottom-5 max-sm:left-4 max-sm:right-4 max-sm:bottom-4 sm:w-[360px] rounded-[18px] border border-line bg-[#1d1d1f]/85 backdrop-blur-2xl backdrop-saturate-[1.8] p-4 shadow-[0_16px_40px_rgba(0,0,0,.45)]"
        >
          <p className="text-[14px] leading-[1.5] text-foreground-2">
            {copy.text}{" "}
            <Link href="/cookies" className="underline underline-offset-[3px] hover:text-foreground-hi transition-colors">
              {copy.more}
            </Link>
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button type="button" onClick={() => decide("denied")} className="m-btn m-btn-g" style={BTN}>
              {copy.reject}
            </button>
            <button type="button" onClick={() => decide("granted")} className="m-btn m-btn-p" style={BTN}>
              {copy.accept}
            </button>
          </div>
        </div>
    )
  );
}
