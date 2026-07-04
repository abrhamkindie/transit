"use client";

import { Anchor, Building2, Container, Globe2, ShieldCheck, Truck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const network = [
  { name: "Port handoff", icon: Anchor },
  { name: "Container release", icon: Container },
  { name: "Road freight", icon: Truck },
  { name: "Agent network", icon: Globe2 },
  { name: "Compliance desk", icon: ShieldCheck },
  { name: "Regional offices", icon: Building2 },
];

export default function SectionPartners() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 py-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Operating network
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                Connected across the port, customs, road freight, and regional office points
                that keep shipments moving.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" threshold={0.1}>
            <div className="grid border-t border-border sm:grid-cols-3 sm:border-l sm:border-t-0">
              {network.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 border-b border-border py-4 sm:border-r sm:px-5"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
