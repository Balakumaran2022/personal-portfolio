import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
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

const education = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "A.V.C. College of Engineering",
    year: "2022 - 2026",
    grade: "CGPA: 7.21/10"
  },
  {
    degree: "HSC in Basic Mechanical Engineering",
    institution: "S.M.H. HR Sec School",
    year: "2020 - 2022",
    grade: "73%"
  },
  {
    degree: "SSLC",
    institution: "S.M.H. HR Sec School",
    year: "2019 - 2020",
    grade: "51%"
  }
];

const certifications = [
  "Fundamentals of Blockchain - GUVI",
  "Course in Blockchain - LIVEWIRE",
  "Placement Preparation Program - Indian Institute of Placements",
  "Fundamentals of Data Analysis - ANALYTTICA"
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Internship Experience */}
          <FadeIn direction="left">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">Internships</h3>
            </div>
            
            <StaggerContainer className="space-y-4">
              {internships.map((item, index) => (
                <StaggerItem key={index} className="h-full">
                  <ThreeDCard className="p-6 rounded-xl bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border hover:border-primary/30 transition-all duration-300">
                    <h4 
                      className="font-heading text-lg font-bold text-foreground mb-1.5"
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

          {/* Education */}
          <FadeIn direction="right">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">Education</h3>
            </div>
            
            <StaggerContainer className="space-y-4">
              {education.map((item, index) => (
                <StaggerItem key={index} className="h-full">
                  <ThreeDCard className="p-6 rounded-xl bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border hover:border-accent/30 transition-all duration-300">
                    <h4 
                      className="font-heading text-lg font-bold text-foreground mb-1.5"
                      style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                    >
                      {item.degree}
                    </h4>
                    <p 
                      className="text-accent text-sm font-medium mb-3"
                      style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
                    >
                      {item.institution}
                    </p>
                    <div 
                      className="flex items-center justify-between text-sm text-muted-foreground"
                      style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
                    >
                      <span>{item.year}</span>
                      <span className="text-foreground font-semibold">{item.grade}</span>
                    </div>
                  </ThreeDCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>

        {/* Certifications */}
        <FadeIn className="mt-16 max-w-4xl mx-auto" delay={0.2}>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="font-heading text-2xl font-semibold">Certifications</h3>
          </div>
          
          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <StaggerItem key={index} className="h-full">
                <ThreeDCard className="p-6 rounded-xl bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border hover:border-emerald-500/30 transition-all duration-300 flex items-center gap-4 h-full">
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

export default Experience;
