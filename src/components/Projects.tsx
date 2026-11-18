import * as React from "react";
import { Code2, Users, Building, Shield, ExternalLink, Github, Wrench } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ThreeDCard from "./ThreeDCard";

const projects = [
  {
    title: "Movie Ticket Admin Portal",
    description:
      "An enterprise-grade Spring Boot portal featuring JWT/session authentication, role-based access control, and real-time movie/theater management. Powered by an optimized MySQL schema for structured transaction tracking, custom exception handling, and a secure administrative MVC layout.",
    tech: ["Spring Boot", "Java", "MySQL", "REST API", "Session Control", "MVC"],
    icon: Building,
    color: "from-primary to-cyan-400",
    demoType: "Case Study",
    demoLink:
      "https://docs.google.com/presentation/d/1m79kZ7Yo-feQwhYm7QCR6Z1o9DEcA4m0/edit",
    githubLink:
      "https://github.com/Balakumaran2022/movieadminportal",
    image: "/movie_portal_cropped.jpg",
  },
  {
    title: "AVCCE Alumni Connect",
    description:
      "Executed comprehensive manual testing, UI audits, and functional end-to-end validation for the official AVCCE Alumni Connect mobile app. Identified and documented critical user-flow bugs, API bottlenecks, and layout issues in QA reports to secure a smooth release on the Google Play Store.",
    tech: ["Mobile Testing", "QA Engineering", "Bug Reporting", "User Flow", "Play Store"],
    icon: Users,
    color: "from-accent to-pink-400",
    demoType: "Application Link",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.karthikrishna.AVCCollegeConnectsUs&pcampaignid=web_share",
    image: "/alumni_connect_qa.png",
  },
  {
    title: "Hostel Management System",
    description:
      "A Progressive Web App (PWA) for warden-level hostel tracking, featuring offline syncing, attendance monitoring, and automated WhatsApp notifications. Built with service workers for caching and custom Excel reporting to streamline administration.",
    tech: ["PWA", "WhatsApp API", "Attendance", "Excel Reports"],
    icon: Code2,
    color: "from-emerald-400 to-teal-400",
    demoType: "Website Link",
    demoLink: "https://avccehostelmanagement.netlify.app",
    githubLink:
      "https://github.com/Balakumaran2022/avccehostelmanagement",
    image: "/hostel_management.jpg",
  },
  {
    title: "SychDesk",
    description:
      "A collaborative MERN workspace centralizing meetings, tasks, and file sharing with Socket.io real-time updates. Implements JWT authentication, multi-room calendars, and AWS S3 uploads for a responsive student and team experience.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    icon: Code2,
    color: "from-indigo-500 to-sky-400",
    demoType: "Website Link",
    demoLink: "https://sychdesk.netlify.app/",
    githubLink: "https://github.com/Balakumaran2022/Sychdesk",
    image: "/sychdesk.png",
  },
  {
    title: "SecureLandX",
    description:
      "A decentralized Ethereum land registry guaranteeing tamper-proof property records via Solidity smart contracts. Integrates Tesseract OCR for automated Patta document extraction and MetaMask validation to bridge Web3 with a Flask backend.",
    tech: ["React.js", "Solidity", "Ethereum", "Flask", "Tesseract OCR", "MetaMask"],
    icon: Shield,
    color: "from-cyan-400 to-blue-500",
    demoType: "Website Link",
    demoLink: "https://securelandx2026-1.onrender.com/",
    githubLink: "https://github.com/Balakumaran2022/Securelandx2026",
    image: "/securelandx.png",
  },
  {
    title: "Blockchain Env Setup & Smart Contract (Ethereum)",
    description:
      "A local Ethereum blockchain development environment configured using Truffle and Ganache. Implemented a SimpleStorage smart contract in Solidity, wrote automated migration scripts for contract compilation and deployment, and developed a JavaScript-based test suite using Truffle Assertions to validate state variables on the local test network.",
    tech: ["Solidity", "Ethereum", "Truffle", "Ganache", "JavaScript"],
    icon: Shield,
    color: "from-teal-400 to-emerald-500",
    demoType: "Repository Link",
    githubLink: "https://github.com/Balakumaran2022/Blockchain-Intern-Task-1",
    image: "/blockchain_intern_task1.png",
  },
  {
    title: "Blockchain-Based Voting System",
    description:
      "A decentralized and immutable voting application (dApp) built with React and Solidity. Supports role-based flow where the admin registers candidates and eligible voters, starts and ends the election, and voters securely cast their ballots via MetaMask to view real-time, tamper-proof election outcomes.",
    tech: ["React.js", "Solidity", "Ethereum", "Truffle", "MetaMask", "Ganache"],
    icon: Shield,
    color: "from-blue-500 to-indigo-500",
    demoType: "Repository Link",
    githubLink: "https://github.com/Balakumaran2022/Blockchain-Intern-Task-2",
    image: "/blockchain_voting_system.png",
  },
  {
    title: "Student Crud Operation Using Springboot",
    description:
      "A Spring Boot CRUD application managing student records with MVC architecture and Hibernate database mapping. Features secure REST APIs, Spring Security rules, and a clean interface to facilitate administrative operations.",
    tech: ["Spring Boot", "Java", "MySQL", "REST API", "CRUD"],
    icon: Code2,
    color: "from-amber-400 to-orange-500",
    demoType: "Website Link",
    demoLink: "https://student-crud-app-production-9027.up.railway.app/",
    githubLink: "https://github.com/Balakumaran2022/student_crud",
    image: "/student_crud.png",
  },
  {
    title: "Cognifyz Data Analysis Internship",
    description:
      "Insight-driven Python solutions for 11 analytical tasks across three levels. Performs statistical computations, geospatial K-Means clustering, and review keyword sentiment mapping to export high-resolution visualization plots.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "K-Means"],
    icon: Code2,
    color: "from-blue-400 to-indigo-500",
    demoType: "Repository Link",
    githubLink: "https://github.com/Balakumaran2022/cognifyz-DA-intern",
    image: "/cognifyz_data_analysis.png",
  },
  {
    title: "Enhancing Large Vehicle Maintenance with AR/VR and IoT for Wire Harnessing and Servicer Management",
    description: (
      <div className="space-y-2">
        <p className="text-slate-600 dark:text-slate-400 text-[13px] leading-snug text-left line-clamp-2">
          An immersive AR/VR system combined with IoT sensors to streamline large vehicle wire harnessing diagnostics, overlaying real-time telemetry data and 3D step-by-step service guides.
        </p>
        <div className="text-[11.5px] flex flex-wrap items-center justify-between gap-x-1.5 gap-y-1 border-t border-slate-200 dark:border-slate-800/80 pt-2 text-slate-500 dark:text-slate-400">
          <a
            href="https://vehictronix360.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold flex items-center gap-0.5"
            title="Pre-Hackathon Demo"
          >
            Web App <ExternalLink className="w-2.5 h-2.5" />
          </a>
          <span>•</span>
          <a
            href="https://github.com/Balakumaran2022/Vehictronix360.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold flex items-center gap-0.5"
            title="Web Source"
          >
            GitHub Repo <Github className="w-2.5 h-2.5" />
          </a>
          <span>•</span>
          <a
            href="https://github.com/Balakumaran2022/3D_BUS_AR_VUFORIA-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold flex items-center gap-0.5"
            title="Hackathon AR Code"
          >
            Vuforia (Local) <Github className="w-2.5 h-2.5" />
          </a>
          <span>•</span>
          <a
            href="https://drive.google.com/drive/folders/1zo8ywq-161Q2ntnSUGMeahXHVGxxq_We"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold flex items-center gap-0.5"
            title="Project Assets"
          >
            Google Drive <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    ),
    tech: ["AR.js", "AR/VR", "IoT", "Unity 3D", "ESP32", "Three.js", "C#"],
    icon: Wrench,
    color: "from-purple-500 to-indigo-500",
    demoType: "Website Link",
    demoLink: "https://vehictronix360.netlify.app/",
    githubLink: "https://github.com/Balakumaran2022/Vehictronix360.com",
    image: "/bus_ar_fault.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Projects <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications demonstrating full-stack development,
            testing, and problem-solving skills
          </p>
        </FadeIn>
      </div>

      <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={`${project.title}-${idx}`} 
              className="group relative rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-muted/40">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-background/95 text-foreground border border-border/60 shadow-sm">
                  {project.demoType}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-border/60 mt-auto">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
