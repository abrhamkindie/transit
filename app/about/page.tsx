import Link from "next/link";
import { Target, Eye, ShieldCheck, Globe, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary border border-primary/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">About Us</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">About NexTransit</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">We are a dedicated team of customs clearance and logistics professionals committed to moving your business forward.</p>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Simplifying Global Trade for <span className="text-primary">15+ Years</span></h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">NexTransit was founded to take the complexity out of international customs clearance. What started as a small brokerage has grown into a trusted partner for over 500 businesses across East Africa and beyond.</p>
              <div className="mt-8 grid grid-cols-3 gap-6">{[{ v: "15+", l: "Years Experience" }, { v: "500+", l: "Happy Clients" }, { v: "5K+", l: "Shipments" }].map((s) => (<div key={s.l} className="text-center p-4 rounded-xl bg-surface border border-border"><div className="text-2xl font-bold text-primary">{s.v}</div><div className="mt-0.5 text-xs text-muted">{s.l}</div></div>))}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-lg"><Target className="h-7 w-7 text-white/80" /><h3 className="mt-3 text-base font-bold">Our Mission</h3><p className="mt-1.5 text-sm text-white/70">To provide seamless customs solutions that empower businesses.</p></div>
                <div className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md"><Eye className="h-7 w-7 text-primary" /><h3 className="mt-3 text-base font-bold text-foreground">Our Vision</h3><p className="mt-1.5 text-sm text-muted">To be the most trusted customs partner in East Africa.</p></div>
              </div>
              <div className="pt-8"><div className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md h-full"><ShieldCheck className="h-7 w-7 text-primary" /><h3 className="mt-3 text-base font-bold text-foreground">Our Commitment</h3><p className="mt-1.5 text-sm text-muted">Every shipment handled with the highest standards of integrity.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-gradient-alt py-16 sm:py-20 overflow-hidden">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">Our Values</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">What We Stand For</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[{ icon: ShieldCheck, title: "Integrity", desc: "Complete transparency in all customs documentation and dealings." }, { icon: Globe, title: "Global Expertise", desc: "Deep knowledge of regulations across Africa, Middle East, Europe, and Asia." }, { icon: Award, title: "Excellence", desc: "Continuous improvement through technology and ongoing team training." }].map((v) => (
              <div key={v.title} className="group rounded-xl border border-border bg-white p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-4 text-base font-semibold text-foreground transition-colors group-hover:text-primary">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{v.desc}</p>
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Want to Learn More?</h2>
          <p className="mt-2 text-base text-white/75">Get in touch with our team for a free consultation.</p>
          <Link href="/contact" className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-95">Contact Us <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
