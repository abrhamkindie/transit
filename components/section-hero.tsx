"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function SectionHero() {
  const [m, setM] = useState(false);
  const [sy, setSy] = useState(0);
  useEffect(() => {
    setM(true);
    const fn = () => setSy(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
          alt="Aerial view of shipping containers at a busy port terminal"
          className="h-[125%] w-full object-cover"
          style={{ transform: `translateY(${sy * 0.35}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/70 to-white/40" />
      </div>

      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -left-24 bottom-1/4 h-56 w-56 rounded-full bg-accent/8 blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute left-1/3 top-1/4 h-32 w-32 rounded-full bg-primary/5 blur-2xl animate-float" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-4 pb-16 pt-28 sm:px-6 sm:pt-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-white/85 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary shadow-sm transition-all duration-700 ${m ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Trusted Customs Clearance Partner
          </div>

          {/* Heading */}
          <h1 className={`mt-5 text-4xl font-bold leading-tight text-foreground transition-all delay-150 duration-700 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight ${m ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            Seamless <span className="text-primary">Customs Clearance</span> &amp; Global{" "}
            <span className="text-primary">Transit Solutions</span>
          </h1>

          {/* Subtext */}
          <p className={`mt-4 max-w-lg text-base leading-relaxed text-muted transition-all delay-300 duration-700 ${m ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            We handle all customs formalities, transit documentation, and logistics — so your goods move across borders without delays.
          </p>

          {/* Buttons */}
          <div className={`mt-8 flex flex-col items-start gap-3 transition-all delay-300 duration-700 sm:flex-row ${m ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <Link href="/contact" className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-accent px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md active:scale-95">
              Get a Free Quote <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/services" className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md border border-border bg-white/80 backdrop-blur-sm px-6 text-sm font-medium text-muted transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm active:scale-95">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className={`mt-12 flex items-center divide-x divide-border transition-all delay-500 duration-700 ${m ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5K+", label: "Shipments Cleared" },
              { value: "98%", label: "On-Time Delivery" },
            ].map((s, i) => (
              <div key={s.label} className={`${i > 0 ? "pl-6" : "pr-6"} ${i < 2 ? "pr-6" : ""}`}>
                <div className="text-xl font-bold text-primary sm:text-2xl">{s.value}</div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-5 w-5 text-muted/30" />
      </div>
    </section>
  );
}
