"use client";
import { useState, useRef, useEffect } from "react";
import {
  ChatTeardrop,
  X,
  PaperPlaneTilt,
  WhatsappLogo,
  InstagramLogo,
  XLogo,
  Envelope,
} from "@phosphor-icons/react";

interface Message {
  role: "user" | "assistant";
  content: string;
  time: string;
}

const QUICK_PROMPTS = [
  "Who is Frank?",
  "What is Stella AI?",
  "What services does he offer?",
  "How can I hire Frank?",
];

const CONTACT_LINKS = [
  {
    href: "https://wa.me/2348059474901",
    icon: WhatsappLogo,
    label: "WhatsApp",
  },
  { href: "https://instagram.com/frankdotdev", icon: InstagramLogo, label: "Instagram" },
  { href: "https://x.com/frankdotdev", icon: XLogo, label: "X" },
  { href: "mailto:ogekcfrankie@gmail.com", icon: Envelope, label: "Email" },
];

function getTime() {
  return new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm Frank's AI assistant. Ask me anything about Frank's background, skills, projects, or philosophy.",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply, time: getTime() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please reach out to Frank directly.",
          time: getTime(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat window */}
      <div
        className="fixed bottom-24 right-6 z-50 w-80 flex flex-col overflow-hidden shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
          pointerEvents: open ? "all" : "none",
          transformOrigin: "bottom right",
          maxHeight: "480px",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{
            borderColor: "var(--border-subtle)",
            backgroundColor: "var(--bg-tertiary)",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#4ade80" }}
            />
            <span className="font-mono text-xs font-medium" style={{ color: "var(--text-primary)" }}>
              Frank's Assistant
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ color: "var(--text-muted)" }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ maxHeight: "280px" }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className="px-3 py-2 text-xs leading-relaxed max-w-[85%]"
                style={
                  msg.role === "user"
                    ? {
                        backgroundColor: "var(--text-primary)",
                        color: "var(--bg)",
                      }
                    : {
                        backgroundColor: "var(--surface)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-subtle)",
                      }
                }
              >
                {msg.content}
              </div>
              <span className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
                {msg.time}
              </span>
            </div>
          ))}
          {loading && (
            <div className="flex items-start">
              <div
                className="px-3 py-2 text-xs font-mono"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-muted)",
                }}
              >
                <span className="inline-block animate-pulse">thinking_</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick prompts */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {QUICK_PROMPTS.map((p) => (
              <button
                key={p}
                onClick={() => sendMessage(p)}
                className="tag text-[10px] cursor-pointer transition-all"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--text-primary)";
                  (e.currentTarget as HTMLElement).style.color = "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--tag-bg)";
                  (e.currentTarget as HTMLElement).style.color = "var(--tag-text)";
                }}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          className="flex items-center gap-2 px-3 py-3 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask something..."
            className="flex-1 bg-transparent outline-none font-mono text-xs placeholder:opacity-40"
            style={{ color: "var(--text-primary)" }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            style={{ color: input.trim() ? "var(--text-primary)" : "var(--text-faint)" }}
          >
            <PaperPlaneTilt size={16} weight="fill" />
          </button>
        </div>

        {/* Social footer */}
        <div
          className="flex items-center justify-center gap-3 px-4 py-2 border-t"
          style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-tertiary)" }}
        >
          {CONTACT_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")
              }
            >
              <Icon size={15} weight="light" />
            </a>
          ))}
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200"
        style={{
          backgroundColor: "var(--text-primary)",
          color: "var(--bg)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
        aria-label="Open assistant"
      >
        {open ? <X size={20} /> : <ChatTeardrop size={20} weight="fill" />}
      </button>
    </>
  );
}
