import React from "react";
import { Composition } from "remotion";

import { CUES, DragAlong, TOTAL } from "./DragAlong";
import { Sound } from "./Sound";
import { FPS, H, W } from "./theme";

const Soundtrack: React.FC = () => <Sound cues={CUES} total={TOTAL} fps={FPS} />;

export const Root: React.FC = () => (
  <>
    <Composition
      id="drag-along"
      component={DragAlong}
      durationInFrames={TOTAL}
      fps={FPS}
      width={W}
      height={H}
    />
    {/* The soundtrack alone, so a mix change does not mean re-rendering 3D. */}
    <Composition
      id="drag-along-sound"
      component={Soundtrack}
      durationInFrames={TOTAL}
      fps={FPS}
      width={W}
      height={H}
    />
  </>
);
