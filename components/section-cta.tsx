import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

export default function SectionCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker" />
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/8 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl animate-float-slow" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-1/3 left-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />
      </div>
      {/* Pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:py-28 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight">
            Ready to Simplify Your Customs Clearance?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Get in touch for a free consultation and customized quote tailored to your business needs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-7 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Request a Free Quote</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/tracking"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-7 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 active:scale-95"
            >
              Track Your Shipment
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
