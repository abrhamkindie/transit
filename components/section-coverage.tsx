"use client";

import { Globe2, Ship, Truck, Building2 } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const offices = [
  { city: "Addis Ababa", country: "Ethiopia", flag: "🇪🇹" },
  { city: "Djibouti City", country: "Djibouti", flag: "🇩🇯" },
  { city: "Nairobi", country: "Kenya", flag: "🇰🇪" },
  { city: "Dubai", country: "UAE", flag: "🇦🇪" },
  { city: "Khartoum", country: "Sudan", flag: "🇸🇩" },
  { city: "Mogadishu", country: "Somalia", flag: "🇸🇴" },
];

const routes = [
  { from: "Shanghai", to: "Addis Ababa", via: "Djibouti", mode: "Sea + Road", icon: Ship },
  { from: "Dubai", to: "Addis Ababa", via: "Direct", mode: "Air", icon: Truck },
  { from: "Mombasa", to: "Addis Ababa", via: "Nairobi", mode: "Road", icon: Truck },
  { from: "Rotterdam", to: "Addis Ababa", via: "Djibouti", mode: "Sea + Road", icon: Ship },
];

export default function SectionCoverage() {
  return (
    <section className="relative section-gradient-alt border-t border-border py-16 sm:py-20 overflow-hidden" id="coverage">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 bottom-0 h-56 w-56 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="section-divider" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-white border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Our Network</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">Global Coverage, Local Expertise</h2>
            <p className="mt-2 text-sm text-muted">Offices across East Africa with partner networks worldwide.</p>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ScrollReveal variant="left">
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground"><Building2 className="h-4 w-4 text-primary" /> Our Offices</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {offices.map((o) => (
                    <div key={o.city} className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-3 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                      <span className="text-xl">{o.flag}</span>
                      <div><div className="text-sm font-semibold text-foreground">{o.city}</div><div className="text-xs text-muted">{o.country}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-3">
            <ScrollReveal variant="right">
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground"><Globe2 className="h-4 w-4 text-primary" /> Trade Routes</div>
                <div className="mt-4 space-y-3">
                  {routes.map((r) => (
                    <div key={`${r.from}-${r.to}`} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-3 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary"><r.icon className="h-4 w-4" /></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-sm font-medium text-foreground"><span>{r.from}</span><span className="text-muted">→</span><span className="text-primary font-semibold">{r.to}</span></div>
                        <div className="text-xs text-muted">Via {r.via} · {r.mode}</div>
                      </div>
                      <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary-100">Active</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
