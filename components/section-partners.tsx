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
    <section className="relative bg-surface border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Trusted by Industry Leaders</p>
        </ScrollReveal>
        <ScrollReveal variant="up" threshold={0.1}>
          <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
            {partners.map((p) => (
              <div key={p.name} className="group flex flex-col items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-4 transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-sm"><p.icon className="h-4 w-4" /></div>
                <span className="text-[11px] font-medium text-muted text-center leading-tight transition-colors group-hover:text-foreground">{p.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
