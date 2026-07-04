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
    <section className="bg-dark-surface py-16 sm:py-20" id="coverage">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-light">Our Network</span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Global Coverage, Local Expertise</h2>
            <p className="mt-2 text-sm text-white/40">Offices across East Africa with partner networks worldwide.</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ScrollReveal variant="left">
              <div className="rounded-lg border border-dark-border bg-dark-bg p-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white"><Building2 className="h-3.5 w-3.5 text-primary-light" /> Our Offices</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-center gap-2 rounded-md border border-dark-border bg-dark-surface px-3 py-2">
                      <span className="text-sm">{office.flag}</span>
                      <div>
                        <div className="text-xs font-medium text-white">{office.city}</div>
                        <div className="text-[10px] text-white/40">{office.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal variant="right">
              <div className="rounded-lg border border-dark-border bg-dark-bg p-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white"><Globe2 className="h-3.5 w-3.5 text-primary-light" /> Trade Routes</div>
                <div className="mt-3 space-y-2">
                  {routes.map((route) => (
                    <div key={`${route.from}-${route.to}`} className="flex items-center gap-3 rounded-md border border-dark-border bg-dark-surface px-3 py-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary-light"><route.icon className="h-3.5 w-3.5" /></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                          <span>{route.from}</span><span className="text-white/30">→</span><span className="text-primary-light">{route.to}</span>
                        </div>
                        <div className="text-[10px] text-white/40">Via {route.via} · {route.mode}</div>
                      </div>
                      <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary-light">Active</span>
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
