import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getArticleBySlug } from "./articles";
import { servicesData, getServiceBySlug } from "./services";
import { PRODUCTS, getProductById } from "./products";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";
const ORG_NAME = "Advizen Consulting";
const ORG_LOGO = `${SITE_URL}/Advizen Logo/android-chrome-512x512.png`;
const OG_IMAGE = `${SITE_URL}/Advizen Logo/og.jpg`;

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  uz: "uz_UZ",
};

const SERVICE_CATALOG = [
  { name: "Tax Consulting", description: "Tax planning, transfer pricing, tax due diligence and dispute resolution under Uzbekistan tax legislation." },
  { name: "Legal Advisory", description: "Corporate, commercial, M&A, regulatory and compliance counsel for businesses operating in Uzbekistan and Central Asia." },
  { name: "Accounting Services", description: "Full-cycle bookkeeping, financial reporting, IFRS conversion and statutory accounting in line with Uzbekistan standards." },
  { name: "HR Services", description: "Payroll, social contributions, employment contracts, expat work permits and HR policy design for Uzbekistan." },
  { name: "Funding Advisory", description: "Capital raising, investor matchmaking, financial modelling and funding strategy across Central Asia." },
  { name: "M&A Advisory", description: "Buy-side, sell-side and merger advisory including valuation, structuring and post-deal integration in Uzbekistan." },
  { name: "Due Diligence", description: "Legal, tax, financial and operational due diligence for inbound investors and acquirers." },
  { name: "Entity Management", description: "Company formation, corporate secretarial, statutory filings and ongoing entity governance services." },
  { name: "Employer of Record", description: "EOR services across Uzbekistan, Kazakhstan and Kyrgyzstan — hire, payroll and compliance without setting up a local entity." },
  { name: "Corporate Services", description: "Registered office, virtual office, nominee directors and ongoing corporate housekeeping for foreign-owned entities." },
];

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: ORG_NAME,
  alternateName: "Advizen",
  description:
    "Premier business consulting firm in Uzbekistan offering integrated tax, legal, finance, accounting, and HR services across Central Asia.",
  inLanguage: ["en", "ru", "uz"],
  publisher: { "@id": `${SITE_URL}#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/insights?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "ProfessionalService", "LocalBusiness"],
  "@id": `${SITE_URL}#organization`,
  name: ORG_NAME,
  alternateName: "Advizen",
  legalName: "Advizen Consulting LLC",
  description:
    "Premier business consulting firm in Uzbekistan offering integrated tax, legal, finance, accounting, and HR services across Central Asia.",
  slogan: "A single point of contact for your entire operation.",
  url: SITE_URL,
  logo: ORG_LOGO,
  image: ORG_LOGO,
  telephone: "+998334884888",
  email: "info@advizenco.com",
  foundingDate: "2016",
  foundingLocation: {
    "@type": "Place",
    name: "Tashkent, Uzbekistan",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mirzo Ulugbek district",
    addressLocality: "Tashkent",
    addressRegion: "Tashkent",
    postalCode: "100060",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2995,
    longitude: 69.2401,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "UZS, USD",
  paymentAccepted: "Cash, Bank Transfer",
  areaServed: [
    { "@type": "Country", name: "Uzbekistan" },
    { "@type": "Country", name: "Kazakhstan" },
    { "@type": "Country", name: "Kyrgyzstan" },
    { "@type": "Place", name: "Central Asia" },
  ],
  knowsLanguage: ["en", "ru", "uz"],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advisory Services",
    itemListElement: SERVICE_CATALOG.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": `${SITE_URL}#organization` },
        areaServed: { "@type": "Place", name: "Central Asia" },
      },
    })),
  },
  sameAs: [
    "https://uz.linkedin.com/company/advizen-consulting",
    "https://www.instagram.com/advizen_consulting/",
    "https://x.com/advizen_consult",
    "https://www.youtube.com/@AdvizenConsulting",
    "https://www.facebook.com/people/Advizen-Consulting/61577742804426/",
  ],
};

function articleUrl(slug: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}/insights/${slug}`;
}

function articleImage(image: string | undefined) {
  if (!image) return `${SITE_URL}/Advizen Logo/android-chrome-512x512.png`;
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}

export function articleMetadata(slug: string, locale: string): Metadata {
  const article = getArticleBySlug(slug, locale);
  if (!article) return {};

  const url = articleUrl(slug, locale);
  const image = articleImage(article.image);
  const title = `${article.title} | ${ORG_NAME}`;
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
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
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

export function articleJsonLd(slug: string, locale: string) {
  const article = getArticleBySlug(slug, locale);
  if (!article) return null;

  const url = articleUrl(slug, locale);
  const image = articleImage(article.image);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subtitle || article.description,
    image: [image],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: article.author || ORG_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: ORG_LOGO,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: locale,
    articleSection: article.category,
    keywords: [article.category, article.tag, "Uzbekistan", "Tashkent"].filter(Boolean),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "p:first-of-type"],
    },
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
  store: "/store",
  contact: "/contact",
  insights: "/insights",
  privacy: "/privacy",
  terms: "/terms",
  "terms-of-sale": "/terms-of-sale",
  cookies: "/cookies",
  disclaimer: "/disclaimer",
} as const;

export type PageKey = keyof typeof PAGE_PATHS;
export { OG_IMAGE };

export function storeJsonLd() {
  const storeUrl = `${SITE_URL}/store`;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Business Document Templates — Advizen Consulting",
    description: "Lawyer-drafted business document templates for companies operating in Uzbekistan.",
    url: storeUrl,
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        "@id": `${SITE_URL}/store/${p.id}#product`,
        name: p.nameEn,
        description: p.descriptionEn,
        url: `${SITE_URL}/store/${p.id}`,
        brand: { "@type": "Brand", name: ORG_NAME },
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@id": `${SITE_URL}#organization` },
        },
        category: p.category,
      },
    })),
  };
}

export function breadcrumbJsonLd(slug: string, locale: string) {
  const article = getArticleBySlug(slug, locale);
  if (!article) return null;
  const homeUrl = locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
  const insightsUrl = `${homeUrl}/insights`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: homeUrl },
      { "@type": "ListItem", position: 2, name: "Insights", item: insightsUrl },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl(slug, locale) },
    ],
  };
}

const BREADCRUMB_LABELS: Record<Locale, { home: string } & Partial<Record<PageKey, string>>> = {
  en: {
    home: "Home",
    expertise: "Expertise",
    store: "Store",
    contact: "Contact",
  },
  ru: {
    home: "Главная",
    expertise: "Услуги",
    store: "Магазин",
    contact: "Контакты",
  },
  uz: {
    home: "Bosh sahifa",
    expertise: "Xizmatlar",
    store: "Do'kon",
    contact: "Bog'lanish",
  },
};

export function expertiseServicesJsonLd(locale: string) {
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const expertiseUrl = pagePath("expertise", safe);
  return {
    "@context": "https://schema.org",
    "@graph": servicesData.map((s) => ({
      "@type": "Service",
      "@id": `${expertiseUrl}#service-${s.slug}`,
      name: s.title,
      description: s.description.join(" "),
      serviceType: s.category,
      url: expertiseUrl,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: [
        { "@type": "Country", name: "Uzbekistan" },
        { "@type": "Place",   name: "Central Asia" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${s.title} — Capabilities`,
        itemListElement: s.capabilities.map((cap) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: cap },
        })),
      },
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

export function serviceJsonLd(slug: string, locale: string) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const prefix = safe === routing.defaultLocale ? "" : `/${safe}`;
  const serviceUrl = `${SITE_URL}${prefix}/expertise/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    description: service.description.join(" "),
    serviceType: service.category,
    url: serviceUrl,
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: [
      { "@type": "Country", name: "Uzbekistan" },
      { "@type": "Place",   name: "Central Asia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} — Capabilities`,
      itemListElement: service.capabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: cap },
      })),
    },
  };
}

export function servicePageBreadcrumbJsonLd(slug: string, locale: string) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const homeUrl = safe === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${safe}`;
  const expertiseUrl = `${homeUrl}/expertise`;
  const serviceUrl = `${expertiseUrl}/${slug}`;
  const expertiseLabel = BREADCRUMB_LABELS[safe].expertise ?? "Expertise";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: BREADCRUMB_LABELS[safe].home, item: homeUrl },
      { "@type": "ListItem", position: 2, name: expertiseLabel,               item: expertiseUrl },
      { "@type": "ListItem", position: 3, name: service.title,                item: serviceUrl },
    ],
  };
}

export function servicePageMetadata(slug: string, locale: string): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const prefix = safe === routing.defaultLocale ? "" : `/${safe}`;
  const canonical = `${SITE_URL}${prefix}/expertise/${slug}`;
  const title = `${service.title} Services in Uzbekistan | Advizen Consulting`;
  const description = service.description[0];
  const languages = Object.fromEntries(
    routing.locales.map((l: Locale) => {
      const lPrefix = l === routing.defaultLocale ? "" : `/${l}`;
      return [l, `${SITE_URL}${lPrefix}/expertise/${slug}`];
    }),
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
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${service.title} | Advizen Consulting` }],
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
      title: "Tax, Legal, HR & Accounting Services in Uzbekistan | Advizen Consulting",
      description:
        "Integrated advisory across tax, legal, finance, accounting, HR and corporate services in Uzbekistan. Trusted by 80+ clients across 15+ industries in Central Asia.",
    },
    ru: {
      title: "Налоги, право, HR и бухгалтерия в Узбекистане | Advizen Consulting",
      description:
        "Интегрированное консультирование по налогам, праву, финансам, бухгалтерии, HR и корпоративным услугам в Узбекистане. Доверяют 80+ клиентов в 15+ отраслях.",
    },
    uz: {
      title: "O'zbekistonda soliq, huquq, HR va buxgalteriya | Advizen Consulting",
      description:
        "O'zbekistonda soliq, huquq, moliya, buxgalteriya, HR va korporativ xizmatlar bo'yicha integratsiyalashgan konsalting. 15+ sohada 80+ mijoz ishonchini qozongan.",
    },
  },
  store: {
    en: {
      title: "Legal & Business Document Templates for Uzbekistan | Advizen Consulting",
      description:
        "Lawyer-drafted document templates for businesses in Uzbekistan — contracts, HR, compliance, tax forms, corporate filings. Instant download in editable Word format.",
    },
    ru: {
      title: "Шаблоны правовых и бизнес-документов в Узбекистане | Advizen Consulting",
      description:
        "Шаблоны документов для бизнеса в Узбекистане — договоры, HR, компленс, налоговые формы, корпоративные документы. Мгновенная загрузка в формате Word.",
    },
    uz: {
      title: "O'zbekistonda biznes va huquqiy hujjat shablonlari | Advizen Consulting",
      description:
        "O'zbekistonda biznes uchun huquqshunoslar tayyorlagan hujjat shablonlari — shartnomalar, HR, kompliayens, soliq formalari. Tez yuklab olish, Word formatida.",
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
      title: "Advizen Consulting bilan bog'lanish | Toshkentda biznes konsalting",
      description:
        "Toshkentda Advizen Consulting bilan bog'laning. O'zbekiston va Markaziy Osiyoda soliq, huquq, moliya, HR va korporativ konsalting masalalarini muhokama qiling.",
    },
  },
  insights: {
    en: {
      title: "Insights on Uzbekistan Business, Tax & Legal Updates | Advizen Consulting",
      description:
        "Expert analysis on tax, legal, finance, HR and regulatory developments in Uzbekistan and Central Asia from the Advizen Consulting advisory team.",
    },
    ru: {
      title: "Аналитика по бизнесу, налогам и праву Узбекистана | Advizen Consulting",
      description:
        "Экспертная аналитика по налогам, праву, финансам, HR и регуляторным изменениям в Узбекистане и Центральной Азии от команды Advizen Consulting.",
    },
    uz: {
      title: "O'zbekiston biznesi, soliqlari va huquqi bo'yicha tahlillar | Advizen Consulting",
      description:
        "O'zbekiston va Markaziy Osiyoda soliq, huquq, moliya, HR va tartibga solish o'zgarishlari bo'yicha Advizen Consulting jamoasidan ekspert tahlillari.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy | Advizen Consulting",
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
        "Advizen Consulting O'zbekiston qonunlariga muvofiq shaxsiy ma'lumotlarni qanday yig'ishi, ishlatishi va himoya qilishini bilib oling.",
    },
  },
  terms: {
    en: {
      title: "Terms of Use | Advizen Consulting",
      description:
        "Terms governing the use of advizenco.com and digital services provided by Advizen Consulting.",
    },
    ru: {
      title: "Условия использования | Advizen Consulting",
      description:
        "Условия использования сайта advizenco.com и цифровых сервисов Advizen Consulting.",
    },
    uz: {
      title: "Foydalanish shartlari | Advizen Consulting",
      description:
        "advizenco.com saytidan va Advizen Consulting raqamli xizmatlaridan foydalanish shartlari.",
    },
  },
  "terms-of-sale": {
    en: {
      title: "Terms of Sale | Advizen Consulting",
      description:
        "Terms governing purchases of document templates and digital products from Advizen Consulting.",
    },
    ru: {
      title: "Условия продажи | Advizen Consulting",
      description:
        "Условия покупки шаблонов документов и цифровых продуктов Advizen Consulting.",
    },
    uz: {
      title: "Sotish shartlari | Advizen Consulting",
      description:
        "Advizen Consultingdan hujjat shablonlari va raqamli mahsulotlarni sotib olish shartlari.",
    },
  },
  cookies: {
    en: {
      title: "Cookie Policy | Advizen Consulting",
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
        "Advizen Consulting advizenco.com saytida cookie va shunga o'xshash texnologiyalardan qanday foydalanadi.",
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

function productUrl(id: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}/store/${id}`;
}

export function productPageMetadata(id: string, locale: string): Metadata {
  const product = getProductById(id);
  if (!product) return {};
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const canonical = productUrl(id, safe);
  const title = `${product.nameEn} | Advizen Consulting`;
  const description = product.descriptionEn;
  const languages = Object.fromEntries(
    routing.locales.map((l: Locale) => [l, productUrl(id, l)]),
  );
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": productUrl(id, routing.defaultLocale) },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: ORG_NAME,
      locale: OG_LOCALE[safe],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${product.nameEn} | Advizen Consulting` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function productJsonLd(id: string, locale: string) {
  const product = getProductById(id);
  if (!product) return null;
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const url = productUrl(id, safe);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.nameEn,
    description: product.descriptionEn,
    sku: id,
    category: product.category,
    brand: { "@type": "Brand", name: ORG_NAME },
    url,
    image: OG_IMAGE,
    additionalProperty: product.includesEn.map((item) => ({
      "@type": "PropertyValue",
      name: "Includes",
      value: item,
    })),
    offers: {
      "@type": "Offer",
      "@id": `${url}#offer`,
      url,
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${SITE_URL}#organization` },
    },
  };
}

export function productPageBreadcrumbJsonLd(id: string, locale: string) {
  const product = getProductById(id);
  if (!product) return null;
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const labels = BREADCRUMB_LABELS[safe];
  const homeUrl = safe === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${safe}`;
  const storeUrl = `${homeUrl}/store`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home,         item: homeUrl },
      { "@type": "ListItem", position: 2, name: labels.store ?? "Store", item: storeUrl },
      { "@type": "ListItem", position: 3, name: product.nameEn,      item: productUrl(id, safe) },
    ],
  };
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
