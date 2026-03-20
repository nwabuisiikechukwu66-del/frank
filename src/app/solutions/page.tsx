import type { Metadata } from "next";
import SolutionsClient from "@/components/SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Comprehensive software solutions by Frank Kelechi Oge — Web Development, AI Systems, Web3 & Blockchain, Automation, Mobile Apps, and more.",
  alternates: { canonical: "https://frankoge.com/solutions" },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
