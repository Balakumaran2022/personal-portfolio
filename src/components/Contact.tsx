import { Mail, MapPin, Github, Linkedin, Send, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./AnimatedSection";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";

emailjs.init("YaDsxvivIx8beO6Sk");

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_jesl9jl",
        "template_bv528pt",
        formRef.current!,
        "YaDsxvivIx8beO6Sk"
      )
      .then(
        () => {
          toast.success("Message sent successfully! I will respond promptly.");
          formRef.current?.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS Error Details:", error);
          toast.error("Failed to send message. Please reach out directly at balakumarancse2022@gmail.com");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Available for full-time engineering roles, high-impact projects, and technical collaborations.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* LEFT – CONTACT DETAILS */}
          <FadeIn direction="left" className="space-y-5">
            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                <a href="mailto:balakumarancse2022@gmail.com" className="font-medium text-foreground hover:text-primary transition-colors">
                  balakumarancse2022@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                <p className="font-medium text-foreground">Sirkazhi, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/Balakumaran2022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/80 hover:border-primary text-sm font-semibold transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/balakumaran008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/80 hover:border-primary text-sm font-semibold transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </FadeIn>

          {/* RIGHT – CONTACT FORM */}
          <FadeIn direction="right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border/80 shadow-sm space-y-5"
            >
              <h3 className="font-heading text-xl font-bold mb-2">
                Send a Message
              </h3>

              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none text-sm transition-all"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none text-sm transition-all"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none resize-none text-sm transition-all"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full shadow-md" disabled={isSending}>
                <Send className={`w-4 h-4 mr-2 ${isSending ? "animate-pulse" : ""}`} />
                {isSending ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Contact;
