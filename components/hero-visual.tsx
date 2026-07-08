"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BookOpen, BrainCircuit, FileCheck2, Globe2, Mic2, Network, UsersRound } from "lucide-react";
import { useRef } from "react";

const floatingCards = [
  { icon: Mic2, label: "Conference", value: "Global Forum" },
  { icon: FileCheck2, label: "26-27 Feb", value: "2027" },
  { icon: UsersRound, label: "Authors", value: "International" },
  { icon: BookOpen, label: "Research", value: "Peer Reviewed" }
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(my, { stiffness: 80, damping: 18 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        mx.set((event.clientX - bounds.left) / bounds.width - 0.5);
        my.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative min-h-[430px] overflow-hidden rounded-[24px] border border-blue-200/60 bg-white/65 p-5 shadow-[0_32px_120px_rgba(37,99,235,0.18)] backdrop-blur-2xl dark:bg-slate-950/60"
    >
      <div className="soft-grid absolute inset-0 opacity-80" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-300/50 blur-3xl" />
      <div className="absolute -bottom-20 left-8 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />

      <svg viewBox="0 0 640 460" className="absolute inset-0 h-full w-full opacity-90" role="img" aria-label="Digital humanities network">
        <path d="M77 241c73-126 222-169 354-101 65 33 106 85 132 150" fill="none" stroke="#BFDBFE" strokeWidth="2" />
        <path d="M122 314c84-78 179-93 285-47 44 19 78 44 105 78" fill="none" stroke="#60A5FA" strokeOpacity="0.35" strokeWidth="2" />
        <path d="M145 125c45 44 94 68 147 72 79 5 139-31 210-84" fill="none" stroke="#2563EB" strokeOpacity="0.25" strokeWidth="2" />
        {[90, 145, 210, 289, 360, 438, 520].map((x, index) => (
          <g key={x}>
            <circle cx={x} cy={index % 2 ? 165 : 258} r="7" fill="#2563EB" opacity="0.68" />
            <circle cx={x} cy={index % 2 ? 165 : 258} r="22" fill="#60A5FA" opacity="0.08" />
          </g>
        ))}
        <path d="M330 88c54 0 98 45 98 101 0 81-72 99-72 176h-54c0-72-69-96-69-176 0-56 43-101 97-101z" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="3" />
        <path d="M305 176c19-20 39-20 58 0M298 218h74M306 258h58" stroke="#2563EB" strokeOpacity="0.65" strokeWidth="6" strokeLinecap="round" />
      </svg>

      <div className="relative z-10 grid h-full min-h-[390px] content-between">
        <div className="flex justify-between">
          <div className="rounded-2xl border border-blue-200/70 bg-white/70 p-4 backdrop-blur">
            <Globe2 className="h-6 w-6 text-blue-600" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">World Map</p>
          </div>
          <div className="rounded-2xl border border-blue-200/70 bg-white/70 p-4 backdrop-blur">
            <BrainCircuit className="h-6 w-6 text-blue-600" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">AI + Ethics</p>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-blue-200 bg-white/70 shadow-[0_20px_80px_rgba(37,99,235,0.18)] backdrop-blur"
        >
          <Network className="h-10 w-10 text-blue-600" />
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.label}
              animate={{ y: [0, index % 2 ? 10 : -10, 0] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-blue-200/70 bg-white/72 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_16px_50px_rgba(37,99,235,0.18)] dark:bg-slate-950/70"
            >
              <card.icon className="h-5 w-5 text-blue-600" />
              <p className="mt-3 text-xs text-muted-foreground">{card.label}</p>
              <p className="text-sm font-semibold">{card.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
