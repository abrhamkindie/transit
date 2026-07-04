"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import ImageWithSkeleton from "./image-with-skeleton";

const articles = [
  {
    title: "Understanding T1 Transit Documentation",
    excerpt: "A complete guide to T1 customs transit procedures and how they simplify cross-border trade.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    date: "Jun 15, 2026",
    readTime: "5 min read",
    href: "/blog",
    category: "Transit",
  },
  {
    title: "Top 5 Customs Clearance Mistakes",
    excerpt: "Avoid common paperwork and submission issues that cause delays and extra costs.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80",
    date: "Jun 8, 2026",
    readTime: "4 min read",
    href: "/blog",
    category: "Compliance",
  },
  {
    title: "East Africa Trade Route Guide",
    excerpt: "Key insights into the trade corridors connecting East Africa to global markets.",
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=900&q=80",
    date: "May 28, 2026",
    readTime: "6 min read",
    href: "/blog",
    category: "Logistics",
  },
];

export default function SectionBlogPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                Insights
              </span>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Practical guidance for customs and logistics teams.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl active:scale-95"
            >
              View Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ScrollReveal key={article.title} variant="up" threshold={0.1}>
              <Link
                href={article.href}
                className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithSkeleton
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    wrapperClassName="absolute inset-0"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{article.excerpt}</p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
