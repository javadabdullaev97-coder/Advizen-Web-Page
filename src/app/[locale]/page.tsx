import { setRequestLocale } from "next-intl/server";
import FaqSection from "@/components/FaqSection";
import HomeRegions from "@/components/home/HomeRegions";
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
      <HomeServices />
      <HomeTrackRecord />
      <HomeRegions />
      <HomeInsights />
      <HomeContact />
      <FaqSection page="home" />
    </>
  );
}
