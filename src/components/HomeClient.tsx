"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Brain,
  Globe,
  Robot,
  Lightning,
  ArrowUpRight,
  Terminal,
} from "@phosphor-icons/react";
import MarqueeRow from "./MarqueeRow";
import Reveal from "./Reveal";

const TECH_ROWS = [
  ["Python", "Django", "FastAPI", "React", "Next.js", "TypeScript", "Rust", "Solidity"],
  ["PostgreSQL", "MySQL", "Redis", "Celery", "Docker", "Git", "Supabase", "Firebase"],
  ["LangChain", "OpenAI API", "Web3.js", "Web3.py", "Tailwind CSS", "React Native", "Node.js", "Blockchain"],
];

const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Responsive, modern websites and full-stack web applications with robust backends and intuitive frontends.",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Systems",
    desc: "Integrating LLMs and machine learning into apps to create smart, adaptive software solutions.",
  },
  {
    icon: Globe,
    title: "Web3 & Blockchain",
    desc: "Decentralized applications, smart contracts, and blockchain integrations using Solidity and Rust.",
  },
  {
    icon: Robot,
    title: "Automation & Bots",
    desc: "Autonomous agents, Telegram/WhatsApp bots, and trading algorithms that work while you sleep.",
  },
  {
    icon: Lightning,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications for iOS and Android built with React Native.",
  },
  {
    icon: Terminal,
    title: "Technical Consulting",
    desc: "Architecture design, code reviews, performance optimization, and technology stack guidance.",
  },
];

const STATS = [
  { value: "38+", label: "GitHub Repos" },
  { value: "5K+", label: "Dev Hours" },
  { value: "2020", label: "Started Coding" },
  { value: "∞", label: "Problems to Solve" },
];

export default function HomeClient() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0);
  const phrases = ["Software Developer.", "AI Integrator.", "Web3 Builder.", "Problem Solver."];
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const current = phrases[phraseIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setTyped(current.slice(0, charIdx.current));
        if (charIdx.current >= current.length) {
          deleting.current = true;
          setTimeout(tick, 1800);
          return;
        }
      } else {
        charIdx.current--;
        setTyped(current.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
          setPhase((p) => p + 1);
        }
      }
      setTimeout(tick, deleting.current ? 40 : 70);
    };
    const t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 font-mono text-xs mb-8 px-3 py-1.5 border"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#4ade80" }}
              />
              Available for projects
            </div>

            {/* Name */}
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-3">
              <span style={{ color: "var(--text-primary)" }}>Frank</span>
              <br />
              <span style={{ color: "var(--text-primary)" }}>Kelechi Oge</span>
            </h1>

            {/* Typewriter */}
            <div
              className="font-mono text-lg md:text-xl mb-6 h-8"
              style={{ color: "var(--text-muted)" }}
            >
              {typed}
              <span
                className="inline-block w-0.5 h-5 ml-0.5 align-middle"
                style={{
                  backgroundColor: "var(--text-muted)",
                  animation: "cursorBlink 1s step-end infinite",
                }}
              />
            </div>

            <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "var(--text-secondary)" }}>
              I believe software is the universal solvent for human difficulty. Founder of{" "}
              <span style={{ color: "var(--text-primary)" }}>Hackverse Software Solutions</span>,
              building intelligent, scalable systems across Web2, Web3, and AI.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/builds" className="cta-btn">
                View My Work
                <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="cta-btn-ghost">
                Link Up
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-12 pt-10 border-t" style={{ borderColor: "var(--border-subtle)" }}>
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-mono text-xl font-medium" style={{ color: "var(--text-primary)" }}>
                    {value}
                  </div>
                  <div className="font-mono text-xs mt-1" style={{ color: "var(--text-faint)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative w-72 h-96 md:w-80 md:h-[440px]"
              style={{
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src="/images/frank2.png"
                alt="Frank Kelechi Oge"
                fill
                className="object-cover grayscale"
                priority
              />
              {/* Overlay info card */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(var(--bg-rgb, 13,13,13), 0.85)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  @frankdotdev
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
                  Enugu, Nigeria
                </p>
              </div>
            </div>
            {/* Decorative corner */}
            <div
              className="absolute top-4 right-4 w-full h-full -z-10"
              style={{ border: "1px solid var(--border-subtle)" }}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-10 border-y overflow-hidden" style={{ borderColor: "var(--border-subtle)" }}>
        <p
          className="text-center font-mono text-xs tracking-widest uppercase mb-6"
          style={{ color: "var(--text-faint)" }}
        >
          Tech Stack
        </p>
        <div className="flex flex-col gap-3">
          <MarqueeRow items={TECH_ROWS[0]} direction="left" />
          <MarqueeRow items={TECH_ROWS[1]} direction="right" />
          <MarqueeRow items={TECH_ROWS[2]} direction="left" speed="slow" />
        </div>
      </section>

      {/* Stella AI Feature */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 border"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
          >
            <div className="flex flex-col justify-center">
              <div className="tag w-fit mb-6">Flagship Product</div>
              <h2 className="font-mono text-3xl md:text-4xl font-light mb-4" style={{ color: "var(--text-primary)" }}>
                Stella AI
              </h2>
              <p className="font-mono text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                The AI Learning Operating System
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                Stella AI transforms lectures, PDFs, and knowledge sources into intelligent learning systems.
                It records, analyzes, expands, and structures information into AI Notes, Flashcards, Exams,
                Summaries, and Knowledge Graphs.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "Next.js", "FastAPI", "Django", "PostgreSQL", "Redis"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a
                href="https://stellaai.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn w-fit"
              >
                Explore Stella AI
                <ArrowUpRight size={14} />
              </a>
            </div>
            {/* Terminal mockup */}
            <div
              className="font-mono text-xs p-6 border"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                borderColor: "var(--border)",
                lineHeight: "1.8",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#ef4444" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#22c55e" }} />
                <span className="ml-3" style={{ color: "var(--text-faint)" }}>stella.ai — lecture_intelligence</span>
              </div>
              <div style={{ color: "var(--text-muted)" }}>
                <div style={{ color: "#4ade80" }}>$ stella analyze --input lecture.mp4</div>
                <div className="mt-2" style={{ color: "var(--text-faint)" }}>Processing audio stream...</div>
                <div style={{ color: "var(--text-faint)" }}>Transcribing content...</div>
                <div style={{ color: "var(--text-faint)" }}>Building knowledge graph...</div>
                <div style={{ color: "var(--text-faint)" }}>Generating study materials...</div>
                <div className="mt-3 border-t pt-3" style={{ borderColor: "var(--border-subtle)" }}>
                  <div style={{ color: "var(--text-secondary)" }}>--- Output</div>
                  <div style={{ color: "#4ade80" }}>Notes generated: <span style={{ color: "var(--text-secondary)" }}>24 sections</span></div>
                  <div style={{ color: "#4ade80" }}>Flashcards created: <span style={{ color: "var(--text-secondary)" }}>47</span></div>
                  <div style={{ color: "#4ade80" }}>Exam questions: <span style={{ color: "var(--text-secondary)" }}>18</span></div>
                  <div style={{ color: "#4ade80" }}>Knowledge graph: <span style={{ color: "var(--text-secondary)" }}>built</span></div>
                  <div style={{ color: "#4ade80" }}>Study plan: <span style={{ color: "var(--text-secondary)" }}>generated</span></div>
                  <div className="mt-3" style={{ color: "var(--text-primary)" }}>Ready. Your learning system is live.</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>
                What I Do
              </p>
              <h2 className="font-mono text-3xl md:text-4xl font-light" style={{ color: "var(--text-primary)" }}>
                Solutions I Build
              </h2>
            </div>
            <Link
              href="/solutions"
              className="font-mono text-xs flex items-center gap-2 hover-line"
              style={{ color: "var(--text-muted)" }}
            >
              All Services <ArrowUpRight size={12} />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div
                className="p-8 group transition-colors duration-200"
                style={{ backgroundColor: "var(--bg)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)")
                }
              >
                <Icon
                  size={24}
                  weight="light"
                  className="mb-5"
                  style={{ color: "var(--text-primary)" }}
                />
                <h3 className="font-mono text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy teaser */}
      <section
        className="py-24 px-6 md:px-10 border-y"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-faint)" }}>
              Philosophy
            </p>
            <blockquote
              className="font-mono text-2xl md:text-3xl lg:text-4xl font-light leading-snug mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              "Software is the most powerful tool ever created for human leverage. I don't just write code — I bridge the gap between where a system is and where it needs to be."
            </blockquote>
            <Link
              href="/philosophy"
              className="font-mono text-xs flex items-center justify-center gap-2 hover-line w-fit mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Read the full philosophy <ArrowUpRight size={12} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
                Let's Build
              </p>
              <h2 className="font-mono text-3xl md:text-4xl font-light mb-6" style={{ color: "var(--text-primary)" }}>
                Have a problem worth solving?
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                Whether it's a SaaS product, web app, automation, or anything that solves a real problem — I'm in.
                Let's eliminate friction together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="cta-btn">
                  Link Up <ArrowRight size={14} />
                </Link>
                <a
                  href="mailto:ogekcfrankie@gmail.com"
                  className="cta-btn-ghost"
                >
                  Send an Email
                </a>
              </div>
            </div>
            <div
              className="p-8 border font-mono text-xs"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-secondary)",
                lineHeight: "1.9",
              }}
            >
              <div style={{ color: "var(--text-faint)" }}># Available for</div>
              <div style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "#4ade80" }}>→</span> Freelance Projects
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "#4ade80" }}>→</span> Full-Time Positions
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "#4ade80" }}>→</span> SaaS Partnerships
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "#4ade80" }}>→</span> Technical Consulting
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "#4ade80" }}>→</span> Open Source Collaboration
              </div>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--border-subtle)", color: "var(--text-faint)" }}>
                Timezone: WAT (UTC+1) · Enugu, Nigeria
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
