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

const [feature, ...list] = articles;

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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Featured article */}
          <ScrollReveal variant="left">
            <Link
              href={feature.href}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithSkeleton
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  wrapperClassName="absolute inset-0"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  {feature.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {feature.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {feature.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{feature.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Secondary list */}
          <div className="flex flex-col gap-6">
            {list.map((article) => (
              <ScrollReveal key={article.title} variant="right" threshold={0.1} className="flex-1">
                <Link
                  href={article.href}
                  className="group flex h-full gap-5 overflow-hidden rounded-3xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
                >
                  <div className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-2xl sm:w-40">
                    <ImageWithSkeleton
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      wrapperClassName="absolute inset-0"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">
                      {article.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{article.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
