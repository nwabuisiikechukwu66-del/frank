import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import JsonLd from "@/components/JsonLd";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frankoge.com"),
  title: {
    default: "Frank Kelechi Oge — Software Developer & Founder",
    template: "%s | Frank Kelechi Oge",
  },
  description:
    "Frank Kelechi Oge is a Software Developer, AI integrator, and Founder of Hackverse Software Solutions. Building intelligent, scalable solutions across Web2, Web3, and AI.",
  keywords: [
    "Frank Oge",
    "Frank Kelechi Oge",
    "frankdotdev",
    "hacker virus",
    "Hackverse Software Solutions",
    "Hackverse Technologies",
    "Software Developer Nigeria",
    "Full Stack Developer",
    "AI Developer",
    "Web3 Developer",
    "Stella AI",
    "Python Developer",
    "React Developer",
    "NextJS Developer",
    "FastAPI",
    "Django Developer",
    "Blockchain Developer",
    "Rust Solidity",
    "Automation Developer",
    "Caritas University",
    "Enugu Nigeria Developer",
    "frankoge.com",
  ],
  authors: [{ name: "Frank Kelechi Oge", url: "https://frankoge.com" }],
  creator: "Frank Kelechi Oge",
  publisher: "Frank Kelechi Oge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frankoge.com",
    siteName: "Frank Kelechi Oge",
    title: "Frank Kelechi Oge — Software Developer & Founder",
    description:
      "Software Developer, AI integrator, and Founder of Hackverse Software Solutions. Building intelligent, scalable solutions across Web2, Web3, and AI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frank Kelechi Oge — frankdotdev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Kelechi Oge — Software Developer & Founder",
    description:
      "Software Developer, AI integrator, and Founder of Hackverse Software Solutions.",
    creator: "@frankdotdev",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://frankoge.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts now self-hosted */}

        <JsonLd />
      </head>
      <body className={`${jetbrains.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <div className="noise" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatbotWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
