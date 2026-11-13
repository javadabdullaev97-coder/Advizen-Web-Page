# Doing Business in Uzbekistan 2026 — content format and style

The guide is a magazine-style A4 PDF published by Advizen Consulting (tax, legal and accounting
advisers in Tashkent) for foreign investors and their advisers. It is laid out automatically in
three columns from these Markdown files, so the markup below must be followed exactly.

## File shape

```
---
title: Taxation
lead: One or two sentences, at most 40 words, that say what matters most in this chapter.
figures:
  - 15% | Corporate income tax
  - 12% | Value added tax
  - 12% | Personal income tax
---

## Subsection heading            (h2: appears in the chapter's contents list)
### Smaller heading              (h3: inside a subsection)

Paragraph text. One idea per paragraph, three to five sentences.

- Bullet item. Use bullets only for genuine lists of parallel items.
- Another item.

:::table Caption shown under the table (optional)
| Column | Column | Column |
|---|---|---|
| cell | cell | cell |
:::

:::box Title of a side box
Two to five short bullets or two short paragraphs. Use for "Key points", "Practical tip",
"Recent changes" and similar asides. At most one box per subsection.
:::

:::example Title of a worked example
One short paragraph setting up the case, then a table of numbers inside the same block:
| Item | Amount |
|---|---|
| Fee | 500 000 000 |
| Withholding tax, 20% | 100 000 000 |
:::

> A pull quote: one striking sentence lifted (verbatim or nearly) from this chapter's own text,
> at most 22 words. One or two per chapter. Never a quote attributed to a person.
```

Rules for the front matter:
- `figures`: exactly three, each `value | label`. Values are short (`15%`, `37.5 m`, `1 day`,
  `UZS 5 bn`). They must be facts stated in the chapter body.
- `lead`: plain statement, no hype.

## Writing style

- British English (organisation, licence, labour). Plain, precise, confident. Short sentences.
- Write for a foreign CFO or general counsel: what the rule is, who it applies to, the number,
  the deadline, the practical consequence.
- Facts as of November 2026. Use the current law; check the date a rule took effect.
- Cite the source in the text only where a reader needs it (for example "(Tax Code, Art. 337)").
- No references to earlier editions of this guide or to "this year's update". The guide is
  written as if it were the only edition.
- No marketing language, no "Advizen can help" inside the chapters (that has its own chapter),
  no rhetorical questions, no exclamation marks, no emoji, no italics.
- Numbers: `15%`, `UZS 500 million`, `USD 1,000`, `30 days`. Dates: `1 January 2026`.
- Tables: keep cells short (under 12 words). Three to four columns at most, or two for long text.
- When you are not certain a fact is current, keep it but add `[VERIFY: what to check]` right after
  it. Do not invent numbers. If you cannot find a figure, write the sentence without it.

## End of file

After the content, add an HTML comment with the sources you used, one per line (URL or
Tax Code article), so an editor can check them:

```
<!-- sources
https://lex.uz/...
Tax Code Art. 337
-->
```

## Data blocks

```
:::kpis Caption                      (dark panel of key figures, up to 11)
- USD 147.1 bn | GDP in US dollars
:::

:::bars Caption                      (bar chart with flags; flag code from img/flags/)
- cn | China | 17.2 | 21.2% | 7.3%
:::

:::ratings Caption                   (rating scale with the investment-grade line)
- Moody's | Ba2 | Stable | Upgraded, June 2026
:::

:::notes                             (footnotes to a table, one per line)
- (a) The lower rate applies ...
:::
```

## Amounts in BCV

Every amount in BCV is followed by an approximate dollar figure in brackets, rounded, with no
soum equivalent: `48 BCV (~USD 1,800)`. Use the year's BCV and the CBU rate on the edition date.
