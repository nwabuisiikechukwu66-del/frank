"use client";
import { useState } from "react";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal";

const CATEGORIES = ["All", "AI/ML", "Web3", "Web App", "Bot", "Automation"];

const PROJECTS = [
  {
    title: "Stella AI",
    subtitle: "The AI Learning Operating System",
    desc: "Stella AI transforms lectures, PDFs, and knowledge sources into intelligent learning systems. Automatically generates AI Notes, Flashcards, Exams, Summaries, and Knowledge Graphs.",
    category: "AI/ML",
    featured: true,
    status: "Live",
    live: "https://stellaai.pro",
    repo: null,
    stack: ["React", "Next.js", "FastAPI", "Django REST", "PostgreSQL", "Celery", "Redis"],
  },
  {
    title: "Portal Web3 Game Site",
    subtitle: "Play-to-earn game platform",
    desc: "A Web3 game site where users can get rewarded for playing and the top users are displayed on a real-time leaderboard. Worked on the backend architecture and API.",
    category: "Web3",
    featured: true,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["React", "Node.js", "Solidity", "Solana Wallet Adapter"],
  },
  {
    title: "HackerAutoTradeBot",
    subtitle: "Crypto Trading Automation",
    desc: "An automated Telegram bot for executing crypto trading strategies on the Bybit exchange. Uses technical indicators like RSI and EMA to make trades autonomously.",
    category: "Bot",
    featured: false,
    status: "Private",
    live: null,
    repo: "#",
    stack: ["Python", "CCXT", "Web3.py", "Telegram Bot API"],
  },
  {
    title: "OMPH Catholic Chaplaincy",
    subtitle: "Full-featured Church Web App",
    desc: "A full-featured web application for Our Mother of Perpetual Help Chaplaincy. Features Mass Intentions, Prayer Wall, Events Calendar, Marketplace, Admin Dashboard, and PWA support.",
    category: "Web App",
    featured: true,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "Caritas Catholic Chaplaincy",
    subtitle: "Church Website with Special Features",
    desc: "Church website with booking mass through the website, daily readings and saints of the day, push notifications for prayers at designated times, and community features.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "ZK Compression Cost Visualizer",
    subtitle: "Blockchain Cost Analytics",
    desc: "A Django web application to visualize the cost savings achieved through ZK compression on blockchain data storage. Provides detailed insights into rent reductions and on-chain storage benefits.",
    category: "Web3",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["Django", "Python", "MySQL", "Chart.js", "Tailwind CSS", "Railway"],
  },
  {
    title: "Vybe Whale Alert Bot",
    subtitle: "Crypto Whale Tracker",
    desc: "Tracks whale wallets and sends real-time alerts through Telegram notifications for cryptocurrency market movements. Monitors token purchases and wallet interactions.",
    category: "Bot",
    featured: false,
    status: "Live",
    live: null,
    repo: "#",
    stack: ["Python", "CCXT", "Telegram Bot API", "Web3.py"],
  },
  {
    title: "Token Launch Scanner",
    subtitle: "Agentic Sales Bot",
    desc: "An agentic bot that scans for new tokens launched on DexScreener, extracts their contact details (X, Telegram), and automatically sends personalized pitch messages offering dev services.",
    category: "Automation",
    featured: false,
    status: "Private",
    live: null,
    repo: null,
    stack: ["Python", "Telegram Bot API", "Web3.py", "FastAPI"],
  },
  {
    title: "Game Prediction Bot",
    subtitle: "AI Sports Prediction",
    desc: "A web app with full frontend interface and FastAPI backend. Claude AI processes live sports data and generates match outcome predictions with confidence scores.",
    category: "AI/ML",
    featured: false,
    status: "Private",
    live: null,
    repo: null,
    stack: ["React", "FastAPI", "Claude API", "Python"],
  },
  {
    title: "Signet",
    subtitle: "Web Platform",
    desc: "Professional web platform built for Signet, handling their online presence and core web functionality.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://signet.xyz",
    repo: null,
    stack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Zugis Cake Ordering",
    subtitle: "E-Commerce Platform",
    desc: "A comprehensive cake ordering platform for a local business. Features product catalog, image gallery, order placement, order tracking, customer accounts, and admin dashboard.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Retail Store Database System",
    subtitle: "Inventory & Sales Management",
    desc: "A robust inventory and sales management system engineered to minimize data entry errors and deliver comprehensive sales analytics for retail operations.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["Python", "MySQL"],
  },
];

const STATUS_COLORS: Record<string, string> = {
  Live: "#4ade80",
  Private: "#f59e0b",
  "In Progress": "#60a5fa",
};

export default function BuildsClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            My Work
          </p>
          <h1
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Builds
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mb-4" style={{ color: "var(--text-secondary)" }}>
            A collection of things I've built — from AI systems and Web3 protocols to automation bots and
            full-stack applications. Some are public, some are private. All are real.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { v: "12+", l: "Projects Built" },
              { v: "38+", l: "GitHub Repos" },
              { v: "5K+", l: "Dev Hours" },
              { v: "100%", l: "Client Satisfaction" },
            ].map(({ v, l }) => (
              <div key={l}>
                <span className="font-mono text-xl font-medium" style={{ color: "var(--text-primary)" }}>
                  {v}
                </span>
                <span className="font-mono text-xs ml-2" style={{ color: "var(--text-faint)" }}>
                  {l}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Filter tabs */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="font-mono text-xs px-4 py-2 border transition-all duration-200"
              style={{
                borderColor: activeFilter === cat ? "var(--text-primary)" : "var(--border)",
                backgroundColor: activeFilter === cat ? "var(--text-primary)" : "transparent",
                color: activeFilter === cat ? "var(--bg)" : "var(--text-muted)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="px-6 md:px-10 max-w-7xl mx-auto mb-6">
          <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-faint)" }}>
            Featured
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div
                  className="p-8 flex flex-col justify-between min-h-64 group"
                  style={{ backgroundColor: "var(--bg)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)")
                  }
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="font-mono text-lg font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                          {p.title}
                        </h2>
                        <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                          {p.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: STATUS_COLORS[p.status] || "#888" }}
                        />
                        <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                          {p.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.stack.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {p.live && p.live !== "#" && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs flex items-center gap-1 hover-line"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Live Demo <ArrowUpRight size={12} />
                      </a>
                    )}
                    {p.repo && p.repo !== "#" && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs flex items-center gap-1 hover-line"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <GithubLogo size={13} /> Source
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* All other projects */}
      {rest.length > 0 && (
        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24">
          <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-faint)" }}>
            All Builds
          </p>
          <div className="flex flex-col gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <div
                  className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 group"
                  style={{ backgroundColor: "var(--bg)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)")
                  }
                >
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        {p.title}
                      </h3>
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: STATUS_COLORS[p.status] || "#888" }}
                      />
                    </div>
                    <p className="font-mono text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                      {p.subtitle}
                    </p>
                    <span className="tag">{p.category}</span>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span key={s} className="tag">{s}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        {p.live && p.live !== "#" && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs flex items-center gap-1 hover-line"
                            style={{ color: "var(--text-muted)" }}
                          >
                            Live <ArrowUpRight size={11} />
                          </a>
                        )}
                        {p.repo && p.repo !== "#" && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs flex items-center gap-1 hover-line"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <GithubLogo size={12} /> Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
