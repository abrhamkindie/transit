"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const h = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary border border-primary/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">Get in Touch</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">Ready to simplify your customs clearance? Get in touch for a free consultation.</p>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20">
        <div className="section-divider" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><CheckCircle className="h-8 w-8" /></div>
                  <h2 className="mt-5 text-xl font-bold text-foreground">Thank You!</h2>
                  <p className="mt-2 text-sm text-muted">We&apos;ve received your inquiry and will respond within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setData({ name: "", email: "", phone: "", company: "", service: "", message: "" }); }} className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md active:scale-[0.98]">Send Another Message</button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">Get a Free Quote</h2>
                  <p className="mt-1.5 text-sm text-muted">Fill out the form and we&apos;ll respond within 24 hours.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div><label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name *</label><input id="name" type="text" name="name" required value={data.name} onChange={h} placeholder="Your name" className="mt-1.5 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50" /></div>
                      <div><label htmlFor="email" className="block text-sm font-medium text-foreground">Email *</label><input id="email" type="email" name="email" required value={data.email} onChange={h} placeholder="your@email.com" className="mt-1.5 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50" /></div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div><label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone</label><input id="phone" type="tel" name="phone" value={data.phone} onChange={h} placeholder="+251 9XX XXX XXX" className="mt-1.5 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50" /></div>
                      <div><label htmlFor="company" className="block text-sm font-medium text-foreground">Company</label><input id="company" type="text" name="company" value={data.company} onChange={h} placeholder="Your company" className="mt-1.5 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50" /></div>
                    </div>
                    <div><label htmlFor="service" className="block text-sm font-medium text-foreground">Service *</label>
                      <select id="service" name="service" required value={data.service} onChange={h} className="mt-1.5 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50">
                        <option value="">Select a service...</option><option value="customs-clearance">Customs Clearance</option><option value="transit">Transit (T1/T2/TIR)</option><option value="freight">Freight & Logistics</option><option value="other">Other</option>
                      </select>
                    </div>
                    <div><label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label><textarea id="message" name="message" rows={4} value={data.message} onChange={h} placeholder="Tell us about your shipment..." className="mt-1.5 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50 resize-y" /></div>
                    <button type="submit" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md active:scale-[0.98]"><Send className="h-4 w-4" /> Send Message</button>
                  </form>
                </>
              )}
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-base font-semibold text-foreground">Contact Information</h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary"><MapPin className="h-5 w-5" /></div><div><div className="text-sm font-medium text-foreground">Address</div><div className="text-sm text-muted">Bole Road, Addis Ababa</div></div></div>
                  <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary"><Phone className="h-5 w-5" /></div><div><div className="text-sm font-medium text-foreground">Phone</div><a href="tel:+251911234567" className="text-sm text-primary hover:text-primary-dark transition-colors">+251 911 234 567</a></div></div>
                  <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary"><Mail className="h-5 w-5" /></div><div><div className="text-sm font-medium text-foreground">Email</div><a href="mailto:info@nextransit.com" className="text-sm text-primary hover:text-primary-dark transition-colors">info@nextransit.com</a></div></div>
                  <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary"><Clock className="h-5 w-5" /></div><div><div className="text-sm font-medium text-foreground">Hours</div><div className="text-sm text-muted">Mon – Fri: 8:00 AM – 6:00 PM</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
