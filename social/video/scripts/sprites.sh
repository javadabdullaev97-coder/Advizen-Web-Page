#!/usr/bin/env bash
# Renders the cut-outs for the UBO dividend chain into public/sprites/.
# They are drawn from the 3D models, which stay out of git, so the
# sprites do too: run this once after putting the models in public/models/.
set -euo pipefail
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
npx remotion bundle src/index.ts --out-dir="$tmp/bundle" --log=error >/dev/null
for kind in man ooo holding hollow cash budget; do
  npx remotion still "$tmp/bundle" ubo-sprite "$tmp/$kind.png" \
    --props="{\"kind\":\"$kind\"}" --gl=swangle --image-format=png --log=error --timeout=120000
done
mkdir -p public/sprites
python3 scripts/trim_sprites.py "$tmp" public/sprites
