import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

export default function SectionCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-95" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-20 sm:px-6">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Simplify Your Customs Clearance?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">Get in touch for a free consultation and customized quote tailored to your business needs.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-white px-6 text-sm font-medium text-primary shadow-sm transition-all hover:bg-white/90 hover:shadow-md active:scale-95">
              Request a Free Quote <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/tracking" className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-md border-2 border-white/30 px-6 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-95">
              Track Your Shipment <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
