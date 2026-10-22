# Кадры для тёмной версии направления E

Те же шесть сюжетов, что в `DIRECTION-E.md`, но сцена графитовая, а не
белая. Один красный предмет остаётся.

## Единственное, чего нельзя допустить

В этом проекте уже был заход в темноту, и он провалился: получился
неосвещённый коридор ночью с красным светом из-под дверей — декорация к
фильму ужасов. Причина была в том, что в промпте просили темноту, а
рендер темнил ещё раз, и две темноты перемножились.

Сейчас рендер картинку **не темнит** — он только размывает полосу под
заголовком. Значит кадр должен прийти в своей финальной тональности. И
она не чёрная.

**Графит, а не чёрный.** Средне-тёмный серый с видимым тональным
диапазоном: матовые поверхности читаются, рёбра ловят свет, фон уходит в
градиент. Если кадр приходит почти чёрным — он испорчен, и перегенерация
дешевле, чем попытка вытянуть.

**Свет должен быть виден.** Большой мягкий источник сверху-слева,
отражение на полу, спад к краям. Тёмная комната без света — это дыра;
тёмная комната со светом — это дорого.

**Красное — предмет, а не подсветка.** Красный свет на полу читается как
ночной клуб или место преступления. Красная дверь, кресло, булавка,
ручка — читается как фирма.

## Общий блок, добавлять к каждому промпту

```
Dark graphite studio environment, mid-dark charcoal grey, clearly lit
with a large soft light from the upper left, visible tonal range, soft
gradient falling off towards the edges, matte surfaces, gentle
reflections on a dark polished floor. Everything is charcoal, graphite
and warm dark grey except one single object in bright red. The upper
third of the frame is a plain, evenly lit dark surface with no objects
on it. Photorealistic, premium, 4:5 vertical, 1620x2025.

Negative prompt: black, pure black, near-black, underexposed, unlit, no
light source, murky, muddy, pitch dark, night, horror, thriller, film
noir, haunted, eerie, red light, coloured light on the floor, glow, neon,
light under doors, lens flare, empty, negative space, single tiny object,
vast empty background, text, letters, numbers, words, signage, watermark,
logo, face, portrait, saturated colours, blue, teal, green, yellow,
orange, purple, grain, low-poly, cartoon.
```

---

## Шесть кадров

### 01 — обложка

```
A long dark corridor in a modern office, photographed straight down its
length, wide angle, standing close to the first doorway. Tall charcoal
doors line both sides and recede into the distance, a dark polished
floor reflects them, a slim steel handrail runs along the left wall. The
nearest door on the right is large in frame, bright red and slightly
ajar. The corridor fills the lower two thirds of the frame edge to edge
and has real depth. The upper third is the plain upper part of the dark
wall and ceiling, evenly lit and free of fittings.
```

### 02 — место деятельности

```
A dark open-plan office interior photographed from waist height, wide
angle, close to the nearest desk. Rows of dark desks with dark monitors
and charcoal chairs recede into soft focus towards a large window at the
back that fills the room with soft daylight. One chair at the nearest
desk, large in frame on the right, is bright red. The desks fill the
lower two thirds of the frame edge to edge. The upper third is the plain
dark ceiling and the upper part of the far wall, evenly lit.
```

### 03 — механика

```
A 3D render of a dense cluster of dark graphite architectural models of
office buildings covering the lower two thirds of the frame edge to edge,
seen from a low angle close to the nearest building so it stands large in
frame. The cluster recedes into soft focus towards the back. One bright
red map pin is planted among the buildings near the front, large and
clearly visible. The upper third is plain seamless dark graphite
backdrop, evenly lit.
```

### 04 — три случая

```
A 3D render of three large dark graphite models standing in a row on a
smooth dark plane, filling the lower two thirds of the frame edge to edge
and receding slightly: on the left a construction crane over a half-built
frame, in the middle four plain figures standing around a table, on the
right a drilling derrick. The nearest model is large and close to the
camera. A bright red ring is painted on the plane around the middle
group. The upper third is plain seamless dark graphite backdrop.
```

### 05 — агентский порог

```
A dark walnut meeting table photographed close up from a low
three-quarter angle, the near edge large in frame. A stack of papers lies
on it with a bright red fountain pen resting across the top sheet. Two
charcoal chairs stand behind the table, and beyond them a dark office
recedes into soft focus. The table and chairs fill the lower two thirds
of the frame edge to edge. The upper third is the plain dark wall above,
evenly lit and empty of fittings.
```

### 06 — вывод

```
A 3D render on a smooth dark plane: a row of eight short graphite blocks
of equal height standing in a line with gaps between them, filling the
lower two thirds of the frame edge to edge and receding slightly into
soft focus, the nearest block large and close to the camera. One long
bright red bar runs horizontally above the whole row, spanning from the
first block to the last. The upper third is plain seamless dark graphite
backdrop.
```

---

## Как проверить кадр перед тем, как отдавать

Средняя яркость должна лечь примерно между 60 и 110 из 255. Ниже — дыра,
выше — это уже не тёмная тема. Проверяется одной строкой:

```bash
python3.12 -c "from PIL import Image,ImageStat;print(round(ImageStat.Stat(Image.open('файл.jpg').convert('L')).mean[0]))"
```
