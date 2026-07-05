"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Package, Clock, MapPin, CheckCircle } from "lucide-react";
import PageHero from "@/components/page-hero";
import ScrollReveal from "@/components/scroll-reveal";
import SectionCta from "@/components/section-cta";

const shipments = [
  { id: "NXT-2024-0047", status: "In Transit", origin: "Shanghai, China", dest: "Addis Ababa, Ethiopia", update: "Departed Djibouti Port", eta: "Jul 12, 2026", steps: [
    { l: "Booked", done: true, d: "Jun 28" }, { l: "Picked Up", done: true, d: "Jun 30" }, { l: "In Transit", done: true, d: "Jul 2" }, { l: "Customs", done: false, d: "Expected Jul 10" }, { l: "Delivered", done: false, d: "Expected Jul 12" },
  ]},
  { id: "NXT-2024-0052", status: "Customs Clearance", origin: "Dubai, UAE", dest: "Addis Ababa, Ethiopia", update: "Documentation submitted", eta: "Jul 8, 2026", steps: [
    { l: "Booked", done: true, d: "Jun 25" }, { l: "Picked Up", done: true, d: "Jun 27" }, { l: "In Transit", done: true, d: "Jun 29" }, { l: "Customs", done: false, d: "In Progress" }, { l: "Delivered", done: false, d: "Expected Jul 8" },
  ]},
];

export default function TrackingPage() {
  const [id, setId] = useState("");
  const [searched, setSearched] = useState(false);

  const matches = shipments.filter((s) => id === "" || s.id.toLowerCase().includes(id.toLowerCase()));
  const hasMatch = shipments.some((s) => s.id.toLowerCase().includes(id.toLowerCase()));

  return (
    <>
      <PageHero
        eyebrow="Tracking"
        crumbs={[{ label: "Home", href: "/" }, { label: "Tracking" }]}
        title={<>Track your shipment in real time.</>}
        subtitle="Enter your tracking number for live updates on your cargo."
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80"
        imageAlt="Container ship at port"
      >
        <form
          onSubmit={(e) => { e.preventDefault(); setSearched(true); }}
          className="flex max-w-lg gap-3"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="e.g. NXT-2024-0047"
              className="w-full rounded-xl border border-border bg-white px-11 py-3 text-sm text-foreground placeholder:text-muted shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-primary px-5 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Track
          </button>
        </form>
      </PageHero>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {!searched ? (
            <ScrollReveal>
              <div className="rounded-3xl border border-border bg-white p-12 text-center shadow-[var(--shadow-elevated)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <Package className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-xl font-bold text-foreground">Enter a Tracking Number</h2>
                <p className="mt-2 text-sm text-muted">Track your cargo from booking through final delivery.</p>
                <button
                  onClick={() => { setId("NXT-2024-0047"); setSearched(true); }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-95"
                >
                  <Search className="h-4 w-4" />
                  Try NXT-2024-0047
                </button>
              </div>
            </ScrollReveal>
          ) : (
            <div className="space-y-6">
              {matches.map((s) => (
                <ScrollReveal key={s.id}>
                  <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider text-muted">Tracking Number</div>
                        <div className="mt-1 text-lg font-bold text-foreground">{s.id}</div>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-dark">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                        {s.status}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted">Origin</div>
                          <div className="text-sm font-semibold text-foreground">{s.origin}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted">Destination</div>
                          <div className="text-sm font-semibold text-foreground">{s.dest}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center justify-between text-xs font-medium text-muted">
                        <span>Shipment Progress</span>
                        <span>ETA: {s.eta}</span>
                      </div>
                      <div className="mt-5 flex items-start">
                        {s.steps.map((m, i) => (
                          <div key={m.l} className="flex flex-1 flex-col items-center">
                            <div className="flex w-full items-center">
                              <div className={`h-0.5 flex-1 ${i === 0 ? "bg-transparent" : m.done ? "bg-primary" : "bg-border"}`} />
                              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${m.done ? "bg-primary text-white" : "border-2 border-border text-muted"}`}>
                                {m.done ? <CheckCircle className="h-4 w-4" /> : i + 1}
                              </div>
                              <div className={`h-0.5 flex-1 ${i === s.steps.length - 1 ? "bg-transparent" : s.steps[i + 1].done ? "bg-primary" : "bg-border"}`} />
                            </div>
                            <div className="mt-2 text-center text-xs font-semibold text-foreground">{m.l}</div>
                            <div className="text-center text-xs text-muted">{m.d}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-muted">Latest update</div>
                        <div className="text-sm font-semibold text-foreground">{s.update}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {searched && !hasMatch && (
                <ScrollReveal>
                  <div className="rounded-3xl border border-border bg-white p-12 text-center shadow-sm">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-surface text-muted">
                      <Package className="h-8 w-8" />
                    </div>
                    <h2 className="mt-6 text-xl font-bold text-foreground">No Results Found</h2>
                    <p className="mt-2 text-sm text-muted">
                      Please check your tracking number and try again, or{" "}
                      <Link href="/contact" className="font-semibold text-primary underline underline-offset-2 transition-colors hover:text-primary-dark">
                        contact support
                      </Link>
                      .
                    </p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          )}
        </div>
      </section>

      <SectionCta />
    </>
  );
}
