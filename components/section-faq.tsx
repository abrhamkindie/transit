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
    <section className="bg-surface py-16 sm:py-20" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal variant="left">
            <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-muted">Have questions? Find answers below.</p>
            <Link href="/faq" className="mt-4 inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-white hover:bg-primary-dark">View All FAQs</Link>
          </ScrollReveal>
          <ScrollReveal variant="right">
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-lg border transition-all ${open === i ? "border-primary/30 bg-white" : "border-border bg-white hover:border-primary/20"}`}>
                  <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                    <span className="text-sm text-foreground">{faq.q}</span>
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded transition-all ${open === i ? "bg-primary text-white" : "bg-primary-50 text-primary"}`}>{open === i ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}</div>
                  </button>
                  {open === i && <div className="px-4 pb-3"><p className="text-sm text-muted">{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
