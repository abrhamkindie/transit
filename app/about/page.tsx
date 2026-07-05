import { Target, Eye, ShieldCheck, Globe, Award } from "lucide-react";
import PageHero from "@/components/page-hero";
import ScrollReveal from "@/components/scroll-reveal";
import ImageWithSkeleton from "@/components/image-with-skeleton";
import SectionCta from "@/components/section-cta";

const stats = [
  { v: "15+", l: "Years Experience" },
  { v: "500+", l: "Happy Clients" },
  { v: "5K+", l: "Shipments Cleared" },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide seamless customs solutions that empower businesses to trade across borders with confidence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the most trusted customs and logistics partner in East Africa and the wider region.",
  },
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    desc: "Every shipment handled with the highest standards of integrity, precision, and accountability.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Complete transparency in all customs documentation and dealings, on every shipment.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    desc: "Deep knowledge of regulations across Africa, the Middle East, Europe, and Asia.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Continuous improvement through technology and ongoing team training.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={
          <>
            Customs expertise, built for{" "}
            <span className="text-primary">East African trade.</span>
          </>
        }
        subtitle="A dedicated team of customs and logistics professionals moving your business forward."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
        imageAlt="NexTransit logistics team coordinating a shipment"
      />

      {/* Story / intro */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal variant="left">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
                <span className="h-px w-8 bg-primary" />
                Our Story
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Simplifying global trade for over a decade
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                NexTransit was founded to take the complexity out of
                international customs clearance. What started as a small
                brokerage has grown into a trusted partner for over 500
                businesses across East Africa and beyond.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                From documentation and duty calculation to final-mile transit,
                we handle the details so your cargo keeps moving.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.l}
                    className="rounded-3xl border border-border bg-surface p-5 text-center shadow-[var(--shadow-elevated)]"
                  >
                    <div className="text-3xl font-bold text-primary sm:text-4xl">
                      {s.v}
                    </div>
                    <div className="mt-2 text-xs font-medium text-muted">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right">
              <ImageWithSkeleton
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85"
                alt="NexTransit customs and logistics team collaborating"
                wrapperClassName="rounded-3xl border border-border-light shadow-[var(--shadow-elevated)]"
                className="h-full w-full object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Commitment */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              What Drives Us
            </span>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Purpose behind every clearance
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} variant="up" threshold={0.05}>
                <div
                  className="group h-full rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              Our Values
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              What we stand for
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} variant="scale" threshold={0.05}>
                <div
                  className="group h-full rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </>
  );
}
