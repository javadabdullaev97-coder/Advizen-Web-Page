import Image from "next/image";
import { useTranslations } from "next-intl";
import { GUIDE_PDF } from "@/lib/guide";

/* The flagship guide, Doing Business in Uzbekistan: a PDF that opens in a new tab, with its chapter list.
   The cover gets its own half of the tile, large enough to read as the guide itself. */
export default function DbuTile() {
  const t = useTranslations("InsightsModern");
  const chapters = t.raw("guide.chapters") as string[];
  return (
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
  );
}
