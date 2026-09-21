"""
Card layouts.

Every card carries exactly one crimson mark (DESIGN.md §2) — a rule, or the
numerals, or one stroke, or one bar. Cards that mark themselves some other
way pass mark=False so the accent rule is not drawn on top of it.

The diagram types are the reason this exists rather than a template in
Canva. Consulting firms describe structures in prose; drawing them —
consistently, in the brand's own hand — is what separates the feed.
"""

from PIL import Image, ImageDraw

import theme as T
import typeset as ts


def _chrome(d, eyebrow: str | None, counter: str | None, mark: bool):
    if eyebrow:
        ts.tracked(d, (T.MARGIN, T.EYEBROW_Y), eyebrow.upper(),
                   ts.sans(T.SIZE_LABEL), T.INK_3, T.SIZE_LABEL * T.EYEBROW_TRACKING)
    if mark:
        d.line([(T.MARGIN, T.MARK_Y), (T.MARGIN + 46, T.MARK_Y)], fill=T.CRIMSON, width=2)
    ts.tracked(d, (T.MARGIN, T.FOOT_Y), "ADVIZEN", ts.sans(23, 500), T.INK_2,
               23 * T.WORDMARK_TRACKING)
    if counter:
        f = ts.mono(T.SIZE_COUNTER)
        d.text((T.WIDTH - T.MARGIN - f.getlength(counter), T.FOOT_Y + 2),
               counter, font=f, fill=T.INK_3)


def _canvas(eyebrow=None, counter=None, mark=True):
    img = Image.new("RGB", (T.WIDTH, T.HEIGHT), T.BG)
    d = ImageDraw.Draw(img)
    _chrome(d, eyebrow, counter, mark)
    return img, d


# ── Text cards ──────────────────────────────────────────────────────

def cover(*, category, title, deck, counter=None, **_):
    img, d = _canvas(category, counter)
    ft, fd = ts.serif(T.SIZE_DISPLAY, medium=True), ts.sans(T.SIZE_DECK, 300)

    title_lines = ts.wrap(title, ft, T.MEASURE_BODY)
    deck_lines = ts.wrap(deck, fd, T.MEASURE_DECK) if deck else []

    y = ts.centre_y(len(title_lines) * T.LEAD_DISPLAY + (26 if deck_lines else 0)
                    + len(deck_lines) * T.LEAD_DECK)

    for line in title_lines:
        ts.tracked(d, (ts.optical_x(line, ft, T.MARGIN), y), line, ft, T.INK,
                   T.DISPLAY_TRACKING)
        y += T.LEAD_DISPLAY
    y += 26
    for line in deck_lines:
        ts.text(d, (T.MARGIN, y), line, fd, T.INK_2)
        y += T.LEAD_DECK
    return img


def quote(*, text, eyebrow=None, counter=None, **_):
    img, d = _canvas(eyebrow, counter)
    f = ts.serif(T.SIZE_QUOTE)
    bl = ts.blocks(text, f, T.MEASURE_BODY - 20)
    y = ts.centre_y(ts.block_height(bl, T.LEAD_QUOTE, 42))
    ts.draw_blocks(d, T.MARGIN, y, bl, f, T.INK, T.LEAD_QUOTE, 42, optical=True)
    return img


def numbered(*, items, eyebrow=None, counter=None, start=1, **_):
    img, d = _canvas(eyebrow, counter, mark=False)   # the numerals are the mark
    fn, fh, fb = ts.mono(23, 500), ts.serif(T.SIZE_HEAD, medium=True), ts.sans(T.SIZE_BODY, 300)
    measure = T.MEASURE_BODY - T.LIST_INDENT

    wrapped = [(i["name"], ts.wrap(i["text"], fb, measure)) for i in items]
    height = sum(52 + len(lines) * T.LEAD_BODY + 56 for _, lines in wrapped)
    y = ts.centre_y(height)

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

def _node(d, box, label, value, *, accent=False):
    x0, y0, x1, y1 = box
    d.rectangle(box, fill=(38, 20, 24) if accent else T.PANEL,
                outline=T.CRIMSON if accent else None, width=2 if accent else 0)
    ts.tracked(d, (x0 + 26, y0 + 28), label.upper(), ts.sans(19), T.INK_3, 19 * 0.18)
    if value:
        d.text((x0 + 24, y0 + 60), value, font=ts.mono(44, 500), fill=T.INK)


def flow(*, nodes, gate, outcome, note=None, eyebrow=None, counter=None, **_):
    """A decision that cannot resolve: parties → gate → outcome."""
    img, d = _canvas(eyebrow, counter, mark=False)   # the crimson stroke is the mark

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
    img, d = _canvas(eyebrow, counter, mark=False)

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
    img, d = _canvas(eyebrow, counter, mark=False)

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
    "compare": compare,
    "chart": chart,
}
