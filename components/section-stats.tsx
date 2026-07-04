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
  const count = useCounter(value, 2000, revealed);
  return (
    <div ref={ref} className={`flex flex-col items-center text-center transition-all duration-500 ${revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary-light" />
      </div>
      <div className="mt-3 text-2xl font-bold text-white sm:text-3xl">{revealed ? count : 0}{suffix}</div>
      <div className="mt-0.5 text-xs text-white/40">{label}</div>
    </div>
  );
}

export default function SectionStats() {
  return (
    <section className="bg-dark-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => <StatItem key={stat.label} {...stat} index={i} />)}
        </div>
      </div>
    </section>
  );
}
