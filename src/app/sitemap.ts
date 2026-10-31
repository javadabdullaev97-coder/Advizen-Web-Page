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

function localizedUrl(path: string, locale: string): string {
  const localePart = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${localePart}${path}`;
}

function alternates(path: string): Record<string, string> {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, localizedUrl(path, locale)]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(path, locale),
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1.0 : 0.7,
      alternates: { languages: alternates(path) },
    })),
  );

  const serviceEntries: MetadataRoute.Sitemap = getAllServiceSlugs().flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(`/expertise/${slug}`, locale),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: alternates(`/expertise/${slug}`) },
    })),
  );

  const readableArticles = publications.filter((p) => p.hasRead);
  const articleEntries: MetadataRoute.Sitemap = readableArticles.flatMap((article) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(`/insights/${article.slug}`, locale),
      lastModified: article.date ? new Date(article.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: alternates(`/insights/${article.slug}`) },
    })),
  );

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
