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
      className={`border-t border-white/15 py-6 transition-all duration-500 sm:border-l sm:border-t-0 sm:px-6 ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-4xl font-semibold text-white sm:text-5xl">
        {revealed ? count : 0}
        {suffix}
      </div>
      <p className="mt-3 max-w-[12rem] text-sm leading-5 text-white/62">{label}</p>
    </div>
  );
}

export default function SectionStats() {
  return (
    <section className="bg-foreground py-14 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
              Performance
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Built around fewer delays, fewer surprises, and cleaner handoffs.
            </h2>
          </div>
          <div className="grid sm:grid-cols-4">
            {stats.map((s, i) => (
              <StatItem key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
