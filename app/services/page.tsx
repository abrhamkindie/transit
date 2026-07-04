import Link from "next/link";
import {
  FileCheck,
  ClipboardCheck,
  Ship,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Clock,
  Globe,
  Users,
  BarChart3,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Customs Clearance",
    desc: "Import & export declarations, duty calculation, HS classification, and full regulatory compliance.",
    href: "/services/customs-clearance",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    stats: [
      { value: "24-48h", label: "Clearance" },
      { value: "98%", label: "Approval" },
    ],
    tags: ["Import/Export", "HS Codes", "Duties", "Compliance"],
  },
  {
    icon: ClipboardCheck,
    title: "Transit Services",
    desc: "T1/T2 transit, TIR & ATA carnets, financial guarantees, and real-time border monitoring.",
    href: "/services/transit",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    stats: [
      { value: "50+", label: "Corridors" },
      { value: "3K+", label: "Transits/yr" },
    ],
    tags: ["T1/T2", "TIR Carnet", "ATA", "Monitoring"],
  },
  {
    icon: Ship,
    title: "Freight & Logistics",
    desc: "Ocean, air, road & rail freight with warehousing, distribution, and end-to-end visibility.",
    href: "/services/freight-logistics",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    stats: [
      { value: "150+", label: "Countries" },
      { value: "10K+", label: "Shipments" },
    ],
    tags: ["Ocean", "Air", "Road", "Warehousing"],
  },
];

const steps = [
  { num: "01", title: "Consult", desc: "Tell us about your shipment — cargo type, origin, destination, timeline." },
  { num: "02", title: "Plan", desc: "We design the optimal route, mode, and compliance strategy." },
  { num: "03", title: "Execute", desc: "Documents filed, cargo moving, real-time tracking active." },
  { num: "04", title: "Deliver", desc: "Customs cleared, cargo released, delivered to your door." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — Dark full-bleed with oversized type */}
      <section className="relative bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link href="/" className="transition-colors hover:text-white/70">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-primary">Services</span>
          </nav>

          <h1 className="mt-8 text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            We handle{" "}
            <span className="text-primary">everything</span>
            <br />
            between origin
            <br />
            and destination.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-white/50">
            Customs clearance, transit documentation, and freight forwarding —
            unified under one roof with end-to-end visibility.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
            >
              Start a Shipment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-6 border-l border-white/10 pl-6">
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <p className="text-[11px] text-white/40">Years</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <p className="text-[11px] text-white/40">Shipments</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">150+</div>
                <p className="text-[11px] text-white/40">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — Full-bleed image cards */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">What We Do</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Three pillars of expertise
              </h2>
            </div>
            <Link
              href="/contact"
              className="hidden text-sm font-semibold text-primary transition-all hover:gap-3 sm:flex items-center gap-2"
            >
              Get a custom solution <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative block overflow-hidden rounded-3xl"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
                </div>

                {/* Content */}
                <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
                  <div className="max-w-xl">
                    {/* Icon + number */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-bold text-white/30">0{i + 1}</span>
                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/60">
                      {service.desc}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right side — stats + CTA */}
                  <div className="flex items-center gap-8 lg:flex-col lg:items-end lg:gap-6">
                    {/* Stats */}
                    <div className="flex gap-6">
                      {service.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/40">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Arrow CTA */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process — Horizontal timeline */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">How It Works</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Four steps. Zero hassle.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              From first consultation to final delivery — one streamlined process.
            </p>
          </div>

          {/* Horizontal steps */}
          <div className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.num} className="group relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-1/2 bg-gradient-to-r from-primary/30 to-primary/10 lg:block" />
                )}
                {i > 0 && (
                  <div className="absolute left-0 top-8 hidden h-0.5 w-1/2 bg-gradient-to-r from-primary/10 to-primary/30 lg:block" />
                )}

                <div className="relative flex flex-col items-center text-center px-6 py-4">
                  {/* Number circle */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-primary/20 text-lg font-bold text-foreground shadow-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                    {step.num}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
            >
              Start Your Shipment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us — Split dark section */}
      <section className="bg-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Why NexTransit</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Built for businesses{" "}
                that move goods across borders.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/50">
                We&apos;re not a generalist. Every system, process, and team member
                is specialized in cross-border logistics and customs compliance.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { icon: ShieldCheck, title: "Licensed & Certified", desc: "Fully licensed customs agents across all major trade corridors." },
                  { icon: Clock, title: "Fast Turnaround", desc: "Most shipments cleared within 24-48 hours. Express options available." },
                  { icon: Globe, title: "Global Network", desc: "Partner agents in 150+ countries for seamless operations." },
                  { icon: Users, title: "Dedicated Account Manager", desc: "One point of contact — no queues, no runaround." },
                  { icon: BarChart3, title: "Cost Optimization", desc: "Accurate HS codes and route planning that minimize your total cost." },
                ].map((item) => (
                  <div key={item.title} className="group flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — contact card */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">Get a free consultation</h3>
                <p className="mt-2 text-sm text-white/50">
                  Tell us about your shipment and we&apos;ll design the optimal solution.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">Call us directly</p>
                      <p className="text-sm font-semibold text-white">+255 xxx xxx xxx</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">Visit our office</p>
                      <p className="text-sm font-semibold text-white">Dar es Salaam, Tanzania</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
                >
                  Send Us a Message
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
