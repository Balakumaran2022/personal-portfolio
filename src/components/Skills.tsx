import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Database } from "lucide-react";

const skillPillars = [
  {
    title: "Core Languages & Foundations",
    subtitle: "Object-oriented systems, logic & algorithmic problem solving",
    icon: Code2,
    skills: [
      "Java (Core & Adv)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Solidity",
      "Data Structures & Algorithms",
      "OOP Principles"
    ]
  },
  {
    title: "Frontend Engineering",
    subtitle: "Modern reactive web development, accessible UI & responsive layouts",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML5 & Modern CSS",
      "State Management",
      "Responsive Web Design",
      "UI/UX Optimization"
    ]
  },
  {
    title: "Backend & Cloud Architecture",
    subtitle: "Scalable server architectures, RESTful APIs & containerized environments",
    icon: Server,
    skills: [
      "Spring Boot",
      "Node.js & Express",
      "RESTful APIs",
      "Hibernate / JPA",
      "Docker",
      "Google Cloud (GCP)",
      "CI/CD Basics"
    ]
  },
  {
    title: "Databases, Web3 & QA Tools",
    subtitle: "Relational/NoSQL schemas, smart contracts, testing suites & developer CLI",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Ethereum Smart Contracts",
      "Postman",
      "Linux / CLI",
      "Git & GitHub",
      "Manual & QA Testing"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive, industry-aligned engineering toolkit for scalable full-stack software development
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillPillars.map((pillar) => (
            <StaggerItem key={pillar.title} className="h-full">
              <div className="p-7 sm:p-8 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:shadow-primary/5 group">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-5 border-t border-border/60">
                    {pillar.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-secondary/80 text-secondary-foreground border border-border/60 hover:border-primary/50 hover:bg-secondary transition-all cursor-default"
                        whileHover={{ scale: 1.04, y: -1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
