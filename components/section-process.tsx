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
    <section className="bg-white py-20 sm:py-24" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              How It Works
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              A controlled sequence from paperwork to handoff.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Every shipment follows a defined workflow with clear checkpoints, a single accountable
              owner, and visible status at each stage.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal connected stepper */}
        <div className="relative mt-16">
          {/* connector line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 lg:block" />

          <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} variant="up" threshold={0.1}>
                <div className="group relative flex flex-col items-center px-2 text-center lg:items-start lg:text-left">
                  {/* node */}
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white text-primary-dark shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                    <step.icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white ring-4 ring-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* stat strip */}
        <ScrollReveal variant="up">
          <div className="mt-16 flex flex-col items-center justify-center gap-8 rounded-2xl border border-border bg-surface px-8 py-8 sm:flex-row sm:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">5</div>
              <p className="mt-1 text-sm text-muted">Process stages</p>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">24–48h</div>
              <p className="mt-1 text-sm text-muted">Avg. clearance time</p>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">1</div>
              <p className="mt-1 text-sm text-muted">Accountable owner</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
