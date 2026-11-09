import { setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/legal/LegalPage";

// The (en) route group re-exports this page without a locale param; its layout sets "en".
export default async function Page({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = params ? (await params).locale : undefined;
  if (locale) setRequestLocale(locale);
  return <LegalPage doc="terms" />;
}
