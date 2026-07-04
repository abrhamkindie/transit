"use client";

import { FileSearch, FileText, PackageCheck, Plane, ShieldCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const steps = [
  {
    icon: FileSearch,
    title: "Document Intake",
    desc: "Invoice, packing list, bill of lading, permits, and cargo details checked before submission.",
  },
  {
    icon: FileText,
    title: "Declaration Preparation",
    desc: "Customs entries, duty estimates, HS codes, and transit paperwork prepared by the operations desk.",
  },
  {
    icon: Plane,
    title: "Authority Submission",
    desc: "Declarations submitted, inspections coordinated, and authority questions handled quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Milestone Monitoring",
    desc: "Clearance, release, border, and delivery status shared through one accountable contact.",
  },
  {
    icon: PackageCheck,
    title: "Delivery Handoff",
    desc: "Cargo release, delivery confirmation, and document closeout completed with the consignee.",
  },
];

export default function SectionProcess() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-white sm:py-24" id="how-it-works">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/8 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <ScrollReveal variant="left">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-light">
                How It Works
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                A controlled sequence from paperwork to handoff.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-white/60">
                Every shipment follows a defined workflow with clear checkpoints,
                a single accountable owner, and visible status at each stage.
              </p>

              {/* Summary stat */}
              <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-semibold text-white">5</div>
                  <p className="mt-1 text-xs text-white/50">Process stages</p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <div className="text-3xl font-semibold text-white">24-48h</div>
                  <p className="mt-1 text-xs text-white/50">Avg. clearance time</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[1.375rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent max-lg:hidden" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <ScrollReveal key={step.title} variant="right" threshold={0.1}>
                  <div className="group relative">
                    {/* Desktop layout */}
                    <div className="max-lg:hidden">
                      <div className="flex items-start gap-6">
                        {/* Step indicator */}
                        <div className="relative flex shrink-0 flex-col items-center">
                          <div className="number-badge relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(91,184,232,0.4)]">
                            {index + 1}
                          </div>
                        </div>

                        {/* Card */}
                        <div                            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-xl">
                          <div className="flex items-center gap-3">
                            <step.icon className="h-5 w-5 text-primary-light" />
                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          </div>
                          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="lg:hidden">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                        <div className="flex items-center gap-3">
                          <div className="number-badge h-9 w-9 text-xs">
                            {index + 1}
                          </div>
                          <step.icon className="h-5 w-5 text-primary-light" />
                          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-white/60">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
