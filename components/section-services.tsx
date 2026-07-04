"use client";

import Link from "next/link";
import { FileCheck, Truck, Ship, Warehouse, ClipboardCheck, ShieldCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import { useScrollReveal } from "@/lib/utils";

const items = [
  { icon: FileCheck, title: "Customs Clearance", desc: "Complete handling of declarations, duties calculation, and regulatory compliance.", href: "/services/customs-clearance" },
  { icon: ClipboardCheck, title: "Transit Documentation", desc: "T1, T2, TIR documents with real-time monitoring and tracking.", href: "/services/transit" },
  { icon: Ship, title: "Ocean Freight", desc: "FCL and LCL shipping with consolidated cargo options worldwide.", href: "/services/freight-logistics" },
  { icon: Truck, title: "Road Transport", desc: "Cross-border trucking with real-time GPS tracking and monitoring.", href: "/services/freight-logistics" },
  { icon: Warehouse, title: "Warehousing", desc: "Secure storage facilities with comprehensive inventory management.", href: "/services/freight-logistics" },
  { icon: ShieldCheck, title: "Cargo Insurance", desc: "Comprehensive coverage against loss, damage, or transit delay.", href: "/services/freight-logistics" },
];

function StaggerGrid({ children }: { children: React.ReactNode }) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div ref={ref} className={`stagger-children mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${revealed ? "revealed" : ""}`}>
      {children}
    </div>
  );
}

export default function SectionServices() {
  return (
    <section className="relative bg-white border-t border-border py-16 sm:py-20" id="services">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">What We Offer</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">Our Services</h2>
            <p className="mt-2 text-sm text-muted max-w-lg mx-auto">End-to-end customs and logistics solutions for your business.</p>
          </div>
        </ScrollReveal>

        <StaggerGrid>
          {items.map((s) => (
            <Link key={s.title} href={s.href} className="group relative block rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Learn more →
              </div>
            </Link>
          ))}
        </StaggerGrid>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Link href="/services" className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-md border-2 border-primary px-5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white active:scale-95">
              View All Services <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
