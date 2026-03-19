import { motion } from "framer-motion";
import { HiCode, HiBriefcase, HiAcademicCap, HiLightBulb } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import resumeData from "../data/resumeData";

const stats = [
  { icon: <HiCode size={24} />, value: "3+", label: "Projects" },
  { icon: <HiBriefcase size={24} />, value: "1+", label: "Internship" },
  { icon: <HiAcademicCap size={24} />, value: "7.74", label: "CGPA" },
  { icon: <HiLightBulb size={24} />, value: "10+", label: "Technologies" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-2">{"// About Me"}</p>
          <h2 className="section-title gradient-text">Get To Know Me</h2>
          <p className="section-subtitle mx-auto mt-3">
            A passionate IT student with hands-on experience in building real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Summary */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-bold mb-4 text-primary-400">
                Who I Am
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                {resumeData.summary}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Java", "Python", "Node.js", "RAG", "MongoDB"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Experience highlight */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 shrink-0">
                  <HiBriefcase size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {resumeData.experience[0].title}
                  </h4>
                  <p className="text-sm text-primary-400 mb-1">
                    {resumeData.experience[0].company} • {resumeData.experience[0].period}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Built 15+ responsive web interfaces with React, improving code reusability by 35%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center group"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary-500/10 text-primary-400 mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-display font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education preview */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan shrink-0">
                  <HiAcademicCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {resumeData.education[0].degree}
                  </h4>
                  <p className="text-sm text-accent-cyan mb-1">
                    {resumeData.education[0].institution}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {resumeData.education[0].year} • {resumeData.education[0].score}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
