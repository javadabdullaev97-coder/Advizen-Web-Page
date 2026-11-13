import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { GUIDES, localized } from "@/lib/guide";

/* Topic guides (PDF) listed under the Doing Business guide. With one guide the card spans the row,
   more guides fall into a grid. Each opens in a new tab, like the flagship guide. */
export default function GuideCards({ heading = true }: { heading?: boolean }) {
  const t = useTranslations("Guides");
  const locale = useLocale();
  if (!GUIDES.length) return null;
  const single = GUIDES.length === 1;

  return (
    <div className="mt-4">
      {heading && (
        <div data-reveal className="mt-14 mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 className="m-h2 text-[26px] lg:text-[clamp(26px,2.4vw,34px)]">{t("title")}</h2>
          <p className="text-[15px] text-muted">{t("lede")}</p>
        </div>
      )}
      <ul data-reveal className={`grid gap-4 ${single ? "" : GUIDES.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {GUIDES.map((g) => {
          const pdf = localized(g.pdf, locale);
          return (
            <li key={g.slug}>
              <a
                href={pdf}
                target="_blank"
                rel="noopener"
                className={`group m-tile grid h-full items-center gap-6 p-6 sm:p-7 transition-colors duration-200 hover:bg-[#232325] ${
                  single ? "grid-cols-[112px_minmax(0,1fr)] sm:grid-cols-[170px_minmax(0,1fr)_auto] sm:gap-10 lg:px-12 lg:py-9" : "grid-cols-[112px_minmax(0,1fr)] lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-8 lg:p-8"
                }`}
              >
                <Image
                  src={localized(g.cover, locale)}
                  alt={t(`items.${g.slug}.coverAlt`)}
                  width={900}
                  height={1274}
                  sizes="(max-width: 1023px) 112px, 170px"
                  className="home-cover w-full h-auto rounded-lg shadow-[0_20px_40px_rgba(0,0,0,.5)]"
                />
                <div className="min-w-0">
                  <p className="text-[14px] text-muted">{t(`items.${g.slug}.meta`)}</p>
                  <h3 className="mt-2 text-[21px] sm:text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground-hi">
                    {t(`items.${g.slug}.title`)}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-foreground-2 max-w-[40em]">{t(`items.${g.slug}.text`)}</p>
                  <div className={`mt-4 ${single ? "sm:hidden" : ""}`}><span className="m-more text-[15px]">{t("open")}</span></div>
                </div>
                {single && <div className="max-sm:hidden"><span className="m-btn m-btn-g">{t("open")}</span></div>}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
