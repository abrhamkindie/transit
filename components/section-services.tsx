"use client";

import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileCheck,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const services = [
  {
    number: "01",
    icon: FileCheck,
    title: "Customs Clearance",
    desc: "Declarations, duty calculations, HS code checks, and authority submissions.",
    href: "/services/customs-clearance",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Transit Documentation",
    desc: "T1, T2, TIR, permits, and cross-border transit paperwork prepared before movement.",
    href: "/services/transit",
  },
  {
    number: "03",
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL and LCL shipping support with port handoff and inland transfer coordination.",
    href: "/services/freight-logistics",
  },
  {
    number: "04",
    icon: Truck,
    title: "Road Transport",
    desc: "Regional trucking, border handoff, GPS status, and delivery coordination.",
    href: "/services/freight-logistics",
  },
  {
    number: "05",
    icon: Warehouse,
    title: "Warehousing",
    desc: "Short-term storage, cargo handling, and inventory coordination for cleared goods.",
    href: "/services/freight-logistics",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Cargo Insurance",
    desc: "Coverage options for loss, damage, delay exposure, and high-value cargo movement.",
    href: "/services/freight-logistics",
  },
];

export default function SectionServices() {
  return (
    <section className="bg-surface py-20 sm:py-24" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Services
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                One operating team for clearance, freight, and documents.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
              NexTransit organizes the work around the shipment lifecycle: prepare the
              documents, clear the cargo, move it through the corridor, and close out delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-6 divide-y divide-border">
          {services.map((service) => (
            <ScrollReveal key={service.title} variant="up" threshold={0.1}>
              <Link
                href={service.href}
                className="group grid gap-5 py-7 transition-colors hover:bg-white/70 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:px-2"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-muted">{service.number}</span>
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{service.desc}</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
