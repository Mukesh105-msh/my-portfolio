import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaJava, FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt,
  FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaLinux,
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiScikitlearn,
} from "react-icons/si";
import { HiCode, HiGlobe, HiChip, HiCog } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import resumeData from "../data/resumeData";

const categoryIcons = {
  programming: <HiCode size={22} />,
  web: <HiGlobe size={22} />,
  ai_ml: <HiChip size={22} />,
  tools: <HiCog size={22} />,
};

const categoryLabels = {
  programming: "Programming Languages",
  web: "Web Development",
  ai_ml: "AI & Machine Learning",
  tools: "Tools & Databases",
};

const categoryColors = {
  programming: { bg: "bg-primary-500/10", text: "text-primary-400", bar: "from-primary-500 to-primary-400" },
  web: { bg: "bg-accent-cyan/10", text: "text-accent-cyan", bar: "from-cyan-500 to-cyan-400" },
  ai_ml: { bg: "bg-accent-pink/10", text: "text-accent-pink", bar: "from-pink-500 to-pink-400" },
  tools: { bg: "bg-accent-emerald/10", text: "text-accent-emerald", bar: "from-emerald-500 to-emerald-400" },
};

const skillIcons = {
  "Java": <FaJava />,
  "Python": <FaPython />,
  "JavaScript": <FaJs />,
  "SQL": <FaDatabase />,
  "React": <FaReact />,
  "HTML5": <FaHtml5 />,
  "CSS3": <FaCss3Alt />,
  "Node.js": <FaNodeJs />,
  "Git & GitHub": <FaGitAlt />,
  "VS Code": <HiCode />,
  "MongoDB": <SiMongodb />,
  "MySQL": <SiMysql />,
  "RAG Pipelines": <HiChip />,
  "NLP": <HiChip />,
  "Machine Learning": <SiScikitlearn />,
  "LangChain": <HiChip />,
};

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-lg ${color.text}`}>
            {skillIcons[name] || <HiCode />}
          </span>
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-xs text-[var(--text-secondary)] font-mono">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: "easeOut" }}
          className={`skill-bar-fill bg-gradient-to-r ${color.bar}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-2">{"// My Skills"}</p>
          <h2 className="section-title gradient-text">Technical Expertise</h2>
          <p className="section-subtitle mx-auto mt-3">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(resumeData.skills).map(([category, skills], catIndex) => {
            const color = categoryColors[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 sm:p-8"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl ${color.bg} ${color.text}`}>
                    {categoryIcons[category]}
                  </div>
                  <h3 className="font-display font-bold text-lg">
                    {categoryLabels[category]}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={color}
                      delay={i}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
