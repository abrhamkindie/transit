"use client";

import { BarChart3, Clock, FileText, Globe, HeadphonesIcon, ShieldCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance-first handling",
    desc: "Declarations, permits, duties, and inspections are managed with documented controls.",
  },
  {
    icon: Clock,
    title: "Fast issue escalation",
    desc: "Port, border, and customs queries are escalated before they become avoidable delays.",
  },
  {
    icon: HeadphonesIcon,
    title: "Single point of contact",
    desc: "Shipment owners, finance teams, and consignees stay aligned through one account manager.",
  },
  {
    icon: FileText,
    title: "Paperwork discipline",
    desc: "Invoices, origin documents, packing lists, and transit files are checked before submission.",
  },
  {
    icon: Globe,
    title: "Corridor coverage",
    desc: "Partner networks support shipments across East Africa, the Middle East, Europe, and Asia.",
  },
  {
    icon: BarChart3,
    title: "Trackable milestones",
    desc: "Status updates are tied to real clearance, release, transport, and delivery events.",
  },
];

export default function SectionWhyUs() {
  return (
    <section className="bg-surface py-20 sm:py-24" id="why-us">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <ScrollReveal variant="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why NexTransit
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Practical customs expertise, coordinated with real freight movement.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                NexTransit is structured for shippers who need documents checked early,
                clearance problems handled quickly, and transport updates that match what is
                happening on the ground.
              </p>

              <div className="mt-10 border-y border-border">
                {features.map((feature) => (
                  <ScrollReveal key={feature.title} variant="up" threshold={0.1}>
                    <div className="grid gap-4 border-b border-border py-5 last:border-b-0 sm:grid-cols-[2rem_1fr]">
                      <feature.icon className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-muted">{feature.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="lg:pt-12">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=85"
                alt="Freight warehouse with organized cargo and logistics operations"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="mt-6 border-l-4 border-accent pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Operating Standard
                </p>
                <p className="mt-2 text-xl font-semibold leading-7 text-foreground">
                  Documents verified before submission. Milestones tracked after release.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
