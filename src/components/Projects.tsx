import { Code2, Users, Building, ExternalLink, Github } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Movie Ticket Admin Portal",
    description:
      "A Java Spring Boot–based admin portal for managing movies, schedules, and seat availability. Fully tested in a local environment with cloud deployment planned as a future enhancement.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    icon: Building,
    color: "from-primary to-cyan-400",
    demoType: "Reference",
    demoLink: "https://docs.google.com/presentation/d/1m79kZ7Yo-feQwhYm7QCR6Z1o9DEcA4m0/edit?usp=sharing&ouid=113263323395664525699&rtpof=true&sd=true",
    githubLink: "https://github.com/Balakumarancse2022/movieadminportal",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop",
  },
  {
    title: "AVCCE Alumni Connect - QA Tester",
    description:
      "A platform connecting students and alumni. Contributed as a QA Tester by performing functional and manual testing.",
    tech: ["QA Testing", "Manual Testing", "Documentation"],
    icon: Users,
    color: "from-accent to-pink-400",
    demoType: "Live Demo",
    demoLink: "coming-soon-banner-illustration_1203336-849.avif",
    githubLink: "https://github.com/Balakumarancse2022/AVCCE-Alumni-Connect-QA-Testing-",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
  },
  {
    title: "Hostel Management System",
    description:
      "Student management system to track hostel check-in/check-out and maintain structured student records.",
    tech: ["Full Stack", "CRUD", "Database"],
    icon: Code2,
    color: "from-emerald-400 to-teal-400",
    demoType: "Live Demo",
    demoLink: "https://avccehostelmanagement.netlify.app",
    githubLink: "https://github.com/Balakumarancse2022/avccehostelmanagement",
    image: "/image.png",
  },
  {
    title: "SyncDesk",
    description:
      "SychDesk is an all-in-one smart web platform that helps organize meetings, manage files, track deadlines, validate submissions, and stay productive from a single unified dashboard.
",
    tech: ["Full Stack","React","Vite", "CRUD","Typescript", "Database"],
    icon: Code2,
    color: "from-emerald-400 to-teal-400",
    demoType: "Live Demo",
    demoLink: "https://sycndesk.netlify.app",
    githubLink: "https://github.com/Balakumarancse2022/SyncDesk",
    image: "https://play.google.com/store/apps/details?id=com.findsong.identifymusic",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Projects <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing technical and problem-solving skills
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                className="relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 h-full flex flex-col"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px hsl(195 100% 50% / 0.15)",
                }}
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}
                  />
                </div>

                {/* ICON – FIXED HERE */}
                <div className="relative z-20 -mt-8 ml-6 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} p-2.5 border-4 border-card shadow-lg`}
                  >
                    <project.icon className="w-full h-full text-primary-foreground" />
                  </div>
                </div>


                {/* CONTENT */}
                <div className="p-6 pt-4 flex-1 flex flex-col">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.demoLink} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.demoType}
                      </a>
                    </Button>

                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubLink} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
