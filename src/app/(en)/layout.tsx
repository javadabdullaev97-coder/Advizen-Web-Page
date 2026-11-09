import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Raleway, Manrope, Onest } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GtmScript, GtmNoScript } from "@/components/Analytics";
import { organizationJsonLd, websiteJsonLd, OG_IMAGE } from "@/lib/seo";
import CookieBanner from "@/components/CookieBanner";
import ScrollRestoration from "@/components/ScrollRestoration";

const SITE_URL = "https://www.advizenco.com";
const TITLE = "Tax, Legal & Accounting Advisory in Uzbekistan | Advizen";
const DESCRIPTION =
  "Tax, legal, accounting and HR advisory for companies entering and operating in Uzbekistan. One team and one coordinating partner, in English, Russian or Uzbek.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
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
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      ru: `${SITE_URL}/ru`,
      uz: `${SITE_URL}/uz`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "Advizen Consulting",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Advizen Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

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

export default async function EnLayout({ children }: { children: ReactNode }) {
  setRequestLocale("en");

  return (
    <html
      lang="en"
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
