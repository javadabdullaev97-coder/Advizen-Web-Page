import Image from "next/image";
import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { SectionHead } from "@/components/home/SectionHead";
import HomeReveal from "@/components/home/HomeReveal";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/contact/ContactForm";
import { CHANNEL_ICONS, Duotone } from "@/components/contact/ContactIcons";

const TELEGRAM = "https://t.me/advizen";
const WHATSAPP = "https://wa.me/message/EKU3HEOTSK43O1";
const PHONE = "+998 33 488 48 88";
const EMAIL = "info@advizenco.com";
const STEP_ICONS = ["calendar-check", "file-text", "handshake"];

type Step = { title: string; text: string };

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

export default function ContactContent() {
  const t = useTranslations("ContactModern");
  const steps = t.raw("next.steps") as Step[];

  const ways = [
    { icon: CHANNEL_ICONS.telegram, title: "Telegram", sub: "@advizen", href: TELEGRAM, external: true },
    { icon: CHANNEL_ICONS.whatsapp, title: "WhatsApp", sub: PHONE, href: WHATSAPP, external: true },
    { icon: CHANNEL_ICONS.phone, title: t("side.phone"), sub: PHONE, href: "tel:+998334884888" },
    { icon: CHANNEL_ICONS.email, title: t("side.email"), sub: EMAIL, href: `mailto:${EMAIL}` },
  ];
  const facts = [
    { icon: "clock", label: t("side.hours"), value: t("side.hoursValue") },
    { icon: "map-pin", label: t("side.location"), value: t("side.locationValue") },
    { icon: "translate", label: t("side.languages"), value: t("side.languagesValue") },
  ];

  return (
    <>
      {/* The photo fades into the page; on phones it sits above the heading. */}
      <section className="relative isolate flex items-end min-h-[520px] overflow-hidden pt-20 max-sm:block max-sm:min-h-0">
        <div className="absolute inset-0 -z-10 overflow-hidden max-sm:relative max-sm:z-0 max-sm:h-[240px]">
          <Image
            src="/Hero and CTA images/Contact Hero.webp"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[85%_50%] max-sm:object-[78%_50%] home-settle"
          />
          <div aria-hidden className="absolute inset-0 expertise-hero-shade" />
        </div>
        <div className="relative m-wrap w-full pb-[72px] max-sm:-mt-[72px] max-sm:pb-12">
          <h1 className="m-h1 text-[44px] sm:text-[56px] lg:text-[clamp(56px,5.8vw,84px)] max-w-[13ch] home-rise">{t("hero.title")}</h1>
          <p className="mt-[22px] text-[18px] lg:text-[20px] leading-[1.5] text-foreground max-w-[32em] text-pretty home-rise" style={delay(0.08)}>
            {t("hero.lede")}
          </p>
        </div>
      </section>

      <section className="m-wrap pt-6">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,.8fr)] items-start">
          <ContactForm />

          <aside aria-label={t("side.label")} data-reveal style={delay(0.08)} className="lg:sticky lg:top-28 lg:pt-14">
            <p className="mb-2 text-[14px] text-muted">{t("side.direct")}</p>
            <ul className="border-b border-line">
              {ways.map((w) => (
                <li key={w.href} className="border-t border-line">
                  <a
                    href={w.href}
                    {...(w.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group grid grid-cols-[40px_minmax(0,1fr)_12px] items-center gap-4 py-4 transition-transform duration-150 active:scale-[.99]"
                  >
                    <span className="w-10 h-10 rounded-full bg-white/[0.08] grid place-items-center text-foreground-hi transition-colors duration-200 group-hover:bg-white/[0.14]">
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px]" aria-hidden>{w.icon}</svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[17px] font-semibold text-foreground-hi">{w.title}</span>
                      <span className="block text-[15px] text-foreground-2 [overflow-wrap:anywhere]">{w.sub}</span>
                    </span>
                    <span aria-hidden className="w-2 h-2 border-r-[1.6px] border-t-[1.6px] border-muted rotate-45 transition-transform duration-200 group-hover:translate-x-[3px] group-hover:border-foreground-hi" />
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-8 grid gap-[18px]">
              {facts.map((f) => (
                <li key={f.icon} className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-4">
                  <span className="w-10 h-10 grid place-items-center text-muted">
                    <Duotone name={f.icon} className="w-[22px] h-[22px]" />
                  </span>
                  <span>
                    <span className="block text-[14px] text-muted">{f.label}</span>
                    <span className="block text-[16px] text-foreground-hi">{f.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="m-wrap pt-24 lg:pt-32">
        <SectionHead title={t("next.title")} lede={t("next.lede")} />
        <ol data-reveal className="grid gap-4 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-3.5 rounded-[var(--radius-inner)] bg-surface p-7 lg:min-h-[220px]">
              <div className="flex items-start justify-between">
                <span className="service-icon w-[52px] h-[52px] rounded-[15px] grid place-items-center text-foreground-hi">
                  <Duotone name={STEP_ICONS[i]} />
                </span>
                <span aria-hidden className="text-[14px] text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-2 lg:mt-auto text-[20px] font-semibold tracking-[-0.015em] text-foreground-hi">{s.title}</h3>
              <p className="-mt-1.5 text-[15px] leading-[1.5] text-foreground-2 max-w-[26em]">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <FaqSection page="contact" />
      <HomeReveal />
    </>
  );
}
