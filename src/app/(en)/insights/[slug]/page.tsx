// English articles live at /insights/[slug]; the page itself is shared with /ru and /uz.
export { default, generateMetadata, generateStaticParams } from "@/app/[locale]/insights/[slug]/page";

// Segment config has to be a literal in this file to be read at build time.
export const dynamicParams = false;
