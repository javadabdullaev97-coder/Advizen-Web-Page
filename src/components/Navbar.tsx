"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher, { MobileLanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Nav");

  const navLinks = [
    { href: "/expertise", label: t("expertise") },
    { href: "/insights", label: t("insights") },
    { href: "/contact", label: t("contact") },
  ];

  useEffect(() => {
    let rafId: number;
    const handler = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrolled(window.scrollY > 8));
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // The open menu covers the page, so the page behind it must not scroll.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  // On the homepage the bar sits clear over the photo until the page moves; elsewhere it is always glass.
  const clear = pathname === "/" && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        clear
          ? "bg-transparent border-transparent"
          : // A backdrop-filter would make the header the containing block of the fixed menu below and
            // squeeze it into the bar, so the open menu gets an opaque background instead of glass.
            mobileOpen
            ? "bg-background border-line"
            : `backdrop-blur-xl backdrop-saturate-[1.8] bg-background/75 ${scrolled ? "border-line" : "border-transparent"}`
      }`}
    >
      <nav className="m-wrap flex items-center h-20 relative">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/Logo.webp"
            alt="Advizen"
            width={35}
            height={35}
            preload
            style={{ width: "auto", height: "32px" }}
          />
          <span
            style={{
              fontFamily: "var(--font-hero), sans-serif",
              fontSize: "23px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              lineHeight: 1,
              color: "var(--foreground-hi)",
            }}
          >
            ADVIZEN
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-[15px] font-medium transition-colors ${
                isActive(link.href) ? "text-foreground-hi" : "text-foreground-2 hover:text-foreground-hi"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-5 ml-auto">
          <LanguageSwitcher />
          <Link href="/contact" className="m-btn m-btn-p" style={{ height: 44, padding: "0 20px" }}>
            {t("book")}
          </Link>
        </div>

        <button
          className="xl:hidden ml-auto w-11 h-11 flex items-center justify-center text-foreground-hi cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="xl:hidden fixed inset-x-0 top-20 bottom-0 bg-background m-wrap pt-6 pb-10 flex flex-col overflow-y-auto">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex items-center min-h-14 text-[28px] font-bold tracking-[-0.03em] ${
                    isActive(link.href) ? "text-foreground-hi" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8 flex flex-col gap-5">
            <MobileLanguageSwitcher />
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="m-btn m-btn-p w-full">
              {t("book")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
