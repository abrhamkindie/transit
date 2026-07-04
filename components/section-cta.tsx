import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

export default function SectionCta() {
  return (
    <section className="bg-gradient-to-r from-primary-dark to-primary py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Simplify Your Customs Clearance?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60">Get in touch today for a free consultation and customized quote.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-white px-5 text-sm font-medium text-primary shadow-sm transition-all hover:bg-white/90 active:scale-95">
              Request a Free Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/tracking" className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-white/30 px-5 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-95">
              Track Your Shipment
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
