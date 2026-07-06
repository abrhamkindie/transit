import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  Globe,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import ImageWithSkeleton from "@/components/image-with-skeleton";
import SectionCta from "@/components/section-cta";

const stats = [
  { v: "15+", l: "Years Experience" },
  { v: "500+", l: "Happy Clients" },
  { v: "5K+", l: "Shipments Cleared" },
  { v: "98%", l: "On-Time Delivery" },
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

const team = [
  {
    name: "Dawit Bekele",
    role: "CEO & Founder",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Selam Girma",
    role: "Head of Customs Operations",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Yonas Tesfaye",
    role: "Lead Logistics Coordinator",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Ruth Alemu",
    role: "Operations Manager",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Biniam Fikru",
    role: "Compliance & Documentation Lead",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Meron Assefa",
    role: "Client Relations Manager",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Minimal, spacious intro — centered eyebrow + headline */}
      <section className="bg-white pt-20 sm:pt-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              About Us
            </span>
            <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Customs expertise, built for{" "}
              <span className="text-primary">East African trade.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
              A dedicated team of customs and logistics professionals moving your
              business forward — from documentation and duty calculation to
              final-mile transit.
            </p>
          </ScrollReveal>
        </div>

        {/* Services bento — three equal-sized tiles with zoom-out hover effect */}
        <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ScrollReveal variant="left">
              <div className="group relative h-72 overflow-hidden rounded-2xl sm:h-80">
                <ImageWithSkeleton
                  src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=700&q=85"
                  alt="Customs officers inspecting containers at a port terminal"
                  wrapperClassName="h-full w-full"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-75" />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-black/70">
                  Customs Clearance
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="up" threshold={0.1}>
              <div className="group relative h-72 overflow-hidden rounded-2xl sm:h-80">
                <ImageWithSkeleton
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="Logistics coordinator reviewing shipment manifest on a tablet in a warehouse"
                  wrapperClassName="h-full w-full"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-75" />
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 shadow-lg transition-all duration-300 group-hover:scale-105">
                  <span className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/12.jpg"
                      alt=""
                      className="h-5 w-5 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt=""
                      className="h-5 w-5 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt=""
                      className="h-5 w-5 rounded-full border-2 border-white object-cover"
                    />
                  </span>
                  <span className="text-xs font-bold text-foreground">500+ Shipments</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right">
              <div className="group relative h-72 overflow-hidden rounded-2xl sm:h-80">
                <ImageWithSkeleton
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=700&q=85"
                  alt="Road freight truck being loaded for cross-border transit"
                  wrapperClassName="h-full w-full"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-75" />
                <span className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-black/70">
                  Live GPS Tracking
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mission statement */}
        <ScrollReveal>
          <p className="mx-auto mt-14 max-w-3xl px-4 text-center text-xl leading-relaxed text-foreground sm:px-6 sm:text-2xl">
            We are on a mission to help businesses reach their{" "}
            <span className="font-bold">full potential</span> through smarter,
            more <span className="font-bold">efficient customs and logistics</span>{" "}
            across every corridor we serve.
          </p>
        </ScrollReveal>

        {/* Thin-rule stat row */}
        <ScrollReveal variant="up">
          <div className="mx-auto mb-20 mt-14 grid max-w-5xl grid-cols-2 border-y border-border sm:grid-cols-4 sm:mb-28">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`px-4 py-8 text-center ${
                  i !== 0 ? "border-l border-border" : ""
                } ${i === 2 ? "border-t border-border sm:border-t-0" : ""} ${
                  i === 3 ? "border-t border-border sm:border-t-0" : ""
                }`}
              >
                <div className="text-3xl font-bold text-foreground sm:text-4xl">{s.v}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wide text-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Story — simple two-column, no card chrome, thin top rule as separator */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 border-t border-border pt-16 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
            <ScrollReveal variant="left">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
                Our Story
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Simplifying global trade for over a decade
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="right">
              <p className="text-base leading-relaxed text-muted">
                NexTransit was founded to take the complexity out of
                international customs clearance. What started as a small
                brokerage has grown into a trusted partner for over 500
                businesses across East Africa and beyond.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                From documentation and duty calculation to final-mile transit,
                we handle the details so your cargo keeps moving.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-dark transition-all hover:gap-3"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision — story blocks with floating stat / quote cards, future-of-shipping framing */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Block A: Mission — where the company is headed */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal variant="left">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
                Our Mission
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Built for what&apos;s next in shipping
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                NexTransit is investing in real-time visibility and digital
                documentation so clients always know where a shipment stands —
                and where regional trade is headed next.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <Clock className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-3 text-sm font-bold text-foreground">Faster Clearance</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Real-time status so teams can act quickly on changing conditions.
                  </p>
                </div>
                <div>
                  <TrendingUp className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-3 text-sm font-bold text-foreground">Regional Growth</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Expanding corridor coverage while keeping delivery reliable.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right" className="relative">
              <div className="overflow-hidden rounded-2xl">
                <ImageWithSkeleton
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=85"
                  alt="Warehouse aisle representing NexTransit's expanding logistics network"
                  wrapperClassName="aspect-[4/3] w-full"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute right-4 top-4 rounded-xl border border-border-light bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:right-6 sm:top-6">
                <div className="text-xl font-bold text-foreground">10x</div>
                <p className="text-[11px] text-muted">Faster clearance</p>
              </div>
              <div className="absolute bottom-4 right-4 rounded-xl border border-border-light bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-8 sm:right-10">
                <div className="text-xl font-bold text-foreground">95%</div>
                <p className="text-[11px] text-muted">On-time delivery</p>
              </div>
            </ScrollReveal>
          </div>

          {/* dotted divider */}
          <div className="my-16 border-t border-dashed border-border sm:my-20" />

          {/* Block B: Vision — reversed layout, image left */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal variant="left" className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl">
                <ImageWithSkeleton
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=85"
                  alt="Shipping containers stacked at a port, representing NexTransit's trade network"
                  wrapperClassName="aspect-[4/3] w-full"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 max-w-[240px] rounded-xl border border-border-light bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6">
                <p className="text-sm italic leading-relaxed text-foreground">
                  &ldquo;NexTransit brings results, better efficiency, and consistent
                  performance we can rely on.&rdquo;
                </p>
                <p className="mt-2 text-xs font-bold text-primary-dark">NexTransit Client</p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right" className="order-1 lg:order-2">
              <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-dark">
                Vision
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                The next decade of regional trade
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                We&apos;re building toward a future where every business in East
                Africa can move cargo across borders as easily as moving it
                across town.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Deep Corridor Expertise</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">
                      Built on real customs and transit experience across every major route.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Consistent Performance</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">
                      Delivering stable clearance times with clear, measurable impact.
                    </p>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values — flat, minimal treatment */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              What we stand for
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} variant="up" threshold={0.05}>
                <div
                  className="border-t border-foreground/15 pt-6"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <v.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-5 text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team — notched-corner photo cards */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Meet the NexTransit people
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-muted">
              We deliver reliable customs and logistics solutions for cargo
              moving across East Africa and beyond.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} variant="up" threshold={0.05}>
                <div
                  className="rounded-2xl border border-border bg-white p-5"
                  style={{ transitionDelay: `${(i % 3) * 60}ms` }}
                >
                  <h3 className="text-base font-bold text-foreground">{member.name}</h3>
                  <p className="mt-0.5 text-sm text-muted">{member.role}</p>

                  <div className="relative mt-5">
                    <div
                      className="absolute -left-3 -top-3 h-full w-full rounded-md bg-primary-50"
                      aria-hidden
                    />
                    <div
                      className="relative h-56 w-full overflow-hidden bg-surface"
                      style={{
                        clipPath:
                          "polygon(0 0, 86% 0, 100% 16%, 100% 100%, 0 100%)",
                      }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale-[15%]"
                      />
                    </div>
                  </div>
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
