/**
 * One glTF on the studio floor, for judging a model before it goes into a
 * film: how it takes the light, whether it carries a logo, how it sits.
 */

import React from "react";
import { AbsoluteFill } from "remotion";

import "./font";
import { deg } from "./world/camera";
import { Model } from "./world/Model";
import { Reflect, Scene } from "./world/World";

export type PreviewProps = {
  file: string;
  height?: number;
  length?: number;
  ry?: number;
  /** Camera distance and the height it looks at. */
  dist?: number;
  ty?: number;
  az?: number;
  el?: number;
  hide?: string[];
};

export const ModelPreview: React.FC<PreviewProps> = ({
  file,
  height,
  length,
  ry = 0,
  dist = 9,
  ty = 0.6,
  az = 24,
  el = 14,
  hide,
}) => (
  <AbsoluteFill>
    <Scene
      pose={{ az: deg(az), el: deg(el), dist, target: [0, ty, 0], fov: 30, shiftY: 0 }}
      models={[file]}
    >
      <Reflect>
        <Model file={file} height={height} length={length} ry={ry} hide={hide} />
      </Reflect>
    </Scene>
  </AbsoluteFill>
);
