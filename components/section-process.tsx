"use client";

import { FileSearch, FileText, Plane, ShieldCheck, PackageCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const steps = [
  { icon: FileSearch, title: "Submit Documents", desc: "Provide commercial invoice, packing list, bill of lading, and permits." },
  { icon: FileText, title: "We Prepare Declaration", desc: "Our customs experts prepare declarations, classify HS codes, and calculate duties." },
  { icon: Plane, title: "Customs Submission", desc: "We submit declarations to customs authorities and manage the clearance process." },
  { icon: ShieldCheck, title: "Monitoring & Updates", desc: "Track your shipment in real-time with milestone updates at every stage." },
  { icon: PackageCheck, title: "Delivery Completed", desc: "Your goods are cleared and delivered to their final destination." },
];

export default function SectionProcess() {
  return (
    <section className="bg-dark-bg py-16 sm:py-20" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-light">How It Works</span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Simple Process, Fast Results</h2>
            <p className="mt-2 text-sm text-white/40">From document submission to final delivery, we manage every step.</p>
          </div>
        </ScrollReveal>

        <div className="relative mt-10">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-primary/20 hidden sm:block sm:left-1/2 sm:-translate-x-px" />
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} variant={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-4 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                    <div className="inline-block rounded-lg border border-dark-border bg-dark-surface p-4 text-left">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary-light"><step.icon className="h-3.5 w-3.5" /></div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-light">Step 0{i + 1}</span>
                          <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/40">{step.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-dark-bg bg-primary text-xs font-bold text-white shadow-sm sm:absolute sm:left-1/2 sm:-translate-x-1/2">{i + 1}</div>
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
