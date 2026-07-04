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
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Customs Clearance Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">Complete import and export customs clearance management.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">How We Clear Your Cargo</h2>
            <p className="mt-2 text-sm text-muted">A streamlined process ensuring fast and compliant clearance.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary"><step.icon className="h-7 w-7" /></div>
                <div className="mt-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary">{i + 1}</div>
                <h3 className="mt-1 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Why Professional Clearance Matters</h2>
              <p className="mt-2 text-sm text-muted">Incorrect declarations can cause delays and penalties.</p>
              <div className="mt-6 space-y-2.5">{benefits.map((b) => <div key={b} className="flex items-start gap-2.5"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /><span className="text-sm text-muted">{b}</span></div>)}</div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">Documents We Handle</h3>
              <div className="mt-4 space-y-2">
                {["Commercial Invoice", "Packing List", "Bill of Lading / Airway Bill", "Certificate of Origin", "Import/Export Permits", "Insurance Certificate", "Customs Declaration Form"].map((doc) => (
                  <div key={doc} className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-2.5"><FileCheck className="h-4 w-4 text-primary" /><span className="text-sm text-foreground">{doc}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Ready to Get Started?</h2>
          <p className="mt-2 text-sm text-muted">Contact us for a free consultation.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Request a Quote <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
