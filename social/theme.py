"""
Design tokens for Advizen social cards.

Every value here is bound to DESIGN.md. When the brandbook changes, change
it here too — and nowhere else. No card module may define a colour or a
size of its own.
"""

from pathlib import Path

ROOT = Path(__file__).parent
FONT_DIR = ROOT / "fonts"

# ── Canvas ────────────────────────────────────────────────────────────
# 4:5 is the tallest portrait the feed renders without cropping.
WIDTH = 1080
HEIGHT = 1350
MARGIN = 100

EYEBROW_Y = 112          # baseline of the category label
BAND_TOP = 268           # content band, top
BAND_BOTTOM = 1048       # content band, bottom
MARK_Y = 1118            # the single crimson mark
FOOT_Y = 1172            # wordmark and counter

# ── Colour, DESIGN.md §2 ─────────────────────────────────────────────
# One warm hue (34deg, 13%) descending in lightness. Never mix in a
# neutral grey: beside Warm Parchment it reads cold and muddies the pair.
BG = (13, 13, 13)          # Void Canvas   #0D0D0D
PANEL = (28, 26, 24)       # panel fill, warm sibling of Charcoal Surface
LINE = (52, 48, 45)        # hairline, warm sibling of Hairline Border
INK = (217, 212, 206)      # Warm Parchment #D9D4CE
INK_2 = (155, 147, 138)    # Warm Muted     #9B938A
INK_3 = (108, 102, 95)     # Warm Dim       #6C665F

# Slightly desaturated from the site's #940e27: at card scale, against a
# near-black ground, the full-saturation oxblood reads hot rather than deep.
CRIMSON = (152, 26, 48)

# ── Type, DESIGN.md §3 ──────────────────────────────────────────────
# Two families, fixed roles. Spectral takes every display line, including
# numeric ones — display is a role, not a character set.
SERIF = "Spectral"
SERIF_MD = "Spectral-Md"
SANS = "Geist"
MONO = "GeistMono"

SIZE_DISPLAY = 78
SIZE_FIGURE = 116
SIZE_QUOTE = 50
SIZE_HEAD = 38
SIZE_DECK = 31
SIZE_BODY = 28
SIZE_LABEL = 20
SIZE_COUNTER = 20

LEAD_DISPLAY = 92
LEAD_QUOTE = 74
LEAD_DECK = 48
LEAD_BODY = 44

# Spectral is drawn for text, so at display size it sets a touch loose.
DISPLAY_TRACKING = -0.6

# 0.18em, not the site's 0.28em: at card scale the wider tracking reads as
# a mannerism rather than as the brand's fingerprint.
EYEBROW_TRACKING = 0.18
WORDMARK_TRACKING = 0.20

# Measures. The deck is deliberately narrower than the title's column so a
# short serif headline is not undercut by a full-width line of sans.
MEASURE_DECK = 620
MEASURE_BODY = WIDTH - 2 * MARGIN
LIST_INDENT = 96

# ── Surface ─────────────────────────────────────────────────────────
GRAIN = 0.05             # matches body::after at 0.06, less the card's own contrast
VIGNETTE = 0.20          # corner falloff; the page should feel lit, not flat
