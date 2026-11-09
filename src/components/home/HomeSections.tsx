import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { allEngagements } from "@/lib/industries";
import { publications, sortedPublications } from "@/lib/publications";
import { SectionHead } from "@/components/home/SectionHead";

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
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[22%_45%] max-sm:object-[72%_45%] home-settle"
        />
        <div aria-hidden className="absolute inset-0 home-hero-shade" />
      </div>
      <div className="relative m-wrap w-full pb-[clamp(56px,8vw,104px)] max-sm:-mt-16 max-sm:pb-16">
        <h1 className="m-h1 text-[44px] sm:text-[56px] lg:text-[clamp(56px,5.8vw,84px)] max-w-[15ch] home-rise">{t("title")}</h1>
        <p className="mt-6 text-[18px] lg:text-[21px] leading-[1.5] text-[#e8e8ed] max-w-[34em] text-pretty home-rise" style={delay(0.08)}>
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

// Three headline figures, then three more engagements as quiet rows.
const FIG_IDX = [0, 1, 13];
const ROW_IDX = [2, 3, 10];

export function HomeTrackRecord() {
  const t = useTranslations("HomeModern.track");
  const tEng = useTranslations("Engagements");
  const metric = (idx: number) => (allEngagements[idx].metric === "Policy" ? t("law") : allEngagements[idx].metric);
  const caption = (idx: number) =>
    `${tEng(`sectors.${allEngagements[idx].sector}`)} · ${tEng(`metricLabels.${allEngagements[idx].metricLabel}`)}`;
  return (
    <section className="m-wrap py-28 lg:py-40">
      <SectionHead title={t("title")} lede={t("lede")} />
      <ul className="grid gap-10 md:grid-cols-3">
        {FIG_IDX.map((idx, i) => (
          <li key={idx} data-reveal style={delay(i * 0.08)} className="border-t border-line pt-7">
            <span className="m-fig block text-[72px] lg:text-[clamp(72px,8vw,116px)] tracking-[-0.05em] leading-[.95]">{metric(idx)}</span>
            <p className="mt-5 text-[16px] lg:text-[17px] leading-[1.55] text-foreground-2 max-w-[24em]">{tEng(`headlines.${idx}`)}</p>
            <p className="mt-2 text-[14px] text-muted">{caption(idx)}</p>
          </li>
        ))}
      </ul>
      <ul data-reveal className="mt-16 lg:mt-20 border-t border-line">
        {ROW_IDX.map((idx) => (
          <li key={idx} className="grid gap-1.5 md:grid-cols-[200px_minmax(0,1fr)_auto] md:gap-8 md:items-baseline py-6 border-b border-line">
            <span className="m-fig text-[30px] lg:text-[32px]">{metric(idx)}</span>
            <span className="text-[16px] lg:text-[17px] leading-[1.5] text-foreground">{tEng(`headlines.${idx}`)}</span>
            <span className="text-[14px] text-muted">{caption(idx)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap justify-between items-center gap-4 text-[14px] text-muted">
        <span>{t("foot")}</span>
        <Link href="/expertise" className="m-more text-[16px]">{t("all")}</Link>
      </div>
    </section>
  );
}

function ServiceTile({ href, title, text, more, big = false, style, children }: {
  href: string; title: string; text: string; more: string; big?: boolean; style?: CSSProperties; children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      data-reveal
      style={style}
      className={`m-tile flex flex-col p-7 lg:p-9 min-h-[260px] transition-colors duration-300 hover:bg-[#232325] ${big ? "md:col-span-2 lg:row-span-2" : ""}`}
    >
      <h3 className={`font-semibold leading-[1.15] tracking-[-0.025em] text-foreground-hi ${big ? "text-[30px] lg:text-[clamp(30px,2.6vw,40px)]" : "text-[23px] lg:text-[26px]"}`}>{title}</h3>
      <p className="mt-3 text-[16px] leading-[1.55] text-foreground-2 max-w-[32em]">{text}</p>
      {children}
      <span className="m-more mt-auto pt-7 text-[15px]">{more}</span>
    </Link>
  );
}

export function HomeServices() {
  const t = useTranslations("HomeModern.services");
  const rates = t.raw("rates") as Rate[];
  const small = [
    { key: "legal", href: "/expertise/legal" },
    { key: "accounting", href: "/expertise/finance" },
    { key: "hr", href: "/expertise/hr" },
    { key: "funding", href: "/expertise/funding" },
    { key: "operations", href: "/expertise" },
  ] as const;
  return (
    <section className="m-wrap pb-28 lg:pb-40">
      <SectionHead title={t("title")} lede={t("lede")} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ServiceTile
          href="/expertise/tax"
          title={t("tax.title")}
          text={t("tax.text")}
          more={t("tax.title")}
          big
        >
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-auto pt-12">
            {rates.map((r) => (
              <div key={r.label}>
                <dt className="m-fig text-[44px] lg:text-[clamp(44px,4.6vw,68px)] tracking-[-0.05em]">{r.fig}</dt>
                <dd className="mt-2.5 text-[14px] text-muted">{r.label}</dd>
              </div>
            ))}
          </dl>
        </ServiceTile>
        {small.map((s, i) => (
          <ServiceTile
            key={s.key}
            href={s.href}
            title={t(`${s.key}.title`)}
            text={t(`${s.key}.text`)}
            more={t("more")}
            style={delay((i % 3) * 0.06)}
          />
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
    <section className="m-wrap pb-28 lg:pb-40">
      <SectionHead title={t("title")} lede={t("lede")}>
        <Link href="/insights" className="m-more mt-5 text-[16px]">{t("all")}</Link>
      </SectionHead>

      <div data-reveal className="group m-tile grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] items-center p-8 lg:p-14 overflow-hidden">
        <div>
          <p className="text-[14px] text-muted">{t("guideMeta")}</p>
          <h3 className="mt-3 text-[32px] lg:text-[clamp(32px,3.4vw,48px)] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground-hi">{t("guideTitle")}</h3>
          <p className="mt-4 text-[16px] lg:text-[17px] leading-[1.55] text-foreground-2 max-w-[30em]">{t("guideText")}</p>
          <Link href="/contact" className="m-btn m-btn-p mt-7 max-sm:w-full">{t("guideCta")}</Link>
        </div>
        <Image
          src="/Articles Image/DBU_cover.webp"
          alt=""
          width={200}
          height={241}
          unoptimized
          className="w-[130px] sm:w-[200px] h-auto rounded-xl shadow-[0_30px_60px_rgba(0,0,0,.55)] -rotate-[4deg] translate-y-2 transition-transform duration-700 ease-[var(--ease-out)] group-hover:-rotate-2 group-hover:translate-y-0 max-sm:order-first"
        />
      </div>

      <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {recent.map((p, i) => (
          <li key={p.slug} data-reveal style={delay(i * 0.08)} className={i === 2 ? "sm:max-lg:hidden" : ""}>
            <Link href={`/insights/${p.slug}`} className="group block">
              <div className="relative aspect-[16/10] rounded-[18px] overflow-hidden bg-surface">
                {p.image && (
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                )}
              </div>
              <p className="mt-5 text-[14px] text-muted">
                {tPub(`tags.${p.tag}`)}
                {p.date ? ` · ${fmtDate(p.date)}` : ""}
              </p>
              <h3 className="mt-2 text-[20px] lg:text-[21px] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground-hi">{tPub(`items.${p.slug}.title`)}</h3>
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
    { icon: ICONS.phone, title: t("phone"), sub: `${PHONE} · ${t("hoursValue")}`, href: "tel:+998334884888" },
    { icon: ICONS.email, title: t("email"), sub: EMAIL, href: `mailto:${EMAIL}` },
  ];
  // No bottom padding: the FAQ that follows brings its own top spacing.
  return (
    <section className="m-wrap">
      <div data-reveal className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-[clamp(40px,5vw,80px)] bg-surface rounded-[28px] lg:rounded-[36px] p-7 sm:p-10 lg:p-[clamp(40px,5vw,72px)]">
        <div>
          <h2 className="m-h2 text-[36px] sm:text-[44px] lg:text-[clamp(44px,4.4vw,64px)]">{t("title")}</h2>
          <p className="mt-5 text-[18px] lg:text-[20px] leading-[1.5] text-foreground-2 max-w-[30em]">{t("lede")}</p>
          <Link href="/contact" className="m-btn m-btn-p mt-8 max-sm:w-full">{t("book")}</Link>
          <ol className="mt-12 grid gap-5">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[28px_minmax(0,1fr)] gap-3.5">
                <span aria-hidden className="w-7 h-7 rounded-full border border-white/20 grid place-items-center text-[13px] font-semibold text-foreground-2">{i + 1}</span>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-foreground-hi">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-[1.5] text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="self-center">
          <p className="mb-4 text-[14px] text-muted">{t("direct")}</p>
          <ul className="grid gap-2.5">
            {ways.map((w) => (
              <li key={w.title}>
                <a
                  href={w.href}
                  {...(w.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group grid grid-cols-[48px_minmax(0,1fr)_12px] items-center gap-4 rounded-[20px] bg-white/[0.05] py-4 pl-4 pr-5 transition-[background-color,transform] duration-200 hover:bg-white/[0.09] active:scale-[.985]"
                >
                  <span className="w-12 h-12 rounded-[14px] bg-white/[0.08] grid place-items-center text-foreground-hi">
                    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" aria-hidden>{w.icon}</svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[17px] font-semibold tracking-[-0.01em] text-foreground-hi">{w.title}</span>
                    <span className="block mt-0.5 text-[14px] text-muted [overflow-wrap:anywhere]">{w.sub}</span>
                  </span>
                  <span aria-hidden className="w-2 h-2 border-r-[1.6px] border-t-[1.6px] border-muted rotate-45 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:border-foreground-hi" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
