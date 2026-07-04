"use client";

import Link from "next/link";
import { FileCheck, Truck, Ship, Warehouse, ClipboardCheck, ShieldCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const items = [
  { icon: FileCheck, title: "Customs Clearance", desc: "Complete handling of declarations, duties calculation, and regulatory compliance.", href: "/services/customs-clearance" },
  { icon: ClipboardCheck, title: "Transit Documentation", desc: "T1, T2, TIR documents with real-time monitoring.", href: "/services/transit" },
  { icon: Ship, title: "Ocean Freight", desc: "FCL and LCL shipping with consolidated cargo options.", href: "/services/freight-logistics" },
  { icon: Truck, title: "Road Transport", desc: "Cross-border trucking with GPS tracking.", href: "/services/freight-logistics" },
  { icon: Warehouse, title: "Warehousing", desc: "Secure storage with inventory management.", href: "/services/freight-logistics" },
  { icon: ShieldCheck, title: "Cargo Insurance", desc: "Coverage against loss, damage, or delay.", href: "/services/freight-logistics" },
];

export default function SectionServices() {
  return (
    <section className="bg-surface py-16 sm:py-20" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">What We Offer</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">Our Services</h2>
            <p className="mt-2 text-sm text-muted">End-to-end customs and logistics solutions for your business.</p>
          </div>
        </ScrollReveal>

        <div className="stagger-children mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <Link key={s.title} href={s.href} className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors"><s.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
              <div className="mt-3 flex items-center gap-0.5 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100">Learn more →</div>
            </Link>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 text-center">
            <Link href="/services" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-primary px-4 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white">View All Services</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
