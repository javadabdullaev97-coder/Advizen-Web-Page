import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Raleway, Manrope } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { getClientMessages } from "@/i18n/client-messages";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GtmScript, GtmNoScript } from "@/components/Analytics";
import { organizationJsonLd, websiteJsonLd, OG_IMAGE } from "@/lib/seo";
import CookieBanner from "@/components/CookieBanner";
import ScrollRestoration from "@/components/ScrollRestoration";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";

const localeMetadata: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: "Tax, Legal & Accounting Advisory in Uzbekistan | Advizen",
    description:
      "Tax, legal, accounting and HR advisory for companies entering and operating in Uzbekistan. One team and one coordinating partner, in English, Russian or Uzbek.",
    ogLocale: "en_US",
  },
  ru: {
    title: "Налоговый, юридический и бухгалтерский консалтинг в Узбекистане | Advizen",
    description:
      "Налоговые, юридические, бухгалтерские и HR-услуги для компаний, которые выходят на рынок Узбекистана и работают в нём. Одна команда и один координирующий партнёр.",
    ogLocale: "ru_RU",
  },
  uz: {
    title: "O'zbekistonda soliq, yuridik va buxgalteriya maslahati | Advizen",
    description:
      "O'zbekistonga kirib kelayotgan va faoliyat yuritayotgan kompaniyalar uchun soliq, yuridik, buxgalteriya va HR xizmatlari. Bitta jamoa va bitta mas'ul hamkor.",
    ogLocale: "uz_UZ",
  },
};

function localePath(path: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

const raleway = Raleway({
  subsets: ["latin"],
  // Only the ADVIZEN wordmark uses it.
  weight: "500",
  variable: "--font-hero",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  // Variable font: one file covers every weight.
  variable: "--font-manrope",
  display: "swap",
});

// Only ru and uz live under [locale]; anything else (e.g. /some-typo) falls through to global-not-found.
export const dynamicParams = false;

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
      className={`h-full antialiased ${raleway.variable} ${manrope.variable}`}
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
        <NextIntlClientProvider messages={await getClientMessages()}>
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <div className="relative z-10">
            <Footer />
          </div>
          <CookieBanner />
          <ScrollRestoration />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
