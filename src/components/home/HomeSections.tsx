import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { allEngagements } from "@/lib/industries";
import { publications, sortedPublications } from "@/lib/publications";

const TELEGRAM = "https://t.me/advizen";
const WHATSAPP = "https://wa.me/message/EKU3HEOTSK43O1";

type Proof = { fig: string; text: string };
type Rate = { fig: string; label: string };
type Step = { title: string; text: string };

export function HomeHero() {
  const t = useTranslations("HomeModern.hero");
  const proof = t.raw("proof") as Proof[];
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="relative min-h-[calc(100svh-5rem)] grid grid-rows-[1fr_auto] max-lg:min-h-0">
        <div className="absolute inset-y-0 right-0 left-[38%] max-lg:relative max-lg:left-0 max-lg:h-[260px] max-lg:row-start-1">
          <Image
            src="/home/tashkent-dusk.webp"
            alt={t("imageAlt")}
            fill
            priority
            unoptimized
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="object-cover object-[60%_40%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 max-lg:hidden"
            style={{ background: "linear-gradient(90deg, var(--background) 0%, rgba(11,11,12,.86) 18%, rgba(11,11,12,.25) 55%, rgba(11,11,12,.1) 100%), linear-gradient(0deg, var(--background) 0%, rgba(11,11,12,0) 34%)" }}
          />
          <div aria-hidden className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(0deg, var(--background) 0%, rgba(11,11,12,0) 45%)" }} />
        </div>

        <div className="relative m-wrap self-center pt-16 pb-10 max-lg:pt-4 max-w-[calc(860px+13vw)]">
          <h1 className="m-h1 text-[40px] sm:text-[52px] lg:text-[clamp(52px,5vw,76px)] max-w-[14ch]">{t("title")}</h1>
          <p className="mt-6 text-[17px] lg:text-[20px] leading-[1.55] text-foreground max-w-[34em]">{t("lede")}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="m-btn m-btn-p max-sm:w-full">{t("book")}</Link>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-s max-sm:w-full">{t("telegram")}</a>
          </div>
        </div>

        <ul className="relative m-wrap grid gap-5 pb-12 pt-6 lg:grid-cols-3 lg:gap-10 lg:pb-11">
          {proof.map((p) => (
            <li key={p.fig} className="flex lg:flex-col gap-4 lg:gap-2 items-baseline lg:items-start max-w-[320px] max-lg:max-w-none">
              <span className="m-fig text-[30px] lg:text-[40px] min-w-[96px]">{p.fig}</span>
              <span className="text-[15px] leading-[1.45] text-muted">{p.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHead({ title, lede, children }: { title: string; lede: string; children?: React.ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-20 lg:items-end mb-10 lg:mb-14">
      <h2 className="m-h2 text-[34px] lg:text-[clamp(36px,3.8vw,58px)]">{title}</h2>
      <div>
        <p className="text-[17px] lg:text-[18px] leading-[1.55] text-muted max-w-[32em]">{lede}</p>
        {children}
      </div>
    </div>
  );
}

export function HomeServices() {
  const t = useTranslations("HomeModern.services");
  const items = t.raw("tax.items") as string[];
  const rates = t.raw("rates") as Rate[];
  const small = [
    { key: "legal", href: "/expertise/legal" },
    { key: "accounting", href: "/expertise/finance" },
    { key: "hr", href: "/expertise/hr" },
    { key: "funding", href: "/expertise/funding" },
    { key: "operations", href: "/expertise" },
  ] as const;
  return (
    <section className="m-wrap py-24 lg:py-36">
      <SectionHead title={t("title")} lede={t("lede")} />
      <div className="grid gap-3 lg:grid-cols-6">
        <div className="m-tile p-7 lg:p-9 flex flex-col gap-3 lg:col-span-4 lg:row-span-2">
          <h3 className="text-[28px] lg:text-[34px] font-bold tracking-[-0.03em] text-foreground-hi">{t("tax.title")}</h3>
          <p className="text-[16px] leading-[1.6] text-muted max-w-[36em]">{t("tax.text")}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-1 text-[15px] text-foreground">
            {items.map((i) => <li key={i}>{i}</li>)}
          </ul>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto pt-8">
            {rates.map((r) => (
              <div key={r.label}>
                <dt className="m-fig text-[34px]">{r.fig}</dt>
                <dd className="text-[14px] text-muted mt-1.5">{r.label}</dd>
              </div>
            ))}
          </dl>
          <Link href="/expertise/tax" className="m-more mt-4">{t("tax.title")} ›</Link>
        </div>
        {small.map((s) => (
          <div key={s.key} className="m-tile p-7 lg:p-9 flex flex-col gap-3 lg:col-span-2">
            <h3 className="text-[22px] lg:text-[24px] font-bold tracking-[-0.03em] text-foreground-hi">{t(`${s.key}.title`)}</h3>
            <p className="text-[16px] leading-[1.6] text-muted">{t(`${s.key}.text`)}</p>
            <Link href={s.href} className="m-more mt-auto pt-3">{t(`${s.key}.title`)} ›</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const TRACK_IDX = [0, 1, 2, 3, 10, 11];

export function HomeTrackRecord() {
  const t = useTranslations("HomeModern.track");
  const tEng = useTranslations("Engagements");
  const rows = TRACK_IDX.map((idx) => ({ idx, ...allEngagements[idx] }));
  return (
    <section className="m-wrap pb-24 lg:pb-36">
      <SectionHead title={t("title")} lede={t("lede")} />
      <div className="m-tile px-6 lg:px-9 py-2">
        <table className="w-full border-collapse">
          <tbody>
            {rows.map((e, i) => (
              <tr key={e.idx} className={`max-lg:grid max-lg:py-5 ${i > 0 ? "border-t border-border" : ""}`}>
                <td className="lg:w-[26%] lg:py-6 lg:pr-8 align-baseline">
                  <span className="m-fig block text-[36px] lg:text-[46px] whitespace-nowrap">{e.metric === "Policy" ? t("law") : e.metric}</span>
                  <span className="block text-[14px] text-muted mt-2">
                    {tEng(`sectors.${e.sector}`)} · {tEng(`metricLabels.${e.metricLabel}`)}
                  </span>
                </td>
                <td className="lg:py-6 align-baseline text-[17px] lg:text-[18px] leading-[1.5] text-foreground max-lg:mt-3">
                  {tEng(`headlines.${e.idx}`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 mt-6 text-[15px] text-muted">
        <span>{t("foot")}</span>
        <Link href="/expertise" className="m-more">{t("all")} ›</Link>
      </div>
    </section>
  );
}

export function HomeInsights() {
  const t = useTranslations("HomeModern.insights");
  const tPub = useTranslations("Publications");
  const locale = useLocale();
  const recent = sortedPublications(publications.filter((p) => p.hasRead)).slice(0, 3);
  const dateFmt = new Intl.DateTimeFormat(locale === "uz" ? "uz-Latn" : locale, { month: "short", year: "numeric" });
  return (
    <section className="m-wrap pb-24 lg:pb-36">
      <SectionHead title={t("title")} lede={t("lede")}>
        <Link href="/insights" className="m-more mt-4">{t("all")} ›</Link>
      </SectionHead>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
        <div className="m-tile p-8 lg:p-10 flex flex-col justify-between gap-10 min-h-[420px] lg:min-h-[540px] relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 opacity-[0.09]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='none' stroke='%23e3e3e6' stroke-width='1'%3E%3Cpath d='M44 4l11.7 28.3L84 44 55.7 55.7 44 84 32.3 55.7 4 44l28.3-11.7z'/%3E%3Crect x='26' y='26' width='36' height='36' transform='rotate(45 44 44)'/%3E%3Ccircle cx='44' cy='44' r='9'/%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative">
            <p className="text-[14px] text-muted">{t("guideMeta")}</p>
            <h3 className="mt-3 text-[36px] lg:text-[46px] font-bold leading-[1.05] tracking-[-0.04em] text-foreground-hi max-w-[11ch]">{t("guideTitle")}</h3>
            <p className="mt-4 text-[16px] leading-[1.6] text-foreground max-w-[26em]">{t("guideText")}</p>
          </div>
          <div className="relative">
            <Link href="/contact" className="m-btn m-btn-p">{t("guideCta")}</Link>
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          {recent.map((p) => (
            <li key={p.slug}>
              <Link href={`/insights/${p.slug}`} className="m-tile grid gap-5 sm:grid-cols-[minmax(0,1fr)_170px] items-center p-6 lg:p-7 hover:bg-surface-light transition-colors">
                <div className="min-w-0">
                  <p className="text-[14px] text-muted">
                    {tPub(`tags.${p.tag}`)}
                    {p.date ? ` · ${dateFmt.format(new Date(p.date))}` : ""}
                  </p>
                  <h4 className="mt-2 text-[20px] lg:text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-foreground-hi">{tPub(`items.${p.slug}.title`)}</h4>
                </div>
                <div aria-hidden className="max-sm:hidden aspect-[4/3] rounded-[16px] bg-surface-light p-4 flex flex-col justify-between">
                  <span className="text-[26px] font-bold tracking-[-0.03em] text-foreground-hi leading-none">{tPub(`categories.${p.category}`)}</span>
                  <span className="self-end w-6 h-6 rotate-45 border-2 border-primary-light" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeContact() {
  const t = useTranslations("HomeModern.contact");
  const steps = t.raw("steps") as Step[];
  return (
    <section className="m-wrap pb-24 lg:pb-36">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="m-h2 text-[34px] lg:text-[clamp(36px,3.8vw,58px)]">{t("title")}</h2>
          <p className="mt-5 text-[17px] lg:text-[18px] leading-[1.55] text-muted max-w-[32em]">{t("lede")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="m-btn m-btn-p">{t("book")}</Link>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-s">Telegram</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-s">WhatsApp</a>
          </div>
          <dl className="mt-9 grid grid-cols-[auto_1fr] gap-x-7 gap-y-3 text-[16px]">
            <dt className="text-muted">{t("phone")}</dt>
            <dd><a href="tel:+998334884888" className="text-foreground-hi hover:underline underline-offset-4">+998 33 488 48 88</a></dd>
            <dt className="text-muted">{t("email")}</dt>
            <dd><a href="mailto:info@advizenco.com" className="text-foreground-hi hover:underline underline-offset-4">info@advizenco.com</a></dd>
            <dt className="text-muted">{t("hours")}</dt>
            <dd className="text-foreground-hi">{t("hoursValue")}</dd>
          </dl>
        </div>
        <ol className="flex flex-col gap-3">
          {steps.map((s, i) => (
            <li key={s.title} className="m-tile grid grid-cols-[44px_1fr] gap-x-3 p-7 lg:p-8">
              <span className="m-fig text-[28px] text-muted">{i + 1}</span>
              <div>
                <p className="text-[19px] font-bold tracking-[-0.02em] text-foreground-hi">{s.title}</p>
                <p className="mt-1.5 text-[16px] leading-[1.55] text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
