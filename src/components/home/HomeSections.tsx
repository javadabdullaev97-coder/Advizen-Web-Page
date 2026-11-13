import Image from "next/image";
import type { CSSProperties } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { allEngagements } from "@/lib/industries";
import { publications, sortedPublications } from "@/lib/publications";
import { GUIDE_PDF } from "@/lib/guide";
import { SectionHead } from "@/components/home/SectionHead";
import { COVER_SHADE, COVER_TITLE } from "@/lib/cover-overlay";

const TELEGRAM = "https://t.me/advizen";
const WHATSAPP = "https://wa.me/message/EKU3HEOTSK43O1";
const PHONE = "+998 33 488 48 88";
const EMAIL = "info@advizenco.com";
const UZ_MONTHS = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];

type Rate = { fig: string; label: string };
type Step = { title: string; text: string };

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

export function HomeHero() {
  const t = useTranslations("HomeModern.hero");
  return (
    <section className="relative isolate flex items-end min-h-[min(100svh,920px)] overflow-hidden max-sm:block max-sm:min-h-0 max-sm:pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden max-sm:relative max-sm:z-0 max-sm:h-[56svh] max-sm:min-h-[340px]">
        <Image
          src="/home/tashkent-dusk.webp"
          alt={t("imageAlt")}
          fill
          preload
          sizes="100vw"
          className="object-cover object-[22%_45%] max-sm:object-[72%_45%] home-settle home-drift"
        />
        <div aria-hidden className="absolute inset-0 home-hero-shade" />
      </div>
      <div className="relative m-wrap w-full pb-[clamp(56px,7vw,96px)] max-sm:-mt-16 max-sm:pb-12">
        <h1 className="m-h1 text-[44px] sm:text-[56px] lg:text-[clamp(56px,5.8vw,84px)] max-w-[15ch] home-rise">{t("title")}</h1>
        <p className="mt-6 text-[18px] lg:text-[20px] leading-[1.5] text-foreground max-w-[34em] text-pretty home-rise" style={delay(0.08)}>
          {t("lede")}
        </p>
        <div className="mt-9 flex flex-wrap gap-3 home-rise" style={delay(0.16)}>
          <Link href="/contact" className="m-btn m-btn-p max-sm:w-full">{t("book")}</Link>
          <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-g max-sm:w-full">{t("telegram")}</a>
        </div>
      </div>
    </section>
  );
}

// Three headline figures with photos, then three more engagements as quiet rows.
const FIGS = [
  { idx: 0, photo: "/home/track-nuclear.webp" },
  { idx: 1, photo: "/home/track-energy.webp" },
  { idx: 13, photo: "/home/track-companies.webp" },
];
const ROW_IDX = [2, 3, 10];

export function HomeTrackRecord() {
  const t = useTranslations("HomeModern.track");
  const tEng = useTranslations("Engagements");
  const metric = (idx: number) => (allEngagements[idx].metric === "Policy" ? t("law") : allEngagements[idx].metric);
  const caption = (idx: number) =>
    `${tEng(`sectors.${allEngagements[idx].sector}`)} · ${tEng(`metricLabels.${allEngagements[idx].metricLabel}`)}`;
  return (
    <section className="m-wrap pt-[72px] pb-24 lg:pt-24 lg:pb-32">
      <SectionHead title={t("title")} lede={t("lede")} />
      <ul data-reveal className="home-figs grid gap-14 md:grid-cols-3 md:gap-8">
        {FIGS.map(({ idx, photo }) => (
          <li key={idx}>
            <div className="relative aspect-[16/10] rounded-[var(--radius-inner)] overflow-hidden bg-surface">
              <Image src={photo} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover" />
            </div>
            <span className="m-fig block mt-7 text-[64px] lg:text-[clamp(64px,7vw,96px)] leading-[.95]">{metric(idx)}</span>
            <p className="mt-4 text-[17px] leading-[1.55] text-foreground-2 max-w-[24em]">{tEng(`headlines.${idx}`)}</p>
            <p className="mt-2 text-[14px] text-muted">{caption(idx)}</p>
          </li>
        ))}
      </ul>
      <ul className="mt-16 lg:mt-[72px] border-t border-line">
        {ROW_IDX.map((idx) => (
          <li key={idx} className="grid gap-1.5 md:grid-cols-[160px_minmax(0,1fr)_auto] md:gap-8 md:items-baseline py-6 border-b border-line">
            <span className="m-fig text-[30px]">{metric(idx)}</span>
            <span className="text-[17px] leading-[1.5] text-foreground">{tEng(`headlines.${idx}`)}</span>
            <span className="text-[14px] text-muted">{caption(idx)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap justify-between items-center gap-4 text-[14px] text-muted">
        <span>{t("foot")}</span>
        <Link href="/expertise" className="m-more text-[16px]">{t("all")}</Link>
      </div>
    </section>
  );
}

// Whole tiles are links; the round arrow marks it and steps forward on hover.
// On phones the small tiles become rows of one list, so their arrow centres vertically.
function Go({ row = false }: { row?: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute right-6 bottom-6 w-9 h-9 rounded-full bg-white/[0.08] grid place-items-center transition-[background-color,transform] duration-200 ease-[var(--ease-out)] group-hover:bg-white/[0.14] group-hover:translate-x-[3px] ${row ? "max-sm:top-1/2 max-sm:bottom-auto max-sm:right-5 max-sm:-translate-y-1/2 max-sm:w-8 max-sm:h-8" : ""}`}
    >
      <span className="w-[7px] h-[7px] border-r-[1.6px] border-t-[1.6px] border-foreground-hi rotate-45 -translate-x-px" />
    </span>
  );
}

export function HomeServices() {
  const t = useTranslations("HomeModern.services");
  const [main, ...rest] = t.raw("rates") as Rate[];
  const small = [
    { key: "legal", href: "/expertise/legal" },
    { key: "accounting", href: "/expertise/finance" },
    { key: "hr", href: "/expertise/hr" },
    { key: "deals", href: "/expertise/ma-advisory" },
    { key: "operations", href: "/expertise" },
  ] as const;
  return (
    <section className="m-wrap pb-32 lg:pb-48">
      <SectionHead title={t("title")} lede={t("lede")} />
      <div data-reveal className="grid gap-4 md:grid-cols-6 max-sm:gap-0">
        <Link
          href="/expertise/tax"
          className="group m-tile md:col-span-6 grid gap-7 lg:grid-cols-2 lg:gap-12 lg:items-center p-8 lg:p-11 pr-16 transition-colors duration-200 hover:bg-[#232325] active:scale-[.985] max-sm:mb-3"
        >
          <div>
            <h3 className="text-[30px] lg:text-[clamp(30px,2.8vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground-hi">{t("tax.title")}</h3>
            <p className="mt-3 text-[17px] leading-[1.55] text-foreground-2 max-w-[32em]">{t("tax.text")}</p>
          </div>
          <div className="flex flex-wrap items-end gap-x-7 gap-y-3">
            <span className="m-fig home-mask text-[72px] lg:text-[clamp(72px,8vw,112px)]"><span>{main.fig}</span></span>
            <div className="pb-2.5">
              <p className="text-[17px] font-semibold text-foreground-hi">{main.label}</p>
              <p className="mt-1.5 text-[15px] text-foreground-2">{rest.map((r) => `${r.label} ${r.fig}`).join(" · ")}</p>
            </div>
          </div>
          <Go />
        </Link>
        {small.map((s, i) => (
          <Link
            key={s.key}
            href={s.href}
            className={`group relative bg-surface transition-colors duration-200 hover:bg-[#232325] active:scale-[.985] sm:rounded-[var(--radius-tile)] sm:min-h-[210px] sm:p-8 sm:pb-16 ${i < 3 ? "md:col-span-2" : "md:col-span-3"} max-sm:py-5 max-sm:pl-6 max-sm:pr-16 ${i === 0 ? "max-sm:rounded-t-[var(--radius-tile)]" : "max-sm:border-t max-sm:border-line"} ${i === small.length - 1 ? "max-sm:rounded-b-[var(--radius-tile)]" : ""}`}
          >
            <h3 className="text-[19px] sm:text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground-hi sm:pr-11">{t(`${s.key}.title`)}</h3>
            <p className="mt-1 sm:mt-2.5 text-[15px] sm:text-[16px] leading-[1.55] text-foreground-2 max-w-[30em]">{t(`${s.key}.text`)}</p>
            <Go row />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeInsights() {
  const t = useTranslations("HomeModern.insights");
  const tPub = useTranslations("Publications");
  const locale = useLocale();
  const recent = sortedPublications(publications.filter((p) => p.hasRead)).slice(0, 3);
  const dateFmt = new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" });
  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return locale === "uz" ? `${UZ_MONTHS[d.getMonth()]} ${d.getFullYear()}` : dateFmt.format(d);
  };
  return (
    <section className="m-wrap pb-24 lg:pb-32">
      <div data-reveal className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-3 mb-10">
        <h2 className="m-h2 text-[32px] lg:text-[clamp(32px,3.2vw,44px)]">{t("title")}</h2>
        <Link href="/insights" className="m-more">{t("all")}</Link>
      </div>

      <div data-reveal data-tilt className="group m-tile grid gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,.55fr)] items-center p-7 sm:p-10 lg:px-14 lg:py-12 overflow-hidden">
        <div>
          <p className="text-[14px] text-muted">{t("guideMeta")}</p>
          <h3 className="mt-3 text-[30px] lg:text-[clamp(30px,3vw,44px)] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground-hi">{t("guideTitle")}</h3>
          <p className="mt-3.5 text-[17px] leading-[1.55] text-foreground-2 max-w-[30em]">{t("guideText")}</p>
          <a href={GUIDE_PDF} target="_blank" rel="noopener" className="m-btn m-btn-p mt-7 max-sm:w-full">{t("guideCta")}</a>
        </div>
        <Image
          src="/Articles Image/DBU_cover.webp"
          alt=""
          width={1000}
          height={1000}
          sizes="(max-width: 639px) 200px, 280px"
          className="home-cover w-[200px] sm:w-[240px] lg:w-[280px] h-auto rounded-xl shadow-[0_24px_48px_rgba(0,0,0,.4)] sm:justify-self-center max-sm:order-first"
        />
      </div>
      <div data-reveal className="mt-5 flex justify-end"><Link href="/guides" className="m-more">{t("allGuides")}</Link></div>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {recent.map((p, i) => (
          <li key={p.slug} className={i === 2 ? "sm:max-lg:hidden" : ""}>
            <Link href={`/insights/${p.slug}`} className="group relative block">
              <div className="relative aspect-[16/10] rounded-[var(--radius-inner)] overflow-hidden bg-surface">
                {p.image && (
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                )}
                <div aria-hidden="true" className={COVER_SHADE} />
              </div>
              <p className="mt-[18px] text-[14px] text-muted">
                {tPub(`tags.${p.tag}`)}
                {p.date ? ` · ${fmtDate(p.date)}` : ""}
              </p>
              <h3 className={`font-semibold tracking-[-0.015em] ${COVER_TITLE}`}>
                {tPub(`items.${p.slug}.title`)}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const ICONS = {
  telegram: <path fill="currentColor" d="M21.9 4.6 18.7 19.7c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.4l-4.8-1.5c-1-.3-1.1-1 .2-1.5L20.5 3.1c.9-.3 1.6.2 1.4 1.5Z" />,
  whatsapp: <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.7-.4Z" />,
  phone: <path fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" d="M5 3.5h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 5.4 5.4l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3 5.5a2 2 0 0 1 2-2Z" />,
  email: <path fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" d="M3.5 6h17v12h-17zM3.5 6.5l8.5 6.5 8.5-6.5" />,
};

export function HomeContact() {
  const t = useTranslations("HomeModern.contact");
  const steps = t.raw("steps") as Step[];
  const ways = [
    { icon: ICONS.telegram, title: "Telegram", sub: "@advizen", href: TELEGRAM, external: true },
    { icon: ICONS.whatsapp, title: "WhatsApp", sub: PHONE, href: WHATSAPP, external: true },
    { icon: ICONS.phone, title: t("phone"), sub: PHONE, href: "tel:+998334884888" },
    { icon: ICONS.email, title: t("email"), sub: EMAIL, href: `mailto:${EMAIL}` },
  ];
  // No bottom padding: the FAQ that follows brings its own top spacing.
  return (
    <section className="m-wrap">
      <div data-reveal className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-[72px] m-tile p-7 sm:p-10 lg:p-14">
        <div>
          <h2 className="m-h2 text-[36px] sm:text-[44px] lg:text-[clamp(44px,4.4vw,64px)]">{t("title")}</h2>
          <p className="mt-[18px] text-[18px] leading-[1.5] text-foreground-2 max-w-[30em]">{t("lede")}</p>
          <Link href="/contact" className="m-btn m-btn-p mt-7 max-sm:w-full">{t("book")}</Link>
          <ol className="mt-12 grid gap-5">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[28px_minmax(0,1fr)] gap-3.5">
                <span aria-hidden className="w-7 h-7 rounded-full border border-white/20 grid place-items-center text-[13px] text-foreground-2">{i + 1}</span>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-foreground-hi">{s.title}</h3>
                  <p className="mt-0.5 text-[15px] leading-[1.5] text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="self-start lg:pt-2">
          <p className="mb-2 text-[14px] text-muted">{t("direct")}</p>
          <ul className="border-b border-line">
            {ways.map((w) => (
              <li key={w.title} className="border-t border-line">
                <a
                  href={w.href}
                  {...(w.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group grid grid-cols-[40px_minmax(0,1fr)_12px] items-center gap-4 py-4 transition-transform duration-150 active:scale-[.99]"
                >
                  <span className="w-10 h-10 rounded-full bg-white/[0.08] grid place-items-center text-foreground-hi transition-colors duration-200 group-hover:bg-white/[0.14]">
                    <svg viewBox="0 0 24 24" className="w-[19px] h-[19px]" aria-hidden>{w.icon}</svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[17px] font-semibold text-foreground-hi">{w.title}</span>
                    <span className="block text-[15px] text-foreground-2 [overflow-wrap:anywhere]">{w.sub}</span>
                  </span>
                  <span aria-hidden className="w-2 h-2 border-r-[1.6px] border-t-[1.6px] border-muted rotate-45 transition-transform duration-200 group-hover:translate-x-[3px] group-hover:border-foreground-hi" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] text-muted">{t("hoursValue")}</p>
        </div>
      </div>
    </section>
  );
}
