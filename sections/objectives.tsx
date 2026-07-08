import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { objectives } from "@/lib/site-data";

export function Objectives() {
  return (
    <section className="section-pad bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="Objectives"
          title="Eight directions for transformative academic exchange"
          body="Each objective keeps the conference grounded in both intellectual rigor and public relevance."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((objective, index) => (
            <Reveal
              key={objective.title}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className="group rounded-md border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft" >
              <objective.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-base font-semibold">{objective.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{objective.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
