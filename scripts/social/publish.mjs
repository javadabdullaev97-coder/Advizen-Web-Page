// Publishes a rendered post to the Advizen Facebook Page and Instagram account.
// Usage: node scripts/social/publish.mjs <slug> [--fb] [--ig] [--dry-run]
//   With neither --fb nor --ig, both are published.
// The post must have "status": "approved" in social/posts/<slug>/post.json.
// Facebook gets one photo (the cover) with caption.fb (or caption.ru); Instagram gets the whole carousel with caption.ru.
// Instagram fetches images by URL, so public/social/<slug>/ must already be deployed to advizenco.com.
// Results go to social/posts/<slug>/published.json; a channel that is already there is skipped.
import fs from "node:fs";
import path from "node:path";
import { ROOT, graph, readEnv, sleep } from "./meta.mjs";

const SITE = "https://advizenco.com";
const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith("--"));
if (!slug) {
  console.error("Usage: node scripts/social/publish.mjs <slug> [--fb] [--ig] [--dry-run]");
  process.exit(1);
}
const dry = args.includes("--dry-run");
let wantFb = args.includes("--fb"), wantIg = args.includes("--ig");
if (!wantFb && !wantIg) wantFb = wantIg = true;

const postDir = path.join(ROOT, "social/posts", slug);
const post = JSON.parse(fs.readFileSync(path.join(postDir, "post.json"), "utf8"));
if (post.status !== "approved" && !dry) {
  console.error(`Post status is "${post.status}". Set "status": "approved" once the owner has approved it.`);
  process.exit(1);
}
const imgDir = path.join(ROOT, "public/social", slug);
const files = fs.readdirSync(imgDir).filter((f) => /^\d\d\.jpg$/.test(f)).sort();
if (!files.length) throw new Error(`No rendered slides in public/social/${slug}. Run render.mjs first.`);
const pubFile = path.join(postDir, "published.json");
const published = fs.existsSync(pubFile) ? JSON.parse(fs.readFileSync(pubFile, "utf8")) : {};
const save = () => fs.writeFileSync(pubFile, JSON.stringify(published, null, 2) + "\n");

const env = readEnv();
const pageId = env.META_PAGE_ID, token = env.META_PAGE_TOKEN, igId = env.IG_USER_ID;

async function publishFacebook() {
  if (published.facebook) return console.log(`Facebook: already published (${published.facebook.id}), skipped.`);
  const message = post.caption.fb || post.caption.ru;
  console.log(`Facebook: cover ${files[0]} + ${message.length} characters of text.`);
  if (dry) return;
  const form = new FormData();
  form.set("source", await fs.openAsBlob(path.join(imgDir, files[0]), { type: "image/jpeg" }), files[0]);
  form.set("message", message);
  form.set("published", "true");
  form.set("access_token", token);
  const r = await graph("POST", `/${pageId}/photos`, {}, form);
  published.facebook = { id: r.post_id || r.id, url: `https://www.facebook.com/${r.post_id || r.id}`, at: new Date().toISOString() };
  save();
  console.log(`Facebook: published ${published.facebook.url}`);
}

async function publishInstagram() {
  if (published.instagram) return console.log(`Instagram: already published (${published.instagram.url}), skipped.`);
  if (files.length > 10) throw new Error("Instagram carousels take at most 10 images.");
  const urls = files.map((f) => `${SITE}/social/${slug}/${f}`);
  // Instagram downloads the images itself, so check they are live first.
  for (const u of urls) {
    const r = await fetch(u, { method: "HEAD" });
    if (!r.ok || !(r.headers.get("content-type") || "").includes("image/jpeg")) {
      throw new Error(`${u} is not live yet (HTTP ${r.status}). Push public/social/${slug}/ to main and wait for the deploy.`);
    }
  }
  console.log(`Instagram: ${urls.length} slides, all live on ${SITE}.`);
  if (dry) return;
  const children = [];
  for (const u of urls) children.push((await graph("POST", `/${igId}/media`, { image_url: u, is_carousel_item: "true", access_token: token })).id);
  const container = (await graph("POST", `/${igId}/media`, {
    media_type: "CAROUSEL", children: children.join(","), caption: post.caption.ru, access_token: token,
  })).id;
  for (let i = 0; i < 30; i++) {
    const s = await graph("GET", `/${container}`, { fields: "status_code", access_token: token });
    if (s.status_code === "FINISHED") break;
    if (s.status_code === "ERROR" || s.status_code === "EXPIRED") throw new Error(`Instagram container status ${s.status_code}`);
    await sleep(3000);
  }
  const media = (await graph("POST", `/${igId}/media_publish`, { creation_id: container, access_token: token })).id;
  const info = await graph("GET", `/${media}`, { fields: "permalink", access_token: token });
  published.instagram = { id: media, url: info.permalink, at: new Date().toISOString() };
  save();
  console.log(`Instagram: published ${info.permalink}`);
}

if (!dry && (!token || (wantIg && !igId))) throw new Error("META_PAGE_TOKEN / IG_USER_ID are empty. Run scripts/social/setup-token.mjs first.");
if (wantFb) await publishFacebook();
if (wantIg) await publishInstagram();
if (!dry && (published.facebook || published.instagram)) {
  post.status = "published";
  fs.writeFileSync(path.join(postDir, "post.json"), JSON.stringify(post, null, 2) + "\n");
}
