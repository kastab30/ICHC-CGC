"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";

import { HeroVisual } from "@/components/hero-visual";
import { Button } from "@/components/ui/button";
import {
  conferenceDate,
  conferenceLocation,
  conferenceTheme,
  conferenceTitle,
  heroActions,
  stats
} from "@/lib/site-data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.28),transparent_32rem),radial-gradient(circle_at_80%_35%,rgba(219,234,254,0.9),transparent_28rem)]" />
      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-14 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur">
            International Conference On
          </div>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-normal text-slate-950 sm:text-7xl lg:text-8xl dark:text-white">
            {conferenceTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 sm:text-2xl dark:text-slate-300">
            Technology, Trauma, Transnationalism and Transformative Futures
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{conferenceTheme}</p>

          <div className="mt-8 flex flex-col gap-3 text-sm font-medium text-foreground sm:flex-row sm:items-center">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              {conferenceDate}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {conferenceLocation}
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={heroActions[0].href}>
                {heroActions[0].label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {/* <Button asChild variant="secondary">
              <Link href={heroActions[1].href}>{heroActions[1].label}</Link>
            </Button> */}
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-blue-200/70 bg-white/62 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_16px_48px_rgba(37,99,235,0.14)] dark:bg-slate-950/50">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-2xl font-semibold"
                >
                  {stat.value}+
                </motion.p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
