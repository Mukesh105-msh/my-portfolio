import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import resumeData from "../data/resumeData";

const contactInfo = [
  {
    icon: <HiMail size={22} />,
    label: "Email",
    value: resumeData.email,
    href: `mailto:${resumeData.email}`,
    color: "text-primary-400 bg-primary-500/10",
  },
  {
    icon: <HiPhone size={22} />,
    label: "Phone",
    value: resumeData.phone,
    href: `tel:${resumeData.phone}`,
    color: "text-accent-cyan bg-accent-cyan/10",
  },
  {
    icon: <HiLocationMarker size={22} />,
    label: "Location",
    value: resumeData.location,
    href: null,
    color: "text-accent-emerald bg-accent-emerald/10",
  },
];

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    href: resumeData.github,
  },
  {
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    href: resumeData.linkedin,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "sending" | "sent" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mailto fallback
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(
      `mailto:${resumeData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setStatus("sent");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <SectionWrapper id="contact" className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-2">
            {"// Get In Touch"}
          </p>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <p className="section-subtitle mx-auto mt-3">
            Have a project in mind or want to connect? Let's talk!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className={`p-3 rounded-xl ${item.color} shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--text-secondary)] mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium hover:text-primary-400 transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium truncate">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-2 text-[var(--text-secondary)] hover:text-primary-400 transition-all flex-1 justify-center"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-[var(--text-secondary)] mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/30 transition-all placeholder:text-[var(--text-secondary)]/40"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--text-secondary)] mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/30 transition-all placeholder:text-[var(--text-secondary)]/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/30 transition-all resize-none placeholder:text-[var(--text-secondary)]/40"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-glow w-full flex items-center justify-center gap-2 text-sm"
              >
                <HiPaperAirplane size={18} className="rotate-90" />
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "✓ Message Sent!"
                  : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[var(--glass-border)] text-center">
          <p className="font-display text-xl font-bold gradient-text mb-2">
            Mukesh I
          </p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Full Stack Developer & AI Engineer
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-primary-400 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Mukesh I. Built with React & ❤️
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}