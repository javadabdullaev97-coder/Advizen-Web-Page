import Image from "next/image";
import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getServiceBySlug } from "@/lib/services";
import { SERVICE_FAQ_DATA } from "@/lib/serviceFaqData";
import HomeReveal from "@/components/home/HomeReveal";
import { ServiceIcon } from "@/components/expertise/ServiceIcons";
import { ADVISORY_ICONS, CAPABILITY_ICONS, Duo, WHO_ICONS } from "@/components/expertise/ServicePageIcons";
import ServicePageFaq from "@/components/expertise/ServicePageFaq";
import {
  RELATED_SERVICES_MAP,
  WORK_ROWS,
  midSentence,
  proofEngagement,
  relatedReading,
  sentenceCase,
  serviceEngagements,
} from "@/components/expertise/servicePageData";

const TELEGRAM = "https://t.me/advizen";
const UZ_MONTHS = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];

type Locale = "en" | "ru" | "uz";
type KeyFigure = { label: string; value: string; source: string };

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

const H2 = "m-h2 text-[36px] sm:text-[44px] lg:text-[clamp(40px,4.4vw,64px)]";
const H2_SMALL = "m-h2 text-[28px] lg:text-[clamp(28px,3vw,40px)] leading-[1.08]";
const SECTION = "m-wrap pt-24 lg:pt-32";

export default async function ServicePageContent({ slug, locale }: { slug: string; locale: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const loc: Locale = locale === "ru" || locale === "uz" ? locale : "en";

  const [t, tSvc, tNav, tHero, tTrack, tEng, tModern, tPub] = await Promise.all([
    getTranslations({ locale: loc, namespace: "ServicePage" }),
    getTranslations({ locale: loc, namespace: "Services" }),
    getTranslations({ locale: loc, namespace: "Nav" }),
    getTranslations({ locale: loc, namespace: "HomeModern.hero" }),
    getTranslations({ locale: loc, namespace: "HomeModern.track" }),
    getTranslations({ locale: loc, namespace: "Engagements" }),
    getTranslations({ locale: loc, namespace: "ExpertiseModern" }),
    getTranslations({ locale: loc, namespace: "Publications" }),
  ]);

  const title = sentenceCase(tSvc(`${slug}.title`));
  const summary = tSvc.has(`${slug}.description`) ? tSvc(`${slug}.description`) : tSvc(`${slug}.description1`);
  const capabilities = tSvc.raw(`${slug}.capabilities`) as string[];
  const capIcons = CAPABILITY_ICONS[slug] ?? [];
  const whoFor = tSvc(`${slug}.whoFor`);
  const whoItems = tSvc.has(`${slug}.whoForItems`) ? (tSvc.raw(`${slug}.whoForItems`) as string[]) : [];
  const isTax = slug === "tax";

  const engagement = (e: ReturnType<typeof serviceEngagements>[number]) => ({
    key: e.idx,
    metric: e.metric === "Policy" ? tTrack("law") : e.metric,
    meta: `${tEng(`sectors.${e.sector}`)} · ${tEng(`metricLabels.${e.metricLabel}`)}`,
    text: tEng(`headlines.${e.idx}`),
  });
  const work = serviceEngagements(slug).slice(0, WORK_ROWS).map(engagement);
  const proofSource = proofEngagement(slug);
  const proof = !isTax && proofSource ? engagement(proofSource) : null;

  const faq = SERVICE_FAQ_DATA[slug]?.[loc] ?? [];
  const related = (RELATED_SERVICES_MAP[slug] ?? []).filter((s) => getServiceBySlug(s));
  const reading = relatedReading(slug);

  const dateFmt = new Intl.DateTimeFormat(loc, { month: "short", year: "numeric" });
  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return loc === "uz" ? `${UZ_MONTHS[d.getMonth()]} ${d.getFullYear()}` : dateFmt.format(d);
  };

  const keyFigures = t.raw("keyFigures.items") as KeyFigure[];

  return (
    <>
      <section className="m-wrap pt-[148px] max-sm:pt-28">
        <nav aria-label={t("breadcrumb")}>
          <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[14px] text-muted home-rise">
            <li>
              <Link href="/" className="transition-colors duration-150 hover:text-foreground-hi">{tNav("home")}</Link>
            </li>
            <li className="flex items-center gap-2.5">
              <span aria-hidden className="text-white/25">/</span>
              <Link href="/expertise" className="transition-colors duration-150 hover:text-foreground-hi">{tNav("expertise")}</Link>
            </li>
            <li className="flex items-center gap-2.5 min-w-0">
              <span aria-hidden className="text-white/25">/</span>
              <span aria-current="page" className="text-foreground-2">{title}</span>
            </li>
          </ol>
        </nav>

        <div className="mt-10 max-sm:mt-7 grid gap-x-[72px] gap-y-12 max-sm:gap-y-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,.85fr)] lg:items-end">
          <div>
            <h1 className="m-h1 text-[44px] sm:text-[56px] lg:text-[clamp(56px,5.8vw,84px)] max-w-[13ch] home-rise">
              {t("heading", { title: loc === "uz" ? midSentence(title) : title })}
            </h1>
            <p className="mt-7 max-sm:mt-5 text-[18px] lg:text-[20px] leading-[1.5] text-foreground max-w-[31em] text-pretty home-rise" style={delay(0.08)}>
              {summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 home-rise" style={delay(0.16)}>
              <Link href="/contact" className="m-btn m-btn-p max-sm:w-full">{tHero("book")}</Link>
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-g max-sm:w-full">{tHero("telegram")}</a>
            </div>
          </div>

          {isTax ? (
            <aside aria-labelledby="key-figures" className="m-tile px-8 pt-8 pb-7 max-sm:px-[22px] max-sm:pt-6 max-sm:pb-[22px] home-rise" style={delay(0.24)}>
              <div className="flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
                <h2 id="key-figures" className="text-[17px] font-semibold leading-[1.3] text-foreground-hi">{t("keyFigures.title")}</h2>
                <span className="text-[14px] text-muted">{t("keyFigures.caption")}</span>
              </div>
              <dl className="mt-5 grid grid-cols-2 border-t border-line">
                {keyFigures.map((f, i) => (
                  <div
                    key={f.label}
                    className={`flex flex-col pt-5 pb-[18px] border-b border-line ${i % 2 === 0 ? "pr-5 max-sm:pr-3.5 border-r" : "pl-6 max-sm:pl-4"}`}
                  >
                    <dt className="mt-3 text-[15px] max-sm:text-[14px] font-semibold leading-[1.3] text-foreground-hi">{f.label}</dt>
                    <dd className="order-first m-fig text-[52px] max-sm:text-[40px] leading-[.95]">{f.value}</dd>
                    <dd className="mt-[3px] text-[14px] max-sm:text-[13px] text-muted">{f.source}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[13px] text-muted">{t("keyFigures.note")}</p>
            </aside>
          ) : (
            <aside aria-labelledby="who-this-is-for" className="m-tile px-8 pt-8 pb-7 max-sm:px-[22px] max-sm:pt-6 max-sm:pb-[22px] home-rise" style={delay(0.24)}>
              <h2 id="who-this-is-for" className="text-[17px] font-semibold leading-[1.3] text-foreground-hi">{t("whoFor")}</h2>
              <p className="mt-3 text-[17px] leading-[1.55] text-foreground-2 text-pretty">{whoFor}</p>
              {proof && (
                <div className="mt-6 pt-6 border-t border-line">
                  <span className="m-fig block text-[52px] max-sm:text-[40px] leading-[.95]">{proof.metric}</span>
                  <p className="mt-3 text-[15px] font-semibold leading-[1.3] text-foreground-hi">{proof.meta}</p>
                  <p className="mt-1 text-[14px] leading-[1.5] text-muted">{proof.text}</p>
                </div>
              )}
            </aside>
          )}
        </div>
      </section>

      <section className={SECTION} aria-labelledby="what-we-do">
        <h2 id="what-we-do" data-reveal className={`${H2} mb-10 lg:mb-14`}>{t("capabilities")}</h2>
        <ul data-reveal className="grid gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((cap, i) => (
            <li
              key={cap}
              className="flex flex-col gap-3.5 sm:min-h-[200px] rounded-[var(--radius-inner)] bg-surface p-7 max-sm:flex-row max-sm:items-center max-sm:gap-[18px] max-sm:p-[22px]"
            >
              <div className="flex justify-between items-start">
                <span className="service-icon w-[52px] h-[52px] rounded-[15px] grid place-items-center text-foreground-hi shrink-0">
                  <Duo name={capIcons[i] ?? "list-checks"} />
                </span>
                <span aria-hidden className="text-[14px] text-muted tabular-nums max-sm:hidden">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="sm:mt-auto text-[20px] max-sm:text-[18px] font-semibold leading-[1.2] tracking-[-0.015em] text-foreground-hi">{cap}</h3>
            </li>
          ))}
        </ul>
      </section>

      {isTax && (
        <section className={SECTION} aria-labelledby="who-this-is-for">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-2 items-start">
            <h2 id="who-this-is-for" data-reveal className={H2}>{t("whoFor")}</h2>
            <div data-reveal style={delay(0.08)}>
              <p className="text-[24px] lg:text-[clamp(24px,2.2vw,30px)] leading-[1.3] tracking-[-0.02em] font-medium text-foreground-hi text-pretty">{whoFor}</p>
              {whoItems.length > 0 && (
                <ul className="mt-9 border-t border-line">
                  {whoItems.map((item, i) => (
                    <li key={item} className="flex items-center gap-[18px] py-4 border-b border-line">
                      <span className="service-icon w-11 h-11 rounded-[13px] grid place-items-center text-foreground-hi shrink-0">
                        <Duo name={WHO_ICONS[i % WHO_ICONS.length]} className="w-[22px] h-[22px]" />
                      </span>
                      <span className="text-[18px] font-semibold text-foreground-hi">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {work.length > 0 && (
        <section className={SECTION} aria-labelledby="selected-work">
          <h2 id="selected-work" data-reveal className={`${H2} mb-10 lg:mb-14`}>{t("selectedWork")}</h2>
          <ul data-reveal className="m-tile overflow-hidden">
            {work.map((e) => (
              <li
                key={e.key}
                className="grid items-baseline gap-x-7 gap-y-1.5 px-9 py-[26px] max-lg:px-7 max-lg:py-6 max-sm:p-[22px] border-t border-line first:border-t-0 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-x-6 lg:grid-cols-[150px_230px_minmax(0,1fr)] lg:gap-x-7"
              >
                <span className="m-fig text-[36px] max-lg:text-[30px] leading-none tracking-[-0.04em] sm:max-lg:row-span-2">{e.metric}</span>
                <span className="text-[14px] text-muted">{e.meta}</span>
                <p className="text-[17px] max-sm:text-[16px] leading-[1.55] text-foreground-2 max-w-[44em]">{e.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap justify-between items-center gap-x-6 gap-y-3">
            <span className="text-[14px] text-muted">{tTrack("foot")}</span>
            <Link href="/expertise" className="m-more text-[16px]">{t("viewAll")}</Link>
          </div>
        </section>
      )}

      {faq.length > 0 && (
        <section className={SECTION} aria-labelledby="faq">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] items-start">
            <h2 id="faq" data-reveal className={`${H2} lg:sticky lg:top-[120px]`}>{t("faqTitle")}</h2>
            <div data-reveal style={delay(0.08)}>
              <ServicePageFaq items={faq} />
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className={SECTION} aria-labelledby="related-services">
          <div data-reveal className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-4 mb-7">
            <h2 id="related-services" className={H2_SMALL}>{t("relatedServices")}</h2>
            <Link href="/expertise" className="m-more text-[16px]">{t("allServices")}</Link>
          </div>
          <ul data-reveal className="grid gap-4 lg:grid-cols-3">
            {related.map((s) => {
              const [name, text] = tModern.raw(`services.${s}`) as [string, string];
              return (
                <li key={s}>
                  <Link
                    href={`/expertise/${s}`}
                    className="group m-tile h-full flex flex-col p-7 max-sm:p-[22px] transition-colors duration-200 hover:bg-[#232325] max-lg:grid max-lg:grid-cols-[52px_minmax(0,1fr)] max-lg:gap-x-5 max-lg:gap-y-1 max-lg:items-start"
                  >
                    <span className="service-icon w-[52px] h-[52px] rounded-[15px] grid place-items-center text-foreground-hi shrink-0 max-lg:row-span-3">
                      {ADVISORY_ICONS[s] ? <Duo name={ADVISORY_ICONS[s]} /> : <ServiceIcon slug={s} />}
                    </span>
                    <h3 className="mt-7 max-lg:mt-0.5 text-[22px] font-semibold tracking-[-0.02em] text-foreground-hi">{name}</h3>
                    <p className="mt-2 max-lg:mt-0 text-[15px] leading-[1.5] text-foreground-2">{text}</p>
                    <span className="m-more mt-auto pt-6 max-lg:pt-3 text-[15px]">{tModern("more")}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {reading.length > 0 && (
        <section className="m-wrap pt-[72px] lg:pt-24" aria-labelledby="related-reading">
          <div data-reveal className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-4 mb-7">
            <h2 id="related-reading" className={H2_SMALL}>{t("relatedReading")}</h2>
            <Link href="/insights" className="m-more text-[16px]">{t("allInsights")}</Link>
          </div>
          <ul data-reveal className="grid gap-x-8 gap-y-12 max-sm:gap-0 max-sm:[&>li:first-child>a]:pt-0 sm:grid-cols-2 lg:grid-cols-3">
            {reading.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/insights/${p.slug}`}
                  className="group block max-sm:grid max-sm:grid-cols-[120px_minmax(0,1fr)] max-sm:gap-4 max-sm:items-start max-sm:py-4 max-sm:border-b max-sm:border-line"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-inner)] max-sm:rounded-xl bg-surface">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        unoptimized
                        sizes="(max-width: 639px) 120px, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <div>
                    <span className="block mt-[18px] max-sm:mt-0 text-[14px] max-sm:text-[13px] text-muted">
                      {tPub(`tags.${p.tag}`)}
                      {p.date ? ` · ${fmtDate(p.date)}` : ""}
                    </span>
                    <h3 className="mt-2 max-sm:mt-1 text-[20px] max-sm:text-[17px] leading-[1.25] max-sm:leading-[1.3] font-semibold tracking-[-0.015em] text-foreground-hi text-balance">
                      {tPub(`items.${p.slug}.title`)}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={`${SECTION} pb-28 lg:pb-36`}>
        <div data-reveal className="m-tile flex flex-wrap justify-between items-center gap-8 p-7 sm:p-10 lg:px-14 lg:py-12">
          <div>
            <h2 className={H2_SMALL}>{t("ctaTitle", { title: loc === "en" ? midSentence(title) : title })}</h2>
            <p className="mt-2.5 text-[17px] text-foreground-2 max-w-[34em]">{t("ctaBody")}</p>
          </div>
          <div className="flex flex-wrap gap-3 max-sm:w-full">
            <Link href="/contact" className="m-btn m-btn-p max-sm:w-full">{tHero("book")}</Link>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-g max-sm:w-full">{tHero("telegram")}</a>
          </div>
        </div>
      </section>

      <HomeReveal />
    </>
  );
}
