import Link from "next/link";
import { Target, Eye, ShieldCheck, Globe, Award, ArrowRight } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Complete transparency in all customs documentation and financial transactions." },
  { icon: Globe, title: "Global Expertise", desc: "Deep knowledge of customs regulations across Africa, Middle East, Europe, and Asia." },
  { icon: Award, title: "Excellence", desc: "Continuous improvement through technology and training." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-dark-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">About NexTransit</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">We are a dedicated team of customs clearance and logistics professionals committed to making cross-border trade simple and efficient.</p>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Simplifying Global Trade for <span className="text-primary-light">15+ Years</span></h2>
              <p className="mt-3 text-sm leading-relaxed text-white/40">NexTransit was founded to take the complexity out of international customs clearance. What started as a small brokerage firm has grown into a trusted partner for over 500 businesses.</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[{ value: "15+", label: "Years" }, { value: "500+", label: "Clients" }, { value: "5K+", label: "Shipments" }].map((s) => (
                  <div key={s.label} className="text-center"><div className="text-xl font-bold text-primary-light">{s.value}</div><div className="mt-0.5 text-xs text-white/40">{s.label}</div></div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-lg bg-gradient-to-br from-primary to-primary-dark p-5 text-white">
                  <Target className="h-6 w-6 text-white/80" />
                  <h3 className="mt-2 text-sm font-bold">Our Mission</h3>
                  <p className="mt-1 text-xs text-white/60">To provide seamless customs solutions that empower businesses to trade globally.</p>
                </div>
                <div className="rounded-lg border border-dark-border bg-dark-bg p-5">
                  <Eye className="h-6 w-6 text-primary-light" />
                  <h3 className="mt-2 text-sm font-bold text-white">Our Vision</h3>
                  <p className="mt-1 text-xs text-white/40">To be the most trusted customs partner in East Africa.</p>
                </div>
              </div>
              <div className="pt-6">
                <div className="rounded-lg border border-dark-border bg-dark-bg p-5">
                  <ShieldCheck className="h-6 w-6 text-primary-light" />
                  <h3 className="mt-2 text-sm font-bold text-white">Our Commitment</h3>
                  <p className="mt-1 text-xs text-white/40">Every shipment handled with the highest standards of compliance and care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Our Values</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-dark-border bg-dark-surface p-5 text-center transition-all hover:border-primary/30">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-light"><v.icon className="h-5 w-5" /></div>
                <h3 className="mt-3 text-sm font-semibold text-white">{v.title}</h3>
                <p className="mt-1 text-xs text-white/40">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Want to Learn More?</h2>
          <p className="mt-2 text-sm text-white/60">Get in touch with our team.</p>
          <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-white px-5 text-xs font-medium text-primary transition-all hover:bg-white/90 active:scale-95">Contact Us <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </>
  );
}
