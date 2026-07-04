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
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Freight &amp; Logistics Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">Comprehensive freight forwarding with full logistics support.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors"><s.icon className="h-5 w-5" /></div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
                <ul className="mt-3 space-y-1">{s.features.map((f) => <li key={f} className="flex items-center gap-1.5 text-sm text-muted"><CheckCircle className="h-3.5 w-3.5 shrink-0 text-emerald-500" />{f}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Ready to Ship?</h2>
          <p className="mt-2 text-sm text-muted">Get a competitive quote for your freight needs.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Get a Freight Quote <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
