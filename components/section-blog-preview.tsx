"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const articles = [
  {
    title: "Understanding T1 Transit Documentation",
    excerpt: "A complete guide to T1 customs transit procedures and how they simplify cross-border trade.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    date: "Jun 15, 2026",
    readTime: "5 min read",
    href: "/blog",
  },
  {
    title: "Top 5 Customs Clearance Mistakes",
    excerpt: "Avoid common paperwork and submission issues that cause delays and extra costs.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
    date: "Jun 8, 2026",
    readTime: "4 min read",
    href: "/blog",
  },
  {
    title: "East Africa Trade Route Guide",
    excerpt: "Key insights into the trade corridors connecting East Africa to global markets.",
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=600&q=80",
    date: "May 28, 2026",
    readTime: "6 min read",
    href: "/blog",
  },
];

export default function SectionBlogPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-5 border-b border-border pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Insights
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Practical guidance for customs and logistics teams.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-95"
            >
              View Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <ScrollReveal variant="left">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </ScrollReveal>

          <div className="border-y border-border">
            {articles.map((article) => (
              <ScrollReveal key={article.title} variant="right" threshold={0.1}>
                <Link
                  href={article.href}
                  className="group grid gap-4 border-b border-border py-7 last:border-b-0 sm:grid-cols-[8rem_1fr_auto] sm:items-start"
                >
                  <div className="text-sm text-muted">
                    <div>{article.date}</div>
                    <div className="mt-1">{article.readTime}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{article.excerpt}</p>
                  </div>
                  <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:inline-flex">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
