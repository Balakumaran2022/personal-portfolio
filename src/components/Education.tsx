import { GraduationCap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import ThreeDCard from "./ThreeDCard";

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

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and qualification credentials
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">Academic History</h3>
            </div>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((item, index) => (
                <StaggerItem key={index} className="h-full">
                  <ThreeDCard className="p-6 rounded-xl bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border hover:border-accent/30 transition-all duration-300 flex flex-col justify-between h-full shadow-lg">
                    <div>
                      <h4 
                        className="font-heading text-lg font-bold text-foreground mb-1.5 leading-snug"
                        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                      >
                        {item.degree}
                      </h4>
                      <p 
                        className="text-accent text-sm font-medium mb-4"
                        style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
                      >
                        {item.institution}
                      </p>
                    </div>
                    <div 
                      className="flex items-center justify-between text-sm text-muted-foreground mt-auto"
                      style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
                    >
                      <span>{item.year}</span>
                      <span className="text-foreground font-semibold bg-accent/10 px-2.5 py-1 rounded-lg text-xs">{item.grade}</span>
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

export default Education;
