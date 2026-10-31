# Advizen website

The site at [advizenco.com](https://www.advizenco.com): tax, legal and
accounting advisory in Uzbekistan, in English, Russian and Uzbek.

Next.js 16 (App Router) with next-intl, Tailwind CSS 4, deployed to
Cloudflare Workers through OpenNext. Social content lives in its own
repository, [advizen-social](https://github.com/javadabdullaev97-coder/advizen-social).

## Run it

```bash
npm ci
npm run dev
```

```bash
npm run build:next   # Next.js production build, the quickest full check
npm run build        # the Cloudflare build that deploys
npm run lint
```

## Deploy

Every push to `main` deploys: Cloudflare Workers Builds runs `npm run build`
and `npx wrangler deploy`. See `AGENTS.md` for the push rules.

## Environment variables

Set them on the Cloudflare Worker (`advizen`); `wrangler.jsonc` holds the
ones that are not secret.

| Variable | Used by |
| --- | --- |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | contact-form notifications to the team |
| `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` | emails for contact requests |
| `INDEXNOW_SECRET` | `/api/indexnow`, which pings Bing and Yandex about new pages |

## Where things are

| Path | What |
| --- | --- |
| `src/app/[locale]/` | pages; English has no prefix (`src/app/(en)/` re-exports them) |
| `src/components/home/` | homepage sections |
| `src/app/api/` | contact form and IndexNow |
| `src/lib/` | content and data: services, articles, FAQ, SEO |
| `messages/{en,ru,uz}/` | interface text, one file per area |
| `public/` | images, favicons, `llms.txt`, verification files |
| `DESIGN.md` | brand and design rules |
