import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, Award, FileText, Sparkles, BookOpen, Briefcase, Activity, BadgeCheck, GraduationCap, Terminal, Heart, Code, Play, Lightbulb, Database, Store } from "lucide-react";
import { FadeIn } from "./AnimatedSection";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/horizon8-cheque.png",
    images: [
      "/horizon8-cheque.png",
      "/horizon8-team1.png",
      "/horizon8-team2.png",
      "/horizon8-certificate.jpg",
      "/horizon8-group.png"
    ],
    title: "TANSAM Hackathon",
    subtitle: "3rd Place – Horizon 8",
    description: "Secured 3rd Place 🥉 at the Horizon 8 Hackathon (jointly run by Joy University & TANSAM) under the theme 'Boosting Large Vehicle Upkeep with AR/VR and IoT'. Worked on the design of a smart IoT and AR/VR system, earning a cash prize of ₹20,000.",
    icon: Trophy,
    accentColor: "from-yellow-500 to-amber-600",
    lightOverlay: true,
  },
  {
    id: 2,
    image: "/sdg-certificates.jpg",
    images: [
      "/sdg-certificates.jpg",
      "/sdg-group.png"
    ],
    title: "SDG Student Symposium 2025",
    subtitle: "1st Place – Double Victory",
    description: "Won 1st Place in both the 'Poster Pitch (Hack for Social Good)' and 'AI for Green Tech & Growth' zones at the EGS Pillay Tech College Event. Worked well with project team members to deliver high-impact demos.",
    icon: Award,
    accentColor: "from-emerald-500 to-teal-600",
    lightOverlay: true,
  },
  {
    id: 3,
    image: "/ignis-sentiment.png",
    images: [
      "/ignis-sentiment.png",
      "/ignis-qubits.png",
      "/nr-ias.jpg",
      "/theta-tekathon.jpg",
      "/velammal.png",
      "/mirai-paper.jpg"
    ],
    title: "Symposiums & Tech Contests",
    subtitle: "Paper Presentations & Quizzes",
    description: "Shared research papers on 'Social Media Mood Analysis' and entered diverse tech tests like bug hunting, hacks, and tech quizzes across top colleges including SASTRA University and Velammal.",
    icon: FileText,
    accentColor: "from-blue-500 to-indigo-600",
    lightOverlay: true,
  },
  {
    id: 4,
    image: "/gemini-announcement.png",
    images: [
      "/gemini-announcement.png",
      "/gemini-cert.png",
      "/gemini-team.jpg",
      "/gemini-event.jpg"
    ],
    title: "Google Student Ambassador",
    subtitle: "Google Gemini Program",
    description: "Chosen as the Google Gemini Student Lead for A.V.C. College of Engg. Backed Google AI tools on campus, hosted workshops, and held hands-on tech sessions to drive student interest and growth in AI.",
    icon: Sparkles,
    accentColor: "from-blue-500 via-purple-500 to-pink-500",
    lightOverlay: true,
  },
  {
    id: 5,
    image: "/icicea-2026.jpg",
    images: [
      "/icicea-2026.jpg",
      "/icret-2025.jpg"
    ],
    title: "Blockchain Research Papers",
    subtitle: "International Conferences",
    description: "Shared and read peer-checked research papers on 'Blockchain Secure Land Registry' (ICICEA-2026) and 'Blockchain for Secure AI Training' (ICRET-2025) at global meets hosted by A.V.C. College of Engg.",
    icon: BookOpen,
    accentColor: "from-cyan-500 to-blue-600",
    lightOverlay: true,
  },
  {
    id: 6,
    image: "/cognifyz-internship.jpg",
    images: [
      "/cognifyz-internship.jpg",
      "/i5-internship.png",
      "/technohacks-internship.png"
    ],
    title: "Professional Internships",
    subtitle: "Industry Experiences",
    description: "Finished active work terms focused on Data Analysis (Cognifyz Tech), Java Full-Stack Dev (i5 Tech), and Blockchain Tech (TechnoHacks Solutions) to gain deep hands-on engg practice.",
    icon: Briefcase,
    accentColor: "from-amber-500 via-orange-500 to-red-600",
    lightOverlay: true,
  },
  {
    id: 7,
    image: "/manipal-makeathon.png",
    images: [
      "/manipal-makeathon.png"
    ],
    title: "Manipal Makeathon",
    subtitle: "Healthcare Challenge",
    description: "Joined the Manipal Makeathon, an elite health contest backed by Manipal Hospitals and Google. Worked in a mixed team to design, build, and pitch ideas solving real-world medical needs.",
    icon: Activity,
    accentColor: "from-red-500 via-pink-500 to-rose-600",
    lightOverlay: true,
  },
  {
    id: 8,
    image: "/cert-blockchain-livewire.png",
    images: [
      "/cert-blockchain-livewire.png",
      "/cert-blockchain-infosys.png",
      "/cert-blockchain-udemy.png",
      "/cert-blockchain-guvi.png",
      "/cert-data-analytica.png"
    ],
    title: "Professional Certifications",
    subtitle: "Industry Credentials",
    description: "Earned verified certs in Blockchain Tech and Data Analytics from leading school and firm groups, like Livewire, Infosys Springboard, GUVI, and Analytica.",
    icon: BadgeCheck,
    accentColor: "from-violet-500 via-purple-500 to-indigo-600",
    lightOverlay: true,
  },
  {
    id: 9,
    image: "/cert-placement-iitb.png",
    images: [
      "/cert-placement-iitb.png",
      "/cert-cyber-security.jpg",
      "/cert-career-counselling.jpg"
    ],
    title: "Workshops & Training",
    subtitle: "Career Development",
    description: "Finished expert training programs to boost career skills, like the IIT Bombay Placement Prep Course, focused Cyber Security & Ethical Hacking training, and work career growth talks.",
    icon: GraduationCap,
    accentColor: "from-sky-500 via-blue-500 to-indigo-600",
    lightOverlay: true,
  },
  {
    id: 10,
    image: "/spoken-tutorial-python.png",
    images: [
      "/spoken-tutorial-python.png",
      "/spoken-tutorial-java.png",
      "/spoken-tutorial-git.png",
      "/spoken-tutorial-r.png",
      "/spoken-tutorial-arduino.jpg",
      "/spoken-tutorial-php.jpg"
    ],
    title: "IIT Bombay Spoken Tutorial",
    subtitle: "Software Certifications",
    description: "Finished many tech course paths from the IIT Bombay Spoken Tutorial Project, scoring highly in remote online exams for Python, Java, PHP & MySQL, Arduino, R coding, and Git version control.",
    icon: Terminal,
    accentColor: "from-teal-500 via-cyan-500 to-blue-600",
    lightOverlay: true,
  },
  {
    id: 11,
    image: "/nss-certificate.jpg",
    images: [
      "/nss-certificate.jpg"
    ],
    title: "NSS Volunteer Service",
    subtitle: "National Service Scheme",
    description: "Served as an active National Service Scheme (NSS) member from 2022 to 2024, leading local service projects and joining the annual NSS Special Camp programs.",
    icon: Heart,
    accentColor: "from-rose-500 via-red-500 to-pink-600",
    lightOverlay: true,
  },
  {
    id: 12,
    image: "/crud-play-background.png",
    images: [
      "/crud-play-background.png"
    ],
    title: "Student Management CRUD",
    subtitle: "Full-Stack Spring Boot App",
    description: "Developed a robust Student Management app using Java, Spring Boot, Thymeleaf, and MySQL. Built RESTful APIs, MVC design, JPA/Hibernate data access, input checks, and a fluid Bootstrap UI.",
    icon: Code,
    accentColor: "from-green-500 via-emerald-500 to-teal-600",
    lightOverlay: true,
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7350914947582742529?compact=1",
  },
  {
    id: 13,
    image: "/viksit-bharat-certificate.jpg",
    images: [
      "/viksit-bharat-certificate.jpg"
    ],
    title: "Viksit Bharat @2047",
    subtitle: "Ideas for the Vision",
    description: "Shared policy feedback and smart ideas toward the 'Viksit Bharat @2047' national growth vision. Honored with an Award of Entry by MyGov, Govt of India, for active civic action.",
    icon: Lightbulb,
    accentColor: "from-orange-500 via-amber-500 to-yellow-600",
    lightOverlay: true,
  },
  {
    id: 14,
    image: "/tn_land_registry_kaggle.png",
    images: [
      "/tn_land_registry_kaggle.png"
    ],
    title: "TN Land Registry Dataset",
    subtitle: "Kaggle Dataset Publisher",
    description: "Published a synthetic Tamil Nadu (TN) Land Registry dataset of 1,000 records on Kaggle, which I created for my project. It is designed for blockchain land setups, survey numbers, and check fields.",
    icon: Database,
    accentColor: "from-sky-400 via-blue-500 to-indigo-600",
    lightOverlay: true,
    externalLink: "https://www.kaggle.com/datasets/balakumaran2334/tn-land-registry-1000-sample-records-csv",
  },
  {
    id: 15,
    image: "/ed-bazaar-collage.jpg",
    images: [
      "/ed-bazaar-collage.jpg",
      "/uzumaki-stall.jpg"
    ],
    title: "Uzumaki Stall – ED Bazaar 2025",
    subtitle: "Campus Entrepreneurship Venture",
    description: "We started and ran a food stall called 'Uzumaki Stall' at our college 'ED BAZAAR 2025' event on September 3, 2025. Out of 47 stalls set up by students, we carefully planned our budget, managed our food stock, and successfully made a good profit on our investment.",
    icon: Store,
    accentColor: "from-red-500 via-orange-500 to-yellow-600",
    lightOverlay: true,
  }
];

const CareerHighlights = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeImageMap, setActiveImageMap] = useState<Record<number, string>>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  const openIframe = (url: string) => {
    setIsAutoPlaying(false);
    setActiveIframe(url);
  };

  const closeIframe = () => {
    setActiveIframe(null);
  };

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    if (slides.length <= 1) return;
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };
  const next = () => {
    if (slides.length <= 1) return;
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % slides.length);
  };
  const goTo = (i: number) => {
    setIsAutoPlaying(false);
    setCurrent(i);
  };

  const handleThumbnailClick = (slideId: number, imgUrl: string) => {
    setIsAutoPlaying(false);
    setActiveImageMap((prev) => ({ ...prev, [slideId]: imgUrl }));
  };

  const openLightbox = (imgUrl: string) => {
    setLightboxImage(imgUrl);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsZoomed(false);
  };

  const slide = slides[current];

  return (
    <section id="highlights" className="py-24 relative">
      <div className="container px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Career <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            Key milestones, achievements and experiences that define my professional journey
          </p>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          {/* Slide */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border h-[460px] md:h-[520px]">
            {/* Background Image */}
            <motion.img
              key={slide.id + "-" + (activeImageMap[slide.id] || slide.image)}
              src={activeImageMap[slide.id] || slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
              onClick={() => openLightbox(activeImageMap[slide.id] || slide.image)}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            />

            {/* Play Button Overlay for Video/Iframe Slides */}
            {(slide as any).iframeSrc && (
              <div 
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer pointer-events-auto"
                onClick={() => openIframe((slide as any).iframeSrc)}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-5 rounded-full bg-primary/90 text-primary-foreground shadow-2xl border border-white/20 flex items-center justify-center group"
                >
                  <Play className="w-8 h-8 fill-current translate-x-0.5 group-hover:scale-105 transition-all" />
                </motion.div>
              </div>
            )}

            {/* Gradient overlay */}
            {(slide as any).lightOverlay ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              </>
            )}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
              <motion.div
                key={slide.id + "-content"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pointer-events-auto relative z-20"
              >
                <div className="w-full">
                  {/* Icon badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${slide.accentColor} text-white text-sm font-semibold mb-4 shadow-lg`}>
                    <slide.icon className="w-4 h-4" />
                    {slide.subtitle}
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-white/80 text-[13.5px] md:text-[14.5px] leading-relaxed max-w-2xl justify-clean">
                    {slide.description}
                  </p>

                  {(slide as any).iframeSrc && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openIframe((slide as any).iframeSrc);
                      }}
                      className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-all shadow-lg hover:scale-105 pointer-events-auto"
                    >
                      <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      Watch Video Demo
                    </button>
                  )}

                  {/* Multi-image thumbnails */}
                  {((slide as any).images || (slide as any).iframeSrc || (slide as any).externalLink) && (
                    <div className="flex flex-wrap gap-2 mt-4 items-center">
                      {(slide as any).images?.map((imgUrl: string, idx: number) => {
                        const currentActiveImg = activeImageMap[slide.id] || slide.image;
                        return (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleThumbnailClick(slide.id, imgUrl);
                            }}
                            className={`w-12 h-9 md:w-16 md:h-12 rounded-lg overflow-hidden border-2 transition-all ${
                              currentActiveImg === imgUrl ? "border-primary scale-105" : "border-white/30 opacity-70 hover:opacity-100"
                            }`}
                          >
                            <img src={imgUrl} className="w-full h-full object-cover" alt={`thumbnail-${idx}`} />
                          </button>
                        );
                      })}

                      {/* Video Thumbnail Button */}
                      {(slide as any).iframeSrc && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openIframe((slide as any).iframeSrc);
                          }}
                          className="w-12 h-9 md:w-16 md:h-12 rounded-lg overflow-hidden border-2 border-primary bg-black/80 hover:bg-black/60 transition-all flex items-center justify-center relative group"
                          title="Watch video demo"
                        >
                          <img 
                            src={slide.image} 
                            className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-all" 
                            alt="video-thumbnail" 
                          />
                          <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
                          <Play className="w-5 h-5 text-white fill-current relative z-10 drop-shadow-md animate-pulse" />
                        </button>
                      )}

                      {/* Dataset Link Button next to the thumbnail image */}
                      {(slide as any).externalLink && (
                        <a
                          href={(slide as any).externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-primary text-primary-foreground font-semibold text-[9.5px] md:text-[11px] hover:opacity-95 transition-all shadow-md hover:scale-105 pointer-events-auto h-7 md:h-8 flex items-center justify-center gap-1"
                        >
                          Dataset Link
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Zoom Indicator */}
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 select-none pointer-events-none z-20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {(slide as any).iframeSrc ? "Click play to watch video • Click image to zoom" : "Click center to view image"}
            </div>

            {/* Slide number */}
            {slides.length > 1 && (
              <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20">
                {current + 1} / {slides.length}
              </div>
            )}
          </div>

          {/* Controls */}
          {slides.length > 1 && (
            <div className="flex items-center justify-between mt-6">
              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "w-8 h-2.5 bg-primary"
                        : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="p-3 rounded-xl bg-background/60 dark:bg-card/60 backdrop-blur-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 text-foreground"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-3 rounded-xl bg-background/60 dark:bg-card/60 backdrop-blur-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 text-foreground"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
            onClick={closeLightbox}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-5xl max-h-[85vh] flex items-center justify-center pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                src={lightboxImage} 
                alt="Enlarged view" 
                drag={isZoomed}
                dragConstraints={{ left: -400, right: 400, top: -300, bottom: 300 }}
                dragElastic={0.1}
                animate={{ scale: isZoomed ? 1.5 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-2xl ${
                  isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <button 
                className="absolute -top-12 right-0 md:-top-4 md:-right-12 text-white bg-black/50 hover:bg-white/10 hover:text-primary p-3 rounded-full border border-white/20 transition-all font-semibold"
                onClick={closeLightbox}
              >
                ✕
              </button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-sm mt-4 text-center cursor-pointer"
              onClick={closeLightbox}
            >
              {isZoomed ? "Drag to pan • Click image to zoom out" : "Click image to zoom in • Click outside to close"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Iframe Modal */}
      <AnimatePresence>
        {activeIframe && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer"
            onClick={closeIframe}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className={`relative w-full bg-[#1c1c1e] rounded-3xl border border-white/10 shadow-2xl overflow-hidden pointer-events-auto transition-all ${
                activeIframe.includes("compact=1") ? "max-w-[580px]" : "max-w-[500px] h-[85vh]"
              }`}
              style={activeIframe.includes("compact=1") ? { aspectRatio: "504 / 399" } : {}}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                src={activeIframe} 
                className="w-full h-full border-none" 
                allowFullScreen 
                title="LinkedIn Video Demo"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black/70 hover:bg-white/10 hover:text-primary p-2 rounded-full border border-white/20 transition-all font-semibold z-10"
                onClick={closeIframe}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CareerHighlights;
