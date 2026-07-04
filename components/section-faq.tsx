"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const faqs = [
  { q: "What documents do I need for customs clearance?", a: "Typically: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, and relevant permits." },
  { q: "How long does customs clearance take?", a: "Standard clearance takes 24-48 hours depending on cargo type and inspection requirements." },
  { q: "What is T1/T2/TIR transit documentation?", a: "Customs transit procedures allowing goods to move across borders under supervision without paying duties at each border." },
  { q: "Do you handle both import and export clearance?", a: "Yes, we handle full import and export customs clearance for all types of goods." },
  { q: "How do I track my shipment?", a: "Track in real-time through our online portal using your tracking number." },
  { q: "What regions do you cover?", a: "We primarily serve East Africa with connections to Middle East, Europe, and Asia." },
];

export default function SectionFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-white border-t border-border py-16 sm:py-20 overflow-hidden" id="faq">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-48 w-48 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="section-divider" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal variant="left">
            <span className="inline-block rounded-full bg-primary-50 border border-primary-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-muted">Have questions? Find answers below.</p>
            <Link href="/faq" className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark hover:shadow-md active:scale-95">View All FAQs</Link>
          </ScrollReveal>
          <ScrollReveal variant="right">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-xl border transition-all duration-300 ${open === i ? "border-primary/30 bg-white shadow-md" : "border-border bg-surface hover:border-primary/20 hover:shadow-sm"}`}>
                  <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left">
                    <span className="text-sm font-medium text-foreground">{faq.q}</span>
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${open === i ? "bg-primary text-white shadow-sm rotate-0" : "bg-primary-50 text-primary"}`}>
                      {open === i ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </div>
                  </button>
                  {open === i && (
                    <div className="overflow-hidden animate-fade-in-up">
                      <div className="px-5 pb-5">
                        <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
