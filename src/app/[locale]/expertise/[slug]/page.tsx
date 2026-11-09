import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { servicePageMetadata, serviceJsonLd, servicePageBreadcrumbJsonLd } from "@/lib/seo";
import ServiceDetailClient from "@/components/expertise/ServiceDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  const locales = ["ru", "uz"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  return servicePageMetadata(slug, locale);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  if (!getServiceBySlug(slug)) notFound();

  const jsonLd = await serviceJsonLd(slug, locale);
  const breadcrumb = await servicePageBreadcrumbJsonLd(slug, locale);

  return (
    <>
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ServiceDetailClient slug={slug} />
    </>
  );
}
