"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown, HelpCircle, FileText, Truck, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";
import SectionCta from "@/components/section-cta";

const categories = [
  { 
    cat: "General", 
    icon: HelpCircle,
    items: [
      { 
        q: "What is NexTransit?", 
        a: "NexTransit is a customs clearance and logistics company specializing in international transit procedures, import/export clearance, and freight forwarding across East Africa and beyond." 
      }, 
      { 
        q: "Do I need a customs broker?", 
        a: "Working with a professional customs broker ensures accurate, compliant declarations. Mistakes in documentation can lead to costly delays, fines, or even seizure of goods." 
      }, 
      { 
        q: "How do I get started?", 
        a: "Contact us through our website, call our team, or send an email for a free consultation. We'll assess your needs and provide a tailored solution." 
      }
    ] 
  },
  { 
    cat: "Documentation", 
    icon: FileText,
    items: [
      { 
        q: "What documents are required for customs clearance?", 
        a: "The essential documents include: Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and any relevant import/export permits or licenses specific to your goods." 
      }, 
      { 
        q: "What is a Certificate of Origin?", 
        a: "A Certificate of Origin is an official document certifying the country where goods were manufactured. It's used for duty calculation, trade agreement eligibility, and customs verification." 
      }, 
      { 
        q: "How do I find the right HS code?", 
        a: "Our classification experts determine the correct Harmonized System (HS) code for your goods. This ensures accurate duty calculation and compliance with international trade regulations." 
      }
    ] 
  },
  { 
    cat: "Transit & Customs", 
    icon: Truck,
    items: [
      { 
        q: "What is T1 vs T2 transit procedure?", 
        a: "T1 is for non-EU goods moving through the EU territory. T2 is for EU goods moving within the EU. Both procedures suspend duties and taxes until the goods reach their final destination." 
      }, 
      { 
        q: "How long does customs clearance typically take?", 
        a: "Standard clearance takes 24-48 hours depending on the cargo type, documentation completeness, and customs workload. Complex shipments may require additional time." 
      }, 
      { 
        q: "What happens if my goods are selected for inspection?", 
        a: "We coordinate directly with customs officials, manage the inspection process on your behalf, and ensure any issues are resolved quickly to minimize delays." 
      }
    ] 
  },
  {
    cat: "Shipping & Logistics",
    icon: Globe,
    items: [
      {
        q: "Which regions do you serve?",
        a: "We specialize in East African trade corridors including Ethiopia, Kenya, Tanzania, Uganda, and Rwanda, with connections to Middle East, European, and Asian markets."
      },
      {
        q: "Do you offer door-to-door delivery?",
        a: "Yes, we provide comprehensive door-to-door logistics solutions including pickup, customs clearance, and final-mile delivery to your specified location."
      },
      {
        q: "What types of cargo do you handle?",
        a: "We handle a wide range of cargo including commercial goods, personal effects, machinery, electronics, and specialized equipment. Each shipment is assessed for specific requirements."
      }
    ]
  }
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/quote" }
];

export default function FaqPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter categories based on search
  const filtered = categories
    .map((c) => ({
      ...c,
      items: c.items.filter(
        (i) =>
          i.q.toLowerCase().includes(search.toLowerCase()) ||
          i.a.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter((c) => c.items.length > 0);

  // Get unique categories for filter tabs
  const categoryNames = ["All", ...categories.map(c => c.cat)];

  // Filter by active category
  const displayedCategories = activeCategory === "All" 
    ? filtered 
    : filtered.filter(c => c.cat === activeCategory);

  // Toggle FAQ item
  const toggleItem = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero Section - Matches body but slightly darker */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200/80 to-gray-100 pt-28 pb-20 sm:pt-32 sm:pb-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal variant="left">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  FAQ
                </span>
                <h1 className="text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
                  Answers before <br />
                  <span className="text-primary">your cargo moves.</span>
                </h1>
                <p className="text-base leading-relaxed text-muted max-w-lg">
                  Everything importers and exporters ask about clearance, transit, 
                  and delivery — all in one place.
                </p>
                
                {/* Search box */}
                <div className="relative max-w-lg pt-4">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search questions..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-11 py-3.5 text-sm text-foreground placeholder:text-muted shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Quick links */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1 rounded-full bg-white/80 px-4 py-1.5 text-xs text-muted transition-all hover:bg-white hover:text-primary"
                    >
                      {link.label}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Hero image with stats floating cards */}
            <ScrollReveal variant="right" className="relative hidden lg:block">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=900&q=80"
                    alt="Containers at a port terminal"
                    className="h-[400px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating stat cards */}
                <div className="absolute -bottom-6 -left-6 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm px-5 py-4 shadow-lg">
                  <div className="text-2xl font-bold text-primary">24-48</div>
                  <p className="text-xs text-muted">Hours clearance</p>
                </div>
                <div className="absolute -right-4 top-8 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm px-5 py-4 shadow-lg">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <p className="text-xs text-muted">On-time delivery</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Category filter tabs */}
          {!search && (
            <ScrollReveal>
              <div className="mb-12 flex flex-wrap gap-2 justify-center">
                {categoryNames.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "bg-white text-muted hover:bg-primary-50 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Results count */}
          {search && (
            <ScrollReveal>
              <p className="mb-8 text-center text-sm text-muted">
                Found {filtered.reduce((acc, c) => acc + c.items.length, 0)} results for "{search}"
              </p>
            </ScrollReveal>
          )}

          {/* FAQ items */}
          {displayedCategories.length === 0 ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
              <HelpCircle className="mx-auto h-12 w-12 text-muted/30" />
              <p className="mt-4 text-sm font-medium text-foreground">No matching questions found.</p>
              <p className="mt-1 text-sm text-muted">Try a different search term or reach out to our team.</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
              >
                Contact us for help
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            displayedCategories.map((cat) => (
              <ScrollReveal key={cat.cat} className="mb-14 last:mb-0">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                    <cat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                    {cat.cat}
                  </h2>
                  <span className="flex-1 border-t border-gray-200" />
                  <span className="text-xs font-medium text-muted">
                    {cat.items.length} questions
                  </span>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item, i) => {
                    const key = `${cat.cat}-${i}`;
                    const isOpen = open[key];
                    return (
                      <div
                        key={key}
                        className={`group rounded-2xl border transition-all duration-300 ${
                          isOpen
                            ? "border-primary/30 bg-primary-50/50 shadow-md shadow-primary/10"
                            : "border-gray-200 bg-white hover:border-primary/30 hover:shadow-sm"
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                        >
                          <span className={`font-semibold text-foreground transition-colors ${
                            isOpen ? "text-primary" : "group-hover:text-primary"
                          }`}>
                            {item.q}
                          </span>
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                              isOpen
                                ? "bg-primary text-white shadow-lg shadow-primary/30"
                                : "bg-gray-100 text-muted group-hover:bg-primary/10 group-hover:text-primary"
                            }`}
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                        </button>

                        <div
                          className={`grid transition-all duration-300 ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 pb-5 sm:px-6">
                              <div className="relative">
                                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-primary/40" />
                                <p className="pl-5 text-sm leading-relaxed text-muted">
                                  {item.a}
                                </p>
                              </div>
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

          {/* Bottom CTA */}
          <ScrollReveal>
            <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
              <HelpCircle className="mx-auto h-12 w-12 text-primary/30" />
              <h3 className="mt-4 text-xl font-bold text-foreground">Still have questions?</h3>
              <p className="mt-2 text-sm text-muted max-w-md mx-auto">
                Our team is ready to help with any specific questions about your shipment.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 active:scale-95"
              >
                Contact our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionCta />
    </>
  );
}