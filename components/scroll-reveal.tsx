"use client";

import { useScrollReveal } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  threshold?: number;
  as?: "div" | "section" | "article" | "span";
}

const variantClasses = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  threshold,
  as: Tag = "div",
}: Props) {
  const { ref, revealed } = useScrollReveal({ threshold });
  return (
    <Tag
      ref={ref}
      className={`${variantClasses[variant]} ${revealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
