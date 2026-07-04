"use client";

import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const testimonials = [
  { name: "Tadesse Ayele", role: "Import Manager, Habesha Trading PLC", content: "NexTransit has been handling our customs clearance for over three years. Their expertise with T1 documentation is unmatched.", rating: 5 },
  { name: "Sara Mohammed", role: "Supply Chain Director, East African Industries", content: "The real-time tracking and dedicated account manager have transformed how we manage our imports.", rating: 5 },
  { name: "David Kebede", role: "CEO, Addis Logistics Partners", content: "They've consistently delivered above expectations. Their knowledge of customs regulations across East Africa is exceptional.", rating: 5 },
  { name: "Helen Wondimu", role: "Operations Director, Ethio-Export PLC", content: "What sets them apart is their proactive communication. They advise us on the best routes and procedures.", rating: 5 },
];

export default function SectionTestimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);
  useEffect(() => { if (!autoplay) return; const t = setInterval(next, 5000); return () => clearInterval(t); }, [autoplay, next]);

  const t = testimonials[current];
  return (
    <section className="bg-dark-surface py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-light">Testimonials</span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Trusted by <span className="text-primary-light">500+</span> Businesses</h2>
          </div>
        </ScrollReveal>

        <div className="relative mt-8">
          <div className="rounded-lg border border-dark-border bg-dark-bg p-6 sm:p-8">
            <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary-light text-primary-light" />)}</div>
            <p className="mt-3 text-sm leading-relaxed text-white/60 italic">&ldquo;{t.content}&rdquo;</p>
            <div className="mt-5 flex items-center gap-3 border-t border-dark-border pt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">{t.name.split(" ").map((n) => n[0]).join("")}</div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-white">{t.name}</div>
                <div className="text-[11px] text-white/40">{t.role}</div>
              </div>
              <div className="flex gap-1.5">{testimonials.map((_, i) => (<button key={i} onClick={() => { setCurrent(i); setAutoplay(false); }} className={`h-1.5 rounded-full transition-all ${i === current ? "w-4 bg-primary" : "w-1.5 bg-white/20"}`} aria-label={`Testimonial ${i + 1}`} />))}</div>
            </div>
          </div>
          <button onClick={() => { prev(); setAutoplay(false); }} className="absolute -left-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-dark-border bg-dark-surface shadow-sm transition-all hover:bg-primary/20 active:scale-90" aria-label="Previous"><ChevronLeft className="h-3.5 w-3.5 text-white/60" /></button>
          <button onClick={() => { next(); setAutoplay(false); }} className="absolute -right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-dark-border bg-dark-surface shadow-sm transition-all hover:bg-primary/20 active:scale-90" aria-label="Next"><ChevronRight className="h-3.5 w-3.5 text-white/60" /></button>
        </div>
      </div>
    </section>
  );
}
