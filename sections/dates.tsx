import { CalendarCheck } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { dates } from "@/lib/site-data";

export function Dates() {
  const currentIndex = 0;

  return (
    <section id="dates" className="section-pad relative overflow-hidden">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="container">
        <SectionHeading
          eyebrow="Important Dates"
          title="Submission and registration timeline"
          body="Key milestones for authors, presenters and delegates."
        />
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-5">
          {dates.map(([label, date], index) => (
            <Reveal key={label} transition={{ delay: index * 0.05, duration: 0.45 }} className="relative">
              <div className="rounded-[24px] border border-blue-200/75 bg-white/72 p-5 shadow-[0_24px_80px_rgba(37,99,235,0.1)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400 dark:bg-slate-950/65">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    index < currentIndex
                      ? "bg-slate-100 text-slate-400"
                      : index === currentIndex
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600"
                  }`}
                  style={index === currentIndex ? { animation: "pulse-blue 2.4s ease-in-out infinite" } : undefined}
                >
                  <CalendarCheck className="h-5 w-5" />
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">Milestone {index + 1}</p>
                <h3 className="mt-2 min-h-12 font-semibold">{label}</h3>
                <p className="mt-4 text-sm font-medium text-muted-foreground">{date}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
