"use client";

import { useEffect } from "react";

export function PremiumBackground() {
  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--cursor-x)_var(--cursor-y),rgba(96,165,250,0.24),transparent_28rem)]" />
      <div className="soft-grid absolute inset-0 opacity-70" />
      <div className="noise absolute inset-0 opacity-[0.18]" />
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-[32rem] w-[32rem] rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-400/35"
          style={{
            left: `${(index * 19) % 100}%`,
            top: `${(index * 37) % 100}%`,
            animation: `float-slow ${6 + (index % 5)}s ease-in-out ${index * 0.25}s infinite`
          }}
        />
      ))}
    </div>
  );
}
