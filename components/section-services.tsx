"use client";

import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileCheck,
  PackageCheck,
  ShieldCheck,
  Ship,
  Truck,
} from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const services = [
  {
    icon: FileCheck,
    title: "Customs Clearance",
    desc: "Declarations, duty calculations, HS code checks, and authority submissions handled end-to-end.",
    href: "/services/customs-clearance",
  },
  {
    icon: ClipboardList,
    title: "Transit Documentation",
    desc: "T1, T2, TIR, permits, and cross-border transit paperwork prepared before movement.",
    href: "/services/transit",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL and LCL shipping support with port handoff and inland transfer coordination.",
    href: "/services/freight-logistics",
  },
  {
    icon: Truck,
    title: "Road Transport",
    desc: "Regional trucking, border handoff, GPS status, and delivery coordination.",
    href: "/services/freight-logistics",
  },
  {
    icon: PackageCheck,
    title: "Warehousing",
    desc: "Short-term storage, cargo handling, and inventory coordination for cleared goods.",
    href: "/services/freight-logistics",
  },
  {
    icon: ShieldCheck,
    title: "Cargo Insurance",
    desc: "Coverage options for loss, damage, delay exposure, and high-value cargo movement.",
    href: "/services/freight-logistics",
  },
];

export default function SectionServices() {
  return (
    <section className="bg-white py-20 sm:py-24" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
              Our Services
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Everything your shipment needs,{" "}
              <span className="text-gradient">under one team.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              From customs clearance to final delivery, we handle every layer of the logistics chain
              so you don&apos;t have to coordinate between multiple vendors.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} variant="up" threshold={0.05}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg sm:p-7"
              >
                {/* Step number */}
                <span className="mb-4 text-xs font-bold text-muted-light">
                  0{i + 1}
                </span>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
