import { GraduationCap, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";

const education = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "A.V.C. College of Engineering",
    year: "2022 - 2026",
    grade: "CGPA: 7.04 / 10",
    description: "Specialized in Full Stack Web Development, Java Systems, and Blockchain Technology. Active lead in student developer community and technical symposiums.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java)",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  {
    degree: "HSC in Basic Mechanical Engineering",
    institution: "S.M.H. Higher Secondary School",
    year: "2020 - 2022",
    grade: "73%",
    description: "Vocational engineering curriculum focused on machine workshop practice, technical tools handling, and applied computer applications.",
    coursework: [
      "Computer Applications",
      "Lathe & Drilling Operations",
      "Machine Operations",
      "Tools Handling & Workshop Practice",
      "Engineering Drawing"
    ]
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
            Academic foundation and specialized computer science coursework
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">Academic History</h3>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <StaggerItem key={index} className="h-full">
                  <div className="p-7 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:shadow-primary/5">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-heading text-xl font-bold text-foreground leading-snug">
                          {item.degree}
                        </h4>
                      </div>
                      <p className="text-primary font-medium text-sm mb-3">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Coursework Tags */}
                      <div className="mb-6">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 mb-2">
                          <BookOpen className="w-3.5 h-3.5 text-primary" />
                          Key Coursework:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/60 mt-auto">
                      <span className="font-medium">{item.year}</span>
                      <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full text-xs">
                        {item.grade}
                      </span>
                    </div>
                  </div>
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
