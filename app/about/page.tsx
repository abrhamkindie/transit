import Link from "next/link";
import { Target, Eye, ShieldCheck, Globe, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">About NexTransit</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">We are a dedicated team of customs clearance and logistics professionals.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Simplifying Global Trade for <span className="text-primary">15+ Years</span></h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">NexTransit was founded to take the complexity out of international customs clearance. What started as a small brokerage has grown into a trusted partner for over 500 businesses.</p>
              <div className="mt-6 grid grid-cols-3 gap-4">{[{ v: "15+", l: "Years" }, { v: "500+", l: "Clients" }, { v: "5K+", l: "Shipments" }].map((s) => (<div key={s.l} className="text-center"><div className="text-xl font-bold text-primary">{s.v}</div><div className="mt-0.5 text-xs text-muted">{s.l}</div></div>))}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-lg bg-gradient-to-br from-primary to-primary-dark p-5 text-white"><Target className="h-6 w-6 text-white/80" /><h3 className="mt-2 text-sm font-bold">Our Mission</h3><p className="mt-1 text-xs text-white/70">To provide seamless customs solutions that empower businesses.</p></div>
                <div className="rounded-lg border border-border bg-surface p-5"><Eye className="h-6 w-6 text-primary" /><h3 className="mt-2 text-sm font-bold text-foreground">Our Vision</h3><p className="mt-1 text-xs text-muted">To be the most trusted customs partner in East Africa.</p></div>
              </div>
              <div className="pt-6"><div className="rounded-lg border border-border bg-surface p-5"><ShieldCheck className="h-6 w-6 text-primary" /><h3 className="mt-2 text-sm font-bold text-foreground">Our Commitment</h3><p className="mt-1 text-xs text-muted">Every shipment handled with the highest standards.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center"><h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Values</h2></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[{ icon: ShieldCheck, title: "Integrity", desc: "Complete transparency in all customs documentation." }, { icon: Globe, title: "Global Expertise", desc: "Deep knowledge of regulations across Africa, Middle East, Europe, and Asia." }, { icon: Award, title: "Excellence", desc: "Continuous improvement through technology and training." }].map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-white p-5 text-center transition-all hover:border-primary/30"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary"><v.icon className="h-5 w-5" /></div><h3 className="mt-3 text-sm font-semibold text-foreground">{v.title}</h3><p className="mt-1 text-xs text-muted">{v.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Want to Learn More?</h2>
          <p className="mt-2 text-sm text-muted">Get in touch with our team.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95">Contact Us <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
