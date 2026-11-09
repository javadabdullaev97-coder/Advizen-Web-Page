"use client";

import { useEffect, useRef } from "react";
import { W, H, REGIONS, ARAL_D } from "./uzbekistan-map.data";

const HOVER_INTENT_MS = 120;

/* Each region is a button. A tap, a click or keyboard focus selects it; a mouse selects it only
   after pausing on it briefly, so crossing the map on the way to the card does not change it. */
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
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const labelRef = useRef<SVGTextElement>(null);

  // The label sits at the centre of the selected region's bounding box, measured once it is drawn.
  useEffect(() => {
    const box = activeRef.current?.getBBox();
    if (!box) return;
    const x = box.x + box.width / 2;
    const y = box.y + box.height / 2;
    dotRef.current?.setAttribute("cx", `${x}`);
    dotRef.current?.setAttribute("cy", `${y}`);
    labelRef.current?.setAttribute("x", `${x + 8}`);
    labelRef.current?.setAttribute("y", `${y + 4}`);
  }, [activeId]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const cancel = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto select-none overflow-visible" role="group" aria-label={label}>
      <path d={ARAL_D} className="fill-white/[0.03] pointer-events-none" />
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
            if (e.pointerType !== "mouse") return;
            cancel();
            timer.current = setTimeout(() => onSelect(r.id), HOVER_INTENT_MS);
          }}
          onPointerLeave={cancel}
          onClick={() => {
            cancel();
            onSelect(r.id);
          }}
          onFocus={() => onSelect(r.id)}
        />
      ))}
      {/* The selected region is drawn again on top so its outline is never covered by a neighbour. */}
      {active && <path ref={activeRef} d={active.d} className="uz-region-on" aria-hidden />}
      <g key={activeId} aria-hidden className="home-fade">
        <circle ref={dotRef} r={3} className="uz-dot" />
        <text ref={labelRef} className="uz-label">{regionName(activeId)}</text>
      </g>
    </svg>
  );
}
