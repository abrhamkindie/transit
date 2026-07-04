import Link from "next/link";
import { ClipboardCheck, FileText, Truck, Map, ShieldCheck, ArrowRight } from "lucide-react";

const transitTypes = [
  { title: "T1 Transit", desc: "Non-EU goods moving through EU customs territory.", used: "Goods entering the EU", icon: FileText },
  { title: "T2 Transit", desc: "EU goods moving within EU through non-EU countries.", used: "EU-origin goods", icon: FileText },
  { title: "TIR Carnet", desc: "International road transport across multiple borders.", used: "Cross-border road transport", icon: Truck },
  { title: "ATA Carnet", desc: "Temporary admission for samples or equipment.", used: "Temporary imports", icon: Map },
];

export default function TransitPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary border border-primary/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">Service</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Transit Services (T1/T2/TIR)</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">Complete customs transit procedure management.</p>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary-50 border border-primary-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Overview</span>
              <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">What Is Customs Transit?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">Customs transit allows goods to move across borders under supervision without paying duties at each border. We act as your authorized agent, handling all documentation and financial guarantees.</p>
              <div className="mt-4 flex items-center gap-2.5 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg px-4 py-3 border border-emerald-100"><ShieldCheck className="h-5 w-5" /> No duties paid at each border crossing</div>
            </div>
            <div className="space-y-4">
              {transitTypes.map((t) => (
                <div key={t.title} className="group rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white"><t.icon className="h-5 w-5" /></div><div><h3 className="text-sm font-semibold text-foreground">{t.title}</h3><p className="mt-1 text-sm text-muted">{t.desc}</p><p className="mt-1.5 text-xs font-medium text-primary">Best for: {t.used}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-gradient-alt py-16 sm:py-20 overflow-hidden">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">Our Process</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">How It Works</h2>
            <p className="mt-2 text-sm text-muted">From document collection to final discharge.</p>
          </div>
          <div className="mt-12 space-y-6">
            {[{ s: "01", t: "Client Submits Documents", d: "You provide commercial invoice, packing list, bill of lading, and permits." }, { s: "02", t: "Documentation Prepared", d: "We prepare transit declarations and arrange financial guarantees." }, { s: "03", t: "Customs Submission", d: "We submit transit declarations and obtain movement reference numbers." }, { s: "04", t: "Real-Time Monitoring", d: "We monitor the transit from departure to destination." }, { s: "05", t: "Transit Discharged", d: "Transit is terminated and guarantees are released." }].map((p, i) => (
              <div key={p.s} className="relative flex gap-5">
                {i < 4 && <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md">{p.s}</div>
                <div className="flex-1 rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:shadow-md"><h3 className="text-sm font-semibold text-foreground">{p.t}</h3><p className="mt-1 text-sm text-muted">{p.d}</p></div>
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Need Transit Documentation?</h2>
          <p className="mt-2 text-base text-white/75">Let our team handle your transit procedures.</p>
          <Link href="/contact" className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-95">Get Expert Help <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
