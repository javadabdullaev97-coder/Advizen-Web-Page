import Image from "next/image";
import type { CSSProperties } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { publications, sortedPublications } from "@/lib/publications";
import { GUIDE_PDF } from "@/lib/guide";
import HomeReveal from "@/components/home/HomeReveal";
import InsightsBrowser, { type InsightItem } from "@/components/insights/InsightsBrowser";

const TELEGRAM = "https://t.me/advizen";
const UZ_MONTHS = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];
const CATEGORIES = ["Advisory", "Tax", "Legal", "HR"];

// The flagship guide is not an article: it is a PDF that opens in a new tab.

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

export default function InsightsContent() {
  const t = useTranslations("InsightsModern");
  const tPub = useTranslations("Publications");
  const locale = useLocale();

  const dateFmt = new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" });
  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return locale === "uz" ? `${UZ_MONTHS[d.getMonth()]} ${d.getFullYear()}` : dateFmt.format(d);
  };

  const pubs = sortedPublications(publications.filter((p) => p.hasRead));
  const items: InsightItem[] = pubs.map((p) => ({
    slug: p.slug,
    category: p.category,
    title: tPub(`items.${p.slug}.title`),
    description: tPub(`items.${p.slug}.description`),
    tag: tPub(`tags.${p.tag}`),
    date: p.date ? fmtDate(p.date) : p.year,
    image: p.image,
  }));
  const latest = pubs[0];
  const categories = CATEGORIES.filter((c) => pubs.some((p) => p.category === c)).map((c) => ({
    key: c,
    label: tPub(`categories.${c}`),
    count: pubs.filter((p) => p.category === c).length,
  }));

  const chapters = t.raw("guide.chapters") as string[];

  return (
    <>
      <section className="relative isolate flex items-end min-h-[620px] overflow-hidden pt-20 max-sm:block max-sm:min-h-0">
        <div className="absolute inset-0 -z-10 overflow-hidden max-sm:relative max-sm:z-0 max-sm:h-[300px]">
          <Image
            src="/Hero and CTA images/Insights Hero.webp"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-[85%_50%] max-sm:object-[78%_50%] home-settle"
          />
          <div aria-hidden className="absolute inset-0 expertise-hero-shade" />
        </div>
        <div className="relative m-wrap w-full pb-[72px] max-sm:-mt-[72px] max-sm:pb-12">
          <h1 className="m-h1 text-[44px] sm:text-[56px] lg:text-[clamp(56px,5.8vw,84px)] max-w-[15ch] home-rise">{t("hero.title")}</h1>
          <p className="mt-[22px] text-[18px] lg:text-[20px] leading-[1.5] text-foreground max-w-[32em] text-pretty home-rise" style={delay(0.08)}>
            {t("hero.lede")}
          </p>
        </div>
      </section>

      <section className="m-wrap pt-6">
        {/* The cover gets its own half of the tile, large enough to read as the guide itself. */}
        <div data-reveal className="group m-tile grid lg:grid-cols-[minmax(0,.9fr)_minmax(0,1fr)] overflow-hidden">
          <div className="flex items-center justify-center bg-[#151517] px-8 py-10 sm:py-14 lg:p-14">
            <Image
              src="/Articles Image/DBU_cover.webp"
              alt={t("guide.coverAlt")}
              width={1000}
              height={1000}
              sizes="(max-width: 639px) 240px, (max-width: 1023px) 320px, 460px"
              className="home-cover w-[240px] sm:w-[320px] lg:w-full lg:max-w-[460px] h-auto rounded-xl shadow-[0_32px_64px_rgba(0,0,0,.55)]"
            />
          </div>
          <div className="p-7 sm:p-10 lg:px-14 lg:py-14 self-center">
            <p className="text-[14px] text-muted">{t("guide.meta")}</p>
            <h2 className="mt-3 m-h2 text-[32px] lg:text-[clamp(32px,3.2vw,46px)] leading-[1.05]">{t("guide.title")}</h2>
            <p className="mt-4 text-[17px] leading-[1.55] text-foreground-2 max-w-[32em]">{t("guide.text")}</p>
            <ol className="mt-7 grid sm:grid-cols-2 gap-x-6 border-t border-line max-sm:hidden">
              {chapters.map((c, i) => (
                <li key={c} className="grid grid-cols-[26px_minmax(0,1fr)] gap-2 py-[9px] border-b border-line text-[14px] leading-[1.4] text-foreground-2">
                  <span className="font-medium text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  {c}
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <a href={GUIDE_PDF} target="_blank" rel="noopener" className="m-btn m-btn-p max-sm:w-full">{t("guide.cta")}</a>
              <a href={GUIDE_PDF} download className="m-more">{t("guide.download")}</a>
            </div>
          </div>
        </div>
      </section>

      {latest && (
        <section className="m-wrap pt-[72px] sm:pt-24">
          <h2 data-reveal className="m-h2 text-[32px] lg:text-[clamp(32px,3.2vw,44px)] leading-[1.08] mb-7">{t("latest.title")}</h2>
          <Link
            data-reveal
            href={`/insights/${latest.slug}`}
            className="group m-tile grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] overflow-hidden transition-colors duration-200 hover:bg-[#232325]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-light">
              {latest.image && (
                <Image
                  src={latest.image}
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 100vw, 56vw"
                  className="object-cover transition-transform duration-[600ms] ease-[var(--ease-out)] group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div className="flex flex-col p-6 pb-7 sm:p-8 lg:px-12 lg:py-11">
              <p className="flex flex-wrap items-center gap-2.5">
                <span className="text-[13px] font-semibold px-[11px] py-[5px] rounded-full bg-white/10 text-foreground-hi">{t("latest.badge")}</span>
                <span className="text-[14px] text-muted">
                  {tPub(`tags.${latest.tag}`)}
                  {latest.date ? ` · ${fmtDate(latest.date)}` : ""}
                </span>
              </p>
              <h3 className="mt-[18px] text-[26px] sm:text-[clamp(28px,2.6vw,38px)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground-hi text-balance">
                {tPub(`items.${latest.slug}.title`)}
              </h3>
              <p className="mt-3.5 text-[16px] leading-[1.55] text-foreground-2 max-w-[34em]">{tPub(`items.${latest.slug}.description`)}</p>
              <div className="mt-auto pt-7 flex flex-wrap justify-between items-center gap-4">
                <span className="m-more">{t("latest.read")}</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="m-wrap pt-[72px] sm:pt-24">
        <InsightsBrowser items={items} categories={categories} latestSlug={latest?.slug} />
      </section>

      <section className="m-wrap pt-24 sm:pt-32 pb-28 sm:pb-36">
        <div data-reveal className="m-tile flex flex-wrap justify-between items-center gap-8 p-7 sm:p-10 lg:px-14 lg:py-12">
          <div>
            <h2 className="m-h2 text-[28px] lg:text-[clamp(28px,3vw,40px)] leading-[1.1]">{t("cta.title")}</h2>
            <p className="mt-2.5 text-[17px] text-foreground-2 max-w-[34em]">{t("cta.text")}</p>
          </div>
          <div className="flex flex-wrap gap-3 max-sm:w-full">
            <Link href="/contact" className="m-btn m-btn-p max-sm:w-full">{t("cta.primary")}</Link>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-g max-sm:w-full">{t("cta.telegram")}</a>
          </div>
        </div>
      </section>

      <HomeReveal />
    </>
  );
}
