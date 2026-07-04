import Link from "next/link";
import { ClipboardCheck, FileText, Truck, Map, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

const transitTypes = [
  { title: "T1 Transit", desc: "For movement of non-EU goods through EU customs territory, suspending duties until final destination.", used: "Goods entering the EU", icon: FileText },
  { title: "T2 Transit", desc: "For movement of EU goods within EU customs territory through non-EU countries.", used: "EU-origin goods", icon: FileText },
  { title: "TIR Carnet", desc: "International transit for road transport across multiple borders with guarantee chain.", used: "Cross-border road transport", icon: Truck },
  { title: "ATA Carnet", desc: "Temporary admission for samples, equipment, or trade show goods.", used: "Temporary imports", icon: Map },
];

const processSteps = [
  { step: "01", title: "Client Submits Documents", desc: "You provide commercial invoice, packing list, bill of lading, and permits." },
  { step: "02", title: "Documentation Prepared", desc: "We prepare transit declarations and arrange financial guarantees." },
  { step: "03", title: "Customs Submission", desc: "We submit transit declarations and obtain movement reference numbers." },
  { step: "04", title: "Real-Time Monitoring", desc: "We monitor the transit from departure to destination." },
  { step: "05", title: "Transit Discharged", desc: "Transit is terminated and guarantees are released." },
];

export default function TransitPage() {
  return (
    <>
      <section className="bg-dark-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Transit Services (T1/T2/TIR)</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">Complete customs transit procedure management with documentation, guarantees, and monitoring.</p>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">What Is Customs Transit?</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/40">Customs transit allows goods to move across borders under supervision without paying duties at each border crossing. We act as your authorized transit agent, handling all documentation and guarantees.</p>
              <div className="mt-4 flex gap-4 text-xs text-white/50"><ShieldCheck className="h-4 w-4 text-emerald-400" /> No duties paid at each border</div>
            </div>
            <div className="space-y-3">
              {transitTypes.map((t) => (
                <div key={t.title} className="rounded-lg border border-dark-border bg-dark-bg p-4 transition-all hover:border-primary/30">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary/10 text-primary-light"><t.icon className="h-4 w-4" /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{t.title}</h3>
                      <p className="mt-1 text-xs text-white/40">{t.desc}</p>
                      <p className="mt-1 text-[11px] font-medium text-primary-light">Best for: {t.used}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-bg py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Our Process</h2>
            <p className="mt-2 text-sm text-white/40">From document collection to final discharge.</p>
          </div>
          <div className="mt-10 space-y-6">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative flex gap-5">
                {i < processSteps.length - 1 && <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-primary/20" />}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">{s.step}</div>
                <div className="flex-1 rounded-lg border border-dark-border bg-dark-surface p-4">
                  <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-xs text-white/40">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Need Transit Documentation?</h2>
          <p className="mt-2 text-sm text-white/60">Let our team handle your transit procedures.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-white px-5 text-xs font-medium text-primary transition-all hover:bg-white/90 active:scale-95">Get Expert Help <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
