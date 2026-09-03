import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Stack from "@/components/Stack";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#161618] text-white selection:bg-[#CCFF00] selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Stack />
      <ProjectsShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
