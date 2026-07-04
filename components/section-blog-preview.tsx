"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import { useScrollReveal } from "@/lib/utils";

const articles = [
  {
    title: "Understanding T1 Transit Documentation",
    excerpt: "A complete guide to T1 customs transit procedures and how they simplify cross-border trade.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    date: "Jun 15, 2026",
    readTime: "5 min read",
    href: "/blog",
  },
  {
    title: "Top 5 Customs Clearance Mistakes",
    excerpt: "Avoid these common pitfalls that cause delays and extra costs in international shipping.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
    date: "Jun 8, 2026",
    readTime: "4 min read",
    href: "/blog",
  },
  {
    title: "East Africa Trade Route Guide",
    excerpt: "Key insights into the major trade corridors connecting East Africa to global markets.",
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=600&q=80",
    date: "May 28, 2026",
    readTime: "6 min read",
    href: "/blog",
  },
];

function StaggerGrid({ children }: { children: React.ReactNode }) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div ref={ref} className={`stagger-children mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${revealed ? "revealed" : ""}`}>
      {children}
    </div>
  );
}

export default function SectionBlogPreview() {
  return (
    <section className="relative section-gradient-alt py-20 sm:py-24 overflow-hidden">
      <div className="section-transition" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -left-24 bottom-1/4 h-56 w-56 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-eyebrow">Latest Insights</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
                From Our <span className="text-gradient">Blog</span>
              </h2>
              <p className="mt-2 text-base text-muted">Industry insights, guides, and updates from our team.</p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark hover:shadow-md active:scale-95 shrink-0"
            >
              View All Articles
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerGrid>
          {articles.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group block rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 overflow-hidden"
            >
              <div className="overflow-hidden aspect-[16/9]">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[0.5deg]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {a.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {a.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {a.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Read more
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
