import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import TalentPortfolio from "@/components/TalentPortfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certificates />
      <TalentPortfolio />
      <Contact />
    </main>
  );
}
