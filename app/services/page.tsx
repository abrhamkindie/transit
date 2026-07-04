import Link from "next/link";
import { FileCheck, ClipboardCheck, Ship, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileCheck, title: "Customs Clearance", desc: "Complete management of import and export customs declarations, duty calculations, and regulatory compliance.",
    features: ["Import & export declarations", "Duty and tax calculation", "HS code classification", "Regulatory compliance"],
    href: "/services/customs-clearance",
  },
  {
    icon: ClipboardCheck, title: "Transit Services (T1/T2/TIR)", desc: "Expert management of customs transit procedures with real-time monitoring.",
    features: ["T1 & T2 transit documentation", "TIR carnet management", "Transit guarantee setup", "Real-time monitoring"],
    href: "/services/transit",
  },
  {
    icon: Ship, title: "Freight & Logistics", desc: "Comprehensive freight forwarding from ocean freight to warehousing.",
    features: ["Ocean freight (FCL & LCL)", "Air freight services", "Cross-border road transport", "Warehousing & distribution"],
    href: "/services/freight-logistics",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Our Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">End-to-end customs clearance, transit documentation, and logistics solutions.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">
          {services.map((s, i) => (
            <div key={s.title} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary"><s.icon className="h-6 w-6" /></div>
                <h2 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">{s.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-muted"><div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{f}</li>)}</ul>
                <Link href={s.href} className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-4 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Learn More <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
              <div className="rounded-lg border border-border bg-surface p-6">
                <div className="space-y-3">{s.features.slice(0, 4).map((f) => <div key={f} className="flex items-center gap-3 rounded-md border border-border bg-white px-4 py-3"><div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-100 text-emerald-600"><svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><span className="text-sm text-foreground">{f}</span></div>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Need a Custom Solution?</h2>
          <p className="mt-2 text-sm text-muted">Contact us for a personalized consultation and quote.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Contact Us Today <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
