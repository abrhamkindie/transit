"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-dark-bg">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
          alt="Cargo ship at port"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-dark-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="max-w-3xl">
          <div className={`inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary-light transition-all duration-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary-light animate-pulse-glow" />
            Trusted Customs Clearance Partner
          </div>

          <h1 className={`mt-5 text-4xl font-bold leading-tight text-white transition-all delay-150 duration-500 sm:text-5xl sm:leading-tight lg:text-6xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            Seamless <span className="text-primary-light">Customs Clearance</span> &amp; Global{" "}
            <span className="text-primary-light">Transit Solutions</span>
          </h1>

          <p className={`mt-4 max-w-xl text-sm leading-relaxed text-white/50 transition-all delay-300 duration-500 sm:text-base ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            We handle all customs formalities, transit documentation, and logistics — so your goods move across borders without delays.
          </p>

          <div className={`mt-8 flex flex-col items-start gap-3 transition-all delay-450 duration-500 sm:flex-row ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark active:scale-95">
              Get a Free Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/services" className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-white/20 px-5 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white active:scale-95">
              Explore Services
            </Link>
          </div>

          <div className={`mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 transition-all delay-700 duration-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5K+", label: "Shipments Cleared" },
              { value: "98%", label: "On-Time Delivery" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold text-primary-light sm:text-2xl">{stat.value}</div>
                <div className="mt-0.5 text-xs text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
