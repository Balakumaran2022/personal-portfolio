import { Mail, MapPin, Github, Linkedin, Send, User, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./AnimatedSection";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

emailjs.init("kWnDB2-ysaAtodn6N");

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jesl9jl",
        "template_bv528pt",
        formRef.current!
      )
      .then(
        () => {
          alert("✅ Message sent successfully.");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to professional opportunities and collaborations
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* LEFT – CONTACT DETAILS */}
          <FadeIn direction="left" className="space-y-6">

            <motion.div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="font-medium">balakumarancse2022@gmail.com</p>
            </motion.div>

            <motion.div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-medium">Sirkazhi, Tamil Nadu, India</p>
            </motion.div>
            <motion.div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Contact</p>
              <p className="font-medium">+91 7695980064</p>
            </motion.div>


            <div className="flex gap-4 pt-2">
              <motion.a
                href="https://github.com/Balakumaran2022"
                target="_blank"
                className="p-4 rounded-xl bg-secondary border border-border hover:border-primary transition"
                whileHover={{ scale: 1.05 }}
              >
                <Github />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/balakumaran008"
                target="_blank"
                className="p-4 rounded-xl bg-secondary border border-border hover:border-primary transition"
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin />
              </motion.a>
            </div>
          </FadeIn>

          {/* RIGHT – CONTACT FORM */}
          <FadeIn direction="right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border space-y-6"
            >
              <h3 className="font-heading text-xl font-semibold mb-2">
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
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
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
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Contact;
