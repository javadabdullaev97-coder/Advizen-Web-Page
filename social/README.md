# Social cards

Draws the Instagram, Facebook and LinkedIn cards from a text file, to the
rules in [DESIGN.md](../DESIGN.md) §10.

Drawing costs nothing per post. This is ordinary code and no model takes
part in it, so the only expense is writing the text — once a month, for the
whole month.

## Setup

Once per machine:

```bash
bash social/fonts/fetch.sh          # Spectral, Geist, Geist Mono
python3 -m pip install "Pillow>=10,<12"
```

The fonts are not committed. They are binaries under the Open Font
Licence, served from a stable path, so carrying copies here buys nothing.

## Drawing a post

```bash
python3 social/render.py social/posts/deadlock.toml
```

Writes `public/social/deadlock/01.png` … `06.png`. Anything under `public/`
is served by the site, so once deployed the cards answer at
`advizenco.com/social/deadlock/01.png`. That matters later: Instagram
fetches an image by public URL rather than accepting bytes, so a card has
to be live on the site before it can be published anywhere.

## Drawing a Reel

```bash
python3 -m pip install imageio-ffmpeg     # once, alongside Pillow
python3 social/reel.py social/posts/deadlock.toml
```

Writes `public/social/deadlock/reel.mp4` — 1080×1920, twelve seconds,
silent. Same rule as the cards: ordinary code, no model, nothing to pay
per post.

A Reel adds no writing. It reads the `flow` slide for the mechanism and
the closing `quote` for the conclusion, because the card types are already
storyboards — a `flow` names parties, a gate and an outcome in the order
the argument runs. Motion reveals what is drawn; it does not invent a
second visual language, and every colour and size still comes from
`theme.py`.

The beats live in one dict, `BEATS`, and they are reading speeds rather
than animation speeds. That is also what makes sound cheap to add later: a
narrator follows the same timings, and laying a voice track over the
finished frames is one more ffmpeg input, not a redraw.

## Writing a post

One TOML file per post. The cover is generated from the header — do not
write it as a slide.

```toml
slug     = "deadlock"              # folder name, and the URL
category = "Корпоративное право"   # eyebrow on every card
title    = "Deadlock"              # cover headline
deck     = "Равное распределение долей"

[[slide]]
type = "quote"
text = """
One proposition.

A second, after a blank line.
"""
```

Every slide takes an optional `eyebrow`; without one it inherits
`category`.

### Slide types

| `type` | Fields | Crimson mark |
|---|---|---|
| `quote` | `text` | accent rule |
| `numbered` | `items` (`name`, `text`), `start` | the numerals |
| `flow` | `nodes` (`label`, `value`), `gate`, `outcome`, `note` | the stroke into the outcome |
| `structure` | `parent`, `children` (`label`, `value`), `note` | the parent's outline |
| `compare` | `columns`, `rows` (`label`, `values`) | accent rule |
| `chart` | `value`, `label`, `series` (`label`, `value`), `source` | the final bar |

`social/posts/_specimen.toml` exercises the three types the real post does
not use. Render it after changing `theme.py` or `cards.py` and look at the
result before trusting a change.

### Limits that are not arbitrary

- Up to **three** items in a `numbered` slide, **two** columns in a
  `compare`. Beyond that the type size has to drop below the 11px floor
  in DESIGN.md §3. Split across two slides instead.
- A `flow` takes two or three nodes. Four will fit and will not read.
- Any figure on a card carries its source **on the same card**.

## Editorial rules

From DESIGN.md §10, and they are the point of the whole thing: no hook, no
cliffhanger, no engagement bait, no emoji, no "swipe" prompt. Every slide
states a complete proposition. A slide that only sets up the next one gets
cut.

## Files

| File | What it holds |
|---|---|
| `theme.py` | every colour, size and coordinate — bound to DESIGN.md |
| `typeset.py` | fonts, tracking, wrapping, optical alignment, grain, vignette |
| `cards.py` | the layouts |
| `render.py` | reads a post, writes the PNGs |

A card layout may not define a colour or a size of its own. If something is
missing, add it to `theme.py`.

## Not done yet

The rendered PNGs are ignored by git, so they do not reach the deployed
site. That is fine while cards are drawn to be looked at, and has to change
before publishing is automated: the pipeline needs a workflow that renders
on push and commits the output, the way `social-cards.yml` does in the news
repository. Publishing itself — Meta, LinkedIn and X — is not built.
