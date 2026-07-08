"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    title: "International Delegates",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    className: "md:row-span-2"
  },
  {
    title: "Research Presentations",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
    className: ""
  },
  {
    title: "Panel Discussions",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    className: ""
  },
  {
    title: "Academic Networking",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2"
  },
  {
    title: "University Research",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    className: ""
  }
];

export function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryImages)[number] | null>(null);

  return (
    <section id="gallery" className="section-pad relative overflow-hidden bg-blue-50/60 dark:bg-slate-950/40">
      <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="container">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Moments from international academic exchange"
          body="A masonry-style preview for previous conferences, presentations, research conversations and networking."
        />
        <div className="mt-14 grid auto-rows-[240px] gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Reveal key={image.title} transition={{ delay: index * 0.04, duration: 0.45 }} className={image.className}>
              <button
                onClick={() => setSelected(image)}
                className="group relative h-full w-full overflow-hidden rounded-[24px] border border-blue-200/70 bg-white shadow-[0_24px_80px_rgba(37,99,235,0.12)]"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-left font-semibold">{image.title}</span>
                  <Maximize2 className="h-4 w-4 opacity-80" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[24px] bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={selected.src} alt={selected.title} fill sizes="90vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-semibold">{selected.title}</h3>
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-4 bg-white/90"
                onClick={() => setSelected(null)}
                aria-label="Close gallery preview"
              >
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
