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
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Transit Services (T1/T2/TIR)</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">Complete customs transit procedure management.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">What Is Customs Transit?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">Customs transit allows goods to move across borders under supervision without paying duties at each border. We act as your authorized agent, handling all documentation and guarantees.</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600"><ShieldCheck className="h-4 w-4" /> No duties paid at each border</div>
            </div>
            <div className="space-y-3">
              {transitTypes.map((t) => (
                <div key={t.title} className="rounded-lg border border-border bg-surface p-4 transition-all hover:border-primary/30">
                  <div className="flex gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary-50 text-primary"><t.icon className="h-4 w-4" /></div><div><h3 className="text-sm font-semibold text-foreground">{t.title}</h3><p className="mt-1 text-sm text-muted">{t.desc}</p><p className="mt-1 text-xs font-medium text-primary">Best for: {t.used}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Process</h2>
            <p className="mt-2 text-sm text-muted">From document collection to final discharge.</p>
          </div>
          <div className="mt-10 space-y-6">
            {[{ s: "01", t: "Client Submits Documents", d: "You provide commercial invoice, packing list, bill of lading, and permits." }, { s: "02", t: "Documentation Prepared", d: "We prepare transit declarations and arrange financial guarantees." }, { s: "03", t: "Customs Submission", d: "We submit transit declarations and obtain movement reference numbers." }, { s: "04", t: "Real-Time Monitoring", d: "We monitor the transit from departure to destination." }, { s: "05", t: "Transit Discharged", d: "Transit is terminated and guarantees are released." }].map((p, i) => (
              <div key={p.s} className="relative flex gap-5">
                {i < 4 && <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-primary-100" />}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">{p.s}</div>
                <div className="flex-1 rounded-lg border border-border bg-white p-4"><h3 className="text-sm font-semibold text-foreground">{p.t}</h3><p className="mt-1 text-sm text-muted">{p.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Need Transit Documentation?</h2>
          <p className="mt-2 text-sm text-muted">Let our team handle your transit procedures.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Get Expert Help <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
