import Link from "next/link";
import { FileCheck, FileSpreadsheet, Search, Calculator, ShieldCheck, Clock, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, title: "Document Review", desc: "We review all shipping documents for completeness and accuracy." },
  { icon: Calculator, title: "Duty Assessment", desc: "Our team calculates duties, taxes, and fees using correct HS codes." },
  { icon: FileSpreadsheet, title: "Declaration Filing", desc: "We prepare and submit all customs declarations electronically." },
  { icon: ShieldCheck, title: "Customs Inspection", desc: "If selected, we coordinate with officials and manage the process." },
  { icon: Clock, title: "Release & Delivery", desc: "Once cleared, we arrange release and transportation." },
];

const benefits = ["Eliminate risk of penalties", "Faster clearance times", "Cost optimization through accurate HS codes", "Complete transparency with real-time updates", "One point of contact", "Up-to-date regulatory knowledge"];

export default function CustomsClearancePage() {
  return (
    <>
      <section className="bg-dark-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Customs Clearance Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">Complete import and export customs clearance management from document preparation to final release.</p>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">How We Clear Your Cargo</h2>
            <p className="mt-2 text-sm text-white/40">A streamlined process that ensures fast and compliant clearance every time.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary-light"><step.icon className="h-7 w-7" /></div>
                <div className="mt-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary-light">{i + 1}</div>
                <h3 className="mt-1 text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-xs text-white/40">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Why Professional Clearance Matters</h2>
              <p className="mt-2 text-sm text-white/40">Incorrect declarations can result in costly delays, penalties, and seizure of goods.</p>
              <div className="mt-6 space-y-2.5">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-xs text-white/50">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-dark-border bg-dark-surface p-6">
              <h3 className="text-sm font-semibold text-white">Documents We Handle</h3>
              <div className="mt-4 space-y-2">
                {["Commercial Invoice", "Packing List", "Bill of Lading / Airway Bill", "Certificate of Origin", "Import/Export Permits", "Insurance Certificate", "Customs Declaration Form"].map((doc) => (
                  <div key={doc} className="flex items-center gap-3 rounded-md border border-dark-border bg-dark-bg px-4 py-2.5">
                    <FileCheck className="h-4 w-4 text-primary-light" />
                    <span className="text-xs text-white/60">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Ready to Get Started?</h2>
          <p className="mt-2 text-sm text-white/60">Contact us for a free consultation.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-white px-5 text-xs font-medium text-primary transition-all hover:bg-white/90 active:scale-95">Request a Quote <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
