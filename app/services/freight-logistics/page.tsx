import Link from "next/link";
import { Ship, Plane, Truck, Warehouse, ShieldCheck, Package, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  { icon: Ship, title: "Ocean Freight", desc: "FCL and LCL services covering major shipping routes worldwide.", features: ["FCL exclusive containers", "LCL cost-effective sharing", "Port-to-port options", "Consolidation services"] },
  { icon: Plane, title: "Air Freight", desc: "Fast air cargo solutions for time-sensitive shipments.", features: ["Express and economy", "Door-to-door", "Dangerous goods handling", "Real-time tracking"] },
  { icon: Truck, title: "Road Transport", desc: "Cross-border trucking with GPS tracking across East Africa.", features: ["FTL and LTL", "Cross-border transport", "GPS tracking", "Temperature control"] },
  { icon: Warehouse, title: "Warehousing", desc: "Secure storage with inventory management and distribution.", features: ["Short and long-term", "Inventory management", "Pick-and-pack", "Distribution"] },
  { icon: ShieldCheck, title: "Cargo Insurance", desc: "Protect shipments against loss, damage, or delay.", features: ["All-risk coverage", "Total loss protection", "Delay insurance", "Simple claims"] },
  { icon: Package, title: "Project Logistics", desc: "Specialized handling of oversized or complex cargo.", features: ["Heavy lift cargo", "Oversized equipment", "Charter services", "Route survey"] },
];

export default function FreightLogisticsPage() {
  return (
    <>
      <section className="bg-dark-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Freight &amp; Logistics Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">Comprehensive freight forwarding including ocean, air, and road transport with full logistics support.</p>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Integrated Logistics Solutions</h2>
            <p className="mt-2 text-sm text-white/40">A full suite of logistics services for your cargo.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-lg border border-dark-border bg-dark-bg p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-light group-hover:bg-primary group-hover:text-white transition-all"><s.icon className="h-5 w-5" /></div>
                <h3 className="mt-3 text-sm font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-xs text-white/40">{s.desc}</p>
                <ul className="mt-3 space-y-1">{s.features.map((f) => <li key={f} className="flex items-center gap-1.5 text-[11px] text-white/40"><CheckCircle className="h-3 w-3 shrink-0 text-emerald-400" />{f}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Ready to Ship?</h2>
          <p className="mt-2 text-sm text-white/60">Get a competitive quote for your freight needs.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-white px-5 text-xs font-medium text-primary transition-all hover:bg-white/90 active:scale-95">Get a Freight Quote <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
