"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <section className="bg-dark-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/40">Ready to simplify your customs clearance? Get in touch for a free consultation.</p>
        </div>
      </section>

      <section className="bg-dark-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400"><CheckCircle className="h-7 w-7" /></div>
                  <h2 className="mt-4 text-xl font-bold text-white">Thank You!</h2>
                  <p className="mt-2 text-sm text-white/40">We&apos;ve received your inquiry and will respond within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" }); }} className="mt-5 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-xs font-medium text-white hover:bg-primary-dark">Send Another</button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">Get a Free Quote</h2>
                  <p className="mt-1 text-sm text-white/40">Fill out the form and our team will respond within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-white/70">Full Name *</label>
                        <input id="name" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className="mt-1 block w-full rounded-md border border-dark-border bg-dark-bg px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-white/70">Email *</label>
                        <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="mt-1 block w-full rounded-md border border-dark-border bg-dark-bg px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-white/70">Phone</label>
                        <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+251 9XX XXX XXX" className="mt-1 block w-full rounded-md border border-dark-border bg-dark-bg px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-medium text-white/70">Company</label>
                        <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="mt-1 block w-full rounded-md border border-dark-border bg-dark-bg px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-white/70">Service *</label>
                      <select id="service" name="service" required value={formData.service} onChange={handleChange} className="mt-1 block w-full rounded-md border border-dark-border bg-dark-bg px-3.5 py-2.5 text-xs text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                        <option value="">Select a service...</option>
                        <option value="customs-clearance">Customs Clearance</option>
                        <option value="transit">Transit (T1/T2/TIR)</option>
                        <option value="freight">Freight & Logistics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-white/70">Message</label>
                      <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your shipment..." className="mt-1 block w-full rounded-md border border-dark-border bg-dark-bg px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y" />
                    </div>
                    <button type="submit" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-5 text-xs font-medium text-white transition-all hover:bg-primary-dark active:scale-[0.98]"><Send className="h-3.5 w-3.5" /> Send Message</button>
                  </form>
                </>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-lg border border-dark-border bg-dark-bg p-6">
                <h3 className="text-sm font-semibold text-white">Contact Information</h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary/10 text-primary-light"><MapPin className="h-4 w-4" /></div>
                    <div><div className="text-xs font-medium text-white">Address</div><div className="text-xs text-white/40">Bole Road, Addis Ababa, Ethiopia</div></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary/10 text-primary-light"><Phone className="h-4 w-4" /></div>
                    <div><div className="text-xs font-medium text-white">Phone</div><a href="tel:+251911234567" className="text-xs text-primary-light hover:text-primary">+251 911 234 567</a></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary/10 text-primary-light"><Mail className="h-4 w-4" /></div>
                    <div><div className="text-xs font-medium text-white">Email</div><a href="mailto:info@nextransit.com" className="text-xs text-primary-light hover:text-primary">info@nextransit.com</a></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary/10 text-primary-light"><Clock className="h-4 w-4" /></div>
                    <div><div className="text-xs font-medium text-white">Hours</div><div className="text-xs text-white/40">Mon – Fri: 8:00 AM – 6:00 PM</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
