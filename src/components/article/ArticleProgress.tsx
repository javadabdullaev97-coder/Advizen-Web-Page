"use client";

import { useEffect, useRef } from "react";

/** A thin neutral line under the nav that fills as the article body is read. */
export default function ArticleProgress({ targetId }: { targetId: string }) {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = bar.current;
    const body = document.getElementById(targetId);
    if (!el || !body) return;
    let frame = 0;
    const update = () => {
      const r = body.getBoundingClientRect();
      const span = Math.max(1, r.height - window.innerHeight * 0.5);
      const p = Math.min(1, Math.max(0, (-r.top + 120) / span));
      el.style.transform = `scaleX(${p})`;
      el.style.opacity = window.scrollY > 24 ? "0.85" : "0";
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [targetId]);

  return (
    <span
      ref={bar}
      aria-hidden
      className="fixed top-20 inset-x-0 z-40 h-0.5 bg-foreground-2 origin-left pointer-events-none transition-opacity duration-300 motion-reduce:transition-none"
      style={{ transform: "scaleX(0)", opacity: 0 }}
    />
  );
}
