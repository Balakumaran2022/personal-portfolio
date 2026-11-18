import { Trophy, Award, FileText, Heart, Lightbulb, Sparkles, Calendar, CheckCircle2, Eye, X, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { useState } from "react";

const technicalHonors = [
  {
    icon: Trophy,
    title: "1st Place (Double Victory)",
    event: "SDG Student Symposium 2025",
    organization: "E.G.S. Pillay Engineering College",
    description: "Won 1st Place in both 'Hack for Social Good' and 'AI for Green Tech & Growth' zones for developing impactful technological solutions addressing UN Sustainability Goals.",
    badge: "1st Prize Winner",
    tags: ["Hackathon Winner", "Green Tech AI", "UN SDGs"],
    color: "from-amber-500 to-yellow-500",
    iconBg: "bg-amber-500/10 text-amber-500 dark:text-amber-400"
  },
  {
    icon: Award,
    title: "3rd Place – State Level",
    event: "TANSAM Horizon 8 Hackathon",
    organization: "Joy University & TANSAM",
    description: "Secured 3rd Place among 50+ engineering teams under the theme 'Boosting Large Vehicle Upkeep with AR/VR & IoT' with a real-time fault diagnostics architecture.",
    badge: "State Hackathon",
    tags: ["IoT Telemetry", "AR/VR Diagnostics", "State Level"],
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/10 text-blue-500 dark:text-blue-400"
  },
  {
    icon: Sparkles,
    title: "Google Student Ambassador",
    event: "Google Gemini Program",
    organization: "Google Developer Student Ecosystem",
    description: "Selected as campus lead to advocate Google AI developer tools, host hands-on tech sessions, and mentor student developers across technical domains.",
    badge: "Campus Lead",
    tags: ["Developer Community", "Generative AI", "Leadership"],
    color: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-500/10 text-purple-500 dark:text-purple-400"
  },
  {
    icon: FileText,
    title: "5+ Research Conference Papers",
    event: "International IEEE & Scopus Meets",
    organization: "ICICEA-2026 & ICRET-2025",
    description: "Authored and presented peer-reviewed research papers on 'Blockchain Secure Land Registry' and 'Blockchain for Secure AI Training' at international conferences.",
    badge: "Research Publications",
    tags: ["Blockchain", "AI Security", "Peer Reviewed"],
    color: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
  },
  {
    icon: Lightbulb,
    title: "Patent Drafting & Innovation",
    event: "Intellectual Property Rights Workshop",
    organization: "Centre for Intellectual Property Rights (CIPR)",
    description: "Participated in an intensive intellectual property workshop covering patent claims drafting, patent search methodologies, and commercial technology protection.",
    badge: "IP Rights",
    tags: ["Patent Drafting", "IP Protection", "Innovation"],
    color: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-500/10 text-orange-500 dark:text-orange-400"
  },
  {
    icon: BookOpen,
    title: "5+ Technical Blogs & System Use Cases",
    event: "Developer Community & Architecture Guides",
    organization: "Technical Writing & Engineering Case Studies",
    description: "Authored 5+ in-depth technical blogs and comprehensive system use cases analyzing scalable full-stack development, Spring Boot backend patterns, and real-world software engineering workflows.",
    badge: "Technical Author",
    tags: ["5+ Technical Blogs", "System Use Cases", "Full-Stack Architecture"],
    color: "from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400"
  }
];

const Achievements = () => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Honors & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Competitive hackathon victories, campus technical leadership, and dedicated community service
          </p>
        </FadeIn>

        {/* 1. TECHNICAL & HACKATHON ACHIEVEMENTS */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <Trophy className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl font-bold text-foreground">
              Technical Hackathons & Honors
            </h3>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalHonors.map((item, index) => (
              <StaggerItem key={index} className="h-full">
                <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${item.iconBg} shrink-0`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-heading text-lg font-bold text-foreground mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-primary text-xs font-semibold mb-1">
                      {item.event}
                    </p>
                    <p className="text-muted-foreground text-xs font-medium mb-3">
                      {item.organization}
                    </p>

                    <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60 mt-auto">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10.5px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* 2. COMMUNITY LEADERSHIP & SOCIAL IMPACT (NSS FEATURED SHOWCASE) */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <Heart className="w-5 h-5 text-rose-500" />
            <h3 className="font-heading text-xl font-bold text-foreground">
              Community Service & Social Impact
            </h3>
          </div>

          <FadeIn>
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 hover:border-rose-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-rose-500/5">
              <div className="grid md:grid-cols-12 gap-6 items-center">
                
                {/* Left: Certificate Preview Thumbnail */}
                <div className="md:col-span-4 relative group cursor-pointer rounded-xl overflow-hidden border border-border bg-muted/30" onClick={() => setShowCertificateModal(true)}>
                  <img
                    src="/nss-certificate.jpg"
                    alt="NSS Volunteer Certificate"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2 p-3 text-center">
                    <Eye className="w-6 h-6" />
                    <span className="text-xs font-semibold">Click to View Certificate</span>
                  </div>
                </div>

                {/* Right: Detailed NSS Service Info */}
                <div className="md:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                        <Heart className="w-3.5 h-3.5 fill-current" />
                        Humanitarian Service
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        2022 - 2024 (2 Years Dedicated Service)
                      </div>
                    </div>

                    <h4 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-1">
                      National Service Scheme (NSS) — Active Volunteer & Regular Blood Donor
                    </h4>
                    <p className="text-primary font-medium text-sm mb-4">
                      A.V.C. College of Engineering NSS Unit (Ministry of Youth Affairs & Sports, Govt. of India)
                    </p>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Regular Voluntary Blood Donor:</strong> Actively donated blood and mobilized student donors for emergency healthcare and regional hospital blood banks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Special Rural Camps & Leadership:</strong> Co-ordinated 7-day annual NSS residential special camps conducting village health awareness, tree plantation, and cleanliness initiatives.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Award of Merit:</strong> Formally recognized and certified by A.V.C. College of Engineering for 2 years of active civic and humanitarian service.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Impact Badges */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border/60">
                    {["Regular Blood Donor", "NSS Certified", "Rural Health Outreach", "Environmental Drives", "Social Leadership"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certificate Modal Lightbox */}
        {showCertificateModal && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowCertificateModal(false)}
          >
            <div className="relative max-w-2xl w-full bg-card p-2 rounded-2xl border border-border shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-all z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src="/nss-certificate.jpg"
                alt="NSS Certificate"
                className="w-full h-auto rounded-xl"
              />
              <p className="text-center text-xs text-muted-foreground py-2 font-medium">
                National Service Scheme (NSS) Certificate of Service — A.V.C. College of Engineering
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Achievements;
