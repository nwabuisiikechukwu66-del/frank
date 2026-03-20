"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, List, X } from "@phosphor-icons/react";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/builds", label: "Builds" },
  { href: "/blog", label: "Blog" },
  { href: "/philosophy", label: "Philosophy" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          backgroundColor: scrolled ? "var(--bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-wider hover-line"
            style={{ color: "var(--text-primary)" }}
          >
            frank<span style={{ color: "var(--text-muted)" }}>.dev</span>
            <span
              className="inline-block w-2 h-4 ml-0.5 align-middle"
              style={{
                backgroundColor: "var(--text-primary)",
                animation: "cursorBlink 1s step-end infinite",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-xs tracking-widest uppercase transition-colors duration-200 hover-line"
                style={{
                  color: pathname === href ? "var(--text-primary)" : "var(--text-muted)",
                  fontWeight: pathname === href ? "500" : "400",
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} weight="light" /> : <Moon size={18} weight="light" />}
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex cta-btn text-xs tracking-widest"
            >
              Link Up
            </Link>
            {/* Mobile menu btn */}
            <button
              className="md:hidden p-2"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          backgroundColor: "var(--bg)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-2xl tracking-widest uppercase"
              style={{ color: pathname === href ? "var(--text-primary)" : "var(--text-muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="cta-btn mt-4" onClick={() => setMenuOpen(false)}>
            Link Up
          </Link>
        </div>
      </div>
    </>
  );
}
