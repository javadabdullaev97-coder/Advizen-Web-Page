import type { CSSProperties, ReactNode } from "react";

export function SectionHead({ title, lede, children }: { title: string; lede: string; children?: ReactNode }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16 lg:items-baseline-last mb-10 lg:mb-16">
      <h2 data-reveal className="m-h2 text-[36px] sm:text-[44px] lg:text-[clamp(40px,4.4vw,64px)]">{title}</h2>
      <div data-reveal style={{ "--d": ".08s" } as CSSProperties}>
        <p className="text-[18px] lg:text-[20px] leading-[1.5] text-foreground-2 max-w-[34em] text-pretty">{lede}</p>
        {children}
      </div>
    </div>
  );
}
