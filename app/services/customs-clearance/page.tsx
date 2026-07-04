import Link from "next/link";
import { FileCheck, FileSpreadsheet, Search, Calculator, ShieldCheck, Clock, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, title: "Document Review", desc: "We review all shipping documents for completeness." },
  { icon: Calculator, title: "Duty Assessment", desc: "Calculate duties and fees using correct HS codes." },
  { icon: FileSpreadsheet, title: "Declaration Filing", desc: "Submit customs declarations electronically." },
  { icon: ShieldCheck, title: "Customs Inspection", desc: "Coordinate with officials if selected for inspection." },
  { icon: Clock, title: "Release & Delivery", desc: "Once cleared, we arrange release and transportation." },
];

const benefits = ["Eliminate risk of penalties", "Faster clearance times", "Cost optimization through accurate HS codes", "Complete transparency", "One point of contact", "Up-to-date regulatory knowledge"];

export default function CustomsClearancePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary border border-primary/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">Service</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Customs Clearance Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">Complete import and export customs clearance management.</p>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 border border-primary-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Our Process</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">How We Clear Your Cargo</h2>
            <p className="mt-2 text-sm text-muted">A streamlined process ensuring fast and compliant clearance.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.title} className="group text-center p-5 rounded-xl border border-border bg-surface transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20"><step.icon className="h-8 w-8" /></div>
                <div className="mt-4 mx-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">{i + 1}</div>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-gradient-alt py-16 sm:py-20 overflow-hidden">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-white border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">Why It Matters</span>
              <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">Why Professional Clearance Matters</h2>
              <p className="mt-2 text-sm text-muted">Incorrect declarations can cause costly delays and penalties.</p>
              <div className="mt-6 space-y-3">{benefits.map((b) => <div key={b} className="flex items-start gap-3 p-2"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" /><span className="text-sm text-muted">{b}</span></div>)}</div>
            </div>
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-lg">
              <h3 className="text-base font-semibold text-foreground">Documents We Handle</h3>
              <div className="mt-5 space-y-3">
                {["Commercial Invoice", "Packing List", "Bill of Lading / Airway Bill", "Certificate of Origin", "Import/Export Permits", "Insurance Certificate", "Customs Declaration Form"].map((doc) => (
                  <div key={doc} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-all hover:border-primary/20 hover:shadow-sm"><FileCheck className="h-4 w-4 shrink-0 text-primary" /><span className="text-sm text-foreground">{doc}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-[#2d8bb8] py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Get Started?</h2>
          <p className="mt-2 text-base text-white/75">Contact us for a free consultation.</p>
          <Link href="/contact" className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-95">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
