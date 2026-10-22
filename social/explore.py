#!/usr/bin/env python3
"""
Design directions, side by side.

Not production. This renders the same three cards — a cover, a statement
and a list — in four different visual systems, so the choice is made by
looking rather than by describing. `theme.py` and `cards.py` are left
alone until one wins; whichever does gets folded back into them and this
file goes away.

    python3.12 social/explore.py

Writes public/social/_explore/<A|B|C|D>/01.png … 03.png
"""

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageStat

sys.path.insert(0, str(Path(__file__).parent))
import typeset as ts                                        # noqa: E402

ROOT = Path(__file__).parent.parent
OUT = ROOT / "public" / "social" / "_explore"
FONTS = Path(__file__).parent / "fonts"
LOGO = Path(__file__).parent / "logo.png"

W, H = 1080, 1350
CRIMSON = (152, 26, 48)

# The same post in every direction: slides 1, 2 and 4 of
# social/posts/permanent-establishment.toml.
RUBRIC = "НАЛОГИ"
TITLE = "Постоянное учреждение"
DECK = "Когда деятельность иностранной компании становится налогооблагаемой в Узбекистане"
STATEMENT = "Правило 183 дней знают все. Для постоянного места деятельности оно не работает."
LIST_HEAD = "Где 183 дня действительно работают"
LIST = [
    ("Строительная площадка", "Площадка, монтажный объект или надзор — более 183 дней в любом последовательном 12-месячном периоде."),
    ("Услуги через персонал", "Включая консультационные — не менее 183 дней в том же периоде."),
    ("Установки для добычи", "Разведка и разработка природных ресурсов — более 183 дней."),
]
PHOTO = ROOT / "public" / "social" / "source" / "advizen" / "05-consequence.jpg"


def f(name, size, weight=None):
    font = ImageFont.truetype(str(FONTS / f"{name}.ttf"), size)
    if weight is not None:
        try:
            font.set_variation_by_axes([weight])
        except OSError:
            pass
    return font


def logo(height, colour):
    src = Image.open(LOGO).convert("RGBA")
    w = round(src.width * height / src.height)
    mark = Image.new("RGBA", (w, height), colour + (0,))
    mark.putalpha(src.getchannel("A").resize((w, height), Image.LANCZOS))
    return mark


def foot(img, d, ink, mark_colour, y=1180, margin=96):
    """
    Logo and wordmark, one lockup, every direction.

    `ink` may be None, in which case it is read off what the lockup
    actually sits on. The foot lies on the picture rather than on any
    band, so a dark frame and a light one need opposite colours there and
    neither the tone of the card nor the author should have to remember
    which.
    """
    if ink is None:
        patch = img.crop((margin, y - 6, margin + 420, y + 36)).convert("L")
        ink = (236, 232, 226) if ImageStat.Stat(patch).mean[0] < 120 else E_INK
    font = f("Geist", 23, 500)
    mark = logo(26, mark_colour)
    img.paste(mark, (margin, y + font.getbbox("ADVIZEN")[3] - 26), mark)
    ts.tracked(d, (margin + mark.width + 20, y), "ADVIZEN", font, ink, 23 * 0.20)


def paper(img, strength=0.035):
    """A little tooth, so a flat light field does not read as a screen."""
    noise = ts._grain(img.size).point(lambda v: int(v * strength))
    mid = Image.new("RGB", img.size, (128, 128, 128))
    return Image.composite(Image.blend(img, mid, 0.5), img, noise)


def cover_photo(path, size=(W, H)):
    src = Image.open(path).convert("RGB")
    s = max(size[0] / src.width, size[1] / src.height)
    src = src.resize((round(src.width * s), round(src.height * s)), Image.LANCZOS)
    x, y = (src.width - size[0]) // 2, (src.height - size[1]) // 2
    return src.crop((x, y, x + size[0], y + size[1]))


# ─────────────────────────────────────────────────────────────────────
# A — Светлый лист. The inverse of what exists: warm paper, black type,
# one crimson accent, a lot of air. Nothing is dimmed.
# ─────────────────────────────────────────────────────────────────────

A_BG, A_INK, A_MUTED = (242, 239, 233), (22, 19, 15), (122, 113, 103)
M = 96


def a_base():
    img = Image.new("RGB", (W, H), A_BG)
    return img, ImageDraw.Draw(img)


def a_rubric(d, text):
    ts.tracked(d, (M, 118), text.upper(), f("Geist", 20, 500), CRIMSON, 20 * 0.18)


def a_cover():
    img, d = a_base()
    a_rubric(d, RUBRIC)
    ft, fd = f("Spectral-Md", 88), f("Geist", 31, 300)
    y = 430
    for line in ts.wrap(TITLE, ft, W - 2 * M):
        d.text((M, y), line, font=ft, fill=A_INK)
        y += 104
    y += 50
    for line in ts.wrap(DECK, fd, 760):
        d.text((M, y), line, font=fd, fill=A_MUTED)
        y += 48
    d.line([(M, 1120), (W - M, 1120)], fill=(214, 208, 198), width=1)
    foot(img, d, A_INK, CRIMSON)
    return paper(img)


def a_statement():
    img, d = a_base()
    a_rubric(d, "Заблуждение")
    ft = f("Spectral-Md", 66)
    lines = ts.wrap(STATEMENT, ft, W - 2 * M - 40)
    y = (H - len(lines) * 84) // 2 - 40
    d.rectangle([M, y - 56, M + 54, y - 52], fill=CRIMSON)
    for line in lines:
        d.text((M, y), line, font=ft, fill=A_INK)
        y += 84
    foot(img, d, A_INK, CRIMSON)
    return paper(img)


def a_list():
    img, d = a_base()
    a_rubric(d, LIST_HEAD)
    fn, fh, fb = f("GeistMono", 22, 500), f("Spectral-Md", 38), f("Geist", 27, 300)
    y = 300
    for i, (name, body) in enumerate(LIST, 1):
        d.line([(M, y - 34), (W - M, y - 34)], fill=(214, 208, 198), width=1)
        d.text((M, y + 10), f"{i:02d}", font=fn, fill=CRIMSON)
        d.text((M + 92, y), name, font=fh, fill=A_INK)
        yy = y + 54
        for line in ts.wrap(body, fb, W - 2 * M - 92):
            d.text((M + 92, yy), line, font=fb, fill=A_MUTED)
            yy += 40
        y = yy + 64
    foot(img, d, A_INK, CRIMSON)
    return paper(img)


# ─────────────────────────────────────────────────────────────────────
# B — Плашки. White page, content in solid blocks. The rhythm comes from
# the blocks changing size and colour, not from the type moving.
# ─────────────────────────────────────────────────────────────────────

B_BG, B_INK, B_SAND = (255, 255, 255), (24, 22, 20), (233, 228, 219)


def b_base():
    img = Image.new("RGB", (W, H), B_BG)
    return img, ImageDraw.Draw(img)


def b_cover():
    img, d = b_base()
    d.rectangle([0, 0, W, 880], fill=CRIMSON)
    ts.tracked(d, (M, 110), RUBRIC, f("Geist", 20, 500), (255, 214, 220), 20 * 0.18)
    ft = f("Spectral-Md", 92)
    y = 430
    for line in ts.wrap(TITLE, ft, W - 2 * M):
        d.text((M, y), line, font=ft, fill=(255, 255, 255))
        y += 108
    fd = f("Geist", 30, 300)
    y = 960
    for line in ts.wrap(DECK, fd, 800):
        d.text((M, y), line, font=fd, fill=(90, 84, 76))
        y += 46
    foot(img, d, B_INK, CRIMSON)
    return paper(img, 0.02)


def b_statement():
    img, d = b_base()
    ts.tracked(d, (M, 110), "ЗАБЛУЖДЕНИЕ", f("Geist", 20, 500), (150, 142, 132), 20 * 0.18)
    fig = f("Spectral-Md", 300)
    d.text((M - 14, 240), "183", font=fig, fill=B_SAND)
    ft = f("Spectral-Md", 58)
    y = 700
    for line in ts.wrap(STATEMENT, ft, W - 2 * M - 40):
        d.text((M, y), line, font=ft, fill=B_INK)
        y += 76
    d.rectangle([M, y + 40, M + 54, y + 44], fill=CRIMSON)
    foot(img, d, B_INK, CRIMSON)
    return paper(img, 0.02)


def b_list():
    img, d = b_base()
    ts.tracked(d, (M, 110), LIST_HEAD.upper(), f("Geist", 20, 500), (150, 142, 132), 20 * 0.18)
    fn, fh, fb = f("GeistMono", 22, 500), f("Spectral-Md", 36), f("Geist", 26, 300)
    y, box_h = 250, 270
    for i, (name, body) in enumerate(LIST, 1):
        fill = CRIMSON if i == 1 else B_SAND
        ink = (255, 255, 255) if i == 1 else B_INK
        muted = (255, 214, 220) if i == 1 else (108, 101, 92)
        d.rectangle([M, y, W - M, y + box_h - 26], fill=fill)
        d.text((M + 32, y + 30), f"{i:02d}", font=fn, fill=muted)
        d.text((M + 32, y + 68), name, font=fh, fill=ink)
        yy = y + 126
        for line in ts.wrap(body, fb, W - 2 * M - 64):
            d.text((M + 32, yy), line, font=fb, fill=muted)
            yy += 38
        y += box_h
    foot(img, d, B_INK, CRIMSON)
    return paper(img, 0.02)


# ─────────────────────────────────────────────────────────────────────
# C — Фото во всю карточку. One picture, one line. The least text any
# direction here carries, and the most dependent on the photograph.
# ─────────────────────────────────────────────────────────────────────

def c_card(text, rubric, crop_shift=0, size=58):
    img = cover_photo(PHOTO)
    if crop_shift:
        img = img.transform(img.size, Image.AFFINE, (1, 0, crop_shift, 0, 1, 0))
    # A gradient that only touches the bottom third, so the picture keeps
    # its light: the old system dimmed the whole frame and that is most of
    # why everything looked like night.
    col = Image.new("L", (1, H))
    for row in range(H):
        t = max(0.0, (row - H * 0.52) / (H * 0.48)) ** 1.3
        col.putpixel((0, row), int(235 * t))
    img = Image.composite(Image.new("RGB", img.size, (10, 9, 8)), img,
                          col.resize((W, H)))
    d = ImageDraw.Draw(img)
    ts.tracked(d, (M, 110), rubric.upper(), f("Geist", 20, 500), (236, 232, 226), 20 * 0.18)
    ft = f("Spectral-Md", size)
    lines = ts.wrap(text, ft, W - 2 * M - 30)
    y = 1096 - len(lines) * (size + 20)
    for line in lines:
        d.text((M, y), line, font=ft, fill=(255, 253, 250))
        y += size + 20
    foot(img, d, (236, 232, 226), CRIMSON)
    return img


def c_cover():
    return c_card(TITLE, RUBRIC, size=76)


def c_statement():
    return c_card(STATEMENT, "Заблуждение", crop_shift=180)


def c_list():
    img = c_card("", LIST_HEAD, crop_shift=-180)
    d = ImageDraw.Draw(img)
    panel = Image.new("RGBA", (W - 2 * M, 470), (14, 12, 11, 225))
    img.paste(panel, (M, 580), panel)
    d = ImageDraw.Draw(img)
    fh, fb = f("Spectral-Md", 32), f("Geist", 24, 300)
    y = 620
    for i, (name, body) in enumerate(LIST, 1):
        d.text((M + 36, y), name, font=fh, fill=(255, 253, 250))
        yy = y + 46
        for line in ts.wrap(body, fb, W - 2 * M - 72)[:2]:
            d.text((M + 36, yy), line, font=fb, fill=(190, 183, 175))
            yy += 34
        y = yy + 24
    return img


# ─────────────────────────────────────────────────────────────────────
# D — Чередование. Cream, crimson, cream. The rhythm is the carousel's,
# not the card's: each swipe changes the whole field.
# ─────────────────────────────────────────────────────────────────────

def d_cover():
    return a_cover()


def d_statement():
    img = Image.new("RGB", (W, H), CRIMSON)
    d = ImageDraw.Draw(img)
    ts.tracked(d, (M, 118), "ЗАБЛУЖДЕНИЕ", f("Geist", 20, 500), (255, 198, 206), 20 * 0.18)
    ft = f("Spectral-Md", 70)
    lines = ts.wrap(STATEMENT, ft, W - 2 * M - 20)
    y = (H - len(lines) * 88) // 2 - 30
    for line in lines:
        d.text((M, y), line, font=ft, fill=(255, 252, 250))
        y += 88
    foot(img, d, (255, 224, 229), (255, 255, 255))
    return paper(img, 0.03)


def d_list():
    img, d = a_base()
    ts.tracked(d, (M, 118), LIST_HEAD.upper(), f("Geist", 20, 500), A_MUTED, 20 * 0.18)
    fh, fb, fn = f("Spectral-Md", 36), f("Geist", 26, 300), f("GeistMono", 20, 500)
    y = 290
    for i, (name, body) in enumerate(LIST, 1):
        d.rectangle([M, y, W - M, y + 282], fill=(234, 230, 222))
        d.rectangle([M, y, M + 5, y + 282], fill=CRIMSON)
        d.text((M + 34, y + 30), f"{i:02d}", font=fn, fill=CRIMSON)
        d.text((M + 34, y + 68), name, font=fh, fill=A_INK)
        yy = y + 126
        for line in ts.wrap(body, fb, W - 2 * M - 68):
            d.text((M + 34, yy), line, font=fb, fill=(108, 101, 92))
            yy += 38
        y += 306
    foot(img, d, A_INK, CRIMSON)
    return paper(img)


DIRECTIONS = {
    "A": ("Светлый лист", [a_cover, a_statement, a_list]),
    "B": ("Плашки", [b_cover, b_statement, b_list]),
    "C": ("Фото во всю карточку", [c_cover, c_statement, c_list]),
    "D": ("Чередование", [d_cover, d_statement, d_list]),
}



# ─────────────────────────────────────────────────────────────────────
# E — Как у Key Consulting. The picture is the card: a bright, almost
# white studio scene with one red object in it, and the type sits on top.
#
# Three things carry the look, and all three were missing from A–D.
# The ground is near-white rather than dark. The headline is heavy
# uppercase grotesque with tight leading, split across two colours — the
# part that names the reader's problem in crimson, the rest in charcoal.
# And the alignment alternates slide to slide, which is where the rhythm
# comes from.
#
# What is borrowed is the visual system, not the copy. Key Consulting's
# headlines are questions aimed at a worry — "Клиенты уходят, а вы не
# знаете почему?" — and social/README.md § Editorial rules rules that
# out. So the red run marks the operative fact rather than the reader's
# fear, and every headline here is a complete proposition that survives
# being read on its own.
# ─────────────────────────────────────────────────────────────────────

E_RED = (196, 22, 32)          # hotter than the brand oxblood: on white, #981A30 goes brown
E_INK = (58, 63, 68)
E_SUB = (122, 128, 134)


def e_split(line):
    """`*text*` marks the crimson run; everything else is charcoal."""
    out, buf, hot = [], "", False
    for ch in line:
        if ch == "*":
            if buf:
                out.append((buf, hot))
            buf, hot = "", not hot
        else:
            buf += ch
    if buf:
        out.append((buf, hot))
    return out


def e_wrap(text, font, width):
    """Wrap on words while keeping the `*` markers attached to them."""
    lines, cur = [], ""
    for word in text.split():
        cand = f"{cur} {word}".strip()
        if font.getlength(cand.replace("*", "")) <= width or not cur:
            cur = cand
        else:
            lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


E_SOURCE = ROOT / "public" / "social" / "source" / "_test"


E_WHITE = (247, 244, 238)      # one warm white for the whole carousel


def e_balance(img, target=E_WHITE):
    """
    Put every frame on the same white.

    Generators do not agree on what white is. Five frames came back warm
    and cream, the sixth — the architectural one — came back cool and
    neutral, and side by side in a carousel that reads as a mistake
    rather than as variety.

    So the frame's own white point is measured off its brightest fifth
    and each channel is scaled to land it on E_WHITE. The gains stay
    close to 1, which moves the paper and leaves the one red object
    where it was.
    """
    small = img.resize((img.width // 6, img.height // 6), Image.BILINEAR)
    lum = small.convert("L")
    cut = sorted(lum.getdata())[int(len(lum.getdata()) * 0.8)]
    mask = lum.point(lambda v: 255 if v >= cut else 0)
    stat = ImageStat.Stat(small, mask)
    if not stat.count[0]:
        return img
    gains = [min(1.18, max(0.85, t / max(1.0, m))) for t, m in zip(target, stat.mean)]
    return Image.merge("RGB", [
        ch.point(lambda v, g=g: min(255, round(v * g)))
        for ch, g in zip(img.split(), gains)])


E_DARK_INK = (236, 232, 226)
E_DARK_SUB = (158, 152, 145)
E_DARK_RED = (198, 40, 58)     # the oxblood would vanish into the charcoal


def e_scrim(img, bottom, blur=0, target=226, feather=230, dark=False):
    """
    Make the headline readable whatever the picture does under it.

    The strip under the type is moved toward white — or, in the dark
    tone, toward charcoal — by as much as that particular frame needs. A
    clean studio backdrop barely moves; a busy or badly exposed one moves
    a long way. Below the type it falls away over a couple of hundred
    pixels on a curve, so there is no edge to see.

    `blur` defaults off. It was on at first and it earns nothing on a
    frame briefed to keep its top third plain: it only softens detail
    that is not there, and on a sharp picture the softened band is the
    one thing that announces a treatment was applied. It stays as a
    parameter for a frame that turns up busy where it should not be.

    The inverse of what the dark system did: there the whole frame was
    pulled down to meet the type, here only the strip under the type
    moves and the picture keeps its light.
    """
    mean = ImageStat.Stat(img.crop((0, 0, W, bottom)).convert("L")).mean[0]
    treated = img.filter(ImageFilter.GaussianBlur(blur))
    if dark:
        # Same mechanism, opposite direction: a charcoal band over the
        # head of the frame. It goes deeper than the light one has to,
        # because without the blur a bright thin structure — a crane mast
        # — reads straight through an shallow band and lands under the
        # list.
        pull = min(0.94, max(0.0, (mean - 32) / max(1.0, mean)))
        treated = Image.blend(treated, Image.new("RGB", img.size, (24, 23, 22)), pull)
    elif mean < target:
        lift = min(0.88, (target - mean) / max(1.0, 255 - mean))
        treated = Image.blend(treated, Image.new("RGB", img.size, (255, 255, 255)), lift)

    col = Image.new("L", (1, H))
    for row in range(H):
        if row <= bottom:
            v = 255
        elif row <= bottom + feather:
            v = int(255 * (1 - (row - bottom) / feather) ** 1.7)
        else:
            v = 0
        col.putpixel((0, row), v)
    return Image.composite(treated, img, col.resize((W, H)))


def e_card(photo, headline, subline, align="left", size=62, items=None,
           tone="light"):
    img = e_balance(cover_photo(photo))

    fh = f("Geist", size, 800)
    fs = f("Geist", round(size * 0.52), 400)
    lead = round(size * 1.06)

    lines = e_wrap(headline.upper(), fh, W - 2 * M)
    sub = ts.wrap(subline, fs, W - 2 * M) if subline else []

    # The scrim is measured off the type rather than set to a fixed
    # fraction of the frame: a two-line headline should not cover as much
    # of the picture as a four-line one.
    block = 108 + len(lines) * lead + round(size * 0.22) + len(sub) * round(size * 0.66)
    if items:
        block += 54 + len(items) * 92
    dark = tone == "dark"
    ink = E_DARK_INK if dark else E_INK
    sub_ink = E_DARK_SUB if dark else E_SUB
    red = E_DARK_RED if dark else E_RED
    rule = (74, 70, 66) if dark else (206, 206, 208)

    img = e_scrim(img, block + 24, dark=dark,
                  feather=330 if dark else 230)
    d = ImageDraw.Draw(img)

    y = 108
    for line in lines:
        runs = e_split(line)
        total = sum(fh.getlength(t) for t, _ in runs)
        x = M if align == "left" else W - M - total
        for t, hot in runs:
            d.text((x, y), t, font=fh, fill=red if hot else ink)
            x += fh.getlength(t)
        y += lead
    y += round(size * 0.22)
    for line in sub:
        x = M if align == "left" else W - M - fs.getlength(line)
        d.text((x, y), line, font=fs, fill=sub_ink)
        y += round(size * 0.66)

    if items:
        y += 54
        fn, fi = f("Geist", 30, 800), f("Geist", 29, 400)
        for i, item in enumerate(items, 1):
            d.text((M, y), f"{i:02d}", font=fn, fill=red)
            d.text((M + 74, y), item, font=fi, fill=ink)
            d.line([(M, y + 62), (W - M, y + 62)], fill=rule, width=1)
            y += 92

    foot(img, d, None, red, y=1200)
    return img


PE = ROOT / "public" / "social" / "source" / "permanent-establishment"

# The post as it would publish: six cards, alignment alternating right and
# left so the eye moves on every swipe, the red run marking the operative
# fact in each proposition.
PE_CARDS = [
    dict(photo="01-corridor", align="right", size=60,
         headline="Постоянное учреждение возникает *с первого дня*",
         subline="Когда деятельность иностранной компании облагается налогом в Узбекистане"),
    dict(photo="02-place", align="left", size=66,
         headline="Правило *183 дней* здесь не работает",
         subline="Для постоянного места деятельности порога нет"),
    dict(photo="03-city", align="right", size=62,
         headline="Место деятельности есть — *учреждение есть*",
         subline="Статья 36 Налогового кодекса не устанавливает срока"),
    dict(photo="04-three", align="left", size=58,
         headline="*183 дня* считают только в трёх случаях",
         subline=None,
         items=["Строительная площадка",
                "Услуги через персонал",
                "Установки для добычи"]),
    dict(photo="05-agent", align="right", size=58,
         headline="Договор подписан от вашего имени — *учреждение возникает*",
         subline="Независимо от срока, если лицо обычно заключает контракты"),
    dict(photo="06-periods", align="left", size=60,
         headline="Дробить проект бесполезно: периоды *складываются*",
         subline="Порог может поднять соглашение об избежании двойного налогообложения"),
]


def permanent_establishment(tone="light"):
    # Each tone has its own frames: the dark set is regenerated in
    # graphite, not the light set with a filter on it.
    src = PE if tone == "light" else ROOT / "public" / "social" / "source" / "permanent-establishment-dark"
    out = OUT / ("PE" if tone == "light" else "PE-dark")
    out.mkdir(parents=True, exist_ok=True)
    made = 0
    for i, spec in enumerate(PE_CARDS, 1):
        spec = dict(spec)
        photo = src / f"{spec.pop('photo')}.jpg"
        if not photo.exists():          # a frame that has not been made yet
            continue
        e_card(photo, spec.pop("headline"), spec.pop("subline"),
               tone=tone, **spec).save(out / f"{i:02d}.png")
        made += 1
    print(f"{out.name}: {made} cards → {out.relative_to(ROOT)}")


def e_cover():
    return e_card(PE / "01-corridor.jpg", PE_CARDS[0]["headline"],
                  PE_CARDS[0]["subline"], align="right", size=60)


def e_statement():
    return e_card(PE / "02-place.jpg", PE_CARDS[1]["headline"],
                  PE_CARDS[1]["subline"], align="left", size=66)


def e_list():
    return e_card(PE / "04-three.jpg", PE_CARDS[3]["headline"], None,
                  align="left", size=58, items=PE_CARDS[3]["items"])


DIRECTIONS["E"] = ("Как у Key Consulting", [e_cover, e_statement, e_list])


if __name__ == "__main__":
    for key, (name, cards) in DIRECTIONS.items():
        folder = OUT / key
        folder.mkdir(parents=True, exist_ok=True)
        for i, make in enumerate(cards, 1):
            make().save(folder / f"{i:02d}.png")
        print(f"{key} — {name}: {len(cards)} cards → {folder.relative_to(ROOT)}")
    permanent_establishment("light")
    permanent_establishment("dark")
