"use client";

import { Award, Clock, PackageCheck, Users, type LucideIcon } from "lucide-react";
import { useCounter, useScrollReveal } from "@/lib/utils";

const stats: {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { value: 15, suffix: "+", label: "Years in customs operations", icon: Award },
  { value: 5000, suffix: "+", label: "Shipments cleared", icon: PackageCheck },
  { value: 500, suffix: "+", label: "Client relationships supported", icon: Users },
  { value: 98, suffix: "%", label: "On-time delivery handoff", icon: Clock },
];

function StatCard({
  value,
  suffix,
  label,
  icon: Icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  index: number;
}) {
  const { ref, revealed } = useScrollReveal({ threshold: 0.25 });
  const count = useCounter(value, 1600, revealed);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-700 hover:border-primary/40 hover:bg-white/[0.07] sm:p-7 ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-light transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-6 inline-flex items-baseline gap-0.5">
        <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {revealed ? count : 0}
        </span>
        <span className="text-xl font-bold text-primary-light sm:text-2xl">{suffix}</span>
      </div>
      <p className="mt-3 text-sm leading-5 text-white/55">{label}</p>
      {/* accent bar */}
      <span className="mt-5 block h-1 w-full overflow-hidden rounded-full bg-white/10">
        <span className="block h-full w-1/3 origin-left rounded-full bg-gradient-to-r from-primary to-primary-light transition-transform duration-500 group-hover:scale-x-[2.6]" />
      </span>
    </div>
  );
}

export default function SectionStats() {
  return (
    <section className="bg-gradient-to-br from-foreground via-[#1e3348] to-foreground py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
            <span className="h-px w-8 bg-primary-light/60" />
            Performance
            <span className="h-px w-8 bg-primary-light/60" />
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Built around fewer delays and cleaner handoffs.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/55">
            Measurable results from disciplined operations and a team that takes ownership of every
            shipment from intake to delivery confirmation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
