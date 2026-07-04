"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const testimonials = [
  {
    name: "Tadesse Ayele",
    role: "Import Manager, Habesha Trading PLC",
    content:
      "NexTransit has been handling our customs clearance for over three years. Their expertise with T1 documentation is unmatched \u2014 we have not had a single clearance rejection since switching to them.",
    rating: 5,
  },
  {
    name: "Sara Mohammed",
    role: "Supply Chain Director, East African Industries",
    content:
      "The real-time tracking and dedicated account manager have transformed how we manage our imports. We now save an average of three days per shipment on clearance time.",
    rating: 5,
  },
  {
    name: "David Kebede",
    role: "CEO, Addis Logistics Partners",
    content:
      "They have consistently delivered above expectations across hundreds of shipments. Their knowledge of customs regulations and proactive problem-solving is exceptional.",
    rating: 5,
  },
  {
    name: "Helen Wondimu",
    role: "Operations Director, Ethio-Export PLC",
    content:
      "What sets them apart is proactive communication. They advise us on the best routes and procedures before issues arise \u2014 it is like having an in-house customs team.",
    rating: 5,
  },
];

export default function SectionTestimonials() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    [],
  );

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [auto, next]);

  const testimonial = testimonials[current];

  return (
    <section className="bg-gradient-to-b from-white to-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          <ScrollReveal variant="left">
            <div>
              <span className="inline-block rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                Client Trust
              </span>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Built for teams that need communication first.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted">
                We measure our success by the trust our clients place in us &#8212; shipment after
                shipment, year after year.
              </p>

              <div className="mt-10 flex gap-6">
                <div className="rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-foreground">500+</div>
                  <p className="mt-1 text-xs text-muted">businesses served</p>
                </div>
                <div className="rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-foreground">5.0</div>
                  <p className="mt-1 text-xs text-muted">average rating</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
              <Quote className="mb-6 h-10 w-10 text-primary/20" />

              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="mt-6">
                <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>

              <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-bold text-foreground">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden items-center gap-1.5 sm:flex">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setCurrent(i); setAuto(false); }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === current
                            ? "w-6 bg-primary"
                            : "w-2 bg-border hover:bg-primary/40"
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { prev(); setAuto(false); }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => { next(); setAuto(false); }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
