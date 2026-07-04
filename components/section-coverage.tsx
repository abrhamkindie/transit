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
    <section className="bg-white py-16 sm:py-20" id="coverage">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Our Network</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">Global Coverage, Local Expertise</h2>
            <p className="mt-2 text-sm text-muted">Offices across East Africa with partner networks worldwide.</p>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ScrollReveal variant="left">
              <div className="rounded-lg border border-border bg-surface p-5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground"><Building2 className="h-4 w-4 text-primary" /> Our Offices</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {offices.map((o) => (
                    <div key={o.city} className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2">
                      <span className="text-base">{o.flag}</span>
                      <div><div className="text-sm font-medium text-foreground">{o.city}</div><div className="text-xs text-muted">{o.country}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-3">
            <ScrollReveal variant="right">
              <div className="rounded-lg border border-border bg-surface p-5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground"><Globe2 className="h-4 w-4 text-primary" /> Trade Routes</div>
                <div className="mt-3 space-y-2">
                  {routes.map((r) => (
                    <div key={`${r.from}-${r.to}`} className="flex items-center gap-3 rounded-md border border-border bg-white px-3 py-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-50 text-primary"><r.icon className="h-4 w-4" /></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-sm font-medium text-foreground"><span>{r.from}</span><span className="text-muted">→</span><span className="text-primary">{r.to}</span></div>
                        <div className="text-xs text-muted">Via {r.via} · {r.mode}</div>
                      </div>
                      <span className="rounded bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary">Active</span>
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
