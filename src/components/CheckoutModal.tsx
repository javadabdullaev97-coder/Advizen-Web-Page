"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { X, ArrowLeft, ArrowRight, Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { FlagBadge, type FlagCode } from "@/components/Flags";

export type LanguagePair = "uz_en" | "uz_ru" | "en_ru";
type Step = 1 | 2 | 3 | 4 | 5 | 6;
type OrderType = "individual" | "legal";
type Currency = "USD" | "UZS";

const UZS_RATE = 12000;

function fmtPrice(price: number, currency: Currency, locale: string): string {
  if (currency === "USD") return `$${price}`;
  const rounded = Math.round((price * UZS_RATE) / 50000) * 50000;
  const suffix = locale === "ru" ? " сум" : " so'm";
  return rounded.toLocaleString("en-US") + suffix;
}

const LANGUAGE_PAIRS: { id: LanguagePair; flags: [FlagCode, FlagCode]; codes: [string, string] }[] = [
  { id: "uz_en", flags: ["uz", "en"], codes: ["UZ", "EN"] },
  { id: "uz_ru", flags: ["uz", "ru"], codes: ["UZ", "RU"] },
  { id: "en_ru", flags: ["en", "ru"], codes: ["EN", "RU"] },
];

const STORE_PRODUCTS: { id: string; price: number }[] = [
  { id: "llc-formation",          price: 299 },
  { id: "jsc-formation",          price: 449 },
  { id: "shareholder-agreement",  price: 279 },
  { id: "nda-bilateral",          price: 39  },
  { id: "commercial-lease",       price: 89  },
  { id: "employment-contract",    price: 59  },
  { id: "hr-policy-manual",       price: 199 },
  { id: "tax-compliance-starter", price: 249 },
  { id: "transfer-pricing",       price: 399 },
  { id: "work-permit-pack",       price: 119 },
  { id: "sez-entry-pack",         price: 449 },
  { id: "due-diligence-pack",     price: 499 },
];

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  productId: string | null;
  productTitle: string;
  priceUSD: number;
  currency?: Currency;
}

export default function CheckoutModal({
  open,
  onClose,
  productId,
  currency = "USD",
}: CheckoutModalProps) {
  const t = useTranslations("Checkout");
  const tProd = useTranslations("StoreProducts.items");
  const locale = useLocale();
  const localePath = locale === "en" ? "" : `/${locale}`;

  const [step, setStep] = useState<Step>(1);
  const [language, setLanguage] = useState<LanguagePair | null>(null);
  const [orderType, setOrderType] = useState<OrderType>("individual");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pinfl, setPinfl] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [inn, setInn] = useState("");
  const [legalEmail, setLegalEmail] = useState("");
  const [legalPhone, setLegalPhone] = useState("");

  const [selectedDocs, setSelectedDocs] = useState<string[]>(productId ? [productId] : []);
  const [termsChecked, setTermsChecked] = useState(false);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (!open) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = orig; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const formValid = (): boolean => {
    if (!termsChecked) return false;
    if (orderType === "individual") {
      return !!(
        firstName.trim() &&
        lastName.trim() &&
        validEmail(email) &&
        phone.trim().length >= 7 &&
        pinfl.length === 14
      );
    }
    return !!(
      companyName.trim() &&
      inn.length === 9 &&
      validEmail(legalEmail) &&
      legalPhone.trim().length >= 7
    );
  };

  const contactEmail = orderType === "individual" ? email : legalEmail;

  const toggleDoc = (id: string) =>
    setSelectedDocs(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );

  const totalPrice = selectedDocs.reduce(
    (sum, id) => sum + (STORE_PRODUCTS.find(p => p.id === id)?.price ?? 0), 0
  );

  const handleSubmit = () => setStep(5);
  const handleConfirm = async () => {
    setConfirming(true);
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderType,
          firstName, lastName, email, phone, pinfl,
          companyName, inn, legalEmail, legalPhone,
          selectedDocs,
          totalPrice,
          language,
          locale,
        }),
      });
    } catch {
      // proceed to success screen regardless
    }
    setConfirming(false);
    setStep(6);
  };
  const handleBack = () => setStep(prev => (prev - 1) as Step);
  const handleNext = () => setStep(prev => (prev + 1) as Step);

  const continueDisabled =
    (step === 1 && !language) ||
    (step === 3 && selectedDocs.length === 0);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full sm:max-w-xl h-[min(700px,calc(100dvh-2rem))] flex flex-col bg-[#0B0B0B] border border-white/[0.08] rounded-t-2xl sm:rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* ── Header ── */}
            <div className="flex-none flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/[0.06]">
              {step <= 4 ? (
                <Stepper
                  step={step as 1 | 2 | 3 | 4}
                  labels={[t("stepLanguage"), t("stepNotice"), t("stepDocuments"), t("stepForm")]}
                />
              ) : step === 5 ? (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] tracking-[0.16em] uppercase text-white/55">
                    {t("confirm.statusLabel")}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] tracking-[0.16em] uppercase text-white/55">
                    {t("success.statusLabel")}
                  </span>
                </div>
              )}
              <button
                type="button"
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
                aria-label={t("actions.close")}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Scrollable content ── */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <AnimatePresence mode="wait">

                {/* Step 1 — Language */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="heading-luxury text-xl text-foreground mb-1.5">
                      {t("language.heading")}
                    </h2>
                    <p className="text-sm text-white/45 mb-6">{t("language.subheading")}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {LANGUAGE_PAIRS.map(pair => {
                        const active = language === pair.id;
                        return (
                          <button
                            key={pair.id}
                            type="button"
                            onClick={() => setLanguage(pair.id)}
                            className={cn(
                              "group relative flex items-center justify-between gap-4 rounded-lg border px-4 py-3.5 text-left transition-all duration-200 cursor-pointer",
                              active
                                ? "border-primary/60 bg-primary/[0.06]"
                                : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] hover:bg-white/[0.035]"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex -space-x-2">
                                <FlagBadge code={pair.flags[0]} size={26} />
                                <FlagBadge code={pair.flags[1]} size={26} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium tracking-wide text-foreground">
                                  {pair.codes[0]}{" "}
                                  <span className="text-white/30">·</span>{" "}
                                  {pair.codes[1]}
                                </span>
                                <span className="text-[11px] tracking-[0.12em] uppercase text-white/35 mt-0.5">
                                  {t(`language.${pair.id}`)}
                                </span>
                              </div>
                            </div>
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200",
                                active
                                  ? "border-primary bg-primary"
                                  : "border-white/15 group-hover:border-white/30"
                              )}
                            >
                              {active && (
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2 — Payment notice */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/40 bg-primary/[0.06] rounded-full px-2.5 py-1">
                        {t("notice.badge")}
                      </span>
                    </div>

                    <h2 className="heading-luxury text-xl text-foreground mb-5">
                      {t("notice.heading")}
                    </h2>

                    {/* Payment logos */}
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] px-5 py-8 mb-6">
                      <Image
                        src="/payments no background.webp"
                        alt="Uzcard · Humo · Visa · Mastercard"
                        width={520}
                        height={110}
                        unoptimized
                        className="w-full h-auto object-contain brightness-[1.35]"
                      />
                    </div>

                    <p className="text-sm text-white/55 leading-relaxed mb-6">
                      {t("notice.bodyLine1")}
                    </p>

                    {/* Email callout */}
                    <div className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-3.5">
                      <Mail className="w-4 h-4 text-primary/80 shrink-0" />
                      <span className="text-sm text-white/65 leading-snug">
                        {t("notice.emailNote")}
                      </span>
                    </div>

                    {/* UZS billing disclosure */}
                    {currency === "UZS" && (
                      <p className="mt-4 text-[11px] text-white/35 leading-relaxed">
                        {t("notice.uzsBillingNote")}
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Step 3 — Document selection */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="heading-luxury text-xl text-foreground mb-1.5">
                      {t("docs.heading")}
                    </h2>
                    <p className="text-sm text-white/45 mb-5">{t("docs.subheading")}</p>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] tracking-[0.16em] uppercase text-white/35">
                        {t("form.documentsLabel")}
                      </span>
                      {selectedDocs.length > 0 && (
                        <span className="text-[11px] text-primary tabular-nums">
                          {selectedDocs.length} × · {fmtPrice(totalPrice, currency, locale)}
                        </span>
                      )}
                    </div>

                    <div className="rounded-lg border border-white/[0.06] divide-y divide-white/[0.04]">
                      {STORE_PRODUCTS.map(p => {
                        const selected = selectedDocs.includes(p.id);
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => toggleDoc(p.id)}
                            className={cn(
                              "w-full flex items-center gap-3 px-3.5 py-3 text-left transition-all duration-150 cursor-pointer",
                              selected ? "bg-primary/[0.05]" : "hover:bg-white/[0.02]"
                            )}
                          >
                            <div
                              className={cn(
                                "w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all duration-150",
                                selected ? "border-primary bg-primary" : "border-white/20"
                              )}
                            >
                              {selected && (
                                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                              )}
                            </div>
                            <span
                              className={cn(
                                "flex-1 text-[12px] leading-snug transition-colors duration-150",
                                selected ? "text-foreground/90" : "text-white/50"
                              )}
                            >
                              {tProd(`${p.id}.title`)}
                            </span>
                            <span className="text-[12px] font-mono text-white/55 shrink-0">
                              {fmtPrice(p.price, currency, locale)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 4 — Order form */}
                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="heading-luxury text-xl text-foreground mb-4">
                      {t("form.heading")}
                    </h2>

                    {/* Individual / Legal toggle */}
                    <div className="flex gap-1 bg-white/[0.03] border border-white/[0.06] rounded-lg p-1 mb-5">
                      {(["individual", "legal"] as OrderType[]).map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setOrderType(type)}
                          className={cn(
                            "flex-1 py-2 text-[12px] tracking-[0.1em] uppercase font-medium rounded-md transition-all duration-200 cursor-pointer",
                            orderType === type
                              ? "bg-primary text-foreground/95 shadow-sm"
                              : "text-white/45 hover:text-white/70"
                          )}
                        >
                          {type === "individual"
                            ? t("form.typeIndividual")
                            : t("form.typeLegal")}
                        </button>
                      ))}
                    </div>

                    {/* Individual fields */}
                    {orderType === "individual" && (
                      <div className="space-y-3 mb-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Field
                            label={t("form.firstName")}
                            value={firstName}
                            onChange={setFirstName}
                          />
                          <Field
                            label={t("form.lastName")}
                            value={lastName}
                            onChange={setLastName}
                          />
                        </div>
                        <Field
                          label={t("form.email")}
                          value={email}
                          onChange={setEmail}
                          type="email"
                        />
                        <Field
                          label={t("form.phone")}
                          value={phone}
                          onChange={setPhone}
                          type="tel"
                        />
                        <Field
                          label={t("form.pinfl")}
                          value={pinfl}
                          onChange={v => {
                            if (/^\d*$/.test(v) && v.length <= 14) setPinfl(v);
                          }}
                          hint={t("form.pinflHint")}
                        />
                      </div>
                    )}

                    {/* Legal entity fields */}
                    {orderType === "legal" && (
                      <div className="space-y-3 mb-5">
                        <Field
                          label={t("form.companyName")}
                          value={companyName}
                          onChange={setCompanyName}
                        />
                        <Field
                          label={t("form.inn")}
                          value={inn}
                          onChange={v => {
                            if (/^\d*$/.test(v) && v.length <= 9) setInn(v);
                          }}
                          hint={t("form.innHint")}
                        />
                        <Field
                          label={t("form.phone")}
                          value={legalPhone}
                          onChange={setLegalPhone}
                          type="tel"
                        />
                        <Field
                          label={t("form.email")}
                          value={legalEmail}
                          onChange={setLegalEmail}
                          type="email"
                        />
                      </div>
                    )}

                    {/* Terms checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setTermsChecked(v => !v)}
                        className={cn(
                          "mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all duration-150 cursor-pointer",
                          termsChecked
                            ? "border-primary bg-primary"
                            : "border-white/20 hover:border-white/40"
                        )}
                      >
                        {termsChecked && (
                          <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                        )}
                      </button>
                      <span className="text-[11px] text-white/40 leading-relaxed select-none">
                        {t.rich("form.termsLabel", {
                          terms: chunks => (
                            <a
                              href={`${localePath}/terms-of-sale`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/65 underline underline-offset-2 hover:text-white/90 transition-colors"
                            >
                              {chunks}
                            </a>
                          ),
                          privacy: chunks => (
                            <a
                              href={`${localePath}/privacy`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/65 underline underline-offset-2 hover:text-white/90 transition-colors"
                            >
                              {chunks}
                            </a>
                          ),
                          cookies: chunks => (
                            <a
                              href={`${localePath}/cookies`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/65 underline underline-offset-2 hover:text-white/90 transition-colors"
                            >
                              {chunks}
                            </a>
                          ),
                        })}
                      </span>
                    </label>
                  </motion.div>
                )}

                {/* Step 5 — Confirm review */}
                {step === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="heading-luxury text-xl text-foreground mb-2">
                      {t("confirm.heading")}
                    </h2>
                    <p className="text-sm text-white/45 mb-6">
                      {t("confirm.subheading")}
                    </p>

                    <div className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-left space-y-3.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/30">
                          {t("success.languageLabel")}
                        </span>
                        <span className="text-sm text-foreground/80">
                          {language && t(`language.${language}`)}
                        </span>
                      </div>
                      <div className="h-px bg-white/[0.05]" />
                      <div>
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/30 block mb-2.5">
                          {t("success.documentsLabel")}
                        </span>
                        <div className="space-y-2">
                          {selectedDocs.map(id => (
                            <div key={id} className="flex items-center justify-between gap-2">
                              <span className="text-sm text-foreground/75 leading-snug">
                                {tProd(`${id}.title`)}
                              </span>
                              <span className="text-sm font-mono text-white/60 shrink-0">
                                {fmtPrice(STORE_PRODUCTS.find(p => p.id === id)?.price ?? 0, currency, locale)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="h-px bg-white/[0.05]" />
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/30">
                          {t("success.totalLabel")}
                        </span>
                        <span className="text-base font-semibold text-foreground/90 font-mono">
                          {fmtPrice(totalPrice, currency, locale)}
                        </span>
                      </div>
                      <div className="h-px bg-white/[0.05]" />
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/30">
                          {t("success.emailNoteLabel")}
                        </span>
                        <span className="text-sm text-foreground/70 truncate max-w-[200px]">
                          {contactEmail}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 6 — Success */}
                {step === 6 && (
                  <motion.div
                    key="step-6"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.05, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                      className="w-16 h-16 rounded-full bg-emerald-500/[0.08] ring-1 ring-emerald-500/30 flex items-center justify-center mb-5"
                    >
                      <Check className="w-7 h-7 text-emerald-400" strokeWidth={2.5} />
                    </motion.div>
                    <h2 className="heading-luxury text-xl text-foreground mb-2">
                      {t("success.heading")}
                    </h2>
                    <p className="text-sm text-white/45 max-w-sm mb-6">
                      {t("success.subheading")}
                    </p>

                    {/* Summary card */}
                    <div className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-left space-y-3.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/30">
                          {t("success.languageLabel")}
                        </span>
                        <span className="text-sm text-foreground/80">
                          {language && t(`language.${language}`)}
                        </span>
                      </div>
                      <div className="h-px bg-white/[0.05]" />
                      <div>
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/30 block mb-2.5">
                          {t("success.documentsLabel")}
                        </span>
                        <div className="space-y-2">
                          {selectedDocs.map(id => (
                            <div key={id} className="flex items-center justify-between gap-2">
                              <span className="text-sm text-foreground/75 leading-snug">
                                {tProd(`${id}.title`)}
                              </span>
                              <span className="text-sm font-mono text-white/60 shrink-0">
                                {fmtPrice(STORE_PRODUCTS.find(p => p.id === id)?.price ?? 0, currency, locale)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="h-px bg-white/[0.05]" />
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/30">
                          {t("success.totalLabel")}
                        </span>
                        <span className="text-base font-semibold text-foreground/90 font-mono">
                          {fmtPrice(totalPrice, currency, locale)}
                        </span>
                      </div>
                      <div className="h-px bg-white/[0.05]" />
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/30">
                          {t("success.emailNoteLabel")}
                        </span>
                        <span className="text-sm text-foreground/70 truncate max-w-[200px]">
                          {contactEmail}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Footer ── */}
            {step <= 4 && (
              <div className="flex-none px-6 pt-4 pb-4 border-t border-white/[0.06] bg-black/40">
                <div className="flex items-center justify-between gap-3">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-1.5 text-[12px] tracking-wide text-white/55 hover:text-foreground transition-colors duration-200 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      {t("actions.back")}
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={continueDisabled}
                      className={cn(
                        "flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] tracking-[0.14em] uppercase font-medium transition-all duration-200",
                        continueDisabled
                          ? "bg-white/[0.05] text-white/25 cursor-not-allowed"
                          : "bg-primary hover:bg-primary-light text-foreground/95 hover:text-white cursor-pointer"
                      )}
                    >
                      {t("actions.continue")}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!formValid()}
                      className={cn(
                        "flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] tracking-[0.14em] uppercase font-medium transition-all duration-200",
                        formValid()
                          ? "bg-primary hover:bg-primary-light text-foreground/95 hover:text-white cursor-pointer"
                          : "bg-white/[0.05] text-white/25 cursor-not-allowed"
                      )}
                    >
                      {t("actions.submit")}
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="flex-none px-6 pt-4 pb-4 border-t border-white/[0.06] bg-black/40">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-[12px] tracking-wide text-white/55 hover:text-foreground transition-colors duration-200 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {t("actions.back")}
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    disabled={confirming}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] tracking-[0.14em] uppercase font-medium transition-all duration-200",
                      confirming
                        ? "bg-white/[0.08] text-white/40 cursor-not-allowed"
                        : "bg-primary hover:bg-primary-light text-foreground/95 hover:text-white cursor-pointer"
                    )}
                  >
                    {confirming ? t("actions.sending") : t("actions.confirm")}
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="flex-none px-6 pt-4 pb-4 border-t border-white/[0.06] bg-black/40">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-primary hover:bg-primary-light text-foreground/95 hover:text-white px-5 py-2.5 rounded-full text-[12px] tracking-[0.14em] uppercase font-medium transition-all duration-200 cursor-pointer"
                >
                  {t("actions.close")}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Field ──────────────────────────────────────────────────── */

function Field({
  label,
  value,
  onChange,
  type = "text",
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.16em] uppercase text-white/35 block mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-white/20 focus:outline-none focus:border-white/[0.22] transition-colors"
      />
      {hint && (
        <p className="mt-1 text-[10px] text-white/25">{hint}</p>
      )}
    </div>
  );
}

/* ── Stepper ──────────────────────────────────────────────────── */

function Stepper({ step, labels }: { step: 1 | 2 | 3 | 4; labels: string[] }) {
  return (
    <div className="flex items-center gap-1.5">
      {labels.map((label, i) => {
        const n = (i + 1) as 1 | 2 | 3 | 4;
        const active = n === step;
        const done = n < step;
        return (
          <div key={label} className="flex items-center gap-1.5">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium transition-all duration-300",
                active && "bg-primary text-foreground/95",
                done && "bg-primary/30 text-primary-light",
                !active && !done && "bg-white/[0.06] text-white/35"
              )}
            >
              {done ? (
                <Check className="w-2.5 h-2.5" strokeWidth={3} />
              ) : (
                n
              )}
            </div>
            <span
              className={cn(
                "text-[10px] tracking-[0.1em] uppercase transition-colors duration-300 hidden sm:block",
                active ? "text-foreground" : done ? "text-white/55" : "text-white/30"
              )}
            >
              {label}
            </span>
            {i < labels.length - 1 && (
              <div className="w-3 h-px bg-white/[0.08] mx-0.5" />
            )}
          </div>
        );
      })}
    </div>
  );
}
