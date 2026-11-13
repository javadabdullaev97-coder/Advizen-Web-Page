import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/expertise", title: "Expertise", text: "Tax, legal, accounting, HR and operations services" },
  { href: "/insights", title: "Insights", text: "Briefings on Uzbek tax, law and regulation" },
  { href: "/guides/Doing-Business-in-Uzbekistan-2026.pdf", title: "Doing Business 2026", text: "Our guide for foreign investors, PDF" },
  { href: "/contact", title: "Contact", text: "Tell us what you are planning" },
];

// Shared by not-found (inside the site layout) and global-not-found (unmatched URLs, no layout).
// It stays in English and links to the English pages.
export default function NotFoundView() {
  return (
    <section className="relative isolate overflow-hidden min-h-[100svh] flex items-end pt-28 pb-20 max-sm:pb-14">
      <div className="absolute inset-0 -z-10">
        <Image src="/home/tashkent-dusk.webp" alt="" fill preload sizes="100vw" className="object-cover object-[30%_45%] max-sm:object-[62%_40%] home-settle" />
        <div aria-hidden className="absolute inset-0 home-hero-shade" />
        {/* Phones stack everything over the sky, so the whole photo is dimmed there. */}
        <div aria-hidden className="absolute inset-0 sm:hidden bg-[linear-gradient(180deg,rgba(11,11,12,.55)_0%,rgba(11,11,12,.7)_40%,rgba(11,11,12,.92)_75%)]" />
      </div>
      <div className="m-wrap w-full">
        <p className="text-[14px] font-medium text-foreground-2 home-rise">Error 404</p>
        <h1 className="m-h1 mt-4 text-[44px] sm:text-[clamp(52px,5.6vw,80px)] max-w-[13ch] home-rise">This page doesn&apos;t exist</h1>
        <p className="mt-5 text-[18px] leading-[1.5] text-foreground max-w-[30em] home-rise">The link may be out of date, or the page has moved. These are good places to continue.</p>
        <div className="mt-8 flex flex-wrap gap-3 home-rise">
          <Link href="/" className="m-btn m-btn-p max-sm:w-full">Back to home</Link>
          <Link href="/contact" className="m-btn m-btn-g max-sm:w-full">Contact us</Link>
        </div>
        <ul className="mt-14 max-sm:mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group m-tile flex flex-col h-full p-6 transition-colors duration-200 hover:bg-[#232325]">
                <span className="text-[17px] font-semibold text-foreground-hi">{l.title}</span>
                <span className="mt-1.5 text-[14px] leading-[1.45] text-foreground-2">{l.text}</span>
                <span className="m-more mt-auto pt-5 text-[14px]">Open</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
