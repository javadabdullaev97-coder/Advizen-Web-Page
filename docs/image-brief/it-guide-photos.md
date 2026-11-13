# IT guide photos — generation brief

For `docs/it-guide/en.html` and `ru.html`. Generate in Gemini (gemini.google.com), 3–4 candidates per slot, download at full resolution into `image-candidates/it-guide/<slot>/<n>.png` (git-ignored) and show the owner. After the pick, save as JPEG (quality ~82, long side 2000 px) in `docs/company-profile/img/` under the file name below, replace the photo URL in both HTML files, rebuild with `scripts/build-pdf.mjs` and push to `main`.

Common rules: realistic editorial photograph, natural light, modern and optimistic, Central Asian setting and people, people seen from behind or at a distance (no close-up faces), no text, no logos, no brand names on screens or walls, one deep red accent in the scene at most. Never label a generated building as the real IT Park.

| Slot | Used on | File | Prompt |
|---|---|---|---|
| cover | Cover, full page, portrait. Title sits on the left and bottom, keep them calm and darker | `it-cover.jpg` | Editorial photograph, portrait 3:4: a modern open-plan tech office on a high floor in Tashkent at blue hour, a few software developers seen from behind working at desks with large monitors showing abstract code, floor-to-ceiling windows with the softly blurred Tashkent skyline and warm city lights, warm interior lighting, one deep red chair as an accent, the lower third of the frame darker and calm, realistic, no text, no logos |
| team | Page 2 band, very wide crop of the middle of the image | `it-team.jpg` | Editorial photograph, wide 21:9: a young Central Asian software team collaborating around a long table with laptops in a bright modern office, natural daylight, plants and light wood, a whiteboard with abstract diagrams, people seen at a distance, standing at a whiteboard, wide shot of the whole room, candid, realistic, no text, no logos |
| arrival | Page 7 band (relocation), very wide crop | `it-arrival.jpg` | Editorial photograph, wide 21:9: a professional seen from behind walking through a modern bright airport terminal in Tashkent with a suitcase and a laptop bag, large windows with morning light, calm and optimistic, a deep red suitcase as the only accent, realistic, no text, no logos |
| meeting | Page 11 photo at the bottom (how we help). No people, so it does not repeat the team photo | `it-meeting.jpg` | Editorial still life photograph, wide 16:9, close-up on a light wood desk by a window in warm afternoon light: two passports, a set of apartment keys, a signed employment contract without readable text, a laptop slightly open and a cup of tea, a softly blurred Tashkent city view in the background, one deep red passport cover as the only accent, shallow depth of field, calm and optimistic, realistic, no readable text, no logos |

The contacts page keeps `khiva.jpg`.
