"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  FileCheck,
  ClipboardList,
  Ship,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Customs Clearance",
    href: "/services/customs-clearance",
    desc: "Declarations, duties & authority filing",
    icon: FileCheck,
  },
  {
    title: "Transit Services",
    href: "/services/transit",
    desc: "T1, T2, TIR & cross-border permits",
    icon: ClipboardList,
  },
  {
    title: "Freight & Logistics",
    href: "/services/freight-logistics",
    desc: "Ocean, road, warehousing & insurance",
    icon: Ship,
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Tracking", href: "/tracking" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobSvc, setMobSvc] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menus on route change
  useEffect(() => {
    setOpen(false);
    setDrop(false);
    setMobSvc(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const servicesActive = pathname.startsWith("/services");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
            NT
          </span>
          <span className="relative text-lg font-bold leading-tight tracking-tight text-foreground">
            Nex<span className="text-primary">Transit</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Customs &amp; Logistics
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavItem href="/" label="Home" active={isActive("/")} />

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button
              className={`group relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                servicesActive ? "text-primary-dark" : "text-muted hover:text-foreground"
              }`}
              onClick={() => setDrop((d) => !d)}
              aria-expanded={drop}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${drop ? "rotate-180" : ""}`}
              />
              <span
                className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-light transition-transform duration-300 ${
                  servicesActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute left-0 top-full w-[320px] pt-3 ${
                drop ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div
                className={`origin-top overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-[var(--shadow-elevated)] transition-all duration-200 ease-out ${
                  drop ? "translate-y-0 scale-100 opacity-100" : "-translate-y-1 scale-95 opacity-0"
                }`}
              >
                <p className="px-2.5 pb-1.5 pt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-light">
                  What we do
                </p>

                {services.map((s, i) => {
                  const on = isActive(s.href);
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      aria-current={on ? "page" : undefined}
                      style={{ transitionDelay: drop ? `${80 + i * 60}ms` : "0ms" }}
                      className={`group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 ease-out ${
                        drop ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                      } ${on ? "bg-primary-50" : "hover:bg-surface"}`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${
                          on
                            ? "bg-primary text-white shadow-md shadow-primary/25"
                            : "bg-primary-50 text-primary-dark group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20"
                        }`}
                      >
                        <s.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-sm font-semibold transition-colors ${
                            on ? "text-primary-dark" : "text-foreground group-hover:text-primary-dark"
                          }`}
                        >
                          {s.title}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-muted">{s.desc}</span>
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                          on
                            ? "text-primary"
                            : "text-muted-light group-hover:translate-x-0.5 group-hover:text-primary"
                        }`}
                      />
                    </Link>
                  );
                })}

                <Link
                  href="/services"
                  style={{ transitionDelay: drop ? `${80 + services.length * 60}ms` : "0ms" }}
                  className={`group mt-1.5 flex items-center justify-center gap-2 rounded-xl bg-surface py-2.5 text-xs font-bold uppercase tracking-wide text-primary-dark transition-all duration-300 ease-out hover:bg-primary-50 ${
                    drop ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  View all services
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} active={isActive(link.href)} />
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+251911234567"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-white px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            +251 911 234 567
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-sm shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-md active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted transition-colors hover:bg-primary-50 hover:text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-white px-4 pb-6 pt-3">
          <div className="flex flex-col gap-1">
            <MobileLink href="/" label="Home" active={isActive("/")} onClick={() => setOpen(false)} />

            <button
              onClick={() => setMobSvc(!mobSvc)}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                servicesActive ? "bg-primary-50 text-primary-dark" : "text-muted hover:bg-primary-50 hover:text-primary"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`h-1.5 w-1.5 rounded-full ${servicesActive ? "bg-primary" : "bg-primary-100"}`} />
                Services
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobSvc ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobSvc ? "max-h-72" : "max-h-0"}`}>
              <div className="ml-7 space-y-0.5 border-l-2 border-primary-100 py-1 pl-4">
                {services.map((s) => {
                  const on = isActive(s.href);
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      aria-current={on ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        on ? "font-semibold text-primary" : "text-muted hover:text-primary"
                      }`}
                    >
                      <s.icon className="h-4 w-4 shrink-0" />
                      {s.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            {navLinks.map((link) => (
              <MobileLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(link.href)}
                onClick={() => setOpen(false)}
              />
            ))}

            <div className="mt-4 border-t border-border pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark active:scale-[0.98]"
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

function NavItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
        active ? "text-primary-dark" : "text-muted hover:text-foreground"
      }`}
    >
      {label}
      <span
        className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-light transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

function MobileLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
        active ? "bg-primary-50 text-primary-dark" : "text-muted hover:bg-primary-50 hover:text-primary"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-primary" : "bg-primary-100"}`} />
      {label}
    </Link>
  );
}
