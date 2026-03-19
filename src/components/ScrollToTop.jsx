import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShow(scrollTop > 400);
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle progress
  const circumference = 2 * Math.PI * 20;
  const dashOffset = circumference * (1 - progress);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 flex items-center justify-center cursor-pointer group"
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="var(--glass-border)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="url(#scrollGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="transition-all duration-150"
            />
            <defs>
              <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Arrow */}
          <div className="relative z-10 w-9 h-9 rounded-full glass flex items-center justify-center text-primary-400 group-hover:text-white group-hover:bg-primary-500 transition-all">
            <HiArrowUp size={18} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
