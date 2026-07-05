import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import ImageWithSkeleton from "./image-with-skeleton";

const articles = [
  {
    title: "Understanding T1 Transit Documentation",
    excerpt:
      "A complete guide to T1 customs transit procedures and how they simplify cross-border trade across the East Africa corridor.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1100&q=80",
    date: "Jun 15, 2026",
    readTime: "5 min read",
    href: "/blog",
    category: "Transit",
  },
  {
    title: "Top 5 Customs Clearance Mistakes",
    excerpt: "Avoid common paperwork and submission issues that cause delays and extra costs.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
    date: "Jun 8, 2026",
    readTime: "4 min read",
    href: "/blog",
    category: "Compliance",
  },
  {
    title: "East Africa Trade Route Guide",
    excerpt: "Key insights into the trade corridors connecting East Africa to global markets.",
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=600&q=80",
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
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
                <span className="h-px w-8 bg-primary" />
                Insights
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
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

        {/* Editorial index ledger */}
        <div className="mt-12 border-b border-border">
          {articles.map((article, i) => (
            <ScrollReveal key={article.title} variant="up" threshold={0.05}>
              <Link
                href={article.href}
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-border py-6 transition-colors duration-300 hover:bg-primary-50/40 sm:gap-8 sm:py-8"
              >
                {/* animated left accent */}
                <span className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 group-hover:h-[70%]" />

                {/* ghost index */}
                <span className="pl-3 text-3xl font-bold tabular-nums text-border transition-colors duration-300 group-hover:text-primary sm:pl-5 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-dark">
                      {article.category}
                    </span>
                    <span className="hidden items-center gap-1.5 sm:flex">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary sm:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mt-1.5 hidden max-w-xl text-sm leading-6 text-muted sm:line-clamp-1 md:block">
                    {article.excerpt}
                  </p>
                </div>

                {/* thumbnail + arrow */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-2xl sm:block">
                    <ImageWithSkeleton
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      wrapperClassName="absolute inset-0"
                    />
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
