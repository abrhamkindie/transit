"use client";

import { ShieldCheck, Clock, HeadphonesIcon, FileText, Globe, BarChart3, ArrowRight } from "lucide-react";
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
    <section className="relative bg-surface py-20 sm:py-24 overflow-hidden" id="why-us">
      <div className="section-transition" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <ScrollReveal variant="left">
              <span className="text-eyebrow">Why Choose Us</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
                We Make Cross-Border Trade{" "}
                <span className="text-gradient">Simple &amp; Reliable</span>
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed max-w-md">
                With years of experience and a dedicated team, we take the complexity
                out of international shipping so you can focus on growing your business.
              </p>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} variant="up" threshold={0.1}>
                  <div className="group flex gap-4 rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                      <p className="mt-0.5 text-xs text-muted leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Image Grid */}
          <ScrollReveal variant="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="group overflow-hidden rounded-xl shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1554774853-719586f82d77?w=600&q=85"
                    alt="Customs documentation being reviewed by a professional"
                    loading="lazy"
                    className="h-48 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
                  />
                </div>
                <div className="group overflow-hidden rounded-xl shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=85"
                    alt="Logistics planning and route mapping"
                    loading="lazy"
                    className="h-36 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[-1deg]"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="group overflow-hidden rounded-xl shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=85"
                    alt="Shipping containers stacked at a terminal"
                    loading="lazy"
                    className="h-36 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
                  />
                </div>
                <div className="group overflow-hidden rounded-xl shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=85"
                    alt="Cargo truck on delivery route"
                    loading="lazy"
                    className="h-48 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[-1deg]"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
