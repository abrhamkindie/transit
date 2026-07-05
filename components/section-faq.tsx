"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ClipboardList,
  FileCheck,
  Globe,
  LayoutGrid,
  MessageCircleQuestion,
  Radar,
} from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const faqs = [
  {
    cat: "Clearance",
    q: "What documents do I need for customs clearance?",
    a: "Typically: Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and any relevant permits or licenses for regulated goods. We review your complete set before submission to catch any gaps.",
  },
  {
    cat: "Clearance",
    q: "How long does customs clearance take?",
    a: "Standard clearance takes 24–48 hours depending on cargo type, inspection requirements, and the specific customs authority. We flag high-inspection-risk cargo early and prepare accordingly to minimize delays.",
  },
  {
    cat: "Transit",
    q: "What is T1/T2/TIR transit documentation?",
    a: "These are customs transit procedures that allow goods to move across borders under customs supervision without paying duties at each border crossing. The duties are secured by a guarantee and released at the final destination.",
  },
  {
    cat: "Clearance",
    q: "Do you handle both import and export clearance?",
    a: "Yes — we handle full import and export customs clearance for all types of goods, including regulated, hazardous, and high-value cargo across all major East African trade corridors.",
  },
  {
    cat: "Tracking",
    q: "How do I track my shipment?",
    a: "Track your shipment in real time through our online portal using your unique tracking number. You will also receive automated status updates at each milestone: submission, clearance, release, dispatch, and delivery.",
  },
  {
    cat: "Coverage",
    q: "What regions do you cover?",
    a: "We primarily serve East Africa with a strong presence in Ethiopia, Djibouti, Kenya, Sudan, and Somalia — with connected partner networks covering the Middle East, Europe, and Asia.",
  },
];

const categoryIcons: Record<string, typeof FileCheck> = {
  All: LayoutGrid,
  Clearance: FileCheck,
  Transit: ClipboardList,
  Tracking: Radar,
  Coverage: Globe,
};

const categories = ["All", "Clearance", "Transit", "Tracking", "Coverage"];

export default function SectionFaq() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<string | null>(faqs[0].q);

  const visible = useMemo(
    () => (cat === "All" ? faqs : faqs.filter((f) => f.cat === cat)),
    [cat]
  );

  const countFor = (c: string) => (c === "All" ? faqs.length : faqs.filter((f) => f.cat === c).length);

  const selectCat = (c: string) => {
    setCat(c);
    const first = c === "All" ? faqs[0] : faqs.find((f) => f.cat === c);
    setOpen(first ? first.q : null);
  };

  return (
    <section className="bg-surface py-20 sm:py-24" id="faq">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left rail */}
          <ScrollReveal variant="left" className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
                <span className="h-px w-8 bg-primary" />
                FAQ
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Answers before your cargo moves.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted">
                Filter by topic to find what importers and exporters ask most about clearance, transit
                documentation, and delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 lg:flex-col">
                {categories.map((c) => {
                  const Icon = categoryIcons[c];
                  const on = cat === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => selectCat(c)}
                      className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 lg:w-full ${
                        on
                          ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                          : "border-border bg-white text-foreground hover:border-primary-100 hover:bg-primary-50/40"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 shrink-0 ${on ? "text-white" : "text-primary-dark"}`}
                      />
                      <span className="flex-1 text-left">{c}</span>
                      <span
                        className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
                          on ? "bg-white/20 text-white" : "bg-surface text-muted"
                        }`}
                      >
                        {countFor(c)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right column: accordion */}
          <div className="lg:col-span-3">
            <div className="space-y-3">
              {visible.map((faq) => {
                const isOpen = open === faq.q;
                return (
                  <ScrollReveal key={faq.q} variant="up" threshold={0.05}>
                    <div
                      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                        isOpen ? "border-primary-100 shadow-md" : "border-border shadow-sm hover:border-primary-100"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : faq.q)}
                        className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                        aria-expanded={isOpen}
                      >
                        <div className="flex-1">
                          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-dark">
                            {faq.cat}
                          </span>
                          <h3 className="mt-1 text-base font-semibold leading-snug text-foreground sm:text-lg">
                            {faq.q}
                          </h3>
                        </div>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-primary bg-primary text-white"
                              : "border-border bg-surface text-muted group-hover:text-primary"
                          }`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-5 sm:px-6">
                            <p className="border-l-2 border-primary pl-4 text-sm leading-6 text-muted">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Support banner */}
            <ScrollReveal variant="up" className="mt-6">
              <div className="relative overflow-hidden rounded-3xl bg-foreground p-7 sm:p-8">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-40 blur-2xl"
                  style={{ background: "radial-gradient(circle, #3a9bc8 0%, transparent 70%)" }}
                />
                <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
                      <MessageCircleQuestion className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Still have questions?</h3>
                      <p className="mt-1 text-sm text-white/60">
                        Our operations desk responds to shipment queries the same working day.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/faq"
                    className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-primary-50 hover:shadow-lg sm:w-fit"
                  >
                    View All FAQs
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
