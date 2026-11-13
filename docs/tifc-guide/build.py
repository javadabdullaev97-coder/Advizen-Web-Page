"""Writes en.html and ru.html from en.src.html and ru.src.html, numbering the page footers."""
from pathlib import Path
here = Path(__file__).parent
FOOT = ('<footer class="foot"><span class="mark"><img src="../company-profile/img/logo.png" alt="">ADVIZEN</span>'
        '<span class="contacts">advizenco.com · info@advizenco.com · +998 33 488 48 88</span><span class="num">{n}</span></footer>')
for lang in ("en", "ru"):
    src = here / f"{lang}.src.html"
    if not src.exists():
        continue
    parts = src.read_text().split("<!--FOOT-->")
    out = parts[0]
    for i, p in enumerate(parts[1:], start=2):
        out += FOOT.format(n=i) + p
    (here / f"{lang}.html").write_text(out)
    print(lang, len(parts) - 1, "footers")
