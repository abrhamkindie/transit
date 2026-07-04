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
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white py-16 sm:py-20">
      {/* Decorative blobs */}
      <div className="blob-primary -left-32 top-0 h-96 w-96" />
      <div className="blob-accent -right-32 bottom-0 h-80 w-80" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
          <ScrollReveal variant="left">
            <div>
              <span className="text-eyebrow">Operating Network</span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
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
                  className="card-elevated group relative overflow-hidden p-4 sm:p-5"
                >
                  {/* Gradient accent bar */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-start gap-3">
                    <div className="icon-glow shrink-0">
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
