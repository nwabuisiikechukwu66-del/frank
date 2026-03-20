"use client";
import { useState } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  TiktokLogo,
  MediumLogo,
  FacebookLogo,
  WhatsappLogo,
  Envelope,
  PaperPlaneTilt,
  ArrowUpRight,
  Tree,
} from "@phosphor-icons/react";
import Reveal from "./Reveal";

const SOCIAL = [
  { icon: GithubLogo, label: "GitHub", handle: "@frankdotdev", href: "https://github.com/frankdotdev" },
  { icon: LinkedinLogo, label: "LinkedIn", handle: "frank-kelechi-oge", href: "https://linkedin.com/in/frank-kelechi-oge" },
  { icon: XLogo, label: "X (Twitter)", handle: "@frankdotdev", href: "https://x.com/frankdotdev" },
  { icon: InstagramLogo, label: "Instagram", handle: "@frankdotdev", href: "https://instagram.com/frankdotdev" },
  { icon: TiktokLogo, label: "TikTok", handle: "@frankdotdev_", href: "https://tiktok.com/@frankdotdev_" },
  { icon: MediumLogo, label: "Medium", handle: "@frankdotdev", href: "https://medium.com/@frankdotdev" },
  { icon: FacebookLogo, label: "Facebook", handle: "frankdotdev", href: "https://facebook.com/frankdotdev" },
  { icon: WhatsappLogo, label: "WhatsApp", handle: "+2348059474901", href: "https://wa.me/2348059474901?text=Hello%20Frank,%20I%20found%20you%20through%20your%20portfolio%20website.%20I%27d%20like%20to%20discuss%20a%20potential%20project." },
  { icon: Envelope, label: "Email", handle: "ogekcfrankie@gmail.com", href: "mailto:ogekcfrankie@gmail.com" },
  { icon: Tree, label: "Linktree", handle: "linktr.ee/frankdotdev", href: "https://linktr.ee/frankdotdev" },
];

type FormState = { name: string; email: string; subject: string; message: string };

export default function ContactClient() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    backgroundColor: "var(--bg-tertiary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    outline: "none",
    fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
    fontSize: "13px",
    width: "100%",
    padding: "12px 14px",
    transition: "border-color 0.2s",
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            Get in Touch
          </p>
          <h1
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Link Up
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Open to new opportunities and collaborations. Whether you have a project in mind, want to
            discuss a partnership, or just want to say hello — I'll get back to you.
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <Reveal>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-faint)" }}>
                Send a Message
              </p>

              {status === "sent" ? (
                <div
                  className="p-8 border text-center"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
                >
                  <div className="font-mono text-4xl mb-4" style={{ color: "#4ade80" }}>/</div>
                  <p className="font-mono text-sm mb-2" style={{ color: "var(--text-primary)" }}>
                    Message sent.
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                        Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--text-primary)")}
                        onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--text-primary)")}
                        onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => ((e.currentTarget as HTMLSelectElement).style.borderColor = "var(--text-primary)")}
                      onBlur={(e) => ((e.currentTarget as HTMLSelectElement).style.borderColor = "var(--border)")}
                    >
                      <option value="">Select a subject</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="fulltime">Full-time Opportunity</option>
                      <option value="partnership">Partnership / Collaboration</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Describe what you're working on..."
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--text-primary)")}
                      onBlur={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--border)")}
                    />
                  </div>

                  {status === "error" && (
                    <p className="font-mono text-xs" style={{ color: "#ef4444" }}>
                      Something went wrong. Email me directly at ogekcfrankie@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="cta-btn w-fit"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <PaperPlaneTilt size={14} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Right side — social + availability */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-10">
              {/* Availability */}
              <div
                className="p-6 border"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#4ade80" }}
                  />
                  <span className="font-mono text-xs" style={{ color: "var(--text-primary)" }}>
                    Available for new work
                  </span>
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  <div>Freelance Projects</div>
                  <div>Full-time Positions</div>
                  <div>SaaS Partnerships</div>
                  <div>Technical Consulting</div>
                  <div>Open Source Collaboration</div>
                </div>
                <div
                  className="mt-4 pt-4 border-t font-mono text-xs"
                  style={{ borderColor: "var(--border-subtle)", color: "var(--text-faint)" }}
                >
                  Timezone: WAT (UTC+1) · Enugu, Nigeria
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: "var(--text-faint)" }}>
                  Find Me Everywhere
                </p>
                <div className="flex flex-col gap-3">
                  {SOCIAL.map(({ icon: Icon, label, handle, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group py-2 border-b"
                      style={{ borderColor: "var(--border-subtle)" }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} weight="light" style={{ color: "var(--text-muted)" }} />
                        <span className="font-mono text-xs" style={{ color: "var(--text-primary)" }}>
                          {label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                          {handle}
                        </span>
                        <ArrowUpRight
                          size={12}
                          style={{ color: "var(--text-faint)" }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
