"use client";

import Link from "next/link";
import { FileCheck, Truck, Ship, Warehouse, ClipboardCheck, ShieldCheck, ArrowRight } from "lucide-react";
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
    <div ref={ref} className={`stagger-children mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${revealed ? "revealed" : ""}`}>
      {children}
    </div>
  );
}

export default function SectionServices() {
  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden" id="services">
      <div className="section-transition" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-eyebrow">What We Offer</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="mt-3 text-base text-muted leading-relaxed">
              End-to-end customs and logistics solutions tailored for your business.
              From documentation to delivery, we handle it all.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGrid>
          {items.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative block rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-elevated hover:-translate-y-1.5 shadow-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/0 group-hover:from-primary-50/40 group-hover:to-primary-50/0 transition-all duration-500" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </StaggerGrid>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md active:scale-95"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
