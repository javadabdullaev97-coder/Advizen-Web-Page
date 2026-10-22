import { continueRender, delayRender, staticFile } from "remotion";

// Geist is variable, so the weight range has to be declared or every
// weight renders at 400 and the headlines lose their punch.
const handle = delayRender("Geist");
const geist = new FontFace(
  "Geist",
  `url(${staticFile("Geist.ttf")}) format("truetype")`,
  { weight: "100 900" },
);

geist
  .load()
  .then((loaded) => {
    document.fonts.add(loaded);
    continueRender(handle);
  })
  .catch((err) => {
    console.error("Geist failed to load", err);
    continueRender(handle);
  });
