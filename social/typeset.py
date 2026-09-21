"""
Typesetting and surface primitives.

Everything that touches a glyph or a pixel lives here; the card layouts in
cards.py only compose. Two things in this file are not obvious:

  optical()  compensates for a font's left sidebearing, so a serif headline
             and the sans line beneath it start on the same visual edge
             rather than the same nominal coordinate.

  finish()   lays grain and a vignette over the finished card. Without the
             vignette a flat near-black field reads as a screen; with it,
             as a lit page.
"""

import random
from functools import lru_cache

from PIL import Image, ImageDraw, ImageFilter, ImageFont

import theme as T


@lru_cache(maxsize=64)
def font(name: str, size: int, weight: int | None = None) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(str(T.FONT_DIR / f"{name}.ttf"), size)
    if weight is not None:
        try:
            f.set_variation_by_axes([weight])
        except OSError:
            pass  # static face; the weight is already baked in
    return f


def sans(size: int, weight: int = 400):
    return font(T.SANS, size, weight)


def mono(size: int, weight: int = 400):
    return font(T.MONO, size, weight)


def serif(size: int, medium: bool = False):
    return font(T.SERIF_MD if medium else T.SERIF, size)


# ── Drawing ─────────────────────────────────────────────────────────

def optical_x(text: str, f: ImageFont.FreeTypeFont, x: int) -> float:
    """Shift left by the first glyph's left sidebearing."""
    if not text:
        return x
    return x - f.getbbox(text[0])[0]


def text(d: ImageDraw.ImageDraw, xy, s: str, f, fill, optical: bool = False):
    x, y = xy
    d.text((optical_x(s, f, x) if optical else x, y), s, font=f, fill=fill)


def tracked(d: ImageDraw.ImageDraw, xy, s: str, f, fill, tracking: float):
    """Letter-spaced text. PIL has no tracking, so glyphs are placed one by one."""
    x, y = xy
    for ch in s:
        d.text((x, y), ch, font=f, fill=fill)
        x += f.getlength(ch) + tracking
    return x


def wrap(s: str, f, max_width: int) -> list[str]:
    lines: list[str] = []
    current = ""
    for word in s.split():
        candidate = f"{current} {word}".strip()
        if f.getlength(candidate) <= max_width or not current:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def blocks(s: str, f, max_width: int) -> list[list[str]]:
    """Split on blank lines, then wrap each paragraph."""
    return [wrap(p.strip(), f, max_width) for p in s.strip().split("\n\n") if p.strip()]


def block_height(bl: list[list[str]], leading: int, gap: int) -> int:
    return sum(len(b) * leading for b in bl) + max(0, len(bl) - 1) * gap


def draw_blocks(d, x, y, bl, f, fill, leading, gap, optical=False):
    for block in bl:
        for line in block:
            text(d, (x, y), line, f, fill, optical)
            y += leading
        y += gap
    return y


def centre_y(content_height: int, top: int = T.BAND_TOP, bottom: int = T.BAND_BOTTOM) -> int:
    """Optically centre a block in the content band."""
    return top + max(0, (bottom - top - content_height) // 2)


# ── Surface ─────────────────────────────────────────────────────────

def _grain(size: tuple[int, int]) -> Image.Image:
    random.seed(7)  # fixed: the same card must render identically every run
    w, h = size
    n = Image.new("L", (w // 2, h // 2))
    n.putdata([random.randint(0, 255) for _ in range(n.width * n.height)])
    return n.resize((w, h), Image.BILINEAR).filter(ImageFilter.GaussianBlur(0.4))


def _vignette(size: tuple[int, int]) -> Image.Image:
    """Radial falloff mask, brightest at centre."""
    w, h = size
    small = Image.new("L", (w // 8, h // 8), 0)
    d = ImageDraw.Draw(small)
    cx, cy = small.width / 2, small.height / 2
    steps = 48
    for i in range(steps, 0, -1):
        t = i / steps
        rx, ry = cx * t * 1.45, cy * t * 1.45
        d.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=int(255 * (1 - t)))
    return small.resize((w, h), Image.BICUBIC).filter(ImageFilter.GaussianBlur(24))


def finish(img: Image.Image) -> Image.Image:
    size = img.size

    dark = Image.new("RGB", size, (0, 0, 0))
    img = Image.composite(dark, img, _vignette(size).point(lambda v: int(v * T.VIGNETTE)))

    mid = Image.new("RGB", size, (128, 128, 128))
    return Image.composite(
        Image.blend(img, mid, 0.5), img, _grain(size).point(lambda v: int(v * T.GRAIN))
    )
