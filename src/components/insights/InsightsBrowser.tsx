"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export type InsightItem = {
  slug: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  image?: string;
};

type Category = { key: string; label: string; count: number };

const PAGE = 9;
const ALL = "All";

/* Every article link is in the server HTML; filters, search and "Show more" only hide or reveal them. */
export default function InsightsBrowser({
  items,
  categories,
  latestSlug,
}: {
  items: InsightItem[];
  categories: Category[];
  latestSlug?: string;
}) {
  const t = useTranslations("InsightsModern.all");
  const [cat, setCat] = useState(ALL);
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const focusAt = useRef<number | null>(null);

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () =>
      items.filter((a) => {
        // The newest article is featured above, so the unfiltered list starts with the next one.
        if (cat === ALL && !q && a.slug === latestSlug) return false;
        if (cat !== ALL && a.category !== cat) return false;
        return !q || `${a.title} ${a.description} ${a.tag}`.toLowerCase().includes(q);
      }),
    [items, cat, q, latestSlug],
  );
  const order = new Map(matches.map((a, i) => [a.slug, i]));
  const total = matches.length;
  const visible = Math.min(shown, total);

  // After "Show more", move focus to the first newly revealed article.
  useEffect(() => {
    if (focusAt.current === null) return;
    listRef.current?.querySelectorAll<HTMLAnchorElement>("li:not(.hidden) a")[focusAt.current]?.focus();
    focusAt.current = null;
  }, [visible]);

  const pick = (key: string) => {
    setCat(key);
    setShown(PAGE);
  };
  const clearAll = () => {
    setCat(ALL);
    setQuery("");
    setShown(PAGE);
    inputRef.current?.focus();
  };
  const categoryLabel = categories.find((c) => c.key === cat)?.label ?? "";
  const emptyText = q
    ? cat !== ALL
      ? t("emptyQueryIn", { query: query.trim(), category: categoryLabel })
      : t("emptyQuery", { query: query.trim() })
    : t("emptyCategory");

  const chips = [{ key: ALL, label: t("all"), count: items.length }, ...categories];

  return (
    <>
      <div data-reveal className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-4 mb-7">
        <h2 className="m-h2 text-[32px] lg:text-[clamp(32px,3.2vw,44px)] leading-[1.08]">{t("title")}</h2>
        <span className="text-[14px] text-muted" aria-live="polite">
          {total > 0 ? t("count", { count: total }) : ""}
        </span>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 pb-7 mb-7 sm:mb-10 border-b border-line max-sm:flex-col max-sm:items-stretch">
        <div role="group" aria-label={t("filterLabel")} className="flex flex-wrap gap-2">
          {chips.map((c) => {
            const on = c.key === cat;
            return (
              <button
                key={c.key}
                type="button"
                aria-pressed={on}
                onClick={() => pick(c.key)}
                className={`inline-flex items-center gap-2 h-10 px-4 rounded-full text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-hi ${
                  on ? "bg-foreground-hi text-[#111]" : "bg-white/[0.07] text-foreground-2 hover:bg-white/[0.12] hover:text-foreground-hi"
                }`}
              >
                {c.label}
                <small className={`text-[13px] tabular-nums ${on ? "text-[#55555a]" : "text-muted"}`}>{c.count}</small>
              </button>
            );
          })}
        </div>
        <div className="relative w-[min(320px,100%)] max-sm:w-full">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden
            className="absolute left-4 top-1/2 w-[18px] h-[18px] -translate-y-1/2 text-muted pointer-events-none"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShown(PAGE);
            }}
            placeholder={t("search")}
            aria-label={t("search")}
            autoComplete="off"
            className="w-full h-11 pl-11 pr-10 rounded-full bg-surface border border-line text-[16px] sm:text-[15px] text-foreground-hi placeholder:text-muted outline-none transition-[border-color,box-shadow] duration-200 focus:border-white/35 focus:shadow-[0_0_0_4px_rgba(255,255,255,.06)] [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              aria-label={t("clearSearch")}
              onClick={() => {
                setQuery("");
                setShown(PAGE);
                inputRef.current?.focus();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full grid place-items-center text-foreground-2 hover:text-foreground-hi focus-visible:outline-2 focus-visible:outline-foreground-hi"
            >
              <span aria-hidden className="relative w-3 h-3">
                <span className="absolute inset-x-0 top-1/2 h-[1.6px] -mt-[0.8px] bg-current rotate-45" />
                <span className="absolute inset-x-0 top-1/2 h-[1.6px] -mt-[0.8px] bg-current -rotate-45" />
              </span>
            </button>
          )}
        </div>
      </div>

      <ul ref={listRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-sm:gap-0">
        {items.map((a) => {
          const i = order.get(a.slug);
          const on = i !== undefined && i < visible;
          return (
            <li key={a.slug} className={on ? "home-fade" : "hidden"}>
              <Link
                href={`/insights/${a.slug}`}
                className={`group block max-sm:grid max-sm:grid-cols-[120px_minmax(0,1fr)] max-sm:gap-4 max-sm:items-start max-sm:pb-4 max-sm:border-b max-sm:border-line ${i === 0 ? "" : "max-sm:pt-4"}`}
              >
                <div className="relative aspect-[16/10] rounded-[var(--radius-inner)] max-sm:rounded-xl overflow-hidden bg-surface">
                  {a.image && (
                    <Image
                      src={a.image}
                      alt=""
                      fill
                      unoptimized
                      sizes="(max-width: 639px) 120px, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <span className="block mt-[18px] text-[14px] text-muted max-sm:mt-0 max-sm:text-[13px]">
                    {a.tag} · {a.date}
                  </span>
                  <h3 className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-foreground transition-colors duration-200 group-hover:text-foreground-hi max-sm:mt-1 max-sm:text-[17px] max-sm:leading-[1.3]">
                    {a.title}
                  </h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {total === 0 ? (
        <div className="m-tile px-8 py-14 text-center">
          <p className="text-foreground-2">{emptyText}</p>
          <button type="button" onClick={clearAll} className="m-btn m-btn-g mt-5">{t("clear")}</button>
        </div>
      ) : (
        <div className="mt-14 max-sm:mt-9 flex flex-col items-center gap-4">
          <span aria-hidden className="block w-[200px] h-[3px] rounded-[3px] bg-white/10 overflow-hidden">
            <span
              className="block h-full rounded-[inherit] bg-foreground-2 transition-[width] duration-[400ms] ease-[var(--ease-out)]"
              style={{ width: `${(visible / total) * 100}%` }}
            />
          </span>
          <span className="text-[14px] text-muted">{t("showing", { shown: visible, total })}</span>
          {visible < total && (
            <button
              type="button"
              onClick={() => {
                focusAt.current = visible;
                setShown((s) => s + PAGE);
              }}
              className="m-btn m-btn-g max-sm:w-full"
            >
              {t("more")}
            </button>
          )}
        </div>
      )}
    </>
  );
}
