#!/bin/sh
# Build book-data.js from content/*.md, lay the book out in Chrome and print it to PDF.
cd "$(dirname "$0")"
python3 build.py ${BOOK_JSON:-book.json} || exit 1
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --virtual-time-budget=60000 --run-all-compositor-stages-before-draw \
  --dump-dom "file://$PWD/book.html" 2>/dev/null | grep -o 'data-ready="[^"]*"'
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=60000 \
  --run-all-compositor-stages-before-draw \
  --print-to-pdf="Doing-Business-in-Uzbekistan-2026.pdf" "file://$PWD/book.html" 2>/dev/null
ls -la Doing-Business-in-Uzbekistan-2026.pdf
