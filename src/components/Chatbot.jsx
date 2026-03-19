import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChat, HiX, HiPaperAirplane } from "react-icons/hi";
import { sendChatMessage } from "../services/chatbotService";

const INITIAL_MESSAGE = {
  role: "bot",
  content:
    "Hi! 👋 I'm Mukesh's AI assistant. Ask me anything about his skills, projects, education, experience, or achievements!",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsTyping(true);

    try {
      // Try to get API key from env or use local fallback
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || "";
      const reply = await sendChatMessage(text, apiKey);
      setMessages((prev) => [...prev, { role: "bot", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Sorry, something went wrong. Please try again!" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Simple markdown-like bold rendering
  const renderContent = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-primary-300">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-xl shadow-primary-500/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiX size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiChat size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification dot */}
      {!isOpen && messages.length <= 1 && (
        <span className="fixed bottom-[4.25rem] right-6 z-50 w-3 h-3 bg-accent-pink rounded-full animate-pulse pointer-events-none" />
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--glass-border)",
            }}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
                  🤖
                </div>
                <div>
                  <p className="font-semibold text-sm">Mukesh's AI Assistant</p>
                  <p className="text-xs text-white/70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online — Ask me anything
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[250px] max-h-[calc(70vh-140px)]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i === messages.length - 1 ? 0.1 : 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={msg.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"}>
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {renderContent(msg.content)}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="chat-bubble-bot">
                    <div className="typing-dots py-1">
                      <span /><span /><span />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[var(--glass-border)]">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects..."
                  maxLength={500}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm outline-none focus:border-primary-400 transition-all placeholder:text-[var(--text-secondary)]/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-primary-500 text-white disabled:opacity-40 hover:bg-primary-600 transition-all cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <HiPaperAirplane size={18} className="rotate-90" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
