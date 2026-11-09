import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { publications } from "@/lib/publications";
import { getAllServiceSlugs } from "@/lib/services";

export const dynamic = "force-static";

const SITE_URL = "https://www.advizenco.com";

const STATIC_PATHS = [
  "",
  "/expertise",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/disclaimer",
];

// When each page last changed in substance. A build date here would tell search engines that
// every page changes on every deploy, and they would stop trusting lastmod.
const LAST_CHANGED: Record<string, string> = {
  "": "2026-11-09",
  "/expertise": "2026-11-09",
  "/insights": "2026-11-09",
  "/contact": "2026-11-09",
};
const LAST_CHANGED_DEFAULT = "2026-10-31";
const SERVICES_LAST_CHANGED = "2026-11-09";

function localizedUrl(path: string, locale: string): string {
  const localePart = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${localePart}${path}`;
}

function alternates(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(routing.locales.map((locale) => [locale, localizedUrl(path, locale)])),
    // Matches the x-default the pages themselves declare.
    "x-default": localizedUrl(path, routing.defaultLocale),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(path, locale),
      lastModified: new Date(LAST_CHANGED[path] ?? LAST_CHANGED_DEFAULT),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1.0 : 0.7,
      alternates: { languages: alternates(path) },
    })),
  );

  const serviceEntries: MetadataRoute.Sitemap = getAllServiceSlugs().flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(`/expertise/${slug}`, locale),
      lastModified: new Date(SERVICES_LAST_CHANGED),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: alternates(`/expertise/${slug}`) },
    })),
  );

  const readableArticles = publications.filter((p) => p.hasRead);
  const articleEntries: MetadataRoute.Sitemap = readableArticles.flatMap((article) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(`/insights/${article.slug}`, locale),
      lastModified: new Date(article.date ?? LAST_CHANGED_DEFAULT),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: alternates(`/insights/${article.slug}`) },
    })),
  );

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
