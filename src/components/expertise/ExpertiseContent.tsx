import Image from "next/image";
import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { allEngagements } from "@/lib/industries";
import { SectionHead } from "@/components/home/SectionHead";
import HomeReveal from "@/components/home/HomeReveal";
import FaqSection from "@/components/FaqSection";
import EngagementGrid from "@/components/expertise/EngagementGrid";
import { ServiceIcon } from "@/components/expertise/ServiceIcons";

const TELEGRAM = "https://t.me/advizen";
const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

// Photos are placeholders from the site's library until each practice has its own.
const ADVISORY = [
  { slug: "tax", photo: "/home/track-nuclear.webp" },
  { slug: "legal", photo: "/home/track-companies.webp" },
  { slug: "finance", photo: "/Regions/Tashkent City.webp" },
  { slug: "hr", photo: "/Regions/Fergana.webp" },
  { slug: "funding", photo: "/Sectors/Banking.webp" },
  { slug: "ma-advisory", photo: "/Sectors/Retail.webp" },
  { slug: "due-diligence", photo: "/home/track-energy.webp" },
];
const MANAGED = ["entity-management", "corporate", "eor", "payroll", "immigration", "virtual-office", "compliance"];
const SECTOR_PHOTOS = ["Banking", "Energy", "Technology", "Real Estate", "Retail", "Healthcare"];
const STATS = [
  { fig: "$10B+", key: "dealsAdvised" },
  { fig: "80+", key: "registrations" },
  { fig: "30+", key: "dueDiligences" },
  { fig: "3", key: "lawsShaped" },
] as const;

export default function ExpertiseContent() {
  const t = useTranslations("ExpertiseModern");
  const tPage = useTranslations("ExpertisePage");
  const tHome = useTranslations("HomeModern.hero");
  const tTrack = useTranslations("HomeModern.track");
  const tEng = useTranslations("Engagements");
  const sectors = t.raw("sectorList") as [string, string][];
  const svc = (slug: string) => t.raw(`services.${slug}`) as [string, string];

  const engagements = allEngagements.map((e, i) => ({
    metric: e.metric === "Policy" ? tTrack("law") : e.metric,
    meta: `${tEng(`sectors.${e.sector}`)} · ${tEng(`metricLabels.${e.metricLabel}`)}`,
    text: tEng(`headlines.${i}`),
    tags: e.disciplines.map((d) => (t.has(`disciplines.${d}`) ? t(`disciplines.${d}`) : d)),
  }));

  return (
    <>
      <section className="relative isolate flex items-end min-h-[640px] overflow-hidden pt-20 max-sm:min-h-[560px]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/Hero and CTA images/Expertise Hero.webp"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-[80%_45%] max-sm:object-[70%_30%] home-settle"
          />
          <div aria-hidden className="absolute inset-0 expertise-hero-shade" />
        </div>
        <div className="relative m-wrap w-full pb-16">
          <h1 className="m-h1 text-[44px] sm:text-[56px] lg:text-[clamp(56px,5.8vw,84px)] max-w-[15ch] home-rise">{tPage("hero.heading")}</h1>
          <p className="mt-6 text-[18px] lg:text-[20px] leading-[1.5] text-foreground max-w-[34em] text-pretty home-rise" style={delay(0.08)}>
            {t("lede")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 home-rise" style={delay(0.16)}>
            <Link href="/contact" className="m-btn m-btn-p max-sm:w-full">{tHome("book")}</Link>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-g max-sm:w-full">{tHome("telegram")}</a>
          </div>
        </div>
      </section>

      <ul data-reveal className="m-wrap grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 pt-6">
        {STATS.map((s) => (
          <li key={s.key} className="border-t border-line pt-6">
            <span className="m-fig block text-[48px] lg:text-[clamp(48px,5.4vw,80px)]">{s.fig}</span>
            <p className="mt-3 text-[15px] text-muted max-w-[16em]">{tPage(`stats.${s.key}`)}</p>
          </li>
        ))}
      </ul>

      <section className="m-wrap pt-24 lg:pt-32">
        <SectionHead title={t("advisory.title")} lede={t("advisory.lede")} />
        <ul data-reveal className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          {ADVISORY.map(({ slug, photo }, i) => (
            <li key={slug} className={i < 4 ? "lg:col-span-3" : "lg:col-span-4"}>
              <Link href={`/expertise/${slug}`} className="group m-tile flex flex-col h-full overflow-hidden transition-colors duration-200 hover:bg-[#232325]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={photo}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
                  <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-foreground-hi">{svc(slug)[0]}</h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-foreground-2">{svc(slug)[1]}</p>
                  <span className="m-more mt-auto pt-4 text-[15px]">{t("more")}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="m-wrap pt-24 lg:pt-32">
        <SectionHead title={t("managed.title")} lede={t("managed.lede")} />
        <ul data-reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MANAGED.map((slug) => (
            <li key={slug}>
              <Link href={`/expertise/${slug}`} className="group flex flex-col gap-3.5 h-full min-h-[190px] rounded-[var(--radius-inner)] bg-surface p-6 transition-colors duration-200 hover:bg-[#232325]">
                <span className="service-icon w-[52px] h-[52px] rounded-[15px] grid place-items-center text-foreground-hi transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5">
                  <ServiceIcon slug={slug} />
                </span>
                <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-foreground-hi">{svc(slug)[0]}</h3>
                <p className="-mt-1.5 text-[15px] leading-[1.5] text-foreground-2">{svc(slug)[1]}</p>
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="flex flex-col justify-center gap-3 h-full min-h-[190px] rounded-[var(--radius-inner)] border border-line p-6">
              <span className="text-[18px] font-semibold tracking-[-0.01em] text-foreground-hi">{t("managed.unsure")}</span>
              <span className="m-more text-[15px]">{t("managed.talk")}</span>
            </Link>
          </li>
        </ul>
      </section>

      <section className="m-wrap pt-24 lg:pt-32">
        <SectionHead title={t("sectors.title")} lede={t("sectors.lede")} />
        <ul data-reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map(([name, text], i) => (
            <li key={name} className="group relative aspect-[4/3] rounded-[var(--radius-tile)] overflow-hidden bg-surface">
              <Image
                src={`/Sectors/${SECTOR_PHOTOS[i]}.webp`}
                alt=""
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 via-55% to-transparent" />
              <div className="absolute left-6 right-6 bottom-5">
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-white">{name}</h3>
                <p className="mt-1.5 text-[15px] leading-[1.45] text-[#e3e3e6] max-w-[30em]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="m-wrap pt-24 lg:pt-32">
        <SectionHead title={tPage("trackRecord.heading")} lede={t("work.lede")} />
        <EngagementGrid items={engagements} showAll={t("work.showAll")} />
      </section>

      <section className="m-wrap pt-24 lg:pt-32">
        <div data-reveal className="m-tile flex flex-wrap justify-between items-center gap-8 p-7 sm:p-10 lg:px-14 lg:py-12">
          <div>
            <h2 className="m-h2 text-[28px] lg:text-[clamp(28px,3vw,40px)]">{tPage("cta.heading")}</h2>
            <p className="mt-2.5 text-[17px] text-foreground-2 max-w-[34em]">{tPage("cta.description")}</p>
          </div>
          <div className="flex flex-wrap gap-3 max-sm:w-full">
            <Link href="/contact" className="m-btn m-btn-p max-sm:w-full">{tPage("cta.primary")}</Link>
            <Link href="/insights" className="m-btn m-btn-g max-sm:w-full">{tPage("cta.secondary")}</Link>
          </div>
        </div>
      </section>

      <FaqSection page="expertise" />
      <HomeReveal />
    </>
  );
}
