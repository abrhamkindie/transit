"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import PageHero from "@/components/page-hero";
import ScrollReveal from "@/components/scroll-reveal";
import SectionCta from "@/components/section-cta";

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
      <PageHero
        eyebrow="FAQ"
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        title={<>Answers before your cargo moves.</>}
        subtitle="Everything importers and exporters ask about clearance, transit, and delivery."
        image="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=900&q=80"
        imageAlt="Containers at a port terminal"
      >
        <div className="relative max-w-lg">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-xl border border-border bg-white px-11 py-3 text-sm text-foreground placeholder:text-muted shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50"
          />
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-surface px-6 py-16 text-center">
              <p className="text-sm font-medium text-foreground">No matching questions found.</p>
              <p className="mt-1 text-sm text-muted">Try a different search term or reach out to our team.</p>
            </div>
          ) : (
            filtered.map((cat) => (
              <ScrollReveal key={cat.cat} className="mb-14 last:mb-0">
                <h2 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                  <span className="h-4 w-1 rounded-full bg-primary" />
                  {cat.cat}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item, i) => {
                    const key = `${cat.cat}-${i}`;
                    const o = open[key];
                    return (
                      <div
                        key={key}
                        className={`rounded-2xl border transition-all duration-300 ${o ? "border-primary-100 bg-white shadow-md" : "border-border bg-white hover:border-primary-100"}`}
                      >
                        <button
                          onClick={() => setOpen((p) => ({ ...p, [key]: !p[key] }))}
                          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                        >
                          <span className="font-semibold text-foreground">{item.q}</span>
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${o ? "bg-primary text-white" : "bg-surface text-muted"}`}
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${o ? "rotate-180" : ""}`} />
                          </span>
                        </button>
                        <div className={`grid transition-all duration-300 ${o ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <div className="px-5 pb-5 sm:px-6">
                              <p className="border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            ))
          )}
        </div>
      </section>

      <SectionCta />
    </>
  );
}
