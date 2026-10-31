"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
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

function RegionPanel({ activeId }: { activeId: string | null }) {
  const t = useTranslations("Home.geography.panel");
  const tRegions = useTranslations("Home.geography.regions");
  const region = activeId ? REGION_DATA[activeId] : null;
  if (!activeId || !region) {
    return (
      <div className="m-tile p-8 min-h-[300px] flex items-center justify-center">
        <p className="text-[15px] text-muted">{t("hint")}</p>
      </div>
    );
  }
  const regionName = tRegions(activeId);
  return (
    <div className="m-tile overflow-hidden">
      <div className="relative aspect-[16/9] bg-surface-light">
        <Image
          src={REGION_IMAGE[activeId] ?? "/Regions/Andijan.webp"}
          alt={regionName}
          fill
          unoptimized
          sizes="(max-width: 1023px) 100vw, 520px"
          className="object-cover object-top"
        />
      </div>
      <div className="p-7">
        <h3 className="text-[24px] font-bold tracking-[-0.03em] text-foreground-hi">{regionName}</h3>
        <dl className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <dt className="text-[14px] text-muted">{t("population")}</dt>
            <dd className="m-fig text-[30px] mt-1.5">{region.population}</dd>
          </div>
          <div>
            <dt className="text-[14px] text-muted">{t("regionalGdp")}</dt>
            <dd className="m-fig text-[30px] mt-1.5">{region.gdp}</dd>
          </div>
        </dl>
        <p className="mt-5 text-[14px] text-muted">{t("sezs")}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {region.sezs.map((s) => (
            <li key={s} className="text-[14px] text-foreground bg-surface-light rounded-full px-3.5 py-1.5">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomeRegions() {
  const t = useTranslations("HomeModern.regions");
  const [activeId, setActiveId] = useState<string | null>("UZ-TK");
  const handleActiveChange = useCallback((id: string | null) => {
    if (id) setActiveId(id);
  }, []);
  return (
    <section className="m-wrap pb-24 lg:pb-36">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-20 lg:items-end mb-10 lg:mb-14">
        <h2 className="m-h2 text-[34px] lg:text-[clamp(36px,3.8vw,58px)]">{t("title")}</h2>
        <p className="text-[17px] lg:text-[18px] leading-[1.55] text-muted max-w-[32em]">{t("lede")}</p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14 items-center">
        <UzbekistanMap onActiveChange={handleActiveChange} />
        <RegionPanel activeId={activeId} />
      </div>
    </section>
  );
}
