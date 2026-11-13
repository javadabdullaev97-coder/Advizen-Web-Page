#!/usr/bin/env python3
"""Turn content/*.md into book-data.js for the layout engine (engine.js).

Usage: python3 build.py            -> writes book-data.js
The chapter order, opener style and pictures come from book.json.
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
CONTENT = ROOT / "content"


def inline(text: str) -> str:
    """Escape, then apply the few inline marks the format allows."""
    text = html.escape(text.strip(), quote=False)
    text = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r"\1", text)          # links -> text
    text = re.sub(r"\[VERIFY:?\s*([^\]]*)\]", r'<mark class="verify">check: \1</mark>', text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"\1", text)  # no italics: drop *x*
    text = text.replace(" -- ", " – ").replace("--", "–")
    return text


def parse_table(lines):
    rows = [l.strip().strip("|").split("|") for l in lines if l.strip().startswith("|")]
    rows = [[c.strip() for c in r] for r in rows]
    rows = [r for r in rows if not all(re.fullmatch(r":?-{2,}:?", c or "--") for c in r)]
    if not rows:
        return None
    head, body = rows[0], rows[1:]
    # An approximate dollar amount in a cell sits on its own line under the figure.
    usd = lambda c: re.sub(r"\s*\((~USD [^)]*)\)", r'<span class="usd">\1</span>', c)
    return {"head": [inline(c) for c in head], "rows": [[usd(inline(c)) for c in r] for r in body]}


def parse_simple(lines):
    """Paragraphs and bullet lists inside a box or example."""
    out, para, items = [], [], []

    def flush():
        nonlocal para, items
        if para:
            out.append({"t": "p", "html": inline(" ".join(para))})
            para = []
        if items:
            out.append({"t": "ul", "items": [inline(i) for i in items]})
            items = []

    for l in lines:
        s = l.strip()
        if not s:
            flush()
        elif re.match(r"^[-*•]\s+", s):
            if para:
                flush()
            items.append(re.sub(r"^[-*•]\s+", "", s))
        else:
            if items:
                flush()
            para.append(s)
    flush()
    return out


def parse_front(text):
    meta = {"figures": []}
    for line in text.splitlines():
        if not line.strip():
            continue
        m = re.match(r"^\s*-\s*(.+?)\s*\|\s*(.+)$", line)
        if m:
            meta["figures"].append({"value": m.group(1).strip(), "label": inline(m.group(2))})
            continue
        m = re.match(r"^(\w+):\s*(.*)$", line)
        if m and m.group(1) != "figures":
            meta[m.group(1)] = m.group(2).strip()
    return meta


def parse(path: Path):
    raw = path.read_text(encoding="utf-8")
    raw = re.sub(r"<!--.*?-->", "", raw, flags=re.S)
    meta, body = {}, raw
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, flags=re.S)
    if m:
        meta, body = parse_front(m.group(1)), m.group(2)
    lines = body.splitlines()
    blocks, i, para, items = [], 0, [], []

    def flush():
        nonlocal para, items
        if para:
            blocks.append({"t": "p", "html": inline(" ".join(para))})
            para = []
        if items:
            blocks.append({"t": "ul", "items": [inline(x) for x in items]})
            items = []

    while i < len(lines):
        line = lines[i]
        s = line.strip()
        if s.startswith(":::") and len(s) > 3:
            flush()
            kind, _, title = s[3:].partition(" ")
            j = i + 1
            inner = []
            while j < len(lines) and lines[j].strip() != ":::":
                inner.append(lines[j])
                j += 1
            i = j + 1
            if kind == "table":
                t = parse_table(inner)
                if t:
                    t.update(t="table", caption=inline(title) if title else "")
                    blocks.append(t)
            elif kind in ("kpis", "bars", "ratings"):
                rows = [[inline(c) for c in re.sub(r"^\s*[-*]\s*", "", l).split("|")] for l in inner if l.strip()]
                blocks.append({"t": kind, "caption": inline(title), "rows": rows})
            elif kind == "notes":
                rows = []
                for l in inner:
                    m = re.match(r"^\s*[-*]\s*(\([a-z0-9]+\))\s*(.+)$", l)
                    if m:
                        rows.append([inline(m.group(1)), inline(m.group(2))])
                blocks.append({"t": "notes", "rows": rows})
            elif kind in ("box", "example"):
                tlines = [l for l in inner if l.strip().startswith("|")]
                rest = [l for l in inner if not l.strip().startswith("|")]
                blocks.append({
                    "t": kind,
                    "title": inline(title),
                    "body": parse_simple(rest),
                    "table": parse_table(tlines) if tlines else None,
                })
            continue
        if s.startswith("|"):
            flush()
            j = i
            tl = []
            while j < len(lines) and lines[j].strip().startswith("|"):
                tl.append(lines[j])
                j += 1
            t = parse_table(tl)
            if t:
                t.update(t="table", caption="")
                blocks.append(t)
            i = j
            continue
        if s.startswith("### "):
            flush(); blocks.append({"t": "h3", "html": inline(s[4:])})
        elif s.startswith("## "):
            flush(); blocks.append({"t": "h2", "html": inline(s[3:])})
        elif s.startswith("# "):
            flush()  # chapter title lives in the front matter
        elif s.startswith(">"):
            flush()
            q = [s.lstrip("> ").strip()]
            while i + 1 < len(lines) and lines[i + 1].strip().startswith(">"):
                i += 1
                q.append(lines[i].strip().lstrip("> ").strip())
            blocks.append({"t": "quote", "html": inline(" ".join(q).strip('"“”'))})
        elif re.match(r"^[-*•]\s+", s):
            if para:
                flush()
            items.append(re.sub(r"^[-*•]\s+", "", s))
        elif re.match(r"^\d+[.)]\s+", s):
            if para:
                flush()
            items.append(re.sub(r"^\d+[.)]\s+", "", s))
        elif not s:
            flush()
        else:
            if items:
                flush()
            para.append(s)
        i += 1
    flush()
    return {
        "title": meta.get("title", path.stem),
        "lead": inline(meta.get("lead", "")),
        "figures": meta.get("figures", []),
        "blocks": blocks,
    }


def main():
    book = json.loads((ROOT / (sys.argv[1] if len(sys.argv) > 1 else "book.json")).read_text(encoding="utf-8"))
    for ch in book["chapters"]:
        f = CONTENT / ch["file"]
        if not f.exists():
            print(f"missing: {f.name}", file=sys.stderr)
            ch["missing"] = True
            continue
        ch.update(parse(f))
    (ROOT / "book-data.js").write_text("window.BOOK = " + json.dumps(book, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    words = sum(len(re.sub("<[^>]+>", "", json.dumps(c.get("blocks", []))).split()) for c in book["chapters"])
    print(f"book-data.js written, {len(book['chapters'])} chapters, ~{words} words")


if __name__ == "__main__":
    main()
