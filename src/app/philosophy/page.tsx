import type { Metadata } from "next";
import PhilosophyClient from "@/components/PhilosophyClient";

export const metadata: Metadata = {
  title: "Philosophy — Software as a Solution",
  description:
    "Frank Kelechi Oge's philosophy: Software as a Solution. Software is not just code — it's the universal tool for solving human problems.",
  alternates: { canonical: "https://frankoge.com/philosophy" },
};

export default function PhilosophyPage() {
  return <PhilosophyClient />;
}
