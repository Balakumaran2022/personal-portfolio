import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";

const QuoteCard = lazy(() => import("@/components/QuoteCard"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Education = lazy(() => import("@/components/Education"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Achievements = lazy(() => import("@/components/Achievements"));
const CareerHighlights = lazy(() => import("@/components/CareerHighlights"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <CustomCursor />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="py-12" />}>
          <QuoteCard />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <Education />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <Achievements />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <CareerHighlights />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div className="py-8" />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
};

export default Index;
