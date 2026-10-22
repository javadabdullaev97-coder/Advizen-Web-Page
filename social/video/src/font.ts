import { cancelRender, continueRender, delayRender, staticFile } from "remotion";

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
  .then(async (loaded) => {
    document.fonts.add(loaded);
    // Adding the face does not mean layout has reflowed with it; without
    // this the first frames can be measured on fallback metrics.
    await document.fonts.ready;
    continueRender(handle);
  })
  .catch((err) => {
    // Frames render across concurrent tabs. A tab that silently fell back
    // would ship a block of frames in the wrong face, found only at QC.
    cancelRender(err);
  });
