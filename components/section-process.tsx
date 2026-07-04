"use client";

import { FileSearch, FileText, Plane, ShieldCheck, PackageCheck, ArrowDown } from "lucide-react";
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
    <section className="relative section-gradient-alt py-20 sm:py-24 overflow-hidden" id="how-it-works">
      <div className="section-transition" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-eyebrow">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
              Simple Process,{" "}
              <span className="text-gradient">Fast Results</span>
            </h2>
            <p className="mt-3 text-base text-muted leading-relaxed">
              From document submission to final delivery — we manage every step with precision and care.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-10 sm:space-y-16">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} variant={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}>
                    <div className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className={`flex items-center gap-4 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div className={`${i % 2 === 0 ? "sm:text-right" : ""}`}>
                          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Step 0{i + 1}</span>
                          <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className={`mt-3 text-sm leading-relaxed text-muted ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Step number circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-surface bg-primary text-sm font-bold text-white shadow-lg sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    {i + 1}
                  </div>

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
