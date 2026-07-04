"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function SectionHero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <div
          className="h-[120%] w-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            willChange: "transform",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85"
            alt="Modern cargo ship at port with cranes loading containers"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-white/8 blur-3xl animate-float-slow" />
        <div className="absolute -left-24 bottom-1/3 h-56 w-56 rounded-full bg-accent/8 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pt-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full glass-hero px-4 py-1.5 text-xs font-medium text-white transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-white animate-pulse" />
              <span className="relative rounded-full bg-white h-2 w-2" />
            </span>
            Trusted Customs Clearance Partner
          </div>

          {/* Heading */}
          <h1
            className={`mt-5 text-4xl font-bold leading-[1.08] text-white drop-shadow-sm transition-all delay-150 duration-700 sm:text-5xl sm:leading-[1.08] lg:text-6xl lg:leading-[1.08] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Seamless{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-white">
              Customs Clearance
            </span>
            <br />
            &amp; Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-white">
              Transit Solutions
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`mt-4 max-w-lg text-base leading-relaxed text-white/70 transition-all delay-300 duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            We handle all customs formalities, transit documentation, and logistics
            — so your goods move across borders without delays.
          </p>

          {/* Buttons */}
          <div
            className={`mt-8 flex flex-col items-start gap-3 transition-all delay-500 duration-700 sm:flex-row sm:items-center ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              className="group relative inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Get a Free Quote</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 active:scale-95"
            >
              Explore Services
              <span className="h-4 w-4 rounded-full border border-white/50 flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:border-white">
                →
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`mt-10 flex items-center gap-8 transition-all delay-500 duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5K+", label: "Shipments Cleared" },
              { value: "98%", label: "On-Time Delivery" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-4">
                <div>
                  <div className="text-2xl font-bold text-white drop-shadow-sm">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/60 whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
                {i < 2 && <div className="h-10 w-px bg-white/15" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
