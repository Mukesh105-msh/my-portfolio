import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiBriefcase,
  HiDownload,
  HiBadgeCheck,
  HiStar,
} from "react-icons/hi";
import { FaCertificate } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import resumeData from "../data/resumeData";

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-2">
            {"// My Background"}
          </p>
          <h2 className="section-title gradient-text">Resume & Timeline</h2>
          <p className="section-subtitle mx-auto mt-3">
            Education, experience, certifications, and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN — Education + Experience */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan">
                  <HiAcademicCap size={22} />
                </div>
                <h3 className="font-display text-xl font-bold">Education</h3>
              </div>
              <div className="relative ml-4 border-l-2 border-primary-500/20 pl-8 space-y-8">
                {resumeData.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-[var(--bg-primary)]" />
                    <div className="glass-card p-5">
                      <span className="text-xs font-mono text-primary-400">
                        {edu.year}
                      </span>
                      <h4 className="font-semibold mt-1 text-sm">{edu.degree}</h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        {edu.institution}
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/10 text-accent-cyan">
                        {edu.score}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400">
                  <HiBriefcase size={22} />
                </div>
                <h3 className="font-display text-xl font-bold">Experience</h3>
              </div>
              <div className="relative ml-4 border-l-2 border-primary-500/20 pl-8 space-y-8">
                {resumeData.experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-[var(--bg-primary)]" />
                    <div className="glass-card p-5">
                      <span className="text-xs font-mono text-primary-400">
                        {exp.period}
                      </span>
                      <h4 className="font-semibold mt-1 text-sm">{exp.title}</h4>
                      <p className="text-sm text-accent-cyan mb-3">
                        {exp.company} • {exp.location}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.highlights.slice(0, 3).map((h, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                          >
                            <span className="text-primary-400 mt-0.5 shrink-0">
                              ▹
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Certifications + Achievements */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent-amber/10 text-accent-amber">
                  <FaCertificate size={20} />
                </div>
                <h3 className="font-display text-xl font-bold">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {resumeData.certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-4 flex items-start gap-4 group"
                  >
                    <div className="p-2 rounded-lg bg-accent-amber/10 text-accent-amber shrink-0 group-hover:scale-110 transition-transform">
                      <HiBadgeCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{cert.title}</h4>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent-pink/10 text-accent-pink">
                  <HiStar size={22} />
                </div>
                <h3 className="font-display text-xl font-bold">
                  Achievements
                </h3>
              </div>
              <div className="space-y-3">
                {resumeData.achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-pink/10 text-accent-pink">
                        {ach.role}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold mb-2">{ach.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {ach.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center pt-4"
            >
              <a
                href="/Mukesh_Resume.pdf"
                download
                className="btn-glow inline-flex items-center gap-2 text-lg"
              >
                <HiDownload size={20} />
                Download Resume
              </a>
              <p className="text-xs text-[var(--text-secondary)] mt-3">
                PDF format • Updated March 2026
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
