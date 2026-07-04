import Link from "next/link";
import { Ship, Plane, Truck, Warehouse, ShieldCheck, Package, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  { icon: Ship, title: "Ocean Freight", desc: "FCL and LCL services worldwide.", features: ["FCL exclusive containers", "LCL shared containers", "Port-to-port", "Consolidation"] },
  { icon: Plane, title: "Air Freight", desc: "Fast air cargo solutions.", features: ["Express and economy", "Door-to-door", "Dangerous goods", "Real-time tracking"] },
  { icon: Truck, title: "Road Transport", desc: "Cross-border trucking with GPS.", features: ["FTL and LTL", "Cross-border", "GPS tracking", "Temperature control"] },
  { icon: Warehouse, title: "Warehousing", desc: "Secure storage and distribution.", features: ["Short and long-term", "Inventory management", "Pick-and-pack", "Distribution"] },
  { icon: ShieldCheck, title: "Cargo Insurance", desc: "Protect your shipments.", features: ["All-risk coverage", "Total loss", "Delay insurance", "Simple claims"] },
  { icon: Package, title: "Project Logistics", desc: "Oversized and complex cargo.", features: ["Heavy lift", "Oversized equipment", "Charter services", "Route survey"] },
];

export default function FreightLogisticsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary border border-primary/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">Service</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Freight &amp; Logistics Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">Comprehensive freight forwarding with full logistics support.</p>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20"><s.icon className="h-6 w-6" /></div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">{s.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-muted"><CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />{f}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-[#2d8bb8] py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Ship?</h2>
          <p className="mt-2 text-base text-white/75">Get a competitive quote for your freight needs.</p>
          <Link href="/contact" className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-95">Get a Freight Quote <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
