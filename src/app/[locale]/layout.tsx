import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Raleway, Manrope, Onest } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { GtmScript, GtmNoScript } from "@/components/Analytics";
import { organizationJsonLd, websiteJsonLd, OG_IMAGE } from "@/lib/seo";
import CookieBanner from "@/components/CookieBanner";
import ScrollRestoration from "@/components/ScrollRestoration";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";

const localeMetadata: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: "Advizen Consulting | Premier Business Advisory in Uzbekistan",
    description:
      "Advizen Consulting — your trusted partner for expert tax, legal, finance, accounting, HR, and business consulting in Uzbekistan. 8+ years of integrated advisory across 15+ industries in Central Asia.",
    ogLocale: "en_US",
  },
  ru: {
    title: "Advizen Consulting | Ведущий бизнес-консультант в Узбекистане",
    description:
      "Advizen Consulting — надёжный партнёр в области налогового, юридического, финансового консалтинга, бухгалтерии и HR в Узбекистане. 8+ лет интегрированной экспертизы в 15+ отраслях Центраньной Азии.",
    ogLocale: "ru_RU",
  },
  uz: {
    title: "Advizen Consulting | O'zbekistondagi yetakchi biznes maslahatchi",
    description:
      "Advizen Consulting — O'zbekistonda soliq, huquqiy, moliyaviy konsalting, buxgalteriya va HR sohasidagi ishonchli hamkoringiz. Markaziy Osiyodagi 15+ sohada 8+ yillik integratsiyalashgan tajriba.",
    ogLocale: "uz_UZ",
  },
};

function localePath(path: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-hero",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "uz" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const m = localeMetadata[safe];
  const canonical = localePath("", safe);
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, localePath("", l)]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    icons: {
      icon: [
        { url: "/Advizen Logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/Advizen Logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/Advizen Logo/favicon.ico", type: "image/x-icon" },
      ],
      apple: { url: "/Advizen Logo/apple-touch-icon.png", sizes: "180x180" },
      shortcut: "/Advizen Logo/favicon.ico",
    },
    keywords: [
      "business consulting Uzbekistan",
      "tax consulting Tashkent",
      "legal advisory Central Asia",
      "HR services Uzbekistan",
      "Employer of Record Uzbekistan",
      "accounting services Tashkent",
    ],
    alternates: {
      canonical,
      languages: { ...languages, "x-default": localePath("", routing.defaultLocale) },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      locale: m.ogLocale,
      siteName: "Advizen Consulting",
      url: canonical,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Advizen Consulting" }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [OG_IMAGE],
    },
    verification: {
      yandex: ["e149c22fd0bc3d72", "5f2ab940e9bd79f4"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`h-full antialiased ${raleway.variable} ${manrope.variable} ${onest.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0b0b0c" />
        <link rel="manifest" href="/Advizen Logo/site.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual'" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <GtmScript />
      </head>
      <body className="min-h-full flex flex-col relative">
        <GtmNoScript />
        <NextIntlClientProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <div className="relative z-10">
            <Footer />
          </div>
          <ScrollToTop />
          <CookieBanner />
          <ScrollRestoration />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
