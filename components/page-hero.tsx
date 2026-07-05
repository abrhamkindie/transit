import { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ImageWithSkeleton from "./image-with-skeleton";

type Crumb = { label: string; href?: string };

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

/**
 * Shared light split hero for secondary pages: breadcrumb + eyebrow + oversized
 * heading + subtitle (+ optional children) on the left, a framed photo on the right.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image,
  imageAlt = "",
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* faint dot grid, fading from the top-left */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cdecf9 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          WebkitMaskImage: "radial-gradient(ellipse at top left, black, transparent 68%)",
          maskImage: "radial-gradient(ellipse at top left, black, transparent 68%)",
        }}
      />
      {/* soft brand glow */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-primary-100 opacity-40 blur-[110px]" />

      <div
        className={`relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:gap-14 lg:py-24 ${
          image ? "lg:grid-cols-2" : ""
        }`}
      >
        {/* Text */}
        <div>
          <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-light" />}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-primary-dark">{c.label}</span>
                )}
              </span>
            ))}
          </nav>

          {eyebrow && (
            <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
              <span className="h-px w-8 bg-primary" />
              {eyebrow}
            </span>
          )}

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{subtitle}</p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>

        {/* Image */}
        {image && (
          <div className="relative">
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-gradient-to-br from-primary-100 to-primary-50"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevated)]">
              <ImageWithSkeleton
                src={image}
                alt={imageAlt}
                wrapperClassName="aspect-[4/3] w-full"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
