"use client";

import { Truck, Building2, Package, Container, Globe2, Anchor } from "lucide-react";

const partners = [
  { name: "Ethiopian Shipping", icon: Anchor },
  { name: "Djibouti Port Auth", icon: Container },
  { name: "East Africa Logistics", icon: Truck },
  { name: "Global Trade Network", icon: Globe2 },
  { name: "Transit Solutions Ltd", icon: Package },
  { name: "Horn of Africa Logistics", icon: Building2 },
];

export default function SectionPartners() {
  return (
    <section className="border-t border-dark-border bg-dark-surface py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-white/30">
          Trusted by Industry Leaders
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2 rounded-lg border border-dark-border bg-dark-bg px-3 py-3">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary-light">
                <p.icon className="h-3.5 w-3.5" />
              </div>
              <span className="text-[10px] font-medium text-white/40 text-center leading-tight">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
