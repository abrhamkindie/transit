import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

export default function SectionCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#2d8bb8]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/8 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-1/3 left-1/4 h-32 w-32 rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />
      </div>
      {/* Decorative pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle at 25px 25px, white 1px, transparent 0)", backgroundSize: "50px 50px" }} />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-24 sm:px-6">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Ready to Simplify Your Customs Clearance?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">Get in touch for a free consultation and customized quote tailored to your business needs.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-7 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-95">
              Request a Free Quote <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/tracking" className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-7 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 active:scale-95">
              Track Your Shipment <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
