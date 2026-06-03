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

      {/* Injecting marquee animation styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden relative py-4">
        {/* Soft fading edges for premium look */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 px-6">
          {[...projects, ...projects].map((project, idx) => (
            <div key={`${project.title}-${idx}`} className="w-[380px] sm:w-[450px] h-[500px] shrink-0 flex flex-col">
              <ThreeDCard className="group relative rounded-3xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800/80 overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30">
                {/* IMAGE with HOVER OVERLAY */}
                <div 
                  className="relative h-[200px] w-full overflow-hidden shrink-0"
                  style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay Container */}
                  <div className="absolute inset-0 bg-slate-950/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 p-4">
                    
                    {/* Action Links */}
                    <div className="flex items-center gap-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/25 hover:scale-110 text-white transition-all duration-300 shadow-lg"
                          title="View Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/25 hover:scale-110 text-white transition-all duration-300 shadow-lg"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    {/* Tech Badges inside Overlay */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-xs">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div 
                  className="px-6 py-5 flex-1 flex flex-col"
                  style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
                >
                  <a 
                    href={project.demoLink || project.githubLink || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mb-3 group/title"
                  >
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 group-hover/title:text-primary transition-colors text-left">
                      {project.title}
                      {project.demoLink ? (
                        <ExternalLink className="w-4 h-4 opacity-30 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-300 shrink-0" />
                      ) : (
                        <Github className="w-4 h-4 opacity-30 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-300 shrink-0" />
                      )}
                    </h3>
                  </a>

                  <div className="text-slate-600 dark:text-slate-400 text-[13.5px] leading-relaxed flex-1 text-left">
                    {typeof project.description === "string" ? (
                      <p>
                        {project.description}
                      </p>
                    ) : (
                      project.description
                    )}
                  </div>
                </div>
              </ThreeDCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
