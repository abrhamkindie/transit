"use client";

import { FileSearch, FileText, PackageCheck, Plane, ShieldCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const steps = [
  {
    icon: FileSearch,
    title: "Document intake",
    desc: "Invoice, packing list, bill of lading, permits, and cargo details checked before submission.",
  },
  {
    icon: FileText,
    title: "Declaration preparation",
    desc: "Customs entries, duty estimates, HS codes, and transit paperwork prepared by the operations desk.",
  },
  {
    icon: Plane,
    title: "Authority submission",
    desc: "Declarations submitted, inspections coordinated, and authority questions handled quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Milestone monitoring",
    desc: "Clearance, release, border, and delivery status shared through one accountable contact.",
  },
  {
    icon: PackageCheck,
    title: "Delivery handoff",
    desc: "Cargo release, delivery confirmation, and document closeout completed with the consignee.",
  },
];

export default function SectionProcess() {
  return (
    <section className="bg-white py-20 sm:py-24" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <ScrollReveal variant="left">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Process
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                A controlled sequence from paperwork to handoff.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted">
                The workflow is intentionally simple: every shipment has a defined owner,
                clear document checkpoints, and visible movement status.
              </p>
            </div>
          </ScrollReveal>

          <div className="border-y border-border">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} variant="right" threshold={0.1}>
                <div className="grid gap-5 border-b border-border py-6 last:border-b-0 sm:grid-cols-[4rem_1fr]">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <step.icon className="h-5 w-5 text-muted" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
