// One-time setup: turns a short-lived user token from Graph API Explorer into a Page token that does not expire,
// and finds the Instagram business account linked to the Page.
// Needs in .env.social: META_APP_ID, META_APP_SECRET, META_PAGE_ID, META_USER_TOKEN.
// Writes META_PAGE_TOKEN and IG_USER_ID, and clears META_USER_TOKEN. Prints no token values.
// Usage: node scripts/social/setup-token.mjs        (or --check to only verify the saved Page token)
import { graph, readEnv, writeEnv } from "./meta.mjs";

const env = readEnv();
const need = (k) => {
  if (!env[k]) throw new Error(`${k} is empty in .env.social`);
  return env[k];
};

async function check(pageToken) {
  const appToken = `${need("META_APP_ID")}|${need("META_APP_SECRET")}`;
  const d = (await graph("GET", "/debug_token", { input_token: pageToken, access_token: appToken })).data;
  const exp = d.expires_at ? new Date(d.expires_at * 1000).toISOString().slice(0, 10) : "never";
  console.log(`Page token: valid=${d.is_valid}, type=${d.type}, expires=${exp}`);
  console.log(`Permissions: ${(d.scopes || []).join(", ")}`);
  const want = ["pages_manage_posts", "pages_read_engagement", "instagram_basic", "instagram_content_publish"];
  const missing = want.filter((s) => !(d.scopes || []).includes(s));
  if (missing.length) console.log(`Missing permissions: ${missing.join(", ")}`);
}

if (process.argv.includes("--check")) {
  await check(need("META_PAGE_TOKEN"));
  process.exit(0);
}

const pageId = need("META_PAGE_ID");
const long = await graph("GET", "/oauth/access_token", {
  grant_type: "fb_exchange_token",
  client_id: need("META_APP_ID"),
  client_secret: need("META_APP_SECRET"),
  fb_exchange_token: need("META_USER_TOKEN"),
});
const pages = await graph("GET", "/me/accounts", {
  fields: "id,name,access_token,instagram_business_account{id,username}",
  limit: "100",
  access_token: long.access_token,
});
const page = (pages.data || []).find((p) => p.id === pageId);
if (!page) {
  console.error(`Page ${pageId} is not in the token's page list. Pages found: ${(pages.data || []).map((p) => `${p.name} (${p.id})`).join(", ") || "none"}`);
  console.error("In Graph API Explorer, make sure the Advizen Consulting Page was ticked when granting access.");
  process.exit(1);
}
const ig = page.instagram_business_account;
writeEnv({ META_PAGE_TOKEN: page.access_token, IG_USER_ID: ig?.id || "", META_USER_TOKEN: "" });
console.log(`Saved the Page token for "${page.name}".`);
console.log(ig ? `Instagram account: @${ig.username} (${ig.id})` : "No Instagram business account is linked to this Page.");
await check(page.access_token);
