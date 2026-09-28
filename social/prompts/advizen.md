# Image prompts — `advizen`

Backdrops for `social/posts/advizen.toml`. Each prompt is complete: paste
one, generate, done.

Generated frames go to `public/social/source/advizen/`, which is tracked
(see `.gitignore`) — the renders under `public/social/` are not.

## What the renderer needs

These are not preferences. `cards._backdrop` scales a photograph to cover
a 1080×1350 frame and centre-crops it, then flattens it toward the void
and closes a gradient over the lower half so type sits on solid ground.

- **4:5 vertical.** 1080×1350 minimum, 2160×2700 preferred. Any other
  aspect loses its edges to the crop.
- **Subject right, lower-left empty.** Over a photograph the text block
  drops to the foot of the frame at the left margin. A subject there is a
  subject under the type.
- **Upper-left stays dark.** The eyebrow sits at x=100, y=112.
- **Dark overall, with the subject lit.** The frame is flattened to
  `theme.GROUND_TARGET` whatever it came in at, so a daylight image
  survives the flatten with its subject gone.
- **No text in the frame.** Every letter and numeral on a card comes from
  `theme.py`. A generator cannot set Spectral, and it cannot spell
  `$10 млрд+`.

Generate two or three of each and keep the one with the emptiest lower
left.

---

## 01 — Cover

For the title `Advizen` and the line about four practices in one.

```
Four tall faceted low-poly glass slabs of different heights standing
tightly together on the right side of the frame, viewed slightly from
below. Where the slabs overlap, the glass reads as one solid column rather
than four separate pieces. Translucent glass with deep oxblood crimson
(#981A30) glowing inside it and cool pale highlights along every edge.
Near-black seamless studio background (#0D0D0D) and a polished dark floor
holding a faint reflection. Single hard key light from the upper right,
deep shadows, no fill light. Photorealistic 3D render, cinematic, high
contrast. The lower-left quadrant of the frame is empty unlit negative
space. 4:5 vertical composition.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, facial features, people, handshake, globe, world map, bright
daylight, blue sky, green foliage, saturated colours, orange, teal,
yellow, white background, clutter, centred composition, subject on the
left, busy lower-left corner.
```

## 02 — Convergence

For "seven disciplines and seven services, one point of contact".

```
A tight cluster of fourteen slender faceted low-poly glass rods of varying
height rising and fanning outward from a single point at the base, on the
right side of the frame. The convergence at the base is the brightest part
of the image; the rods darken toward their tips. Translucent glass with
deep oxblood crimson (#981A30) glowing inside it and cool pale highlights
along every edge. Near-black seamless studio background (#0D0D0D) and a
polished dark floor holding a faint reflection. Single hard key light from
the upper right, deep shadows, no fill light. Photorealistic 3D render,
cinematic, high contrast. The lower-left quadrant of the frame is empty
unlit negative space. 4:5 vertical composition.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, facial features, people, handshake, globe, world map, bright
daylight, blue sky, green foliage, saturated colours, orange, teal,
yellow, white background, clutter, centred composition, subject on the
left, busy lower-left corner.
```

## 04 — Scale — optional

For the record: $10bn+, 80+ registrations, 30+ due diligence. The figures
read better on the void, with nothing competing; this is here if you want
to try it against that.

```
One massive monolithic faceted low-poly glass block on the right side of
the frame with a scatter of much smaller glass shards at its base, so the
difference in scale between them is the subject. Translucent glass with
deep oxblood crimson (#981A30) glowing inside it and cool pale highlights
along every edge. Near-black seamless studio background (#0D0D0D) and a
polished dark floor holding a faint reflection. Single hard key light from
the upper right, deep shadows, no fill light. Photorealistic 3D render,
cinematic, high contrast. The lower-left quadrant of the frame is empty
unlit negative space. 4:5 vertical composition.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, facial features, people, handshake, globe, world map, bright
daylight, blue sky, green foliage, saturated colours, orange, teal,
yellow, white background, clutter, centred composition, subject on the
left, busy lower-left corner.
```

## 05 — Consequence

For "a tax question is almost never only a tax question" — one move and
everything downstream of it moves too.

```
A row of tall faceted low-poly glass plates standing on edge like
dominoes, receding into depth toward the right side of the frame. The
nearest plate is tipping, caught just past the point of balance; the rest
still stand upright. Translucent glass with deep oxblood crimson (#981A30)
glowing inside it and cool pale highlights along every edge. Near-black
seamless studio background (#0D0D0D) and a polished dark floor holding a
faint reflection. Single hard key light from the upper right, deep
shadows, no fill light. Photorealistic 3D render, cinematic, high
contrast. The lower-left quadrant of the frame is empty unlit negative
space. 4:5 vertical composition.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, facial features, people, handshake, globe, world map, bright
daylight, blue sky, green foliage, saturated colours, orange, teal,
yellow, white background, clutter, centred composition, subject on the
left, busy lower-left corner.
```

## 06 — Three

For the three laws. The count is carried by the form, so the card's own
numeral never has to compete with a generated one.

```
Three faceted low-poly glass columns of equal height standing apart in a
row on the right side of the frame. The central column is lit from within
in deep oxblood crimson (#981A30); the outer two stay near-black, carrying
only cool pale edge highlights. Near-black seamless studio background
(#0D0D0D) and a polished dark floor holding a faint reflection. Single
hard key light from the upper right, deep shadows, no fill light.
Photorealistic 3D render, cinematic, high contrast. The lower-left
quadrant of the frame is empty unlit negative space. 4:5 vertical
composition.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, facial features, people, handshake, globe, world map, bright
daylight, blue sky, green foliage, saturated colours, orange, teal,
yellow, white background, clutter, centred composition, subject on the
left, busy lower-left corner.
```

---

## Slide 03 keeps the void

The numbered slide carries two headings and the longest body text in the
carousel. A photograph under it competes with the one thing it is for.

Which leaves the carousel reading picture, picture, void, void, picture,
picture — images work while they are not on every slide.
