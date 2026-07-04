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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary border border-primary/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">What We Do</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Our Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">End-to-end customs clearance, transit documentation, and logistics solutions.</p>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl space-y-20 px-4 sm:px-6">
          {services.map((s, i) => (
            <div key={s.title} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary shadow-sm"><s.icon className="h-7 w-7" /></div>
                <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">{s.features.map((f) => <li key={f} className="flex items-center gap-2.5 text-sm text-muted"><div className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-sm shadow-primary/20" />{f}</li>)}</ul>
                <Link href={s.href} className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md active:scale-95">Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-lg">
                <div className="space-y-3">{s.features.slice(0, 4).map((f) => <div key={f} className="flex items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition-all hover:shadow-md"><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div><span className="text-sm font-medium text-foreground">{f}</span></div>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-[#2d8bb8] py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Need a Custom Solution?</h2>
          <p className="mt-2 text-base text-white/75">Contact us for a personalized consultation and quote.</p>
          <Link href="/contact" className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-95">Contact Us Today <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
