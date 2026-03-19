import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  HiMenuAlt3,
  HiX,
  HiSun,
  HiMoon,
} from "react-icons/hi";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="font-display text-2xl font-bold gradient-text cursor-pointer"
            >
              Mukesh<span className="text-primary-400">.</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === id
                      ? "text-primary-400 bg-primary-500/10"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-lg text-[var(--text-secondary)] hover:text-primary-400 hover:bg-primary-500/10 transition-all cursor-pointer"
                aria-label="Toggle theme"
              >
                {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
              </button>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-primary-400 cursor-pointer"
                aria-label="Toggle theme"
              >
                {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-primary-400 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 glass mx-4 rounded-2xl p-4 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    activeSection === id
                      ? "text-primary-400 bg-primary-500/10"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
