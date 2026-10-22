import React from "react";
import { Composition } from "remotion";

import { DragAlong, TOTAL } from "./DragAlong";
import { FPS, H, W } from "./theme";

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
  </>
);
