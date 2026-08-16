import { Briefcase, Calendar } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import ThreeDCard from "./ThreeDCard";

const internships = [
  {
    title: "Java Full Stack Development",
    company: "i5 Technology",
    duration: "1 Month",
    type: "Internship"
  },
  {
    title: "Data Analytics",
    company: "Cognifyz (Remote)",
    duration: "1 Month",
    type: "Internship"
  },
  {
    title: "Blockchain Internship",
    company: "Technohacks",
    duration: "1 Month",
    year: "2024",
    type: "Learning"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional trajectory, industry roles, and internships
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Work Experience */}
          <FadeIn direction="left">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">Roles</h3>
            </div>

            <ThreeDCard className="p-6 rounded-xl bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border hover:border-primary/30 transition-all duration-300 shadow-lg">
              <div className="flex gap-4 items-start">
                <svg viewBox="0 0 100 100" className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-md select-none">
                  <defs>
                    <linearGradient id="ieyalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d946ef" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ieyalGrad)" />
                  <text x="50%" y="65%" fill="white" fontSize="48" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">இ</text>
                </svg>
                <div className="flex-1">
                  <h4 className="font-heading text-lg font-bold text-foreground mb-0.5 leading-snug">
                    Trainee Frontend Developer
                  </h4>
                  <p className="text-primary text-sm font-medium mb-2">
                    ieyal Solutions
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Jul 2026 - Present
                    </span>
                    <span>•</span>
                    <span>Tiruvarur, Tamil Nadu, India</span>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed justify-clean">
                    Joined iEYAL Solutions Pvt. Ltd. as a Trainee Frontend Developer! Learning, contributing, and growing with the engineering team.
                  </p>
                </div>
              </div>
            </ThreeDCard>
          </FadeIn>

          {/* Internship Experience */}
          <FadeIn direction="right">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">Internships</h3>
            </div>
            
            <StaggerContainer className="space-y-4">
              {internships.map((item, index) => (
                <StaggerItem key={index} className="h-full">
                  <ThreeDCard className="p-6 rounded-xl bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border hover:border-primary/30 transition-all duration-300 shadow-lg">
                    <h4 
                      className="font-heading text-lg font-bold text-foreground mb-1.5 leading-snug"
                      style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="text-primary text-sm font-medium mb-3"
                      style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
                    >
                      {item.company}
                    </p>
                    <div 
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{item.duration}</span>
                      {item.year && <span>• {item.year}</span>}
                    </div>
                  </ThreeDCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Experience;
