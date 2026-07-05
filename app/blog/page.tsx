import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import ScrollReveal from "@/components/scroll-reveal";
import ImageWithSkeleton from "@/components/image-with-skeleton";
import SectionCta from "@/components/section-cta";

const articles = [
  { title: "Understanding T1 vs T2 Customs Transit Documents", excerpt: "A guide to T1 and T2 transit procedures and how they simplify cross-border trade.", image: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=600&q=80", date: "Jun 28, 2026", read: "5 min", cat: "Transit" },
  { title: "Top 5 Mistakes to Avoid in Customs Documentation", excerpt: "Common errors that cause delays and how to avoid them.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", date: "Jun 20, 2026", read: "4 min", cat: "Compliance" },
  { title: "How to Choose the Right Freight Partner", excerpt: "Key factors in selecting a freight forwarding partner.", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80", date: "Jun 12, 2026", read: "6 min", cat: "Logistics" },
  { title: "A Guide to TIR Carnet for Road Transport", excerpt: "Everything about the TIR system for cross-border road transport.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80", date: "Jun 5, 2026", read: "7 min", cat: "Transit" },
  { title: "Recent East African Customs Changes", excerpt: "Latest regulations affecting importers and exporters.", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80", date: "May 28, 2026", read: "5 min", cat: "Regulations" },
  { title: "HS Code Classification Accuracy", excerpt: "Why accurate HS codes matter for duty calculation.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", date: "May 15, 2026", read: "4 min", cat: "Compliance" },
];

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        title={<>Guidance for customs and logistics teams.</>}
        subtitle="Stay informed on customs clearance, transit procedures, and freight."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80"
        imageAlt="Desk with shipping documents and a laptop"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Featured lead article */}
          <ScrollReveal>
            <Link
              href="#"
              className="group grid overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-[var(--shadow-elevated)] lg:grid-cols-2"
            >
              <div className="relative overflow-hidden lg:order-last">
                <ImageWithSkeleton
                  src={featured.image}
                  alt={featured.title}
                  wrapperClassName="h-64 sm:h-80 lg:h-full"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
                  {featured.cat}
                </span>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-dark">
                  Featured
                </span>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.read}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-muted">
                  {featured.excerpt}
                </p>
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3.5">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Remaining articles grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:mt-10 lg:grid-cols-3">
            {rest.map((a, i) => (
              <ScrollReveal
                key={a.title}
                variant="up"
                threshold={0.1}
                className="h-full"
              >
                <Link
                  href="#"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <ImageWithSkeleton
                      src={a.image}
                      alt={a.title}
                      wrapperClassName="h-48"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
                      {a.cat}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {a.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {a.read}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{a.excerpt}</p>
                    <div className="mt-5 flex items-center gap-2 pt-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3.5">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </>
  );
}
