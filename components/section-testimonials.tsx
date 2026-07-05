"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const testimonials = [
  {
    name: "Tadesse Ayele",
    role: "Import Manager, Habesha Trading PLC",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80",
    content:
      "Overall a seamless experience. Their expertise with T1 documentation is unmatched — we have not had a single clearance rejection since switching to NexTransit three years ago.",
    rating: "5.0",
  },
  {
    name: "Sara Mohammed",
    role: "Supply Chain Director, East African Industries",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&q=80",
    content:
      "Real-time tracking and a dedicated account manager transformed how we manage imports. We save about three days per shipment on clearance time now. Confident and easy.",
    rating: "5.0",
  },
  {
    name: "David Kebede",
    role: "CEO, Addis Logistics Partners",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&q=80",
    content:
      "They have awesome customer service. I would not recommend going to anyone else. Consistently above expectations across hundreds of shipments — a great team to work with.",
    rating: "5.0",
  },
  {
    name: "Helen Wondimu",
    role: "Operations Director, Ethio-Export PLC",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&q=80",
    content:
      "Been working with NexTransit for a number of years now across a variety of shipments. They advise on the best routes before issues arise. They have my recommendation.",
    rating: "5.0",
  },
];

const n = testimonials.length;

function MiniRow({
  t,
  onClick,
}: {
  t: (typeof testimonials)[number];
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show review from ${t.name}`}
      className="group relative z-10 flex items-center gap-3 opacity-60 transition-opacity duration-300 hover:opacity-100"
    >
      <img
        src={t.photo}
        alt={t.name}
        loading="lazy"
        className="h-11 w-11 shrink-0 rounded-full object-cover grayscale ring-2 ring-white shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="text-left">
        <p className="text-sm font-bold text-foreground">{t.name}</p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-muted">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="font-semibold text-primary-dark">{t.rating}</span>
          <span>· Verified client</span>
        </p>
      </div>
    </button>
  );
}

export default function SectionTestimonials() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const prevIdx = (active - 1 + n) % n;
  const nextIdx = (active + 1) % n;
  const t = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-white to-surface-alt py-20 sm:py-28">
      {/* decorative brand quarter-circle */}
      <div
        className="pointer-events-none absolute top-1/2 -left-52 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-light via-primary to-primary-dark sm:-left-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <ScrollReveal variant="scale">
          <div
            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-[var(--shadow-elevated)] sm:p-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* header */}
            <span className="block h-1 w-10 rounded-full bg-primary" />
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-[1.75rem]">
              Customer Reviews
            </h2>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
              {/* Left: rotating avatar carousel on an arc */}
              <div className="relative flex min-h-[320px] flex-col justify-center gap-8">
                {/* curved connector */}
                <svg
                  viewBox="0 0 120 320"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute left-2 top-0 h-full w-32"
                  aria-hidden
                >
                  <path
                    d="M 34 20 Q 104 160 34 300"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                    strokeDasharray="2 6"
                    strokeLinecap="round"
                  />
                </svg>

                <MiniRow t={testimonials[prevIdx]} onClick={() => setActive(prevIdx)} />

                {/* active */}
                <div
                  key={active}
                  style={{ animation: "fadeInUp 0.45s ease" }}
                  className="relative z-10 flex items-center gap-4 sm:pl-8"
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-full object-cover grayscale ring-4 ring-white shadow-xl sm:h-24 sm:w-24"
                  />
                  <div>
                    <p className="text-xl font-bold text-foreground sm:text-2xl">{t.name}</p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-bold text-primary-dark">{t.rating}</span>
                      <span className="text-muted">· Verified client</span>
                    </p>
                  </div>
                </div>

                <MiniRow t={testimonials[nextIdx]} onClick={() => setActive(nextIdx)} />
              </div>

              {/* Right: quote */}
              <div className="relative">
                <span className="absolute -top-6 left-0 font-serif text-6xl leading-none text-primary-100 sm:-left-2">
                  &ldquo;
                </span>
                <blockquote
                  key={active}
                  style={{ animation: "fadeInUp 0.5s ease" }}
                  className="relative font-serif text-lg italic leading-relaxed text-foreground/80 first-letter:text-3xl first-letter:font-bold first-letter:not-italic first-letter:text-foreground sm:text-xl sm:leading-relaxed"
                >
                  {t.content}
                </blockquote>

                {/* progress dots */}
                <div className="mt-8 flex gap-2">
                  {testimonials.map((item, i) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Show review ${i + 1}`}
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active ? "w-7 bg-primary" : "w-3 bg-border hover:bg-primary-light"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
