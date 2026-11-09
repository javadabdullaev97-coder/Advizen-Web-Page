import { pageBreadcrumbJsonLd, expertiseServicesJsonLd } from "@/lib/seo";
import ExpertiseListingClient from "@/components/expertise/ExpertiseListingClient";

export default async function ExpertisePage() {
  const breadcrumb = pageBreadcrumbJsonLd("expertise", "en");
  const services = await expertiseServicesJsonLd("en");
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
