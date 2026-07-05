"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion, Plus } from "lucide-react";
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
    <section className="bg-surface py-20 sm:py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              FAQ
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Clear answers before your shipment moves.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              The most common questions importers and exporters ask before clearance, transit
              documentation, and delivery.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="up" className="mt-12">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen ? "border-primary-100 shadow-md" : "border-border shadow-sm hover:border-primary-100"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors duration-300 ${
                        isOpen ? "bg-primary text-white" : "bg-primary-50 text-primary-dark"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="flex-1 text-base font-semibold leading-snug text-foreground sm:text-lg">
                      {faq.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-[135deg] text-primary" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-border px-5 pb-5 pt-4 pl-16 text-sm leading-6 text-muted sm:px-6 sm:pl-[4.5rem]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Support card */}
        <ScrollReveal variant="up" className="mt-8">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-primary-100 bg-white p-8 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                <MessageCircleQuestion className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Still have questions?</h3>
                <p className="mt-1 text-sm text-muted">
                  Our operations desk responds to shipment queries the same working day.
                </p>
              </div>
            </div>
            <Link
              href="/faq"
              className="inline-flex h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md"
            >
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
