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
    <div ref={ref} className={`stagger-children mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${revealed ? "revealed" : ""}`}>
      {children}
    </div>
  );
}

export default function SectionBlogPreview() {
  return (
    <section className="relative section-gradient-alt border-t border-border py-16 sm:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>
      <div className="section-divider" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <span className="inline-block rounded-full bg-white border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">Latest Insights</span>
              <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">From Our Blog</h2>
              <p className="mt-1 text-sm text-muted">Industry insights, guides, and updates from our team.</p>
            </div>
            <Link href="/blog" className="group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark hover:shadow-md active:scale-95 shrink-0">
              View All Articles <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerGrid>
          {articles.map((a) => (
            <Link key={a.title} href={a.href} className="group block rounded-xl border border-border bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 overflow-hidden">
              <div className="overflow-hidden aspect-[16/9]">
                <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {a.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {a.readTime}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">{a.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{a.excerpt}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Read more <span className="text-sm">→</span>
                </div>
              </div>
            </Link>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
