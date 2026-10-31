"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FaqSection from "@/components/FaqSection";
import { PRODUCTS, type StoreProduct } from "@/lib/products";

/* Pricing rules. Kits and the multi-document discount are business settings: change them here. */
const KIT_DISCOUNT = 0.15;
const MULTI_DISCOUNT = 0.1;
const MULTI_MIN = 3;
const UZS_RATE = 12000;

type Buyer = "abroad" | "uz";
type Step = "cart" | "form" | "sent";

const KITS: { id: string; items: string[] }[] = [
  { id: "llc", items: ["llc-formation", "tax-compliance-starter", "employment-contract"] },
  { id: "hire", items: ["employment-contract", "hr-policy-manual", "work-permit-pack"] },
  { id: "inv", items: ["nda-bilateral", "due-diligence-pack", "shareholder-agreement"] },
  { id: "sez", items: ["llc-formation", "sez-entry-pack", "tax-compliance-starter"] },
];

const CATEGORIES = ["Company Formation", "Legal", "HR", "Tax", "Compliance", "Finance"] as const;
const MONTHS: Record<string, number> = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

const byId = (id: string) => PRODUCTS.find((p) => p.id === id) as StoreProduct;
const sumOf = (ids: string[]) => ids.reduce((s, id) => s + byId(id).price, 0);
const kitPrice = (ids: string[]) => Math.round((sumOf(ids) * (1 - KIT_DISCOUNT)) / 10) * 10 - 1;
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function DocThumb({ word, size = "sm" }: { word: string; size?: "sm" | "md" }) {
  return (
    <div
      aria-hidden
      className={`${size === "sm" ? "w-11 p-[7px] gap-[4px]" : "w-[66px] p-[7px] gap-[5px]"} aspect-[1/1.414] bg-[#efeae3] rounded-[4px] shadow-[0_8px_18px_-8px_rgba(0,0,0,.7)] flex flex-col overflow-hidden shrink-0`}
    >
      <b className={`${size === "sm" ? "text-[6px]" : "text-[8.5px]"} font-semibold leading-tight text-[#1b1917] truncate`}>{word}</b>
      {[0, 1, 2, 3, 4].map((i) => (
        <i key={i} className={`block h-[2px] rounded-[1px] bg-[#cfc7bc] ${i % 3 === 2 ? "w-[70%]" : ""}`} />
      ))}
      <em className={`mt-auto self-end rounded-full border border-primary ${size === "sm" ? "w-2 h-2" : "w-3 h-3"}`} />
    </div>
  );
}

export default function StoreListingClient() {
  const t = useTranslations("StoreModern");
  const tP = useTranslations("StoreProducts");
  const locale = useLocale();

  const [cat, setCat] = useState<string>("all");
  const [q, setQ] = useState("");
  const [buyer, setBuyer] = useState<Buyer>("abroad");
  const [docs, setDocs] = useState<string[]>([]);
  const [kits, setKits] = useState<string[]>([]);
  const [step, setStep] = useState<Step>("cart");
  const [sheet, setSheet] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fields, setFields] = useState({ name: "", email: "", company: "", country: "", tin: "", phone: "" });
  const [fieldErr, setFieldErr] = useState<Record<string, string>>({});

  const numFmt = useMemo(() => new Intl.NumberFormat(locale === "uz" ? "uz-Latn" : locale), [locale]);
  const dateFmt = useMemo(() => new Intl.DateTimeFormat(locale === "uz" ? "uz-Latn" : locale, { month: "short", year: "numeric" }), [locale]);
  const fmt = (usd: number) =>
    buyer === "uz" ? `${numFmt.format(Math.round((usd * UZS_RATE) / 1000) * 1000)} UZS` : `$${numFmt.format(usd)}`;
  const fmtDate = (s: string) => {
    const [m, y] = s.split(" ");
    return MONTHS[m] !== undefined ? dateFmt.format(new Date(Number(y), MONTHS[m], 1)) : s;
  };

  const title = (id: string) => tP(`items.${id}.title`);
  const kitName = (id: string) => t(`kitNames.${id}`);
  const kitById = (id: string) => KITS.find((k) => k.id === id)!;
  const inOrder = (id: string) => docs.includes(id) || kits.some((k) => kitById(k).items.includes(id));
  const kitsOf = (id: string) => KITS.filter((k) => k.items.includes(id)).map((k) => kitName(k.id));

  const query = q.trim().toLowerCase();
  const visibleDocs = PRODUCTS.filter(
    (p) =>
      (cat === "all" || cat === "kits" || p.category === cat) &&
      (!query || `${title(p.id)} ${tP(`items.${p.id}.description`)}`.toLowerCase().includes(query)),
  );
  const visibleKits = KITS.filter(
    (k) => !query || `${kitName(k.id)} ${k.items.map(title).join(" ")}`.toLowerCase().includes(query),
  );

  const toggleDoc = (id: string) => {
    setStep("cart");
    if (docs.includes(id)) setDocs(docs.filter((d) => d !== id));
    else if (!inOrder(id)) setDocs([...docs, id]);
  };
  const toggleKit = (id: string) => {
    setStep("cart");
    if (kits.includes(id)) setKits(kits.filter((k) => k !== id));
    else {
      setKits([...kits, id]);
      setDocs(docs.filter((d) => !kitById(id).items.includes(d)));
    }
  };

  const singles = docs.reduce((s, id) => s + byId(id).price, 0);
  const multiOff = docs.length >= MULTI_MIN ? Math.round(singles * MULTI_DISCOUNT) : 0;
  const kitsTotal = kits.reduce((s, k) => s + kitPrice(kitById(k).items), 0);
  const total = kitsTotal + singles - multiOff;
  const allIds = [...kits.flatMap((k) => kitById(k).items), ...docs];
  const count = allIds.length;
  const pct = (n: number) => Math.round(n * 100);

  function validate() {
    const e: Record<string, string> = {};
    if (buyer === "uz") {
      if (!fields.company.trim()) e.company = t("order.required");
      if (!/^\d{9}$/.test(fields.tin.trim())) e.tin = t("order.tinInvalid");
      if (!fields.name.trim()) e.name = t("order.required");
    } else {
      if (!fields.name.trim()) e.name = t("order.required");
      if (!fields.country.trim()) e.country = t("order.required");
    }
    if (!isEmail(fields.email)) e.email = t("order.invalidEmail");
    setFieldErr(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "store",
          orderType: buyer === "uz" ? "legal" : "individual",
          firstName: fields.name.trim(),
          lastName: "",
          email: fields.email.trim(),
          phone: fields.phone.trim(),
          companyName: fields.company.trim(),
          inn: buyer === "uz" ? fields.tin.trim() : "",
          legalEmail: fields.email.trim(),
          legalPhone: fields.phone.trim(),
          contactPerson: fields.name.trim(),
          country: buyer === "uz" ? "Uzbekistan" : fields.country.trim(),
          selectedDocs: allIds,
          kits: kits.map((k) => kitById(k).id),
          discountUsd: multiOff + kits.reduce((s, k) => s + sumOf(kitById(k).items) - kitPrice(kitById(k).items), 0),
          totalPrice: total,
          currency: buyer === "uz" ? "UZS" : "USD",
          totalUzs: buyer === "uz" ? Math.round((total * UZS_RATE) / 1000) * 1000 : undefined,
          language: "",
          locale,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStep("sent");
    } catch {
      setError(t("order.error"));
    } finally {
      setSending(false);
    }
  }

  const input = "h-12 rounded-[12px] bg-background border border-border px-3.5 text-[16px] text-foreground-hi focus:outline-2 focus:outline-foreground-hi";
  const field = (key: keyof typeof fields, label: string, opts: { type?: string; auto?: string; hint?: string; optional?: boolean; inputMode?: "numeric" } = {}) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`o-${key}`} className="text-[14px] text-muted mt-2">
        {label}
        {opts.optional && <span className="text-muted-dark"> · {t("order.optional")}</span>}
      </label>
      <input
        id={`o-${key}`}
        type={opts.type ?? "text"}
        autoComplete={opts.auto}
        inputMode={opts.inputMode}
        placeholder={opts.hint}
        value={fields[key]}
        aria-invalid={!!fieldErr[key]}
        aria-describedby={fieldErr[key] ? `o-${key}-err` : undefined}
        onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
        className={input}
      />
      {fieldErr[key] && <p id={`o-${key}-err`} className="text-[13.5px] text-[#ff8a8a]">{fieldErr[key]}</p>}
    </div>
  );

  const payToggle = (compact = false) => (
    <div role="group" aria-label={t("currency")} className={`grid grid-cols-2 gap-1 p-1 rounded-[14px] ${compact ? "bg-surface" : "bg-background"}`}>
      {(["abroad", "uz"] as Buyer[]).map((b) => (
        <button
          key={b}
          type="button"
          aria-pressed={buyer === b}
          onClick={() => setBuyer(b)}
          className={`min-h-10 px-2 rounded-[11px] text-[13.5px] font-medium leading-tight cursor-pointer ${buyer === b ? "bg-surface-light text-foreground-hi" : "text-muted"}`}
        >
          {compact ? (b === "uz" ? "UZS" : "USD") : t(`order.${b}`)}
        </button>
      ))}
    </div>
  );

  const basket = (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-bold tracking-[-0.02em] text-foreground-hi">{t("order.title")}</h2>
        <button type="button" onClick={() => setSheet(false)} aria-label={t("order.close")} className="lg:hidden w-9 h-9 rounded-full bg-surface-light text-foreground-hi text-xl cursor-pointer">×</button>
      </div>
      {step === "sent" ? (
        <div className="mt-5" role="status">
          <p className="text-[22px] font-bold text-foreground-hi">{t("order.sentTitle")}</p>
          <p className="mt-2 text-[15px] text-muted">{t("order.sentText", { total: fmt(total) })}</p>
          <button type="button" onClick={() => { setDocs([]); setKits([]); setStep("cart"); }} className="m-btn m-btn-s w-full mt-5">{t("order.again")}</button>
        </div>
      ) : (
        <>
          <div className="mt-4">{payToggle()}</div>
          {step === "cart" && (
            count ? (
              <ul className="mt-4">
                {kits.map((k) => (
                  <li key={k} className="border-t border-border py-2.5">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-2.5 items-baseline font-semibold text-foreground-hi text-[15px]">
                      <span>{kitName(k)}</span>
                      <span className="tabular-nums">{fmt(kitPrice(kitById(k).items))}</span>
                      <button type="button" onClick={() => toggleKit(k)} aria-label={t("order.remove", { name: kitName(k) })} className="text-muted-dark text-lg leading-none cursor-pointer">×</button>
                    </div>
                    <ul className="mt-1 pl-3.5 text-[14px] text-muted">
                      {kitById(k).items.map((id) => <li key={id} className="py-0.5">{title(id)}</li>)}
                    </ul>
                  </li>
                ))}
                {docs.map((id) => (
                  <li key={id} className="border-t border-border py-2.5 grid grid-cols-[minmax(0,1fr)_auto_auto] gap-2.5 items-baseline text-[15px]">
                    <span>{title(id)}</span>
                    <span className="tabular-nums">{fmt(byId(id).price)}</span>
                    <button type="button" onClick={() => toggleDoc(id)} aria-label={t("order.remove", { name: title(id) })} className="text-muted-dark text-lg leading-none cursor-pointer">×</button>
                  </li>
                ))}
                {multiOff > 0 && (
                  <li className="border-t border-border py-2.5 flex justify-between text-[15px] text-[#8fd19e]">
                    <span>{t("order.multiLine", { percent: pct(MULTI_DISCOUNT) })}</span>
                    <span className="tabular-nums">−{fmt(multiOff)}</span>
                  </li>
                )}
              </ul>
            ) : (
              <p className="mt-4 text-[15px] text-muted">{t("order.empty")}</p>
            )
          )}
          {count > 0 && (
            <div className="flex justify-between items-baseline gap-3 mt-3 pt-3 border-t border-border">
              <span className="text-muted whitespace-nowrap">{t("docs", { count })}</span>
              <b className="m-fig text-[clamp(22px,2vw,30px)] whitespace-nowrap">{fmt(total)}</b>
            </div>
          )}
          {step === "cart" ? (
            <button type="button" disabled={!count} onClick={() => setStep("form")} className="m-btn m-btn-p w-full mt-4">{t("order.continue")}</button>
          ) : (
            <form onSubmit={submit} noValidate className="flex flex-col mt-2">
              {buyer === "uz" ? (
                <>
                  {field("company", t("order.companyName"), { auto: "organization" })}
                  {field("tin", t("order.tin"), { hint: t("order.tinHint"), inputMode: "numeric" })}
                  {field("name", t("order.contact"), { auto: "name" })}
                  {field("email", t("order.email"), { type: "email", auto: "email" })}
                  {field("phone", t("order.phone"), { type: "tel", auto: "tel", optional: true })}
                </>
              ) : (
                <>
                  {field("name", t("order.fullName"), { auto: "name" })}
                  {field("email", t("order.email"), { type: "email", auto: "email" })}
                  {field("company", t("order.company"), { auto: "organization", optional: true })}
                  {field("country", t("order.country"), { auto: "country-name" })}
                </>
              )}
              {error && <p role="alert" className="mt-4 text-[14px] text-[#ff8a8a]">{error}</p>}
              <button type="submit" disabled={sending} className="m-btn m-btn-p w-full mt-5">{sending ? t("order.sending") : t("order.send")}</button>
              <button type="button" onClick={() => setStep("cart")} className="h-10 mt-1 text-[14.5px] font-medium text-muted cursor-pointer">{t("order.back")}</button>
            </form>
          )}
          <p className="mt-3 text-[13.5px] leading-[1.5] text-muted">{buyer === "uz" ? t("order.noteUz") : t("order.noteAbroad")}</p>
        </>
      )}
    </div>
  );

  return (
    <>
      <section className="m-wrap pt-36 pb-10 lg:pt-40 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <h1 className="m-h1 text-[36px] lg:text-[clamp(40px,4vw,60px)] max-w-[16ch]">{t("title")}</h1>
          <p className="mt-5 text-[17px] leading-[1.6] text-muted max-w-[40em]">{t("lede", { percent: pct(KIT_DISCOUNT) })}</p>
        </div>
        <ol className="flex flex-wrap gap-x-2 gap-y-1 text-[15px] text-foreground-hi font-medium">
          {(t.raw("flow") as string[]).map((s, i, a) => (
            <li key={s} className="flex items-center gap-2">
              {s}
              {i < a.length - 1 && <span aria-hidden className="text-muted-dark">›</span>}
            </li>
          ))}
        </ol>
      </section>

      <div className="m-wrap grid gap-10 lg:grid-cols-[210px_minmax(0,1fr)_340px] items-start pb-10">
        <nav aria-label={t("all")} className="lg:sticky lg:top-28 flex flex-col gap-4 min-w-0">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("search")}
            aria-label={t("search")}
            className="h-12 rounded-full bg-surface border border-border px-4 text-[16px] text-foreground-hi focus:outline-2 focus:outline-foreground-hi"
          />
          <ul className="flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            {[{ id: "all", label: t("all"), n: PRODUCTS.length }, { id: "kits", label: t("kits"), n: KITS.length }, ...CATEGORIES.map((c) => ({ id: c as string, label: tP(`categories.${c}`), n: PRODUCTS.filter((p) => p.category === c).length }))].map((c, i) => (
              <li key={c.id} className={i === 2 ? "lg:mt-3" : ""}>
                <button
                  type="button"
                  aria-pressed={cat === c.id}
                  onClick={() => setCat(c.id)}
                  className={`w-full flex justify-between items-center gap-3 h-11 px-3.5 rounded-full lg:rounded-[12px] whitespace-nowrap text-[15px] cursor-pointer ${cat === c.id ? "bg-surface-light text-foreground-hi" : "max-lg:bg-surface text-foreground hover:text-foreground-hi"}`}
                >
                  {c.label}
                  <span className="text-muted tabular-nums">{c.n}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="max-w-[220px]">{payToggle(true)}</div>
        </nav>

        <div className="min-w-0 flex flex-col gap-14">
          {(cat === "all" || cat === "kits") && visibleKits.length > 0 && (
            <section>
              <h2 className="text-[24px] font-bold tracking-[-0.03em] text-foreground-hi">{t("kitsTitle")}</h2>
              <p className="mt-1.5 text-[15.5px] text-muted">{t("kitsLede", { percent: pct(KIT_DISCOUNT) })}</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {visibleKits.map((k) => {
                  const full = sumOf(k.items);
                  const price = kitPrice(k.items);
                  const added = kits.includes(k.id);
                  return (
                    <li key={k.id} className="m-tile p-5 lg:p-6 grid gap-5 grid-cols-[76px_minmax(0,1fr)] sm:grid-cols-[96px_minmax(0,1fr)_auto] items-center">
                      <div aria-hidden className="relative h-[110px]">
                        {k.items.map((id, i) => (
                          <div key={id} className="absolute top-1.5 left-3" style={{ transform: ["rotate(-8deg) translate(-10px,6px)", "rotate(-1deg)", "rotate(7deg) translate(12px,4px)"][i] }}>
                            <DocThumb word={t(`docWord.${byId(id).category}`)} size="md" />
                          </div>
                        ))}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[19px] font-bold tracking-[-0.02em] text-foreground-hi">{kitName(k.id)}</h3>
                        <p className="mt-1.5 text-[14.5px] leading-[1.5] text-muted">{k.items.map(title).join(" · ")}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1 flex items-center justify-between sm:justify-end gap-3 sm:gap-5 min-w-0">
                        <div className="sm:text-right">
                          <p className="m-fig text-[24px]">{fmt(price)}</p>
                          <p className="mt-1 text-[13.5px] text-muted whitespace-nowrap"><s className="text-muted-dark">{fmt(full)}</s> · {t("save", { amount: fmt(full - price) })}</p>
                        </div>
                        <button type="button" aria-pressed={added} onClick={() => toggleKit(k.id)} className={`m-btn shrink-0 max-sm:px-4 ${added ? "bg-[#2c2c2e] text-muted" : "m-btn-s"}`} style={{ height: 42 }}>
                          {added ? t("added") : t("addKit")}
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {cat !== "kits" && (
            <section>
              <h2 className="text-[24px] font-bold tracking-[-0.03em] text-foreground-hi">{cat === "all" ? t("allDocs") : tP(`categories.${cat}`)}</h2>
              <p className="mt-1.5 text-[15.5px] text-muted">{t("multiNote", { percent: pct(MULTI_DISCOUNT) })}</p>
              {visibleDocs.length === 0 ? (
                <p className="mt-6 text-muted">{t("noMatch", { q })}</p>
              ) : (
                <ul className="mt-5 border-b border-border">
                  {visibleDocs.map((p) => {
                    const added = inOrder(p.id);
                    const inKits = kitsOf(p.id);
                    return (
                      <li key={p.id} className="border-t border-border py-5 grid gap-x-4 sm:gap-x-5 gap-y-1 grid-cols-[44px_minmax(0,1fr)] sm:grid-cols-[52px_minmax(0,1fr)_auto_auto] items-center">
                        <div className="self-start sm:self-center"><DocThumb word={t(`docWord.${p.category}`)} /></div>
                        <div className="min-w-0">
                          <Link href={`/store/${p.id}`} className="text-[17.5px] font-semibold text-foreground-hi hover:underline underline-offset-4">{title(p.id)}</Link>
                          <p className="mt-1 text-[15px] text-muted">{tP(`items.${p.id}.description`)}</p>
                          <p className="mt-2 flex flex-wrap gap-x-3.5 gap-y-1 text-[13.5px] text-muted-dark">
                            <span>{tP(`categories.${p.category}`)}</span>
                            <span>{t("updated", { date: fmtDate(p.updated) })}</span>
                            {inKits.length > 0 && <span className="text-muted">{t("inKit", { kits: inKits.join(", ") })}</span>}
                          </p>
                        </div>
                        <div className="col-start-2 flex items-center justify-between gap-4 mt-2 sm:mt-0 sm:contents">
                          <span className="m-fig text-[22px] sm:text-right whitespace-nowrap">{fmt(p.price)}</span>
                          <button
                            type="button"
                            aria-pressed={added}
                            onClick={() => toggleDoc(p.id)}
                            disabled={added && !docs.includes(p.id)}
                            className={`m-btn ${added ? "bg-[#2c2c2e] text-muted" : "m-btn-s"}`}
                            style={{ height: 40, padding: "0 16px", minWidth: 92 }}
                          >
                            {added ? t("added") : t("add")}
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          )}
        </div>

        <aside aria-label={t("order.title")} className="hidden lg:block sticky top-28 m-tile p-6">{basket}</aside>
      </div>

      <section className="m-wrap pb-6">
        <div className="m-tile p-8 lg:p-10 flex flex-wrap justify-between items-center gap-6">
          <div>
            <h2 className="text-[26px] lg:text-[30px] font-bold tracking-[-0.03em] text-foreground-hi">{t("custom.title")}</h2>
            <p className="mt-2 text-muted max-w-[36em]">{t("custom.text")}</p>
          </div>
          <Link href="/contact" className="m-btn m-btn-p max-sm:w-full max-sm:whitespace-normal max-sm:h-auto max-sm:min-h-[50px] max-sm:py-3 text-center">{t("custom.button")}</Link>
        </div>
      </section>

      <FaqSection page="store" />

      <div className="lg:hidden h-20" aria-hidden />
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-background border-t border-border m-wrap pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] flex justify-between items-center gap-4">
        <div>
          <p className="m-fig text-[22px]">{fmt(total)}</p>
          <p className="text-[13.5px] text-muted mt-1">{t("docs", { count })}</p>
        </div>
        <button type="button" onClick={() => setSheet(true)} className="m-btn m-btn-p" style={{ height: 46 }}>{t("order.review")}</button>
      </div>
      {sheet && (
        <div className="lg:hidden fixed inset-0 z-[70] bg-black/60" onClick={() => setSheet(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t("order.title")}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto bg-surface rounded-t-[26px] px-5 pt-6 pb-[calc(24px+env(safe-area-inset-bottom))]"
          >
            {basket}
          </div>
        </div>
      )}
    </>
  );
}
