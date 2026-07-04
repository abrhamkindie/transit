"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { title: "Customs Clearance", href: "/services/customs-clearance" },
  { title: "Transit Services", href: "/services/transit" },
  { title: "Freight & Logistics", href: "/services/freight-logistics" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobSvc, setMobSvc] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base font-bold text-foreground tracking-tight">
            Nex<span className="text-primary">Transit</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          <Link href="/" className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-primary">Home</Link>
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <Link href="/services" className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-primary">Services</Link>
            {drop && (
              <div className="absolute left-0 top-full mt-1 w-44 rounded-lg border border-border bg-white p-1 shadow-sm animate-fade-in-up">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-primary-50 hover:text-primary">{s.title}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-primary">About</Link>
          <Link href="/tracking" className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-primary">Tracking</Link>
          <Link href="/faq" className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-primary">FAQ</Link>
          <Link href="/contact" className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-primary">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95 shadow-sm">Get a Quote</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-primary-50 md:hidden" aria-label="Menu">
          {open ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 pb-5 pt-2 md:hidden animate-fade-in-up">
          <div className="flex flex-col gap-0.5">
            <Link href="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted hover:bg-primary-50 hover:text-primary">Home</Link>
            <button onClick={() => setMobSvc(!mobSvc)} className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-muted hover:bg-primary-50 hover:text-primary">
              Services <span className={`text-xs transition-transform ${mobSvc ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobSvc && <div className="ml-3 border-l-2 border-primary-100 pl-3">{services.map((s) => <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-1.5 text-sm text-muted hover:text-primary">{s.title}</Link>)}</div>}
            <Link href="/about" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted hover:bg-primary-50 hover:text-primary">About</Link>
            <Link href="/tracking" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted hover:bg-primary-50 hover:text-primary">Tracking</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted hover:bg-primary-50 hover:text-primary">FAQ</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted hover:bg-primary-50 hover:text-primary">Contact</Link>
            <div className="mt-3 border-t border-border pt-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
