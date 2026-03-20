"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import Reveal from "./Reveal";

const TENETS = [
  {
    num: "01",
    title: "Build to Eliminate Friction",
    body: "Every 'bad word' in business — limitation, bottleneck, insecurity, invisibility — is a technical challenge waiting for a robust solution. We never build for the sake of 'cool stuff.' We build to eliminate friction.",
  },
  {
    num: "02",
    title: "Software is a Universal Solvent",
    body: "Code is not just logic and syntax. It is the universal solvent for human difficulty. Every problem domain — healthcare, education, finance, logistics — has at its core a technical challenge that software can solve.",
  },
  {
    num: "03",
    title: "Scalability and Purpose Above All",
    body: "Whether architecting a trading bot in Python, a decentralized protocol in Rust, or an AI system that processes audio into knowledge — the goal is always the same: Scalability and Purpose. Beautiful code that doesn't scale is just art.",
  },
  {
    num: "04",
    title: "Intelligence is the Next Layer",
    body: "Web2 gave us the connected world. Web3 gave us the trustless world. AI is giving us the intelligent world. Every system I build considers how intelligence — adaptive, contextual, purposeful — can be layered into it.",
  },
  {
    num: "05",
    title: "Bridge the Gap, Don't Just Code",
    body: "I don't just write code; I bridge the gap between where a system is and where it needs to be. Understanding the problem deeply — its human, operational, and technical dimensions — is what separates engineering from typing.",
  },
  {
    num: "06",
    title: "Values Ground the Work",
    body: "Technology is a craft, not an identity. Philosophy, psychology, faith, and human connection give the work meaning. Software built without purpose becomes noise. I build with intention, grounded in principles that outlast any tech stack.",
  },
];

export default function PhilosophyClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            The Core Belief
          </p>
          <h1
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Software as a
            <br />
            Solution
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            A philosophy I am introducing, investing in, and applying through Hackverse Software Solutions.
            It is not a tagline. It is the operating principle behind every decision I make as an engineer.
          </p>
        </Reveal>
      </section>

      {/* Large quote */}
      <section
        className="py-20 px-6 md:px-10 border-y"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div
              className="font-mono text-sm mb-6"
              style={{ color: "var(--text-faint)" }}
            >
              — Frank Kelechi Oge, Founder, Hackverse Software Solutions
            </div>
            <blockquote
              className="font-mono text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              "Software is the most powerful tool ever created for human leverage. I don't just write code;
              I bridge the gap between where a system is and where it needs to be."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Photo + origin story */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div
              className="relative w-full max-w-md aspect-square border"
              style={{ borderColor: "var(--border)" }}
            >
              <Image
                src="/images/frank2.png"
                alt="Frank Kelechi Oge"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
                Where it Began
              </p>
              <h2 className="font-mono text-2xl font-light mb-6" style={{ color: "var(--text-primary)" }}>
                My Mission
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                <p>
                  My journey into engineering didn't start in a classroom; it started in a moment of global
                  stillness in 2020. What began as a curiosity about game engines quickly evolved into a deeper
                  obsession: understanding how complex systems function, fail, and most importantly, how they
                  can be fixed.
                </p>
                <p>
                  I believe that every "bad word" in business — limitation, bottleneck, insecurity,
                  invisibility — is actually a technical challenge waiting for a robust solution. At Hackverse
                  Technologies, my philosophy is to never build for the sake of "cool stuff." We build to
                  eliminate friction.
                </p>
                <p>
                  Whether I am architecting a high-speed trading bot in Python, a secure decentralized protocol
                  in Rust, or an AI system that processes audio into knowledge, the goal is always Scalability
                  and Purpose. Software is the most powerful tool ever created for human leverage.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {["Full Stack Development", "Web3 & Blockchain", "AI & Automation", "Custom Software"].map(
                  (skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Six Tenets */}
      <section
        className="py-24 px-6 md:px-10 border-t"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>
              The Principles
            </p>
            <h2 className="font-mono text-3xl md:text-4xl font-light mb-16" style={{ color: "var(--text-primary)" }}>
              Six Tenets of the Philosophy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
            {TENETS.map(({ num, title, body }, i) => (
              <Reveal key={num} delay={i * 60}>
                <div
                  className="p-8"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                >
                  <div
                    className="font-mono text-4xl font-light mb-4"
                    style={{ color: "var(--border)" }}
                  >
                    {num}
                  </div>
                  <h3 className="font-mono text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hackverse context */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <div
            className="p-8 md:p-12 border"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
              In Practice
            </p>
            <h2 className="font-mono text-2xl font-light mb-6" style={{ color: "var(--text-primary)" }}>
              Hackverse Software Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  As the lead at Hackverse Software Solutions, I bring this same "solution-first" mindset to
                  every client project — ensuring that what we build is not just functional, but transformative.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  We fuse AI, Blockchain, and Software Engineering to eliminate limitations. The agency is the
                  philosophy made commercial — a vehicle for turning problems into software that actually works
                  at scale.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {["Web Apps", "Web3 & DApps", "Automation Systems", "Mobile Apps", "AI Integration", "Technical Consulting"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "var(--text-muted)" }}
                      />
                      <span className="font-mono text-sm" style={{ color: "var(--text-secondary)" }}>
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 md:px-10 border-t text-center"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
      >
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            Aligned?
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-light mb-6" style={{ color: "var(--text-primary)" }}>
            Let's build something real.
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            If you believe software can solve the problem you're facing, reach out. Let's talk about the gap
            between where your system is and where it needs to be.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="cta-btn">
              Link Up <ArrowRight size={14} />
            </Link>
            <Link href="/builds" className="cta-btn-ghost">
              See What I've Built
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
