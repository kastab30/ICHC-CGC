import { Footer } from "@/sections/footer";
import { About } from "@/sections/about";
import { CallForPapers } from "@/sections/call-for-papers";
import { Committee } from "@/sections/committee";
import { Contact } from "@/sections/contact";
import { Dates } from "@/sections/dates";
import { Fees } from "@/sections/fees";
import { Gallery } from "@/sections/gallery";
import { Hero } from "@/sections/hero";
import { Objectives } from "@/sections/objectives";
import { Tracks } from "@/sections/tracks";
import { University } from "@/sections/university";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Objectives />
      <Tracks />
      <Dates />
      <Fees />
      <Committee />
      {/* <Gallery /> */}
      <University />
      <CallForPapers />
      <Contact />
      <Footer />
    </main>
  );
}
