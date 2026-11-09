import type { Metadata } from "next";
import { getAllPublicationSlugs } from "@/lib/publications";
import { articleMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd, howToJsonLd } from "@/lib/seo";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return getAllPublicationSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  return articleMetadata(slug, locale);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const jsonLd = await articleJsonLd(slug, locale);
  const breadcrumb = await breadcrumbJsonLd(slug, locale);
  const faq = faqJsonLd(slug, locale);
  const howTo = howToJsonLd(slug, locale);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      {howTo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
        />
      )}
      <ArticlePageClient slug={slug} />
    </>
  );
}
