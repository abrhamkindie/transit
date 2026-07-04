"use client";

import { Truck, Building2, Package, Container, Globe2, Anchor } from "lucide-react";

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
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted">Trusted by Industry Leaders</p>
        <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface px-3 py-4 transition-all hover:border-primary/30">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-50 text-primary"><p.icon className="h-4 w-4" /></div>
              <span className="text-xs font-medium text-muted text-center leading-tight">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
