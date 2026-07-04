"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-b border-white/10 bg-white/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-sm shadow-primary/25">
            NT
          </span>
          <span className="relative text-lg font-bold tracking-tight text-foreground">
            Nex<span className="text-primary">Transit</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Customs & Logistics
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          <Link href="/" className="rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button
              className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary"
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
              <div className="absolute left-0 top-full mt-2 w-60 rounded-lg border border-border bg-white p-2 shadow-elevated animate-scale-in">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group flex items-center gap-3 rounded-md px-3.5 py-3 text-sm text-muted transition-colors hover:bg-primary-50 hover:text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary transition-all group-hover:w-3" />
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary">
            About
          </Link>
          <Link href="/tracking" className="rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary">
            Tracking
          </Link>
          <Link href="/faq" className="rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary">
            FAQ
          </Link>
          <Link href="/contact" className="rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+251911234567"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            +251 911 234 567
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-muted transition-colors hover:bg-primary-50 hover:text-primary md:hidden"
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
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-100" />
              Home
            </Link>
            <button
              onClick={() => setMobSvc(!mobSvc)}
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-100" />
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
              <div className="ml-7 border-l-2 border-primary-100 pl-4 space-y-0.5 pt-1 pb-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-primary"
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
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-100" />
                {link.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark active:scale-[0.98]"
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
