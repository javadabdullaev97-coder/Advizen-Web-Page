import React from "react";
import { Composition } from "remotion";

import { CUES, DragAlong, TOTAL } from "./DragAlong";
import { Sound } from "./Sound";
import { Ubo, UBO_CUES, UBO_TOTAL } from "./Ubo";
import { CONDUIT_LEN, ConduitPreview } from "./UboConduit";
import { Sprite, SpriteKind } from "./UboSprites";
import { FPS, H, W } from "./theme";

const Soundtrack: React.FC = () => <Sound cues={CUES} total={TOTAL} fps={FPS} />;
const UboSoundtrack: React.FC = () => (
  <Sound cues={UBO_CUES} total={UBO_TOTAL} fps={FPS} vo="audio/ubo-vo.wav" music="audio/ubo-music.wav" />
);

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
    <Composition id="ubo" component={Ubo} durationInFrames={UBO_TOTAL} fps={FPS} width={W} height={H} />
    <Composition id="ubo-conduit" component={ConduitPreview} durationInFrames={CONDUIT_LEN} fps={FPS} width={W} height={H} />
    <Composition
      id="ubo-sprite"
      component={Sprite}
      defaultProps={{ kind: "man" as SpriteKind }}
      durationInFrames={1}
      fps={FPS}
      width={W}
      height={H}
    />
    <Composition
      id="ubo-sound"
      component={UboSoundtrack}
      durationInFrames={UBO_TOTAL}
      fps={FPS}
      width={W}
      height={H}
    />
  </>
);
