# Brief for an outside image model

Paste the block below into ChatGPT (or any model that generates images),
attach two or three reference frames, and let it propose the concepts
itself. It is written to be handed over whole, with nothing assumed.

The two things it must not lose, because they are what two rounds of
in-house prompts got wrong: **the top of every frame is reserved for
type**, and **no two frames in a set may share a register**.

---

```
You are art-directing images for Advizen, an advisory firm in Tashkent,
Uzbekistan. The firm does tax, law, accounting, HR, funding, M&A and due
diligence — one practice, not four vendors. Its audience is founders,
finance directors and in-house lawyers in Tashkent, and foreign investors
looking at Uzbekistan.

I need backdrop images for Instagram carousel cards. I will set all the
typography myself afterwards, in my own fonts. You produce the picture
only.

WHAT I AM ASKING YOU TO DO
Propose 5 distinct image concepts for a carousel about <TOPIC>, then
generate them. For each concept, first give me one line explaining what it
says about the topic — not what it depicts, what it argues. If a concept
is only decorative, discard it and think again. Then produce the image.

THE HOUSE STYLE
- Near-black world: background #0D0D0D, deep shadow, very low key.
- Exactly one colour per frame: deep oxblood #981A30. Desaturated, almost
  black in shadow. Never bright red, ruby or scarlet.
- Light is soft and broad — a window high to one side, gentle falloff,
  long quiet shadows. Never a hard key light with no fill: that produces
  bright white rims on every edge and kills the image.
- Photorealistic photography. Not a 3D render, not an illustration, not
  faceted crystal, not low-poly.
- Restrained and serious. This is a firm that argues from the Tax Code,
  not a startup.

HARD TECHNICAL RULES — an image that breaks one is unusable
1. 4:5 vertical. 1620x2025 or 2160x2700. Any other aspect gets its edges
   cropped off.
2. THE TOP THIRD OF THE FRAME MUST BE DARK AND EMPTY. A headline sits
   there. Keep the subject and all the detail in the lower two thirds.
3. No text anywhere in the image — no letters, no numbers, no words, no
   signage, no logos, no watermarks. Any writing that must appear in the
   scene is blurred past legibility. I set all type myself.
4. No faces. People may appear as hands, forearms, a figure from behind or
   far out of focus. A generated face is the clearest signal that an image
   was generated, and it is against this brand's rules.
5. No stock clichés: handshakes, globes, world maps, rising arrows,
   skylines at sunset, people pointing at charts.

VARIETY IS THE POINT — THIS IS WHERE MOST ATTEMPTS FAIL
My last attempt produced five images that were all the same picture: a
desk, a hand, a sheet of paper. Every one obeyed the brief and the set was
worthless, because five near identical frames make no carousel.

So: each of the five concepts must be in a DIFFERENT visual register. Pick
from these, or invent others, but never use one twice in the same set:
- Diorama — miniatures on a dark plane, connected or marked
- Floating panels — slabs of dark glass in space, pictograms etched into
  them, joined by thin lines
- Macro concept — one object very close: a seal, a stamp, a torn edge, a
  single interlocking piece
- Staged office — a real room with depth, furniture, a person from behind
- Monument — architectural and still: tablets, columns, a threshold, a vault
- Mass — many identical things where the quantity itself is the subject
- Device — a screen or an instrument, its display abstract and unreadable
- Landscape or site — a place where the thing happens

Pictograms are allowed where a concept calls for them, as long as they are
etched, embossed or cast into a real material rather than drawn on top of
the photograph. Letters and numerals are never allowed.

ABOUT THE ATTACHED REFERENCES
These are from a competing firm in the same city. Take from them the
range of ideas and the fact that each image argues something specific
about its post. Do NOT take their palette or their lighting: they work in
bright white with a saturated red, and this brand is the opposite —
near-black, one deep oxblood accent, soft low light.

Start by giving me the five concepts as one line each. I will tell you
which to generate.
```

---

## Using it

Replace `<TOPIC>` with the subject of the post — "a foreign company's
permanent establishment in Uzbekistan and the 183-day rule that does not
apply to it", "what an integrated advisory practice is", and so on. The
more specific the topic, the less decorative the concepts come back.

Asking for the one-line arguments before the images is the part that does
the work: it is cheap to reject a concept as a sentence and expensive to
reject it as five generated frames.

Frames that survive go to `public/social/source/<slug>/`, at 4:5. The
checks worth running on arrival are in `README.md`.
