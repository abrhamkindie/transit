"use client";

import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Testimonials</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">Trusted by <span className="text-primary">500+</span> Businesses</h2>
        </div>

        <div className="relative mt-8">
          <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted italic">&ldquo;{t.content}&rdquo;</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{t.name.split(" ").map((n) => n[0]).join("")}</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </div>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => { setCurrent(i); setAuto(false); }} className={`h-1.5 rounded-full transition-all ${i === current ? "w-4 bg-primary" : "w-1.5 bg-primary-100"}`} aria-label={`Testimonial ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => { prev(); setAuto(false); }} className="absolute -left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:bg-primary-50 active:scale-90" aria-label="Previous"><ChevronLeft className="h-4 w-4 text-muted" /></button>
          <button onClick={() => { next(); setAuto(false); }} className="absolute -right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:bg-primary-50 active:scale-90" aria-label="Next"><ChevronRight className="h-4 w-4 text-muted" /></button>
        </div>
      </div>
    </section>
  );
}
