import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-foreground tracking-tight">Nex<span className="text-primary">Transit</span></Link>
            <p className="mt-3 text-sm leading-relaxed text-muted max-w-xs">Your trusted partner in international customs clearance and logistics. We handle all customs formalities end-to-end.</p>
            {/* Social links could go here */}
            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-muted transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm" aria-label="LinkedIn">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-muted transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm" aria-label="Twitter">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-muted transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm" aria-label="Facebook">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">Links</h3>
            <ul className="mt-4 space-y-3">
              {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Tracking", href: "/tracking" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-muted transition-all hover:text-primary hover:pl-0.5">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">Services</h3>
            <ul className="mt-4 space-y-3">
              {[{ label: "Customs Clearance", href: "/services/customs-clearance" }, { label: "Transit Services", href: "/services/transit" }, { label: "Freight & Logistics", href: "/services/freight-logistics" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-muted transition-all hover:text-primary hover:pl-0.5">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5"><div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Bole Road, Addis Ababa</li>
              <li className="flex items-center gap-2.5"><div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><a href="tel:+251911234567" className="hover:text-primary transition-colors">+251 911 234 567</a></li>
              <li className="flex items-center gap-2.5"><div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><a href="mailto:info@nextransit.com" className="hover:text-primary transition-colors">info@nextransit.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-xs text-muted/70">&copy; {new Date().getFullYear()} NexTransit. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-primary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
