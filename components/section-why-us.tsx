"use client";

import { ShieldCheck, Clock, HeadphonesIcon, FileText, Globe, BarChart3 } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const features = [
  { icon: ShieldCheck, title: "Full Customs Compliance", desc: "100% regulatory compliance eliminating penalties or delays." },
  { icon: Clock, title: "Fast Turnaround", desc: "Your cargo clears customs in record time." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "A personal account manager available around the clock." },
  { icon: FileText, title: "Paperwork Managed", desc: "We handle every document from invoices to declarations." },
  { icon: Globe, title: "Global Network", desc: "Partners across Africa, Middle East, Europe, and Asia." },
  { icon: BarChart3, title: "Real-Time Tracking", desc: "Monitor your shipment through our online portal." },
];

export default function SectionWhyUs() {
  return (
    <section className="relative bg-surface border-t border-border py-16 sm:py-20 overflow-hidden" id="why-us">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-56 w-56 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="section-divider" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <ScrollReveal variant="left">
              <span className="inline-block rounded-full bg-white border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">Why Choose Us</span>
              <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">We Make Cross-Border Trade <span className="text-primary">Simple &amp; Reliable</span></h2>
              <p className="mt-2 text-sm text-muted max-w-sm">With years of experience, we take the complexity out of international shipping.</p>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} variant="up" threshold={0.1}>
                  <div className="group flex gap-3 rounded-xl border border-border bg-white p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md"><f.icon className="h-5 w-5" /></div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                      <p className="mt-0.5 text-xs text-muted">{f.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal variant="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl shadow-md"><img src="https://images.unsplash.com/photo-1554774853-719586f82d77?w=600&q=85" alt="Customs documentation being reviewed by a professional" loading="lazy" className="h-44 w-full object-cover transition-transform duration-700 hover:scale-110" /></div>
                <div className="overflow-hidden rounded-xl shadow-md"><img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=85" alt="Logistics planning and route mapping" loading="lazy" className="h-32 w-full object-cover transition-transform duration-700 hover:scale-110" /></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-xl shadow-md"><img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=85" alt="Shipping containers stacked at a terminal" loading="lazy" className="h-32 w-full object-cover transition-transform duration-700 hover:scale-110" /></div>
                <div className="overflow-hidden rounded-xl shadow-md"><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=85" alt="Cargo truck on delivery route" loading="lazy" className="h-44 w-full object-cover transition-transform duration-700 hover:scale-110" /></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
