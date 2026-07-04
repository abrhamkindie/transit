"use client";

import { ShieldCheck, Clock, HeadphonesIcon, FileText, Globe, BarChart3 } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const features = [
  { icon: ShieldCheck, title: "Full Customs Compliance", desc: "We ensure 100% regulatory compliance, eliminating risks of penalties or delays." },
  { icon: Clock, title: "Fast Turnaround", desc: "Your cargo clears customs in record time." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "A personal account manager available around the clock." },
  { icon: FileText, title: "Paperwork Managed", desc: "We handle every document from invoices to declarations." },
  { icon: Globe, title: "Global Network", desc: "Partners across Africa, Middle East, Europe, and Asia." },
  { icon: BarChart3, title: "Real-Time Tracking", desc: "Monitor your shipment through our online portal." },
];

export default function SectionWhyUs() {
  return (
    <section className="bg-dark-bg py-16 sm:py-20" id="why-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <ScrollReveal variant="left">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-light">Why Choose Us</span>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">We Make Cross-Border Trade <span className="text-primary-light">Simple &amp; Reliable</span></h2>
              <p className="mt-2 text-sm text-white/40">With years of experience, we take the complexity out of international shipping.</p>
            </ScrollReveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} variant="up" threshold={0.1}>
                  <div className="flex gap-3 rounded-lg border border-dark-border bg-dark-surface p-3.5 transition-all hover:border-primary/30">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-primary/10 text-primary-light"><f.icon className="h-3.5 w-3.5" /></div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">{f.title}</h4>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-white/40">{f.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal variant="right">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="overflow-hidden rounded-lg"><img src="https://images.unsplash.com/photo-1554774853-719586f82d77?w=500&q=80" alt="Customs documentation" loading="lazy" className="h-36 w-full object-cover transition-transform hover:scale-105" /></div>
                <div className="overflow-hidden rounded-lg"><img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=500&q=80" alt="Logistics planning" loading="lazy" className="h-24 w-full object-cover transition-transform hover:scale-105" /></div>
              </div>
              <div className="space-y-3 pt-4">
                <div className="overflow-hidden rounded-lg"><img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=500&q=80" alt="Shipping containers" loading="lazy" className="h-24 w-full object-cover transition-transform hover:scale-105" /></div>
                <div className="overflow-hidden rounded-lg"><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80" alt="Cargo truck" loading="lazy" className="h-36 w-full object-cover transition-transform hover:scale-105" /></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
