"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const campusSlides = [
  {
    title: "Research Buildings",
    caption: "Modern academic infrastructure for future-facing research.",
    src: "/cgc.webp"
  },
  {
    title: "Campus Life",
    caption: "A vibrant university environment for delegates, scholars and students.",
    src: "/life.webp"
  }
  // {
  //   title: "Library and Learning",
  //   caption: "Quiet spaces for reading, discussion and academic imagination.",
  //   src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80"
  // },
  // {
  //   title: "Auditorium Sessions",
  //   caption: "Conference-ready spaces for keynotes, panels and presentations.",
  //   src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80"
  // }
];

export function University() {
  const [active, setActive] = useState(0);
  const slide = campusSlides[active];

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Host University"
          title="A campus setting for scholarship, dialogue and discovery"
          // body="Campus photography placeholders can be replaced with CGC University drone shots, auditorium images and research spaces."
        />
        <Reveal className="glass-card relative mt-14 overflow-hidden rounded-[24px] p-4">
          <div className="relative min-h-[520px] overflow-hidden rounded-[20px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.src}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0"
              >
                <Image src={slide.src} alt={slide.title} fill priority={active === 0} sizes="100vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                <Building2 className="h-3.5 w-3.5" />
                CGC University, Mohali
              </div>
              <h3 className="mt-5 max-w-2xl text-4xl font-semibold">{slide.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-50">{slide.caption}</p>
              <div className="mt-7 flex gap-3">
                <Button variant="secondary" size="icon" onClick={() => setActive((active - 1 + campusSlides.length) % campusSlides.length)} aria-label="Previous campus image">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" onClick={() => setActive((active + 1) % campusSlides.length)} aria-label="Next campus image">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {campusSlides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={`rounded-2xl border p-3 text-left text-sm transition ${
                  index === active ? "border-blue-500 bg-blue-50 text-blue-700" : "border-blue-100 bg-white/70 text-muted-foreground hover:border-blue-300"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
