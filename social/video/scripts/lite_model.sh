#!/usr/bin/env bash
# Makes the copy of a model the films actually load: fewer triangles and
# smaller textures, as far as the frame allows (social/video/CLAUDE.md,
# "3D-модели"). The original in public/models/ is never touched.
#
#   scripts/lite_model.sh <name> <ratio> [max texture px]
#   scripts/lite_model.sh sitting 0.13 1024   → public/models/sitting-lite.glb
#
# ratio is the share of triangles to keep (1 = keep all, textures only).
set -euo pipefail
cd "$(dirname "$0")/.."
name=$1 ratio=$2 tex=${3:-1024}
src=public/models/$name.glb
out=public/models/$name-lite.glb
cli="npx -y @gltf-transform/cli@4.1.1"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
if [ "$ratio" = 1 ]; then cp "$src" "$tmp/a.glb"; else $cli simplify "$src" "$tmp/a.glb" --ratio "$ratio" --error 0.0005; fi
$cli resize "$tmp/a.glb" "$out" --width "$tex" --height "$tex"
ls -la "$src" "$out"
