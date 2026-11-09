import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ArticleContentBlock, ArticleInShort, PublicationArticle } from "@/lib/publications";
import HomeReveal from "@/components/home/HomeReveal";
import ArticleFaq from "./ArticleFaq";
import ArticleProgress from "./ArticleProgress";
import { ArticleMobileToc, ArticleToc } from "./ArticleToc";
import { fullDate, headingIds, listItems, monthYear, practiceFor, relatedArticles, type TocItem } from "./article-utils";

const TELEGRAM = "https://t.me/advizen";
const BODY_ID = "article-body";

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

function Avatar({ size }: { size: "sm" | "lg" }) {
  return (
    <span
      aria-hidden
      className={`grid place-items-center flex-none rounded-full bg-surface border border-line ${size === "sm" ? "size-10" : "size-[52px]"}`}
    >
      {size === "sm" ? (
        <Image src="/Logo.webp" alt="" width={22} height={19} />
      ) : (
        <Image src="/Logo.webp" alt="" width={28} height={24} />
      )}
    </span>
  );
}

function InShort({ data, title }: { data: ArticleInShort; title: string }) {
  return (
    <section aria-labelledby="in-short" className="m-tile p-9 max-sm:px-[22px] max-sm:py-6">
      <h2 id="in-short" className="text-[22px] font-semibold tracking-[-0.02em] text-foreground-hi">
        {title}
      </h2>
      {data.figures.length > 0 && (
        <dl className="mt-[22px] grid sm:grid-cols-2 gap-x-7 border-t border-line">
          {data.figures.map((f) => (
            <div key={f.value} className="flex flex-col py-[18px] border-b border-line">
              <dt className="mt-2 text-[15px] leading-[1.45] text-foreground-2">{f.label}</dt>
              <dd
                className={`order-first font-semibold tracking-[-0.035em] leading-[1.05] tabular-nums text-foreground-hi text-[30px] ${
                  f.value.length > 12 ? "sm:text-[28px]" : "sm:text-[34px]"
                }`}
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {data.points.length > 0 && (
        <ul className="mt-[22px] grid gap-3">
          {data.points.map((p) => (
            <li
              key={p}
              className="relative pl-[22px] text-[16px] leading-[1.55] text-foreground-2 before:absolute before:left-0.5 before:top-[.62em] before:size-1.5 before:rounded-full before:bg-muted before:content-['']"
            >
              {p}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const P = "text-[18px] leading-[1.7] sm:text-[18.5px] sm:leading-[1.72] text-foreground-2 text-pretty";
const LI =
  "relative pl-[26px] text-[17px] sm:text-[18px] leading-[1.66] text-foreground-2 before:absolute before:left-1 before:top-[.7em] before:size-1.5 before:rounded-full before:bg-muted before:content-['']";

function Prose({ content, toc }: { content: ArticleContentBlock[]; toc: TocItem[] }) {
  // Ordinal of each h2 among the headings, used for its number and its id.
  const ordinals: number[] = [];
  let count = 0;
  for (const b of content) ordinals.push(b.type === "h2" ? count++ : -1);
  return (
    <div id={BODY_ID} className="mt-6">
      {content.map((block, i) => {
        const prev = content[i - 1]?.type;
        const afterHeading = prev === "h2" || prev === "h3";
        switch (block.type) {
          case "h2": {
            const n = ordinals[i];
            return (
              <h2
                key={i}
                id={toc[n]?.id}
                tabIndex={-1}
                className="mt-[88px] max-sm:mt-[72px] scroll-mt-28 outline-none text-[28px] sm:text-[clamp(28px,2.6vw,36px)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground-hi text-balance"
              >
                <span aria-hidden className="block mb-3.5 text-[14px] font-medium tracking-normal text-muted tabular-nums">
                  {String(n + 1).padStart(2, "0")}
                </span>
                {block.text}
              </h2>
            );
          }
          case "h3":
            return (
              <h3 key={i} className="mt-12 max-sm:mt-10 text-[20px] sm:text-[22px] font-semibold leading-[1.25] tracking-[-0.015em] text-foreground-hi text-balance">
                {block.text}
              </h3>
            );
          case "p":
            if (i === 0)
              return (
                <p key={i} className="mt-14 max-sm:mt-11 text-[19px] sm:text-[21px] leading-[1.6] text-foreground-hi text-pretty">
                  {block.text}
                </p>
              );
            return (
              <p key={i} className={`${afterHeading ? "mt-[.75em]" : "mt-[1.15em]"} ${P}`}>
                {block.text}
              </p>
            );
          case "ul":
            if (!block.items?.length) return null;
            return (
              <ul key={i} className="mt-[1.2em] grid gap-[.75em] text-[18px]">
                {listItems(block.items).map((it, j) => (
                  <li key={j} className={LI}>
                    {it.label ? (
                      <>
                        <b className="font-semibold text-foreground-hi">{it.label}</b> {it.text}
                      </>
                    ) : (
                      it.text
                    )}
                  </li>
                ))}
              </ul>
            );
          case "blockquote":
            return (
              <blockquote key={i} className="my-12 max-sm:my-10 py-1.5 pl-7 max-sm:pl-5 border-l-2 border-white/35">
                <p className="text-[20px] sm:text-[23px] leading-[1.48] tracking-[-0.015em] font-medium text-foreground-hi text-pretty">{block.text}</p>
              </blockquote>
            );
          case "divider":
            return <hr key={i} className="my-14 border-0 border-t border-line" />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default function ArticleView({ article }: { article: PublicationArticle }) {
  const t = useTranslations("ArticlePage");
  const tPub = useTranslations("Publications");
  const tNav = useTranslations("Nav");
  const locale = useLocale();

  const title = tPub(`items.${article.slug}.title`);
  const tag = tPub(`tags.${article.tag}`);
  const subtitle = article.subtitle || tPub(`items.${article.slug}.description`);
  const toc = headingIds(article.content);
  const practice = practiceFor(article.category);
  const related = relatedArticles(article);

  const published = (): ReactNode =>
    article.date
      ? t.rich("published", {
          date: fullDate(article.date, locale),
          time: (chunks) => <time dateTime={article.date}>{chunks}</time>,
        })
      : null;

  return (
    <>
      <ArticleProgress targetId={BODY_ID} />

      <article>
        <header className="relative isolate flex items-end min-h-[680px] overflow-hidden pt-20 max-sm:block max-sm:min-h-0">
          <div className="absolute inset-0 -z-10 overflow-hidden max-sm:relative max-sm:z-0 max-sm:h-[280px]">
            {article.image && (
              <Image
                src={article.image}
                alt=""
                fill
                preload
                sizes="100vw"
                className="object-cover object-[70%_50%] max-sm:object-[62%_50%] home-settle"
              />
            )}
            <div aria-hidden className="absolute inset-0 expertise-hero-shade" />
          </div>

          <div className="relative m-wrap w-full pb-16 max-sm:-mt-14 max-sm:pb-10">
            <nav aria-label={t("breadcrumb")} className="home-rise">
              <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[14px] text-muted max-sm:flex-nowrap">
                <li className="shrink-0">
                  <Link href="/" className="transition-colors duration-150 hover:text-foreground-hi">
                    {tNav("home")}
                  </Link>
                </li>
                <li className="shrink-0 flex items-center gap-2.5">
                  <span aria-hidden className="text-white/25">/</span>
                  <Link href="/insights" className="transition-colors duration-150 hover:text-foreground-hi">
                    {t("back")}
                  </Link>
                </li>
                <li className="min-w-0 flex items-center gap-2.5">
                  <span aria-hidden className="text-white/25">/</span>
                  <span aria-current="page" className="text-foreground-2 max-sm:truncate">
                    {title}
                  </span>
                </li>
              </ol>
            </nav>

            <p className="mt-10 max-sm:mt-7 flex flex-wrap items-center gap-3 home-rise">
              <span className="text-[13px] font-semibold px-[11px] py-[5px] rounded-full bg-white/10 text-foreground-hi">{tag}</span>
              {article.date && <span className="text-[14px] text-muted">{published()}</span>}
            </p>

            <h1
              className="mt-[18px] max-w-[17ch] font-semibold text-foreground-hi text-balance text-[36px] leading-[1.06] tracking-[-0.03em] sm:text-[clamp(40px,4.6vw,68px)] sm:leading-[1.02] sm:tracking-[-0.038em] home-rise"
              style={delay(0.08)}
            >
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 max-w-[36em] text-[17px] sm:text-[19px] leading-[1.5] text-foreground-2 text-pretty home-rise" style={delay(0.16)}>
                {subtitle}
              </p>
            )}

            {article.author && (
              <p className="mt-8 flex items-center gap-3 text-[15px] max-sm:text-[14px] font-semibold text-foreground-hi home-rise" style={delay(0.24)}>
                <Avatar size="sm" />
                {article.author}
              </p>
            )}
          </div>
        </header>

        <div className="m-wrap pt-6 grid min-[1181px]:grid-cols-[minmax(220px,1fr)_minmax(0,720px)_minmax(0,1fr)] min-[1181px]:gap-x-12">
          {toc.length > 0 && <ArticleToc items={toc} label={t("contents")} />}

          <div className="min-w-0 w-full max-w-[720px] mx-auto min-[1181px]:col-start-2">
            {toc.length > 0 && <ArticleMobileToc items={toc} label={t("contents")} />}
            {article.inShort && <InShort data={article.inShort} title={t("inShort")} />}

            <Prose content={article.content} toc={toc} />

            {article.author && (
              <div className="mt-[72px] pt-7 border-t border-line flex items-center gap-4">
                <Avatar size="lg" />
                <div>
                  <b className="block text-[17px] font-semibold text-foreground-hi">{article.author}</b>
                  <span className="text-[15px] text-muted">
                    {tag}
                    {article.date ? " · " : ""}
                    {published()}
                  </span>
                </div>
              </div>
            )}

            {article.faq && article.faq.length > 0 && (
              <section aria-labelledby="faq" className="mt-24">
                <h2 id="faq" className="mb-7 scroll-mt-28 text-[28px] sm:text-[clamp(28px,2.6vw,36px)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground-hi text-balance">
                  {t("faqTitle")}
                </h2>
                <ArticleFaq items={article.faq} />
              </section>
            )}
          </div>
        </div>
      </article>

      <section className="m-wrap pt-32 max-sm:pt-24">
        <div data-reveal className="m-tile flex flex-wrap justify-between items-center gap-8 p-7 sm:px-14 sm:py-12">
          <div>
            <h2 className="text-[28px] lg:text-[clamp(28px,3vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground-hi text-balance">
              {t(`cta.${practice.key}.title`)}
            </h2>
            <p className="mt-2.5 text-[17px] text-foreground-2 max-w-[34em]">{t(`cta.${practice.key}.text`)}</p>
          </div>
          <div className="flex flex-wrap gap-3 max-sm:w-full">
            <Link href={practice.href} className="m-btn m-btn-p max-sm:w-full">
              {t(`cta.${practice.key}.button`)}
            </Link>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-g max-sm:w-full">
              {t("telegram")}
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related" className="m-wrap pt-24 max-sm:pt-[72px] pb-36 max-sm:pb-28">
          <div data-reveal className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-4 mb-7">
            <h2 id="related" className="text-[28px] lg:text-[clamp(28px,3vw,40px)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground-hi">
              {t("related")}
            </h2>
            <Link href="/insights" className="m-more">
              {t("allInsights")}
            </Link>
          </div>
          <ul data-reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-sm:gap-0">
            {related.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={`/insights/${p.slug}`}
                  className={`group block max-sm:grid max-sm:grid-cols-[120px_minmax(0,1fr)] max-sm:gap-4 max-sm:items-start max-sm:pb-4 max-sm:border-b max-sm:border-line ${i === 0 ? "" : "max-sm:pt-4"}`}
                >
                  <div className="relative aspect-[16/10] rounded-[var(--radius-inner)] max-sm:rounded-xl overflow-hidden bg-surface">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="(max-width: 639px) 120px, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[var(--ease-out)] motion-safe:group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="block mt-[18px] text-[14px] text-muted max-sm:mt-0 max-sm:text-[13px]">
                      {tPub(`tags.${p.tag}`)}
                      {p.date ? ` · ${monthYear(p.date, locale)}` : ""}
                    </span>
                    <h3 className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-foreground transition-colors duration-200 group-hover:text-foreground-hi max-sm:mt-1 max-sm:text-[17px] max-sm:leading-[1.3]">
                      {tPub(`items.${p.slug}.title`)}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <HomeReveal />
    </>
  );
}
