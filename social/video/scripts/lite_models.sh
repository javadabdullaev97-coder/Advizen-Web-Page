#!/usr/bin/env bash
# Lighter copies of the heaviest models. The seated figure is 343k triangles,
# drawn three times a frame (scene, shadow, floor reflection) and twice in the
# IT Park hook; at the size it plays, 70k look the same and render about
# twice as fast. The originals stay in public/models/ untouched.
set -euo pipefail
cd "$(dirname "$0")/.."
npx -y @gltf-transform/cli@4.1.1 simplify public/models/sitting.glb public/models/sitting-lite.glb --ratio 0.13 --error 0.0005
