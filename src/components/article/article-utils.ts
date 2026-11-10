import { publications, sortedPublications, type Publication, type ArticleContentBlock } from "@/lib/publications";

export type TocItem = { id: string; text: string };

/* Heading ids keep the scheme the previous template used, so existing #links still land. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** One id per h2, in content order; also feeds the table of contents. */
export function headingIds(content: ArticleContentBlock[]): TocItem[] {
  const seen = new Set<string>();
  return content
    .flatMap((b) => (b.type === "h2" && b.text ? [b.text] : []))
    .map((text, i) => {
      let id = slugify(text) || `section-${i}`;
      while (seen.has(id)) id = `${id}-${i}`;
      seen.add(id);
      return { id, text };
    });
}

/* A list item that opens with a short label ("Term." / "Term:" / "Term —") gets the label in bold.
   Only applied when every item in the list has a label with the same separator, so plain lists and
   sentences that merely contain a colon or a full stop are left alone. */
const LABEL_RE = /^(\S.{0,70}?)(\.|:|\s[—–])\s(?=\S)/u;
const ABBREVIATIONS = /(?:^|\s)(?:No|Nos|Art|Arts|St|Mr|Ms|Dr|ст|п|пп|г|гг|т\.?е|т\.?д|e\.?g|i\.?e)$/iu;

export type ListItem = { label?: string; text: string };

function splitLabel(item: string): { label: string; sep: string; rest: string } | null {
  const m = LABEL_RE.exec(item);
  if (!m) return null;
  const label = m[1].trim();
  const sep = m[2].trim();
  if (label.split(/\s+/).length > 8) return null;
  const rest = item.slice(m[0].length);
  if (sep === ".") {
    if (ABBREVIATIONS.test(label) || /\d$/.test(label)) return null;
    if (!/^\p{Lu}/u.test(rest)) return null;
  }
  return { label, sep, rest };
}

export function listItems(items: string[]): ListItem[] {
  const parts = items.map(splitLabel);
  const sep = parts[0]?.sep;
  const labelled = items.length > 1 && parts.every((p) => p && p.sep === sep);
  if (!labelled) return items.map((text) => ({ text }));
  return parts.map((p) => ({
    label: p!.sep === "." || p!.sep === ":" ? `${p!.label}${p!.sep}` : p!.label,
    text: p!.sep === "." || p!.sep === ":" ? p!.rest : `${p!.sep} ${p!.rest}`,
  }));
}

/* Dates are written by hand rather than through Intl so the output is identical on every runtime. */
const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const EN_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const RU_MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const RU_SHORT = ["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."];
const UZ_MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
const UZ_SHORT = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d };
}

/** "20 July 2026" / "20 июля 2026" / "2026-yil 20-iyul" */
export function fullDate(iso: string, locale: string): string {
  const { y, m, d } = parts(iso);
  if (locale === "ru") return `${d} ${RU_MONTHS[m]} ${y}`;
  if (locale === "uz") return `${y}-yil ${d}-${UZ_MONTHS[m]}`;
  return `${d} ${EN_MONTHS[m]} ${y}`;
}

/** "Jul 2026", as on the Insights cards */
export function monthYear(iso: string, locale: string): string {
  const { y, m } = parts(iso);
  if (locale === "ru") return `${RU_SHORT[m]} ${y}`;
  if (locale === "uz") return `${UZ_SHORT[m]} ${y}`;
  return `${EN_SHORT[m]} ${y}`;
}

export type Practice = "Tax" | "Legal" | "HR" | "Advisory";

const PRACTICE_HREF: Record<Practice, string> = {
  Tax: "/expertise/tax",
  Legal: "/expertise/legal",
  HR: "/expertise/hr",
  Advisory: "/expertise",
};

export function practiceFor(category: string): { key: Practice; href: string } {
  const key: Practice = category === "Tax" || category === "Legal" || category === "HR" ? category : "Advisory";
  return { key, href: PRACTICE_HREF[key] };
}

/** Same category first, then the rest; newest first within each; never the current article. */
export function relatedArticles(current: Publication, count = 3): Publication[] {
  const others = sortedPublications(publications.filter((p) => p.hasRead && p.slug !== current.slug));
  const same = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...same, ...rest].slice(0, count);
}
