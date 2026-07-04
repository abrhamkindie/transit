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
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Track Your Shipment</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">Enter your tracking number for real-time updates.</p>
          <form onSubmit={(e) => { e.preventDefault(); setSearched(true); }} className="mx-auto mt-8 flex max-w-md gap-3">
            <div className="relative flex-1"><Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" /><input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="e.g. NXT-2024-0047" className="block w-full rounded-md border border-border bg-white px-9 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" /></div>
            <button type="submit" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white hover:bg-primary-dark active:scale-95">Track</button>
          </form>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {!searched ? (
            <div className="rounded-lg border border-border bg-white p-10 text-center"><Package className="mx-auto h-12 w-12 text-primary-200" /><h2 className="mt-3 text-lg font-semibold text-foreground">Enter a Tracking Number</h2><p className="mt-1 text-sm text-muted">Try <button onClick={() => { setId("NXT-2024-0047"); setSearched(true); }} className="text-primary underline underline-offset-2 hover:text-primary-dark">NXT-2024-0047</button> for a demo.</p></div>
          ) : (
            <div className="space-y-4">
              {shipments.filter((s) => id === "" || s.id.toLowerCase().includes(id.toLowerCase())).map((s) => (
                <div key={s.id} className="rounded-lg border border-border bg-white p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                    <div><div className="text-xs font-medium uppercase tracking-wider text-muted">Tracking Number</div><div className="text-base font-bold text-foreground">{s.id}</div></div>
                    <div className="inline-flex items-center gap-1.5 rounded-md bg-primary-50 px-3 py-1 text-xs font-medium text-primary"><div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />{s.status}</div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2.5"><div className="flex h-7 w-7 items-center justify-center rounded bg-emerald-100 text-emerald-600"><MapPin className="h-3.5 w-3.5" /></div><div><div className="text-xs text-muted">Origin</div><div className="text-sm font-medium text-foreground">{s.origin}</div></div></div>
                    <div className="flex items-start gap-2.5"><div className="flex h-7 w-7 items-center justify-center rounded bg-primary-50 text-primary"><MapPin className="h-3.5 w-3.5" /></div><div><div className="text-xs text-muted">Destination</div><div className="text-sm font-medium text-foreground">{s.dest}</div></div></div>
                  </div>
                  <div className="mt-5"><div className="flex items-center justify-between text-xs text-muted"><span>Progress</span><span>ETA: {s.eta}</span></div>
                    <div className="mt-3 grid grid-cols-5 gap-1">{s.steps.map((m, i) => (<div key={m.l} className="text-center"><div className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${m.done ? "bg-primary text-white" : "border border-border text-muted"}`}>{m.done ? <CheckCircle className="h-3 w-3" /> : i + 1}</div><div className="mt-1 text-xs text-muted">{m.l}</div><div className="text-xs text-muted/60">{m.d}</div></div>))}</div>
                  </div>
                  <div className="mt-4 flex items-start gap-2.5 rounded-md bg-surface p-3"><Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /><div><div className="text-xs text-muted">Latest Update</div><div className="text-sm text-foreground">{s.update}</div></div></div>
                </div>
              ))}
              {searched && !shipments.some((s) => s.id.toLowerCase().includes(id.toLowerCase())) && <div className="rounded-lg border border-border bg-white p-10 text-center"><Package className="mx-auto h-12 w-12 text-muted/30" /><h2 className="mt-3 text-lg font-semibold text-foreground">No Results</h2><p className="mt-1 text-sm text-muted">Try again or <Link href="/contact" className="text-primary underline underline-offset-2">contact support</Link>.</p></div>}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
