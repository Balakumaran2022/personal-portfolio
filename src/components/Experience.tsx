import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./AnimatedSection";

const internships = [
  {
    title: "Java Full Stack Development Intern",
    company: "i5 Technology",
    duration: "1 Month",
    logoText: "i5",
    logoGradient: "from-blue-600 to-cyan-500",
    description: "Built full-stack web application modules using Java and Spring Boot. Designed MVC architecture, RESTful endpoints, and relational database schemas with MySQL.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs"]
  },
  {
    title: "Data Analytics Intern",
    company: "Cognifyz Technologies",
    duration: "1 Month (Remote)",
    logoText: "CZ",
    logoGradient: "from-violet-600 to-purple-500",
    description: "Performed data cleaning, exploratory data analysis (EDA), and statistical modeling on real-world datasets using Python and data visualization libraries.",
    tech: ["Python", "Data Analysis", "Pandas", "Visualization"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Industry engineering experience, active roles, and focused technical internships
          </p>
        </FadeIn>

        {/* 1. CURRENT FEATURED WORK EXPERIENCE */}
        <FadeIn className="mb-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
              <div className="flex items-start gap-4">
                {/* Official Company Logo */}
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-border/80 shadow-md shrink-0 select-none bg-background">
                  <img
                    src="/ieyal-logo.png"
                    alt="iEYAL Solutions Official Logo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    Trainee Frontend Developer
                  </h3>
                  <p className="text-primary font-semibold text-base">
                    iEYAL Solutions Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground mb-5 pb-5 border-b border-border/60">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-primary" />
                Jul 2026 - Present
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Tiruvarur, Tamil Nadu, India
              </span>
            </div>

            {/* Concise Engineering Responsibilities */}
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-6 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Developing responsive, accessible, and high-performance web user interfaces using <strong>React.js</strong> and modern <strong>Tailwind CSS</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Integrating backend <strong>RESTful APIs</strong>, handling client-side state, and maintaining seamless cross-browser consistency.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Collaborating within an agile team workflow, following version control best practices with <strong>Git & GitHub</strong>.</span>
              </li>
            </ul>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "Tailwind CSS", "JavaScript / TypeScript", "REST APIs", "Git", "UI/UX Optimization"].map((t) => (
                <span 
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 2. TECHNICAL INTERNSHIPS (Balanced 2-Column Grid) */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Technical Internships
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {internships.map((internship) => (
              <FadeIn key={internship.title} className="h-full">
                <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-lg">
                  <div>
                    <div className="flex items-start gap-3.5 mb-4">
                      {/* Logo Avatar */}
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${internship.logoGradient} flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-sm shrink-0 select-none`}>
                        {internship.logoText}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-heading text-lg font-bold text-foreground leading-snug">
                          {internship.title}
                        </h4>
                        <p className="text-primary font-medium text-sm">
                          {internship.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{internship.duration}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                      {internship.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60 mt-auto">
                    {internship.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
