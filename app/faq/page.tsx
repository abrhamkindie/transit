"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, Search, ArrowRight } from "lucide-react";

const categories = [
  { cat: "General", items: [{ q: "What is NexTransit?", a: "A customs clearance and logistics company specializing in international transit procedures, import/export clearance, and freight forwarding." }, { q: "Do I need a customs broker?", a: "Working with a professional ensures accurate, compliant declarations. Mistakes can lead to costly delays." }, { q: "How do I get started?", a: "Contact us through our website, call, or email for a free consultation." }] },
  { cat: "Documentation", items: [{ q: "What documents are required?", a: "Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and relevant permits." }, { q: "What is a Certificate of Origin?", a: "A document certifying the country where goods were manufactured, used for duty calculation and trade agreements." }, { q: "How do I find the right HS code?", a: "Our classification experts determine the correct HS code for accurate duty calculation." }] },
  { cat: "Transit & Customs", items: [{ q: "What is T1 vs T2 transit?", a: "T1 is for non-EU goods moving through the EU; T2 is for EU goods. Both suspend duties until final destination." }, { q: "How long does clearance take?", a: "Standard clearance takes 24-48 hours depending on cargo type." }, { q: "What if my goods are inspected?", a: "We coordinate with customs officials and manage the inspection process on your behalf." }] },
];

export default function FaqPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");
  const filtered = categories.map((c) => ({ ...c, items: c.items.filter((i) => i.q.toLowerCase().includes(search.toLowerCase()) || i.a.toLowerCase().includes(search.toLowerCase())) })).filter((c) => c.items.length > 0);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">Everything you need to know about our customs and logistics services.</p>
          <div className="relative mx-auto mt-8 max-w-md"><Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" /><input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search questions..." className="w-full rounded-md border border-border bg-white px-9 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" /></div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {filtered.length === 0 ? <p className="text-center text-sm text-muted">No matching questions found.</p> : (
            filtered.map((cat) => (
              <div key={cat.cat} className="mb-10 last:mb-0">
                <h2 className="flex items-center gap-3 text-base font-bold text-foreground mb-4"><span className="h-5 w-1 rounded-full bg-primary" />{cat.cat}</h2>
                <div className="space-y-2">{cat.items.map((item, i) => {
                  const key = `${cat.cat}-${i}`;
                  const o = open[key];
                  return (
                    <div key={key} className={`rounded-lg border transition-all ${o ? "border-primary/30 bg-primary-50" : "border-border bg-white hover:border-primary/20"}`}>
                      <button onClick={() => setOpen((p) => ({ ...p, [key]: !p[key] }))} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                        <span className="text-sm text-foreground">{item.q}</span>
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded transition-all ${o ? "bg-primary text-white" : "bg-primary-50 text-primary"}`}>{o ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}</div>
                      </button>
                      {o && <div className="px-4 pb-3"><p className="text-sm text-muted">{item.a}</p></div>}
                    </div>
                  );
                })}</div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Still Have Questions?</h2>
          <p className="mt-2 text-sm text-muted">Our team is ready to help.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Contact Support <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
