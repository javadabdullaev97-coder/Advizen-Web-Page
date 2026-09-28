# Image prompts — `advizen`

Backdrops for `social/posts/advizen.toml`. Each prompt is complete: paste
one, generate, done.

Generated frames go to `public/social/source/advizen/`, which is tracked
(see `.gitignore`) — the renders under `public/social/` are not.

## What the renderer needs

These are not preferences. `cards._backdrop` scales a photograph to cover
a 1080×1350 frame and centre-crops it, then flattens it toward the void
and closes a gradient over the lower half so type sits on solid ground.

- **4:5 vertical.** 1080×1350, 1620×2025 or 2160×2700. Any other aspect
  loses its edges to the crop.
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

## What the first pass got wrong

Worth keeping, because the failures were in the prompt rather than the
model.

**Abstract sculptures do not say anything.** Faceted crystals are
decoration; a row of dominoes with the first one tipping is an argument.
Every subject below is an object doing something.

**Hard key light with no fill** produced bright specular rims and dead
bodies — the "white transparent edges" problem. The light is soft and
broad now, and the glow comes from inside the object rather than off its
corners.

**`#981A30` alone gets read as ruby.** The colour has to be described as
deep and desaturated, and bright red has to be named in the negatives.

Generate two or three of each and keep the one with the emptiest lower
left.

---

## 01 — Cover

Four practices, one firm.

```
Four separate stacks of dark documents standing upright and close
together on a dark desk, right of frame, clamped as one by a single deep
oxblood band running across all four. Matte paper, deep shadow, no
reflections on the paper. Near-black environment (#0D0D0D). Soft broad
light falling from a window high on the right, gentle falloff, long quiet
shadows, no hard specular highlights anywhere. The oxblood band is deep
and desaturated, almost black in shadow, and it is the only colour in the
frame. Photorealistic photography, shallow depth of field, calm and
still. The lower-left quadrant of the frame is empty unlit negative
space. 4:5 vertical, 1620x2025.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, people, hands, handshake, globe, bright red, ruby, scarlet,
crimson neon, saturated colours, orange, teal, yellow, hard rim light,
bright white edge highlights, specular glare, faceted crystal, low-poly,
3D render look, studio seamless backdrop, bright daylight, white
background, clutter, centred composition, subject on the left, busy
lower-left corner.
```

## 02 — One point of contact

Fourteen services, one way in.

```
A thick bundle of dark cables gathered and fed into one single deep
oxblood connector, right of frame, resting on a dark surface. The cables
spread loosely behind and the gathering point is the sharpest thing in
the picture. Near-black environment (#0D0D0D). Soft broad light falling
from a window high on the right, gentle falloff, long quiet shadows, no
hard specular highlights anywhere. The oxblood connector is deep and
desaturated, almost black in shadow, and it is the only colour in the
frame. Photorealistic photography, shallow depth of field, calm and
still. The lower-left quadrant of the frame is empty unlit negative
space. 4:5 vertical, 1620x2025.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, people, hands, handshake, globe, bright red, ruby, scarlet,
crimson neon, saturated colours, orange, teal, yellow, hard rim light,
bright white edge highlights, specular glare, faceted crystal, low-poly,
3D render look, studio seamless backdrop, bright daylight, white
background, clutter, centred composition, subject on the left, busy
lower-left corner.
```

## 04 — Track record — optional

The figures read better on the void, with nothing competing. This is here
if you want to try it against that.

```
A tall stack of dark bound case files on a dark desk, right of frame,
seen from slightly below so the height of the stack is the subject. One
file low in the stack has a deep oxblood spine. Worn matte board and
paper, deep shadow. Near-black environment (#0D0D0D). Soft broad light
falling from a window high on the right, gentle falloff, long quiet
shadows, no hard specular highlights anywhere. The oxblood spine is deep
and desaturated, almost black in shadow, and it is the only colour in the
frame. Photorealistic photography, shallow depth of field, calm and
still. The lower-left quadrant of the frame is empty unlit negative
space. 4:5 vertical, 1620x2025.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, people, hands, handshake, globe, bright red, ruby, scarlet,
crimson neon, saturated colours, orange, teal, yellow, hard rim light,
bright white edge highlights, specular glare, faceted crystal, low-poly,
3D render look, studio seamless backdrop, bright daylight, white
background, clutter, centred composition, subject on the left, busy
lower-left corner.
```

## 05 — Consequence

A tax question is almost never only a tax question.

```
A long row of dark dominoes standing on end on a dark polished desk,
receding into depth toward the right of frame. The nearest domino is deep
oxblood and caught mid-fall, just past the point of balance; the rest
still stand. Near-black environment (#0D0D0D). Soft broad light falling
from a window high on the right, gentle falloff, long quiet shadows, no
hard specular highlights anywhere. The oxblood domino is deep and
desaturated, almost black in shadow, and it is the only colour in the
frame. Photorealistic photography, shallow depth of field, a moment
caught rather than posed. The lower-left quadrant of the frame is empty
unlit negative space. 4:5 vertical, 1620x2025.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, people, hands, handshake, globe, bright red, ruby, scarlet,
crimson neon, saturated colours, orange, teal, yellow, hard rim light,
bright white edge highlights, specular glare, faceted crystal, low-poly,
3D render look, studio seamless backdrop, bright daylight, white
background, clutter, centred composition, subject on the left, busy
lower-left corner.
```

## 06 — Three

Three laws, drafted with the team's involvement. The count is carried by
the form, so the card's own numeral never competes with a generated one.

```
Three thick dark leather-bound legal volumes standing upright side by
side on a dark shelf, right of frame. A single deep oxblood ribbon
bookmark hangs from the middle volume. Worn leather, matte, deep shadow.
Near-black environment (#0D0D0D). Soft broad light falling from a window
high on the right, gentle falloff, long quiet shadows, no hard specular
highlights anywhere. The oxblood ribbon is deep and desaturated, almost
black in shadow, and it is the only colour in the frame. Photorealistic
photography, shallow depth of field, calm and still. The lower-left
quadrant of the frame is empty unlit negative space. 4:5 vertical,
1620x2025.

Negative prompt: text, letters, numbers, watermark, logo, signage, human
face, people, hands, handshake, globe, bright red, ruby, scarlet,
crimson neon, saturated colours, orange, teal, yellow, hard rim light,
bright white edge highlights, specular glare, faceted crystal, low-poly,
3D render look, studio seamless backdrop, bright daylight, white
background, clutter, centred composition, subject on the left, busy
lower-left corner.
```

---

## Slide 03 keeps the void

The numbered slide carries two headings and the longest body text in the
carousel. A photograph under it competes with the one thing it is for.

Which leaves the carousel reading picture, picture, void, void, picture,
picture — images work while they are not on every slide.
