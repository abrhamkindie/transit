import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Customs declarations",
  "Transit documentation",
  "Freight coordination",
];

export default function SectionHero() {
  return (
    <section className="relative overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1920&q=85"
          alt="Container terminal with cargo ships, trucks, and cranes"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,43,60,0.98)_0%,rgba(26,43,60,0.88)_48%,rgba(26,43,60,0.45)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:pt-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-light">
            NexTransit Customs & Logistics
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Freight clearance designed for predictable cross-border movement.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
            We manage customs paperwork, transit documents, corridor routing, and
            delivery handoff for companies moving regulated cargo through East Africa.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-95"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tracking"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 active:scale-95"
            >
              Track Shipment
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/78">
              <CheckCircle2 className="h-5 w-5 text-primary-light" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
