import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-base font-bold text-foreground tracking-tight">Nex<span className="text-primary">Transit</span></Link>
            <p className="mt-2 text-sm leading-relaxed text-muted">Your trusted partner in international customs clearance and logistics. We handle all customs formalities end-to-end.</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Links</h3>
            <ul className="mt-3 space-y-2">
              {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Tracking", href: "/tracking" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-muted transition-colors hover:text-primary">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Services</h3>
            <ul className="mt-3 space-y-2">
              {[{ label: "Customs Clearance", href: "/services/customs-clearance" }, { label: "Transit Services", href: "/services/transit" }, { label: "Freight & Logistics", href: "/services/freight-logistics" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-muted transition-colors hover:text-primary">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Bole Road, Addis Ababa</li>
              <li><a href="tel:+251911234567" className="hover:text-primary">+251 911 234 567</a></li>
              <li><a href="mailto:info@nextransit.com" className="hover:text-primary">info@nextransit.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} NexTransit. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
