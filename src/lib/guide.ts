// The Doing Business in Uzbekistan guide, published as a PDF in public/guides. Replace the file and
// this path when a new edition comes out.
export const GUIDE_PDF = "/guides/Doing-Business-in-Uzbekistan-2026.pdf";

/* Topic guides shown under the Doing Business guide on the home and Insights pages.
   To add one: put the PDF(s) in public/guides, a cover in public/guides/covers (run
   scripts/image-variants.mjs afterwards), add an entry here and its texts under
   Guides.items.<slug> in messages/{en,ru,uz}/insights.json. A locale without its own PDF
   falls back to English. */
export type Guide = {
  slug: string;
  pdf: { en: string; ru?: string; uz?: string };
  cover: { en: string; ru?: string; uz?: string };
};

export const GUIDES: Guide[] = [
  {
    slug: "it-business",
    pdf: { en: "/guides/IT-Business-in-Uzbekistan-2026.pdf", ru: "/guides/IT-Business-in-Uzbekistan-2026-RU.pdf" },
    cover: { en: "/guides/covers/it-business-2026.webp", ru: "/guides/covers/it-business-2026-ru.webp" },
  },
];

export const localized = (v: Guide["pdf"], locale: string) => v[locale as keyof Guide["pdf"]] ?? v.en;
