"use client";

import { useScrollReveal, useCounter } from "@/lib/utils";
import { Briefcase, Ship, Users, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Ship, value: 5000, suffix: "+", label: "Shipments Cleared" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 98, suffix: "%", label: "On-Time Delivery" },
];

function StatItem({ icon: Icon, value, suffix, label, index }: { icon: typeof Briefcase; value: number; suffix: string; label: string; index: number }) {
  const { ref, revealed } = useScrollReveal({ threshold: 0.3 });
  const count = useCounter(value, 2200, revealed);
  return (
    <div
      ref={ref}
      className={`group flex flex-col items-center text-center transition-all duration-500 ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 border border-primary-100 transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25">
        <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
      </div>
      <div className="mt-4 text-4xl font-bold text-foreground tracking-tight sm:text-5xl">
        {revealed ? count : 0}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted font-medium">{label}</div>
    </div>
  );
}

export default function SectionStats() {
  return (
    <section className="relative section-gradient-primary py-20 sm:py-24 overflow-hidden">
      <div className="section-transition" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/3 bottom-0 h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-10 sm:gap-16 lg:grid-cols-4">
          {stats.map((s, i) => <StatItem key={s.label} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
