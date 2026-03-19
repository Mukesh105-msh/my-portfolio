// Complete resume data for Mukesh I
// Used by portfolio sections AND chatbot context

const resumeData = {
  name: "Mukesh I",
  tagline: "Full Stack Developer | AI Engineer | Problem Solver",
  location: "Tenkasi, Tamil Nadu, India",
  phone: "+91 9043230292",
  email: "mukeshmsh2006@gmail.com",
  linkedin: "https://www.linkedin.com/in/mukeshiyyappan",
  leetcode: "https://leetcode.com/mukesh-i",
  github: "https://github.com/Mukesh105-msh",

  summary:
    "Information Technology undergraduate with hands-on expertise in Full Stack Web Development, Java, Python, and Database Management Systems. Demonstrated ability to build scalable end-to-end web applications, RAG-based LLM systems, and deep learning healthcare AI solutions. Proven track record in reducing manual processing time by 40% through automation and enhancing system reliability through AI-driven validation mechanisms. Strong foundation in Object-Oriented Programming, Data Structures, Algorithms, and RESTful API development.",

  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Sri Ramakrishna Engineering College, Coimbatore",
      year: "Expected 2027",
      score: "CGPA: 7.74/10",
    },
    {
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "Veeramamunivar RC Higher Secondary School, Tenkasi",
      year: "2023",
      score: "Percentage: 86.5%",
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "Veeramamunivar RC Higher Secondary School, Tenkasi",
      year: "2020",
      score: "Percentage: 100%",
    },
  ],

  experience: [
    {
      title: "Web Development Intern",
      company: "Upgradenow Technologies",
      location: "Remote",
      period: "June 2024 – August 2024",
      highlights: [
        "Designed and developed 15+ responsive web interfaces using HTML5, CSS3, and ReactJS, implementing component-based architecture that improved code reusability by 35%",
        "Created 20+ reusable React components with optimized state management, reducing development time for new features by 25%",
        "Collaborated with cross-functional team of 5 developers to implement industry-standard coding practices, resulting in 30% reduction in code review cycles",
        "Engineered frontend development workflows following Agile methodologies, improving deployment efficiency and accelerating feature delivery by 20%",
        "Implemented responsive design patterns ensuring seamless user experience across mobile, tablet, and desktop devices with 99% browser compatibility",
      ],
    },
  ],

  skills: {
    programming: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 75 },
    ],
    web: [
      { name: "React", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Node.js", level: 80 },
    ],
    ai_ml: [
      { name: "RAG Pipelines", level: 80 },
      { name: "NLP", level: 75 },
      { name: "Machine Learning", level: 75 },
      { name: "LangChain", level: 70 },
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },

  projects: [
    {
      title: "Healthcare AI Hallucination Detection",
      description:
        "Architected and deployed a RAG pipeline integrated with MetaGPT-style multi-agent workflows to detect and mitigate AI hallucinations in medical information retrieval. Achieved 92% accuracy in medical query responses.",
      tech: ["Python", "RAG", "MetaGPT", "NLP", "LangChain"],
      category: "AI",
      highlights: [
        "Reduced hallucination rates by 60% and improved clinical accuracy scores by 45%",
        "Engineered context validation system with source attribution mechanisms",
        "Enhanced patient safety protocols through multi-layer verification system",
      ],
      github: "https://github.com/Mukesh105-msh",
      live: "#",
    },
    {
      title: "Smart Finance & Expense Manager",
      description:
        "Built a full-stack application to track income and expenses with category-wise analytics, budget planning, and smart financial insights.",
      tech: ["React", "Node.js", "MongoDB", "JavaScript"],
      category: "Web",
      highlights: [
        "Implemented secure user authentication and optimized database queries",
        "Designed interactive dashboards with charts for spending analysis",
        "Added smart insights to analyze spending patterns and suggest savings",
      ],
      github: "https://github.com/Mukesh105-msh",
      live: "#",
    },
    {
      title: "Alzheimer's Voice Detection",
      description:
        "Built full-stack web application with voice analysis capabilities for early-stage Alzheimer's disease detection using machine learning and NLP techniques.",
      tech: ["Python", "ML", "NLP", "Scikit-learn", "Flask"],
      category: "AI",
      highlights: [
        "Extracted 25+ acoustic and linguistic features from voice recordings",
        "Trained Random Forest classifier achieving 82% accuracy",
        "Real-time diagnostic insights within 10 seconds via Flask interface",
      ],
      github: "https://github.com/Mukesh105-msh",
      live: "#",
    },
  ],

  achievements: [
    {
      title: "Anna University Zonal Cricket Tournament 2024–2025",
      role: "Team Member",
      description:
        "Represented Sri Ramakrishna Engineering College at Anna University Regional Campus, Coimbatore. Secured third position among 15+ competing institutions. Demonstrated leadership, strategic thinking, and effective communication skills in high-pressure competitive environment.",
    },
    {
      title: "Class X Board Exam — 100% Score",
      role: "Academic Excellence",
      description:
        "Achieved a perfect 100% score in Secondary School Certificate (Class X) examinations.",
    },
  ],

  certifications: [
    { title: "Fundamental of Quantum Computing", issuer: "The Linux Foundation" },
    { title: "Introduction to Industry and IoT 4.0", issuer: "NPTEL" },
    { title: "GIAN Course: Artificial Intelligence in Medicine", issuer: "GIAN" },
    { title: "IBM Qiskit Fall Fest 2024", issuer: "IBM" },
  ],

  // Chatbot context - flattened resume for LLM
  getChatbotContext() {
    return `
RESUME OF MUKESH I
==================

CONTACT:
- Location: ${this.location}
- Phone: ${this.phone}
- Email: ${this.email}
- LinkedIn: ${this.linkedin}
- LeetCode: ${this.leetcode}
- GitHub: ${this.github}

PROFESSIONAL SUMMARY:
${this.summary}

TECHNICAL SKILLS:
- Programming Languages: ${this.skills.programming.map((s) => s.name).join(", ")}
- Web Technologies: ${this.skills.web.map((s) => s.name).join(", ")}
- AI/ML: ${this.skills.ai_ml.map((s) => s.name).join(", ")}
- Tools & Databases: ${this.skills.tools.map((s) => s.name).join(", ")}
- Operating Systems: Windows, Linux

EDUCATION:
${this.education.map((e) => `- ${e.degree} | ${e.institution} | ${e.year} | ${e.score}`).join("\n")}

PROFESSIONAL EXPERIENCE:
${this.experience
  .map(
    (e) =>
      `${e.title} at ${e.company} (${e.period}, ${e.location})\n${e.highlights.map((h) => `  • ${h}`).join("\n")}`
  )
  .join("\n\n")}

TECHNICAL PROJECTS:
${this.projects
  .map(
    (p) =>
      `${p.title} [${p.tech.join(", ")}]\n${p.description}\n${p.highlights.map((h) => `  • ${h}`).join("\n")}`
  )
  .join("\n\n")}

ACHIEVEMENTS & LEADERSHIP:
${this.achievements.map((a) => `${a.title} (${a.role}): ${a.description}`).join("\n")}

CERTIFICATIONS:
${this.certifications.map((c) => `- ${c.title} — ${c.issuer}`).join("\n")}
    `.trim();
  },
};

export default resumeData;
