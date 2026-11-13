# Doing Business in Uzbekistan 2026 — source

Source of the A4 PDF guide published at `public/guides/Doing-Business-in-Uzbekistan-2026.pdf`.
This folder is not part of the website build.

## Files

- `content/*.md` — the text, one file per chapter, plus the tax calendar appendix.
- `book.json` — chapter order, opener style and pictures for each chapter.
- `build.py` — turns `content/*.md` and `book.json` into `book-data.js`.
- `book.html`, `book.css`, `engine.js` — the page layout engine; open `book.html` in Chrome to see the book.
- `img/` — pictures and flags used in the book.
- `export.sh` — rebuilds `book-data.js` and prints the PDF with headless Chrome.
- `checktext.py` — checks that every paragraph made it into the PDF (needs `pypdf`).
- `verify-list.md` — facts marked for checking before publishing.

## Rebuild the PDF

```sh
cd docs/dbu
./export.sh
```

The script writes `Doing-Business-in-Uzbekistan-2026.pdf` here (Google Chrome must be installed in `/Applications`).
Copy it to `public/guides/` to update the site. The generated PDF in this folder is not committed.

On Linux (for example in a Claude Code cloud session), build with Playwright Chromium instead of export.sh:

```sh
cd docs/dbu && python3 build.py && cd ../..
NODE_PATH=$(npm root -g) node docs/dbu/build-linux.cjs docs/dbu public/guides/Doing-Business-in-Uzbekistan-2026.pdf
node scripts/image-variants.mjs   # new content hash for the PDF link
```

Line breaks can differ slightly from the Mac build because of hyphenation.
