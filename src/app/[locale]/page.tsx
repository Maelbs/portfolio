import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Works } from "@/components/sections/Works";
import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
