import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { fees } from "@/lib/site-data";

export function Fees() {
  return (
    <section id="fees" className="section-pad bg-blue-50/70 dark:bg-slate-950/40">
      <div className="container">
        <SectionHeading
          eyebrow="Registration Fees"
          title="Clear delegate pricing"
          body="Registration categories for Indian and international participants."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {fees.map((fee, index) => (
            <Reveal
              key={fee.name}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className="rounded-[24px] border border-blue-200/80 bg-white/76 p-6 shadow-[0_24px_80px_rgba(37,99,235,0.1)] backdrop-blur transition hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_30px_100px_rgba(37,99,235,0.18)] dark:bg-slate-950/65"
            >
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="mt-5 min-h-12 text-base font-semibold">{fee.name}</h3>
              <p className="mt-4 text-3xl font-semibold tracking-normal">{fee.price}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{fee.note}</p>
              <Button asChild variant="secondary" className="mt-6 w-full">
                <a href="#contact">Register Interest</a>
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
