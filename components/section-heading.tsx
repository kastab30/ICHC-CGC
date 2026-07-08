import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, body, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-muted-foreground">{body}</p> : null}
    </div>
  );
}
