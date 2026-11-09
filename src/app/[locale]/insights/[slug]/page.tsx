import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getAllPublicationSlugs } from "@/lib/publications";
import { getArticleBySlug } from "@/lib/articles";
import { articleMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd, howToJsonLd } from "@/lib/seo";
import ArticleView from "@/components/article/ArticleView";

export function generateStaticParams() {
  return getAllPublicationSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Params = { slug: string; locale?: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, locale } = await params;
  return articleMetadata(slug, locale ?? "en");
}

// The (en) route group re-exports this page without a locale param; its layout sets "en".
export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug, locale: param } = await params;
  if (param) setRequestLocale(param);
  const locale = param ?? "en";

  const article = getArticleBySlug(slug, locale);
  if (!article) notFound();

  const jsonLd = await articleJsonLd(slug, locale);
  const breadcrumb = await breadcrumbJsonLd(slug, locale);
  const faq = faqJsonLd(slug, locale);
  const howTo = howToJsonLd(slug, locale);

  return (
    <>
      {[jsonLd, breadcrumb, faq, howTo].map(
        (data, i) =>
          data && (
            <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
          ),
      )}
      <ArticleView article={article} />
    </>
  );
}
