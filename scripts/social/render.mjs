// Renders a social post from social/posts/<slug>/post.json into carousel slides.
// Output: public/social/<slug>/01.jpg … (1080×1350, for Instagram and Facebook)
//         public/social/<slug>/<slug>.pdf (the same slides in one file, for LinkedIn document posts)
// Usage: node scripts/social/render.mjs <slug>
// Needs Google Chrome in /Applications and macOS `sips` (JPEG conversion).
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/social/render.mjs <slug>");
  process.exit(1);
}
const post = JSON.parse(fs.readFileSync(path.join(ROOT, "social/posts", slug, "post.json"), "utf8"));
// "format": "story" renders 1080×1920 Instagram stories (for highlights); the default is a 1080×1350 feed carousel.
const STORY = post.format === "story";
// SHOW_STICKER=1 draws a dashed box where the link sticker goes (for previews only).
const SHOW_STICKER = process.env.SHOW_STICKER === "1";
const W = 1080, H = STORY ? 1920 : 1350;
const outDir = path.join(ROOT, "public/social", slug);
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "advizen-social-"));

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// **bold** inside text becomes the accent colour.
// Russian typesetting: keep "№ 76", "п. 15", "ст. 36" and one- or two-letter words with the next word.
const nb = (s) => s.replace(/(№|п\.|ст\.|ч\.) /g, "$1\u00a0").replace(/(^|[\s(«—*])([А-Яа-яЁёA-Za-z]{1,2}) /g, "$1$2\u00a0");
const rich = (s) => nb(esc(s)).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>");
const logo = "file://" + path.join(ROOT, "public/Logo.webp");
const L = post.lang === "en" ? { swipe: "Swipe", of: "of" } : { swipe: "Листайте", of: "из" };

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=block");
@page { size: ${W}px ${H}px; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: #0b0b0c; }
body { font-family: Manrope, system-ui, sans-serif; color: #e3e3e6; -webkit-font-smoothing: antialiased; }
.s { width: ${W}px; height: ${H}px; padding: 84px 88px 72px; display: flex; flex-direction: column; position: relative; overflow: hidden; break-after: page; background: #0b0b0c; }
.s.cta { background: #940e27; }
.top { display: flex; align-items: center; justify-content: space-between; height: 56px; }
.mark { display: flex; align-items: center; gap: 16px; font-weight: 700; font-size: 26px; letter-spacing: 0.22em; color: #f5f5f7; }
.mark img { width: 52px; height: 52px; object-fit: contain; }
.rub { font-size: 24px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #a1a1a6; }
.cta .mark img { filter: brightness(0) invert(1); }
.cta .rub { color: rgba(255,255,255,.75); }
.body { flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 0; }
.kicker { font-size: 30px; font-weight: 600; color: #e0455f; letter-spacing: 0.02em; margin-bottom: 36px; }
h1 { font-size: 92px; font-weight: 600; letter-spacing: -0.045em; line-height: 0.98; color: #f5f5f7; text-wrap: balance; }
.sub { font-size: 38px; line-height: 1.35; color: #c7c7cc; margin-top: 44px; max-width: 840px; text-wrap: pretty; }
.n { font-size: 30px; font-weight: 700; color: #e0455f; margin-bottom: 30px; font-variant-numeric: tabular-nums; }
h2 { font-size: 72px; font-weight: 600; letter-spacing: -0.04em; line-height: 1.02; color: #f5f5f7; text-wrap: balance; }
.text { font-size: 38px; line-height: 1.42; color: #e3e3e6; margin-top: 40px; text-wrap: pretty; }
.text p + p { margin-top: 24px; }
ul { list-style: none; margin-top: 40px; }
li { font-size: 37px; line-height: 1.38; padding-left: 52px; position: relative; text-wrap: pretty; }
li + li { margin-top: 22px; }
li::before { content: ""; position: absolute; left: 0; top: 0.68em; width: 28px; height: 4px; background: #e0455f; }
b { color: #f5f5f7; font-weight: 700; }
.fig { font-size: 260px; font-weight: 600; letter-spacing: -0.06em; line-height: 0.9; color: #f5f5f7; }
.fig small { font-size: 72px; letter-spacing: -0.03em; margin-left: 12px; color: #e0455f; }
.cta h2 { font-size: 84px; }
.cta .text { color: #fbeff1; }
.contacts { margin-top: 64px; display: grid; gap: 18px; }
.contacts div { font-size: 38px; font-weight: 600; color: #fff; }
.contacts span { display: block; font-size: 22px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,.65); margin-bottom: 4px; }
.foot { display: flex; justify-content: space-between; align-items: flex-end; gap: 40px; font-size: 22px; line-height: 1.35; color: #8a8a8f; padding-top: 28px; border-top: 2px solid rgba(255,255,255,.09); }
.cta .foot { color: rgba(255,255,255,.7); border-top-color: rgba(255,255,255,.25); }
.foot .pg { white-space: nowrap; font-variant-numeric: tabular-nums; }
.bar { position: absolute; left: 0; top: 0; height: 10px; background: #940e27; }
.photo { padding: 0; background: #e9e6e1; }
.doc { padding: 0; background: radial-gradient(circle at 50% 60%, #f6f4f0 0%, #e9e6e1 60%, #ddd9d2 100%); }
.doc .ptext { position: absolute; left: 88px; right: 88px; top: 250px; display: block; flex: none; padding-bottom: 8px; max-height: 450px; }
.doc .cover { position: absolute; left: 50%; top: 720px; width: 700px; height: 700px; transform: translateX(-50%); border-radius: 18px; object-fit: cover;
  box-shadow: 0 40px 80px rgba(40, 20, 20, .28), 0 8px 20px rgba(0, 0, 0, .18); }
.doc .sticker { position: absolute; left: 50%; top: 1480px; transform: translateX(-50%); width: 560px; height: 120px; border: 3px dashed rgba(148, 14, 39, .35); border-radius: 24px; display: grid; place-items: center; font-size: 26px; font-weight: 600; color: rgba(148, 14, 39, .55); }
.photo .bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.photo .low { -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 14%); mask-image: linear-gradient(180deg, transparent 0, #000 14%); }
.photo .shade { position: absolute; left: 0; right: 0; top: 0; height: ${STORY ? 1050 : 620}px; background: linear-gradient(180deg, rgba(244,242,238,.82) 0%, rgba(244,242,238,.55) 55%, rgba(244,242,238,0) 100%); }
.photo .ptext { position: absolute; left: 88px; right: 88px; top: ${STORY ? 250 : 92}px; max-height: ${STORY ? 860 : 570}px; flex: none; display: block; overflow: hidden; }
.pkicker { font-size: 28px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #940e27; margin-bottom: 26px; }
.ph { font-size: 92px; font-weight: 800; letter-spacing: -0.045em; line-height: 0.98; color: #1d1d1f; text-wrap: balance; }
.ph b { color: #940e27; font-weight: 800; }
.psub { font-size: 40px; line-height: 1.3; font-weight: 500; color: #3a3a3d; margin-top: 30px; text-wrap: pretty; }
.psub b { color: #1d1d1f; }
.plist { margin-top: 34px; font-size: 38px; line-height: 1.3; font-weight: 600; color: #1d1d1f; }
.plist div + div { margin-top: 14px; }
.plist div::before { content: ""; display: inline-block; width: 26px; height: 4px; background: #940e27; vertical-align: middle; margin-right: 18px; }
.pcontacts { margin-top: 34px; font-size: 34px; line-height: 1.32; font-weight: 700; color: #940e27; }
.pfoot { position: absolute; left: 88px; right: 88px; bottom: ${STORY ? 250 : 64}px; display: flex; justify-content: space-between; align-items: center; gap: 30px; }
.pmark { display: flex; align-items: center; gap: 14px; font-weight: 800; font-size: 26px; letter-spacing: 0.22em; color: #1d1d1f; padding: 14px 22px; border-radius: 999px; background: rgba(255,255,255,.82); }
.pmark img { width: 40px; height: 40px; object-fit: contain; }
.pfoot span { font-size: 21px; font-weight: 600; color: #3a3a3d; padding: 10px 18px; border-radius: 999px; background: rgba(255,255,255,.82); }
${STORY ? `.ph { font-size: 112px; } .psub { font-size: 46px; } .plist { font-size: 44px; } .pkicker { font-size: 32px; } .pcontacts { font-size: 46px; } .pmark { font-size: 30px; } .pfoot span { font-size: 26px; } .pfoot { display: none; }` : ""}
`;

// A slide over a full-bleed photo: headline and one line at the top, logo and source at the bottom.
// "img" is relative to the post folder; "pos" is the CSS object-position for the crop (default: centre).
function photoHTML(sl, i, total) {
  const src = "file://" + path.join(ROOT, "social/posts", slug, sl.img);
  const last = i === total - 1;
  // The closing slide always carries all four contacts.
  const contacts = sl.contacts
    ? `<div class="pcontacts"><div>advizenco.com</div><div>+998&nbsp;33&nbsp;488&nbsp;48&nbsp;88</div><div>info@advizenco.com</div><div>Telegram: @advizen</div></div>`
    : "";
  // "lower": N shrinks the sharp picture to N% of the height, anchored at the bottom, over a blurred copy of itself,
  // so a tall text block does not sit on the object.
  const lower = sl.lower
    ? `<img class="bg low" src="${src}" style="height:${sl.lower}%;top:auto;bottom:0;object-position:${sl.pos || "50% 50%"}" alt="">`
    : `<img class="bg" src="${src}" style="object-position:${sl.pos || "50% 50%"}" alt="">`;
  return `<section class="s photo">${lower}
<div class="shade"></div>
<div class="body ptext">${sl.kicker ? `<div class="pkicker">${esc(sl.kicker)}</div>` : ""}<h2 class="ph">${rich(sl.title)}</h2>${sl.text ? `<p class="psub">${rich(sl.text)}</p>` : ""}${sl.items ? `<div class="plist">${sl.items.map((x) => `<div>${rich(x)}</div>`).join("")}</div>` : ""}${contacts}</div>
<div class="pfoot"><div class="pmark"><img src="${logo}" alt="">ADVIZEN</div><span>${esc(sl.source ?? post.source ?? "")}${last ? "" : ""}</span></div></section>`;
}

// A story that shows a document cover (a guide) on light stone, with an empty band under it
// for the Instagram link sticker, which is added by hand in the app.
function docHTML(sl) {
  const src = "file://" + path.join(ROOT, "social/posts", slug, sl.img);
  return `<section class="s doc"><div class="body ptext">${sl.kicker ? `<div class="pkicker">${esc(sl.kicker)}</div>` : ""}<h2 class="ph">${rich(sl.title)}</h2>${sl.text ? `<p class="psub">${rich(sl.text)}</p>` : ""}</div>
<img class="cover" src="${src}" alt="">${SHOW_STICKER ? `<div class="sticker">${esc(sl.sticker || "ссылка")}</div>` : ""}</section>`;
}

function slideHTML(sl, i, total) {
  if (sl.type === "photo") return photoHTML(sl, i, total);
  if (sl.type === "doc") return docHTML(sl);
  const head = `<div class="top"><div class="mark"><img src="${logo}" alt="">ADVIZEN</div><div class="rub">${esc(post.rubric)}</div></div>`;
  const last = i === total - 1;
  const swipe = sl.type === "cover" ? `${L.swipe} →` : `${i + 1} ${L.of} ${total}`;
  const foot = `<div class="foot"><span>${esc(sl.source ?? post.source ?? "")}</span><span class="pg">${last ? "advizenco.com" : swipe}</span></div>`;
  const bar = `<div class="bar" style="width:${Math.round(((i + 1) / total) * W)}px"></div>`;
  let inner = "";
  if (sl.type === "cover") {
    inner = `${sl.kicker ? `<div class="kicker">${esc(sl.kicker)}</div>` : ""}<h1>${rich(sl.title)}</h1>${sl.sub ? `<p class="sub">${rich(sl.sub)}</p>` : ""}`;
  } else if (sl.type === "figure") {
    inner = `<div class="fig">${esc(sl.figure)}${sl.unit ? `<small>${esc(sl.unit)}</small>` : ""}</div><h2 style="margin-top:48px">${rich(sl.title)}</h2>${sl.text ? `<div class="text">${rich(sl.text)}</div>` : ""}`;
  } else if (sl.type === "cta") {
    const c = post.lang === "en"
      ? [["Website", "advizenco.com"], ["Phone", "+998 33 488 48 88"], ["Email", "info@advizenco.com"], ["Telegram", "@advizen"]]
      : [["Сайт", "advizenco.com"], ["Телефон", "+998 33 488 48 88"], ["Почта", "info@advizenco.com"], ["Telegram", "@advizen"]];
    inner = `<h2>${rich(sl.title)}</h2>${sl.text ? `<div class="text">${rich(sl.text)}</div>` : ""}<div class="contacts">${c.map(([k, v]) => `<div><span>${k}</span>${v}</div>`).join("")}</div>`;
  } else {
    const num = sl.n ?? String(i).padStart(2, "0");
    const paras = sl.text ? `<div class="text">${[].concat(sl.text).map((p) => `<p>${rich(p)}</p>`).join("")}</div>` : "";
    const list = sl.items ? `<ul>${sl.items.map((x) => `<li>${rich(x)}</li>`).join("")}</ul>` : "";
    const note = sl.note ? `<div class="text">${rich(sl.note)}</div>` : "";
    inner = `<div class="n">${esc(num)}</div><h2>${rich(sl.title)}</h2>${paras}${list}${note}`;
  }
  return `<section class="s ${sl.type === "cta" ? "cta" : ""}">${bar}${head}<div class="body">${inner}</div>${foot}</section>`;
}

const READY = `<script>
(async () => {
  await document.fonts.ready;
  const bad = [];
  document.querySelectorAll(".s").forEach((s, i) => {
    const b = s.querySelector(".body");
    if (b.scrollHeight > b.clientHeight + 1) bad.push("slide " + (i + 1) + " overflows by " + (b.scrollHeight - b.clientHeight) + "px");
  });
  document.body.dataset.ready = bad.length ? "OVERFLOW: " + bad.join("; ") : "OK";
})();
</script>`;
const page = (sections) => `<!doctype html><html lang="${post.lang || "ru"}"><head><meta charset="utf-8"><style>${CSS}</style></head><body>${sections}${READY}</body></html>`;

const chrome = (args) => execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1", "--virtual-time-budget=10000", ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });

const total = post.slides.length;
if (total > 10 && !STORY) throw new Error(`Instagram carousels take at most 10 slides; this post has ${total}.`);
const all = post.slides.map((sl, i) => slideHTML(sl, i, total));

// Check every slide for text running past its area before writing anything.
const allFile = path.join(tmp, "all.html");
fs.writeFileSync(allFile, page(all.join("")));
const dom = chrome(["--dump-dom", "file://" + allFile]);
const status = (dom.match(/data-ready="([^"]*)"/) || [])[1] || "NO-READY";
if (status !== "OK") {
  console.error(status);
  process.exit(2);
}

all.forEach((html, i) => {
  const f = path.join(tmp, `s${i + 1}.html`);
  fs.writeFileSync(f, page(html));
  const png = path.join(tmp, `s${i + 1}.png`);
  chrome([`--window-size=${W},${H}`, `--screenshot=${png}`, "file://" + f]);
  const jpg = path.join(outDir, `${String(i + 1).padStart(2, "0")}.jpg`);
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "92", png, "--out", jpg], { stdio: "ignore" });
});
chrome(["--no-pdf-header-footer", `--print-to-pdf=${path.join(outDir, slug + ".pdf")}`, "file://" + allFile]);
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`OK  ${total} slides → public/social/${slug}/`);
