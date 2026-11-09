import { setRequestLocale } from "next-intl/server";
import { pageBreadcrumbJsonLd, expertiseServicesJsonLd } from "@/lib/seo";
import ExpertiseContent from "@/components/expertise/ExpertiseContent";

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
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
      <ExpertiseContent />
    </>
  );
}
