"use client";

import { useEffect, useState } from "react";
import { Building2, Globe2, Plane, Radio, Route, Ship, Truck } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

type HubKey = "addis" | "djibouti" | "shanghai" | "dubai" | "mombasa" | "nairobi" | "rotterdam";

const hubs: Record<HubKey, { x: number; y: number; label: string; anchor?: "start" | "middle" | "end"; dy?: number }> = {
  rotterdam: { x: 150, y: 92, label: "Rotterdam", anchor: "start", dy: -14 },
  shanghai: { x: 892, y: 128, label: "Shanghai", anchor: "end", dy: -14 },
  dubai: { x: 772, y: 242, label: "Dubai", anchor: "start", dy: -14 },
  djibouti: { x: 638, y: 302, label: "Djibouti", anchor: "start", dy: -14 },
  addis: { x: 498, y: 336, label: "Addis Ababa", anchor: "end", dy: 26 },
  nairobi: { x: 556, y: 452, label: "Nairobi", anchor: "start", dy: 22 },
  mombasa: { x: 626, y: 486, label: "Mombasa", anchor: "start", dy: 22 },
};

const corridors: {
  from: string;
  via: string;
  mode: string;
  days: string;
  stops: HubKey[];
  icon: typeof Ship;
}[] = [
  { from: "Shanghai", via: "Djibouti", mode: "Sea + Road", days: "22–28 days", stops: ["shanghai", "djibouti", "addis"], icon: Ship },
  { from: "Dubai", via: "Direct", mode: "Air + Road", days: "3–5 days", stops: ["dubai", "addis"], icon: Plane },
  { from: "Mombasa", via: "Nairobi", mode: "Road", days: "6–9 days", stops: ["mombasa", "nairobi", "addis"], icon: Truck },
  { from: "Rotterdam", via: "Djibouti", mode: "Sea + Road", days: "26–32 days", stops: ["rotterdam", "djibouti", "addis"], icon: Ship },
];

const metrics = [
  { icon: Building2, value: "6", label: "Regional offices" },
  { icon: Route, value: "4", label: "Active corridors" },
  { icon: Globe2, value: "12+", label: "Countries served" },
  { icon: Radio, value: "24/7", label: "Status coverage" },
];

function buildPath(keys: HubKey[]) {
  const pts = keys.map((k) => hubs[k]);
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const cx = (a.x + b.x) / 2;
    const cy = (a.y + b.y) / 2 - Math.abs(b.x - a.x) * 0.22 - 26;
    d += ` Q ${cx} ${cy} ${b.x} ${b.y}`;
  }
  return d;
}

export default function SectionCoverage() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % corridors.length), 3800);
    return () => clearInterval(id);
  }, [paused]);

  const activeStops = new Set(corridors[active].stops);
  const activeCorridor = corridors[active];

  return (
    <section className="bg-white py-20 sm:py-24" id="coverage">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              Coverage
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              One network across the corridors that reach Ethiopia.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Follow a shipment from origin to Addis Ababa. Every lane below is backed by our own offices
              and vetted partners, so route planning stays tied to clearance and delivery.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div
            className="mt-12 overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-elevated)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Header bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-light px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                  Live corridor network
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <activeCorridor.icon className="h-4 w-4 text-primary-dark" />
                <span className="font-bold text-foreground">{activeCorridor.from}</span>
                <span className="text-muted-light">→</span>
                <span className="font-bold text-foreground">Addis Ababa</span>
                <span className="hidden text-muted sm:inline">· {activeCorridor.days}</span>
              </div>
            </div>

            {/* Map canvas */}
            <div className="relative bg-gradient-to-br from-primary-50/60 via-white to-surface">
              <svg viewBox="0 0 1000 560" className="h-auto w-full" role="img" aria-label="Trade corridor map">
                <defs>
                  <pattern id="cov-grid" width="42" height="42" patternUnits="userSpaceOnUse">
                    <path d="M42 0H0V42" fill="none" stroke="#e2edf5" strokeWidth="1" />
                  </pattern>
                  <linearGradient id="cov-route" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8fd4f0" />
                    <stop offset="55%" stopColor="#3a9bc8" />
                    <stop offset="100%" stopColor="#f09b6b" />
                  </linearGradient>
                </defs>

                <rect width="1000" height="560" fill="url(#cov-grid)" />

                {/* soft landmass hints */}
                <g fill="#e8f2f9" opacity="0.7">
                  <ellipse cx="360" cy="360" rx="230" ry="150" />
                  <ellipse cx="720" cy="220" rx="190" ry="130" />
                  <ellipse cx="560" cy="470" rx="120" ry="80" />
                </g>

                {/* inactive routes */}
                {corridors.map((c, i) =>
                  i === active ? null : (
                    <path
                      key={`bg-${i}`}
                      d={buildPath(c.stops)}
                      fill="none"
                      stroke="#cdecf9"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  )
                )}

                {/* active route */}
                <path d={buildPath(activeCorridor.stops)} fill="none" stroke="url(#cov-route)" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
                <path
                  key={active}
                  d={buildPath(activeCorridor.stops)}
                  fill="none"
                  stroke="url(#cov-route)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                  style={{ animation: "dashFlow 22s linear infinite" }}
                />

                {/* hubs */}
                {(Object.keys(hubs) as HubKey[]).map((key) => {
                  const h = hubs[key];
                  const on = activeStops.has(key);
                  const isDest = key === "addis";
                  return (
                    <g key={key}>
                      {on && (
                        <circle cx={h.x} cy={h.y} r="9" fill={isDest ? "#f09b6b" : "#5bb8e8"} opacity="0.5" style={{ transformBox: "fill-box", transformOrigin: "center", animation: "hubPing 1.8s ease-out infinite" }} />
                      )}
                      <circle cx={h.x} cy={h.y} r={on ? 7 : 5} fill="#ffffff" stroke={isDest ? "#e07e48" : on ? "#3a9bc8" : "#a0adbe"} strokeWidth={on ? 3 : 2} />
                      {isDest && <circle cx={h.x} cy={h.y} r="2.5" fill="#f09b6b" />}
                      <text
                        x={h.x}
                        y={h.y}
                        dy={h.dy}
                        textAnchor={h.anchor ?? "middle"}
                        style={{ paintOrder: "stroke", stroke: "#ffffff", strokeWidth: 3, strokeLinejoin: "round" }}
                        className={`text-[13px] font-semibold ${on ? "fill-foreground" : "fill-muted"}`}
                      >
                        {h.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Corridor selector */}
            <div className="flex gap-3 overflow-x-auto border-t border-border-light p-4 sm:p-5">
              {corridors.map((c, i) => {
                const on = i === active;
                return (
                  <button
                    key={c.from}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group flex min-w-[190px] flex-1 items-center gap-3 rounded-2xl border p-3.5 text-left transition-all duration-300 ${
                      on
                        ? "border-primary bg-primary-50 shadow-sm"
                        : "border-border bg-white hover:border-primary-100 hover:bg-surface"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        on ? "bg-primary text-white shadow-lg shadow-primary/25" : "bg-primary-50 text-primary-dark group-hover:bg-primary-100"
                      }`}
                    >
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        <span className="truncate">{c.from}</span>
                        <span className="text-muted-light">→</span>
                        <span>Addis</span>
                      </div>
                      <div className="mt-0.5 truncate text-xs text-muted">
                        Via {c.via} · <span className="font-semibold text-primary-dark">{c.mode}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Metric strip */}
        <ScrollReveal variant="up">
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-100 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-dark">
                  <m.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold leading-none text-foreground">{m.value}</div>
                  <div className="mt-1 text-xs font-medium text-muted">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
