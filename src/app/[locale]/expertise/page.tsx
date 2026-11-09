import { pageBreadcrumbJsonLd, expertiseServicesJsonLd } from "@/lib/seo";
import ExpertiseListingClient from "@/components/expertise/ExpertiseListingClient";

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const breadcrumb = pageBreadcrumbJsonLd("expertise", locale);
  const services = await expertiseServicesJsonLd(locale);
  return (
    <>
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
      <ExpertiseListingClient />
    </>
  );
}
