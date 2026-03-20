"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import MarqueeRow from "./MarqueeRow";

const JOURNEY = [
  {
    year: "2020",
    title: "The Spark — The Lockdown",
    body: "My journey began during the 2020 lockdown. I discovered game development and was fascinated by the idea of creating worlds from scratch. I dove into Unity, Godot, and GameGuru. While I didn't ship a blockbuster, I found my true passion: the process of building, and a relentless drive to understand how complex software works.",
  },
  {
    year: "2021",
    title: "The Pivot — The Hunter Street Moment",
    body: "My curiosity shifted. Inspired by the problem-solving I saw in shows like Hunter Street, I wanted to understand how systems really work. This led me to ethical hacking and, ultimately, to Python. It was a multi-year journey of self-study and persistence — but it became the key that unlocked everything else.",
  },
  {
    year: "2022",
    title: "The Toolkit — Building a Full-Stack Foundation",
    body: "My foundation began in data, using Python, MySQL, and Excel for analysis. But I wanted to build, not just analyze. This pushed me into full-stack development — from Django backends to React frontends — and now to high-performance APIs with FastAPI. Bots, PWAs, e-commerce sites, always driven to learn the next tool.",
  },
  {
    year: "2023",
    title: "The Philosophy — Beyond the Code",
    body: "Technology is my craft, but it's not my entire world. I'm fascinated by psychology, history, and philosophy. A proud Catholic, Altar Knight, and ex-seminarian. A doomscroller on X, a WWE fan, and I believe in living a good life and helping others. These values ground my work and give it purpose.",
  },
  {
    year: "2024",
    title: "Hackverse — The Agency",
    body: "Founded Hackverse Software Solutions. Delivering custom web/mobile apps, SaaS, automation bots, and Web3 DApps for global clients. Scalable backends with Python, Django, and FastAPI. Responsive frontends with React and Next.js. The philosophy in action: build to eliminate friction.",
  },
  {
    year: "2025+",
    title: "Stella AI — The Flagship",
    body: "Actively building Stella AI — The AI Learning Operating System — for launch and scale. Transforming lectures, PDFs, and knowledge sources into intelligent learning systems. Notes, flashcards, exams, summaries, knowledge graphs. The goal is simple: build software that solves real problems at scale.",
  },
];

const EXPERIENCE = [
  {
    role: "Founder & Software Engineer",
    org: "Hackverse Technologies",
    period: "2024–Present",
    location: "Remote, Enugu, Nigeria",
    desc: "Founded a software agency delivering custom web/mobile apps, SaaS, automation bots, and Web3 DApps for global clients. Scalable backends with Python, Django, and FastAPI. Responsive frontends with React, Tailwind CSS, and JavaScript.",
  },
  {
    role: "Python Developer & Data Analyst",
    org: "Caritas University",
    period: "2024–Present",
    location: "Enugu, Nigeria",
    desc: "Engineered full-stack Django web apps with MySQL and Tailwind CSS for academic and administrative use. Automated workflows, reducing errors by 30%, and developed an AI-powered chatbot prototype.",
  },
  {
    role: "Freelance Software Consultant",
    org: "Self-Employed",
    period: "Ongoing",
    location: "Remote",
    desc: "Built custom Python and MySQL tools for client workflow automation. Created a Telegram bot for crypto trading on Bybit (CCXT, Web3.py) and delivered data analysis solutions for small businesses.",
  },
  {
    role: "Peer Tutor",
    org: "Caritas University",
    period: "Ongoing",
    location: "Enugu, Nigeria",
    desc: "Mentored students in Python, MySQL, HTML, CSS, and graphic design, improving their project outcomes significantly.",
  },
];

const EDUCATION = [
  {
    degree: "BSc Computer Science (In Progress)",
    school: "Caritas University",
    location: "Enugu, Nigeria",
    period: "2022–2026",
    note: "Focusing on core concepts of software engineering, data structures, and AI. Serving as a Peer Tutor for foundational programming courses.",
  },
  {
    degree: "WASSCE & NECO",
    school: "Saint Augustine Seminary",
    location: "Ezzamgbo, Nigeria",
    period: "2022",
    note: "",
  },
  {
    degree: "Diploma in Latin",
    school: "Saint Augustine Seminary",
    location: "Ezzamgbo, Nigeria",
    period: "2021",
    note: "",
  },
];

const TECH_ROWS = [
  ["Python", "Django", "FastAPI", "React", "Next.js", "TypeScript", "Rust", "Solidity"],
  ["PostgreSQL", "MySQL", "Redis", "Celery", "Docker", "Git", "Supabase", "Firebase"],
  ["LangChain", "OpenAI API", "Web3.js", "Web3.py", "Tailwind CSS", "React Native", "Node.js", "Blockchain"],
  ["TanStack", "Chart.js", "Celery", "Nginx", "Linux", "Telegram Bot API", "CCXT", "REST API"],
];

// Gallery: frank1.png through frank20.png (user will populate /public/images/)
const GALLERY_IMAGES = Array.from({ length: 20 }, (_, i) => `/images/frank${i + 1}.png`);

export default function AboutClient() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            About Me
          </p>
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Frank Kelechi Oge
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            To some, code is just logic and syntax. To me, it is a universal solvent for human difficulty.
            I don't just write code — I bridge the gap between where a system is and where it needs to be.
          </p>
        </Reveal>
      </section>

      {/* Hero image + bio */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <div className="relative">
              <div
                className="w-full max-w-md aspect-[4/5] relative border"
                style={{ borderColor: "var(--border)" }}
              >
                <Image
                  src="/images/frank1.png"
                  alt="Frank Kelechi Oge"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-full max-w-md h-full border -z-10"
                style={{ borderColor: "var(--border-subtle)" }}
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>
                  Beyond the Syntax
                </p>
                <h2 className="font-mono text-2xl font-light mb-4" style={{ color: "var(--text-primary)" }}>
                  Software as a Solution
                </h2>
                <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    My journey into engineering didn't start in a classroom — it started in a moment of global
                    stillness in 2020. What began as a curiosity about game engines quickly evolved into a
                    deeper obsession: understanding how complex systems function, fail, and most importantly,
                    how they can be fixed.
                  </p>
                  <p>
                    I believe that every "bad word" in business — limitation, bottleneck, insecurity,
                    invisibility — is actually a technical challenge waiting for a robust solution. At
                    Hackverse Technologies, my philosophy is to never build for the sake of "cool stuff."
                    We build to eliminate friction.
                  </p>
                  <p>
                    Whether I am architecting a high-speed trading bot in Python, a secure decentralized
                    protocol in Rust, or an AI system that processes audio into knowledge, the goal is always
                    Scalability and Purpose.
                  </p>
                </div>
              </div>

              <div
                className="grid grid-cols-2 gap-px mt-2"
                style={{ backgroundColor: "var(--border-subtle)" }}
              >
                {[
                  { label: "Also known as", value: "hacker / virus" },
                  { label: "Based in", value: "Enugu, Nigeria" },
                  { label: "Company", value: "Hackverse" },
                  { label: "Flagship", value: "Stella AI" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-4"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                  >
                    <p className="font-mono text-xs mb-1" style={{ color: "var(--text-faint)" }}>
                      {label}
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--text-primary)" }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-2">
                <Link href="/builds" className="cta-btn text-xs">
                  View Builds <ArrowRight size={13} />
                </Link>
                <a
                  href="https://github.com/frankdotdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-ghost text-xs"
                >
                  GitHub <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey Timeline */}
      <section
        className="py-24 px-6 md:px-10 border-y"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>
              Journey
            </p>
            <h2 className="font-mono text-3xl md:text-4xl font-light mb-16" style={{ color: "var(--text-primary)" }}>
              From "What If" to "What's Next"
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[72px] top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: "var(--border-subtle)" }}
            />

            <div className="flex flex-col gap-12">
              {JOURNEY.map(({ year, title, body }, i) => (
                <Reveal key={year} delay={i * 60}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex items-start gap-4 md:gap-0 md:flex-col md:w-36 shrink-0">
                      <span
                        className="font-mono text-2xl font-light"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {year}
                      </span>
                      <div
                        className="hidden md:block w-3 h-3 rounded-full mt-1.5 relative z-10"
                        style={{
                          backgroundColor: "var(--bg-secondary)",
                          border: "2px solid var(--text-primary)",
                          marginLeft: "calc(72px - 6px)",
                        }}
                      />
                    </div>
                    <div
                      className="flex-1 p-6 border"
                      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
                    >
                      <h3 className="font-mono text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
                        {title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-b overflow-hidden" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>
              Tech Stack
            </p>
            <h2 className="font-mono text-3xl font-light" style={{ color: "var(--text-primary)" }}>
              My Toolkit
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col gap-3">
          <MarqueeRow items={TECH_ROWS[0]} direction="left" />
          <MarqueeRow items={TECH_ROWS[1]} direction="right" />
          <MarqueeRow items={TECH_ROWS[2]} direction="left" speed="slow" />
          <MarqueeRow items={TECH_ROWS[3]} direction="right" speed="slow" />
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>
            Work
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-light mb-12" style={{ color: "var(--text-primary)" }}>
            Professional Experience
          </h2>
        </Reveal>

        <div className="flex flex-col gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
          {EXPERIENCE.map(({ role, org, period, location, desc }, i) => (
            <Reveal key={role} delay={i * 60}>
              <div
                className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
                style={{ backgroundColor: "var(--bg)" }}
              >
                <div>
                  <p className="font-mono text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                    {role}
                  </p>
                  <p className="font-mono text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                    {org}
                  </p>
                  <p className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                    {period} · {location}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section
        className="py-24 px-6 md:px-10 border-t"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>
              Education
            </p>
            <h2 className="font-mono text-3xl md:text-4xl font-light mb-12" style={{ color: "var(--text-primary)" }}>
              Academic Background
            </h2>
          </Reveal>

          <div className="flex flex-col gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
            {EDUCATION.map(({ degree, school, location, period, note }, i) => (
              <Reveal key={degree} delay={i * 60}>
                <div
                  className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                >
                  <div>
                    <p className="font-mono text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                      {degree}
                    </p>
                    <p className="font-mono text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                      {school}
                    </p>
                    <p className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                      {period} · {location}
                    </p>
                  </div>
                  {note && (
                    <div className="md:col-span-2">
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {note}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite image gallery */}
      <section className="py-24 border-t overflow-hidden" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>
              Gallery
            </p>
            <h2 className="font-mono text-3xl font-light" style={{ color: "var(--text-primary)" }}>
              Behind the Keyboard
            </h2>
          </Reveal>
        </div>

        {/* Row 1 — scroll left */}
        <div className="marquee-container mb-4">
          <div className="marquee-inner left flex gap-4" style={{ animationDuration: "40s" }}>
            {[...GALLERY_IMAGES.slice(0, 10), ...GALLERY_IMAGES.slice(0, 10)].map((src, i) => (
              <div
                key={i}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border"
                style={{ borderColor: "var(--border)" }}
              >
                <img
                  src={src}
                  alt={`Frank ${i + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/frank1.png";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="marquee-container">
          <div className="marquee-inner right flex gap-4" style={{ animationDuration: "45s" }}>
            {[...GALLERY_IMAGES.slice(10), ...GALLERY_IMAGES.slice(10)].map((src, i) => (
              <div
                key={i}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border"
                style={{ borderColor: "var(--border)" }}
              >
                <img
                  src={src}
                  alt={`Frank ${i + 11}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/frank2.png";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
