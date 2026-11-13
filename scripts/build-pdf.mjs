// Renders one of the HTML brochures in docs/ to an A4 PDF.
// Usage: NODE_PATH=$(npm root -g) node scripts/build-pdf.mjs <source.html> <output.pdf> [--theme guide|dark]
// Needs Playwright with Chromium (installed globally in Claude Code cloud sessions, or `npx playwright install chromium`).
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

// require() honours NODE_PATH, so a global Playwright install works without adding it to package.json.
const { chromium } = createRequire(import.meta.url)("playwright");
const [src, out] = process.argv.slice(2).filter((a, i, all) => !a.startsWith("--") && all[i - 1] !== "--theme");
if (!src || !out) {
  console.error("Usage: node scripts/build-pdf.mjs <source.html> <output.pdf> [--theme guide|dark]");
  process.exit(1);
}
const t = process.argv.indexOf("--theme");
const theme = t > -1 ? process.argv[t + 1] : null;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(path.resolve(src)).href, { waitUntil: "networkidle" });
if (theme) await page.evaluate((v) => document.documentElement.setAttribute("data-theme", v), theme);
await page.evaluate(() => document.fonts.ready);

// Fail loudly if any page's content runs into its footer.
const clash = await page.evaluate(() =>
  [...document.querySelectorAll(".page")].flatMap((pg, i) => {
    const foot = pg.querySelector(".foot");
    if (!foot) return [];
    const limit = foot.getBoundingClientRect().top;
    let bottom = 0;
    pg.querySelectorAll(".inner *").forEach((el) => {
      if (el.closest(".band-b")) return;
      const r = el.getBoundingClientRect();
      if (r.height && r.bottom > bottom) bottom = r.bottom;
    });
    return bottom > limit ? [`page ${i + 1} overlaps its footer by ${Math.ceil((bottom - limit) / 3.78)} mm`] : [];
  }),
);
await page.pdf({ path: path.resolve(out), format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`${src} → ${out}`);
if (clash.length) {
  console.error(clash.join("\n"));
  process.exit(2);
}
