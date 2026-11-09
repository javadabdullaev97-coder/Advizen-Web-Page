import { setRequestLocale } from "next-intl/server";
import ContactContent from "@/components/contact/ContactContent";

// The (en) route group re-exports this page without a locale param; its layout sets "en".
export default async function ContactPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = params ? (await params).locale : undefined;
  if (locale) setRequestLocale(locale);
  return <ContactContent />;
}
