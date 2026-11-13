#!/usr/bin/env python3
"""Check that the end of every paragraph, list item and box line made it into the PDF."""
import json, re, html, sys
from pypdf import PdfReader
norm = lambda s: re.sub(r"[^a-z0-9]", "", html.unescape(re.sub("<[^>]+>", "", s)).lower())
pages = [norm(p.extract_text() or "") for p in PdfReader("Doing-Business-in-Uzbekistan-2026.pdf").pages]
full = "".join(pages)
book = json.loads(open("book-data.js").read().split("=", 1)[1].rstrip().rstrip(";"))
def texts(blocks):
    for b in blocks:
        if b["t"] in ("p", "h2", "h3", "quote"): yield b["html"]
        elif b["t"] == "ul": yield from b["items"]
        elif b["t"] in ("box", "example"):
            yield from texts(b["body"])
miss = 0
for ch in book["chapters"]:
    for t in texts(ch.get("blocks", [])):
        words = re.sub("<[^>]+>", "", html.unescape(t)).split()
        tail = norm(" ".join(words[-5:]))
        if tail and tail not in full:
            miss += 1; print(ch["file"], "|", " ".join(words[-8:]))
print("missing:", miss)
