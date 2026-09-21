#!/usr/bin/env python3
"""
Draw a Reel from a post.

    python3 social/reel.py social/posts/deadlock.toml

Writes public/social/<slug>/reel.mp4 — 1080x1920, twelve seconds, silent.

The same principle as render.py: ordinary code, no model, no cost per post.
A Reel takes nothing the carousel did not already contain. It reads the
`flow` slide for the mechanism and the closing `quote` for the conclusion,
so writing a Reel costs nothing beyond writing the post.

Why silent, and why the mechanism rather than a face: the carousel types
are already storyboards. A `flow` names parties, a gate and an outcome, in
that order, because that is the order the argument runs. Motion reveals
what is already drawn; it does not invent a second visual language. Sound
can be laid over this later without touching any of it — see the note at
the end of the module.
"""

import subprocess
import sys
import tomllib
from pathlib import Path

from PIL import Image, ImageDraw

sys.path.insert(0, str(Path(__file__).parent))

import theme as T  # noqa: E402
import typeset as ts  # noqa: E402

REPO = Path(__file__).parent.parent
OUT_ROOT = REPO / "public" / "social"

# ── Canvas ───────────────────────────────────────────────────────────
# 9:16 is the only shape a Reel is served in. The margin stays at the
# card's 100px: the frame is taller, not looser.
W, H = 1080, 1920
FPS = 30
DURATION = 12.0

EYEBROW_Y = 200
FOOT_Y = 1790
MARK_Y = 1724
MEASURE = W - 2 * T.MARGIN

# ── Timing ───────────────────────────────────────────────────────────
# Read speeds, not animation speeds. Every beat is sized to how long the
# line takes to read in Russian, which is why the note holds longest.
CUT = 8.9                       # the mechanism gives way to the conclusion

BEATS = {
    "eyebrow":   (0.0, 0.7),
    "node_a":    (0.5, 1.3),
    "node_b":    (0.9, 1.7),
    "connect":   (1.9, 2.7),
    "gate":      (2.8, 3.6),
    "stroke":    (3.9, 4.7),     # the crimson mark, and the turn of the argument
    "outcome":   (4.9, 5.7),
    "note":      (6.1, 7.0),
    "fade_out":  (8.3, 8.9),
    "line_one":  (9.1, 10.0),
    "line_two":  (10.3, 11.2),
}


# ── Easing ───────────────────────────────────────────────────────────

def seg(t: float, key: str) -> float:
    """Progress through one beat, clamped to 0..1."""
    t0, t1 = BEATS[key]
    return min(1.0, max(0.0, (t - t0) / (t1 - t0)))


def ease(p: float) -> float:
    """Ease-out cubic. Things arrive and settle; nothing bounces."""
    return 1 - (1 - p) ** 3


def dim(colour, alpha: float):
    """
    Fade toward the ground rather than compositing alpha.

    The canvas is one flat colour, so interpolating to it is exact and
    costs nothing — and it keeps every frame in the palette theme.py
    defines, which an alpha composite over grain would not.
    """
    return tuple(round(g + (c - g) * alpha) for c, g in zip(colour, T.BG))


# ── Surface ──────────────────────────────────────────────────────────
# finish() rebuilds the grain and the vignette on every call. For one card
# that is free; for 360 frames it is the whole render. Both are
# deterministic, so they are built once here and applied per frame.

_VIGNETTE = ts._vignette((W, H)).point(lambda v: int(v * T.VIGNETTE))
_GRAIN = ts._grain((W, H)).point(lambda v: int(v * T.GRAIN))
_DARK = Image.new("RGB", (W, H), (0, 0, 0))
_MID = Image.new("RGB", (W, H), (128, 128, 128))


def finish(img: Image.Image) -> Image.Image:
    img = Image.composite(_DARK, img, _VIGNETTE)
    return Image.composite(Image.blend(img, _MID, 0.5), img, _GRAIN)


# ── Chrome ───────────────────────────────────────────────────────────

def chrome(d, eyebrow: str, alpha: float, mark: bool):
    """Eyebrow above, wordmark below — the same two fixtures as a card."""
    if alpha > 0:
        ts.tracked(d, (T.MARGIN, EYEBROW_Y), eyebrow.upper(), ts.sans(T.SIZE_LABEL),
                   dim(T.INK_3, alpha), T.SIZE_LABEL * T.EYEBROW_TRACKING)
    if mark:
        d.line([(T.MARGIN, MARK_Y), (T.MARGIN + 46, MARK_Y)], fill=T.CRIMSON, width=2)
    ts.tracked(d, (T.MARGIN, FOOT_Y), "ADVIZEN", ts.sans(23, 500), T.INK_2,
               23 * T.WORDMARK_TRACKING)


# ── Scene one: the mechanism ─────────────────────────────────────────
# The card's flow layout, opened out into the taller frame and scaled to
# it. A Reel is watched at arm's length on a phone and scrolled past at
# speed, so the diagram carries about a fifth more than it does on the
# card; the card is read, this is caught.

BOX_H = 152
GAP = 64
JOIN_DROP = 92
GATE_H = 118
STROKE_DROP = 96
OUT_PAD, OUT_LINE, NOTE_GAP, NOTE_LEAD = 34, 78, 118, 48

# The band the figure is centred in: clear of the eyebrow, clear of the
# mark. Centring by measurement rather than by a constant — the same bug
# cards.flow carries a comment about.
BAND_TOP, BAND_BOTTOM = EYEBROW_Y + 140, MARK_Y - 90


def _note_lines(slide) -> list[str]:
    return ts.wrap(slide["note"], ts.sans(32, 300), MEASURE) if slide.get("note") else []


def _node_y(slide) -> int:
    height = (BOX_H + JOIN_DROP * 2 + GATE_H + STROKE_DROP + OUT_PAD + OUT_LINE
              + (NOTE_GAP + len(_note_lines(slide)) * NOTE_LEAD))
    return BAND_TOP + max(0, (BAND_BOTTOM - BAND_TOP - height) // 2)


def mechanism(d, t: float, slide: dict, alpha: float):
    nodes = slide["nodes"]
    box_w = (MEASURE - GAP * (len(nodes) - 1)) // len(nodes)
    NODE_Y = _node_y(slide)

    centres = []
    for i, n in enumerate(nodes):
        a = alpha * ease(seg(t, "node_a" if i == 0 else "node_b"))
        x = T.MARGIN + i * (box_w + GAP)
        centres.append(x + box_w // 2)
        if a <= 0:
            continue
        # A node rises a little as it arrives. Twelve pixels: enough to
        # read as movement, not enough to read as a slide transition.
        dy = round((1 - a) * 12)
        y0 = NODE_Y + dy
        d.rectangle((x, y0, x + box_w, y0 + BOX_H), fill=dim(T.PANEL, a))
        ts.tracked(d, (x + 28, y0 + 32), n["label"].upper(), ts.sans(21),
                   dim(T.INK_3, a), 21 * 0.18)
        if n.get("value"):
            d.text((x + 26, y0 + 68), n["value"], font=ts.mono(50, 500), fill=dim(T.INK, a))

    # Connectors. They draw rather than appear: the join is the moment the
    # two holdings stop being separate and start being a problem.
    p = ease(seg(t, "connect"))
    y = NODE_Y + BOX_H
    join = y + JOIN_DROP
    mid = (centres[0] + centres[-1]) // 2
    line = dim(T.LINE, alpha)
    if p > 0 and alpha > 0:
        drop = y + (join - y) * min(1.0, p / 0.4)
        for cx in centres:
            d.line([(cx, y), (cx, drop)], fill=line, width=1)
        if p > 0.4:
            q = min(1.0, (p - 0.4) / 0.35)
            half = (centres[-1] - centres[0]) / 2 * q
            d.line([(mid - half, join), (mid + half, join)], fill=line, width=1)
        if p > 0.75:
            q = (p - 0.75) / 0.25
            d.line([(mid, join), (mid, join + JOIN_DROP * q)], fill=line, width=1)

    # The gate: what the structure requires and cannot produce.
    gy = join + JOIN_DROP
    a = alpha * ease(seg(t, "gate"))
    if a > 0:
        d.rectangle((T.MARGIN, gy, T.MARGIN + MEASURE, gy + GATE_H), fill=dim(T.PANEL, a))
        ts.text(d, (T.MARGIN + 28, gy + 38), slide["gate"],
                ts.sans(32, 300), dim(T.INK_2, a))

    # The one crimson mark in the frame, drawn downward. It is the only
    # element that moves toward the reader rather than settling into place.
    sy = gy + GATE_H
    p = ease(seg(t, "stroke"))
    if p > 0 and alpha > 0:
        d.line([(mid, sy), (mid, sy + STROKE_DROP * p)], fill=dim(T.CRIMSON, alpha), width=2)

    # The outcome, in Spectral, because a display line is a role.
    oy = sy + STROKE_DROP + OUT_PAD
    a = alpha * ease(seg(t, "outcome"))
    if a > 0:
        ts.text(d, (T.MARGIN, oy - round((1 - a) * 10)), slide["outcome"],
                ts.serif(72, medium=True), dim(T.INK, a), optical=True)

    # The sting. Held longest of anything in the reel: it is the line that
    # has to land before the conclusion means anything.
    a = alpha * ease(seg(t, "note"))
    if a > 0:
        f = ts.sans(32, 300)
        y = oy + OUT_LINE + NOTE_GAP
        for ln in _note_lines(slide):
            ts.text(d, (T.MARGIN, y), ln, f, dim(T.INK_3, a))
            y += NOTE_LEAD


# ── Scene two: the conclusion ────────────────────────────────────────

def conclusion(d, t: float, paragraphs: list[str]):
    """
    Two propositions, arriving in order, on a clean frame.

    The cut is hard. A crossfade would say the two scenes are one thought;
    they are not — the first is what happens, the second is what to do
    about it, and the argument turns between them.
    """
    f = ts.serif(56)
    lines = []
    for i, para in enumerate(paragraphs[:2]):
        lines.append((ts.wrap(para, f, MEASURE), "line_one" if i == 0 else "line_two"))

    height = sum(len(ls) * T.LEAD_QUOTE for ls, _ in lines) + 56 * (len(lines) - 1)
    y = 620 + max(0, (900 - height) // 2)

    for block, beat in lines:
        a = ease(seg(t, beat))
        for ln in block:
            if a > 0:
                ts.text(d, (T.MARGIN, y - round((1 - a) * 10)), ln, f, dim(T.INK, a))
            y += T.LEAD_QUOTE
        y += 56


# ── Frames ───────────────────────────────────────────────────────────

def frame(t: float, post: dict, flow: dict, quote: dict) -> Image.Image:
    img = Image.new("RGB", (W, H), T.BG)
    d = ImageDraw.Draw(img)

    if t < CUT:
        out = 1.0 - ease(seg(t, "fade_out"))
        chrome(d, flow.get("eyebrow", post["category"]),
               ease(seg(t, "eyebrow")) * out, mark=False)
        mechanism(d, t, flow, out)
    else:
        chrome(d, quote.get("eyebrow", post["category"]), 1.0, mark=True)
        paragraphs = [p.strip() for p in quote["text"].strip().split("\n\n") if p.strip()]
        conclusion(d, t, paragraphs)

    return finish(img)


def die(message: str) -> None:
    print(f"error: {message}", file=sys.stderr)
    raise SystemExit(1)


def pick(post: dict) -> tuple[dict, dict]:
    """The mechanism is the first flow; the conclusion is the last quote."""
    flow = next((s for s in post["slide"] if s.get("type") == "flow"), None)
    quote = next((s for s in reversed(post["slide"]) if s.get("type") == "quote"), None)
    if not flow:
        die(f"{post['slug']}: a reel needs a [[slide]] of type 'flow'")
    if not quote:
        die(f"{post['slug']}: a reel needs a closing [[slide]] of type 'quote'")
    return flow, quote


def main() -> None:
    if len(sys.argv) != 2:
        die("usage: python3 social/reel.py social/posts/<name>.toml")

    path = Path(sys.argv[1])
    if not path.exists():
        die(f"no such post: {path}")
    with path.open("rb") as fh:
        post = tomllib.load(fh)
    flow, quote = pick(post)

    out_dir = OUT_ROOT / post["slug"]
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / "reel.mp4"

    try:
        import imageio_ffmpeg
        exe = imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        exe = "ffmpeg"

    total = int(DURATION * FPS)
    proc = subprocess.Popen(
        [exe, "-y", "-loglevel", "error",
         "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS),
         "-i", "-",
         # yuv420p and the even dimensions are what makes the file play on
         # a phone at all; Instagram re-encodes, but rejects what it cannot
         # decode first.
         "-c:v", "libx264", "-preset", "slow", "-crf", "18",
         "-pix_fmt", "yuv420p", "-movflags", "+faststart",
         str(out)],
        stdin=subprocess.PIPE,
    )
    for i in range(total):
        proc.stdin.write(frame(i / FPS, post, flow, quote).tobytes())
    proc.stdin.close()
    if proc.wait() != 0:
        die("ffmpeg failed")

    print(f"{post['slug']}: {DURATION:.0f}s reel, {total} frames")
    print(f"  {out.relative_to(REPO)}  →  /social/{post['slug']}/reel.mp4")


# Sound, when it is wanted: nothing above has to change. A voice track is
# laid over the finished frames with one more ffmpeg input, and the beats
# in BEATS are already the script's timings — they were written as reading
# speeds, which is what a narrator follows. Cutting the picture to a voice
# later means changing numbers in one dict, not the drawing.

if __name__ == "__main__":
    main()
