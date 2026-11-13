// Renders docs/company-profile/profile.html to public/guides/Advizen-Company-Profile-2026.pdf.
// Usage: NODE_PATH=$(npm root -g) node scripts/build-company-profile.mjs [--theme guide|dark] [--out <file.pdf>]
// Needs Playwright with Chromium (installed globally in Claude Code cloud sessions, or `npx playwright install chromium`).
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

// require() honours NODE_PATH, so a global Playwright install works without adding it to package.json.
const { chromium } = createRequire(import.meta.url)("playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const theme = arg("theme", "guide");
const out = path.resolve(arg("out", path.join(root, "public/guides/Advizen-Company-Profile-2026.pdf")));

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(root, "docs/company-profile/profile.html")).href, { waitUntil: "networkidle" });
await page.evaluate((t) => document.documentElement.setAttribute("data-theme", t), theme);
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`${theme} → ${path.relative(root, out)}`);
