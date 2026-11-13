// Linux equivalent of docs/dbu/export.sh: lay the book out in Playwright Chromium and print it to PDF.
// Usage (after `python3 build.py`): NODE_PATH=$(npm root -g) node docs/dbu/build-linux.cjs docs/dbu <out.pdf>
// The PDF title comes from document.title, which engine.js sets to the book title before data-ready.
const { chromium } = require("playwright");
const path = require("path");
const { pathToFileURL } = require("url");

const [dir, out] = process.argv.slice(2);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const failed = [];
  page.on("requestfailed", (r) => failed.push(r.url() + " " + (r.failure() || {}).errorText));
  await page.goto(pathToFileURL(path.resolve(dir, "book.html")).href, { waitUntil: "load" });
  await page.waitForFunction(() => document.body.dataset.ready, null, { timeout: 120000 });
  const ready = await page.evaluate(() => document.body.dataset.ready);
  const fonts = await page.evaluate(() => [...document.fonts].filter((f) => f.status === "loaded").map((f) => `${f.family} ${f.weight}`));
  console.log('data-ready="' + ready + '"');
  console.log("loaded faces:", fonts.length, [...new Set(fonts)].join(", "));
  if (failed.length) console.log("failed requests:\n " + failed.join("\n "));
  await page.pdf({ path: path.resolve(out), printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
