import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-white text-xs font-bold">N</div>
              <span className="text-sm font-bold text-white">Nex<span className="text-primary-light">Transit</span></span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-white/40">
              Your trusted partner in international customs clearance and logistics. We handle all customs formalities and transit documentation.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">Links</h3>
            <ul className="mt-3 space-y-1.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Tracking", href: "/tracking" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-white/40 transition-colors hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">Services</h3>
            <ul className="mt-3 space-y-1.5">
              {[
                { label: "Customs Clearance", href: "/services/customs-clearance" },
                { label: "Transit Services", href: "/services/transit" },
                { label: "Freight & Logistics", href: "/services/freight-logistics" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-white/40 transition-colors hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">Contact</h3>
            <ul className="mt-3 space-y-1.5">
              <li className="text-xs text-white/40">Bole Road, Addis Ababa</li>
              <li><a href="tel:+251911234567" className="text-xs text-white/40 hover:text-white">+251 911 234 567</a></li>
              <li><a href="mailto:info@nextransit.com" className="text-xs text-white/40 hover:text-white">info@nextransit.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-[11px] text-white/30">&copy; {new Date().getFullYear()} NexTransit. All rights reserved.</p>
          <div className="flex gap-4 text-[11px] text-white/30">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
