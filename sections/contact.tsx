import { Mail, MapPin, Send } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteEmail } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-blue-50/55 dark:bg-slate-950/40">
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Reach the conference secretariat"
          body="Send questions about submissions, registration, participation or institutional collaboration."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* <Reveal className="rounded-[24px] border border-blue-200/80 bg-white/76 p-6 shadow-[0_30px_100px_rgba(37,99,235,0.14)] backdrop-blur-xl dark:bg-slate-950/65">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-blue-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:bg-slate-950" placeholder="Name" aria-label="Name" />
                <input className="rounded-2xl border border-blue-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:bg-slate-950" placeholder="Email" type="email" aria-label="Email" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-blue-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:bg-slate-950" placeholder="Institution" aria-label="Institution" />
                <input className="rounded-2xl border border-blue-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:bg-slate-950" placeholder="Country" aria-label="Country" />
              </div>
              <textarea className="min-h-36 rounded-2xl border border-blue-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:bg-slate-950" placeholder="Message" aria-label="Message" />
              <Button type="submit" className="w-full sm:w-fit">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Reveal> */}

          <Reveal className="grid gap-5">
            <div className="rounded-[24px] border border-blue-200/80 bg-white/76 p-6 shadow-[0_20px_70px_rgba(37,99,235,0.1)] backdrop-blur dark:bg-slate-950/65">
              <Mail className="h-5 w-5 text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">Email</p>
              <a href={`mailto:${siteEmail}`} className="mt-1 block font-semibold text-foreground hover:text-primary">
                {siteEmail}
              </a>
            </div>
            <div className="rounded-[24px] border border-blue-200/80 bg-white/76 p-6 shadow-[0_20px_70px_rgba(37,99,235,0.1)] backdrop-blur dark:bg-slate-950/65">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">Venue</p>
              <p className="mt-1 font-semibold">CGC University, Mohali, India</p>
            </div>
            <iframe
              title="CGC University, Mohali, Punjab, India map"
              src="https://www.google.com/maps?q=CGC%20University%2C%20Mohali%2C%20Punjab%2C%20India&output=embed"
              className="min-h-56 w-full rounded-[24px] border border-dashed border-blue-300 bg-white/60 text-sm text-muted-foreground backdrop-blur dark:bg-slate-950/50"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
