"use client";

import { BarChart3, Clock, FileText, Globe, HeadphonesIcon, ShieldCheck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance-First Handling",
    desc: "Declarations, permits, duties, and inspections are managed with documented controls. Every submission is reviewed before it reaches the authority, reducing rejection risk.",
    featured: true,
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
    desc: "Status updates are tied to real clearance, release, transport, and delivery events. You always know exactly where your shipment stands.",
    featured: true,
  },
];

export default function SectionWhyUs() {
  return (
    <section className="bg-white py-20 sm:py-24" id="why-us">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
              Why NexTransit
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Practical customs expertise,{" "}
              <span className="text-gradient">coordinated with real freight.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              We are structured for shippers who need documents checked early, clearance problems
              handled quickly, and transport updates that match what is happening on the ground.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            if (feature.featured) {
              return (
                <ScrollReveal key={feature.title} variant="up" threshold={0.05}>
                  <div className="group h-full rounded-2xl border-2 border-primary-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 sm:p-8 lg:col-span-2">
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                          {feature.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={feature.title} variant="up" threshold={0.05}>
                <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{feature.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
