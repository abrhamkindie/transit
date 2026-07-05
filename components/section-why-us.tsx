"use client";

import {
  BarChart3,
  Check,
  Clock,
  FileText,
  Globe,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance-First Handling",
    desc: "Every submission is reviewed before it reaches the authority, cutting rejection risk.",
    tag: "Pre-checked",
  },
  {
    icon: Clock,
    title: "Fast Issue Escalation",
    desc: "Port, border, and customs queries are escalated before they turn into delays.",
    tag: "< 2h response",
  },
  {
    icon: Headphones,
    title: "Single Point of Contact",
    desc: "Owners, finance teams, and consignees stay aligned through one account manager.",
    tag: "One manager",
  },
  {
    icon: FileText,
    title: "Paperwork Discipline",
    desc: "Invoices, origin docs, packing lists, and transit files checked before submission.",
    tag: "Zero guesswork",
  },
];

const regions = ["East Africa", "Middle East", "Europe", "Asia"];
const milestones = ["Cleared", "Released", "In transit", "Delivered"];

export default function SectionWhyUs() {
  return (
    <section className="bg-surface py-20 sm:py-24" id="why-us">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              Why NexTransit
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Built for shippers who can&apos;t afford{" "}
              <span className="text-gradient-accent">surprises.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Documents checked early, clearance problems handled fast, and transport updates that
              match what is actually happening on the ground.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {/* Spotlight tile */}
          <ScrollReveal variant="left" className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-foreground p-7 text-white sm:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-40 blur-2xl"
                style={{ background: "radial-gradient(circle, #3a9bc8 0%, transparent 70%)" }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-light backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Our edge
                </span>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-6xl font-bold leading-none text-white sm:text-7xl">98%</span>
                  <span className="mb-1.5 text-lg font-bold text-accent">first-pass</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  of declarations clear on the first submission when they go through our review.
                </p>
              </div>
              <ul className="relative mt-8 space-y-2.5">
                {["Reviewed before every filing", "Escalation, not silence", "Updates tied to real events"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary-light">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </ScrollReveal>

          {/* Standard feature tiles */}
          {features.map((feature) => (
            <ScrollReveal key={feature.title} variant="up" threshold={0.05} className="lg:col-span-2">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-dark">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}

          {/* Wide tile: corridor coverage */}
          <ScrollReveal variant="up" className="sm:col-span-2 lg:col-span-3">
            <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl hover:shadow-primary/5 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                <Globe className="h-6 w-6" />
              </div>
              <div className="mt-5 flex-1 sm:mt-0">
                <h3 className="text-lg font-bold text-foreground">Corridor Coverage</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  Partner networks support shipments across four major trade regions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {regions.map((r) => (
                    <span
                      key={r}
                      className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-foreground"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Wide tile: trackable milestones */}
          <ScrollReveal variant="up" className="sm:col-span-2 lg:col-span-3">
            <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Trackable Milestones</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Status tied to real clearance, release, and delivery events.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center">
                {milestones.map((m, i) => (
                  <div key={m} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                          i < 3 ? "bg-primary text-white" : "border-2 border-primary-100 bg-white text-primary-dark"
                        }`}
                      >
                        {i < 3 ? <Check className="h-3 w-3" /> : i + 1}
                      </span>
                      <span className="mt-1.5 whitespace-nowrap text-[11px] font-medium text-muted">{m}</span>
                    </div>
                    {i < milestones.length - 1 && (
                      <span className={`mx-1 h-0.5 flex-1 rounded-full ${i < 2 ? "bg-primary" : "bg-primary-100"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
