# Article cover images — generation brief

Task for a Claude Code session running on the owner's computer with the **Claude in Chrome** extension, signed in to **Gemini** (gemini.google.com) in that Chrome.

Goal: for every article below, generate **4–5 candidate covers** in Gemini, save them, build one selection page, and wait for the owner to pick. Then apply the picks to the site.

## Style (approved)

Reference: `refs/style-reference-escrow.jpg` (approved by the owner). Keep from it only the **style**, not the subject:

- close camera, the subject fills ~70% of the frame height on the right two-thirds;
- dark marble plinth or wide dark marble table, graphite room barely visible (shallow depth of field);
- evening city bokeh in a window on the right, violet-blue sky with warm window lights;
- soft light from outside the frame — **no lamps, no light fixtures, no ceiling** in the frame;
- matte graphite and light grey materials, **exactly one element in translucent deep red glass** glowing softly;
- left side calmer (the site puts the title and subtitle there);
- **no text, no logos**, 16:9.

Do **not** put every subject in a glass display case — the case belongs to the escrow cover only. Alternate the base: a marble plinth for single objects, a wide marble table for districts and zones.

## Prompt = intro + subject + style block

Attach `refs/style-reference-escrow.jpg` to every Gemini request, then send:

**Intro**
```
Use the attached image only as the reference for style: the same close camera distance and angle, the same dark marble surface, graphite room, evening city bokeh in the window on the right, soft light from outside the frame and the same colours. Do not include the glass display case or the building from the reference. The new scene is described below.
```

**Subject** — one line from the table below.

**Style block**
```
Matte graphite and light grey model materials, exactly one element in translucent deep red glass glowing softly from within and casting a red reflection on the base. The model fills about 70% of the frame height on the right two-thirds of the image. Shallow depth of field, the room barely visible. No lamps or light fixtures, ceiling not visible. Rich, calm, premium. No text, no logos, 16:9
```

For each article, vary the candidates (camera a bit lower or higher, plinth vs table, a different way to show the red element) so the owner has a real choice — not five near-copies.

## Articles

| slug | current file in `public/Articles Image/` | subject |
|---|---|---|
| tashkent-international-financial-centre | `TIFC.webp` | On a wide dark marble table: a refined architectural scale model of a financial district, graceful light grey towers with soft curves and fine vertical lines around one dramatic twisting skyscraper made of red glass. (Owner also liked `refs/tifc-evening.jpg` and `refs/tifc-day-graphite.jpg` — include one candidate close to each.) |
| escrow-accounts-uzbekistan | `Escrow Accounts.webp` | **Approved: use `refs/style-reference-escrow.jpg` itself as one candidate.** Add 2–3 alternatives: inside a glass display case, a residential tower under construction with cranes, a red glass block at its base. |
| outsourcing-operational-activities | `Outsourcing Operational Activities.webp` | On a wide dark marble table: an office building model with a small separate service pavilion next to it, connected by a covered walkway made of red glass. |
| accounting-policy-tax-purposes | `Accounting Policy for Tax Purposes.webp` | On the dark marble plinth: an office tower model standing on a thick foundation slab made of red glass, its floors neatly aligned above it. |
| franchising-uzbekistan | `Franchising.webp` | On a wide dark marble table: a row of identical small graphite storefront models one behind another; the first storefront at the front, the original, is made of red glass. |
| payroll-social-contributions | `Payroll and Social Contributions.webp` | On the dark marble plinth: an office building model with tiny figurines walking towards it; the main entrance and its canopy are made of red glass. |
| creative-industry-park-uzbekistan | `Creative Industry Park.webp` | On a wide dark marble table: a creative campus model with low studio buildings, a small open-air amphitheatre and trees; the central pavilion is made of red glass. |
| online-gambling-uzbekistan | `Online Gambling Regulation.webp` | On the dark marble plinth: three large graphite dice; one die is made of red glass with softly glowing pips. |
| permanent-establishment-uzbekistan | `Permanent Establishment Risk.webp` | On the dark marble plinth: a small office building model on a base marked with a thin border line; a red glass outline of the building's footprint extends across the border line. |
| self-employment-uzbekistan | `Self-Employment.webp` | On the dark marble plinth: a small single-storey studio model with one tiny figurine working at a desk; the desk and its lamp are made of red glass. |
| crypto-asset-service-providers-uzbekistan | `Crypto-Asset Service Providers.webp` | On the dark marble plinth: a modern financial building model; above its roof floats a chain of small linked cubes, one of which is made of red glass. |
| licensing-procedures-uzbekistan | `Licensing Procedures.webp` | On a wide dark marble table: an official government building model with steps and columns; its entrance gate is made of red glass, a few tiny figurines waiting in front. |
| special-economic-zones-uzbekistan | `Special Economic Zones.webp` | On a wide dark marble table: an industrial zone model with factory buildings, roads and tiny trucks; the perimeter fence line around the zone is made of red glass. |
| accounting-law-uzbekistan | `Accounting Law in Uzbekistan.webp` | On the dark marble plinth: a tower made of stacked thin graphite slabs like pages of a ledger, perfectly aligned; one slab in the middle is made of red glass. |
| representative-offices-uzbekistan | `Representative Offices.webp` | On a wide dark marble table: a large graphite office tower with a small office pavilion beside it; the small pavilion is made of red glass. |
| voluntary-liquidation-uzbekistan | `Voluntary Liquidation.webp` | On the dark marble plinth: an office building model whose upper floors have been removed and neatly stacked on the base beside it; the remaining core is made of red glass. |
| pit-refunds-education-uzbekistan | `PIT Refunds for Education.webp` | On a wide dark marble table: a university building model with a colonnade and a courtyard with tiny trees; its dome is made of red glass. |
| employer-of-record-central-asia | `Employer of Record.webp` | On the dark marble plinth: an office building model with tiny figurines in front of it, sheltered by a wide canopy made of red glass. |
| islamic-finance-uzbekistan | `Islamic Finance.webp` | On a wide dark marble table: a building model with arches and a courtyard inspired by Central Asian architecture; in the courtyard stands an eight-pointed star made of red glass. |

## Procedure

1. Open gemini.google.com in a **new tab** (don't touch the owner's other tabs). One Gemini chat per article.
2. Attach the reference, send intro + subject + style block, regenerate or adjust until there are 4–5 good, distinct candidates. Reject images with text, logos, lamps, extra red elements, or a tiny subject in a huge room.
3. Download each image at **full resolution** (not a screenshot) to `image-candidates/<slug>/<n>.png` in the repo. That folder is git-ignored.
4. If Gemini hits its daily limit, stop, say how many articles are done, and continue the next day.
5. When all articles are done, build `image-candidates/index.html`: one section per article (title + slug), candidates side by side, each on the site's dark background `#0b0b0c` in a rounded 16:10 card with the article title under it, numbered 1–5. Open it for the owner and wait for the picks (e.g. "tifc 3, escrow 1, …").

## Applying the picks

For each pick:

1. Convert to WebP: width 1600 px, 16:9 (crop centred if needed), quality ~80, and **overwrite the current file name** from the table, so no code changes are needed. Example with sharp: `node -e "require('sharp')('image-candidates/<slug>/3.png').resize(1600, 900, {fit:'cover'}).webp({quality:80}).toFile('public/Articles Image/TIFC.webp')"`.
2. Run `node scripts/image-variants.mjs` (regenerates the phone/thumbnail copies in `public/_img/` and `src/lib/image-variants.ts`).
3. `npm run build:next`, `npx next start -p 3100`, check /insights and a couple of article pages on desktop and phone.
4. Commit the new WebP files, `public/_img/` and `src/lib/image-variants.ts`; push to `main` (see AGENTS.md). Never commit `image-candidates/`.
