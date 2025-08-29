import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Support from "@/components/Support";
import Investment from "@/components/Investment";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Services />
      {/* <Features />
      <Projects />
      <Process />
      <Support />
      <Investment />
      <News />
      <Contact />
      <Footer /> */}
    </main>
  );
}
