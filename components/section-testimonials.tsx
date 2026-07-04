"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const testimonials = [
  {
    name: "Tadesse Ayele",
    role: "Import Manager, Habesha Trading PLC",
    content:
      "NexTransit has been handling our customs clearance for over three years. Their expertise with T1 documentation is unmatched.",
    rating: 5,
  },
  {
    name: "Sara Mohammed",
    role: "Supply Chain Director, East African Industries",
    content:
      "The real-time tracking and dedicated account manager have transformed how we manage our imports.",
    rating: 5,
  },
  {
    name: "David Kebede",
    role: "CEO, Addis Logistics Partners",
    content:
      "They have consistently delivered above expectations. Their knowledge of customs regulations is exceptional.",
    rating: 5,
  },
  {
    name: "Helen Wondimu",
    role: "Operations Director, Ethio-Export PLC",
    content:
      "What sets them apart is proactive communication. They advise us on the best routes and procedures.",
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
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <ScrollReveal variant="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Client trust
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Built for teams that need communication before problems escalate.
              </h2>
              <div className="mt-8 flex gap-10 border-t border-border pt-6">
                <div>
                  <div className="text-3xl font-semibold text-foreground">500+</div>
                  <p className="mt-1 text-sm text-muted">businesses served</p>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-foreground">5.0</div>
                  <p className="mt-1 text-sm text-muted">average rating</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="border-y border-border py-8">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-6 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-foreground">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      prev();
                      setAuto(false);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      next();
                      setAuto(false);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
