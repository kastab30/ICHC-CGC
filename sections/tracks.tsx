"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { tracks } from "@/lib/site-data";

export function Tracks() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return tracks;
    return tracks.filter(
      (track) =>
        track.title.toLowerCase().includes(normalized) ||
        track.topics.some((topic) => topic.toLowerCase().includes(normalized))
    );
  }, [query]);

  return (
    <section id="tracks" className="section-pad relative overflow-hidden bg-blue-50/70 dark:bg-slate-950/40">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="container">
        <SectionHeading
          eyebrow="Conference Tracks"
          title="Research tracks built for interdisciplinary discovery"
          body="Search across tracks and expand each area to view sample topics."
        />
        <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-full border border-blue-200/80 bg-white/75 px-5 py-3 shadow-[0_18px_60px_rgba(37,99,235,0.1)] backdrop-blur">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tracks or topics"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            aria-label="Search conference tracks"
          />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {filtered.map((track, index) => (
            <Reveal key={track.title} transition={{ delay: index * 0.04, duration: 0.45 }}>
              <Accordion type="single" collapsible defaultValue={index === 0 ? track.title : undefined}>
                <AccordionItem value={track.title} className="rounded-[24px] border border-blue-200/80 bg-white/72 px-6 shadow-[0_24px_80px_rgba(37,99,235,0.1)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400 dark:bg-slate-950/65">
                  <AccordionTrigger className="gap-4 text-base">
                    <span className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 shadow-inner">
                        <track.icon className="h-5 w-5 text-primary" />
                      </span>
                      <span>{track.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {track.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-blue-200 bg-blue-50/70 px-3 py-2 text-xs font-medium text-blue-700"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
