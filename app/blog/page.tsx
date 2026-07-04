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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary border border-primary/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">Our Blog</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Insights &amp; Resources</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">Stay informed on customs clearance, transit procedures, and logistics.</p>
        </div>
      </section>

      <section className="relative section-gradient-alt py-16 sm:py-20">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.title} href="#" className="group rounded-xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 shadow-sm overflow-hidden">
                <div className="relative h-44 overflow-hidden"><img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute top-3 left-3 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">{a.cat}</span></div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted"><span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{a.date}</span><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{a.read}</span></div>
                  <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted">{a.excerpt}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">Read More <span className="text-lg">→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
