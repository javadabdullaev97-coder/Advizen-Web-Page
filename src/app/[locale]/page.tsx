import { setRequestLocale } from "next-intl/server";
import FaqSection from "@/components/FaqSection";
import HomeRegions from "@/components/home/HomeRegions";
import HomeReveal from "@/components/home/HomeReveal";
import {
  HomeHero,
  HomeServices,
  HomeTrackRecord,
  HomeInsights,
  HomeContact,
} from "@/components/home/HomeSections";

// The (en) route group re-exports this page without a locale param; its layout sets "en".
export default async function HomePage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = params ? (await params).locale : undefined;
  if (locale) setRequestLocale(locale);
  return (
    <>
      <HomeHero />
      <HomeTrackRecord />
      <HomeServices />
      <HomeRegions />
      <HomeInsights />
      <HomeContact />
      <FaqSection page="home" />
      <HomeReveal />
    </>
  );
}
