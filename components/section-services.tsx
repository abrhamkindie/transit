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
    icon: FileCheck,
    title: "Customs Clearance",
    desc: "Declarations, duty calculations, HS code checks, and authority submissions handled end-to-end.",
    href: "/services/customs-clearance",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: ClipboardCheck,
    title: "Transit Documentation",
    desc: "T1, T2, TIR, permits, and cross-border transit paperwork prepared before movement.",
    href: "/services/transit",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL and LCL shipping support with port handoff and inland transfer coordination.",
    href: "/services/freight-logistics",
    accent: "from-violet-500/20 to-purple-500/10",
  },
  {
    icon: Truck,
    title: "Road Transport",
    desc: "Regional trucking, border handoff, GPS status, and delivery coordination.",
    href: "/services/freight-logistics",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Short-term storage, cargo handling, and inventory coordination for cleared goods.",
    href: "/services/freight-logistics",
    accent: "from-rose-500/20 to-pink-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Cargo Insurance",
    desc: "Coverage options for loss, damage, delay exposure, and high-value cargo movement.",
    href: "/services/freight-logistics",
    accent: "from-indigo-500/20 to-blue-500/10",
  },
];

export default function SectionServices() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24" id="services">
      {/* Decorative pattern */}
      <div className="dots-pattern-light absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-eyebrow">Our Services</span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Everything your shipment needs, under one accountable team.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              From customs clearance to final delivery, we handle every layer of the logistics chain
              so you don&apos;t have to coordinate between multiple vendors.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} variant="up" threshold={0.05}>
              <Link
                href={service.href}
                className="card-premium group block p-6 sm:p-7"
              >
                <div className={`icon-glow mb-4 bg-gradient-to-br ${service.accent}`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
