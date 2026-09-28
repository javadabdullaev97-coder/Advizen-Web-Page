# Image prompts — `advizen`

Scenes for `social/posts/advizen.toml`. Frames go to
`public/social/source/advizen/`, which is tracked.

## Do not ask for darkness

`cards.scene` flattens whatever arrives down to `theme.SCENE_TARGET` and
closes a gradient over the head of the frame. The darkness is the
renderer's job and it does it to every image.

Asking for it in the prompt as well is what produced an unlit corridor at
night with red light under the doors — a horror set. Two darknesses
multiplied.

**So brief the picture as daylight.** What makes it read as this brand is
the material, not the absence of light: walnut, bronze, stone, charcoal
linen, brushed steel, worn leather. A well-lit room full of dark, costly
surfaces flattens into something rich. A dark room flattens into a hole.

**And the crimson is an object, never a light.** Coloured light spilling
across a floor reads as a nightclub or a crime scene. A crimson folder,
runner, box or binding reads as a firm.

The one thing the picture really must do is keep its **top third calm** —
no subject, no busy detail — because the headline sits there.

---

## 01 — Cover

Four practices, one firm.

```
A calm, bright corridor in a good modern office building, photographed
straight down its length in the middle of the day. Four open doorways lead
off it, two on each side. A single continuous runner of deep oxblood wool
carpet lies along the floor and passes through all four thresholds,
joining them. Walnut door frames, pale plaster walls, a bronze rail, a
polished concrete floor. Large soft daylight from a tall window at the far
end, even and diffused, gentle shadows. The oxblood runner is deep and
desaturated, matte wool, and is the only colour in the frame. Editorial
architectural photography, 35mm, natural light, calm and expensive. The
corridor and the runner occupy the lower two thirds; the upper third is
plain wall and empty. 4:5 vertical, 1620x2025.

Negative prompt: night, darkness, unlit, gloomy, moody, horror, thriller,
film noir, haunted, eerie, coloured light on the floor, red glow, neon,
light spilling under doors, text, letters, numbers, words, signage,
nameplate, watermark, logo, face, eyes, portrait, bright red, ruby,
scarlet, saturated colours, orange, teal, yellow, hard rim light, specular
glare, 3D render, illustration, faceted crystal, floating glass panels,
abstract sculpture, tabletop still life.
```

## 02 — One point of contact

Many services, one way in. The only slide in the post that is a graphic
rather than a place: it states a fact about how the firm is arranged, not
a situation, and a photograph of an empty reception desk said the opposite
of what was meant — that there is nobody there to help.

An exact count is not asked for. Generators cannot count, and the card's
own text carries the seven and seven.

**Brief it bright.** The first version asked for a near-black ground and
smoked dark glass at once and came back at mean 26 against a target of
115 — a black rectangle. Nothing in the renderer brightens a picture, only
darkens it, so a graphic on a dark ground has to arrive clearly lit and be
taken down, never the other way round.

```
A brightly lit studio product photograph. A dozen or so small tiles of
clear polished glass float at different depths against a smooth mid-grey
graphite backdrop that is lit to a visible gradient, brightest behind the
tiles. Each tile carries one simple pictogram deeply etched into its face
in frosted white, standing out clearly — a pair of scales, an hourglass, a
key, a wax seal, a chart bar, a padlock, a banknote. Fine deep oxblood
cords run between the tiles and gather into one larger tile at the front,
square-on and closest to the camera. Thick glass with bright bevelled
edges and crisp internal reflections. Strong soft key light from the upper
left with a fill from the right; the whole image is bright and clearly
readable. The oxblood cords are deep and desaturated and are the only
colour. Photorealistic macro product photography, 85mm, shallow depth of
field. The arc and the front tile occupy the lower two thirds; the upper
third is plain graphite backdrop and empty. 4:5 vertical, 1620x2025.

Negative prompt: dark, near-black, black background, underexposed, murky,
low-key, dim, moody, night, text, letters, numbers, words, readable
writing, watermark, logo, signage, face, eyes, portrait, people, bright
red, ruby, scarlet, neon, glowing edges, saturated colours, orange, teal,
yellow, rainbow refraction, hard rim light, specular glare, faceted
crystal, gemstone, jewellery, low-poly, cartoon, flat vector
illustration, user interface screenshot, white background, cluttered,
centred symmetrical composition.
```

## The glass family

Slides 02, 04 and 06 share one material, and what it looks like is settled
by `02-contact.jpg` rather than by anything written here: **a near-black
ground, glass tinted deep oxblood, frosted white etching, one soft key**.
That frame averages 31 in luminance.

The first drafts of 04 and 06 asked for a bright graphite backdrop, and
got one — 111 and 145 against the tiles' 31. Three slides in three
different exposures. The tiles prompt had said "bright" too and the model
ignored it; the other two obeyed, and the mismatch is what showed up.

So these two are briefed to the accepted picture. Dark works here because
a lit subject sits on a dark ground — which is not the dim room that
produced the horror corridor, and the distinction is the whole rule.

## 04 — Track record

Ten billion in deals, eighty registrations, thirty due diligence reviews.
The quantity is the subject; the card's own text carries the figures.

*Same material as 02, different composition:* a field seen from above and
receding, where 02 is an arc at eye level.

```
A studio product photograph on a near-black background, looking down at a
shallow angle across a dense field of small square glass markers laid out
in a loose grid on a black surface, the grid running away from the camera
and dissolving into darkness and soft focus at the back of the frame. Most
markers are dark smoked glass and read almost black; perhaps a dozen
scattered through the field are deep oxblood, lit from within, and stand
slightly taller than the rest. A few near the front are tipped on their
sides. Thick glass, bevelled edges catching thin highlights, faint
reflections on the black surface beneath. A single soft key light from the
upper left, deep shadow everywhere else, no fill. Only the bevels and the
oxblood markers catch the light; the background is unlit and black. The
oxblood is deep and desaturated and is the only colour. Photorealistic
macro product photography, 85mm, shallow depth of field. The field
occupies the lower two thirds; the upper third is unlit black and empty.
4:5 vertical, 1620x2025.

Negative prompt: grey background, light grey, white background, bright
studio backdrop, high key, evenly lit, flat lighting, washed out, text,
letters, numbers, words, readable writing, watermark, logo, signage, face,
eyes, portrait, people, bright red, ruby, scarlet, neon, glowing edges,
saturated colours, orange, teal, yellow, rainbow refraction, hard rim
light, specular glare, faceted crystal, gemstone, jewellery, ice cubes,
chess board, game pieces, low-poly, cartoon, flat vector illustration,
cluttered.
```

## 06 — Three

Three laws drafted with the team's involvement. The count is in the
picture, so the card's own numeral never competes with a generated one.

*Same material again, third composition:* upright and frontal, where 02 is
an arc and 04 a receding field. The closing slide, so the stillest.

```
A studio product photograph on a near-black background, straight on at eye
level. Three upright tablets of thick glass stand side by side on a black
surface, evenly spaced, each about the height of a book. Each has a plain
bordered panel deeply etched into its face in frosted white, like an empty
seal, and nothing else; the frosted etching is the brightest thing in the
image. The middle tablet is deep oxblood all the way through and lit from
within; the outer two are dark smoked glass and read almost black. Thick
bevelled edges catching thin highlights, faint reflections on the black
surface beneath. A single soft key light from the upper left, deep shadow
everywhere else, no fill; the background is unlit and black. The oxblood
is deep and desaturated and is the only colour. Photorealistic macro
product photography, 85mm, shallow depth of field, sharp on the middle
tablet. The three tablets occupy the lower two thirds; the upper third is
unlit black and empty. 4:5 vertical, 1620x2025.

Negative prompt: grey background, light grey, white background, bright
studio backdrop, high key, evenly lit, flat lighting, washed out, text,
letters, numbers, words, readable writing, inscription, engraved text,
watermark, logo, signage, coat of arms, flag, face, eyes, portrait,
people, bright red, ruby, scarlet, neon, glowing edges, saturated colours,
orange, teal, yellow, rainbow refraction, hard rim light, specular glare,
faceted crystal, gemstone, jewellery, tombstone, gravestone, low-poly,
cartoon, flat vector illustration, four tablets, two tablets.
```

---

## Slide 03 keeps the void

The numbered slide carries two headings and the longest body text in the
carousel. A picture under it competes with the one thing it is for.

## Slide 05 is done

`05-consequence.jpg`. The only tabletop in the post, which is why none of
the others is one.
