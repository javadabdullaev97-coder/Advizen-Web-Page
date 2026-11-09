import { Fragment, type ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArticleMobileToc, ArticleToc } from "@/components/article/ArticleToc";
import type { TocItem } from "@/components/article/article-utils";
import HomeReveal from "@/components/home/HomeReveal";

export type LegalDoc = "privacy" | "terms" | "cookies" | "disclaimer";

type Section = { title: string; body: string };
type Block = { kind: "h3"; text: string } | { kind: "p"; lines: string[] } | { kind: "ul"; items: string[] };

const DOCS: { key: LegalDoc; href: string; label: string }[] = [
  { key: "privacy", href: "/privacy", label: "privacy" },
  { key: "terms", href: "/terms", label: "termsOfUse" },
  { key: "cookies", href: "/cookies", label: "cookiePolicy" },
  { key: "disclaimer", href: "/disclaimer", label: "disclaimer" },
];

const P = "text-[17px] sm:text-[18px] leading-[1.7] text-foreground-2 text-pretty";
const LI =
  "relative pl-[26px] text-[17px] sm:text-[18px] leading-[1.66] text-foreground-2 before:absolute before:left-1 before:top-[.7em] before:size-1.5 before:rounded-full before:bg-muted before:content-['']";

const BULLET = /^\s*[—–-]\s+/;

/* The policy texts are plain strings: blank lines split paragraphs, "— " starts a list item,
   and a short unpunctuated line directly above a sentence is a sub-heading. */
function parse(body: string): Block[] {
  const blocks: Block[] = [];
  for (const chunk of body.split(/\n\s*\n/)) {
    let lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    const [first, second] = lines;
    if (second && first.length < 60 && !/[.:;,!?]$/.test(first) && !BULLET.test(first) && second.length > 60) {
      blocks.push({ kind: "h3", text: first });
      lines = lines.slice(1);
    }
    let para: string[] = [];
    let list: string[] = [];
    const flush = () => {
      if (para.length) blocks.push({ kind: "p", lines: para });
      if (list.length) blocks.push({ kind: "ul", items: list });
      para = [];
      list = [];
    };
    for (const line of lines) {
      if (BULLET.test(line)) {
        if (para.length) flush();
        list.push(line.replace(BULLET, ""));
      } else {
        if (list.length) flush();
        para.push(line);
      }
    }
    flush();
  }
  return blocks;
}

const LINKABLE = /(\b[\w.+-]+@[\w-]+\.[\w.]+\b|\+998[\d\s]{9,14}\d)/g;

function linkify(text: string): ReactNode {
  const parts = text.split(LINKABLE);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    const href = part.includes("@") ? `mailto:${part}` : `tel:${part.replace(/\s/g, "")}`;
    return (
      <a key={i} href={href} className="text-foreground-hi underline decoration-white/30 underline-offset-[3px] hover:decoration-foreground-hi">
        {part}
      </a>
    );
  });
}

export default async function LegalPage({ doc }: { doc: LegalDoc }) {
  const t = await getTranslations(`Legal.${doc}`);
  const tCommon = await getTranslations("Legal.common");
  const tNav = await getTranslations("Nav");
  const tFooter = await getTranslations("Footer");
  const tArticle = await getTranslations("ArticlePage");

  const sections = t.raw("sections") as Section[];
  const toc: TocItem[] = sections.map((s, i) => ({ id: `section-${i + 1}`, text: s.title }));
  const title = t("title");

  return (
    <>
      <article>
        <header className="m-wrap pt-36 pb-14 max-sm:pt-28 max-sm:pb-10">
          <nav aria-label={tArticle("breadcrumb")} className="home-rise">
            <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[14px] text-muted">
              <li>
                <Link href="/" className="transition-colors duration-150 hover:text-foreground-hi">
                  {tNav("home")}
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden className="text-white/25">/</span>
                <span aria-current="page" className="text-foreground-2">{title}</span>
              </li>
            </ol>
          </nav>
          <h1 className="m-h1 mt-8 text-[40px] sm:text-[clamp(44px,5vw,68px)] max-w-[16ch] break-words max-sm:hyphens-auto home-rise">{title}</h1>
          <p className="mt-5 max-w-[36em] text-[17px] sm:text-[19px] leading-[1.5] text-foreground-2 text-pretty home-rise">{t("subtitle")}</p>
          <p className="mt-4 text-[14px] text-muted home-rise">{tCommon("lastUpdated")}</p>
        </header>

        <div className="m-wrap grid min-[1181px]:grid-cols-[minmax(220px,1fr)_minmax(0,720px)_minmax(0,1fr)] min-[1181px]:gap-x-12">
          <ArticleToc items={toc} label={tArticle("contents")} />

          <div className="min-w-0 w-full max-w-[720px] mx-auto min-[1181px]:col-start-2 border-t border-line pt-4">
            <ArticleMobileToc items={toc} label={tArticle("contents")} />

            {t.has("intro") && <p className="mt-10 text-[19px] sm:text-[20px] leading-[1.6] text-foreground-hi text-pretty">{t("intro")}</p>}

            {sections.map((s, i) => (
              <section key={toc[i].id} aria-labelledby={toc[i].id}>
                <h2
                  id={toc[i].id}
                  tabIndex={-1}
                  className="mt-[72px] max-sm:mt-14 scroll-mt-28 outline-none text-[24px] sm:text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-foreground-hi text-balance"
                >
                  <span aria-hidden className="block mb-3 text-[14px] font-medium tracking-normal text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                {parse(s.body).map((b, j) => {
                  if (b.kind === "h3")
                    return (
                      <h3 key={j} className="mt-8 text-[18px] sm:text-[19px] font-semibold leading-[1.3] text-foreground-hi">
                        {b.text}
                      </h3>
                    );
                  if (b.kind === "ul")
                    return (
                      <ul key={j} className="mt-[1em] grid gap-[.6em]">
                        {b.items.map((it, k) => (
                          <li key={k} className={LI}>{linkify(it)}</li>
                        ))}
                      </ul>
                    );
                  return (
                    <p key={j} className={`${j === 0 ? "mt-5" : "mt-[1em]"} ${P}`}>
                      {b.lines.map((l, k) => (
                        <Fragment key={k}>
                          {k > 0 && <br />}
                          {linkify(l)}
                        </Fragment>
                      ))}
                    </p>
                  );
                })}
              </section>
            ))}

            <p className="mt-20 pt-7 border-t border-line text-[15px] leading-[1.6] text-muted">{t("footer")}</p>
          </div>
        </div>
      </article>

      <nav aria-labelledby="other-policies" className="m-wrap pt-24 pb-32 max-sm:pt-20 max-sm:pb-24">
        <h2 id="other-policies" data-reveal className="m-h2 text-[28px] lg:text-[clamp(28px,2.6vw,36px)] mb-7">
          {tCommon("other")}
        </h2>
        <ul data-reveal className="grid gap-4 sm:grid-cols-3">
          {DOCS.filter((d) => d.key !== doc).map((d) => (
            <li key={d.key}>
              <Link
                href={d.href}
                className="group m-tile flex items-center justify-between gap-4 h-full px-6 py-5 transition-colors duration-200 hover:bg-[#232325]"
              >
                <span className="text-[17px] font-semibold text-foreground-hi">{tFooter(d.label)}</span>
                <span aria-hidden className="text-muted transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <HomeReveal />
    </>
  );
}
