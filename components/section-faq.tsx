"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const faqs = [
  {
    q: "What documents do I need for customs clearance?",
    a: "Typically: Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and any relevant permits or licenses for regulated goods. We review your complete set before submission to catch any gaps.",
  },
  {
    q: "How long does customs clearance take?",
    a: "Standard clearance takes 24–48 hours depending on cargo type, inspection requirements, and the specific customs authority. We flag high-inspection-risk cargo early and prepare accordingly to minimize delays.",
  },
  {
    q: "What is T1/T2/TIR transit documentation?",
    a: "These are customs transit procedures that allow goods to move across borders under customs supervision without paying duties at each border crossing. The duties are secured by a guarantee and released at the final destination.",
  },
  {
    q: "Do you handle both import and export clearance?",
    a: "Yes — we handle full import and export customs clearance for all types of goods, including regulated, hazardous, and high-value cargo across all major East African trade corridors.",
  },
  {
    q: "How do I track my shipment?",
    a: "Track your shipment in real time through our online portal using your unique tracking number. You will also receive automated status updates at each milestone: submission, clearance, release, dispatch, and delivery.",
  },
  {
    q: "What regions do you cover?",
    a: "We primarily serve East Africa with a strong presence in Ethiopia, Djibouti, Kenya, Sudan, and Somalia — with connected partner networks covering the Middle East, Europe, and Asia.",
  },
];

export default function SectionFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24" id="faq">
      {/* Decorative elements */}
      <div className="dots-pattern-light absolute inset-0 opacity-30" />
      <div className="blob-primary -left-40 top-1/2 h-80 w-80" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <ScrollReveal variant="left">
            <div className="lg:sticky lg:top-28">
              <span className="text-eyebrow">FAQ</span>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Clear answers before your shipment moves.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-muted">
                The most common questions importers and exporters ask before clearance,
                transit documentation, and delivery.
              </p>
              <Link
                href="/faq"
                className="mt-8 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="card-elevated overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-lg font-semibold leading-snug text-foreground">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted transition-all duration-300 ${
                        open === index ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      open === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6">
                      <p className="max-w-2xl text-sm leading-6 text-muted">{faq.a}</p>
                    </div>
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
