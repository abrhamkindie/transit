"use client";

import { Anchor, Building2, Container, Globe2, ShieldCheck, Truck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const network = [
  { name: "Port Handoff", icon: Anchor, desc: "Seamless vessel-to-dock cargo transfer" },
  { name: "Container Release", icon: Container, desc: "Fast container gate-out processing" },
  { name: "Road Freight", icon: Truck, desc: "Regional trucking with GPS tracking" },
  { name: "Agent Network", icon: Globe2, desc: "Connected customs agents worldwide" },
  { name: "Compliance Desk", icon: ShieldCheck, desc: "Regulatory compliance verification" },
  { name: "Regional Offices", icon: Building2, desc: "On-ground support in key hubs" },
];

export default function SectionPartners() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
                <span className="h-px w-8 bg-primary" />
                Operating Network
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Connected infrastructure across every shipping touchpoint.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-muted">
              Our network spans ports, customs desks, road corridors, and regional hubs — keeping
              every shipment visible and moving.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial divider grid — no rounded cards, clean ruled cells */}
        <ScrollReveal variant="up" threshold={0.05}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border ring-1 ring-border/40">
            <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x lg:grid-cols-3">
              {network.map((item, i) => (
                <div
                  key={item.name}
                  className="group relative flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-surface sm:p-8"
                >
                  {/* top accent that grows on hover */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold tabular-nums text-border-light transition-colors duration-300 group-hover:text-primary-100">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
