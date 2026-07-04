"use client";

import { Truck, Building2, Package, Container, Globe2, Anchor } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const partners = [
  { name: "Ethiopian Shipping", icon: Anchor },
  { name: "Djibouti Port Auth", icon: Container },
  { name: "East Africa Logistics", icon: Truck },
  { name: "Global Trade Network", icon: Globe2 },
  { name: "Transit Solutions", icon: Package },
  { name: "Horn of Africa Logistics", icon: Building2 },
];

export default function SectionPartners() {
  return (
    <section className="relative overflow-hidden border-t border-border section-gradient-primary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-24 w-24 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">Trusted by Industry Leaders</p>
        </ScrollReveal>
        <ScrollReveal variant="up" threshold={0.1}>
          <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-6">
            {partners.map((p, i) => (
              <div key={p.name} className="group flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-white/80 backdrop-blur-sm px-3 py-5 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 hover:bg-white" style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20"><p.icon className="h-5 w-5" /></div>
                <span className="text-xs font-medium text-muted text-center leading-tight transition-colors duration-300 group-hover:text-foreground">{p.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
