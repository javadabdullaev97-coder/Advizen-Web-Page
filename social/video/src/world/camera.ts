/**
 * One camera model, used twice: inside the WebGL canvas to render, and
 * outside it to place DOM type against 3D objects. Both go through
 * `applyPose`, so a label pinned under a block cannot drift off it.
 */

import * as THREE from "three";

import { H, W } from "../theme";

export type Vec3 = [number, number, number];

export type Pose = {
  /** Orbit around the target, radians. 0 is straight on. */
  az: number;
  /** Elevation above the target, radians. */
  el: number;
  /** Distance from the target, world units. */
  dist: number;
  target: Vec3;
  /** Vertical field of view, degrees. Long lenses read as product photography. */
  fov: number;
  /**
   * Lens shift: how far below frame centre the target sits, in pixels.
   * Shifting the lens rather than tilting the camera keeps verticals
   * vertical, which is half of why product shots look expensive.
   */
  shiftY: number;
};

export const applyPose = (cam: THREE.PerspectiveCamera, p: Pose) => {
  const [tx, ty, tz] = p.target;
  cam.fov = p.fov;
  cam.aspect = W / H;
  cam.near = 0.5;
  cam.far = 400;
  cam.position.set(
    tx + p.dist * Math.cos(p.el) * Math.sin(p.az),
    ty + p.dist * Math.sin(p.el),
    tz + p.dist * Math.cos(p.el) * Math.cos(p.az),
  );
  cam.up.set(0, 1, 0);
  cam.lookAt(tx, ty, tz);
  cam.setViewOffset(W, H, 0, -p.shiftY, W, H);
  cam.updateProjectionMatrix();
  cam.updateMatrixWorld(true);
};

const scratch = new THREE.PerspectiveCamera();
const v = new THREE.Vector3();

/** Where a world point lands on the 1080 × 1920 frame. */
export const project = (p: Pose, point: Vec3) => {
  applyPose(scratch, p);
  v.set(point[0], point[1], point[2]).project(scratch);
  return { x: ((v.x + 1) / 2) * W, y: ((1 - v.y) / 2) * H };
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Interpolate every field of a pose; the move itself is eased by the caller. */
export const mixPose = (a: Pose, b: Pose, t: number): Pose => ({
  az: lerp(a.az, b.az, t),
  el: lerp(a.el, b.el, t),
  dist: lerp(a.dist, b.dist, t),
  fov: lerp(a.fov, b.fov, t),
  shiftY: lerp(a.shiftY, b.shiftY, t),
  target: [
    lerp(a.target[0], b.target[0], t),
    lerp(a.target[1], b.target[1], t),
    lerp(a.target[2], b.target[2], t),
  ],
});

export const deg = (d: number) => (d * Math.PI) / 180;
