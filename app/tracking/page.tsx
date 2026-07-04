"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Package, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const mockShipments = [
  { id: "NXT-2024-0047", status: "In Transit", origin: "Shanghai, China", destination: "Addis Ababa, Ethiopia", lastUpdate: "Departed Djibouti Port - Inland transit to Addis", eta: "Jul 12, 2026", milestones: [
    { label: "Booked", completed: true, date: "Jun 28" }, { label: "Picked Up", completed: true, date: "Jun 30" }, { label: "In Transit", completed: true, date: "Jul 2" }, { label: "Customs", completed: false, date: "Expected Jul 10" }, { label: "Delivered", completed: false, date: "Expected Jul 12" },
  ]},
  { id: "NXT-2024-0052", status: "Customs Clearance", origin: "Dubai, UAE", destination: "Addis Ababa, Ethiopia", lastUpdate: "Documentation submitted to customs", eta: "Jul 8, 2026", milestones: [
    { label: "Booked", completed: true, date: "Jun 25" }, { label: "Picked Up", completed: true, date: "Jun 27" }, { label: "In Transit", completed: true, date: "Jun 29" }, { label: "Customs", completed: false, date: "In Progress" }, { label: "Delivered", completed: false, date: "Expected Jul 8" },
  ]},
];

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <>
      <section className="bg-dark-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Track Your Shipment</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">Enter your tracking number for real-time updates.</p>
          <form onSubmit={(e) => { e.preventDefault(); setSearched(true); }} className="mx-auto mt-8 flex max-w-xl gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
              <input type="text" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} placeholder="e.g., NXT-2024-0047" className="block w-full rounded-md border border-dark-border bg-dark-surface px-9 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <button type="submit" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-xs font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Track</button>
          </form>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {!searched ? (
            <div className="rounded-lg border border-dark-border bg-dark-bg p-10 text-center">
              <Package className="mx-auto h-12 w-12 text-white/20" />
              <h2 className="mt-3 text-lg font-semibold text-white">Enter a Tracking Number</h2>
              <p className="mt-1 text-xs text-white/40">Try <button onClick={() => { setTrackingId("NXT-2024-0047"); setSearched(true); }} className="text-primary-light underline underline-offset-2 hover:text-primary">NXT-2024-0047</button> for a demo.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {mockShipments.filter((s) => trackingId === "" || s.id.toLowerCase().includes(trackingId.toLowerCase())).map((shipment) => (
                <div key={shipment.id} className="rounded-lg border border-dark-border bg-dark-bg p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dark-border pb-4">
                    <div>
                      <div className="text-[10px] font-medium uppercase tracking-wider text-white/40">Tracking Number</div>
                      <div className="text-sm font-bold text-white">{shipment.id}</div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light"><div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-light" />{shipment.status}</div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2.5"><div className="flex h-7 w-7 items-center justify-center rounded bg-emerald-500/10 text-emerald-400"><MapPin className="h-3.5 w-3.5" /></div><div><div className="text-[10px] text-white/40">Origin</div><div className="text-xs text-white">{shipment.origin}</div></div></div>
                    <div className="flex items-start gap-2.5"><div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary-light"><MapPin className="h-3.5 w-3.5" /></div><div><div className="text-[10px] text-white/40">Destination</div><div className="text-xs text-white">{shipment.destination}</div></div></div>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-[10px] text-white/40"><span>Progress</span><span>ETA: {shipment.eta}</span></div>
                    <div className="mt-3 grid grid-cols-5 gap-1">
                      {shipment.milestones.map((m, i) => (
                        <div key={m.label} className="text-center">
                          <div className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold ${m.completed ? "bg-primary text-white" : "border border-dark-border text-white/40"}`}>{m.completed ? <CheckCircle className="h-3 w-3" /> : i + 1}</div>
                          <div className="mt-1 text-[9px] text-white/40">{m.label}</div>
                          <div className="text-[8px] text-white/30">{m.date}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-start gap-2.5 rounded-md bg-dark-surface p-3">
                    <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-light" />
                    <div><div className="text-[10px] text-white/40">Latest Update</div><div className="text-xs text-white">{shipment.lastUpdate}</div></div>
                  </div>
                </div>
              ))}

              {searched && !mockShipments.some((s) => s.id.toLowerCase().includes(trackingId.toLowerCase())) && (
                <div className="rounded-lg border border-dark-border bg-dark-bg p-10 text-center">
                  <Package className="mx-auto h-12 w-12 text-white/20" />
                  <h2 className="mt-3 text-lg font-semibold text-white">No Results</h2>
                  <p className="mt-1 text-xs text-white/40">Try again or <Link href="/contact" className="text-primary-light underline underline-offset-2">contact support</Link>.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
