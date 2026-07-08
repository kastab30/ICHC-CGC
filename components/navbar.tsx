"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/82 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 font-semibold"
          aria-label="ICHC 2027 home"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-lg">
            <Image
              src="/logo.webp"
              alt="ICHC 2027 Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <span className="hidden text-sm tracking-normal sm:inline">
            ICHC 2027
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="mailto:ichc2027@cgcuniversity.in?subject=Paper%20Submission%20-%20ICHC%202027">
              Submit Paper
            </Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <Button
            aria-label="Toggle navigation"
            title="Toggle navigation"
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Button asChild className="mt-2">
              <Link href="mailto:ichc2027@cgcuniversity.in?subject=Paper%20Submission%20-%20ICHC%202027">
                Submit Paper
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}