"use client";

import { useEffect } from "react";

/* The homepage's small motion layer; globals.css does the visual part.
   - [data-reveal] blocks are marked shown the first time they scroll into view.
   - [data-tilt] cards lean toward a fine pointer.
   - The hero photo drifts at 15% of the scroll speed on wider screens. */
export default function HomeReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute("data-shown", "");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const cleanups: (() => void)[] = [() => io.disconnect()];

    if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - r.left;
          const y = e.clientY - r.top;
          el.style.setProperty("--ry", `${(x / r.width - 0.5) * 10}deg`);
          el.style.setProperty("--rx", `${(0.5 - y / r.height) * 8}deg`);
        };
        const leave = () => {
          el.style.setProperty("--ry", "0deg");
          el.style.setProperty("--rx", "0deg");
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    const photo = document.querySelector<HTMLElement>(".home-drift");
    if (photo && matchMedia("(prefers-reduced-motion: no-preference) and (min-width: 640px)").matches) {
      let frame = 0;
      const onScroll = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          photo.style.translate = `0 ${Math.min(window.scrollY, 900) * 0.15}px`;
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(frame);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);
  return null;
}
