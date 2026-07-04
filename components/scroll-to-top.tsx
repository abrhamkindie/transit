"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-50 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-white text-muted shadow-sm transition-all duration-300 hover:bg-primary-50 hover:text-primary active:scale-90 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none"
      }`}>
      <ArrowUp className="h-3.5 w-3.5" />
    </button>
  );
}
