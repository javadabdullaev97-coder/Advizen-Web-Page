"use client";

import { IMAGE_VARIANTS, IMAGE_VERSIONS } from "./image-variants";

/* Serves the smallest pre-generated copy that covers the requested width (see scripts/image-variants.mjs);
   images without copies, and requests wider than every copy, get the original file.
   Photos keep their file names when replaced and are cached for 30 days, so each URL carries the
   photo's content hash: a new photo means a new URL. */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const path = decodeURI(src);
  const pick = IMAGE_VARIANTS[path]?.find((w) => w >= width);
  const version = IMAGE_VERSIONS[path];
  // Encoded so file names with spaces survive inside srcset.
  return encodeURI(pick ? `/_img/${pick}${path}` : path) + (version ? `?v=${version}` : "");
}
