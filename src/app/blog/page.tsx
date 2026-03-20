import type { Metadata } from "next";
import BlogClient from "@/components/BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Frank Kelechi Oge writes about software development, Web3, AI, and building solutions that matter.",
  alternates: { canonical: "https://frankoge.com/blog" },
};

export default function BlogPage() {
  return <BlogClient />;
}
