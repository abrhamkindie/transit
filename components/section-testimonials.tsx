"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const testimonials = [
  {
    name: "Tadesse Ayele",
    role: "Import Manager, Habesha Trading PLC",
    content:
      "NexTransit has been handling our customs clearance for over three years. Their expertise with T1 documentation is unmatched — we have not had a single clearance rejection since switching to them.",
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
      "What sets them apart is proactive communication. They advise us on the best routes and procedures before issues arise — it is like having an in-house customs team.",
    rating: 5,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function SectionTestimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[active];

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Centered header */}
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              Client Trust
              <span className="h-px w-8 bg-primary" />
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Trusted by teams that ship every week.
            </h2>

            {/* inline trust stats */}
            <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm shadow-sm">
                <span className="text-base font-bold text-foreground">500+</span>
                <span className="text-muted">businesses served</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm shadow-sm">
                <span className="text-base font-bold text-foreground">5.0</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Spotlight quote card */}
        <ScrollReveal variant="scale">
          <div
            className="relative mt-12 overflow-hidden rounded-3xl border border-primary-100 bg-white px-6 py-12 text-center shadow-[var(--shadow-elevated)] sm:px-14 sm:py-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* accent top line */}
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-light to-accent" />
            {/* faint watermark */}
            <Quote className="pointer-events-none absolute -right-4 -top-2 h-40 w-40 text-primary-50" />

            <div key={active} style={{ animation: "fadeInUp 0.5s ease" }} className="relative mx-auto max-w-2xl">
              <div className="flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-[1.6rem] sm:leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-base font-bold text-foreground">{t.name}</p>
                <p className="mt-1 text-sm text-muted">{t.role}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Avatar filmstrip selector */}
        <ScrollReveal variant="up">
          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
            {testimonials.map((item, i) => {
              const on = i === active;
              return (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => setActive(i)}
                  className={`group flex flex-col items-center gap-2 transition-all duration-300 ${
                    on ? "" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 sm:h-14 sm:w-14 ${
                      on
                        ? "scale-110 bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30 ring-2 ring-primary ring-offset-2 ring-offset-surface"
                        : "bg-primary-50 text-primary-dark group-hover:bg-primary-100"
                    }`}
                  >
                    {initials(item.name)}
                  </span>
                  <span
                    className={`hidden text-xs font-semibold transition-colors duration-300 sm:block ${
                      on ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {item.name.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
