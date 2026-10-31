"use client";

import { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Calculator,
  Check,
  Download,
  FileText,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import CheckoutModal from "@/components/CheckoutModal";
import FaqSection from "@/components/FaqSection";
import { type FaqPage } from "@/lib/faqData";
import { PRODUCT_DETAIL_DATA } from "@/lib/productDetailData";
import { PRODUCTS, getProductById } from "@/lib/products";
import { cn } from "@/lib/utils";

type Currency = "USD" | "UZS";
type Locale = "en" | "ru" | "uz";
const UZS_RATE = 12000;

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Company Formation": FileText,
  "Legal": Scale,
  "HR": Users,
  "Tax": Calculator,
  "Compliance": ShieldCheck,
  "Finance": BarChart2,
};

const STORE_LABEL: Record<string, string> = {
  en: "Store",
  ru: "Магазин",
  uz: "Do'kon",
};

const HOME_LABEL: Record<string, string> = {
  en: "Home",
  ru: "Главная",
  uz: "Bosh sahifa",
};

const INCLUDES_LABEL: Record<string, string> = {
  en: "What's Included",
  ru: "Что входит",
  uz: "Nima kiradi",
};

const ONE_TIME_LABEL: Record<string, string> = {
  en: "One-time purchase · Instant download",
  ru: "Единовременная покупка · Мгновенная загрузка",
  uz: "Bir martalik xarid · Tez yuklab olish",
};

const FEATURES_LABELS: Record<string, [string, string, string]> = {
  en: ["Instant download", "Editable Word format", "Lawyer-drafted"],
  ru: ["Мгновенная загрузка", "Редактируемый формат Word", "Составлено юристами"],
  uz: ["Tez yuklab olish", "Tahrirlash mumkin (Word)", "Huquqshunoslar tomonidan"],
};

const RELATED_LABEL: Record<string, string> = {
  en: "More in this category",
  ru: "Больше в этой категории",
  uz: "Bu toifadagi ko'proq",
};

const VIEW_ALL_LABEL: Record<string, string> = {
  en: "View all",
  ru: "Посмотреть все",
  uz: "Hammasini ko'rish",
};

const FOR_WHO_LABEL: Record<string, string> = {
  en: "Who It's For",
  ru: "Для кого",
  uz: "Kim uchun",
};

const WHY_NEEDED_LABEL: Record<string, string> = {
  en: "Why You Need It",
  ru: "Зачем это нужно",
  uz: "Nima uchun kerak",
};

const AT_RISK_LABEL: Record<string, string> = {
  en: "Risks Without It",
  ru: "Риски без него",
  uz: "Bu holatsiz xatarlar",
};

// The currency lives in a cookie (the middleware sets it from CF-IPCountry); the page reads it
// as an external store so the server render and hydration both start from USD.
const CURRENCY_EVENT = "currency-change";

function subscribeCurrency(onChange: () => void) {
  window.addEventListener(CURRENCY_EVENT, onChange);
  return () => window.removeEventListener(CURRENCY_EVENT, onChange);
}

function readCurrency(): Currency {
  const match = document.cookie.match(/(?:^|;\s*)currency=(USD|UZS)/);
  return (match?.[1] as Currency) ?? "USD";
}

function saveCurrency(curr: Currency) {
  document.cookie = `currency=${curr}; path=/; max-age=31536000; SameSite=Lax`;
  window.dispatchEvent(new Event(CURRENCY_EVENT));
}

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = getProductById(slug);
  const currency = useSyncExternalStore(subscribeCurrency, readCurrency, () => "USD" as Currency);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutKey, setCheckoutKey] = useState(0);
  const openCheckout = () => { setCheckoutKey((k) => k + 1); setCheckoutOpen(true); };
  const locale = useLocale() as Locale;

  const handleCurrencyChange = (curr: Currency) => saveCurrency(curr);
  const tProducts = useTranslations("StoreProducts");
  const t = useTranslations("StorePage.card");

  if (!product) return null;

  const title = tProducts(`items.${slug}.title`);
  const description = tProducts(`items.${slug}.description`);
  const includes = tProducts.raw(`items.${slug}.includes`) as string[];
  const categoryLabel = tProducts(`categories.${product.category}`);
  const CategoryIcon = CATEGORY_ICONS[product.category] ?? FileText;

  const detailContent = PRODUCT_DETAIL_DATA[slug]?.[locale] ?? PRODUCT_DETAIL_DATA[slug]?.en;

  const effectiveCurrency: Currency = locale === "uz" ? "UZS" : currency;
  const uzsPrice = Math.round((product.price * UZS_RATE) / 50000) * 50000;
  const priceMain = effectiveCurrency === "USD" ? `$${product.price}` : uzsPrice.toLocaleString("en-US");
  const priceSuffix = effectiveCurrency === "UZS" ? (locale === "ru" ? " сум" : " so'm") : "";

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== slug).slice(0, 3);
  const featureLabels = FEATURES_LABELS[locale] ?? FEATURES_LABELS.en;
  const featureIcons = [Download, FileText, ShieldCheck] as const;

  return (
    <>
      <div className="min-h-screen bg-black pt-20 pb-24 lg:pb-0">
        {/* Breadcrumb */}
        <div className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 text-xs text-white/35 tracking-wide">
            <Link href="/" className="hover:text-white/60 transition-colors duration-200">
              {HOME_LABEL[locale] ?? HOME_LABEL.en}
            </Link>
            <span className="text-white/15">/</span>
            <Link href="/store" className="hover:text-white/60 transition-colors duration-200">
              {STORE_LABEL[locale] ?? STORE_LABEL.en}
            </Link>
            <span className="text-white/15">/</span>
            <span className="text-white/55">{title}</span>
          </div>
        </div>

        {/* Main */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">

            {/* Left column */}
            <div>
              {/* Category + date */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-7"
              >
                <span className="flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase text-white/40 border border-white/[0.08] px-3 py-1.5">
                  <CategoryIcon className="w-3 h-3" strokeWidth={1.5} />
                  {categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-white/25 border border-white/[0.06] rounded-full px-2.5 py-1">
                  {product.updated}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="heading-luxury text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1] mb-7"
              >
                {title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/70 leading-relaxed text-[15px] mb-12 max-w-2xl"
              >
                {description}
              </motion.p>

              {detailContent && (
                <>
                  {/* Who It's For */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10"
                  >
                    <p className="text-[10px] tracking-[0.18em] uppercase text-white/50 mb-5">
                      {FOR_WHO_LABEL[locale] ?? FOR_WHO_LABEL.en}
                    </p>
                    <ul className="space-y-3">
                      {detailContent.forWho.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-[7px]" />
                          <span className="text-[14px] text-white/75 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Why You Need It */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10"
                  >
                    <p className="text-[10px] tracking-[0.18em] uppercase text-white/50 mb-5">
                      {WHY_NEEDED_LABEL[locale] ?? WHY_NEEDED_LABEL.en}
                    </p>
                    <p className="text-[14px] text-white/70 leading-relaxed max-w-2xl">
                      {detailContent.whyNeeded}
                    </p>
                  </motion.div>

                  {/* Risks Without It */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                  >
                    <p className="text-[10px] tracking-[0.18em] uppercase text-white/50 mb-5">
                      {AT_RISK_LABEL[locale] ?? AT_RISK_LABEL.en}
                    </p>
                    <ul className="space-y-3">
                      {detailContent.atRisk.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500/70 shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-[14px] text-white/70 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </>
              )}

              {/* What's included */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[10px] tracking-[0.18em] uppercase text-white/50 mb-5">
                  {INCLUDES_LABEL[locale] ?? INCLUDES_LABEL.en}
                </p>
                <ul className="space-y-3.5">
                  {includes.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full border border-primary/30 bg-primary/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-primary" strokeWidth={2.5} />
                      </span>
                      <span className="text-[14px] text-white/75 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Back to store */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.4 }}
                className="mt-14"
              >
                <Link
                  href="/store"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-white/30 hover:text-white/55 transition-colors duration-200"
                >
                  <ArrowLeft className="w-3 h-3" />
                  {STORE_LABEL[locale] ?? STORE_LABEL.en}
                </Link>
              </motion.div>
            </div>

            {/* Right column — sticky price card + FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-24"
            >
                {/* Price card */}
                <div className="bg-[#080808] border border-white/[0.10] rounded-xl p-6">
                  {/* Inner gradient card */}
                  <div className="relative bg-[#141414] rounded-[10px] border border-white/[0.07] p-5 mb-5 overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-32 pointer-events-none"
                      style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)" }}
                    />

                    {/* Currency toggle */}
                    {locale !== "uz" && (
                      <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 w-fit mb-5">
                        {(["USD", "UZS"] as Currency[]).map((curr) => (
                          <button
                            key={curr}
                            type="button"
                            onClick={() => handleCurrencyChange(curr)}
                            className="relative px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer"
                          >
                            {effectiveCurrency === curr && (
                              <motion.div
                                layoutId="prod-curr-pill"
                                className="absolute inset-0 rounded-full bg-primary"
                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                              />
                            )}
                            <span className={cn(
                              "relative z-10 transition-colors duration-200",
                              effectiveCurrency === curr ? "text-white" : "text-white/40"
                            )}>
                              {curr}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Price */}
                    <motion.div
                      key={effectiveCurrency}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-end gap-1 mb-1"
                    >
                      <span className="text-3xl font-extrabold tracking-tight text-foreground">
                        {priceMain}
                      </span>
                      {priceSuffix && (
                        <span className="text-white/45 pb-0.5 text-sm">{priceSuffix}</span>
                      )}
                    </motion.div>
                    <p className="text-[11px] text-white/30">
                      {ONE_TIME_LABEL[locale] ?? ONE_TIME_LABEL.en}
                    </p>
                  </div>

                  {/* Purchase button */}
                  <button
                    type="button"
                    onClick={openCheckout}
                    className="w-full rounded-lg bg-primary hover:bg-primary-light py-3 text-center text-[11px] tracking-[0.18em] uppercase font-medium text-foreground/90 hover:text-white transition-all duration-200 cursor-pointer mb-5"
                  >
                    {t("purchase")}
                  </button>

                  {/* Feature list */}
                  <ul className="space-y-2.5">
                    {featureLabels.map((feat, i) => {
                      const Icon = featureIcons[i];
                      return (
                        <li key={feat} className="flex items-center gap-2.5 text-[12px] text-white/38">
                          <Icon className="w-3.5 h-3.5 text-white/22 shrink-0" strokeWidth={1.5} />
                          {feat}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* FAQ — separate card below price card */}
                <FaqSection page={slug as FaqPage} variant="sidebar" />
            </motion.div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 md:mt-28 border-t border-white/[0.06] pt-14"
            >
              <div className="flex items-center justify-between gap-4 mb-8">
                <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
                  {RELATED_LABEL[locale] ?? RELATED_LABEL.en}
                </p>
                <Link
                  href="/store"
                  className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase text-primary/50 hover:text-primary/80 transition-colors duration-200"
                >
                  {VIEW_ALL_LABEL[locale] ?? VIEW_ALL_LABEL.en}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((p, i) => {
                  const relTitle = tProducts(`items.${p.id}.title`);
                  const relDesc = tProducts(`items.${p.id}.description`);
                  const RelIcon = CATEGORY_ICONS[p.category] ?? FileText;
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={`/store/${p.id}`}
                        className="group flex flex-col h-full bg-[#080808] border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-5 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="flex items-center gap-1.5 text-[10px] tracking-[0.12em] uppercase text-white/30">
                            <RelIcon className="w-3 h-3" strokeWidth={1.5} />
                            {tProducts(`categories.${p.category}`)}
                          </span>
                          <span className="text-[13px] font-semibold text-white/70">${p.price}</span>
                        </div>
                        <p className="text-[14px] text-white/55 font-medium mb-2 group-hover:text-white/75 transition-colors duration-200 leading-snug">
                          {relTitle}
                        </p>
                        <p className="text-[12px] text-white/30 leading-relaxed line-clamp-2 flex-1">{relDesc}</p>
                        <div className="mt-4 flex items-center gap-1.5 text-[10px] tracking-[0.14em] uppercase text-primary/45 group-hover:text-primary/70 transition-colors duration-200">
                          View
                          <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 flex items-center gap-4 px-5 py-3 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/[0.08]">
        <div className="flex-1 min-w-0">
          <motion.div
            key={effectiveCurrency}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-baseline gap-1"
          >
            <span className="text-[22px] font-extrabold tracking-tight text-foreground leading-none">
              {priceMain}
            </span>
            {priceSuffix && (
              <span className="text-white/45 text-xs">{priceSuffix}</span>
            )}
          </motion.div>
          <p className="text-[10px] text-white/30 mt-0.5 truncate">
            {ONE_TIME_LABEL[locale] ?? ONE_TIME_LABEL.en}
          </p>
        </div>
        <button
          type="button"
          onClick={openCheckout}
          className="shrink-0 rounded-full bg-primary hover:bg-primary-light active:scale-95 px-6 py-3 text-[11px] tracking-[0.18em] uppercase font-medium text-foreground/90 hover:text-white transition-all duration-200 cursor-pointer"
        >
          {t("purchase")}
        </button>
      </div>

      <CheckoutModal
        key={checkoutKey}
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        productId={slug}
        productTitle={title}
        priceUSD={product.price}
        currency={effectiveCurrency}
      />
    </>
  );
}
