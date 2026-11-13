import { setRequestLocale } from "next-intl/server";
import { pageBreadcrumbJsonLd } from "@/lib/seo";
import GuidesContent from "@/components/guides/GuidesContent";

// The (en) route group re-exports this page without a locale param; its layout sets "en".
export default async function GuidesPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = params ? (await params).locale : undefined;
  if (locale) setRequestLocale(locale);
  const breadcrumb = pageBreadcrumbJsonLd("guides", locale ?? "en");
  return (
    <>
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      <GuidesContent />
    </>
  );
}
