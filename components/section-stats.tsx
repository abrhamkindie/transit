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
      className={`card-glass group relative overflow-hidden p-6 text-center transition-all duration-500 sm:p-8 ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="inline-flex items-baseline gap-0">
          <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {revealed ? count : 0}
          </span>
          <span className="text-2xl font-bold text-primary-light sm:text-3xl">{suffix}</span>
        </div>
        <p className="mx-auto mt-4 max-w-[14rem] text-sm leading-5 text-white/60">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function SectionStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-[#1e3348] to-foreground py-20 sm:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/8 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-60 w-60 rounded-full bg-accent/6 blur-[70px]" />
      <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-light">
              Performance
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Built around fewer delays, fewer surprises, and cleaner handoffs.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
              Measurable results from disciplined operations and a team that takes ownership
              of every shipment from intake to delivery confirmation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {stats.map((s, i) => (
              <StatItem key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
