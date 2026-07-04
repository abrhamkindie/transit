import Link from "next/link";
import { FileCheck, ClipboardCheck, Ship, Truck, Warehouse, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileCheck, title: "Customs Clearance",
    desc: "Complete management of import and export customs declarations. We handle all documentation, duty calculations, and regulatory compliance.",
    features: ["Import & export declarations", "Duty and tax calculation", "HS code classification", "Regulatory compliance", "Customs broker representation"],
    href: "/services/customs-clearance",
  },
  {
    icon: ClipboardCheck, title: "Transit Services (T1/T2/TIR)",
    desc: "Expert management of customs transit procedures. We handle T1, T2, and TIR documentation with real-time monitoring.",
    features: ["T1 & T2 transit documentation", "TIR carnet management", "Transit guarantee setup", "Real-time monitoring", "Customs office coordination"],
    href: "/services/transit",
  },
  {
    icon: Ship, title: "Freight & Logistics",
    desc: "Comprehensive freight forwarding services from ocean freight to road transport and warehousing.",
    features: ["Ocean freight (FCL & LCL)", "Air freight services", "Cross-border road transport", "Warehousing & distribution", "Cargo insurance"],
    href: "/services/freight-logistics",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-dark-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">End-to-end customs clearance, transit documentation, and logistics solutions for international trade.</p>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <div key={s.title} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-light"><s.icon className="h-6 w-6" /></div>
                <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/40">{s.desc}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.features.map((f) => (<li key={f} className="flex items-center gap-2 text-xs text-white/50"><div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />{f}</li>))}
                </ul>
                <Link href={s.href} className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-4 text-xs font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Learn More <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
              <div className="rounded-lg border border-dark-border bg-dark-bg p-6">
                <div className="space-y-3">
                  {s.features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-center gap-3 rounded-md border border-dark-border bg-dark-surface px-4 py-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/10 text-emerald-400"><svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                      <span className="text-xs text-white/60">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-dark py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Need a Custom Solution?</h2>
          <p className="mt-2 text-sm text-white/60">Contact us for a personalized consultation and quote.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-white px-5 text-xs font-medium text-primary transition-all hover:bg-white/90 active:scale-95">Contact Us Today <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
