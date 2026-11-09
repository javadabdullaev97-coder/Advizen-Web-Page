"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Duotone } from "@/components/contact/ContactIcons";

const EMAIL = "info@advizenco.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Values are the expertise slugs; the contact API maps each one to a readable label.
const ADVISORY = ["tax", "legal", "finance", "hr", "funding", "ma-advisory", "due-diligence"];
const MANAGED = ["entity-management", "corporate", "eor", "payroll", "immigration", "virtual-office", "compliance"];

type Values = { name: string; company: string; email: string; phone: string; service: string; message: string };
type Checked = "name" | "email" | "message" | "consent";
type Status = "idle" | "sending" | "failed" | "sent";

const EMPTY: Values = { name: "", company: "", email: "", phone: "", service: "", message: "" };

function invalidFields(v: Values, consent: boolean): Checked[] {
  const bad: Checked[] = [];
  if (!v.name.trim()) bad.push("name");
  if (!EMAIL_RE.test(v.email.trim())) bad.push("email");
  if (!v.message.trim()) bad.push("message");
  if (!consent) bad.push("consent");
  return bad;
}

const inputBase =
  "w-full rounded-[var(--radius-inner)] border bg-white/[0.05] px-4 text-[16px] outline-none " +
  "transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#78787d] focus:bg-white/[0.07]";
const inputOk = "text-foreground-hi border-white/[0.12] focus:border-white/45 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]";
const inputBad = "text-foreground-hi border-[#ff7b88] shadow-[0_0_0_4px_rgba(255,123,136,0.1)]";

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-[14px] leading-[1.4] text-[#ff7b88]">
      <span aria-hidden className="mt-px grid h-4 w-4 flex-none place-items-center rounded-full bg-[#ff7b88] text-[11px] font-bold leading-none text-surface">!</span>
      {children}
    </p>
  );
}

function Banner({ children }: { children: ReactNode }) {
  return (
    <div role="alert" className="mt-7 flex items-start gap-3.5 rounded-[var(--radius-inner)] border border-[rgba(255,123,136,0.45)] bg-[rgba(255,123,136,0.1)] px-[18px] py-4 text-[15px]">
      <Duotone name="warning-circle" className="h-[22px] w-[22px] flex-none text-[#ff7b88]" />
      <div>{children}</div>
    </div>
  );
}

// One wrapper for every state, so the reveal mark set by HomeReveal survives a state change.
function Tile({ children }: { children: ReactNode }) {
  return <div data-reveal className="relative m-tile p-6 sm:p-10 lg:p-12">{children}</div>;
}

export default function ContactForm() {
  const t = useTranslations("ContactModern.form");
  const tSvc = useTranslations("ExpertiseModern");
  const locale = useLocale();

  const [values, setValues] = useState<Values>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);
  const refocusName = useRef(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "sent") doneRef.current?.focus();
    if (status === "idle" && refocusName.current) {
      refocusName.current = false;
      nameRef.current?.focus();
    }
  }, [status]);

  // Errors show only after the first submit attempt, then update as the person types.
  const bad = tried ? invalidFields(values, consent) : [];
  const isBad = (k: Checked) => bad.includes(k);

  const set = (k: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const svc = (slug: string) => (tSvc.raw(`services.${slug}`) as [string, string])[0];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setTried(true);
    const invalid = invalidFields(values, consent);
    if (invalid.length) {
      if (status === "failed") setStatus("idle");
      const first = { name: nameRef, email: emailRef, message: messageRef, consent: consentRef }[invalid[0]];
      first.current?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          phone: values.phone.trim(),
          service: values.service,
          message: values.message.trim(),
          locale,
          website: honeypot.current?.value ?? "",
          startedAt: startedAt.current,
          sentAt: Date.now(),
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      setStatus(res.ok && data?.ok === true ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  function again() {
    setValues(EMPTY);
    setConsent(false);
    setTried(false);
    startedAt.current = Date.now();
    refocusName.current = true;
    setStatus("idle");
  }

  if (status === "sent") {
    const firstName = values.name.trim().split(/\s+/)[0];
    return (
      <Tile>
        <div role="status" className="flex flex-col items-start py-6 home-rise">
          <span className="service-icon grid h-16 w-16 place-items-center rounded-[18px] text-[#7fd8a4]">
            <Duotone name="check-circle" className="h-8 w-8" />
          </span>
          <h2 ref={doneRef} tabIndex={-1} className="m-h2 mt-7 text-[28px] lg:text-[clamp(28px,2.6vw,36px)] outline-none">
            {t("sentTitle")}
          </h2>
          <p className="mt-3 max-w-[30em] text-[17px] leading-[1.55] text-foreground-2">
            {t("sentBody", { name: firstName, email: values.email.trim() })}
          </p>
          <p className="mt-3 max-w-[30em] text-[14px] text-muted">{t("sentNote")}</p>
          <button type="button" onClick={again} className="m-btn m-btn-g mt-8 max-sm:w-full">
            {t("again")}
          </button>
        </div>
      </Tile>
    );
  }

  const label = (id: string, text: string, optional = false) => (
    <label htmlFor={id} className="mb-2 text-[15px] font-semibold text-foreground-hi">
      {text}
      {optional && <small className="ml-1.5 text-[14px] font-medium text-muted">{t("optional")}</small>}
    </label>
  );

  return (
    <Tile>
      <form noValidate onSubmit={onSubmit} aria-busy={status === "sending"}>
        <h2 className="m-h2 text-[28px] lg:text-[clamp(28px,2.6vw,36px)]">{t("title")}</h2>
        <p className="mt-2.5 text-[16px] leading-[1.5] text-foreground-2">{t("sub")}</p>

        {status === "failed" && (
          <Banner>
            <b className="block font-semibold text-foreground-hi">{t("failedTitle")}</b>
            <span className="text-foreground-2">
              {t.rich("failedBody", {
                email: (chunks) => (
                  <a href={`mailto:${EMAIL}`} className="text-foreground-hi underline underline-offset-[3px]">{chunks}</a>
                ),
              })}
            </span>
          </Banner>
        )}
        {bad.length > 0 && (
          <Banner>
            <b className="block font-semibold text-foreground-hi">{t("summary", { count: bad.length })}</b>
          </Banner>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
          <div className="flex min-w-0 flex-col">
            {label("f-name", t("name"))}
            <input
              ref={nameRef}
              id="f-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
              aria-invalid={isBad("name")}
              aria-describedby={isBad("name") ? "e-name" : undefined}
              className={`${inputBase} h-[52px] ${isBad("name") ? inputBad : inputOk}`}
            />
            {isBad("name") && <FieldError id="e-name">{t("errors.name")}</FieldError>}
          </div>

          <div className="flex min-w-0 flex-col">
            {label("f-company", t("company"), true)}
            <input
              id="f-company"
              name="company"
              autoComplete="organization"
              value={values.company}
              onChange={set("company")}
              className={`${inputBase} h-[52px] ${inputOk}`}
            />
          </div>

          <div className="flex min-w-0 flex-col">
            {label("f-email", t("email"))}
            <input
              ref={emailRef}
              id="f-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder={t("emailPlaceholder")}
              value={values.email}
              onChange={set("email")}
              aria-invalid={isBad("email")}
              aria-describedby={isBad("email") ? "e-email" : undefined}
              className={`${inputBase} h-[52px] ${isBad("email") ? inputBad : inputOk}`}
            />
            {isBad("email") && <FieldError id="e-email">{t("errors.email")}</FieldError>}
          </div>

          <div className="flex min-w-0 flex-col">
            {label("f-phone", t("phone"), true)}
            <input
              id="f-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder={t("phonePlaceholder")}
              value={values.phone}
              onChange={set("phone")}
              className={`${inputBase} h-[52px] ${inputOk}`}
            />
          </div>

          <div className="flex min-w-0 flex-col sm:col-span-2">
            {label("f-service", t("service"), true)}
            <div className="relative">
              <select
                id="f-service"
                name="service"
                value={values.service}
                onChange={set("service")}
                className={`${inputBase} h-[52px] border-white/[0.12] focus:border-white/45 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)] cursor-pointer appearance-none pr-11 [&_optgroup]:bg-surface [&_option]:bg-surface [&_option]:text-foreground-hi ${values.service ? "text-foreground-hi" : "text-[#8e8e93]"}`}
              >
                <option value="">{t("selectService")}</option>
                <optgroup label={tSvc("advisory.title")}>
                  {ADVISORY.map((s) => <option key={s} value={s}>{svc(s)}</option>)}
                </optgroup>
                <optgroup label={tSvc("managed.title")}>
                  {MANAGED.map((s) => <option key={s} value={s}>{svc(s)}</option>)}
                </optgroup>
                <option value="other">{t("serviceOther")}</option>
              </select>
              <span aria-hidden className="pointer-events-none absolute right-5 top-1/2 h-[7px] w-[7px] -translate-y-[70%] rotate-45 border-b-[1.6px] border-r-[1.6px] border-foreground-2" />
            </div>
          </div>

          <div className="flex min-w-0 flex-col sm:col-span-2">
            {label("f-message", t("message"))}
            <textarea
              ref={messageRef}
              id="f-message"
              name="message"
              rows={5}
              placeholder={t("messagePlaceholder")}
              value={values.message}
              onChange={set("message")}
              aria-invalid={isBad("message")}
              aria-describedby={isBad("message") ? "e-message" : undefined}
              className={`${inputBase} min-h-[148px] resize-y py-3.5 leading-[1.5] ${isBad("message") ? inputBad : inputOk}`}
            />
            {isBad("message") && <FieldError id="e-message">{t("errors.message")}</FieldError>}
          </div>
        </div>

        {/* Left empty by people; bots that fill every field are dropped by the API. */}
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="f-website">{t("website")}</label>
          <input ref={honeypot} id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>

        <div className="mt-7">
          <label htmlFor="f-consent" className="grid cursor-pointer grid-cols-[22px_minmax(0,1fr)] items-start gap-3 text-[15px] leading-[1.5] text-foreground-2">
            <span className="relative mt-px h-[22px] w-[22px]">
              <input
                ref={consentRef}
                id="f-consent"
                name="consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                aria-invalid={isBad("consent")}
                aria-describedby={isBad("consent") ? "e-consent" : undefined}
                className="peer absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
              />
              <span
                aria-hidden
                className={`grid h-[22px] w-[22px] place-items-center rounded-[7px] border-[1.5px] transition-colors duration-150 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-white/70 ${
                  consent ? "border-foreground-hi bg-foreground-hi" : isBad("consent") ? "border-[#ff7b88]" : "border-white/30"
                }`}
              >
                <svg viewBox="0 0 12 10" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-[13px] w-[13px] transition-opacity duration-150 ${consent ? "opacity-100" : "opacity-0"}`}>
                  <path d="M1.5 5.2 4.4 8 10.5 1.8" />
                </svg>
              </span>
            </span>
            <span>
              {t.rich("consent", {
                privacy: (chunks) => (
                  <Link href="/privacy" className="text-foreground-hi underline decoration-white/35 underline-offset-[3px]">{chunks}</Link>
                ),
                terms: (chunks) => (
                  <Link href="/terms" className="text-foreground-hi underline decoration-white/35 underline-offset-[3px]">{chunks}</Link>
                ),
              })}
            </span>
          </label>
          {isBad("consent") && (
            <div className="ml-[34px]">
              <FieldError id="e-consent">{t("errors.consent")}</FieldError>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <button type="submit" disabled={status === "sending"} className="m-btn m-btn-p max-sm:w-full disabled:cursor-progress! disabled:opacity-70!">
            {status === "sending" ? (
              <>
                <span aria-hidden className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white motion-safe:animate-spin" />
                {t("sending")}
              </>
            ) : (
              t("send")
            )}
          </button>
          <span className="text-[14px] text-muted">{t("required")}</span>
        </div>
      </form>
    </Tile>
  );
}
