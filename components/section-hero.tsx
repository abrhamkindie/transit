"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85"
          alt="Modern cargo ship at port with cranes loading containers"
          className="h-[130%] w-full object-cover"
          style={{ transform: `translateY(${sy * 0.3}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/40 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      {/* Decorative blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute -left-20 bottom-1/4 h-48 w-48 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
        <div className="max-w-xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white transition-all duration-700 ${m ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-glow" />
            Trusted Customs Clearance Partner
          </div>

          {/* Heading */}
          <h1 className={`mt-4 text-3xl font-bold leading-tight text-white drop-shadow-sm transition-all delay-150 duration-700 sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight ${m ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            Seamless <span className="text-white/90 underline decoration-primary-light/40 underline-offset-2">Customs Clearance</span>{" "}
            &amp; Global{" "}
            <span className="text-white/90 underline decoration-primary-light/40 underline-offset-2">Transit Solutions</span>
          </h1>

          {/* Subtext */}
          <p className={`mt-2 max-w-md text-sm leading-relaxed text-white/75 transition-all delay-300 duration-700 ${m ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            We handle all customs formalities, transit documentation, and logistics — so your goods move across borders without delays.
          </p>

          {/* Buttons */}
          <div className={`mt-6 flex flex-col items-start gap-2.5 transition-all delay-300 duration-700 sm:flex-row sm:items-center ${m ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <Link href="/contact" className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-white px-5 text-sm font-medium text-primary shadow-sm transition-all hover:bg-white/90 hover:shadow-md active:scale-95">
              Get a Free Quote <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/services" className="inline-flex h-10 items-center justify-center rounded-md border-2 border-white/35 bg-white/10 backdrop-blur-sm px-5 text-sm font-medium text-white transition-all hover:bg-white/20 active:scale-95">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className={`mt-8 flex items-center gap-6 transition-all delay-500 duration-700 ${m ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5K+", label: "Shipments Cleared" },
              { value: "98%", label: "On-Time Delivery" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div>
                  <div className="text-lg font-bold text-white drop-shadow-sm sm:text-xl">{s.value}</div>
                  <div className="text-[11px] text-white/65 whitespace-nowrap">{s.label}</div>
                </div>
                {i < 2 && <div className="h-8 w-px bg-white/20" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
