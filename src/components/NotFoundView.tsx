import Image from "next/image";
import Link from "next/link";

// Shared by not-found (inside the site layout) and global-not-found (unmatched URLs, no layout).
// It stays in English and links to the English pages.
export default function NotFoundView() {
  return (
    <section className="relative isolate flex items-end min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/404.webp" alt="" fill preload sizes="100vw" className="object-cover object-[50%_40%] home-settle" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />
      </div>
      <div className="m-wrap w-full pb-20 max-sm:pb-14">
        <h1 className="m-h1 text-[44px] sm:text-[clamp(56px,6vw,84px)] max-w-[12ch] home-rise">This page doesn&apos;t exist.</h1>
        <p className="mt-5 text-[18px] text-foreground-2 max-w-[30em] home-rise">The link may be out of date, or the page has moved.</p>
        <div className="mt-8 flex flex-wrap gap-3 home-rise">
          <Link href="/" className="m-btn m-btn-p max-sm:w-full">Back to home</Link>
          <Link href="/insights" className="m-btn m-btn-g max-sm:w-full">Browse insights</Link>
        </div>
      </div>
    </section>
  );
}
