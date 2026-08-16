import { Award } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import ThreeDCard from "./ThreeDCard";

const certifications = [
  "Fundamentals of Blockchain - GUVI",
  "Course in Blockchain - LIVEWIRE",
  "Placement Preparation Program - Indian Institute of Placements",
  "Fundamentals of Data Analysis - ANALYTTICA"
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Verified industry credentials and specialized training programs
          </p>
        </FadeIn>

        <FadeIn className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="font-heading text-2xl font-semibold">Credentials</h3>
          </div>
          
          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <StaggerItem key={index} className="h-full">
                <ThreeDCard className="p-6 rounded-xl bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border hover:border-emerald-500/30 transition-all duration-300 flex items-center gap-4 h-full shadow-lg">
                  <div 
                    className="p-2.5 rounded-xl bg-emerald-500/10 shrink-0"
                    style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                  >
                    <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 
                    className="font-heading text-lg font-bold text-foreground leading-snug"
                    style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
                  >
                    {cert}
                  </h4>
                </ThreeDCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
};

export default Certifications;
