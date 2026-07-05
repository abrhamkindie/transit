"use client";

import { useEffect, useRef, useState } from "react";
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

const N = testimonials.length;
const SLOT = 104; // px height of each carousel row
const VISIBLE = 3;
// triple the list so the carousel always has neighbours above and below
const track = [...testimonials, ...testimonials, ...testimonials];

const fadeMask = {
  WebkitMaskImage: "linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)",
  maskImage: "linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)",
} as const;

export default function SectionTestimonials() {
  const [index, setIndex] = useState(N + 1); // start centered on 2nd item, middle copy
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const animRef = useRef(true);
  animRef.current = anim;

  const active = ((index % N) + N) % N;

  // auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), 4500);
    return () => clearInterval(id);
  }, [paused]);

  // re-enable transition after a silent recenter
  useEffect(() => {
    if (anim) return;
    const id = setTimeout(() => setAnim(true), 30);
    return () => clearTimeout(id);
  }, [anim]);

  const recenter = () => {
    const target = active + N;
    if (index !== target) {
      setAnim(false);
      setIndex(target);
    }
  };

  const t = testimonials[active];
  // center the active row (position === index) within the VISIBLE-row window
  const translateY = ((VISIBLE - 1) / 2 - index) * SLOT;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-white to-surface-alt py-20 sm:py-28">
      {/* soft brand glow (was a hard circle) */}
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-light to-primary opacity-25 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal variant="scale">
          <div
            className="relative overflow-hidden rounded-3xl border border-border-light bg-white p-8 shadow-[var(--shadow-elevated)] sm:p-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* header */}
            <span className="block h-1 w-10 rounded-full bg-primary" />
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-[1.75rem]">Customer Reviews</h2>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
              {/* Left: scrolling avatar carousel */}
              <div className="relative" style={{ height: SLOT * VISIBLE }}>
                {/* curved connector */}
                <svg
                  viewBox="0 0 120 320"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute left-2 top-0 z-0 h-full w-32"
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

                <div className="relative h-full overflow-hidden" style={fadeMask}>
                  <div
                    className="absolute inset-x-0 top-0"
                    style={{
                      transform: `translateY(${translateY}px)`,
                      transition: anim ? "transform 550ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
                    }}
                    onTransitionEnd={recenter}
                  >
                    {track.map((item, p) => {
                      const dist = Math.min(Math.abs(p - index), 3);
                      const scale = dist === 0 ? 1 : dist === 1 ? 0.6 : dist === 2 ? 0.42 : 0.3;
                      const opacity = dist === 0 ? 1 : dist === 1 ? 0.6 : dist === 2 ? 0.28 : 0;
                      const x = Math.max(0, (2 - dist) / 2) * 28; // arc bulge — center sits furthest right
                      const on = dist === 0;
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            setAnim(true);
                            setIndex(p);
                          }}
                          aria-label={`Show review from ${item.name}`}
                          className="flex w-full items-center text-left"
                          style={{ height: SLOT }}
                        >
                          <div
                            className="flex items-center gap-4"
                            style={{
                              transform: `translateX(${x}px) scale(${scale})`,
                              transformOrigin: "left center",
                              opacity,
                              transition: anim
                                ? "transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 550ms ease"
                                : "none",
                            }}
                          >
                            <img
                              src={item.photo}
                              alt={item.name}
                              loading="lazy"
                              className={`h-20 w-20 shrink-0 rounded-full object-cover grayscale ring-white shadow-md ${
                                on ? "ring-4 shadow-xl" : "ring-2"
                              }`}
                            />
                            <div className="whitespace-nowrap">
                              <p className="text-2xl font-bold text-foreground">{item.name}</p>
                              <p className="mt-1 flex items-center gap-1.5 text-sm">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="font-semibold text-primary-dark">{item.rating}</span>
                                <span className="text-muted">· Verified client</span>
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
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
                      onClick={() => {
                        setAnim(true);
                        setIndex(N + i);
                      }}
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
