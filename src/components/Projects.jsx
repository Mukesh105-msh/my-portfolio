import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import resumeData from "../data/resumeData";

const filters = ["All", "AI", "Web", "App"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? resumeData.projects
      : resumeData.projects.filter((p) => p.category === active);

  return (
    <SectionWrapper id="projects" className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary-400 font-mono text-sm mb-2">{"// My Work"}</p>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle mx-auto mt-3">
            Real-world applications showcasing my technical capabilities
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                active === f
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "glass-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1 }}
                layout
                className="glass-card overflow-hidden group flex flex-col"
              >
                {/* Gradient Top Bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-pink" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge */}
                  <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-4">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5 flex-1">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                      >
                        <span className="text-primary-400 mt-0.5 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--glass-border)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-[var(--glass-border)]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-primary-400 hover:bg-primary-500/10 transition-all"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all"
                      >
                        <FaExternalLinkAlt size={14} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
