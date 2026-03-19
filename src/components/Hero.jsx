import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resumeData from "../data/resumeData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="blob w-72 h-72 bg-primary-600 top-20 -left-20 animate-blob" />
      <div className="blob w-96 h-96 bg-accent-cyan top-40 -right-20 animate-blob animation-delay-2000" style={{ animationDelay: "2s" }} />
      <div className="blob w-72 h-72 bg-accent-pink bottom-20 left-1/3 animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-mono text-sm mb-4 tracking-wider"
            >
              
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              I'm{" "}
              <span className="gradient-text">Mukesh</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-6 text-[var(--text-secondary)] h-10"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "AI Engineer",
                  2000,
                  "Problem Solver",
                  2000,
                  "React Specialist",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-300"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[var(--text-secondary)] text-base sm:text-lg max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Building scalable web apps, RAG-based AI systems, and healthcare solutions.
              B.Tech IT student at Sri Ramakrishna Engineering College.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#resume" className="btn-glow flex items-center gap-2">
                <HiDownload size={18} />
                View Resume
              </a>
              <a href="#contact" className="btn-outline flex items-center gap-2">
                <HiMail size={18} />
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:text-primary-400 transition-all text-[var(--text-secondary)]"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:text-primary-400 transition-all text-[var(--text-secondary)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-cyan to-accent-pink blur-2xl opacity-30 animate-pulse-slow scale-110" />
              
              {/* Profile ring */}
              <div className="profile-ring">
                <img
                  src="/profile.jpg"
                  alt="Mukesh I"
                  className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover shadow-2xl"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 text-xs font-semibold text-primary-400 shadow-lg"
              >
                🚀 AI Engineer
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 text-xs font-semibold text-accent-cyan shadow-lg"
              >
                💻 Full Stack Dev
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--text-secondary)] rounded-full flex justify-center opacity-50"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-400 rounded-full mt-1.5"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
