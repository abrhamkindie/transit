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
      {/* Hero Section */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            Service
          </span>
          <h1 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Customs Clearance Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
            Complete import and export customs clearance management.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
              Our Process
            </span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              How We Clear Your Cargo
            </h2>
            <p className="mt-2 text-sm text-muted">
              A streamlined process ensuring fast and compliant clearance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 mx-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-primary-100 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark shadow-sm">
                Why It Matters
              </span>
              <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                Why Professional Clearance Matters
              </h2>
              <p className="mt-2 text-sm text-muted">
                Incorrect declarations can cause costly delays and penalties.
              </p>
              <div className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 rounded-xl bg-white p-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-foreground">Documents We Handle</h3>
              <div className="mt-5 space-y-3">
                {[
                  "Commercial Invoice",
                  "Packing List",
                  "Bill of Lading / Airway Bill",
                  "Certificate of Origin",
                  "Import/Export Permits",
                  "Insurance Certificate",
                  "Customs Declaration Form",
                ].map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-all duration-200 hover:border-primary-100 hover:bg-primary-50"
                  >
                    <FileCheck className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-darker py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Get Started?</h2>
          <p className="mt-3 text-base text-white/75">Contact us for a free consultation.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-95"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
