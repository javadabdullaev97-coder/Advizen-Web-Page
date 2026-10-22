"""
The banner card: a photograph that is the whole card, with the
proposition set across its head.

This is the second of the two systems in this repository and the one the
light and dark Advizen posts are built on. The first — `cards.py` — draws
type and diagrams on a near-black void; it still runs the three
text-only posts and the diagram types, and nothing here replaces it.

What makes a banner card:

  * The picture fills the frame. No panel, no margin, no letterbox.
  * The headline is heavy uppercase grotesque across the top, split
    across two colours: `*…*` marks the run that carries the operative
    fact, and it takes the accent. Everything else is ink.
  * A subline sits under it in sentence case, and a numbered list may
    follow.
  * Alignment alternates slide to slide. That is where the rhythm comes
    from, and it is the author's to set.
  * One red object in the picture, and nothing else coloured.

Two tones, `light` and `dark`, each with its own frames. The dark set is
generated in graphite rather than being the light set with a filter on
it, which is the whole point of having two.
"""

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageStat

import theme as T

WIDTH, HEIGHT = T.WIDTH, T.HEIGHT
MARGIN = 96
FOOT_Y = 1200

# One warm white for the whole carousel. Generators do not agree on what
# white is — five frames came back cream and the architectural one came
# back neutral, and beside each other that reads as a mistake rather than
# as variety.
WHITE_POINT = (247, 244, 238)

LIGHT = dict(ink=(58, 63, 68), sub=(122, 128, 134), accent=(196, 22, 32),
             rule=(206, 206, 208))
# The site's oxblood disappears into charcoal, and on white it goes
# brown; each tone needs its own red.
DARK = dict(ink=(236, 232, 226), sub=(158, 152, 145), accent=(198, 40, 58),
            rule=(74, 70, 66))


def _font(name, size, weight=None):
    f = ImageFont.truetype(str(T.FONT_DIR / f"{name}.ttf"), size)
    if weight is not None:
        try:
            f.set_variation_by_axes([weight])
        except OSError:
            pass
    return f


def _cover(path):
    src = Image.open(path).convert("RGB")
    s = max(WIDTH / src.width, HEIGHT / src.height)
    src = src.resize((round(src.width * s), round(src.height * s)), Image.LANCZOS)
    x, y = (src.width - WIDTH) // 2, (src.height - HEIGHT) // 2
    return src.crop((x, y, x + WIDTH, y + HEIGHT))


def _balance(img, target=WHITE_POINT):
    """Put every frame on the same white, measured off its brightest fifth."""
    small = img.resize((img.width // 6, img.height // 6), Image.BILINEAR)
    lum = small.convert("L")
    data = sorted(lum.getdata())
    mask = lum.point(lambda v: 255 if v >= data[int(len(data) * 0.8)] else 0)
    stat = ImageStat.Stat(small, mask)
    if not stat.count[0]:
        return img
    gains = [min(1.18, max(0.85, t / max(1.0, m))) for t, m in zip(target, stat.mean)]
    return Image.merge("RGB", [ch.point(lambda v, g=g: min(255, round(v * g)))
                               for ch, g in zip(img.split(), gains)])


def _scrim(img, bottom, dark, blur=0, feather=None):
    """
    Move the strip under the type toward white, or toward charcoal in the
    dark tone, by as much as this frame needs — and only that strip.

    The frames are briefed to keep their top third plain, so there is
    normally nothing to blur; `blur` is here for one that turns up busy
    where it should not be. Below the type the treatment falls away on a
    curve, so there is no edge to see.
    """
    feather = feather if feather is not None else (330 if dark else 230)
    mean = ImageStat.Stat(img.crop((0, 0, WIDTH, bottom)).convert("L")).mean[0]
    treated = img.filter(ImageFilter.GaussianBlur(blur)) if blur else img

    if dark:
        # Deeper than the light band has to be: without the blur a bright
        # thin structure — a crane mast — reads straight through.
        pull = min(0.94, max(0.0, (mean - 32) / max(1.0, mean)))
        if pull:
            treated = Image.blend(treated, Image.new("RGB", img.size, (24, 23, 22)), pull)
    elif mean < 226:
        lift = min(0.88, (226 - mean) / max(1.0, 255 - mean))
        treated = Image.blend(treated, Image.new("RGB", img.size, (255, 255, 255)), lift)

    col = Image.new("L", (1, HEIGHT))
    for row in range(HEIGHT):
        if row <= bottom:
            v = 255
        elif row <= bottom + feather:
            v = int(255 * (1 - (row - bottom) / feather) ** 1.7)
        else:
            v = 0
        col.putpixel((0, row), v)
    return Image.composite(treated, img, col.resize((WIDTH, HEIGHT)))


def _split(line, hot=False):
    """`*text*` marks the accented run; everything else is ink.

    `hot` carries in from the line above, so an accent that wraps keeps
    its colour on the next line instead of falling back to ink.
    """
    out, buf = [], ""
    for ch in line:
        if ch == "*":
            if buf:
                out.append((buf, hot))
            buf, hot = "", not hot
        else:
            buf += ch
    if buf:
        out.append((buf, hot))
    return out, hot


def _wrap(text, font, width):
    """Wrap on words, keeping the `*` markers attached to them."""
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


def _plain_wrap(text, font, width):
    lines, cur = [], ""
    for word in text.split():
        cand = f"{cur} {word}".strip()
        if font.getlength(cand) <= width or not cur:
            cur = cand
        else:
            lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


_LOGO: dict[tuple, Image.Image] = {}


def _logo(height, colour):
    key = (height, colour)
    if key not in _LOGO:
        src = Image.open(T.LOGO).convert("RGBA")
        w = round(src.width * height / src.height)
        mark = Image.new("RGBA", (w, height), colour + (0,))
        mark.putalpha(src.getchannel("A").resize((w, height), Image.LANCZOS))
        _LOGO[key] = mark
    return _LOGO[key]


def _foot(img, d, accent):
    """
    The lockup reads the luminance it sits on rather than the card's tone:
    it lies on the picture, not on the band, and a dark frame and a light
    one need opposite ink there.
    """
    font = _font(T.SANS, 23, 500)
    patch = img.crop((MARGIN, FOOT_Y - 6, MARGIN + 420, FOOT_Y + 36)).convert("L")
    ink = DARK["ink"] if ImageStat.Stat(patch).mean[0] < 120 else LIGHT["ink"]

    mark = _logo(26, accent)
    img.paste(mark, (MARGIN, FOOT_Y + font.getbbox("ADVIZEN")[3] - 26), mark)
    x = MARGIN + mark.width + 20
    for ch in "ADVIZEN":
        d.text((x, FOOT_Y), ch, font=font, fill=ink)
        x += font.getlength(ch) + 23 * T.WORDMARK_TRACKING


def banner(*, image, headline=None, subline=None, title=None, deck=None,
           align="left", size=62, items=None, tone="light", blur=0, **_):
    """One picture, one proposition. See the module docstring."""
    headline = headline or title
    subline = subline if subline is not None else deck
    if not headline:
        raise ValueError("banner: headline (or title) is required")

    dark = tone == "dark"
    palette = DARK if dark else LIGHT

    img = _balance(_cover(image))

    fh = _font(T.SANS, size, 800)
    fs = _font(T.SANS, round(size * 0.52), 400)
    lead = round(size * 1.06)

    lines = _wrap(headline.upper(), fh, WIDTH - 2 * MARGIN)
    sub = _plain_wrap(subline, fs, WIDTH - 2 * MARGIN) if subline else []

    # The band is measured off the type: a two-line headline should not
    # cover as much of the picture as a four-line one.
    block = (108 + len(lines) * lead + round(size * 0.22)
             + len(sub) * round(size * 0.66))
    if items:
        block += 54 + len(items) * 92

    img = _scrim(img, block + 24, dark, blur=blur)
    d = ImageDraw.Draw(img)

    y = 108
    hot = False
    for line in lines:
        runs, hot = _split(line, hot)
        total = sum(fh.getlength(t) for t, _ in runs)
        x = MARGIN if align == "left" else WIDTH - MARGIN - total
        for text, hot in runs:
            d.text((x, y), text, font=fh, fill=palette["accent"] if hot else palette["ink"])
            x += fh.getlength(text)
        y += lead
    y += round(size * 0.22)
    for line in sub:
        x = MARGIN if align == "left" else WIDTH - MARGIN - fs.getlength(line)
        d.text((x, y), line, font=fs, fill=palette["sub"])
        y += round(size * 0.66)

    if items:
        y += 54
        fn, fi = _font(T.SANS, 30, 800), _font(T.SANS, 29, 400)
        for i, item in enumerate(items, 1):
            d.text((MARGIN, y), f"{i:02d}", font=fn, fill=palette["accent"])
            d.text((MARGIN + 74, y), item, font=fi, fill=palette["ink"])
            d.line([(MARGIN, y + 62), (WIDTH - MARGIN, y + 62)],
                   fill=palette["rule"], width=1)
            y += 92

    _foot(img, d, palette["accent"])
    return img
