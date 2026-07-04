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
    <section className="bg-surface py-20 sm:py-24" id="coverage">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
              Coverage
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              East Africa corridor expertise{" "}
              <span className="text-gradient">with global reach.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Offices and partners support key trade lanes into Ethiopia and the wider region,
              with route planning connected to clearance and delivery requirements.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Route cards */}
          <div className="space-y-3">
            {routes.map((route) => (
              <ScrollReveal key={`${route.from}-${route.to}`} variant="left" threshold={0.1}>
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-100 hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <route.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-lg font-bold text-foreground">
                      <span>{route.from}</span>
                      <span className="text-muted-light">&#8594;</span>
                      <span>{route.to}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-sm text-muted">
                      <span>Via {route.via}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-light" />
                      <span className="font-medium text-primary">{route.mode}</span>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:block">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all duration-300 group-hover:border-primary group-hover:text-primary">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Offices panel */}
          <ScrollReveal variant="right">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-dark">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Regional Offices</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                Our physical presence across East Africa and the Middle East means faster
                response times and deeper local knowledge at every hub.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {offices.map((office) => (
                  <div
                    key={office}
                    className="flex items-center gap-2.5 rounded-xl bg-surface p-3 transition-colors duration-200 hover:bg-primary-50"
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
