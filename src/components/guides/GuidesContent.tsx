import Image from "next/image";
import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import DbuTile from "@/components/guides/DbuTile";
import GuideCards from "@/components/insights/GuideCards";
import HomeReveal from "@/components/home/HomeReveal";

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

// The guides page: the flagship Doing Business guide first, then the topic guides. Articles stay on Insights.
export default function GuidesContent() {
  const t = useTranslations("GuidesPage");
  return (
    <>
      <section className="relative isolate flex items-end min-h-[560px] overflow-hidden pt-20 max-sm:block max-sm:min-h-0">
        <div className="absolute inset-0 -z-10 overflow-hidden max-sm:relative max-sm:z-0 max-sm:h-[280px]">
          <Image
            src="/home/tashkent-dusk.webp"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-[60%_50%] home-settle"
          />
          <div aria-hidden className="absolute inset-0 expertise-hero-shade" />
        </div>
        <div className="relative m-wrap w-full pb-[72px] max-sm:-mt-[72px] max-sm:pb-12">
          <h1 className="m-h1 text-[44px] sm:text-[56px] lg:text-[clamp(56px,5.8vw,84px)] max-w-[16ch] home-rise">{t("hero.title")}</h1>
          <p className="mt-[22px] text-[18px] lg:text-[20px] leading-[1.5] text-foreground max-w-[34em] text-pretty home-rise" style={delay(0.08)}>
            {t("hero.lede")}
          </p>
        </div>
      </section>

      <section className="m-wrap pt-6 pb-24 lg:pb-32">
        <DbuTile />
        <GuideCards />
      </section>
      <HomeReveal />
    </>
  );
}
