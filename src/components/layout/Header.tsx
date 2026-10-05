"use client";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
export function Header() {
  const t = useTranslations("Navigation");
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);
  const navLinks = [
    { name: t("about"), href: "#about" },
    { name: t("experience"), href: "#experience" },
    { name: t("works"), href: "#works" },
    { name: t("contact"), href: "#contact" },
  ];
  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-background/90 backdrop-blur-md py-4 border-b border-foreground/10 shadow-sm" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Button href="#" variant="secondary" className="scale-90 origin-left hidden sm:inline-block">
          <span className="font-heading font-bold text-lg tracking-tighter uppercase flex items-center">
            Maël
            <motion.span 
              className="text-accent ml-1"
              animate={{ opacity: [1, 1, 0, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 0.99, 1] }}
            >
              _
            </motion.span>
          </span>
        </Button>
        <Button href="#" variant="secondary" className="scale-75 origin-left sm:hidden">
          <span className="font-heading font-bold text-base tracking-tighter uppercase flex items-center">
            Maël
            <motion.span 
              className="text-accent ml-1"
              animate={{ opacity: [1, 1, 0, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 0.99, 1] }}
            >
              _
            </motion.span>
          </span>
        </Button>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`relative text-sm font-bold uppercase tracking-widest transition-all hoverable py-1 group ${
                  isActive ? "text-accent hover:brightness-125" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-foreground/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                )}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 sm:gap-6">
          <LanguageSwitcher />
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors hoverable shrink-0"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-foreground/5 flex flex-col items-center justify-center gap-[4px] shrink-0"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-4 h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-4 h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-foreground/10 absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors ${
                      isActive ? "bg-accent/10 text-accent" : "bg-foreground/5 text-foreground/70 active:bg-foreground/10"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
