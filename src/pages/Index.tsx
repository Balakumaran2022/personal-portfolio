import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteCard from "@/components/QuoteCard";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import CareerHighlights from "@/components/CareerHighlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <CustomCursor />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <QuoteCard />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <CareerHighlights />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
