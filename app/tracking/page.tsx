"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Package, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

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
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary border border-primary/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">Real-Time Tracking</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Track Your Shipment</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">Enter your tracking number for real-time updates on your cargo.</p>
          <form onSubmit={(e) => { e.preventDefault(); setSearched(true); }} className="mx-auto mt-10 flex max-w-lg gap-3">
            <div className="relative flex-1"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" /><input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="e.g. NXT-2024-0047" className="block w-full rounded-xl border border-border bg-white px-10 py-3 text-sm text-foreground placeholder:text-muted shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50" /></div>
            <button type="submit" className="inline-flex h-[46px] items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md active:scale-95">Track</button>
          </form>
        </div>
      </section>

      <section className="relative section-gradient-alt py-16 sm:py-20">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          {!searched ? (
            <div className="rounded-xl border border-border bg-white p-12 text-center shadow-sm"><Package className="mx-auto h-16 w-16 text-primary-200" /><h2 className="mt-4 text-lg font-semibold text-foreground">Enter a Tracking Number</h2><p className="mt-1.5 text-sm text-muted">Try <button onClick={() => { setId("NXT-2024-0047"); setSearched(true); }} className="text-primary font-medium underline underline-offset-2 hover:text-primary-dark transition-colors">NXT-2024-0047</button> for a demo.</p></div>
          ) : (
            <div className="space-y-6">
              {shipments.filter((s) => id === "" || s.id.toLowerCase().includes(id.toLowerCase())).map((s) => (
                <div key={s.id} className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                    <div><div className="text-xs font-medium uppercase tracking-wider text-muted">Tracking Number</div><div className="text-lg font-bold text-foreground">{s.id}</div></div>
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary border border-primary-100"><div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />{s.status}</div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"><MapPin className="h-4 w-4" /></div><div><div className="text-xs text-muted">Origin</div><div className="text-sm font-semibold text-foreground">{s.origin}</div></div></div>
                    <div className="flex items-start gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary"><MapPin className="h-4 w-4" /></div><div><div className="text-xs text-muted">Destination</div><div className="text-sm font-semibold text-foreground">{s.dest}</div></div></div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs text-muted"><span className="font-medium">Progress</span><span className="font-medium">ETA: {s.eta}</span></div>
                    <div className="mt-4 grid grid-cols-5 gap-2">{s.steps.map((m, i) => (<div key={m.l} className="text-center"><div className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${m.done ? "bg-primary text-white shadow-sm" : "border-2 border-border text-muted"}`}>{m.done ? <CheckCircle className="h-3.5 w-3.5" /> : i + 1}</div><div className="mt-1.5 text-xs font-medium text-muted">{m.l}</div><div className="text-xs text-muted/60">{m.d}</div></div>))}</div>
                  </div>
                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-surface p-4 border border-border"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><div><div className="text-xs font-medium text-muted">Latest Update</div><div className="text-sm text-foreground">{s.update}</div></div></div>
                </div>
              ))}
              {searched && !shipments.some((s) => s.id.toLowerCase().includes(id.toLowerCase())) && <div className="rounded-xl border border-border bg-white p-12 text-center shadow-sm"><Package className="mx-auto h-14 w-14 text-muted/30" /><h2 className="mt-4 text-lg font-semibold text-foreground">No Results Found</h2><p className="mt-1.5 text-sm text-muted">Please check your tracking number and try again, or <Link href="/contact" className="text-primary font-medium underline underline-offset-2 hover:text-primary-dark transition-colors">contact support</Link>.</p></div>}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
