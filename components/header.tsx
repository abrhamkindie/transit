"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { title: "Customs Clearance", href: "/services/customs-clearance" },
  { title: "Transit Services", href: "/services/transit" },
  { title: "Freight & Logistics", href: "/services/freight-logistics" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobSvc, setMobSvc] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-sm border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative text-lg font-bold text-foreground tracking-tight">
            Nex<span className="text-primary">Transit</span>
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          <Link href="/" className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-all hover:bg-primary-50 hover:text-primary">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button
              className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-all hover:bg-primary-50 hover:text-primary"
              onClick={() => setDrop(!drop)}
              aria-expanded={drop}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  drop ? "rotate-180" : ""
                }`}
              />
            </button>
            {drop && (
              <div className="absolute left-0 top-full mt-1.5 w-52 rounded-xl border border-border bg-white p-1.5 shadow-elevated animate-scale-in">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm text-muted transition-all hover:bg-primary-50 hover:text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-200 transition-all group-hover:bg-primary group-hover:w-3" />
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-all hover:bg-primary-50 hover:text-primary">
            About
          </Link>
          <Link href="/tracking" className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-all hover:bg-primary-50 hover:text-primary">
            Tracking
          </Link>
          <Link href="/faq" className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-all hover:bg-primary-50 hover:text-primary">
            FAQ
          </Link>
          <Link href="/contact" className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-all hover:bg-primary-50 hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="relative inline-flex h-9 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-95 shadow-sm overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Get a Quote</span>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-primary-50 hover:text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-white px-4 pb-6 pt-3">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-200" />
              Home
            </Link>
            <button
              onClick={() => setMobSvc(!mobSvc)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-200" />
                Services
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobSvc ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobSvc ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="ml-7 border-l-2 border-primary-200 pl-4 space-y-0.5 pt-1 pb-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            {[
              { label: "About", href: "/about" },
              { label: "Tracking", href: "/tracking" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-200" />
                {link.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-dark active:scale-[0.98] shadow-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
