"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const faqs = [
  {
    q: "What documents do I need for customs clearance?",
    a: "Typically: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, and relevant permits.",
  },
  {
    q: "How long does customs clearance take?",
    a: "Standard clearance takes 24-48 hours depending on cargo type and inspection requirements.",
  },
  {
    q: "What is T1/T2/TIR transit documentation?",
    a: "Customs transit procedures allowing goods to move across borders under supervision without paying duties at each border.",
  },
  {
    q: "Do you handle both import and export clearance?",
    a: "Yes, we handle full import and export customs clearance for all types of goods.",
  },
  {
    q: "How do I track my shipment?",
    a: "Track in real time through our online portal using your tracking number.",
  },
  {
    q: "What regions do you cover?",
    a: "We primarily serve East Africa with connections to the Middle East, Europe, and Asia.",
  },
];

export default function SectionFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface py-20 sm:py-24" id="faq">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <ScrollReveal variant="left">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                FAQ
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Clear answers before your shipment moves.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-muted">
                The most common questions importers and exporters ask before clearance,
                transit documentation, and delivery.
              </p>
              <Link
                href="/faq"
                className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="border-y border-border">
              {faqs.map((faq, index) => (
                <div key={faq.q} className="border-b border-border last:border-b-0">
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="text-xl font-semibold leading-tight text-foreground">
                      {faq.q}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                      {open === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      open === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-2xl pb-6 text-sm leading-6 text-muted">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
