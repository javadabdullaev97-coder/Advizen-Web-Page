import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { GUIDES, localized } from "@/lib/guide";

/* Topic guides (PDF) listed under the Doing Business guide. Each card is the guide's cover photo with
   the title and description laid over its dark lower part, so the title is not repeated on a cover
   image and again below it. Each opens in a new tab, like the flagship guide. */
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
      <ul data-reveal className={`grid gap-4 ${single ? "" : GUIDES.length === 2 ? "sm:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <a
              href={localized(g.pdf, locale)}
              target="_blank"
              rel="noopener"
              className={`group relative block h-full overflow-hidden rounded-[var(--radius-tile)] bg-[#1c1c1e] ${
                single ? "aspect-[4/5] sm:aspect-[21/9]" : "aspect-[4/5] lg:aspect-square"
              }`}
            >
              <Image
                src={g.photo}
                alt=""
                fill
                sizes={single ? "100vw" : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"}
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] motion-safe:group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(8,8,9,0) 30%, rgba(8,8,9,.78) 58%, rgba(8,8,9,.96) 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-[14px] text-white/65">{t(`items.${g.slug}.meta`)}</p>
                <h3 className="mt-2 text-[22px] sm:text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
                  {t(`items.${g.slug}.title`)}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-white/80 max-w-[40em]">{t(`items.${g.slug}.text`)}</p>
                <div className="mt-4"><span className="m-more text-[15px] text-white">{t("open")}</span></div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
