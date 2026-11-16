import { Award, CheckCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";

const certifications = [
  {
    title: "Fundamentals of Blockchain",
    issuer: "GUVI Geek Networks (IIT Madras Research Park)",
    skills: ["Blockchain Core", "Cryptography", "Consensus Algorithms"]
  },
  {
    title: "Enterprise Blockchain & Smart Contracts",
    issuer: "LIVEWIRE Technologies",
    skills: ["Ethereum", "Solidity", "Smart Contract Development"]
  },
  {
    title: "Data Analysis & Algorithmic Thinking",
    issuer: "Analyttica Datalab",
    skills: ["Data Analysis", "Python", "Analytical Validation"]
  },
  {
    title: "Blockchain Architecture & Security",
    issuer: "Infosys Springboard",
    skills: ["Web3 Systems", "Security Best Practices", "Distributed Computing"]
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized credentials in systems, distributed computing, and data technologies
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <StaggerItem key={index} className="h-full">
                <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:shadow-emerald-500/5">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Verified Credential
                      </span>
                    </div>

                    <h4 className="font-heading text-lg font-bold text-foreground mb-1 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm font-medium mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60 mt-auto">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[10.5px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
