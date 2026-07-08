import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function CallForPapers() {
  return (
    <section className="section-pad bg-slate-950 text-white dark:bg-black">
      <div className="container">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Call For Papers</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl">
              Original unpublished manuscripts are invited.
            </h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-300 sm:grid-cols-3">
              <p>Interdisciplinary research is strongly encouraged across all conference tracks.</p>
              <p>Accepted papers will be peer-reviewed for presentation and publication consideration.</p>
              <p>Authors are invited to connect humanities research with urgent questions of the present.</p>
            </div>
          </div>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
            <Link href="mailto:ichc2027@cgcuniversity.in?subject=Paper%20Submission%20-%20ICHC%202027">
              <FileText className="mr-2 h-4 w-4" />
              Submit Paper
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
