"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { useTranslations } from "next-intl";
import UzbekistanMap from "@/components/UzbekistanMap";

/* ── Region data ─────────────────── */

interface RegionData {
  name: string;
  population: string;
  gdp: string;
  sezs: string[];
  industries: string[];
}

const REGION_DATA: Record<string, RegionData> = {
  "UZ-AN": {
    name: "Andijan",
    population: "3.49M",
    gdp: "$8.98B",
    sezs: ["Andijan SEZ", "Qo'rg'ontepa FEZ"],
    industries: ["Automotive", "Textiles", "Chemicals", "Food Processing", "Engineering"],
  },
  "UZ-BU": {
    name: "Bukhara",
    population: "2.09M",
    gdp: "$7.22B",
    sezs: ["Bukhara FEZ"],
    industries: ["Oil & Gas", "Tourism", "Natural Gas Processing", "Textiles"],
  },
  "UZ-FA": {
    name: "Fergana",
    population: "4.18M",
    gdp: "$9.28B",
    sezs: ["Fergana SEZ"],
    industries: ["Oil Refining", "Chemicals", "Pharmaceuticals", "Textiles", "Silk"],
  },
  "UZ-JI": {
    name: "Jizzakh",
    population: "1.55M",
    gdp: "$4.41B",
    sezs: ["Jizzakh SEZ", "Paxtakor FEZ"],
    industries: ["Agriculture", "Food Processing", "Construction Materials", "Light Industry"],
  },
  "UZ-NG": {
    name: "Namangan",
    population: "3.16M",
    gdp: "$7.12B",
    sezs: ["Namangan SEZ"],
    industries: ["Textiles", "Food Processing", "Consumer Goods", "IT"],
  },
  "UZ-NW": {
    name: "Navoi",
    population: "1.10M",
    gdp: "$14.00B",
    sezs: ["Navoi FEZ", "NAIZ"],
    industries: ["Gold & Uranium Mining", "Chemicals", "Heavy Industry", "Logistics"],
  },
  "UZ-QA": {
    name: "Kashkadarya",
    population: "3.67M",
    gdp: "$8.23B",
    sezs: ["Karshi SEZ"],
    industries: ["Natural Gas", "Chemicals", "Petrochemicals", "Agriculture"],
  },
  "UZ-QR": {
    name: "Republic of Karakalpakstan",
    population: "2.04M",
    gdp: "$4.51B",
    sezs: ["Muynoq Development Zone"],
    industries: ["Agriculture", "Oil & Gas", "Fishing", "Cotton", "Tourism"],
  },
  "UZ-SA": {
    name: "Samarkand",
    population: "4.34M",
    gdp: "$10.12B",
    sezs: ["Samarkand SEZ", "Tourist FEZ"],
    industries: ["Tourism", "Food Processing", "Construction", "Education"],
  },
  "UZ-SI": {
    name: "Sirdaryo",
    population: "0.94M",
    gdp: "$2.98B",
    sezs: ["Sirdaryo Industrial Zone"],
    industries: ["Power Generation", "Chemicals", "Agriculture", "Cotton"],
  },
  "UZ-SU": {
    name: "Surkhandarya",
    population: "2.97M",
    gdp: "$5.52B",
    sezs: ["Termez SEZ"],
    industries: ["Oil & Gas", "Agriculture", "Cross-border Trade", "Tourism"],
  },
  "UZ-TK": {
    name: "Tashkent City",
    population: "3.15M",
    gdp: "$30.60B",
    sezs: ["IT Park Uzbekistan", "Tashkent FEZ"],
    industries: ["Finance", "IT & Tech", "Services", "Trade", "Real Estate"],
  },
  "UZ-TO": {
    name: "Tashkent Region",
    population: "3.13M",
    gdp: "$15.01B",
    sezs: ["Angren SEZ", "Chirchiq Industrial Zone"],
    industries: ["Chemicals", "Mining", "Manufacturing", "Energy", "Agriculture"],
  },
  "UZ-XO": {
    name: "Khorezm",
    population: "2.05M",
    gdp: "$5.25B",
    sezs: ["Urgench FEZ"],
    industries: ["Agriculture", "Tourism (Khiva)", "Light Industry", "Handicrafts"],
  },
};

const REGION_IMAGE: Record<string, string> = {
  "UZ-AN": "/Regions/Andijan.webp",
  "UZ-BU": "/Regions/Bukhara.webp",
  "UZ-FA": "/Regions/Fergana.webp",
  "UZ-JI": "/Regions/Jizzakh.webp",
  "UZ-QR": "/Regions/Karakalpakstan.webp",
  "UZ-QA": "/Regions/Kashkadarya.webp",
  "UZ-XO": "/Regions/Khiva.webp",
  "UZ-NG": "/Regions/Namangan.webp",
  "UZ-NW": "/Regions/Navoi.webp",
  "UZ-SA": "/Regions/Samarkand.webp",
  "UZ-SU": "/Regions/Surkhandarya.webp",
  "UZ-SI": "/Regions/Syrdarya.webp",
  "UZ-TK": "/Regions/Tashkent City.webp",
  "UZ-TO": "/Regions/Tashkent region.webp",
};

function RegionPanel({ activeId }: { activeId: string }) {
  const t = useTranslations("Home.geography.panel");
  const tRegions = useTranslations("Home.geography.regions");
  // The previous photo stays underneath while the new one fades in, so a change never flashes the background.
  const [shown, setShown] = useState({ current: activeId, previous: null as string | null });
  if (shown.current !== activeId) setShown({ current: activeId, previous: shown.current });
  const region = REGION_DATA[activeId];
  const regionName = tRegions(activeId);
  return (
    <article className="m-tile overflow-hidden" aria-live="polite">
      <div className="relative aspect-[16/10] bg-surface-light">
        {shown.previous && (
          <Image src={REGION_IMAGE[shown.previous]} alt="" fill sizes="(max-width: 1023px) 100vw, 40vw" className="object-cover" />
        )}
        <Image
          key={activeId}
          src={REGION_IMAGE[activeId]}
          alt={regionName}
          fill
          sizes="(max-width: 1023px) 100vw, 40vw"
          className="object-cover home-fade"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 via-45%" />
        <h3 className="absolute left-7 bottom-5 text-[28px] lg:text-[32px] font-semibold tracking-[-0.035em] text-foreground-hi">{regionName}</h3>
      </div>
      <div key={activeId} className="px-7 pt-6 pb-7 home-fade">
        <dl className="grid grid-cols-2 gap-5">
          <div>
            <dt className="text-[14px] text-muted">{t("population")}</dt>
            <dd className="m-fig text-[26px] lg:text-[28px] mt-1.5">{region.population}</dd>
          </div>
          <div>
            <dt className="text-[14px] text-muted">{t("regionalGdp")}</dt>
            <dd className="m-fig text-[26px] lg:text-[28px] mt-1.5">{region.gdp}</dd>
          </div>
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={t("sezs")}>
          {region.sezs.map((s) => (
            <li key={s} className="text-[13px] text-foreground-2 bg-white/[0.07] rounded-full px-3 py-1.5">{s}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function HomeRegions() {
  const t = useTranslations("HomeModern.regions");
  const tPanel = useTranslations("Home.geography.panel");
  const tRegions = useTranslations("Home.geography.regions");
  // Samarkand by default: Tashkent City is a speck on the map and its photo repeats the hero.
  const [activeId, setActiveId] = useState("UZ-SA");
  return (
    <section className="m-wrap pb-32 lg:pb-48">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14 items-center">
        <div data-reveal className="max-lg:order-2">
          <p className="mb-4 text-[14px] text-muted">{tPanel("hint")}</p>
          <UzbekistanMap activeId={activeId} onSelect={setActiveId} regionName={(id) => tRegions(id)} label={t("title")} />
        </div>
        <div className="max-lg:contents">
          <div data-reveal className="max-lg:order-1">
            <h2 className="m-h2 text-[36px] sm:text-[44px] lg:text-[clamp(40px,4.4vw,64px)]">{t("title")}</h2>
            <p className="mt-4 mb-9 text-[18px] leading-[1.5] text-foreground-2 max-w-[32em] max-lg:mb-0">{t("lede")}</p>
          </div>
          <div data-reveal style={{ "--d": ".1s" } as CSSProperties} className="max-lg:order-3">
            <RegionPanel activeId={activeId} />
          </div>
        </div>
      </div>
    </section>
  );
}
