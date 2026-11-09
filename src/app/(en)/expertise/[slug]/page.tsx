import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { servicePageMetadata, serviceJsonLd, servicePageBreadcrumbJsonLd } from "@/lib/seo";
import ServiceDetailClient from "@/components/expertise/ServiceDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return servicePageMetadata(slug, "en");
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getServiceBySlug(slug)) notFound();

  const jsonLd = await serviceJsonLd(slug, "en");
  const breadcrumb = await servicePageBreadcrumbJsonLd(slug, "en");

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
