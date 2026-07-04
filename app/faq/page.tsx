"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, Search, ArrowRight } from "lucide-react";

const faqCategories = [
  { category: "General", items: [
    { q: "What is NexTransit?", a: "NexTransit is a customs clearance and logistics company specializing in international transit procedures, import/export customs clearance, and freight forwarding." },
    { q: "Do I need a customs broker?", a: "While you can clear customs on your own, working with a professional ensures accurate, compliant declarations processed quickly. Mistakes can lead to costly delays." },
    { q: "How do I get started?", a: "Contact us through our website, call us, or email us. We'll schedule a free consultation to understand your needs." },
  ]},
  { category: "Documentation", items: [
    { q: "What documents are required?", a: "Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and relevant permits." },
    { q: "What is a Certificate of Origin?", a: "A document certifying the country where goods were manufactured, often required for duty calculation and trade agreements." },
    { q: "How do I know which HS code to use?", a: "Our classification experts determine the correct HS code for your goods, ensuring accurate duty calculation." },
  ]},
  { category: "Transit & Customs", items: [
    { q: "What is T1 vs T2 transit?", a: "T1 is for non-EU goods moving through the EU; T2 is for EU-origin goods. Both suspend duties until final destination." },
    { q: "How long does clearance take?", a: "Standard clearance takes 24-48 hours depending on cargo type and inspection requirements." },
    { q: "What if my goods are selected for inspection?", a: "We coordinate with customs officials and manage the inspection process on your behalf." },
  ]},
];

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");

  const filtered = faqCategories.map((cat) => ({ ...cat, items: cat.items.filter((item) => item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase())) })).filter((cat) => cat.items.length > 0);

  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">Everything you need to know about our customs clearance and logistics services.</p>
          <div className="relative mx-auto mt-8 max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search questions..." className="w-full rounded-md border border-dark-border bg-dark-surface px-9 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? <p className="text-center text-sm text-white/40">No matching questions found.</p> : (
            filtered.map((cat) => (
              <div key={cat.category} className="mb-10 last:mb-0">
                <h2 className="flex items-center gap-3 text-base font-bold text-white mb-4"><span className="h-5 w-1 rounded-full bg-primary-light" />{cat.category}</h2>
                <div className="space-y-2">
                  {cat.items.map((item, i) => {
                    const key = `${cat.category}-${i}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={key} className={`rounded-lg border transition-all ${isOpen ? "border-primary/30 bg-dark-bg" : "border-dark-border bg-dark-bg hover:border-primary/20"}`}>
                        <button onClick={() => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                          <span className="text-xs font-medium text-white/80">{item.q}</span>
                          <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded transition-all ${isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary-light"}`}>{isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}</div>
                        </button>
                        {isOpen && <div className="px-4 pb-3"><p className="text-xs leading-relaxed text-white/40">{item.a}</p></div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="bg-dark-bg py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Still Have Questions?</h2>
          <p className="mt-2 text-sm text-white/40">Our team is ready to help.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-xs font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Contact Support <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
