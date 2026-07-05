"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import PageHero from "@/components/page-hero";
import ScrollReveal from "@/components/scroll-reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const h = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setData({ ...data, [e.target.name]: e.target.value });

  const contactRows = [
    { icon: MapPin, label: "Address", node: <div className="text-sm text-muted">Bole Road, Addis Ababa</div> },
    { icon: Phone, label: "Phone", node: <a href="tel:+251911234567" className="text-sm text-primary-dark transition-colors hover:text-primary">+251 911 234 567</a> },
    { icon: Mail, label: "Email", node: <a href="mailto:info@nextransit.com" className="text-sm text-primary-dark transition-colors hover:text-primary">info@nextransit.com</a> },
    { icon: Clock, label: "Hours", node: <div className="text-sm text-muted">Mon – Fri: 8:00 AM – 6:00 PM</div> },
  ];

  const inputClass = "mt-1.5 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-50";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={<>Let&apos;s move your next shipment.</>}
        subtitle="Share your shipment details and we&apos;ll respond within 24 hours."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80"
        imageAlt="Operations team reviewing freight documents"
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <ScrollReveal className="lg:col-span-3">
              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-dark">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-foreground">Thank You!</h2>
                    <p className="mt-2 max-w-sm text-sm text-muted">We&apos;ve received your inquiry and will respond within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setData({ name: "", email: "", phone: "", company: "", service: "", message: "" }); }}
                      className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-sm shadow-primary/25 transition-all hover:bg-primary-dark active:scale-[0.98]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-foreground sm:text-2xl">Get a Free Quote</h2>
                    <p className="mt-1.5 text-sm text-muted">Fill out the form and we&apos;ll respond within 24 hours.</p>
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-foreground">Full Name *</label>
                          <input id="name" type="text" name="name" required value={data.name} onChange={h} placeholder="Your name" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-foreground">Email *</label>
                          <input id="email" type="email" name="email" required value={data.email} onChange={h} placeholder="your@email.com" className={inputClass} />
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-foreground">Phone</label>
                          <input id="phone" type="tel" name="phone" value={data.phone} onChange={h} placeholder="+251 9XX XXX XXX" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-foreground">Company</label>
                          <input id="company" type="text" name="company" value={data.company} onChange={h} placeholder="Your company" className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-foreground">Service *</label>
                        <select id="service" name="service" required value={data.service} onChange={h} className={inputClass}>
                          <option value="">Select a service...</option>
                          <option value="customs-clearance">Customs Clearance</option>
                          <option value="transit">Transit (T1/T2/TIR)</option>
                          <option value="freight">Freight & Logistics</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-foreground">Message</label>
                        <textarea id="message" name="message" rows={4} value={data.message} onChange={h} placeholder="Tell us about your shipment..." className={`${inputClass} resize-y`} />
                      </div>
                      <button type="submit" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-sm shadow-primary/25 transition-all hover:bg-primary-dark active:scale-[0.98]">
                        <Send className="h-4 w-4" /> Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right" className="lg:col-span-2">
              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">Contact Information</h3>
                <div className="mt-6 space-y-5">
                  {contactRows.map(({ icon: Icon, label, node }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-dark">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{label}</div>
                        {node}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-start gap-3 rounded-2xl bg-primary-50 p-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
                  <p className="text-sm text-foreground">We respond to every inquiry within 24 hours — often much sooner.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
