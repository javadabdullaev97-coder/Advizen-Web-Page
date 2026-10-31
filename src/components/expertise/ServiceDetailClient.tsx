"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calculator, Scale, LineChart, Users, Landmark, Handshake, ScanSearch, LayoutDashboard, Briefcase, UserCheck, Wallet, Globe, MapPin, ShieldCheck, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getServiceBySlug, servicesData } from "@/lib/services";
import { allEngagements } from "@/lib/industries";
import { PRODUCTS } from "@/lib/products";
import { SERVICE_FAQ_DATA } from "@/lib/serviceFaqData";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";
import type { ComponentType, SVGProps } from "react";

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

const SERVICE_ICONS: Record<string, LucideIcon> = {
  tax:               Calculator,
  legal:             Scale,
  finance:           LineChart,
  hr:                Users,
  funding:           Landmark,
  "ma-advisory":     Handshake,
  "due-diligence":   ScanSearch,
  "entity-management": LayoutDashboard,
  corporate:         Briefcase,
  eor:               UserCheck,
  payroll:           Wallet,
  immigration:       Globe,
  "virtual-office":  MapPin,
  compliance:        ShieldCheck,
};

const SERVICE_ACCENTS: Record<string, string> = {
  tax:               "184,146,42",
  legal:             "30,64,175",
  finance:           "13,148,136",
  hr:                "124,58,237",
  funding:           "22,163,74",
  "ma-advisory":     "139,26,26",
  "due-diligence":   "194,65,12",
  "entity-management": "16,185,129",
  corporate:         "99,102,241",
  eor:               "236,72,153",
  payroll:           "14,165,233",
  immigration:       "245,158,11",
  "virtual-office":  "168,85,247",
  compliance:        "34,197,94",
};

const SERVICE_FOR: Record<string, string> = {
  tax:               "Foreign-invested companies, holding structures, and cross-border operators navigating Uzbekistan's fiscal complexity.",
  legal:             "International businesses entering Uzbekistan, M&A counterparties, and companies requiring regulatory clearances.",
  finance:           "Foreign subsidiaries needing IFRS-compliant reporting, investor-ready financials, or audit-prepared books.",
  hr:                "Growing businesses requiring compliant HR infrastructure, executive hiring, or workforce compliance reviews.",
  funding:           "Startups seeking grants, companies preparing for investment rounds, and businesses applying for state incentives.",
  "ma-advisory":     "Strategic acquirers, PE funds, and founders seeking M&A transactions in Uzbekistan and Central Asia.",
  "due-diligence":   "Buyers, lenders, and investors requiring independent risk assessment before a transaction closes.",
  "entity-management": "Foreign companies that need a complete operational presence in Uzbekistan without building an in-house management team.",
  corporate:         "International businesses establishing or maintaining a legal presence in Uzbekistan — from incorporation to ongoing secretarial administration.",
  eor:               "International companies that want to hire staff in Uzbekistan immediately, without first incorporating a local entity.",
  payroll:           "Companies with Uzbekistan-based employees that need accurate, fully compliant payroll processing every cycle.",
  immigration:       "Foreign nationals relocating to Uzbekistan for work, and the international companies employing them.",
  "virtual-office":  "Overseas companies exploring the Uzbekistan market, or businesses that need a registered address without committing to physical office space.",
  compliance:        "Entities that need continuous assurance their Uzbekistan operations are meeting every regulatory, tax, and filing obligation.",
};

const DISCIPLINE_MAP: Record<string, string[]> = {
  tax:               ["Tax"],
  legal:             ["Legal"],
  finance:           ["Finance"],
  hr:                ["HR"],
  funding:           ["Tax", "Legal"],
  "ma-advisory":     ["Tax", "Legal"],
  "due-diligence":   ["Tax", "Legal"],
  "entity-management": ["Legal"],
  corporate:         ["Legal"],
  eor:               ["HR"],
  payroll:           ["HR"],
  immigration:       ["HR"],
  "virtual-office":  ["Legal"],
  compliance:        ["Tax"],
};

const RELATED_SERVICES_MAP: Record<string, string[]> = {
  tax:               ["legal", "finance", "due-diligence"],
  legal:             ["tax", "corporate", "ma-advisory"],
  finance:           ["tax", "entity-management", "due-diligence"],
  hr:                ["eor", "payroll", "immigration"],
  funding:           ["tax", "legal", "finance"],
  "ma-advisory":     ["due-diligence", "legal", "tax"],
  "due-diligence":   ["ma-advisory", "tax", "legal"],
  "entity-management": ["corporate", "compliance", "payroll"],
  corporate:         ["entity-management", "legal", "virtual-office"],
  eor:               ["payroll", "immigration", "hr"],
  payroll:           ["eor", "hr", "compliance"],
  immigration:       ["eor", "hr", "corporate"],
  "virtual-office":  ["corporate", "entity-management", "compliance"],
  compliance:        ["entity-management", "tax", "legal"],
};

const RELATED_PRODUCTS_MAP: Record<string, string[]> = {
  tax:               ["tax-compliance-starter", "transfer-pricing"],
  legal:             ["shareholder-agreement", "nda-bilateral", "commercial-lease"],
  finance:           ["tax-compliance-starter", "transfer-pricing"],
  hr:                ["employment-contract", "hr-policy-manual"],
  funding:           ["sez-entry-pack", "due-diligence-pack"],
  "ma-advisory":     ["due-diligence-pack", "shareholder-agreement"],
  "due-diligence":   ["due-diligence-pack", "shareholder-agreement"],
  "entity-management": ["llc-formation", "jsc-formation"],
  corporate:         ["llc-formation", "jsc-formation", "shareholder-agreement"],
  eor:               ["employment-contract", "hr-policy-manual"],
  payroll:           ["employment-contract", "hr-policy-manual"],
  immigration:       ["work-permit-pack"],
  "virtual-office":  ["llc-formation", "commercial-lease"],
  compliance:        ["tax-compliance-starter", "work-permit-pack"],
};

const CHROME: Record<string, Record<string, string>> = {
  en: {
    about: "About this service", whoFor: "Who this is for", capabilities: "Capabilities", deliver: "What we deliver",
    discuss: "Discuss this service", ctaPrefix: "Ready to discuss", ctaBody: "Our team is available to scope your engagement and answer initial questions.", start: "Start a conversation",
    selectedWork: "Selected work", viewAll: "View all projects", relatedServices: "Related services", fromStore: "From our store",
    faqTitle: "Frequently asked", faqSubtitle: "Quick answers on the practical details that matter most.", storeFrom: "from",
  },
  ru: {
    about: "Об этой услуге", whoFor: "Кому подходит", capabilities: "Возможности", deliver: "Что мы делаем",
    discuss: "Обсудить эту услугу", ctaPrefix: "Готовы обсудить", ctaBody: "Наша команда готова обсудить объём работ и ответить на ваши вопросы.", start: "Начать диалог",
    selectedWork: "Избранные проекты", viewAll: "Все проекты", relatedServices: "Связанные услуги", fromStore: "Из нашего магазина",
    faqTitle: "Частые вопросы", faqSubtitle: "Краткие ответы на самые практичные вопросы.", storeFrom: "от",
  },
  uz: {
    about: "Bu xizmat haqida", whoFor: "Bu kim uchun", capabilities: "Imkoniyatlar", deliver: "Biz nima qilamiz",
    discuss: "Bu xizmatni muhokama qilish", ctaPrefix: "Muhokama qilishga tayyormisiz", ctaBody: "Jamoamiz hamkorlik doʼirasini muhokama qilish va savollarga javob berish uchun tayyor.", start: "Suhbatni boshlash",
    selectedWork: "Tanlangan loyihalar", viewAll: "Barcha loyihalar", relatedServices: "Bogʼliq xizmatlar", fromStore: "Doʼkonimizdan",
    faqTitle: "Koʼp soʻraladigan", faqSubtitle: "Eng muhim amaliy savollarga qisqa javoblar.", storeFrom: "dan",
  },
};

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const locale = useLocale();
  const tNav = useTranslations("Nav");
  const tServices = useTranslations("Services");
  const tEng = useTranslations("Engagements");
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const isMobile = useIsMobile();

  if (!service) return null;

  const c = CHROME[locale] ?? CHROME.en;
  const Icon = SERVICE_ICONS[slug] ?? ArrowRight;
  const accent = SERVICE_ACCENTS[slug] ?? "255,255,255";
  const descriptions: string[] =
    service.type === "advisory"
      ? [tServices(`${slug}.description`)]
      : [tServices(`${slug}.description1`), tServices(`${slug}.description2`)];
  const capabilities = tServices.raw(`${slug}.capabilities`) as string[];
  const serviceTitle = tServices(`${slug}.title`);

  // Projects filtered by discipline
  const disciplines = DISCIPLINE_MAP[slug] ?? [];
  const filteredEngagements = allEngagements
    .map((eng, idx) => ({ ...eng, idx }))
    .filter(({ disciplines: d }) => d.some((disc) => disciplines.includes(disc)))
    .slice(0, 3);

  // Related services
  const relatedServiceSlugs = RELATED_SERVICES_MAP[slug] ?? [];
  const relatedServices = relatedServiceSlugs
    .map((s) => servicesData.find((svc) => svc.slug === s))
    .filter(Boolean) as (typeof servicesData)[number][];

  // Related products
  const relatedProductIds = RELATED_PRODUCTS_MAP[slug] ?? [];
  const relatedProducts = relatedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as (typeof PRODUCTS)[number][];

  // FAQ
  const faqLocale: "en" | "ru" | "uz" = locale === "ru" ? "ru" : locale === "uz" ? "uz" : "en";
  const faqItems = SERVICE_FAQ_DATA[slug]?.[faqLocale] ?? [];

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col min-h-[320px] md:min-h-[65vh]">
        {!isMobile && (
          <div
            className="absolute w-[800px] h-[800px] rounded-full -top-64 -left-64 opacity-[0.12] blur-[140px] pointer-events-none"
            style={{ background: `rgba(${accent},1)` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />

        <div className="relative z-10 flex-1 flex flex-col pt-28 pb-16 md:pt-36 md:pb-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          {/* Back + num */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between mb-14 md:mb-18"
          >
            <Link
              href="/expertise"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/38 hover:text-white/70 transition-colors duration-200"
            >
              <ArrowLeft className="w-3 h-3" />
              {tNav("expertise")}
            </Link>
            <span className="font-serif text-xs tabular-nums text-white/14">{service.num}</span>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0"
              style={{ borderColor: `rgba(${accent},0.28)`, background: `rgba(${accent},0.1)` }}
            >
              <Icon className="w-4 h-4" style={{ color: `rgba(${accent},0.85)` }} strokeWidth={1.5} />
            </span>
            <span
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: `rgba(${accent},0.65)` }}
            >
              {service.category}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="heading-luxury text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.05] mb-10">
            <motion.span
              initial={{ opacity: 0, y: isMobile ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.4 : 0.85, delay: isMobile ? 0.1 : 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "block" }}
            >
              {serviceTitle}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.15 : 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton variant="primary" as="a" href="/contact">
              {c.discuss}
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── Description ──────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-28 bg-black border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-[5fr_7fr] gap-12 md:gap-20">
            <AnimatedSection>
              <p className="tracking-luxury text-white/40 mb-4">{c.about}</p>
              <h2 className="heading-luxury text-2xl md:text-3xl text-foreground leading-snug">
                {serviceTitle}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-5">
                {descriptions.map((para, i) => (
                  <p
                    key={i}
                    className={cn("leading-relaxed text-[15px]", i === 0 ? "text-white/60" : "text-white/42")}
                  >
                    {para}
                  </p>
                ))}

                {SERVICE_FOR[slug] && (
                  <div
                    className="mt-2 border-l-2 pl-4 py-1"
                    style={{ borderColor: `rgba(${accent},0.35)` }}
                  >
                    <p
                      className="text-[10px] tracking-[0.18em] uppercase mb-1.5"
                      style={{ color: `rgba(${accent},0.62)` }}
                    >
                      {c.whoFor}
                    </p>
                    <p className="text-[13px] text-white/48 leading-relaxed">{SERVICE_FOR[slug]}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-28 bg-black border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <p className="tracking-luxury text-white/40 mb-3">{c.capabilities}</p>
            <h2 className="heading-luxury text-2xl md:text-3xl text-foreground">{c.deliver}</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: isMobile ? 0 : i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-black px-5 py-6 sm:px-7 sm:py-8 overflow-hidden transition-colors duration-300"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, rgba(${accent},0.14) 0%, transparent 70%)` }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, rgba(${accent},0.6) 0%, transparent 55%)` }}
                />
                <span
                  className="block font-serif text-[2.5rem] leading-none mb-5 tabular-nums select-none"
                  style={{ color: `rgba(${accent},0.45)` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] text-white/55 group-hover:text-white/80 leading-snug transition-colors duration-300">
                  {cap}
                </p>
              </motion.div>
            ))}
            {Array.from({ length: (3 - (capabilities.length % 3)) % 3 }).map((_, i) => (
              <div key={`filler-${i}`} className="bg-black" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected work ──────────────────────────────────────────── */}
      {filteredEngagements.length > 0 && (
        <section className="py-14 md:py-20 lg:py-28 bg-black border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10 md:mb-12 gap-6">
              <AnimatedSection>
                <p className="tracking-luxury text-white/40 mb-3">{c.selectedWork}</p>
                <h2 className="heading-luxury text-2xl md:text-3xl text-foreground">{serviceTitle}</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="shrink-0">
                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/35 hover:text-white/65 transition-colors duration-200 pb-1 border-b border-white/[0.12] hover:border-white/[0.3]"
                >
                  {c.viewAll}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredEngagements.map((eng, i) => (
                <motion.div
                  key={eng.idx}
                  initial={{ opacity: 0, y: isMobile ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: isMobile ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-xl bg-white/[0.07]" />
                  <div
                    className="absolute inset-[1px] rounded-[11px]"
                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)" }}
                  />
                  <div className="relative h-full bg-gradient-to-br from-[#101010] to-[#070707] rounded-[11px] overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />
                    <div className="p-6 md:p-7 flex flex-col h-full">
                      <div className="mb-5">
                        <span className="font-serif text-3xl md:text-4xl text-foreground/85 tracking-tight leading-none">
                          {eng.metric}
                        </span>
                        <p className="text-[10px] tracking-[0.16em] uppercase text-white/25 mt-2">
                          {tEng(`metricLabels.${eng.metricLabel}`)}
                        </p>
                      </div>
                      <span
                        className="inline-block text-xs tracking-[0.16em] uppercase mb-3"
                        style={{ color: `rgba(${accent},0.7)` }}
                      >
                        {tEng(`sectors.${eng.sector}`)}
                      </span>
                      <p className="text-[14px] text-foreground/60 leading-snug font-light flex-1 mb-5">
                        {tEng(`headlines.${eng.idx}`)}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                        {eng.disciplines.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] tracking-[0.12em] uppercase text-white/30 border border-white/[0.06] rounded-full px-2.5 py-0.5"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related services + From our store ────────────────────── */}
      <section className="py-14 md:py-20 lg:py-28 bg-black border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">

            {/* Related services */}
            <AnimatedSection>
              <p className="tracking-luxury text-white/40 mb-7">{c.relatedServices}</p>
              <div className="flex flex-col gap-3">
                {relatedServices.map((svc) => {
                  const SvcIcon = SERVICE_ICONS[svc.slug] ?? ArrowRight;
                  const svcAccent = SERVICE_ACCENTS[svc.slug] ?? "255,255,255";
                  return (
                    <Link
                      key={svc.slug}
                      href={`/expertise/${svc.slug}`}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
                    >
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center border shrink-0"
                        style={{ borderColor: `rgba(${svcAccent},0.22)`, background: `rgba(${svcAccent},0.08)` }}
                      >
                        <SvcIcon className="w-4 h-4" style={{ color: `rgba(${svcAccent},0.75)` }} strokeWidth={1.5} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] text-white/70 group-hover:text-white/90 transition-colors leading-tight">
                          {tServices(`${svc.slug}.title`)}
                        </p>
                        <p className="text-[11px] tracking-[0.14em] uppercase text-white/28 mt-0.5">{svc.category}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Related products */}
            {relatedProducts.length > 0 && (
              <AnimatedSection delay={0.1}>
                <p className="tracking-luxury text-white/40 mb-7">{c.fromStore}</p>
                <div className="flex flex-col gap-3">
                  {relatedProducts.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/store/${prod.id}`}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] text-white/70 group-hover:text-white/90 transition-colors leading-tight">
                          {prod.nameEn}
                        </p>
                        <p className="text-[11px] tracking-[0.14em] uppercase text-white/28 mt-0.5">{prod.category}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className="text-[13px] font-medium tabular-nums"
                          style={{ color: `rgba(${accent},0.75)` }}
                        >
                          ${prod.price}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            )}

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────────────── */}
      {faqItems.length > 0 && (
        <section className="py-14 md:py-20 lg:py-28 bg-black border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-[5fr_7fr] gap-12 md:gap-20">
              <AnimatedSection>
                <p className="tracking-luxury text-white/40 mb-4">{c.faqTitle}</p>
                <h2 className="heading-luxury text-2xl md:text-3xl text-foreground leading-snug mb-4">
                  {serviceTitle}
                </h2>
                <p className="text-[13px] text-white/35 leading-relaxed">{c.faqSubtitle}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="divide-y divide-white/[0.06]">
                  {faqItems.map((item, i) => (
                    <div key={i}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-start justify-between gap-4 text-left group py-4 min-h-[44px]"
                      >
                        <span className="text-[14px] text-white/65 group-hover:text-white/85 transition-colors leading-snug">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-white/30 shrink-0 mt-0.5 transition-transform duration-200",
                            openFaq === i && "rotate-180"
                          )}
                        />
                      </button>
                      {openFaq === i && (
                        <motion.p
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3 text-[13px] text-white/42 leading-relaxed pb-4"
                        >
                          {item.a}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-black border-t border-white/[0.05] relative overflow-hidden">
        {!isMobile && (
          <div
            className="absolute w-[600px] h-[600px] rounded-full -bottom-48 left-1/2 -translate-x-1/2 opacity-[0.08] blur-[110px] pointer-events-none"
            style={{ background: `rgba(${accent},1)` }}
          />
        )}
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-white/40 mb-6">{service.category}</p>
            <h2 className="heading-luxury text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              {c.ctaPrefix} {serviceTitle}?
            </h2>
            <p className="text-white/45 max-w-md mx-auto mb-10 leading-relaxed">{c.ctaBody}</p>
            <MagneticButton variant="primary" as="a" href="/contact">
              {c.start}
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
