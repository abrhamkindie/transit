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
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
                <span className="h-px w-8 bg-primary" />
                Client Trust
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Built for teams that need communication first.
              </h2>
            </div>
            <div className="flex gap-4">
              <div className="rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-foreground">500+</div>
                <p className="mt-1 text-xs text-muted">businesses served</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-foreground">5.0</div>
                <div className="mt-1 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Wall of testimonials */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <ScrollReveal key={t.name} variant="up" threshold={0.05}>
              <figure className="group relative flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl hover:shadow-primary/5 sm:p-8">
                <Quote className="h-9 w-9 text-primary-100 transition-colors duration-300 group-hover:text-primary/40" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1">
                  <p className="text-base leading-7 text-foreground/90 sm:text-lg">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md shadow-primary/20">
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
