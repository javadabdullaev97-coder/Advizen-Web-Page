"use client";

import { W, H, REGIONS, ARAL_D } from "./uzbekistan-map.data";

/* Each region is a button: a mouse previews on hover, a tap or keyboard focus selects. */
export default function UzbekistanMap({
  activeId,
  onSelect,
  regionName,
  label,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  regionName: (id: string) => string;
  label: string;
}) {
  const active = REGIONS.find((r) => r.id === activeId);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto select-none" role="group" aria-label={label}>
      <path d={ARAL_D} className="fill-white/[0.025] pointer-events-none" />
      {REGIONS.map((r) => (
        <path
          key={r.id}
          d={r.d}
          role="button"
          tabIndex={0}
          aria-label={regionName(r.id)}
          aria-pressed={r.id === activeId}
          className="uz-region"
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") onSelect(r.id);
          }}
          onClick={() => onSelect(r.id)}
          onFocus={() => onSelect(r.id)}
        />
      ))}
      {/* The selected region is drawn again on top so its outline is never covered by a neighbour. */}
      {active && <path d={active.d} className="uz-region-on" aria-hidden />}
    </svg>
  );
}
