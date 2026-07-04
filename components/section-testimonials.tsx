"use client";

import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
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
  useEffect(() => { if (!auto) return; const t = setInterval(next, 5000); return () => clearInterval(t); }, [auto, next]);
  const t = testimonials[current];

  return (
    <section className="relative bg-white border-t border-border py-16 sm:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="section-divider" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 border border-primary-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Testimonials</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">Trusted by <span className="text-primary">500+</span> Businesses</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale" threshold={0.1}>
          <div className="relative mt-10">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <MessageSquareQuote className="h-8 w-8 text-primary-100" />
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted italic">&ldquo;{t.content}&rdquo;</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-xs font-bold text-white shadow-md">{t.name.split(" ").map((n) => n[0]).join("")}</div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => { setCurrent(i); setAuto(false); }} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-primary-200 hover:bg-primary/50"}`} aria-label={`Testimonial ${i + 1}`} />
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => { prev(); setAuto(false); }} className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white shadow-md transition-all hover:bg-primary-50 hover:border-primary/30 active:scale-90" aria-label="Previous"><ChevronLeft className="h-4 w-4 text-muted" /></button>
            <button onClick={() => { next(); setAuto(false); }} className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white shadow-md transition-all hover:bg-primary-50 hover:border-primary/30 active:scale-90" aria-label="Next"><ChevronRight className="h-4 w-4 text-muted" /></button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
