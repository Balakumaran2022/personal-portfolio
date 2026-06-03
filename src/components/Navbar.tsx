import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Highlights", href: "#highlights" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <a
            href="#"
            className="font-heading font-bold text-lg sm:text-xl md:text-2xl 
                       max-w-[70%] truncate gradient-text flex items-center gap-2"
          >
            Portfolio
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pl-4 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="flex-shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="flex flex-col gap-6 py-6 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
