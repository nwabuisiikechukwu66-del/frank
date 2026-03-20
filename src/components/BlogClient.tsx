"use client";
import Link from "next/link";
import { ArrowUpRight, RssSimple } from "@phosphor-icons/react";
import Reveal from "./Reveal";

// CMS_POSTS: Replace with your CMS integration.
// Each post object should have: slug, title, excerpt, date, category, readTime, external (bool), url
const CMS_POSTS: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  external?: boolean;
  url?: string;
}[] = [
  // Posts will populate here from your CMS.
  // Example structure (uncomment to test):
  // {
  //   slug: "building-stella-ai",
  //   title: "Building Stella AI: The AI Learning OS",
  //   excerpt: "How I'm architecting an AI system that transforms lectures into intelligent study materials.",
  //   date: "2025-12-01",
  //   category: "AI/ML",
  //   readTime: "6 min read",
  // },
];

const CATEGORIES = ["All", "AI/ML", "Web3", "Dev", "Philosophy", "Open Source"];

export default function BlogClient() {
  const hasPosts = CMS_POSTS.length > 0;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            Writing
          </p>
          <h1
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Blog
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Thoughts on software development, Web3, AI, and building solutions that matter. Insights
            from building Stella AI, Hackverse, and everything in between.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://medium.com/@frankdotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs flex items-center gap-2 hover-line"
              style={{ color: "var(--text-muted)" }}
            >
              Medium <ArrowUpRight size={12} />
            </a>
            <span style={{ color: "var(--border)" }}>|</span>
            <a
              href="/rss.xml"
              className="font-mono text-xs flex items-center gap-2 hover-line"
              style={{ color: "var(--text-muted)" }}
            >
              <RssSimple size={13} /> RSS
            </a>
          </div>
        </Reveal>
      </section>

      {hasPosts ? (
        <>
          {/* Filter */}
          <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className="font-mono text-xs px-4 py-2 border transition-all duration-200"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)", backgroundColor: "transparent" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Posts */}
          <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24">
            <div className="flex flex-col gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
              {CMS_POSTS.map((post, i) => (
                <Reveal key={post.slug} delay={i * 50}>
                  <Link
                    href={post.external ? (post.url || "#") : `/blog/${post.slug}`}
                    target={post.external ? "_blank" : undefined}
                    rel={post.external ? "noopener noreferrer" : undefined}
                    className="block p-6 md:p-8 group"
                    style={{ backgroundColor: "var(--bg)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)")
                    }
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="tag">{post.category}</span>
                          <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                            {post.readTime}
                          </span>
                        </div>
                        <h2
                          className="font-mono text-base font-medium mb-2 group-hover:opacity-70 transition-opacity"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {post.title}
                        </h2>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                          {post.date}
                        </span>
                        <ArrowUpRight
                          size={15}
                          style={{ color: "var(--text-faint)" }}
                          className="group-hover:text-primary transition-colors"
                        />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* Empty state — CMS not yet connected */
        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24">
          <Reveal>
            <div
              className="border p-12 md:p-20 text-center"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
            >
              <div
                className="font-mono text-5xl mb-6 font-light"
                style={{ color: "var(--border)" }}
              >
                /
              </div>
              <p className="font-mono text-sm mb-2" style={{ color: "var(--text-primary)" }}>
                Posts incoming.
              </p>
              <p className="text-sm mb-8 max-w-sm mx-auto" style={{ color: "var(--text-muted)" }}>
                The blog CMS is being set up. For now, catch my writing on Medium.
              </p>
              <a
                href="https://medium.com/@frankdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                Read on Medium <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          {/* Teaser topics */}
          <div className="mt-16">
            <Reveal>
              <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-faint)" }}>
                Topics I Write About
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
              {[
                {
                  title: "Building Stella AI",
                  desc: "Architecture decisions, lessons learned, and the journey of building an AI learning OS.",
                },
                {
                  title: "Web3 & Blockchain",
                  desc: "DApps, smart contracts, Rust, Solidity, and building for the decentralized web.",
                },
                {
                  title: "Software as a Solution",
                  desc: "Philosophy of software engineering, problem-solving frameworks, and building with purpose.",
                },
                {
                  title: "Python & FastAPI",
                  desc: "Backend architecture, async APIs, Celery queues, and production-grade Python code.",
                },
                {
                  title: "Automation & Bots",
                  desc: "Building trading bots, scraping agents, and autonomous systems that work while you sleep.",
                },
                {
                  title: "Dev in Nigeria",
                  desc: "Building software from Africa, navigating remote work, and contributing to a global dev community.",
                },
              ].map(({ title, desc }, i) => (
                <Reveal key={title} delay={i * 50}>
                  <div
                    className="p-6"
                    style={{ backgroundColor: "var(--bg)" }}
                  >
                    <h3 className="font-mono text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
