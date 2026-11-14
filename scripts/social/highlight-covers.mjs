// Renders Instagram highlight covers: a burgundy glass tile with a white line icon on a graphite background.
// Output: public/social/highlight-covers/<name>.jpg (1080×1920; Instagram shows the centre as a circle).
// Usage: node scripts/social/highlight-covers.mjs
// Icons are Lucide-style strokes on a 24×24 grid.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = path.join(ROOT, "public/social/highlight-covers");

const ICONS = {
  "o-nas": `<circle cx="12" cy="12" r="9.5"/><path d="M12 16.5v-5"/><circle cx="12" cy="7.8" r=".6" fill="#fff"/>`,
  uslugi: `<rect x="2.5" y="7" width="19" height="13.5" rx="2.5"/><path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><path d="M2.5 12.5h19"/>`,
  gidy: `<path d="M2.5 4.5h6a3.5 3.5 0 0 1 3.5 3.5v12a2.5 2.5 0 0 0-2.5-2.5h-7z"/><path d="M21.5 4.5h-6A3.5 3.5 0 0 0 12 8v12a2.5 2.5 0 0 1 2.5-2.5h7z"/>`,
  kontakty: `<path d="M21.5 16.4v2.9a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7 18.8 18.8 0 0 1-2.9-8.2A1.9 1.9 0 0 1 4.5 2.5h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.7a1.9 1.9 0 0 1-.4 2l-1.2 1.2a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.7.7a1.9 1.9 0 0 1 1.6 1.9z"/>`,
};

const page = (svg) => `<!doctype html><html><head><meta charset="utf-8"><style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 1080px; height: 1920px; overflow: hidden; }
body { background: radial-gradient(circle at 50% 50%, #2c2c2f 0%, #1b1b1d 38%, #141415 70%); display: grid; place-items: center; }
.tile { position: relative; width: 600px; height: 600px; border-radius: 160px;
  background: linear-gradient(150deg, #c01a3d 0%, #940e27 48%, #6a0919 100%);
  box-shadow: 0 50px 90px rgba(120, 8, 30, .45), 0 10px 24px rgba(0, 0, 0, .45), inset 0 2px 0 rgba(255, 255, 255, .28), inset 0 -10px 30px rgba(0, 0, 0, .25);
  display: grid; place-items: center; overflow: hidden; }
.tile::before { content: ""; position: absolute; left: -10%; right: -10%; top: -40%; height: 75%; border-radius: 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, .22), rgba(255, 255, 255, 0)); }
svg { position: relative; width: 330px; height: 330px; fill: none; stroke: #fff; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
  filter: drop-shadow(0 6px 10px rgba(60, 0, 12, .35)); }
</style></head><body><div class="tile"><svg viewBox="0 0 24 24">${svg}</svg></div></body></html>`;

fs.mkdirSync(OUT, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "advizen-covers-"));
for (const [name, svg] of Object.entries(ICONS)) {
  const html = path.join(tmp, name + ".html"), png = path.join(tmp, name + ".png");
  fs.writeFileSync(html, page(svg));
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=1080,1920", `--screenshot=${png}`, "file://" + html], { stdio: "ignore" });
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "94", png, "--out", path.join(OUT, name + ".jpg")], { stdio: "ignore" });
  console.log(`OK  ${name}.jpg`);
}
fs.rmSync(tmp, { recursive: true, force: true });
