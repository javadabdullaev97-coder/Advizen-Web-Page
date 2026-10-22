# Кадры для двух вышедших постов

Тёмная тональность, тот же рецепт, что у «Постоянного учреждения».
Каждый промпт самодостаточен — копируется целиком.

Проверка перед тем, как отдавать кадр: средняя яркость между 60 и 110
из 255, и верхняя треть без предметов.

```bash
python3.12 -c "from PIL import Image,ImageStat;print(round(ImageStat.Stat(Image.open('файл.jpg').convert('L')).mean[0]))"
```

---

## Пост «Advizen» — пять кадров

Было четыре карточки, стало пять. Причина техническая и её стоит
назвать: таблица на четырнадцать позиций в `banner` не помещается —
список там читается максимум на четыре-пять строк, дальше картинка
исчезает под текстом. Поэтому две семёрки разъезжаются на две карточки,
где счёт несёт заголовок, а перечень уходит в подпись.

Файлы: `public/social/source/advizen-dark/`

### `01-corridor.jpg` — Обложка. Четыре практики, одна фирма.

```
A long dark corridor in a modern office, photographed straight down its
length, wide angle, standing close to the first doorway. Four open
doorways lead off it, two on each side, receding into the distance. A
single continuous runner of deep red carpet lies along the dark polished
floor and passes through all four thresholds, joining them. Charcoal
door frames, graphite plaster walls, a slim steel handrail.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `02-chain.jpg` — Вопрос из одной области не остаётся в ней.

```
A close-up of a long row of charcoal dominoes standing on a dark
polished surface, curving away from the camera into soft focus. The
nearest domino is large in frame and already tipping into the next. One
domino part-way along the row is bright red. Shallow depth of field,
sharp on the red one.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `03-advisory.jpg` — Семь консалтинговых направлений.

```
A dark walnut desk photographed close up from a low three-quarter angle.
Seven identical charcoal document folders are fanned across it in an
even arc, overlapping, filling the width of the frame, the nearest one
large and close to the camera. One folder in the middle of the fan is
bright red. Beyond the desk a dark office recedes into soft focus.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `04-operations.jpg` — Семь операционных сервисов.

```
A wall of identical charcoal filing drawers photographed straight on,
filling the lower two thirds of the frame edge to edge, the brushed
steel handles catching a soft raking light. One drawer in the middle of
the grid is pulled slightly open and its front is bright red. Dark
polished floor below with a soft reflection.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `05-contact.jpg` — Одна точка контакта.

```
A close-up of a dense bundle of charcoal cables on a dark surface,
spreading out towards the back of the frame into soft focus and
gathering at the front into a single large connector, square-on and
closest to the camera. One cable running through the bundle is bright
red. Shallow depth of field, sharp on the connector.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

---

## Пост «Послужной список» — шесть кадров

Структура не меняется: обложка и пять проектов. Каждая карточка —
цифра в заголовке и то, что за ней стоит, в подписи.

Файлы: `public/social/source/track-record-dark/`

### `01-archive.jpg` — Обложка. Послужной список.

```
A tall shelf of identical charcoal bound volumes photographed straight
on from close range, the spines filling the lower two thirds of the
frame edge to edge and receding into soft focus to the left and right.
One volume near the middle has a bright red spine and sits slightly
proud of the rest. Soft raking light along the spines, dark polished
floor below.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `02-energy.jpg` — $10 млрд+ — АЭС.

```
A nuclear power station photographed from a distance under a heavy
overcast sky at dusk. Two enormous concrete cooling towers rise into the
middle of the frame, dark grey and weather-stained, with a thin plume of
pale vapour. A low reactor building and a line of transmission pylons
stand in front of them. In the near foreground a single bright red
surveyor's marker post stands large in frame in rough dark grass.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `03-fmcg.jpg` — $250 млн — производитель напитков.

```
A bottling line in a beverage plant photographed straight on, lit by
soft overhead light. Hundreds of identical dark glass bottles stand in
dense rows on a stainless steel conveyor, filling the lower two thirds
of the frame and receding into soft focus. Brushed steel guides,
graphite tiled walls. One bottle near the front carries a bright red
cap.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `04-fintech.jpg` — $200 млн — цифровой банк.

```
An extreme close-up of a stack of payment cards lying on a dark slate
surface, photographed from a low three-quarter angle. A dozen or so
cards are fanned so their edges step away from the camera, filling the
lower two thirds of the frame. They are blank matte charcoal and
graphite with no printing of any kind, their embossed chip contacts
catching the light. One card part-way down the stack is bright red and
sits proud of the others.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `05-fund.jpg` — UzFund — инвестиционный фонд.

```
A trading desk in a dark office photographed straight on. A curved bank
of five monitors fills the lower two thirds of the frame, each showing
dense financial charts — candlestick columns, a long price line, rows of
small tabular blocks — rendered in white, pale grey and charcoal on a
dark interface, sharp but too small to read. On the central screen one
price line is bright red and runs the width of the display. A charcoal
keyboard sits below the monitors.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

### `06-laws.jpg` — Три закона.

```
A studio photograph on a dark surface, straight on at eye level. Three
upright tablets of thick glass stand side by side, evenly spaced, large
in frame and filling the lower two thirds. Each has a plain bordered
panel deeply etched into its face in frosted white and nothing else. The
middle tablet is bright red all the way through and lit from within; the
outer two are dark smoked glass. Thick bevelled edges catching thin
highlights, faint reflections on the surface beneath.

Dark graphite studio environment, mid-dark charcoal grey, clearly lit by
a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except the one red object. The subject fills the
lower two thirds of the frame edge to edge, the nearest element large
and close to the camera. The upper third is a plain, evenly lit dark
surface with nothing on it. Photorealistic, premium, 4:5 vertical,
1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow,
neon, light under doors, lens flare, bloom, empty, negative space,
minimal composition, single tiny object, vast empty background, clutter
in the upper third, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, grain, vintage, low-poly, cartoon, toy.
```

