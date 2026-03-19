import resumeData from "../data/resumeData";

const SYSTEM_PROMPT = `You are an AI assistant for Mukesh's portfolio website.
Answer ONLY based on the provided resume context below.
Do not generate fake information or make assumptions.
If the answer is not found in the resume, reply exactly:
"I can only answer based on Mukesh's resume."
Keep answers short, professional, and clear. Use bullet points when listing multiple items.

--- RESUME CONTEXT ---
${resumeData.getChatbotContext()}
--- END RESUME CONTEXT ---`;

// Simple rate limiting
let lastCallTime = 0;
const MIN_INTERVAL_MS = 2000;

export async function sendChatMessage(userMessage, apiKey) {
  // Rate limiting
  const now = Date.now();
  if (now - lastCallTime < MIN_INTERVAL_MS) {
    return "Please wait a moment before sending another message.";
  }
  lastCallTime = now;

  // Input validation
  if (!userMessage || userMessage.trim().length === 0) {
    return "Please enter a message.";
  }
  if (userMessage.length > 500) {
    return "Please keep your message under 500 characters.";
  }

  // If no API key, use local matching
  if (!apiKey) {
    return getLocalResponse(userMessage);
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.1-8b-instruct:free",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
        max_tokens: 300,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      console.error("API error:", response.status);
      return getLocalResponse(userMessage);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || getLocalResponse(userMessage);
  } catch (error) {
    console.error("Chat API error:", error);
    return getLocalResponse(userMessage);
  }
}

// Local keyword-based fallback
function getLocalResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("name") || msg.includes("who")) {
    return `Hi! I'm **Mukesh I**, a Full Stack Developer and AI Engineer currently pursuing B.Tech in Information Technology at Sri Ramakrishna Engineering College, Coimbatore.`;
  }
  if (msg.includes("skill") || msg.includes("tech") || msg.includes("know")) {
    return `Mukesh's technical skills include:\n• **Programming:** Java, Python, JavaScript, SQL\n• **Web:** React, HTML5, CSS3, Node.js\n• **AI/ML:** RAG Pipelines, NLP, Machine Learning, LangChain\n• **Tools:** Git, GitHub, VS Code, MongoDB, MySQL`;
  }
  if (msg.includes("project")) {
    return `Mukesh has built 3 major projects:\n1. **Healthcare AI Hallucination Detection** — RAG pipeline with MetaGPT for medical AI (92% accuracy)\n2. **Smart Finance Manager** — Full-stack expense tracking with React & MongoDB\n3. **Alzheimer's Voice Detection** — ML-based voice analysis with 82% accuracy`;
  }
  if (msg.includes("education") || msg.includes("college") || msg.includes("study") || msg.includes("degree")) {
    return `Mukesh is pursuing **B.Tech in Information Technology** at Sri Ramakrishna Engineering College, Coimbatore (Expected 2027, CGPA: 7.74/10). He scored 86.5% in Class XII and 100% in Class X.`;
  }
  if (msg.includes("experience") || msg.includes("intern") || msg.includes("work")) {
    return `Mukesh interned as a **Web Development Intern** at Upgradenow Technologies (June–Aug 2024, Remote). He built 15+ responsive web interfaces, created 20+ reusable React components, and collaborated with a team of 5 developers using Agile methodologies.`;
  }
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone") || msg.includes("reach")) {
    return `You can reach Mukesh at:\n• **Email:** mukeshmsh2006@gmail.com\n• **Phone:** +91 9043230292\n• **LinkedIn:** linkedin.com/in/mukesh-i\n• **Location:** Tenkasi, Tamil Nadu, India`;
  }
  if (msg.includes("certif")) {
    return `Mukesh's certifications:\n• Fundamental of Quantum Computing — The Linux Foundation\n• Introduction to Industry and IoT 4.0 — NPTEL\n• GIAN Course: Artificial Intelligence in Medicine\n• IBM Qiskit Fall Fest 2024`;
  }
  if (msg.includes("achieve") || msg.includes("award") || msg.includes("cricket")) {
    return `Mukesh represented Sri Ramakrishna Engineering College at the **Anna University Zonal Cricket Tournament 2024–2025**, securing 3rd place among 15+ institutions. He also achieved a perfect **100% score** in Class X board exams.`;
  }
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return `Hello! 👋 I'm Mukesh's AI assistant. I can answer questions about his skills, projects, education, experience, certifications, and achievements. What would you like to know?`;
  }
  return `I can answer questions about Mukesh's **skills, projects, education, experience, certifications, and achievements**. Try asking something specific, like "What are Mukesh's skills?" or "Tell me about his projects."`;
}
