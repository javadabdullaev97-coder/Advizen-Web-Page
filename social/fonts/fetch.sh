#!/usr/bin/env bash
# Fetch the four faces the cards are set in.
#
# The files are not committed: they are binaries, and Google Fonts serves
# them from a stable path under the Open Font License, which permits
# redistribution but makes carrying copies in the repository pointless.
#
#   bash social/fonts/fetch.sh
set -euo pipefail

cd "$(dirname "$0")"
BASE="https://raw.githubusercontent.com/google/fonts/main"

fetch() {
  local path="$1" out="$2"
  curl -sSfL -o "$out" "$BASE/$path"
  # A redirect or a 404 page arrives as a few hundred bytes of HTML.
  if [ "$(stat -c%s "$out" 2>/dev/null || stat -f%z "$out")" -lt 20000 ]; then
    echo "error: $out came back too small — the upstream path moved" >&2
    rm -f "$out"
    exit 1
  fi
  echo "  $out"
}

echo "fetching fonts:"
fetch "ofl/spectral/Spectral-Regular.ttf"          "Spectral.ttf"
fetch "ofl/spectral/Spectral-Medium.ttf"           "Spectral-Md.ttf"
fetch "ofl/geist/Geist%5Bwght%5D.ttf"              "Geist.ttf"
fetch "ofl/geistmono/GeistMono%5Bwght%5D.ttf"      "GeistMono.ttf"
echo "done."
