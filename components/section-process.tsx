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
    <section className="relative bg-surface-alt border-t border-border py-16 sm:py-20" id="how-it-works">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-white border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">How It Works</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">Simple Process, Fast Results</h2>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto">From document submission to final delivery, we manage every step.</p>
          </div>
        </ScrollReveal>

        <div className="relative mt-10">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 hidden sm:block sm:left-1/2 sm:-translate-x-px" />
          <div className="space-y-6 sm:space-y-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} variant={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-4 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className="inline-block rounded-xl border border-border bg-white p-5 text-left shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary"><step.icon className="h-5 w-5" /></div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Step 0{i + 1}</span>
                          <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-surface-alt bg-primary text-sm font-bold text-white shadow-md sm:absolute sm:left-1/2 sm:-translate-x-1/2">{i + 1}</div>
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
