import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Frank Kelechi Oge — Software Developer, AI integrator, and Founder of Hackverse Software Solutions. My journey from game development in 2020 to building Stella AI.",
  alternates: { canonical: "https://frankoge.com/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
