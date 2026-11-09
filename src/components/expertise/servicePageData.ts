import { allEngagements } from "@/lib/industries";
import { publications, sortedPublications, type Publication } from "@/lib/publications";

// Which engagement disciplines count as work for each service.
export const DISCIPLINE_MAP: Record<string, string[]> = {
  tax: ["Tax"],
  legal: ["Legal"],
  finance: ["Finance"],
  hr: ["HR"],
  funding: ["Tax", "Legal"],
  "ma-advisory": ["Tax", "Legal"],
  "due-diligence": ["Tax", "Legal"],
  "entity-management": ["Legal"],
  corporate: ["Legal"],
  eor: ["HR"],
  payroll: ["HR"],
  immigration: ["HR"],
  "virtual-office": ["Legal"],
  compliance: ["Tax"],
};

export const RELATED_SERVICES_MAP: Record<string, string[]> = {
  tax: ["legal", "finance", "due-diligence"],
  legal: ["tax", "corporate", "ma-advisory"],
  finance: ["tax", "entity-management", "due-diligence"],
  hr: ["eor", "payroll", "immigration"],
  funding: ["tax", "legal", "finance"],
  "ma-advisory": ["due-diligence", "legal", "tax"],
  "due-diligence": ["ma-advisory", "tax", "legal"],
  "entity-management": ["corporate", "compliance", "payroll"],
  corporate: ["entity-management", "legal", "virtual-office"],
  eor: ["payroll", "immigration", "hr"],
  payroll: ["eor", "hr", "compliance"],
  immigration: ["eor", "hr", "corporate"],
  "virtual-office": ["corporate", "entity-management", "compliance"],
  compliance: ["entity-management", "tax", "legal"],
};

/* The figure shown beside the summary. By default the first engagement in the
   service's disciplines; where a later one is the closer match, its index in
   allEngagements (it is always within the same disciplines). */
const PROOF_OVERRIDE: Record<string, number> = {
  funding: 7, // seed round structuring
  "ma-advisory": 2, // M&A of a bottler
  "due-diligence": 14, // 30+ tax and legal DDs
  "entity-management": 13, // 80+ entities incorporated
  corporate: 13,
  "virtual-office": 13,
  compliance: 12, // ongoing compliance advisory
};

export const WORK_ROWS = 6;

export function serviceEngagements(slug: string) {
  const disciplines = DISCIPLINE_MAP[slug] ?? [];
  return allEngagements
    .map((e, idx) => ({ ...e, idx }))
    .filter((e) => e.disciplines.some((d) => disciplines.includes(d)));
}

export function proofEngagement(slug: string) {
  const list = serviceEngagements(slug);
  return list.find((e) => e.idx === PROOF_OVERRIDE[slug]) ?? list[0];
}

/* Three articles in the service's disciplines, newest first; Finance has no
   category of its own, so it reads Advisory, which also fills any gap. */
export function relatedReading(slug: string, count = 3): Publication[] {
  const categories = (DISCIPLINE_MAP[slug] ?? []).map((d) => (d === "Finance" ? "Advisory" : d));
  const readable = sortedPublications(publications.filter((p) => p.hasRead));
  const picked = readable.filter((p) => categories.includes(p.category)).slice(0, count);
  for (const p of readable) {
    if (picked.length >= count) break;
    if (p.category === "Advisory" && !picked.includes(p)) picked.push(p);
  }
  return picked;
}

// Title Case names read as sentence case on the page ("Tax consulting"); acronyms and terms keep their capitals.
export function sentenceCase(title: string) {
  return title
    .split(" ")
    .map((w, i) => (i > 0 && w !== "Record" && /^\p{Lu}\p{Ll}+$/u.test(w) ? w.toLowerCase() : w))
    .join(" ");
}

// Mid-sentence an ordinary name starts lowercase; names with other capitals keep them (as in seo.ts).
export function midSentence(title: string) {
  return /^\p{Lu}[^\p{Lu}]*$/u.test(title) ? title[0].toLowerCase() + title.slice(1) : title;
}
