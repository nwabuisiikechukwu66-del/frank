"use client";
import Link from "next/link";
import {
  Code,
  Brain,
  Globe,
  Robot,
  Lightning,
  Terminal,
  DeviceMobile,
  Database,
  Cloud,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    id: "web-dev",
    icon: Code,
    title: "Web Development",
    desc: "Modern, responsive websites that deliver exceptional user experiences across all devices. From landing pages to complex multi-page sites, focused on clean code, performance, and SEO best practices.",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading times & Core Web Vitals",
      "Cross-browser compatibility",
      "Accessibility compliance",
      "CMS integration",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    id: "web-apps",
    icon: Terminal,
    title: "Web Applications",
    desc: "Full-stack web application development with secure backends, scalable databases, and intuitive user interfaces. Applications that handle real-time data, user authentication, and complex business logic.",
    features: [
      "User authentication & authorization",
      "Real-time data processing",
      "API development & integration",
      "Database design & optimization",
      "Scalable architecture",
      "Payment integrations",
    ],
    stack: ["React", "Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "Redis", "AWS"],
  },
  {
    id: "ai-systems",
    icon: Brain,
    title: "AI & Intelligent Systems",
    desc: "Integrating LLMs and machine learning into apps to create smart, adaptive software. From AI chatbots to document processing pipelines and knowledge management systems.",
    features: [
      "LLM integration (OpenAI, Claude, Gemini)",
      "RAG (Retrieval-Augmented Generation)",
      "Document intelligence pipelines",
      "AI chatbot development",
      "NLP and text processing",
      "Predictive analytics",
    ],
    stack: ["Python", "LangChain", "OpenAI API", "FastAPI", "Pinecone", "PostgreSQL", "Redis"],
  },
  {
    id: "web3",
    icon: Globe,
    title: "Web3 & Blockchain",
    desc: "Decentralized application development, smart contract creation, and blockchain integration. Secure, scalable solutions for the decentralized web including DeFi, NFTs, and blockchain systems.",
    features: [
      "Smart contract development (Solidity/Rust)",
      "Decentralized application (DApp) creation",
      "Blockchain integration",
      "DeFi protocol implementation",
      "NFT marketplace development",
      "Wallet & exchange integration",
    ],
    stack: ["Solidity", "Rust", "Ethereum", "Solana", "Web3.js", "Hardhat", "IPFS", "Chainlink"],
  },
  {
    id: "bots",
    icon: Robot,
    title: "Bots & Automation",
    desc: "Automated bots for Telegram, Discord, and trading exchanges. Intelligent bots that handle conversations, execute trades, monitor markets, and perform automated tasks 24/7.",
    features: [
      "Telegram / WhatsApp / Discord bots",
      "Crypto trading bots (Bybit, Binance)",
      "Market monitoring & whale tracking",
      "Social media automation",
      "Web scraping & data collection",
      "Workflow automation scripts",
    ],
    stack: ["Python", "Node.js", "Telegram Bot API", "CCXT", "Web3.py", "Discord.js", "Celery"],
  },
  {
    id: "mobile",
    icon: DeviceMobile,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications for iOS and Android. From concept to deployment, creating intuitive, high-performance mobile apps that integrate with backend services.",
    features: [
      "Cross-platform iOS & Android",
      "Native performance",
      "UI/UX design implementation",
      "API integration",
      "Push notifications",
      "App store deployment",
    ],
    stack: ["React Native", "Expo", "Firebase", "TypeScript"],
  },
  {
    id: "database",
    icon: Database,
    title: "Database & Backend Services",
    desc: "Robust backend development including database design, API creation, and server management. Secure, scalable, and well-designed RESTful APIs for any use case.",
    features: [
      "Database schema design",
      "REST & GraphQL API development",
      "Data migration & optimization",
      "Security implementation",
      "Performance tuning",
      "Caching strategies",
    ],
    stack: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "FastAPI", "Django REST", "Node.js"],
  },
  {
    id: "devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deployment and management of applications on cloud platforms. From containerization to CI/CD pipelines, helping you deploy and scale applications efficiently.",
    features: [
      "Cloud deployment (AWS, Vercel, Railway)",
      "Containerization with Docker",
      "CI/CD pipeline setup",
      "Monitoring & logging",
      "VPS setup & management",
      "Nginx & SSL configuration",
    ],
    stack: ["AWS", "Docker", "GitHub Actions", "Vercel", "Railway", "Hetzner", "Nginx"],
  },
  {
    id: "consulting",
    icon: Wrench,
    title: "Technical Consulting",
    desc: "Expert guidance on technology stack selection, architecture design, code reviews, and performance optimization. Informed decisions about your tech strategy and implementation.",
    features: [
      "Technology stack recommendations",
      "Architecture design",
      "Code reviews & refactoring",
      "Performance optimization",
      "Security audits",
      "Hiring & team guidance",
    ],
    stack: ["System Design", "Code Review", "Performance Analysis", "Security Best Practices"],
  },
];

export default function SolutionsClient() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            What I Build
          </p>
          <h1
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Solutions
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mb-10" style={{ color: "var(--text-secondary)" }}>
            Comprehensive software solutions tailored to your needs. From elegant web applications to
            intelligent AI systems and decentralized protocols — if it solves a problem, I build it.
          </p>
          <Link href="/contact" className="cta-btn">
            Discuss Your Project <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>

      {/* Services grid */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24">
        <div className="flex flex-col gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
          {SERVICES.map(({ id, icon: Icon, title, desc, features, stack }, i) => (
            <Reveal key={id} delay={i * 40}>
              <div
                className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
                style={{ backgroundColor: "var(--bg)" }}
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={22} weight="light" style={{ color: "var(--text-primary)" }} />
                    <h2 className="font-mono text-lg font-medium" style={{ color: "var(--text-primary)" }}>
                      {title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Right — features */}
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
                    Key Features
                  </p>
                  <div className="flex flex-col gap-3">
                    {features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle size={15} weight="light" className="mt-0.5 shrink-0" style={{ color: "var(--text-muted)" }} />
                        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 md:px-10 border-t"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
              Ready to Build?
            </p>
            <h2 className="font-mono text-3xl md:text-4xl font-light mb-6" style={{ color: "var(--text-primary)" }}>
              Let's solve your problem.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Every problem is a technical challenge waiting for a robust solution. Describe what you need,
              and let's build something that actually works.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="cta-btn">
                Start a Project <ArrowRight size={14} />
              </Link>
              <Link href="/builds" className="cta-btn-ghost">
                View Past Builds
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
