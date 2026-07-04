import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

export default function SectionCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=85"
          alt="Logistics operations team reviewing freight documents"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,43,60,0.94)_0%,rgba(26,43,60,0.86)_50%,rgba(26,43,60,0.5)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="inline-flex rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-light">
              Start a shipment review
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Get a customs and transit plan before cargo reaches the border.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
              Share your shipment details and NexTransit will review the paperwork,
              expected route, clearance requirements, and next action with you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary-50 active:scale-95"
              >
                Request a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tracking"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/20 active:scale-95"
              >
                Track Your Shipment
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+251911234567"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-6 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call Operations
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
