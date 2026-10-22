/**
 * Music and spot effects, cued off the same clock as the picture.
 *
 * Every cue names the frame its transient should land on and where that
 * transient sits inside the file, so a whoosh peaks mid-push and a click
 * lands on contact rather than a fifth of a second early.
 */

import React from "react";
import { Audio, interpolate, Sequence, staticFile } from "remotion";

type Sfx = "whoosh" | "hit" | "thud" | "click";

/** Seconds from the start of each file to its transient. */
const ONSET: Record<Sfx, number> = {
  whoosh: 0.53,
  hit: 0,
  thud: 0,
  click: 0.21,
};

export type Cue = { sfx: Sfx; at: number; gain: number };

const Spot: React.FC<{ cue: Cue; fps: number }> = ({ cue, fps }) => {
  const from = Math.round(cue.at - ONSET[cue.sfx] * fps);
  const trim = Math.max(0, -from);
  return (
    <Sequence from={Math.max(0, from)} layout="none">
      <Audio
        src={staticFile(`audio/sfx/${cue.sfx}.mp3`)}
        startFrom={trim}
        volume={cue.gain}
      />
    </Sequence>
  );
};

export const Sound: React.FC<{ cues: Cue[]; total: number; fps: number }> = ({
  cues,
  total,
  fps,
}) => (
  <>
    <Audio src={staticFile("audio/vo.wav")} />
    {/* A bed, not a song: low under the voice, out with the last frame. */}
    <Audio
      src={staticFile("audio/music.mp3")}
      volume={(f) =>
        interpolate(f, [0, 6, total - 45, total], [0, 0.13, 0.13, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      }
    />
    {cues.map((c, i) => (
      <Spot key={i} cue={c} fps={fps} />
    ))}
  </>
);
