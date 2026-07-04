"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options?: { threshold?: number; rootMargin?: string; once?: boolean }) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } = options ?? {};
  const ref = useRef<HTMLDivElement>(null!);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRevealed(true); if (once) o.unobserve(el); } }, { threshold, rootMargin });
    o.observe(el);
    return () => o.disconnect();
  }, [threshold, rootMargin, once]);
  return { ref, revealed };
}

export function useCounter(end: number, duration = 2000, start = true) {
  const [count, setCount] = useState(0);
  const st = useRef<number | null>(null);
  const fr = useRef<number | null>(null);
  useEffect(() => {
    if (!start) return;
    st.current = null;
    const step = (t: number) => {
      if (!st.current) st.current = t;
      const p = Math.min((t - st.current) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) fr.current = requestAnimationFrame(step);
    };
    fr.current = requestAnimationFrame(step);
    return () => { if (fr.current) cancelAnimationFrame(fr.current); };
  }, [end, duration, start]);
  return count;
}
