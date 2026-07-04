import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const articles = [
  { title: "Understanding T1 vs T2 Customs Transit Documents", excerpt: "A guide to T1 and T2 transit procedures and how they simplify cross-border trade.", image: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=600&q=80", date: "Jun 28, 2026", read: "5 min", cat: "Transit" },
  { title: "Top 5 Mistakes to Avoid in Customs Documentation", excerpt: "Common errors that cause delays and how to avoid them.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", date: "Jun 20, 2026", read: "4 min", cat: "Compliance" },
  { title: "How to Choose the Right Freight Partner", excerpt: "Key factors in selecting a freight forwarding partner.", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80", date: "Jun 12, 2026", read: "6 min", cat: "Logistics" },
  { title: "A Guide to TIR Carnet for Road Transport", excerpt: "Everything about the TIR system for cross-border road transport.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80", date: "Jun 5, 2026", read: "7 min", cat: "Transit" },
  { title: "Recent East African Customs Changes", excerpt: "Latest regulations affecting importers and exporters.", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80", date: "May 28, 2026", read: "5 min", cat: "Regulations" },
  { title: "HS Code Classification Accuracy", excerpt: "Why accurate HS codes matter for duty calculation.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", date: "May 15, 2026", read: "4 min", cat: "Compliance" },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            Our Blog
          </span>
          <h1 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Insights &amp; Resources
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
            Stay informed on customs clearance, transit procedures, and logistics.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.title}
                href="#"
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                    {a.cat}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {a.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {a.read}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{a.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
