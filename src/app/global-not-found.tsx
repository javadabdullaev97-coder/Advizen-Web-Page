import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Manrope, Raleway } from "next/font/google";
import NotFoundView from "@/components/NotFoundView";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const raleway = Raleway({ subsets: ["latin"], weight: "500", variable: "--font-hero", display: "swap" });

export const metadata: Metadata = {
  title: "Page not found | Advizen",
  robots: { index: false },
};

// URLs that match no route skip every layout, so this page brings its own document and header.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable} ${raleway.variable}`}>
      <body className="min-h-full bg-background text-foreground">
        <header className="absolute inset-x-0 top-0 z-10 m-wrap h-20 flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Logo.webp" alt="" width={35} height={30} style={{ width: "auto", height: "26px" }} />
            <span style={{ fontFamily: "var(--font-hero), sans-serif", fontSize: "20px", fontWeight: 500, letterSpacing: "0.12em", color: "var(--foreground-hi)" }}>
              ADVIZEN
            </span>
          </Link>
        </header>
        <main>
          <NotFoundView />
        </main>
      </body>
    </html>
  );
}
