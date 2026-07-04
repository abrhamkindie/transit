"use client";

import { useCounter, useScrollReveal } from "@/lib/utils";

const stats = [
  { value: 15, suffix: "+", label: "Years in customs operations" },
  { value: 5000, suffix: "+", label: "Shipments cleared" },
  { value: 500, suffix: "+", label: "Client relationships supported" },
  { value: 98, suffix: "%", label: "On-time delivery handoff" },
];

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, revealed } = useScrollReveal({ threshold: 0.25 });
  const count = useCounter(value, 1600, revealed);

  return (
    <div
      ref={ref}
      className={`relative px-6 text-center transition-all duration-700 sm:px-8 ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${index > 0 ? "border-l border-white/10" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="inline-flex items-baseline gap-0.5">
        <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          {revealed ? count : 0}
        </span>
        <span className="text-2xl font-bold text-primary-light sm:text-3xl">{suffix}</span>
      </div>
      <p className="mx-auto mt-3 max-w-[14rem] text-sm leading-5 text-white/60">
        {label}
      </p>
    </div>
  );
}

export default function SectionStats() {
  return (
    <section className="bg-gradient-to-br from-foreground via-[#1e3348] to-foreground py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-light">
              Performance
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Built around fewer delays and cleaner handoffs.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
              Measurable results from disciplined operations and a team that takes ownership
              of every shipment from intake to delivery confirmation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatItem key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
