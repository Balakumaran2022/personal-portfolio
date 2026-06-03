import { Trophy, Award, FileText, Heart, Lightbulb, Users } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";

const achievements = [
  {
    icon: Trophy,
    title: "1st Place (Double Victory)",
    description: "SDG Student Symposium 2025 Hackathon",
    color: "text-yellow-600 dark:text-yellow-400"
  },
  {
    icon: Award,
    title: "3rd Place",
    description: "Horizon 8 Hackathon (Joy University)",
    color: "text-amber-600 dark:text-amber-400"
  },
  {
    icon: FileText,
    title: "5+ Technical Papers",
    description: "Presented at various events",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "NSS Volunteer",
    description: "Regular Blood Donor",
    color: "text-rose-600 dark:text-rose-400"
  },
  {
    icon: Lightbulb,
    title: "Patent Drafting",
    description: "Participated in innovation workshop",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Google Student Ambassador",
    description: "Selected campus representative",
    color: "text-emerald-600 dark:text-emerald-400"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition for academic excellence, technical innovation, and community service
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <StaggerItem key={index} className="h-full">
              <ThreeDCard 
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <motion.div 
                  className={`mb-4 ${achievement.color}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d", display: "inline-block" }}
                >
                  <achievement.icon className="w-10 h-10" />
                </motion.div>
                <h3 
                  className="font-heading text-lg font-semibold mb-2 text-foreground"
                  style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                >
                  {achievement.title}
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
                >
                  {achievement.description}
                </p>
              </ThreeDCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Achievements;
