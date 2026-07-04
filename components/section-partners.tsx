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
    <section className="relative bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
          <ScrollReveal variant="left">
            <div>
              <span className="inline-block rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                Operating Network
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Connected infrastructure across every shipping touchpoint.
              </h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-muted">
                Our network spans ports, customs desks, road corridors, and regional hubs —
                keeping every shipment visible and moving.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {network.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-md sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground sm:text-base">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
