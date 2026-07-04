import Link from "next/link";
import {
  FileCheck,
  FileSpreadsheet,
  Search,
  Calculator,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Package,
  HeadphonesIcon,
  BarChart3,
} from "lucide-react";

const services = [
  { icon: FileCheck, title: "Import Clearance", desc: "Full customs declaration, duty calculation, and authority submission for import shipments." },
  { icon: FileSpreadsheet, title: "Export Clearance", desc: "Export documentation, compliance checks, and origin certificate processing." },
  { icon: Search, title: "HS Code Classification", desc: "Accurate tariff classification to ensure correct duty rates and regulatory compliance." },
  { icon: Calculator, title: "Duty & Tax Calculation", desc: "Precise duty assessments using current tariff rates and trade agreement preferences." },
  { icon: ShieldCheck, title: "Inspection Management", desc: "Coordination with customs officials when cargo is selected for examination." },
  { icon: Clock, title: "Express Clearance", desc: "Priority processing for time-sensitive shipments and urgent cargo releases." },
];

const process = [
  { step: "01", title: "Document Submission", desc: "Share your shipping documents — invoice, packing list, bill of lading, and permits." },
  { step: "02", title: "Review & Classification", desc: "Our team reviews documents and assigns correct HS codes for duty assessment." },
  { step: "03", title: "Declaration Filing", desc: "We prepare and submit customs declarations to the relevant authority." },
  { step: "04", title: "Clearance & Release", desc: "Once approved, we coordinate cargo release and arrange final delivery." },
];

const benefits = [
  "Eliminate risk of penalties and fines",
  "Faster clearance times — average 24-48 hours",
  "Cost optimization through accurate HS codes",
  "Complete transparency at every stage",
  "One dedicated point of contact",
  "Up-to-date regulatory knowledge across corridors",
];

const documents = [
  "Commercial Invoice",
  "Packing List",
  "Bill of Lading / Airway Bill",
  "Certificate of Origin",
  "Import/Export Permits",
  "Insurance Certificate",
  "Customs Declaration Form",
];

export default function CustomsClearancePage() {
  return (
    <>
      {/* Hero Section — Logix-style split layout */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted">
                <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-medium text-primary">Customs Clearance</span>
              </nav>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Customs{" "}
                <span className="text-gradient">Clearance</span>{" "}
                Services
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-8 text-muted">
                Complete import and export customs clearance management. From document
                review to cargo release, we handle every step with precision.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tracking"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-border bg-white px-7 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  Track Shipment
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mt-10 flex items-center gap-8 border-t border-border pt-8">
                <div>
                  <div className="text-3xl font-bold text-foreground">24-48h</div>
                  <p className="mt-1 text-xs text-muted">Avg. Clearance</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-foreground">98%</div>
                  <p className="mt-1 text-xs text-muted">First-Time Approval</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-foreground">5K+</div>
                  <p className="mt-1 text-xs text-muted">Shipments Cleared</p>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-surface">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                  alt="Customs clearance operations"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">15+</div>
                    <p className="text-xs text-muted">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid — Logix-style icon cards */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                Our Services
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Comprehensive clearance solutions
              </h2>
              <p className="mt-3 text-base text-muted">
                End-to-end customs services designed to keep your cargo moving.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3 sm:flex"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section — Logix-style numbered steps */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                How It Works
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Our clearance process
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                A streamlined four-step process ensuring fast and compliant clearance at every stage.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
              >
                Start a Shipment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="group flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-foreground text-lg font-bold text-white transition-all duration-300 group-hover:bg-primary">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters — Logix-style image + features */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
                  alt="Professional customs clearance"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating benefits card */}
              <div className="absolute -right-4 -top-4 rounded-2xl border border-border bg-white p-5 shadow-xl sm:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">98%</div>
                    <p className="text-xs text-muted">Approval Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Why professional clearance matters
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Incorrect declarations can cause costly delays, penalties, and seized cargo.
                Our team ensures every submission is accurate and compliant.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <HeadphonesIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Need help with your shipment?</p>
                  <p className="mt-0.5 text-xs text-muted">Talk to our customs experts today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                Documentation
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Documents we handle
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                We manage the complete documentation required for smooth customs clearance,
                ensuring nothing is missed before submission.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {documents.map((doc) => (
                <div
                  key={doc}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm transition-all duration-200 hover:border-primary/20 hover:bg-primary-50 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                    <FileCheck className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — Logix-style bold CTA with image */}
      <section className="bg-foreground py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Get started with expert customs solutions
              </h2>
              <p className="mt-4 text-lg text-white/60">
                Contact us for a free consultation. Our licensed customs brokers are ready
                to streamline your clearance process.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Logistics documentation"
                  className="h-64 w-full object-cover sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>
              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <Package className="h-8 w-8 text-primary-light" />
                  <div>
                    <p className="text-sm font-bold text-white">5,000+ shipments cleared</p>
                    <p className="text-xs text-white/60">Trusted by importers across East Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
