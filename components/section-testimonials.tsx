"use client";

import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const testimonials = [
  { name: "Tadesse Ayele", role: "Import Manager, Habesha Trading PLC", content: "NexTransit has been handling our customs clearance for over three years. Their expertise with T1 documentation is unmatched.", rating: 5 },
  { name: "Sara Mohammed", role: "Supply Chain Director, East African Industries", content: "The real-time tracking and dedicated account manager have transformed how we manage our imports.", rating: 5 },
  { name: "David Kebede", role: "CEO, Addis Logistics Partners", content: "They've consistently delivered above expectations. Their knowledge of customs regulations is exceptional.", rating: 5 },
  { name: "Helen Wondimu", role: "Operations Director, Ethio-Export PLC", content: "What sets them apart is their proactive communication. They advise us on the best routes and procedures.", rating: 5 },
];

export default function SectionTestimonials() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [auto, next]);
  const t = testimonials[current];

  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div className="section-transition" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-eyebrow">Testimonials</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
              Trusted by{" "}
              <span className="text-gradient">500+</span> Businesses
            </h2>
            <p className="mt-3 text-base text-muted leading-relaxed">
              Hear what our clients say about working with us.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale" threshold={0.1}>
          <div className="relative mt-12">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-[0.06]">
                <Quote className="h-16 w-16 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="mt-5 text-lg leading-relaxed text-foreground/80 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); setAuto(false); }}
                    className={`rounded-full transition-all duration-500 ${
                      i === current
                        ? "w-8 h-2 bg-primary"
                        : "w-2 h-2 bg-primary-200 hover:bg-primary/50"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => { prev(); setAuto(false); }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-md transition-all hover:bg-primary-50 hover:border-primary/30 active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 text-muted" />
            </button>
            <button
              onClick={() => { next(); setAuto(false); }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-md transition-all hover:bg-primary-50 hover:border-primary/30 active:scale-90"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 text-muted" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
