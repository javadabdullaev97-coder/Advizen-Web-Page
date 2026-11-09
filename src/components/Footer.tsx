"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SocialIcons from "@/components/SocialIcons";
import { LanguageLinks } from "@/components/LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("Footer");

  const footerLinks = {
    [t("expertise")]: [
      { label: t("taxConsulting"),  href: "/expertise/tax" },
      { label: t("legalAdvisory"),  href: "/expertise/legal" },
      { label: t("accounting"),     href: "/expertise/finance" },
      { label: t("hrServices"),     href: "/expertise/hr" },
      { label: t("funding"),        href: "/expertise/funding" },
      { label: t("maAdvisory"),     href: "/expertise/ma-advisory" },
      { label: t("dueDiligence"),   href: "/expertise/due-diligence" },
    ],
    [t("operations")]: [
      { label: t("entityManagement"),    href: "/expertise/entity-management" },
      { label: t("employerOfRecord"),    href: "/expertise/eor" },
      { label: t("corporateServices"),   href: "/expertise/corporate" },
      { label: t("payroll"),             href: "/expertise/payroll" },
      { label: t("workPermits"),         href: "/expertise/immigration" },
      { label: t("virtualOffice"),       href: "/expertise/virtual-office" },
      { label: t("compliance"),          href: "/expertise/compliance" },
    ],
    [t("firm")]: [
      { label: t("insights"), href: "/insights" },
      { label: t("contact"),  href: "/contact" },
    ],
    [t("legal")]: [
      { label: t("cookiePolicy"), href: "/cookies" },
      { label: t("privacy"),      href: "/privacy" },
      { label: t("termsOfUse"),   href: "/terms" },
      { label: t("disclaimer"),   href: "/disclaimer" },
    ],
  };

  return (
    <footer className="bg-background">
      <div className="m-wrap">
        <div className="border-t border-line py-16 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,4fr)] lg:gap-10">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/Logo.webp" alt="" width={35} height={35} style={{ width: "auto", height: "30px" }} />
              <span style={{ fontFamily: "var(--font-hero), sans-serif", fontSize: "22px", fontWeight: 500, letterSpacing: "0.12em", lineHeight: 1, color: "var(--foreground-hi)" }}>
                ADVIZEN
              </span>
            </div>
            <p className="mt-4 text-[15px] text-muted leading-relaxed max-w-[24em]">{t("tagline")}</p>
            <div className="mt-5 flex flex-col gap-1 text-[15px]">
              <a href="tel:+998334884888" className="text-foreground-hi w-fit py-1 hover:underline underline-offset-4">
                +998 33 488 48 88
              </a>
              <a href="mailto:info@advizenco.com" className="text-foreground-hi w-fit py-1 hover:underline underline-offset-4">
                info@advizenco.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="min-w-0">
                <p className="text-[15px] font-semibold text-foreground-hi mb-4">{title}</p>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[15px] text-muted hover:text-foreground-hi transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-line py-7">
          <SocialIcons />
        </div>

        <div className="border-t border-line pt-6 pb-10 flex flex-wrap justify-between items-center gap-4 text-sm text-muted">
          <p>&copy; 2024 Advizen Consulting LLC · {t("tashkent")}</p>
          <LanguageLinks />
        </div>
      </div>
    </footer>
  );
}
