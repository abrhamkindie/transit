"use client";

import { Globe2, Ship, Truck, Building2, MapPin } from "lucide-react";
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
    <section className="relative section-gradient-alt py-20 sm:py-24 overflow-hidden" id="coverage">
      <div className="section-transition" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute right-1/3 top-0 h-48 w-48 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-eyebrow">Our Network</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
              Global Coverage,{" "}
              <span className="text-gradient">Local Expertise</span>
            </h2>
            <p className="mt-3 text-base text-muted leading-relaxed">
              Offices across East Africa with partner networks spanning the globe.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Offices */}
          <div className="lg:col-span-2">
            <ScrollReveal variant="left">
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Building2 className="h-4 w-4 text-primary" />
                  Our Offices
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {offices.map((o) => (
                    <div
                      key={o.city}
                      className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-3 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:bg-white"
                    >
                      <span className="text-xl">{o.flag}</span>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{o.city}</div>
                        <div className="text-xs text-muted">{o.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Routes */}
          <div className="lg:col-span-3">
            <ScrollReveal variant="right">
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Globe2 className="h-4 w-4 text-primary" />
                  Trade Routes
                </div>
                <div className="mt-4 space-y-3">
                  {routes.map((r) => (
                    <div
                      key={`${r.from}-${r.to}`}
                      className="flex items-center gap-4 rounded-lg border border-border bg-surface px-4 py-3.5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:bg-white"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary">
                        <r.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground flex-wrap">
                          <span>{r.from}</span>
                          <MapPin className="h-3 w-3 text-muted" />
                          <span className="text-primary font-semibold">{r.to}</span>
                        </div>
                        <div className="text-xs text-muted mt-0.5">
                          Via {r.via} · {r.mode}
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary border border-primary-100">
                        Active
                      </span>
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
