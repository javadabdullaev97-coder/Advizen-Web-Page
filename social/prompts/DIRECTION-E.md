# Кадры для направления E

Разбор того, на чём держится лента Key Consulting, и промпты, чтобы
получить такие же кадры под наши темы.

## Что у них на самом деле сделано

Три вещи, и ни одной из них не было в наших кадрах.

**Фон почти белый.** Не светлый — белый, с выбитыми светами. Студийный
свет, мягкие тени, глянцевый пол с отражением. Всё, что не красное,
лежит в диапазоне от белого до светло-серого и бежевого.

**Ровно один красный предмет.** Кресло, куб, галочка, кольцо на лупе.
Это тот же принцип, что у нас был записан — «кримсон это предмет, а не
свет», — но на белом, а не на чёрном. На белом он работает гораздо
сильнее: красное пятно на белом видно в ленте с расстояния вытянутой
руки, красное на чёрном — нет.

**Верх кадра пустой.** Там лежит заголовок в две-три строки, и места под
него нужно больше, чем кажется: примерно верхняя треть должна быть
ровной светлой стеной или пустым полом.

Люди — со спины или в среднем плане, в бежевом и сером, лицо никогда не
предмет съёмки. Половина кадров вообще не фотографии, а 3D-рендеры:
белые макеты зданий, пешки, кубы, лупа.

## Кадр должен быть полным, а не пустым

Первый заход провалился предсказуемо. В промпте стояло «верхние 40% —
пустое негативное пространство» и «один-единственный предмет» — и
генератор отдал крошечную фигурку посреди белого поля. Текст на таком
читается отлично, а смотреть не на что.

У Key Consulting кадр **заполнен**. Он белый, но в нём стойка ресепшна,
монитор, растения, кресла, люди на разных планах. Чистая зона наверху —
это не пустота, а ровная верхняя часть той же стены.

Поэтому в промпте должно быть сказано **и** про чистый верх, **и** про
крупный сюжет:

- «fills the lower two thirds of the frame edge to edge»
- «large and close to the camera»
- «several elements at different depths»

И никогда — «negative space», «empty», «single object», «minimal
composition». Эти три слова и сделали пустоту.

Проверка перед тем, как брать кадр: закрой верхнюю треть ладонью. Если
оставшееся выглядит как законченная фотография, кадр годится. Если
выглядит как предмет на белом фоне — нет.

## Общий рецепт

Добавлять к каждому промпту:

```
Bright white studio environment, overexposed highlights, soft diffused
light from a large window, no hard shadows, glossy white floor with soft
reflections. Everything is white, pale grey and soft beige except one
single object in bright red. Photorealistic, 85mm, shallow depth of
field, clean and minimal. The upper third of the frame is empty bright
wall. 4:5 vertical, 1620x2025.

Negative prompt: dark, dim, moody, night, grey background, black,
shadows, clutter, text, letters, numbers, words, signage, watermark,
logo, face, portrait, eye contact, saturated colours, blue, teal, green,
yellow, orange, purple, neon, lens flare, grain, vintage, low-poly,
cartoon.
```

Красный — именно алый, а не оксблад сайта. На белом `#981A30` уходит в
бурый; в этих кадрах нужен `#C41620`.

---

## Пост «Постоянное учреждение», шесть кадров

Файлы кладутся в `public/social/source/permanent-establishment/`.

### 01 — обложка

Порог, за которым начинается налог.

```
A long bright white corridor in a modern office, photographed straight
down its length, wide angle, standing close to the first doorway. Tall
white doors line both sides and recede into the distance, a glossy pale
floor reflects them, a slim handrail runs along the left wall. The
nearest door on the right is large in frame, bright red and slightly
ajar, with light coming through the gap. The corridor fills the lower
two thirds of the frame edge to edge and has real depth. The upper third
is the plain upper part of the white wall and ceiling, evenly lit and
free of fittings. Soft diffused daylight, no hard shadows, bright and
airy. Everything except the one door is white, pale grey and soft beige.
Photorealistic architectural photography, 24mm, 4:5 vertical,
1620x2025.

Negative prompt: empty, negative space, minimal composition, single
object, tiny subject, vast empty background, dark, dim, moody, night,
low key, grey background, gradient background, vignette, clutter at the
top, objects in the upper third, ceiling lights, posters, pictures,
text, letters, numbers, words, signage, watermark, logo, face, portrait,
eye contact, saturated colours, blue, teal, green, yellow, orange,
purple, neon, lens flare, grain, low-poly, cartoon, toy, plastic look.
```

### 02 — место деятельности

Офис есть, даже если вы его так не называете.

```
A bright white open-plan office interior photographed from waist height,
wide angle, close to the nearest desk. Rows of identical white desks
with pale monitors and white chairs recede into soft focus towards a
large bright window at the back. Pale plants stand between the rows. One
chair at the nearest desk, large in frame on the right, is bright red.
The desks fill the lower two thirds of the frame edge to edge. The upper
third is the plain white ceiling and the upper part of the far wall,
evenly lit and free of fittings. Soft diffused daylight, slightly
overexposed, no hard shadows. Everything except the one chair is white,
pale grey and soft beige. Photorealistic interior photography, 28mm,
4:5 vertical, 1620x2025.

Negative prompt: empty, negative space, minimal composition, single
object, tiny subject, vast empty background, dark, dim, moody, night,
low key, grey background, gradient background, vignette, clutter at the
top, objects in the upper third, ceiling lights, posters, pictures,
text, letters, numbers, words, signage, watermark, logo, face, portrait,
eye contact, saturated colours, blue, teal, green, yellow, orange,
purple, neon, lens flare, grain, low-poly, cartoon, toy, plastic look.
```

### 03 — механика

Деятельность началась — и этого достаточно.

```
A 3D render of a dense cluster of white architectural models of office
buildings covering the lower two thirds of the frame edge to edge, seen
from a low angle close to the nearest building so it stands large in
frame. The cluster recedes into soft focus towards the back. One bright
red map pin is planted among the buildings near the front, large and
clearly visible. Soft diffused studio light, gentle shadows, subtle
reflections on the smooth white plane. The upper third is plain seamless
white backdrop, evenly lit. Everything except the pin is white and pale
grey. Photorealistic product render, 50mm, shallow depth of field,
4:5 vertical, 1620x2025.

Negative prompt: empty, negative space, minimal composition, single
object, tiny subject, vast empty background, dark, dim, moody, night,
low key, grey background, gradient background, vignette, clutter at the
top, objects in the upper third, ceiling lights, posters, pictures,
text, letters, numbers, words, signage, watermark, logo, face, portrait,
eye contact, saturated colours, blue, teal, green, yellow, orange,
purple, neon, lens flare, grain, low-poly, cartoon, toy, plastic look.
```

### 04 — три случая

Стройплощадка, услуги через персонал, добыча.

```
A 3D render of three large white models standing in a row on a smooth
white plane, filling the lower two thirds of the frame edge to edge and
receding slightly: on the left a construction crane over a half-built
frame, in the middle four plain white figures standing around a table,
on the right a drilling derrick. The nearest model is large and close to
the camera. A bright red ring is painted on the plane around the middle
group. Soft diffused studio light, gentle shadows, subtle reflections.
The upper third is plain seamless white backdrop, evenly lit. Everything
except the ring is white and pale grey. Photorealistic product render,
50mm, 4:5 vertical, 1620x2025.

Negative prompt: empty, negative space, minimal composition, single
object, tiny subject, vast empty background, dark, dim, moody, night,
low key, grey background, gradient background, vignette, clutter at the
top, objects in the upper third, ceiling lights, posters, pictures,
text, letters, numbers, words, signage, watermark, logo, face, portrait,
eye contact, saturated colours, blue, teal, green, yellow, orange,
purple, neon, lens flare, grain, low-poly, cartoon, toy, plastic look.
```

### 05 — агентский порог

Кто-то подписывает за вас.

```
A bright white meeting table photographed close up from a low
three-quarter angle, the near edge large in frame. A stack of blank white
papers lies on it with a bright red fountain pen resting across the top
sheet. Two plain white chairs stand behind the table, and beyond them a
bright white office recedes into soft focus. The table and chairs fill
the lower two thirds of the frame edge to edge. The upper third is the
plain white wall above, evenly lit and empty of fittings. Soft diffused
daylight, no hard shadows. Everything except the pen is white, pale grey
and soft beige. Photorealistic interior photography, 35mm, shallow depth
of field, 4:5 vertical, 1620x2025.

Negative prompt: empty, negative space, minimal composition, single
object, tiny subject, vast empty background, dark, dim, moody, night,
low key, grey background, gradient background, vignette, clutter at the
top, objects in the upper third, ceiling lights, posters, pictures,
text, letters, numbers, words, signage, watermark, logo, face, portrait,
eye contact, saturated colours, blue, teal, green, yellow, orange,
purple, neon, lens flare, grain, low-poly, cartoon, toy, plastic look.
```

### 06 — вывод

Дробить проект бесполезно: периоды складываются.

```
A 3D render on a smooth white plane: a row of eight short white blocks
of equal height standing in a line with gaps between them, filling the
lower two thirds of the frame edge to edge and receding slightly into
soft focus, the nearest block large and close to the camera. One long
bright red bar runs horizontally above the whole row, spanning from the
first block to the last. Soft diffused studio light, gentle shadows,
subtle reflections on the plane. The upper third is plain seamless white
backdrop, evenly lit. Everything except the bar is white and pale grey.
Photorealistic product render, 50mm, 4:5 vertical, 1620x2025.

Negative prompt: empty, negative space, minimal composition, single
object, tiny subject, vast empty background, dark, dim, moody, night,
low key, grey background, gradient background, vignette, clutter at the
top, objects in the upper third, ceiling lights, posters, pictures,
text, letters, numbers, words, signage, watermark, logo, face, portrait,
eye contact, saturated colours, blue, teal, green, yellow, orange,
purple, neon, lens flare, grain, low-poly, cartoon, toy, plastic look.
```

## Чего в этих промптах нет и почему

**Никакой темноты.** Прошлый набор правил требовал брифовать кадр как
дневной, потому что рендер всё равно притемнял. Здесь рендер не
притемняет вообще — он только кладёт текст сверху. Кадр должен прийти
белым и остаться белым.

**Ни одного лица.** Не из брендбука, а потому что сгенерированное лицо —
самый заметный признак того, что картинку сделала машина.

**Никаких букв в кадре.** Весь текст ставит рендер.
