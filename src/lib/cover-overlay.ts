/* Article cards put the title on the cover's left side, over a dark gradient. The covers are made with
   that side left empty for it (docs/image-brief). The title stays one <h3>: it is positioned over the
   image box, which is the card link's first child and spans its full width.

   On phones the insights grid and the related list switch to a small thumbnail beside the text, so they
   only use the overlay from `sm` up; the home cards keep it at every width.
   Classes are written out in full because Tailwind only finds class names that appear literally. */

/** Gradient over the cover; goes inside the image box, after the <Image>. */
export const COVER_SHADE =
  "pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,12,.8)_0%,rgba(11,11,12,.45)_38%,rgba(11,11,12,0)_70%)]";
export const COVER_SHADE_SM = `max-sm:hidden ${COVER_SHADE}`;

/** Classes for the <h3> so it sits on the cover, bottom left. The card link needs `relative`. */
export const COVER_TITLE =
  "absolute inset-x-0 top-0 aspect-[16/10] m-0 flex items-end p-5 pr-[38%] lg:p-6 lg:pr-[43%] text-[20px] lg:text-[22px] leading-[1.18] text-white [text-shadow:0_1px_14px_rgba(0,0,0,.35)]";
export const COVER_TITLE_SM =
  "sm:absolute sm:inset-x-0 sm:top-0 sm:aspect-[16/10] sm:m-0 sm:flex sm:items-end sm:p-5 sm:pr-[38%] lg:p-6 lg:pr-[43%] sm:text-[20px] lg:text-[22px] sm:leading-[1.18] sm:text-white sm:[text-shadow:0_1px_14px_rgba(0,0,0,.35)]";
