# Writing image prompts

Two card types take a photograph, and they want opposite pictures. Getting
this backwards is what produced a run of handsome, meaningless still lifes.

## `scene` — a situation, under a reserved band

The headline sits in a band across the head of the frame, over a gradient
that closes the top. Nothing is laid over the picture itself, so the
picture is free to be busy.

This is the type to use when the image should say something about the
post. Ask for a **situation, not an object**:

- Something is happening, caught mid-move — a hand placing, pulling,
  signing, moving one paper and the rest shifting.
- **People without faces.** Hands, forearms, a figure from behind. Never a
  face: `DESIGN.md` §10 rules out staged team photography, and a generated
  face is the single clearest tell that an image was generated.
- Props that belong to the work: documents, folders, a desk lamp, a stamp,
  an archive shelf, a pen, a seal.
- Markers carried by real objects — a crimson tag, a ribbon, a flag pin, a
  wax seal. Not drawn icons; the model spells those as badly as it spells
  words.
- **One crimson thing** among neutral ones. That is the whole colour
  budget, and it should be the thing the post is about.

Composition: keep the action in the **lower two thirds**. The top of the
frame goes dark under the band. Left and right are both free — the old
"leave the lower left empty" rule belongs to the other type, and applying
it here is what emptied the pictures out.

## Rotate the register

The first brief written to this file produced six prompts that were all
the same picture: a desk, a hand, a sheet of paper. Each one obeyed every
rule above and the set was worthless, because a carousel of six near
identical frames has no carousel in it.

So the register is a constraint of its own. **No two slides in a post
share one, and a register does not repeat until the others have been
used.** Pick from these and add to the list rather than settling into a
favourite:

| Register | What it looks like |
|---|---|
| Diorama | Miniature buildings, desks or figures on a dark plane, connected or marked |
| Floating panels | Slabs of dark glass hanging in space, each carrying one engraved pictogram, joined by thin crimson lines |
| Macro concept | One object very close — a puzzle piece, a seal, a stamp, a torn edge |
| Staged office | A real room, a person from behind or out of focus, depth and furniture |
| Monument | Something architectural and still: tablets, columns, a threshold, a vault |
| Mass | Many identical things at once — a wall of drawers, a grid of markers, a full shelf — where the quantity is the subject |
| Device | A screen, a keyboard, an instrument, its display abstract and unreadable |
| Desk still life | A surface, papers, a hand. **Used already. Do not reach for it again until the rest have been.** |

Pictograms are allowed where a register calls for them — scales, a chart
bar, a pin, a clock — as long as they are engraved, embossed or etched
into a real material rather than drawn on top. Letters and numerals never
are.

## `cover`, `quote`, `numbered`, `figures`, `engagement` — a ground, under type

Here the type is laid over the foot of the picture and the picture is
flattened most of the way to the void. It has to be quiet: one subject,
in the **upper two thirds**, with the bottom of the frame empty. That is
the exact inverse of `scene`, and briefing one as the other is how a
picture ends up either buried or fighting the words on top of it. A scene
put through this treatment loses everything that made it a scene.

## True for both

- **4:5 vertical.** 1080×1350, 1620×2025 or 2160×2700. Anything else
  loses its edges to the centre crop.
- **No text in the frame.** Every letter and numeral comes from
  `theme.py`. A generator cannot set Spectral and cannot spell `$10 млрд+`.
- **The renderer only darkens. It never brightens.** A frame that arrives
  far below target stays that dark and prints as a black rectangle;
  `_backdrop` warns on it now. Always generate lighter than the card
  should end up, and let the flatten bring it down. This applies to a
  graphic on a studio backdrop exactly as it does to a room.
- **Brief the picture as daylight, never as darkness.** `scene` flattens
  whatever arrives down to `theme.SCENE_TARGET`, and `_backdrop` does the
  same toward `GROUND_TARGET`. The darkness is the renderer's, applied to
  every frame. Asking for it in the prompt as well multiplies the two and
  produces a horror set — an unlit corridor with red light under the
  doors, which is exactly what happened. What makes an image read as this
  brand is the material, not the absent light: walnut, bronze, stone,
  charcoal linen, worn leather. A bright room full of dark costly surfaces
  flattens into something rich; a dark room flattens into a hole.
- **The crimson is an object, never a light.** Coloured light across a
  floor reads as a nightclub or a crime scene. A crimson folder, runner,
  box or binding reads as a firm.
- **Soft, broad light** — a window high and to one side. A hard key light
  with no fill is what produced the bright white rims on the first pass.
- **Describe the crimson in words**, not only as a hex code: deep,
  desaturated, almost black in shadow. `#981A30` on its own gets rendered
  as ruby. Put `bright red, ruby, scarlet` in the negatives.
- **Say `photorealistic photography`** and put `3D render look, faceted
  crystal, low-poly` in the negatives. That phrasing is most of the
  difference between a photograph and something that looks generated.

Generate two or three of each and keep the best.
