import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getArticleBySlug } from "./articles";
import { servicesData, getServiceBySlug } from "./services";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";
const ORG_NAME = "Advizen Consulting";
const ORG_LOGO = `${SITE_URL}/Advizen%20Logo/android-chrome-512x512.png`;
const OG_IMAGE = `${SITE_URL}/Advizen%20Logo/og.jpg`;
const ORG_DESCRIPTION =
  "Tax, legal, accounting and HR advisory for companies entering and operating in Uzbekistan, coordinated by one partner, in English, Russian or Uzbek.";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  uz: "uz_UZ",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: ORG_NAME,
  alternateName: "Advizen",
  description: ORG_DESCRIPTION,
  inLanguage: ["en", "ru", "uz"],
  publisher: { "@id": `${SITE_URL}#organization` },
};

// Only facts the site itself shows: no street address, the firm works from Tashkent.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#organization`,
  name: ORG_NAME,
  alternateName: "Advizen",
  legalName: "Advizen Consulting LLC",
  description: ORG_DESCRIPTION,
  url: SITE_URL,
  logo: ORG_LOGO,
  image: OG_IMAGE,
  telephone: "+998334884888",
  email: "info@advizenco.com",
  address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
  areaServed: [{ "@type": "Country", name: "Uzbekistan" }],
  knowsLanguage: ["en", "ru", "uz"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+998334884888",
    email: "info@advizenco.com",
    availableLanguage: ["English", "Russian", "Uzbek"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  },
  sameAs: [
    "https://t.me/advizen",
    "https://uz.linkedin.com/company/advizen-consulting",
    "https://www.instagram.com/advizen_consulting/",
    "https://x.com/advizen_consult",
    "https://www.youtube.com/@AdvizenConsulting",
    "https://www.facebook.com/people/Advizen-Consulting/61577742804426/",
  ],
};

function safeLocale(locale: string): Locale {
  return hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
}

function homeUrl(locale: Locale) {
  return locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
}

export function articleUrl(slug: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}/insights/${slug}`;
}

function articleImage(image: string | undefined) {
  if (!image) return ORG_LOGO;
  return image.startsWith("http") ? image : `${SITE_URL}${encodeURI(image)}`;
}

async function articleTitle(slug: string, locale: Locale) {
  const t = await getTranslations({ locale, namespace: "Publications" });
  return t(`items.${slug}.title`);
}

export async function articleMetadata(slug: string, locale: string): Promise<Metadata> {
  const safe = safeLocale(locale);
  const article = getArticleBySlug(slug, safe);
  if (!article) return {};

  const url = articleUrl(slug, safe);
  const image = articleImage(article.image);
  const heading = await articleTitle(slug, safe);
  // Long headlines are cut off in results, so the firm name is added only when it fits.
  const title = heading.length + ORG_NAME.length + 3 <= 60 ? `${heading} | ${ORG_NAME}` : heading;
  const description = article.subtitle || article.description;

  const languages = Object.fromEntries(
    routing.locales.map((l: Locale) => [l, articleUrl(slug, l)]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": articleUrl(slug, routing.defaultLocale) },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      siteName: ORG_NAME,
      locale: OG_LOCALE[safe],
      images: [{ url: image, alt: heading }],
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export async function articleJsonLd(slug: string, locale: string) {
  const safe = safeLocale(locale);
  const article = getArticleBySlug(slug, safe);
  if (!article) return null;

  const url = articleUrl(slug, safe);
  const image = articleImage(article.image);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: await articleTitle(slug, safe),
    description: article.subtitle || article.description,
    image: [image],
    datePublished: article.date,
    dateModified: article.date,
    author: { "@id": `${SITE_URL}#organization` },
    publisher: { "@id": `${SITE_URL}#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: safe,
    articleSection: article.category,
    keywords: [article.category, article.tag, "Uzbekistan", "Tashkent"].filter(Boolean),
  };
}

export function faqJsonLd(slug: string, locale: string) {
  const article = getArticleBySlug(slug, locale);
  if (!article?.faq?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function howToJsonLd(slug: string, locale: string) {
  const article = getArticleBySlug(slug, locale);
  if (!article?.howTo) return null;
  const { name, description, steps } = article.howTo;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

const PAGE_PATHS = {
  expertise: "/expertise",
  contact: "/contact",
  insights: "/insights",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  disclaimer: "/disclaimer",
} as const;

export type PageKey = keyof typeof PAGE_PATHS;
export { OG_IMAGE };

export async function breadcrumbJsonLd(slug: string, locale: string) {
  const safe = safeLocale(locale);
  if (!getArticleBySlug(slug, safe)) return null;
  const labels = BREADCRUMB_LABELS[safe];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home,     item: homeUrl(safe) },
      { "@type": "ListItem", position: 2, name: labels.insights, item: `${homeUrl(safe)}/insights` },
      { "@type": "ListItem", position: 3, name: await articleTitle(slug, safe), item: articleUrl(slug, safe) },
    ],
  };
}

const BREADCRUMB_LABELS: Record<Locale, { home: string; expertise: string; insights: string } & Partial<Record<PageKey, string>>> = {
  en: {
    home: "Home",
    expertise: "Expertise",
    contact: "Contact",
    insights: "Insights",
  },
  ru: {
    home: "Главная",
    expertise: "Услуги",
    contact: "Контакты",
    insights: "Аналитика",
  },
  uz: {
    home: "Bosh sahifa",
    expertise: "Xizmatlar",
    contact: "Bogʻlanish",
    insights: "Tahlillar",
  },
};

// The listing names each service and links to its page; the full Service entity lives there.
export async function expertiseServicesJsonLd(locale: string) {
  const safe = safeLocale(locale);
  const t = await getTranslations({ locale: safe, namespace: "Services" });
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t(`${s.slug}.title`),
      url: `${homeUrl(safe)}/expertise/${s.slug}`,
    })),
  };
}

export function pageBreadcrumbJsonLd(key: PageKey, locale: string) {
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const labels = BREADCRUMB_LABELS[safe];
  const homeUrl = safe === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${safe}`;
  const pageLabel = labels[key];
  if (!pageLabel) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home, item: homeUrl },
      { "@type": "ListItem", position: 2, name: pageLabel,   item: pagePath(key, safe) },
    ],
  };
}

async function serviceCopy(slug: string, locale: Locale) {
  const t = await getTranslations({ locale, namespace: "Services" });
  return {
    title: t(`${slug}.title`),
    // Operations services split their description in two parts.
    description: t.has(`${slug}.description`)
      ? t(`${slug}.description`)
      : `${t(`${slug}.description1`)} ${t(`${slug}.description2`)}`,
    capabilities: t.raw(`${slug}.capabilities`) as string[],
  };
}

// Mid-sentence in Uzbek an ordinary name starts lowercase ("soliq konsaltingi"),
// but names with other capitals keep them ("M&A konsaltingi", "Employer of Record").
function midSentence(title: string) {
  return /^\p{Lu}[^\p{Lu}]*$/u.test(title) ? title[0].toLowerCase() + title.slice(1) : title;
}

const SERVICE_TITLE: Record<Locale, (title: string) => string> = {
  en: (title) => `${title} in Uzbekistan | ${ORG_NAME}`,
  ru: (title) => `${title} в Узбекистане | ${ORG_NAME}`,
  uz: (title) => `Oʻzbekistonda ${midSentence(title)} | ${ORG_NAME}`,
};

const SERVICE_LEAD: Record<Locale, (title: string) => string> = {
  en: (title) => `${title} in Uzbekistan for foreign and local companies: `,
  ru: (title) => `${title} в Узбекистане для иностранных и местных компаний: `,
  uz: (title) => `Oʻzbekistondagi xorijiy va mahalliy kompaniyalar uchun ${midSentence(title)}: `,
};

// A factual description from the localized capability list, kept within what results show.
function serviceDescription(locale: Locale, title: string, capabilities: string[]) {
  const text = SERVICE_LEAD[locale](title);
  const parts: string[] = [];
  for (const cap of capabilities) {
    const next = [...parts, cap.charAt(0).toLowerCase() + cap.slice(1)].join(", ");
    if ((text + next).length > 155) break;
    parts.push(cap.charAt(0).toLowerCase() + cap.slice(1));
  }
  return `${text}${parts.join(", ")}.`;
}

export async function serviceJsonLd(slug: string, locale: string) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const safe = safeLocale(locale);
  const copy = await serviceCopy(slug, safe);
  const serviceUrl = `${homeUrl(safe)}/expertise/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: copy.title,
    description: copy.description,
    serviceType: copy.title,
    url: serviceUrl,
    inLanguage: safe,
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: { "@type": "Country", name: "Uzbekistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: copy.title,
      itemListElement: copy.capabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: cap },
      })),
    },
  };
}

export async function servicePageBreadcrumbJsonLd(slug: string, locale: string) {
  if (!getServiceBySlug(slug)) return null;
  const safe = safeLocale(locale);
  const { title } = await serviceCopy(slug, safe);
  const labels = BREADCRUMB_LABELS[safe];
  const expertiseUrl = `${homeUrl(safe)}/expertise`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home,      item: homeUrl(safe) },
      { "@type": "ListItem", position: 2, name: labels.expertise, item: expertiseUrl },
      { "@type": "ListItem", position: 3, name: title,            item: `${expertiseUrl}/${slug}` },
    ],
  };
}

export async function servicePageMetadata(slug: string, locale: string): Promise<Metadata> {
  if (!getServiceBySlug(slug)) return {};
  const safe = safeLocale(locale);
  const copy = await serviceCopy(slug, safe);
  const canonical = `${homeUrl(safe)}/expertise/${slug}`;
  const title = SERVICE_TITLE[safe](copy.title);
  const description = serviceDescription(safe, copy.title, copy.capabilities);
  const languages = Object.fromEntries(
    routing.locales.map((l: Locale) => [l, `${homeUrl(l)}/expertise/${slug}`]),
  );
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": `${SITE_URL}/expertise/${slug}` },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: ORG_NAME,
      locale: OG_LOCALE[safe],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: copy.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

const PAGE_CONTENT: Record<PageKey, Record<Locale, { title: string; description: string }>> = {
  expertise: {
    en: {
      title: "Tax, Legal, Accounting and HR Services in Uzbekistan | Advizen",
      description:
        "14 services for companies in Uzbekistan: tax, legal, accounting, HR, funding, M&A and due diligence, plus entity management, EOR, payroll and work permits.",
    },
    ru: {
      title: "Налоговые, юридические, бухгалтерские и HR-услуги в Узбекистане | Advizen",
      description:
        "14 услуг для компаний в Узбекистане: налоги, право, бухгалтерия, HR, финансирование, M&A, due diligence, управление компанией, EOR, зарплата и разрешения.",
    },
    uz: {
      title: "Oʻzbekistonda soliq, yuridik, buxgalteriya va HR xizmatlari | Advizen",
      description:
        "Oʻzbekistondagi kompaniyalar uchun 14 xizmat: soliq, huquq, buxgalteriya, HR, moliyalashtirish, M&A, due diligence, EOR, ish haqi va ish ruxsatnomalari.",
    },
  },
  contact: {
    en: {
      title: "Contact Advizen Consulting | Business Advisory in Tashkent, Uzbekistan",
      description:
        "Get in touch with Advizen Consulting in Tashkent. Discuss tax, legal, finance, HR, and corporate advisory needs in Uzbekistan and Central Asia.",
    },
    ru: {
      title: "Контакты Advizen Consulting | Бизнес-консалтинг в Ташкенте",
      description:
        "Свяжитесь с Advizen Consulting в Ташкенте. Обсудите налоговое, правовое, финансовое, HR и корпоративное консультирование в Узбекистане и Центральной Азии.",
    },
    uz: {
      title: "Advizen Consulting bilan bogʻlanish | Toshkentda biznes konsalting",
      description:
        "Toshkentda Advizen Consulting bilan bogʻlaning. Oʻzbekiston va Markaziy Osiyoda soliq, huquq, moliya, HR va korporativ konsalting masalalarini muhokama qiling.",
    },
  },
  insights: {
    en: {
      title: "Insights on Uzbekistan Business, Tax & Legal Updates | Advizen",
      description:
        "Expert analysis on tax, legal, finance, HR and regulatory developments in Uzbekistan and Central Asia from the Advizen Consulting advisory team.",
    },
    ru: {
      title: "Аналитика по бизнесу, налогам и праву Узбекистана | Advizen Consulting",
      description:
        "Экспертная аналитика по налогам, праву, финансам, HR и регуляторным изменениям в Узбекистане и Центральной Азии от команды Advizen Consulting.",
    },
    uz: {
      title: "Oʻzbekiston biznesi, soliqlari va huquqi boʻyicha tahlillar | Advizen Consulting",
      description:
        "Oʻzbekiston va Markaziy Osiyoda soliq, huquq, moliya, HR va tartibga solish oʻzgarishlari boʻyicha Advizen Consulting jamoasidan ekspert tahlillari.",
    },
  },
  privacy: {
    en: {
      title: "Privacy policy | Advizen Consulting",
      description:
        "How Advizen Consulting collects, uses and protects personal data in compliance with applicable privacy laws in Uzbekistan.",
    },
    ru: {
      title: "Политика конфиденциальности | Advizen Consulting",
      description:
        "Как Advizen Consulting собирает, использует и защищает персональные данные в соответствии с законодательством Узбекистана.",
    },
    uz: {
      title: "Maxfiylik siyosati | Advizen Consulting",
      description:
        "Advizen Consulting Oʻzbekiston qonunlariga muvofiq shaxsiy maʼlumotlarni qanday yigʻishi, ishlatishi va himoya qilishini bilib oling.",
    },
  },
  terms: {
    en: {
      title: "Terms of use | Advizen Consulting",
      description:
        "Terms governing the use of advizenco.com, the website of Advizen Consulting.",
    },
    ru: {
      title: "Условия использования | Advizen Consulting",
      description:
        "Условия использования advizenco.com — сайта Advizen Consulting.",
    },
    uz: {
      title: "Foydalanish shartlari | Advizen Consulting",
      description:
        "Advizen Consulting sayti advizenco.com dan foydalanish shartlari.",
    },
  },
  cookies: {
    en: {
      title: "Cookie policy | Advizen Consulting",
      description:
        "How Advizen Consulting uses cookies and similar technologies on advizenco.com.",
    },
    ru: {
      title: "Политика использования cookie | Advizen Consulting",
      description:
        "Как Advizen Consulting использует cookie-файлы и аналогичные технологии на сайте advizenco.com.",
    },
    uz: {
      title: "Cookie siyosati | Advizen Consulting",
      description:
        "Advizen Consulting advizenco.com saytida cookie va shunga oʻxshash texnologiyalardan qanday foydalanadi.",
    },
  },
  disclaimer: {
    en: {
      title: "Disclaimer | Advizen Consulting",
      description:
        "Legal disclaimer regarding the content and services provided by Advizen Consulting on advizenco.com.",
    },
    ru: {
      title: "Дисклеймер | Advizen Consulting",
      description:
        "Юридический дисклеймер о контенте и услугах Advizen Consulting на сайте advizenco.com.",
    },
    uz: {
      title: "Yuridik ogohlantirish | Advizen Consulting",
      description:
        "Advizen Consulting tomonidan advizenco.com saytida taqdim etilgan kontent va xizmatlar haqida yuridik ogohlantirish.",
    },
  },
};

function pagePath(key: PageKey, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${PAGE_PATHS[key]}`;
}

export function pageMetadata(key: PageKey, locale: string): Metadata {
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const c = PAGE_CONTENT[key][safe];
  const canonical = pagePath(key, safe);
  const languages = Object.fromEntries(
    routing.locales.map((l: Locale) => [l, pagePath(key, l)]),
  );

  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": pagePath(key, routing.defaultLocale) },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      type: "website",
      url: canonical,
      siteName: ORG_NAME,
      locale: OG_LOCALE[safe],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ORG_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: [OG_IMAGE],
    },
  };
}
