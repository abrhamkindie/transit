"use client";

import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: "lazy" | "eager";
  aspectRatio?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  aspectRatio,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton placeholder */}
      {!loaded && (
        <div
          className={`absolute inset-0 animate-shimmer rounded-none ${
            error ? "bg-surface" : ""
          }`}
          style={aspectRatio ? { aspectRatio } : undefined}
        />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(true); setError(true); }}
        className={`transition-all duration-500 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        } ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    </div>
  );
}
