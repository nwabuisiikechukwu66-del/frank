"use client";
import Link from "next/link";
import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
  TiktokLogo,
  InstagramLogo,
  WhatsappLogo,
  MediumLogo,
  FacebookLogo,
  Envelope,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

const SOCIAL_LINKS = [
  { href: "https://github.com/frankdotdev", icon: GithubLogo, label: "GitHub" },
  { href: "https://linkedin.com/in/frank-kelechi-oge", icon: LinkedinLogo, label: "LinkedIn" },
  { href: "https://x.com/frankdotdev", icon: XLogo, label: "X (Twitter)" },
  { href: "https://instagram.com/frankdotdev", icon: InstagramLogo, label: "Instagram" },
  { href: "https://tiktok.com/@frankdotdev_", icon: TiktokLogo, label: "TikTok" },
  { href: "https://medium.com/@frankdotdev", icon: MediumLogo, label: "Medium" },
  { href: "https://facebook.com/frankdotdev", icon: FacebookLogo, label: "Facebook" },
  { href: "mailto:ogekcfrankie@gmail.com", icon: Envelope, label: "Email" },
  {
    href: "https://wa.me/2348059474901?text=Hello%20Frank,%20I%20found%20you%20through%20your%20portfolio%20website.%20I%27d%20like%20to%20discuss%20a%20potential%20project.",
    icon: WhatsappLogo,
    label: "WhatsApp",
  },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/builds", label: "Builds" },
  { href: "/blog", label: "Blog" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-32"
      style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand col */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-mono text-sm font-medium tracking-wider block mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              frank<span style={{ color: "var(--text-muted)" }}>.dev</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Software as a Solution. Building intelligent,
              <br />scalable systems across Web2, Web3, and AI.
            </p>
            <p className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
              Hackverse Software Solutions
            </p>
          </div>

          {/* Nav col */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: "var(--text-faint)" }}>
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm hover-line inline-block w-fit transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect col */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: "var(--text-faint)" }}>
              Connect
            </p>
            <div className="grid grid-cols-3 gap-3">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 border transition-all duration-200"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-muted)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--text-primary)";
                    (e.currentTarget as HTMLElement).style.color = "var(--bg)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <Icon size={16} weight="light" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="mailto:ogekcfrankie@gmail.com"
                className="font-mono text-xs flex items-center gap-2 hover-line w-fit"
                style={{ color: "var(--text-muted)" }}
              >
                ogekcfrankie@gmail.com
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
            © {new Date().getFullYear()} Frank Kelechi Oge. All rights reserved.
          </p>
          <p className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
            frankoge.com — Software as a Solution
          </p>
        </div>
      </div>
    </footer>
  );
}
