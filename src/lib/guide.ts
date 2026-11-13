// The Doing Business in Uzbekistan guide, published as a PDF in public/guides. Replace the file and
// this path when a new edition comes out.
import { IMAGE_VERSIONS } from "./image-variants";

// Adds the file's content hash (written by scripts/image-variants.mjs) so browsers fetch a replaced PDF
// at once instead of opening the copy in their cache. Run the script after replacing a PDF.
const versioned = (file: string) => (IMAGE_VERSIONS[file] ? `${file}?v=${IMAGE_VERSIONS[file]}` : file);

export const GUIDE_PDF = versioned("/guides/Doing-Business-in-Uzbekistan-2026.pdf");

/* Topic guides shown under the Doing Business guide on the home and Insights pages.
   To add one: put the PDF(s) in public/guides, the cover photo without text as a square webp in
   public/guides/photos (run scripts/image-variants.mjs afterwards), add an entry here and its texts under
   Guides.items.<slug> in messages/{en,ru,uz}/insights.json. A locale without its own PDF
   falls back to English. */
export type Guide = {
  slug: string;
  pdf: { en: string; ru?: string; uz?: string };
  /* Cover photo without the title, shown behind the card text. */
  photo: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "company-setup",
    pdf: { en: "/guides/Company-Setup-Uzbekistan-2026.pdf", ru: "/guides/Company-Setup-Uzbekistan-2026-RU.pdf" },
    photo: "/guides/photos/company-setup.webp",
  },
  {
    slug: "hiring",
    pdf: { en: "/guides/Hiring-and-Migration-Uzbekistan-2026.pdf", ru: "/guides/Hiring-and-Migration-Uzbekistan-2026-RU.pdf" },
    photo: "/guides/photos/hiring.webp",
  },
  {
    slug: "tax",
    pdf: { en: "/guides/Tax-Guide-Uzbekistan-2026.pdf", ru: "/guides/Tax-Guide-Uzbekistan-2026-RU.pdf" },
    photo: "/guides/photos/tax.webp",
  },
  {
    slug: "it-business",
    pdf: { en: "/guides/IT-Business-in-Uzbekistan-2026.pdf", ru: "/guides/IT-Business-in-Uzbekistan-2026-RU.pdf" },
    photo: "/guides/photos/it-business.webp",
  },
];

export const localized = (v: Guide["pdf"], locale: string) => versioned(v[locale as keyof Guide["pdf"]] ?? v.en);
