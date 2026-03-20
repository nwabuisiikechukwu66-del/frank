import type { Metadata } from "next";
import BuildsClient from "@/components/BuildsClient";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Projects and builds by Frank Kelechi Oge — Stella AI, Portal Web3, HackerAutoTradeBot, OMPH Church Website, and more.",
  alternates: { canonical: "https://frankoge.com/builds" },
};

export default function BuildsPage() {
  return <BuildsClient />;
}
