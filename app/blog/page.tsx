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
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Insights &amp; Resources</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">Stay informed on customs clearance, transit procedures, and logistics.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.title} href="#" className="group rounded-lg border border-border bg-surface transition-all hover:border-primary/30 hover:shadow-sm overflow-hidden">
                <div className="relative h-40 overflow-hidden"><img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute top-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">{a.cat}</span></div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-muted"><span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" />{a.date}</span><span className="flex items-center gap-1"><Clock className="h-3 w-3" />{a.read}</span></div>
                  <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted">{a.excerpt}</p>
                  <div className="mt-3 flex items-center gap-0.5 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100">Read More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
