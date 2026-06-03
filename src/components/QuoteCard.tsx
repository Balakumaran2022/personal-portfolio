import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FadeIn } from "./AnimatedSection";
import ThreeDCard from "./ThreeDCard";

// Inject Playfair Display for the quote
const style = document.createElement("link");
style.rel = "stylesheet";
style.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap";
if (!document.head.querySelector('[href*="Playfair"]')) document.head.appendChild(style);

const QuoteCard = () => {
  return (
    <section className="py-16 relative">
      <div className="container px-6">
        <FadeIn>
          <ThreeDCard 
            className="max-w-4xl mx-auto relative p-8 md:p-12 rounded-3xl bg-background/50 dark:bg-card/40 backdrop-blur-xl border border-border shadow-2xl overflow-hidden hover:shadow-primary/10"
          >
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            
            <div 
              className="relative z-10 flex flex-col items-center text-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="mb-6 p-4 rounded-full bg-secondary text-primary shadow-lg shadow-primary/20"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
              >
                <Quote className="w-8 h-8" />
              </motion.div>
              
              <motion.blockquote 
                style={{ fontFamily: "'Playfair Display', Georgia, serif", transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                className="text-xs sm:text-sm md:text-base font-semibold mb-6 leading-relaxed text-foreground/90 tracking-wide text-justify max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                &#8220;Focused on building a successful career in technology by combining technical knowledge, creativity, and practical experience to develop innovative solutions, achieve professional excellence, overcome challenges through continuous learning, and create a meaningful future filled with growth, opportunities, and positive impact in both career and life.&#8221;
              </motion.blockquote>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
              >
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full" />
                <cite className="text-base text-muted-foreground not-italic font-medium">
                  — Bala Kumaran M
                </cite>
              </motion.div>
            </div>
          </ThreeDCard>
        </FadeIn>
      </div>
    </section>
  );
};

export default QuoteCard;
