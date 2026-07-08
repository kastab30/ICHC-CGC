"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, Mail, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import committeeMembers from "@/data/committee.json";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type CommitteeMember = {
  name: string;
  role: string;
  designation: string;
  institution: string;
  image: string;
  bio: string;
  researchAreas: string[];
  featured?: boolean;
};

export function Committee() {
  const [selected, setSelected] = useState<CommitteeMember | null>(null);
  const members = committeeMembers as CommitteeMember[];
  const chiefs = members.filter((member) => member.featured);
  const generalMembers = members.filter((member) => !member.featured);

  return (
    <section id="committee" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-24 h-72 bg-blue-200/30 blur-3xl" />
      <div className="container">
        <SectionHeading
          eyebrow="Organizing Committee"
          title="A distinguished committee with global academic ambition"
          body="Premium profile cards are powered by an easy-to-edit JSON structure for names, roles, photos and biographies."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {chiefs.map((member, index) => (
            <Reveal key={member.name} transition={{ delay: index * 0.06, duration: 0.5 }}>
              <button
                onClick={() => setSelected(member)}
                className="group grid w-full gap-5 rounded-[24px] border border-blue-200/80 bg-white/76 p-5 text-left shadow-[0_30px_90px_rgba(37,99,235,0.14)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400 sm:grid-cols-[180px_1fr] dark:bg-slate-950/70"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                  <Image src={member.image} alt={member.name} fill sizes="(min-width: 1024px) 180px, 45vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="self-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    <Award className="h-3.5 w-3.5" />
                    Chief Patron
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-2 text-sm font-medium text-blue-700">{member.designation}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{member.institution}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{member.bio}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {generalMembers.map((member, index) => (
            <Reveal key={member.name} transition={{ delay: index * 0.03, duration: 0.45 }}>
              <button
                onClick={() => setSelected(member)}
                className="group h-full w-full rounded-[24px] border border-blue-200/75 bg-white/72 p-4 text-left shadow-[0_22px_70px_rgba(37,99,235,0.1)] backdrop-blur-xl transition hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_28px_90px_rgba(37,99,235,0.18)] dark:bg-slate-950/65"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                  <Image src={member.image} alt={member.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">{member.role}</p>
                <h3 className="mt-2 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.designation}</p>
                <div className="mt-4 flex gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 text-xs font-semibold text-blue-700">in</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 text-blue-700"><Mail className="h-3.5 w-3.5" /></span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative grid max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[24px] bg-white p-5 shadow-2xl sm:grid-cols-[260px_1fr] dark:bg-slate-950"
              onClick={(event) => event.stopPropagation()}
            >
              <Button variant="ghost" size="icon" className="absolute right-4 top-4 z-10 bg-white/80 dark:bg-slate-900" onClick={() => setSelected(null)} aria-label="Close profile">
                <X className="h-4 w-4" />
              </Button>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image src={selected.image} alt={selected.name} fill sizes="260px" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">{selected.role}</p>
                <h3 className="mt-3 text-3xl font-semibold">{selected.name}</h3>
                <p className="mt-2 font-medium text-blue-700">{selected.designation}</p>
                <p className="mt-1 text-sm text-muted-foreground">{selected.institution}</p>
                <p className="mt-6 leading-7 text-muted-foreground">{selected.bio}</p>
                <h4 className="mt-6 text-sm font-semibold">Research Interests</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.researchAreas.map((area) => (
                    <span key={area} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 dark:bg-blue-950/50">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
