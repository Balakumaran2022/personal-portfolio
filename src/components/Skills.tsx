import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";
import { Code2, Layout, Server, Database, Cloud, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/5 hover:shadow-cyan-500/10",
    dotColor: "bg-cyan-500",
    hoverBorder: "hover:border-cyan-500/30",
    hoverBg: "hover:bg-cyan-500 hover:text-white hover:shadow-md hover:shadow-cyan-500/20",
    skills: ["Java", "JavaScript", "Python", "Solidity", "HTML & CSS"]
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-indigo-500 to-purple-500",
    glow: "shadow-indigo-500/5 hover:shadow-indigo-500/10",
    dotColor: "bg-indigo-500",
    hoverBorder: "hover:border-indigo-500/30",
    hoverBg: "hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/20",
    skills: ["AR.js", "React.js", "Vite"]
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/5 hover:shadow-purple-500/10",
    dotColor: "bg-purple-500",
    hoverBorder: "hover:border-purple-500/30",
    hoverBg: "hover:bg-purple-500 hover:text-white hover:shadow-md hover:shadow-purple-500/20",
    skills: ["Spring Boot", "Node.js & Express.js", "REST APIs"]
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/5 hover:shadow-emerald-500/10",
    dotColor: "bg-emerald-500",
    hoverBorder: "hover:border-emerald-500/30",
    hoverBg: "hover:bg-emerald-500 hover:text-white hover:shadow-md hover:shadow-emerald-500/20",
    skills: ["MySQL & MongoDB", "Firebase"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/5 hover:shadow-pink-500/10",
    dotColor: "bg-pink-500",
    hoverBorder: "hover:border-pink-500/30",
    hoverBg: "hover:bg-pink-500 hover:text-white hover:shadow-md hover:shadow-pink-500/20",
    skills: ["Docker", "Google Cloud (GCP)", "Git & GitHub"]
  },
  {
    title: "Blockchain",
    icon: Cpu,
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/5 hover:shadow-amber-500/10",
    dotColor: "bg-amber-500",
    hoverBorder: "hover:border-amber-500/30",
    hoverBg: "hover:bg-amber-500 hover:text-white hover:shadow-md hover:shadow-amber-500/20",
    skills: ["Ethereum", "Smart Contracts", "Web3.js", "Ethers.js"]
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-blue-500 to-teal-500",
    glow: "shadow-blue-500/5 hover:shadow-blue-500/10",
    dotColor: "bg-blue-500",
    hoverBorder: "hover:border-blue-500/30",
    hoverBg: "hover:bg-blue-500 hover:text-white hover:shadow-md hover:shadow-blue-500/20",
    skills: ["Power BI", "MS Office Suite"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title} className="h-full">
              <ThreeDCard 
                className={`group p-6 rounded-2xl bg-background/50 dark:bg-card/45 backdrop-blur-md border border-border/80 dark:border-border/30 hover:border-transparent transition-all duration-300 h-full shadow-lg ${category.glow} ${category.hoverBorder}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-md`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.span 
                      key={skill}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-background/60 dark:bg-card/40 border border-border/80 dark:border-border/30 hover:border-transparent transition-all duration-300 cursor-default font-medium ${category.hoverBg}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${category.dotColor} group-hover:scale-125 transition-transform`} />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </ThreeDCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
