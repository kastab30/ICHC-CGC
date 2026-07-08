import Image from "next/image";
import Link from "next/link";

import { quickLinks, socialLinks } from "@/lib/site-data";

const universityUrl = "https://www.cgcuniversity.in/";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-200/70 bg-slate-950 pt-20 text-white">
      <svg
        className="absolute left-0 top-0 h-16 w-full text-blue-50 dark:text-slate-950"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,64L80,74.7C160,85,320,107,480,96C640,85,800,43,960,32C1120,21,1280,43,1360,53.3L1440,64L1440,0L0,0Z"
          fill="currentColor"
        />
      </svg>

      <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        {/* Logo Section */}
        <div>
          <a
            href={universityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
            aria-label="Open CGC University website"
          >
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-blue-400/30 bg-white shadow-lg">
              <Image
                src="/logo.jpg"
                alt="ICHC 2027 Logo"
                fill
                priority
                className="object-contain p-2"
              />
            </div>

            <div>
              <p className="text-lg font-bold text-white">
                ICHC 2027
              </p>
              <p className="text-sm text-slate-300">
                International Conference on Humanities
              </p>
            </div>
          </a>

          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            International Conference on Humanities at the Crossroads,
            hosted at CGC University, Mohali, India.
          </p>

          {/*
          <div className="mt-6 flex max-w-md rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur">
            <input
              className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-slate-400"
              placeholder="Newsletter email"
              aria-label="Newsletter email"
            />
            <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              Join
            </button>
          </div>
          */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>

          <div className="mt-4 grid gap-2">
            {quickLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold">Social</h3>

          <div className="mt-4 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-slate-300 transition hover:border-blue-400 hover:text-white"
                aria-label={link.label}
              >
                {link.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-10 border-t border-white/10 py-6 text-center text-sm text-slate-400">
        <a
          href="https://linkedin.com/in/kastab/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          © 2027 CGC University. All Rights Reserved. Designed & Developed by
          <span className="font-semibold text-blue-400">
            {" "}
            Mr. Kastab Garai
          </span>
        </a>
      </div>
    </footer>
  );
}