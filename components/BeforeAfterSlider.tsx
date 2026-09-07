"use client";

import Image from "next/image";
import { useState } from "react";
import type { ClinicConfig } from "@/types/site";

export default function BeforeAfterSlider({ config }: { config: ClinicConfig }) {
  const [position, setPosition] = useState(50);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-sm">
        <Image src={config.beforeAfter.beforeImage} alt={config.labels.comparisonBeforeLabel} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: position + "%" }}>
          <div className="absolute inset-y-0 left-0" style={{ width: 10000 / Math.max(position, 1) + "%" }}>
            <Image src={config.beforeAfter.afterImage} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.25)]" style={{ left: position + "%" }}>
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg">↔</span>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white">{config.labels.comparisonAfterLabel}</span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">{config.labels.comparisonBeforeLabel}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={config.labels.comparisonControlLabel}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{config.beforeAfter.disclaimer}</p>
    </div>
  );
}
