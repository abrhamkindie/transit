"use client";

import { FileSearch, FileText, Plane, ShieldCheck, PackageCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const steps = [
  { icon: FileSearch, title: "Submit Documents", desc: "Provide commercial invoice, packing list, bill of lading, and necessary permits." },
  { icon: FileText, title: "We Prepare Declaration", desc: "Our customs experts prepare declarations and calculate duties owed." },
  { icon: Plane, title: "Customs Submission", desc: "We submit declarations and manage the entire clearance process." },
  { icon: ShieldCheck, title: "Monitoring & Updates", desc: "Track your shipment in real-time with milestone updates." },
  { icon: PackageCheck, title: "Delivery Completed", desc: "Your goods are cleared and delivered to final destination." },
];

export default function SectionProcess() {
  return (
    <section className="relative section-gradient-alt border-t border-border py-16 sm:py-20 overflow-hidden" id="how-it-works">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="section-divider" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-white border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">How It Works</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">Simple Process, Fast Results</h2>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto">From document submission to final delivery, we manage every step.</p>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block sm:left-1/2 sm:-translate-x-px" />
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} variant={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-5 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:pr-14 sm:text-right" : "sm:pl-14"}`}>
                    <div className="inline-block w-full rounded-xl border border-border bg-white p-5 text-left shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary"><step.icon className="h-5 w-5" /></div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Step 0{i + 1}</span>
                          <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-surface-alt bg-primary text-sm font-bold text-white shadow-lg sm:absolute sm:left-1/2 sm:-translate-x-1/2">{i + 1}</div>
                  <div className="flex-1 hidden sm:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
