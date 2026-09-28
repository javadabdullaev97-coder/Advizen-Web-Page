"""
Card layouts.

Every card carries exactly one crimson mark (DESIGN.md §2). It is the
logo, set beside the wordmark at the foot of every card — see _chrome.
The diagrams spend crimson a second time, on the node or stroke that is
the point of the figure; nothing else may.

The diagram types are the reason this exists rather than a template in
Canva. Consulting firms describe structures in prose; drawing them —
consistently, in the brand's own hand — is what separates the feed.

A photograph may ground `cover`, `photo`, `quote` and `numbered`, through
_backdrop below. The diagrams may not: their panels are drawn in PANEL
against the void, and over a picture that separation collapses — the
structure stops reading, which is the only thing the card was for.
"""

from PIL import Image, ImageDraw, ImageStat

import theme as T
import typeset as ts


_LOGO_CACHE: dict[int, Image.Image] = {}


def _logo(height: int) -> Image.Image:
    """
    The mark, recoloured to the card's crimson.

    The file is flat artwork in the site's #940e27; at card scale against
    a near-black ground that reads hot, which is why theme.CRIMSON is a
    touch desaturated. Only the alpha channel is kept, so the mark takes
    the card's colour rather than the file's.
    """
    if height not in _LOGO_CACHE:
        src = Image.open(T.LOGO).convert("RGBA")
        w = round(src.width * height / src.height)
        alpha = src.getchannel("A").resize((w, height), Image.LANCZOS)
        mark = Image.new("RGBA", (w, height), T.CRIMSON + (0,))
        mark.putalpha(alpha)
        _LOGO_CACHE[height] = mark
    return _LOGO_CACHE[height]


def _chrome(img, d, eyebrow: str | None, counter: str | None):
    """
    The four fixed elements of DESIGN.md §10: category, mark, wordmark,
    counter.

    The mark used to be a short crimson rule sitting above the wordmark.
    It is the logo now, set beside the wordmark as a lockup — and it is
    still exactly one crimson thing on the card, so the rule goes rather
    than joining it.
    """
    if eyebrow:
        ts.tracked(d, (T.MARGIN, T.EYEBROW_Y), eyebrow.upper(),
                   ts.sans(T.SIZE_LABEL), T.INK_3,
                   T.SIZE_LABEL * T.EYEBROW_TRACKING)

    # Seated on the wordmark's baseline, not centred on its line box: the
    # sans reserves descender room the capitals never reach, and centring
    # on the box drops the mark below the letters it stands beside.
    font = ts.sans(23, 500)
    baseline = T.FOOT_Y + font.getbbox("ADVIZEN")[3]
    mark = _logo(T.LOGO_H)
    img.paste(mark, (T.MARGIN, baseline - T.LOGO_H), mark)
    ts.tracked(d, (T.MARGIN + mark.width + T.LOGO_GAP, T.FOOT_Y), "ADVIZEN",
               font, T.INK_2, 23 * T.WORDMARK_TRACKING)

    if counter:
        f = ts.mono(T.SIZE_COUNTER)
        d.text((T.WIDTH - T.MARGIN - f.getlength(counter), T.FOOT_Y + 2),
               counter, font=f, fill=T.INK_3)


def _backdrop(path, *, close="bottom", target=T.GROUND_TARGET, floor=0.42):
    """
    A photograph as the card's ground.

    Two things happen to it and both are necessary. It is flattened toward
    the void so the frame belongs to the same palette as every other card,
    and a gradient closes the lower half to near-black so type sits on
    solid ground rather than on whatever the photograph happens to do
    there. Without the second step a headline lands on a highlight and
    disappears.

    `close` says which end the gradient shuts: the foot, under type that
    sits low, or the head, under a band reserved at the top. `target` is
    how dark the picture is taken down to — a scene that has to stay
    readable as a scene is flattened less than a ground that only has to
    hold a sentence.
    """
    src = Image.open(path).convert("RGB")
    scale = max(T.WIDTH / src.width, T.HEIGHT / src.height)
    src = src.resize((round(src.width * scale), round(src.height * scale)), Image.LANCZOS)
    x = (src.width - T.WIDTH) // 2
    y = (src.height - T.HEIGHT) // 2
    img = src.crop((x, y, x + T.WIDTH, y + T.HEIGHT))

    # Flatten toward the void, by as much as this particular picture needs.
    # A fixed factor was here first, and it only ever suited the dark
    # article renders it was written against: a daylight photograph came
    # through still glowing, and type laid over the top half of it
    # disappeared. Solve instead for the blend that lands any frame on the
    # same low-key ground, so the rule is in the code and not in someone's
    # memory of which images are safe.
    mean = ImageStat.Stat(img.convert("L")).mean[0]
    ground = sum(T.BG) / 3
    # `floor` is how much is taken off a picture that is already dark
    # enough. A ground gets the standard knock-down regardless, so that
    # every card sits on the same value; a scene gets none, because
    # flattening a frame that is already at target only buries the thing
    # the scene was staged to show.
    alpha = floor
    if mean > target:
        alpha = min(0.92, max(alpha, (mean - target) / max(1.0, mean - ground)))
    if alpha:
        img = Image.blend(img, Image.new("RGB", img.size, T.BG), alpha)

    column = Image.new("L", (1, T.HEIGHT))
    for row in range(T.HEIGHT):
        if close == "bottom":
            t = max(0.0, (row - T.HEIGHT * 0.30) / (T.HEIGHT * 0.70)) ** 1.5
        else:
            # A scene's band holds, then falls away. A plain ramp was here
            # first and it had run out of darkness by the last line of the
            # caption, which then sat on a lit sheet of paper and stopped
            # being legible. Holding it flat behind the block and fading
            # below keeps the type on solid ground without swallowing the
            # picture.
            # The foot closes earlier and harder than the head, because
            # what sits there is a block of type across the full width
            # rather than a banded headline. A shared ramp left a bright
            # landscape showing through the figure.
            d1, d2 = ((T.HEIGHT * 0.34, T.HEIGHT * 0.30) if close == "foot"
                      else (T.HEIGHT * 0.28, T.HEIGHT * 0.32))
            edge = (row if close == "top"
                    else T.HEIGHT - row)
            t = 1.0 if edge <= d1 else max(0.0, 1 - (edge - d1) / d2)

            # The far end gets a shallow seat of its own, because the
            # wordmark and the counter sit there on the bare picture. Over
            # a dark floor nothing showed; over a lit one they washed out
            # and the card lost its signature.
            # It holds up to the crimson mark rather than ramping from the
            # very edge: the wordmark sits well above the bottom of the
            # frame, and a seat that only reaches full strength at the edge
            # leaves it on the bare picture.
            far = (T.HEIGHT - row) if close == "top" else row
            hold, fade = T.HEIGHT * 0.19, T.HEIGHT * 0.07
            if far <= hold:
                t = max(t, 0.72)
            elif far <= hold + fade:
                t = max(t, 0.72 * (1 - (far - hold) / fade))
        column.putpixel((0, row), int(255 * t))
    return Image.composite(Image.new("RGB", img.size, T.BG), img,
                           column.resize((T.WIDTH, T.HEIGHT)))


def _canvas(eyebrow=None, counter=None, backdrop=None):
    img = _backdrop(backdrop) if backdrop else Image.new("RGB", (T.WIDTH, T.HEIGHT), T.BG)
    d = ImageDraw.Draw(img)
    _chrome(img, d, eyebrow, counter)
    return img, d


# ── Text cards ──────────────────────────────────────────────────────

def cover(*, category, title, deck, counter=None, image=None, **_):
    # The cover reserves the foot of the frame the way `scene` reserves the
    # head, so it takes the same gentler flatten: it is the card the grid
    # shows, and crushing its picture costs the most there. It closes the
    # foot the way `engagement` does rather than on the shallow default
    # ramp, which had run out of darkness by the title and left it sitting
    # on whatever the picture happened to do there.
    img = (_backdrop(image, close="foot", target=T.SCENE_TARGET, floor=0.0)
           if image else Image.new("RGB", (T.WIDTH, T.HEIGHT), T.BG))
    d = ImageDraw.Draw(img)
    _chrome(img, d, category, counter)
    ft, fd = ts.serif(T.SIZE_DISPLAY, medium=True), ts.sans(T.SIZE_DECK, 300)

    title_lines = ts.wrap(title, ft, T.MEASURE_BODY)
    deck_lines = ts.wrap(deck, fd, T.MEASURE_DECK) if deck else []
    block = (len(title_lines) * T.LEAD_DISPLAY + (26 if deck_lines else 0)
             + len(deck_lines) * T.LEAD_DECK)

    # Over a photograph the title drops to the foot of the frame, where the
    # gradient has already closed to black. Centred, it would float in the
    # middle of the picture and fight it.
    y = (T.BAND_BOTTOM - block) if image else ts.centre_y(block)

    for line in title_lines:
        ts.tracked(d, (ts.optical_x(line, ft, T.MARGIN), y), line, ft, T.INK,
                   T.DISPLAY_TRACKING)
        y += T.LEAD_DISPLAY
    y += 26
    for line in deck_lines:
        ts.text(d, (T.MARGIN, y), line, fd, T.INK_2)
        y += T.LEAD_DECK
    return img


def quote(*, text, eyebrow=None, counter=None, image=None, **_):
    img, d = _canvas(eyebrow, counter, backdrop=image)
    f = ts.serif(T.SIZE_QUOTE)
    bl = ts.blocks(text, f, T.MEASURE_BODY - 20)
    h = ts.block_height(bl, T.LEAD_QUOTE, 42)
    # Over a photograph the proposition drops to the foot of the frame, the
    # way the cover does: the gradient has closed to black there, and type
    # centred in the middle of a picture fights it.
    y = (T.BAND_BOTTOM - h) if image else ts.centre_y(h)
    ts.draw_blocks(d, T.MARGIN, y, bl, f, T.INK, T.LEAD_QUOTE, 42, optical=True)
    return img


def numbered(*, items, eyebrow=None, counter=None, start=1, image=None, **_):
    # the numerals are the mark
    img, d = _canvas(eyebrow, counter, backdrop=image)
    fn, fh, fb = ts.mono(23, 500), ts.serif(T.SIZE_HEAD, medium=True), ts.sans(T.SIZE_BODY, 300)
    measure = T.MEASURE_BODY - T.LIST_INDENT

    wrapped = [(i["name"], ts.wrap(i["text"], fb, measure)) for i in items]
    height = sum(52 + len(lines) * T.LEAD_BODY + 56 for _, lines in wrapped)
    y = (T.BAND_BOTTOM - height) if image else ts.centre_y(height)

    for offset, (name, lines) in enumerate(wrapped):
        d.text((T.MARGIN, y + 12), f"{start + offset:02d}", font=fn, fill=T.CRIMSON)
        ts.text(d, (T.MARGIN + T.LIST_INDENT, y), name, fh, T.INK, optical=True)
        y += 52
        for line in lines:
            ts.text(d, (T.MARGIN + T.LIST_INDENT, y), line, fb, T.INK_2)
            y += T.LEAD_BODY
        y += 56
    return img


# ── Diagrams ────────────────────────────────────────────────────────

# Drawing a person was tried three ways and dropped three times: an
# outlined figure (the avatar placeholder every UI kit ships), a filled
# one (the same icon, heavier), and a fingerprint (read as a whorl, not a
# print). Primitives will not carry a human at this size. Where a card
# needs a person it now carries a photograph, through `photo` below.


def _node(d, box, label, value, *, accent=False):
    x0, y0, x1, y1 = box
    d.rectangle(box, fill=(38, 20, 24) if accent else T.PANEL,
                outline=T.CRIMSON if accent else None, width=2 if accent else 0)
    ts.tracked(d, (x0 + 26, y0 + 28), label.upper(), ts.sans(19), T.INK_3, 19 * 0.18)
    if value:
        d.text((x0 + 24, y0 + 60), value, font=ts.mono(44, 500), fill=T.INK)


def flow(*, nodes, gate, outcome, note=None, eyebrow=None, counter=None, **_):
    """A decision that cannot resolve: parties → gate → outcome."""
    img, d = _canvas(eyebrow, counter)   # the crimson stroke is the mark

    gap = 64
    box_w = (T.MEASURE_BODY - gap * (len(nodes) - 1)) // len(nodes)
    box_h = 132
    full = [T.MARGIN, 0, T.MARGIN + T.MEASURE_BODY, 0]

    fo = ts.serif(50, medium=True)
    note_lines = ts.wrap(note, ts.sans(29, 300), T.MEASURE_BODY) if note else []

    # The outcome sits outside the diagram, so its space is measured rather
    # than guessed; an earlier constant here disagreed with what was drawn
    # and pushed the whole figure off centre.
    OUT_PAD, OUT_LINE, OUT_GAP = 26, 66, 34
    height = (box_h + 58 + 58 + 100 + 58 + OUT_PAD + OUT_LINE
              + (OUT_GAP + len(note_lines) * T.LEAD_BODY if note_lines else 0))
    y = ts.centre_y(height)

    centres = []
    for i, n in enumerate(nodes):
        x = T.MARGIN + i * (box_w + gap)
        _node(d, (x, y, x + box_w, y + box_h), n["label"], n.get("value"))
        centres.append(x + box_w // 2)

    y += box_h
    join = y + 58
    for cx in centres:
        d.line([(cx, y), (cx, join)], fill=T.LINE, width=1)
    d.line([(centres[0], join), (centres[-1], join)], fill=T.LINE, width=1)
    mid = (centres[0] + centres[-1]) // 2
    d.line([(mid, join), (mid, join + 58)], fill=T.LINE, width=1)

    y = join + 58
    d.rectangle([full[0], y, full[2], y + 100], fill=T.PANEL)
    ts.text(d, (T.MARGIN + 26, y + 32), gate, ts.sans(T.SIZE_BODY, 300), T.INK_2)

    y += 100
    d.line([(mid, y), (mid, y + 58)], fill=T.CRIMSON, width=2)

    y += 58
    ts.text(d, (T.MARGIN, y + OUT_PAD), outcome, fo, T.INK, optical=True)
    y += OUT_PAD + OUT_LINE + OUT_GAP
    for line in note_lines:
        ts.text(d, (T.MARGIN, y), line, ts.sans(29, 300), T.INK_3)
        y += T.LEAD_BODY
    return img


def structure(*, parent, children, note=None, eyebrow=None, counter=None, **_):
    """Ownership: one holder above, holdings below. Accent marks the holder."""
    img, d = _canvas(eyebrow, counter)

    gap = 40
    child_w = (T.MEASURE_BODY - gap * (len(children) - 1)) // len(children)
    parent_w, box_h = 460, 128
    px = T.MARGIN + (T.MEASURE_BODY - parent_w) // 2

    # Child boxes grow to fit the longest name. A fixed height let a
    # two-line name run into the figure beneath it.
    fc = ts.sans(25, 400)
    wrapped = [ts.wrap(c["label"], fc, child_w - 44)[:2] for c in children]
    child_h = 48 + max(len(w) for w in wrapped) * 32 + (46 if any(
        c.get("value") for c in children) else 0)

    note_lines = ts.wrap(note, ts.sans(29, 300), T.MEASURE_BODY) if note else []
    height = box_h + 70 + child_h + (70 + len(note_lines) * T.LEAD_BODY if note_lines else 0)
    y = ts.centre_y(height)

    _node(d, (px, y, px + parent_w, y + box_h), parent["label"], parent.get("value"),
          accent=True)

    y += box_h
    spine = y + 36
    mid = px + parent_w // 2
    d.line([(mid, y), (mid, spine)], fill=T.LINE, width=1)

    centres = [T.MARGIN + i * (child_w + gap) + child_w // 2 for i in range(len(children))]
    d.line([(centres[0], spine), (centres[-1], spine)], fill=T.LINE, width=1)

    y = spine + 34
    for i, (c, lines) in enumerate(zip(children, wrapped)):
        x = T.MARGIN + i * (child_w + gap)
        d.line([(centres[i], spine), (centres[i], y)], fill=T.LINE, width=1)
        d.rectangle([x, y, x + child_w, y + child_h], fill=T.PANEL)
        for j, line in enumerate(lines):
            ts.text(d, (x + 22, y + 24 + j * 32), line, fc, T.INK)
        if c.get("value"):
            d.text((x + 22, y + 24 + len(lines) * 32 + 14), c["value"],
                   font=ts.mono(26, 500), fill=T.INK_2)

    if note_lines:
        y += child_h + 70
        for line in note_lines:
            ts.text(d, (T.MARGIN, y), line, ts.sans(29, 300), T.INK_3)
            y += T.LEAD_BODY
    return img


def chain(*, nodes, person, note=None, eyebrow=None, counter=None, **_):
    """
    An ownership chain resolving to a natural person.

    This is the definition of a beneficial owner drawn rather than stated:
    however many companies sit in the middle, the chain ends at someone.
    The terminal node carries the crimson, because arriving there is the
    entire purpose of the chain.
    """
    img, d = _canvas(eyebrow, counter)

    box_h, link = 84, 42
    fn = ts.sans(27, 400)

    note_lines = ts.wrap(note, ts.sans(27, 300), T.MEASURE_BODY) if note else []
    height = ((len(nodes) + 1) * box_h + (len(nodes) + 1) * link
              + (24 + len(note_lines) * T.LEAD_BODY if note_lines else 0))
    y = ts.centre_y(height)

    right = T.MARGIN + T.MEASURE_BODY
    mid = T.MARGIN + T.MEASURE_BODY // 2

    def row(label, value, *, accent=False):
        d.rectangle([T.MARGIN, y, right, y + box_h],
                    fill=(38, 20, 24) if accent else T.PANEL,
                    outline=T.CRIMSON if accent else None, width=2 if accent else 0)
        ts.text(d, (T.MARGIN + 26, y + 26), label, fn, T.INK if accent else T.INK_2)
        if value:
            if accent:
                f = ts.sans(19)
                w = ts.tracked_width(value.upper(), f, 19 * 0.18)
                ts.tracked(d, (right - 26 - w, y + 32), value.upper(), f,
                           T.INK_2, 19 * 0.18)
            else:
                f = ts.mono(26, 500)
                d.text((right - 26 - f.getlength(value), y + 28), value,
                       font=f, fill=T.INK_3)

    for node in nodes:
        row(node["label"], node.get("value"))
        y += box_h
        d.line([(mid, y), (mid, y + link)], fill=T.LINE, width=1)
        y += link

    row(person["name"], person.get("role"), accent=True)
    y += box_h

    if note_lines:
        y += 56
        for line in note_lines:
            ts.text(d, (T.MARGIN, y), line, ts.sans(27, 300), T.INK_3)
            y += T.LEAD_BODY
    return img


def photo(*, image, title=None, caption=None, eyebrow=None, counter=None, **_):
    """
    A frame that carries the slide on its own.

    Where a card needs a human being, this is how one gets there — a
    photograph, not a pictogram. Title and caption sit at the foot, on the
    part of the gradient that has already closed to black.
    """
    img, d = _canvas(eyebrow, counter, backdrop=image)

    ft, fc = ts.serif(T.SIZE_QUOTE, medium=True), ts.sans(T.SIZE_BODY, 300)
    title_lines = ts.wrap(title, ft, T.MEASURE_BODY - 20) if title else []
    caption_lines = ts.wrap(caption, fc, T.MEASURE_DECK) if caption else []

    y = T.BAND_BOTTOM - (len(title_lines) * 68
                         + (22 if caption_lines else 0)
                         + len(caption_lines) * T.LEAD_BODY)
    for line in title_lines:
        ts.text(d, (T.MARGIN, y), line, ft, T.INK, optical=True)
        y += 68
    y += 22
    for line in caption_lines:
        ts.text(d, (T.MARGIN, y), line, fc, T.INK_2)
        y += T.LEAD_BODY
    return img


def scene(*, image, title, caption=None, eyebrow=None, counter=None,
          foot=False, **_):
    """
    A staged photograph with the proposition banded across the head.

    Every other image card lays type over the foot of the picture, which
    forces the picture to be quiet — one object, a lot of unlit space, and
    nothing happening in it. That is a still life, and a still life has
    nothing to do with the post above it.

    Reserving the band instead inverts the constraint. The gradient closes
    the top rather than the bottom, the frame is flattened less because it
    has to stay readable as a scene, and what is underneath can now carry a
    situation: a hand mid-action, props, markers, one crimson thing among
    neutral ones. The headline asks; the caption answers in a line.
    """
    img = _backdrop(image, close="foot" if foot else "top",
                    target=T.SCENE_TARGET, floor=0.0)
    d = ImageDraw.Draw(img)
    _chrome(img, d, eyebrow, counter)

    ft, fc = ts.serif(58, medium=True), ts.sans(T.SIZE_DECK, 300)
    title_lines = ts.wrap(title, ft, T.MEASURE_BODY - 20)
    caption_lines = ts.wrap(caption, fc, T.MEASURE_DECK) if caption else []

    block = len(title_lines) * 72 + (20 if caption_lines else 0) \
        + len(caption_lines) * T.LEAD_DECK
    # Close under the eyebrow rather than centred in the space below it:
    # the block and the eyebrow read as one band that way, and the picture
    # gets the rest of the frame.
    y = (T.MARK_Y - 40 - block) if foot else (T.EYEBROW_Y + 76)

    for line in title_lines:
        ts.text(d, (T.MARGIN, y), line, ft, T.INK, optical=True)
        y += 72
    y += 20
    for line in caption_lines:
        ts.text(d, (T.MARGIN, y), line, fc, T.INK_2)
        y += T.LEAD_DECK
    return img


def matrix(*, columns, eyebrow=None, counter=None, **_):
    """
    An inventory, set as a table rather than as prose.

    The numbered card this replaces held the same fourteen services, but
    held them as two run-on sentences: the reader could see that the list
    was long and could not see what was in it. Counting is the point of
    the slide — seven and seven — and a comma-separated paragraph cannot
    be counted at a glance.

    One crimson rule under the column heads is the card's whole accent, so
    the chrome's own mark is suppressed.
    """
    img, d = _canvas(eyebrow, counter)

    gap = 56
    col_w = (T.MEASURE_BODY - gap * (len(columns) - 1)) // len(columns)
    fh, fn, fi = ts.serif(T.SIZE_HEAD, medium=True), ts.mono(20, 500), ts.sans(25, 300)

    HEAD, RULE, ROW = 58, 30, 76
    rows = max(len(c["items"]) for c in columns)
    height = HEAD + RULE + rows * ROW
    # Centred in the content band, not on the canvas. `centre_y` puts the
    # block in the middle of the frame, which counts the eyebrow's strip at
    # the top as free space and the wordmark's at the bottom as free too —
    # the table then sat high with a hole under it.
    top = T.BAND_TOP + (T.BAND_BOTTOM - T.BAND_TOP - height) // 2

    for i, column in enumerate(columns):
        x = T.MARGIN + i * (col_w + gap)
        ts.text(d, (x, top), column["name"], fh, T.INK, optical=True)
        count = f"{len(column['items']):02d}"
        d.text((x + col_w - fn.getlength(count), top + 12), count,
               font=fn, fill=T.INK_3)

        y = top + HEAD + RULE
        for item in column["items"]:
            # A dash rather than a pictogram. Fourteen drawn icons for
            # fourteen abstractions — tax, law, payroll, compliance — come
            # out as the same three shapes rotated, which is a UI kit and
            # not a brand.
            d.line([(x, y + 14), (x + 14, y + 14)], fill=T.LINE, width=1)
            for line in ts.wrap(item, fi, col_w - 30):
                ts.text(d, (x + 30, y), line, fi, T.INK_2)
                y += 34
            y += ROW - 34

        if i:
            spine = x - gap // 2
            d.line([(spine, top), (spine, top + height)], fill=T.LINE, width=1)

    d.line([(T.MARGIN, top + HEAD), (T.MARGIN + T.MEASURE_BODY, top + HEAD)],
           fill=T.CRIMSON, width=2)
    return img


def figures(*, rows, image=None, eyebrow=None, counter=None, **_):
    """
    Several figures of equal standing.

    Set as a headline and a caption, the first number becomes the claim
    and the rest become its footnote — which is a decision about the
    firm, made by the layout rather than by anyone. A ledger makes no
    such decision: every figure gets the same size, the same weight and a
    rule of its own, and the reader ranks them or does not.
    """
    img = (_backdrop(image, close="foot", target=T.SCENE_TARGET, floor=0.0)
           if image else Image.new("RGB", (T.WIDTH, T.HEIGHT), T.BG))
    d = ImageDraw.Draw(img)
    _chrome(img, d, eyebrow, counter)

    fv, fl = ts.serif(46, medium=True), ts.sans(25, 300)
    VALUE_W, ROW, PAD = 300, 92, 26

    wrapped = [(r["value"], ts.wrap(r["label"], fl, T.MEASURE_BODY - VALUE_W))
               for r in rows]
    heights = [max(ROW, PAD + len(lines) * 34 + PAD) for _, lines in wrapped]
    height = sum(heights)
    y = (T.BAND_BOTTOM - height) if image else ts.centre_y(height)

    for (value, lines), h in zip(wrapped, heights):
        d.line([(T.MARGIN, y), (T.MARGIN + T.MEASURE_BODY, y)], fill=T.LINE, width=1)
        ts.text(d, (T.MARGIN, y + PAD), value, fv, T.INK, optical=True)
        ly = y + PAD + 8
        for line in lines:
            ts.text(d, (T.MARGIN + VALUE_W, ly), line, fl, T.INK_2)
            ly += 34
        y += h
    return img


def engagement(*, value, label, headline, image=None, eyebrow=None,
               counter=None, **_):
    """
    One piece of work: its size, what the size measures, and what it was.

    The figure leads because it is what makes the slide worth stopping on,
    but it is meaningless alone — $10B could be anything — so the label
    under it says what was counted and the line below says what the work
    was. Three registers, one proposition.
    """
    # The picture keeps its light; the gradient below it, not the flatten,
    # is what makes the type readable. Taken all the way down to
    # GROUND_TARGET a daylit landscape turns to mud, which is the whole
    # reason SCENE_TARGET exists.
    img = (_backdrop(image, close="foot", target=T.SCENE_TARGET, floor=0.0)
           if image else Image.new("RGB", (T.WIDTH, T.HEIGHT), T.BG))
    d = ImageDraw.Draw(img)
    _chrome(img, d, eyebrow, counter)

    fv, fl, fh = (ts.serif(T.SIZE_DISPLAY, medium=True), ts.sans(T.SIZE_LABEL),
                  ts.sans(29, 300))
    lines = ts.wrap(headline, fh, T.MEASURE_BODY)
    block = T.LEAD_DISPLAY + 22 + 28 + 40 + len(lines) * T.LEAD_BODY
    y = (T.BAND_BOTTOM - block) if image else ts.centre_y(block)

    ts.tracked(d, (ts.optical_x(value, fv, T.MARGIN), y), value, fv, T.INK,
               T.DISPLAY_TRACKING)
    y += T.LEAD_DISPLAY + 22
    ts.tracked(d, (T.MARGIN, y), label.upper(), fl, T.INK_3,
               T.SIZE_LABEL * T.EYEBROW_TRACKING)
    y += 28 + 40
    for line in lines:
        ts.text(d, (T.MARGIN, y), line, fh, T.INK_2)
        y += T.LEAD_BODY
    return img


def timeline(*, events, eyebrow=None, counter=None, **_):
    """Dated sequence. The decisive entry carries the crimson."""
    img, d = _canvas(eyebrow, counter)

    fy, ft = ts.mono(26, 500), ts.sans(27, 300)
    label_w, row_gap = 150, 30
    measure = T.MEASURE_BODY - label_w

    wrapped = [(e, ts.wrap(e["text"], ft, measure)) for e in events]
    height = sum(len(lines) * T.LEAD_BODY + row_gap for _, lines in wrapped)
    y = ts.centre_y(height)

    for i, (event, lines) in enumerate(wrapped):
        accent = event.get("accent", False)
        if i:
            d.line([(T.MARGIN, y - row_gap // 2),
                    (T.MARGIN + T.MEASURE_BODY, y - row_gap // 2)], fill=T.LINE, width=1)
        d.text((T.MARGIN, y + 2), str(event["year"]), font=fy,
               fill=T.CRIMSON if accent else T.INK_3)
        for line in lines:
            ts.text(d, (T.MARGIN + label_w, y), line, ft,
                    T.INK if accent else T.INK_2)
            y += T.LEAD_BODY
        y += row_gap
    return img


def compare(*, columns, rows, eyebrow=None, counter=None, **_):
    """Two regimes side by side. Hairlines only — no boxes, no zebra."""
    img, d = _canvas(eyebrow, counter)
    fh, fb, fl = ts.serif(34, medium=True), ts.sans(26, 300), ts.sans(19)

    label_w = 300
    col_w = (T.MEASURE_BODY - label_w) // len(columns)
    xs = [T.MARGIN + label_w + i * col_w for i in range(len(columns))]

    row_h = 96
    height = 76 + len(rows) * row_h
    y = ts.centre_y(height)

    for x, name in zip(xs, columns):
        ts.text(d, (x, y), name, fh, T.INK, optical=True)
    y += 60
    d.line([(T.MARGIN, y), (T.MARGIN + T.MEASURE_BODY, y)], fill=T.LINE, width=1)
    y += 16

    for row in rows:
        ts.tracked(d, (T.MARGIN, y + 16), row["label"].upper(), fl, T.INK_3, 19 * 0.18)
        for x, value in zip(xs, row["values"]):
            ts.text(d, (x, y + 8), value, fb, T.INK_2)
        y += row_h
        d.line([(T.MARGIN, y - 22), (T.MARGIN + T.MEASURE_BODY, y - 22)],
               fill=T.LINE, width=1)
    return img


def chart(*, value, label, series, source=None, eyebrow=None, counter=None, **_):
    """Display figure over its own history. The final bar is the mark."""
    img, d = _canvas(eyebrow, counter)

    ts.text(d, (T.MARGIN, T.BAND_TOP - 40), value,
            ts.serif(T.SIZE_FIGURE, medium=True), T.INK, optical=True)
    ts.tracked(d, (T.MARGIN, T.BAND_TOP + 112), label.upper(), ts.sans(T.SIZE_LABEL),
               T.INK_3, T.SIZE_LABEL * T.EYEBROW_TRACKING)

    gap = 32
    bar_w = (T.MEASURE_BODY - gap * (len(series) - 1)) // len(series)
    base = T.MARK_Y - 116
    peak = max(p["value"] for p in series)

    for i, point in enumerate(series):
        x = T.MARGIN + i * (bar_w + gap)
        h = int(300 * point["value"] / peak)
        last = i == len(series) - 1
        d.rectangle([x, base - h, x + bar_w, base], fill=T.CRIMSON if last else T.PANEL)

        fv = ts.mono(22, 500)
        v = f"{point['value']:g}"
        d.text((x + (bar_w - fv.getlength(v)) / 2, base - h - 36), v, font=fv,
               fill=T.INK if last else T.INK_3)
        fl = ts.mono(20)
        d.text((x + (bar_w - fl.getlength(point["label"])) / 2, base + 16),
               point["label"], font=fl, fill=T.INK_3)

    if source:
        ts.text(d, (T.MARGIN, T.MARK_Y - 34), source, ts.sans(19, 300), T.INK_3)
    return img


TYPES = {
    "cover": cover,
    "quote": quote,
    "numbered": numbered,
    "flow": flow,
    "structure": structure,
    "chain": chain,
    "photo": photo,
    "scene": scene,
    "matrix": matrix,
    "figures": figures,
    "engagement": engagement,
    "timeline": timeline,
    "compare": compare,
    "chart": chart,
}
