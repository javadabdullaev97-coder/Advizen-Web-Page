"use client";

import { IMAGE_VARIANTS } from "./image-variants";

/* Serves the smallest pre-generated copy that covers the requested width (see scripts/image-variants.mjs);
   images without copies, and requests wider than every copy, get the original file. */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const path = decodeURI(src);
  const pick = IMAGE_VARIANTS[path]?.find((w) => w >= width);
  // Encoded so file names with spaces survive inside srcset.
  return encodeURI(pick ? `/_img/${pick}${path}` : path);
}
