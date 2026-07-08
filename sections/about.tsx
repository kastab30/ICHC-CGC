"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="section-pad bg-slate-50 dark:bg-slate-950/40">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="A global forum for humanities in a changing world"
          body="Designed for rigorous scholarship, interdisciplinary collaboration and future-facing conversations."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="rounded-md border border-border bg-card p-7 shadow-soft">
            <p className="text-2xl font-semibold leading-tight">CGC University invites scholars worldwide to Mohali.</p>
            <div className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
              <div>
                <p className="font-semibold text-foreground">Format</p>
                <p className="mt-1">Keynotes, peer-reviewed presentations and collaborative sessions.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Focus</p>
                <p className="mt-1">Identity, ethics, sustainability, technology and public humanities.</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="text-base leading-8 text-muted-foreground">
            <p>
              The International Conference on Humanities at the Crossroads: Technology, Trauma, 
              Transnationalism and Transformative Futures is a prestigious gathering that brings 
              together leading scholars, researchers, academics, educators, and practitioners from
              across the globe. This conference is dedicated to fostering interdisciplinary dialogue
              and advancing knowledge at the intersection of the humanities and the pressing
              challenges of our contemporary world. 
              <br />
              <br />
              Under the central theme of Exploring New Paradigms of Identity, Ethics and Sustainable Development, this conference provides a dynamic and inclusive intellectual platform for the exchange of ideas, research findings, and innovative perspectives that address the rapidly evolving socio-cultural, ethical, and technological landscape of the 21st century 
            </p>
            {/* <p className="mt-5">
              The conference welcomes original and unpublished research contributions from diverse fields including Interdisciplinary Studies, Postcolonial and Diaspora Studies, Language, Linguistics and Communication, Environmental Humanities and Eco-Criticism, and Popular and Contemporary Culture. Experts will share their most recent innovations, critical perspectives, and transformative insights that bridge traditional humanities disciplines with emerging global discourses.
            </p> */}
            <div
              className={cn(
                "grid transition-all duration-300",
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="mt-5">
                  The conference welcomes original and unpublished research contributions from diverse fields including Interdisciplinary Studies, Postcolonial and Diaspora Studies, Language, Linguistics and Communication, Environmental Humanities and Eco-Criticism, and Popular and Contemporary Culture. Experts will share their most recent innovations, critical perspectives, and transformative insights that bridge traditional humanities disciplines with emerging global discourses.
                </p>
              </div>
            </div>
            <Button variant="link" className="mt-4" onClick={() => setExpanded((value) => !value)}>
              Read {expanded ? "Less" : "More"}
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", expanded && "rotate-180")} />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
