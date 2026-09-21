# Content plan — October to December 2026

Twenty-six topics from the first of October to the twenty-second of
December. The last week of the year is dark: nobody reads a tax briefing
between Christmas and New Year.

Structure follows the repository's convention — English scaffolding,
Russian content, the way the post files are already written.

---

## The arc

The accounts start empty, so the sequence matters more than any single
post. Analysis of how Apple pays 0.005% tax is not an entrance — it is a
reward. People read that from firms they already trust, and it is exactly
where a firm with nothing behind it would start.

**October — кто мы.** Four disciplines, shown rather than claimed. By the
end of the month a visitor can tell what this firm is and what it knows.

**November — что мы знаем про Узбекистан.** ТМФЦ, СЭЗ, лицензирование,
исламское финансирование. This is what clients actually come for.

**December — почему за нами стоит следить.** UBO, deadlock, Winklevoss,
family office, Enron. By now the account has earned the right to be
interesting.

---

## Cadence

| | Rhythm | Note |
|---|---|---|
| Instagram | вт, чт | Russian. Carousel. The growth channel. |
| Facebook | вт, чт | Russian and English, two separate posts. |
| LinkedIn | вт only | English, long form. A showcase, not a channel — see below. |
| Twitter / X | вт, чт, сб | English only. Saturday is a note, not a topic. |

**LinkedIn runs at half rhythm on purpose.** Nobody at the firm will
publish from a personal profile, and a company page with no followers is
barely distributed — the algorithm does not carry it. So LinkedIn is where
a foreign client checks that the firm exists and knows something, not
where anyone is found. That argues for fewer and heavier posts rather than
more: what matters is how substantial the page looks when somebody
arrives, not how often it updates. Effort moves to Instagram and Twitter,
where a brand account is distributed on the same terms as a personal one.

**One topic, four cuts.** The same research becomes four different things,
not one thing in four wrappers. LinkedIn gets the full argument for the
reader who already has the problem; Instagram gets the mechanism drawn for
the reader who did not know it was a risk; Twitter gets the single
sharpest sentence; Facebook gets the practical checklist and the link.

**Saturday notes** are Twitter-only: one observation, no carousel, no
essay. They exist because Twitter needs volume to look alive and a topic a
week is not enough there.

---

## Phase 0 — before the first of October

Nothing publishes until all of this is done.

- Profile fill: avatar, bio, link. All four platforms.
- LinkedIn company page complete — a post from an empty page reads badly.
- Facebook: check whether Page Publishing Authorization has been imposed.
  It blocks API publishing until an administrator's identity is verified
  and takes days. Find out now, not in week three.
- Meta Business: assets attached, system user created, permanent token
  issued. See the LEAP setup document for the order.
- First six posts rendered and approved.

## Phase 1 — 1 to 13 October, by hand

Six posts, published manually, one every second or third day.

Two reasons, both load-bearing. Instagram is a grid: one post reads as a
mistake, three as a row, six as a publication — so the opening has to
arrive as a block. And a new account that starts publishing through an API
on a schedule is, to Meta's antispam, indistinguishable from a bot.

## Phase 2 — from 15 October, automated

Tuesday and Thursday, two topics a week, through to 22 December.

---

## October — кто мы

| Date | Topic | Source | Discipline |
|---|---|---|---|
| 01.10 чт | Кто такие Advizen | new — needs firm facts | — |
| 03.10 сб | Четыре дисциплины: налоги, право, финансы, HR | new | — |
| 06.10 вт | Постоянное представительство: когда возникает риск | `permanent-establishment-uzbekistan` | Налоги |
| 08.10 чт | Представительство иностранной компании | `representative-offices-uzbekistan` | Право |
| 10.10 сб | Payroll и социальные отчисления работодателя | `payroll-social-contributions` | HR |
| 13.10 вт | Учётная политика для целей налогообложения | `accounting-policy-tax-purposes` | Учёт |
| 15.10 чт | Лицензирование: по отраслям | `licensing-procedures-uzbekistan` | Консалтинг |
| 20.10 вт | Эскроу-счета: механика и применение | `escrow-accounts-uzbekistan` | Право |
| 22.10 чт | Employer of Record в Центральной Азии | `employer-of-record-central-asia` | HR |
| 27.10 вт | Самозанятость: режим и его границы | `self-employment-uzbekistan` | Налоги |
| 29.10 чт | Добровольная ликвидация компании | `voluntary-liquidation-uzbekistan` | Право |

Posts three through six cover all four disciplines in sequence. The
opening grid therefore shows a full-cycle practice without a single line
of self-description.

## November — Узбекистан

| Date | Topic | Source | Discipline |
|---|---|---|---|
| 03.11 вт | ТМФЦ: что это и что меняет | `tashkent-international-financial-centre` | Право |
| 05.11 чт | Специальные экономические зоны: разбор | `special-economic-zones-uzbekistan` | Консалтинг |
| 10.11 вт | Креативный индустриальный парк | `creative-industry-park-uzbekistan` | Консалтинг |
| 12.11 чт | Лицензирование криптоактивов | `crypto-asset-service-providers-uzbekistan` | Право |
| 17.11 вт | Исламское финансирование: инструменты | `islamic-finance-uzbekistan` | Право |
| 19.11 чт | ТМФЦ против AIFC и DIFC | new — `compare` card | Право |
| 24.11 вт | Почему венчурные фонды не идут в Узбекистан | new | Финансы |
| 26.11 чт | Как нанять в Узбекистане, не открывая юрлицо | new | HR |

## December — кругозор

| Date | Topic | Source | Discipline |
|---|---|---|---|
| 01.12 вт | UBO: конечный бенефициар | `social/posts/ubo.toml` — drafted | Комплаенс |
| 03.12 чт | Deadlock: структура 50/50 | `social/posts/deadlock.toml` — drafted | Право |
| 08.12 вт | Winklevoss: цена мирового соглашения | `social/posts/winklevoss.toml` — drafted | Споры |
| 10.12 чт | Family office: зачем их создают | new | Финансы |
| 15.12 вт | Холдинг против прямого владения | new | Структуры |
| 17.12 чт | Когда цифры врут: Enron и Wirecard | new | Учёт |
| 22.12 вт | Что меняется для бизнеса в 2027 | new | — |

---

## Source material

Fourteen of the nineteen published articles are used. Each already carries
a cover image in `public/Articles Image/`, so covers need no generation.

Five are held in reserve, as substitutes if a topic is dropped:
`outsourcing-operational-activities`, `franchising-uzbekistan`,
`online-gambling-uzbekistan`, `accounting-law-uzbekistan`,
`pit-refunds-education-uzbekistan`.

**An article is the source, not the content.** A carousel that summarises
an article and asks people to go read it is a link dump and gives nothing.
Each post takes one idea out of the article and develops it on its own
terms; the article stays the deeper version for whoever wants sixteen
pages.

The ratio shifts as the bank is spent: roughly half derived in October and
November, a quarter by December, with original work taking over.

---

## Open before drafting starts

1. **Firm facts for the first post.** Years in practice, number of
   projects, sectors served, and which figures may be stated publicly.
   This is the only text that cannot be written without the owner.
2. **Fact-check pass on the three December drafts.** Dates and sums in the
   Winklevoss draft, the 25% threshold and the FATF reference in the UBO
   draft. None has been checked against a primary source.
3. **Account status.** Whether the LinkedIn company page is filled, whether
   a Facebook page exists, whether PPA has been imposed.

---

## Objective

Both recognition and enquiries, in equal measure — the owner's decision,
taken against a recommendation of seventy-thirty in favour of practical
material.

The two pull different ways. Practical local topics reach few people and
reach the right ones; global cases reach many and convert none. Splitting
evenly means accepting an audience of which a good half will never be
clients, in exchange for the reach that makes the other half findable.

**October stays practical throughout.** It is the month that establishes
what the firm is, and a piece on Enron sitting in the middle of it would
undo that. The even split runs from November, which makes October to
December roughly sixty-five thirty-five, and every month after that even.

## The path from a post to a conversation

For the first two months: the article on the site, and nothing else.

Building a funnel while the follower count is zero optimises an empty
room, and conversion mechanics on an account with no history read as
exactly the thing this brand refuses to be. So the route stays passive —
the post is shallow, the article is deep, and whoever wants more finds it.

One concrete change: **the Instagram bio link points at `/insights`, not
at the home page.** Instagram makes no link clickable anywhere except the
bio, so that single link is the only route off the platform, and it should
not land on a general page.

Revisit in month three, when there is somebody to convert. The obvious
next step then is `/store` — templates are useful rather than salesy.

## Audience

| | Who | What they need |
|---|---|---|
| Instagram | Russian-speaking founders, finance directors and lawyers in Tashkent | Less Uzbek context, more international comparison. They live here; they want to know how it works elsewhere. |
| LinkedIn | Foreign investors, their counsel, regional corporate development | The Uzbek context spelled out. They know the law in general and this jurisdiction not at all. |
| Facebook | The local business community, skewing older | The practical version. Shorter than LinkedIn, with the link that Instagram cannot carry. |
| Twitter / X | International finance and legal professionals, journalists, other advisers | One sharp proposition. They are scrolling, not reading. |

## Measurement

The baseline is zero on every platform, which makes the first three months
unusually easy to read: anything is a change.

Reviewed monthly: followers, saves and profile visits on Instagram, link
clicks off every platform, and the median engagement per post so that
individual topics can be compared against the account's own norm rather
than against nothing.

A topic that lands below half the account's median drops out of rotation.
A topic well above it becomes a candidate for a full article on the site —
social is cheaper than the site, so it is the right place to test whether
a subject has an audience before writing sixteen pages about it.

The only measure that settles the question is an enquiry that mentions a
post. One of those is worth more than a month of impressions.

---

Run through `marketing:campaign-plan`. The result is in
[CAMPAIGN-BRIEF.md](CAMPAIGN-BRIEF.md): the measurable objective, the
production calendar that runs ahead of this one, the asset count, targets,
and the six risks — of which the first, that the publishing pipeline Phase
2 assumes does not exist yet, is the one that can stop this mid-October.
