/**
 * Type pinned to a point in the 3D world.
 *
 * The words stay in the DOM — crisp, kerned, in the brand face — and only
 * their position comes from the scene, through the same camera that
 * rendered it.
 */

import React from "react";

import { FONT, SUB } from "../theme";
import { BLOCK_D } from "./World";
import { Pose, project } from "./camera";

export const Mark: React.FC<{
  pose: Pose;
  /** World x of the thing being named; the mark sits under its front edge. */
  x: number;
  /** Height of the anchor; 0 is the floor at the front edge. */
  y?: number;
  z?: number;
  text: string;
  color?: string;
  opacity?: number;
  /** Pixels below the front edge. */
  dy?: number;
}> = ({ pose, x, y = 0, z = 0, text, color = SUB, opacity = 1, dy = 30 }) => {
  if (opacity <= 0.001) return null;
  const p = project(pose, [x, y, z + BLOCK_D / 2]);
  return (
    <div
      style={{
        position: "absolute",
        left: p.x,
        top: p.y + dy,
        transform: "translateX(-50%)",
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: 27,
        letterSpacing: "0.18em",
        whiteSpace: "nowrap",
        color,
        opacity,
      }}
    >
      {text}
    </div>
  );
};
