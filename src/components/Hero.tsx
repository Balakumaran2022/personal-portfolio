import { Github, Linkedin, FileDown, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { TypeAnimation } from "react-type-animation";

const LeetcodeIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Name with Typewriter Effect */}
          <motion.h1 
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TypewriterText 
              text="Bala" 
              className="text-foreground" 
              delay={0.5} 
              speed={0.1}
            />{" "}
            <TypewriterText 
              text="Kumaran M" 
              className="gradient-text" 
              delay={1.2} 
              speed={0.1}
            />
          </motion.h1>

          {/* Title with Rotating Roles */}
          <motion.div 
            className="text-xl md:text-2xl text-muted-foreground mb-4 min-h-[36px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Software Development',
                2000,
                'MERN Stack Development',
                2000,
                'Blockchain Development',
                2000,
                'Java Development',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              cursor={true}
              repeat={Infinity}
              deletionSpeed={65}
            />
          </motion.div>
          
          {/* Description */}
          <motion.div 
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 min-h-[80px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4 }}
          >
            <TypeAnimation
              sequence={[
                "Building modern, scalable, and secure applications for the next generation of digital experiences.",
                1000
              ]}
              wrapper="p"
              speed={60}
              style={{ display: 'block' }}
              cursor={true}
              repeat={0}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.2 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
            <Button variant="gradient" size="lg" asChild>
              <a href="/Bala_Kumaran_Resume.pdf" download="Bala_Kumaran_Resume.pdf">
                <FileDown className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.4 }}
          >
            {[
              { href: "https://github.com/Balakumaran2022", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/balakumaran008", icon: Linkedin, label: "LinkedIn" },
              { href: "https://leetcode.com/u/balakumaran08/", icon: LeetcodeIcon, label: "LeetCode" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-secondary transition-all duration-300 hover:shadow-[0_0_20px_hsl(195_100%_50%_/_0.3)]"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 4.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
