"use client";

import { useState } from "react";
import Link from "next/link";


const services = [
  { title: "Customs Clearance", href: "/services/customs-clearance" },
  { title: "Transit Services", href: "/services/transit" },
  { title: "Freight & Logistics", href: "/services/freight-logistics" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dark-border bg-dark-bg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-white text-xs font-bold">
            N
          </div>
          <span className="text-sm font-bold text-white">
            Nex<span className="text-primary-light">Transit</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/" className="rounded-md px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/services"
              className="rounded-md px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              Services
            </Link>
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-dark-border bg-dark-surface p-1 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-md px-3 py-2 text-xs text-white/60 transition-colors hover:bg-primary/20 hover:text-white"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="rounded-md px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            About
          </Link>
          <Link href="/tracking" className="rounded-md px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            Tracking
          </Link>
          <Link href="/faq" className="rounded-md px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="rounded-md px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex h-7 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-white transition-all hover:bg-primary-dark active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-white/60 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-dark-border bg-dark-bg px-4 pb-5 pt-2 md:hidden">
          <div className="flex flex-col gap-0.5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">
              Home
            </Link>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
            >
              Services
              <span className={`text-xs transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 border-l border-dark-border pl-3">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-1.5 text-xs text-white/60 hover:text-white">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">About</Link>
            <Link href="/tracking" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">Tracking</Link>
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">FAQ</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">Contact</Link>
            <div className="mt-3 border-t border-dark-border pt-3">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
