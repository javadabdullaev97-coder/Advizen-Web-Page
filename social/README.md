# Social posts

Carousels for Instagram, single-photo posts for the Facebook Page, PDF documents for LinkedIn.

## A post

`social/posts/<slug>/`
- `post.json` holds the slides, the captions (`caption.ru` for Instagram, `caption.fb` for Facebook) and the status: `draft` → `approved` (the owner said yes) → `published`.
- `img/` holds the background pictures, generated in Gemini: natural light, light stone, one deep-burgundy glass object, an empty top for the text.
- `published.json` records the post IDs and links once a post is live.

## Commands

```sh
node scripts/social/render.mjs <slug>           # slides → public/social/<slug>/01.jpg … and <slug>.pdf
node scripts/social/publish.mjs <slug> --dry-run
node scripts/social/publish.mjs <slug>          # Facebook + Instagram; --fb or --ig for one
```

Instagram downloads the slides from advizenco.com, so commit and push `public/social/<slug>/` and wait for the deploy before publishing.

## Tokens

They live in `.env.social` (git-ignored); see `social/env.example`. To set them up once:
1. Graph API Explorer, app advizen-analytics.
2. Get a User Token with `pages_show_list`, `pages_read_engagement`, `pages_manage_posts`, `instagram_basic`, `instagram_content_publish` and `business_management`, ticking the Advizen Consulting Page and Instagram account.
3. Paste it as `META_USER_TOKEN`, and the app secret as `META_APP_SECRET`.
4. Run `node scripts/social/setup-token.mjs`. It saves a Page token that does not expire. `--check` verifies it later.
