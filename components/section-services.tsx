"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
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

const [featured, ...rest] = services;

export default function SectionServices() {
  return (
    <section className="bg-surface py-20 sm:py-24" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              Our Services
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Everything your shipment needs, under one accountable team.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              From customs clearance to final delivery, we handle every layer of the logistics chain
              so you don&apos;t have to coordinate between multiple vendors.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid: one tall featured image tile + compact service tiles */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured tile */}
          <ScrollReveal variant="scale" className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <Link
              href={featured.href}
              className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl p-8 text-white shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=1200&q=85"
                alt="Customs officers inspecting containers at a port terminal"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,43,60,0.25)_0%,rgba(26,43,60,0.55)_55%,rgba(26,43,60,0.94)_100%)]" />
              <div className="relative">
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-light backdrop-blur-sm">
                  Most requested
                </span>
                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:-translate-y-1">
                  <featured.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">{featured.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">{featured.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3">
                  Explore service
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Compact tiles */}
          {rest.map((service, i) => (
            <ScrollReveal key={service.title} variant="up" threshold={0.05}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-light transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.desc}</p>
                <span className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-light">
                  0{i + 2}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
