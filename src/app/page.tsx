import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Frank Kelechi Oge — Software Developer & Founder",
  description:
    "Frank Kelechi Oge — Software Developer, AI integrator, Web3 enthusiast, and Founder of Hackverse Software Solutions. Building intelligent, scalable solutions.",
  alternates: { canonical: "https://frankoge.com" },
};

export default function HomePage() {
  return <HomeClient />;
}
