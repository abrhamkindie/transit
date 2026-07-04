"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionHero() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pt-36">
        <div className="max-w-2xl">
          <div className={`inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-50 px-3 py-1 text-xs text-primary transition-all duration-500 ${m ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Trusted Customs Clearance Partner
          </div>

          <h1 className={`mt-5 text-4xl font-bold leading-tight text-foreground transition-all delay-150 duration-500 sm:text-5xl sm:leading-tight lg:text-6xl ${m ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            Seamless <span className="text-primary">Customs Clearance</span> &amp; Global{" "}
            <span className="text-primary">Transit Solutions</span>
          </h1>

          <p className={`mt-4 max-w-lg text-base leading-relaxed text-muted transition-all delay-300 duration-500 ${m ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            We handle all customs formalities, transit documentation, and logistics — so your goods move across borders without delays.
          </p>

          <div className={`mt-8 flex flex-col items-start gap-3 transition-all delay-450 duration-500 sm:flex-row ${m ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-accent px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-accent-dark active:scale-95">
              Get a Free Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/services" className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-border px-5 text-sm font-medium text-muted transition-all hover:border-primary/30 hover:text-primary active:scale-95">
              Explore Services
            </Link>
          </div>

          <div className={`mt-12 flex items-center gap-8 border-t border-border pt-8 transition-all delay-700 duration-500 ${m ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5K+", label: "Shipments Cleared" },
              { value: "98%", label: "On-Time Delivery" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-primary sm:text-2xl">{s.value}</div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
