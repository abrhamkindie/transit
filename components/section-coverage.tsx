"use client";

import { Building2, MapPin, Ship, Truck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const offices = ["Addis Ababa", "Djibouti City", "Nairobi", "Dubai", "Khartoum", "Mogadishu"];

const routes = [
  { from: "Shanghai", to: "Addis Ababa", via: "Djibouti", mode: "Sea + Road", icon: Ship },
  { from: "Dubai", to: "Addis Ababa", via: "Direct", mode: "Air + Road", icon: Truck },
  { from: "Mombasa", to: "Addis Ababa", via: "Nairobi", mode: "Road", icon: Truck },
  { from: "Rotterdam", to: "Addis Ababa", via: "Djibouti", mode: "Sea + Road", icon: Ship },
];

export default function SectionCoverage() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24" id="coverage">
      {/* Decorative background */}
      <div className="blob-primary -right-40 top-0 h-96 w-96" />
      <div className="blob-accent -left-40 bottom-0 h-80 w-80" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-eyebrow">Coverage</span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              East Africa corridor expertise with global forwarding reach.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Offices and partners support key trade lanes into Ethiopia and the wider region,
              with route planning connected to clearance and delivery requirements.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Route cards */}
          <div className="space-y-4">
            {routes.map((route, i) => (
              <ScrollReveal key={`${route.from}-${route.to}`} variant="left" threshold={0.1}>
                <div className="card-elevated group relative overflow-hidden p-5 transition-all duration-300">
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primary-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-center gap-4">
                    <div className="icon-glow shrink-0">
                      <route.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                        <span>{route.from}</span>
                        <span className="text-xs text-muted-light">→</span>
                        <span>{route.to}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-sm text-muted">
                        <span>Via {route.via}</span>
                        <span className="h-1 w-1 rounded-full bg-muted-light" />
                        <span className="font-medium text-primary">{route.mode}</span>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:block">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors group-hover:border-primary group-hover:text-primary">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Offices card */}
          <ScrollReveal variant="right">
            <div className="card-elevated h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="icon-glow">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Regional Offices</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                Our physical presence across East Africa and the Middle East means faster
                response times and deeper local knowledge at every hub.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {offices.map((office) => (
                  <div
                    key={office}
                    className="card-soft flex items-center gap-2.5 p-3"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{office}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
