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
    <section className="bg-white py-20 sm:py-24" id="coverage">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Coverage
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                East Africa corridor expertise with global forwarding reach.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
              Offices and partners support key trade lanes into Ethiopia and the wider region,
              with route planning connected to clearance and delivery requirements.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <ScrollReveal variant="left">
            <div>
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?w=900&q=85"
                alt="Freight route planning and logistics coordination"
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="mt-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Building2 className="h-4 w-4 text-primary" />
                  Operating offices
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {offices.map((office) => (
                    <span key={office} className="inline-flex items-center gap-2 text-sm text-muted">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {office}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="border-y border-border">
              {routes.map((route) => (
                <div
                  key={`${route.from}-${route.to}`}
                  className="grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[2rem_1fr_8rem] sm:items-center"
                >
                  <route.icon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xl font-semibold text-foreground">
                      {route.from} <span className="text-muted">to</span> {route.to}
                    </div>
                    <div className="mt-1 text-sm text-muted">Via {route.via}</div>
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    {route.mode}
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
