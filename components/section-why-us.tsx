"use client";

import { BarChart3, Clock, FileText, Globe, HeadphonesIcon, ShieldCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance-First Handling",
    desc: "Declarations, permits, duties, and inspections are managed with documented controls.",
  },
  {
    icon: Clock,
    title: "Fast Issue Escalation",
    desc: "Port, border, and customs queries are escalated before they become avoidable delays.",
  },
  {
    icon: HeadphonesIcon,
    title: "Single Point of Contact",
    desc: "Shipment owners, finance teams, and consignees stay aligned through one account manager.",
  },
  {
    icon: FileText,
    title: "Paperwork Discipline",
    desc: "Invoices, origin documents, packing lists, and transit files are checked before submission.",
  },
  {
    icon: Globe,
    title: "Corridor Coverage",
    desc: "Partner networks support shipments across East Africa, the Middle East, Europe, and Asia.",
  },
  {
    icon: BarChart3,
    title: "Trackable Milestones",
    desc: "Status updates are tied to real clearance, release, transport, and delivery events.",
  },
];

export default function SectionWhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24" id="why-us">
      {/* Decorative background */}
      <div className="dots-pattern-light absolute inset-0 opacity-30" />
      <div className="blob-primary -left-40 top-1/3 h-80 w-80" />
      <div className="blob-accent -right-40 bottom-1/4 h-72 w-72" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-eyebrow">Why NexTransit</span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Practical customs expertise, coordinated with real freight movement.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              We are structured for shippers who need documents checked early, clearance problems
              handled quickly, and transport updates that match what is happening on the ground.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - spans 2 cols */}
          <ScrollReveal variant="up" threshold={0.05}>
            <div className="card-elevated group relative overflow-hidden p-6 sm:col-span-2 sm:p-8 lg:col-span-2">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />
              <div className="flex items-start gap-5">
                <div className="icon-glow h-14 w-14 shrink-0 rounded-2xl">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Compliance-First Handling</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    Declarations, permits, duties, and inspections are managed with documented
                    controls. Every submission is reviewed before it reaches the authority,
                    reducing rejection risk and accelerating clearance.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Cards 2-5 */}
          {features.slice(1, 5).map((feature) => (
            <ScrollReveal key={feature.title} variant="up" threshold={0.05}>
              <div className="card-premium group p-6">
                <div className="icon-glow mb-4">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}

          {/* Card 6 - spans 2 cols */}
          <ScrollReveal variant="up" threshold={0.05}>
            <div className="card-elevated group relative overflow-hidden p-6 sm:col-span-2 sm:p-8 lg:col-span-2">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />
              <div className="flex items-start gap-5">
                <div className="icon-accent h-14 w-14 shrink-0 rounded-2xl">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Trackable Milestones</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    Status updates are tied to real clearance, release, transport, and delivery
                    events. You always know exactly where your shipment stands, with no
                    guesswork or follow-up calls needed.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
