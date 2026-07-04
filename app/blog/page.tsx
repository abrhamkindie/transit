import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const articles = [
  { title: "Understanding T1 vs T2 Customs Transit Documents", excerpt: "A comprehensive guide to T1 and T2 transit procedures and how they simplify cross-border trade.", image: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=600&q=80", date: "Jun 28, 2026", readTime: "5 min", category: "Transit" },
  { title: "Top 5 Mistakes to Avoid in Customs Documentation", excerpt: "Common customs documentation errors that cause delays and how to avoid them.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", date: "Jun 20, 2026", readTime: "4 min", category: "Compliance" },
  { title: "How to Choose the Right Freight Partner", excerpt: "Key factors in selecting a freight forwarding and customs clearance partner.", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80", date: "Jun 12, 2026", readTime: "6 min", category: "Logistics" },
  { title: "A Guide to TIR Carnet for Road Transport", excerpt: "Everything about the TIR international transit system for cross-border road transport.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80", date: "Jun 5, 2026", readTime: "7 min", category: "Transit" },
  { title: "Recent East African Customs Changes", excerpt: "Latest regulation changes affecting importers and exporters across East Africa.", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80", date: "May 28, 2026", readTime: "5 min", category: "Regulations" },
  { title: "HS Code Classification Accuracy", excerpt: "Why accurate HS codes matter for duty calculation and regulatory compliance.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", date: "May 15, 2026", readTime: "4 min", category: "Compliance" },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Insights &amp; Resources</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">Stay informed on customs clearance, transit procedures, and international logistics.</p>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", "Transit", "Compliance", "Logistics", "Regulations"].map((cat) => (
              <button key={cat} className={`rounded-md px-3 py-1 text-[11px] font-medium transition-all ${cat === "All" ? "bg-primary text-white" : "border border-dark-border text-white/50 hover:bg-primary/10 hover:text-white"}`}>{cat}</button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.title} href="#" className="group rounded-lg border border-dark-border bg-dark-bg transition-all hover:border-primary/30 hover:bg-primary/5 overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img src={article.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-2 left-2 rounded-md bg-dark-bg/80 px-2 py-0.5 text-[10px] font-medium text-primary-light backdrop-blur-sm">{article.category}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-[10px] text-white/40">
                    <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" />{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-white group-hover:text-primary-light transition-colors">{article.title}</h3>
                  <p className="mt-1 text-xs text-white/40">{article.excerpt}</p>
                  <div className="mt-3 flex items-center gap-0.5 text-[11px] font-medium text-primary-light opacity-0 transition-all group-hover:opacity-100">Read More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
