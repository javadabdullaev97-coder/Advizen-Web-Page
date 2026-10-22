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

### 01 — обложка

Порог, за которым начинается налог.

```
A long bright white corridor in a minimal modern office, photographed
straight down its length. White walls, white doors on both sides, a
glossy white floor. One door in the middle of the row is bright red and
slightly ajar, with light coming through the gap. Nobody in the frame.
```

### 02 — «работаете без офиса»

Присутствие без офиса.

```
An almost empty bright white room with a large window. A single white
desk stands in the middle with a closed laptop on it, and one bright red
office chair is pulled up to it. Nothing else in the room. Long soft
reflections on the glossy floor.
```

### 03 — механика

Деятельность началась — и этого достаточно.

```
A 3D render of a small white architectural model of an office building
standing alone on a smooth white plane. One bright red map pin is planted
in the plane directly beside it, casting a soft shadow. Clean white
studio backdrop.
```

### 04 — где 183 дня считают

Три случая в ряд.

```
A 3D render of three small white models standing in a row on a smooth
white plane, evenly spaced and receding slightly: a construction crane
over a half-built frame, a group of four plain white figures around a
table, and a drilling derrick. A bright red ring is drawn on the plane
around the middle model.
```

### 05 — агентское ПУ

Кто-то подписывает за вас.

```
A bright white desk seen from above at a shallow angle. Two plain white
chess pawns stand on it beside a stack of blank white papers. A single
bright red fountain pen lies across the top sheet. White studio
background, soft shadows.
```

### 06 — вывод

Дробить проект бесполезно: периоды складываются.

```
A 3D render on a smooth white plane: five short white blocks of equal
size arranged in a line with gaps between them, and above them one long
bright red bar spanning the whole row from the first block to the last.
Clean white studio backdrop, soft shadows.
```

---

## Чего в этих промптах нет и почему

**Никакой темноты.** Прошлый набор правил требовал брифовать кадр как
дневной, потому что рендер всё равно притемнял. Здесь рендер не
притемняет вообще — он только кладёт текст сверху. Кадр должен прийти
белым и остаться белым.

**Ни одного лица.** Не из брендбука, а потому что сгенерированное лицо —
самый заметный признак того, что картинку сделала машина.

**Никаких букв в кадре.** Весь текст ставит рендер.
