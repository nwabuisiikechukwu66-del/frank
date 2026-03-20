import { NextRequest, NextResponse } from "next/server";

const FRANK_CONTEXT = `You are Frank Kelechi Oge's AI assistant on his personal portfolio website frankoge.com.

About Frank:
- Full name: Frank Kelechi Oge, also known as "frankdotdev", "hacker virus", or just "hacker"
- Software Developer, AI integrator, Web3 enthusiast, Founder of Hackverse Software Solutions
- Started programming in 2020 during lockdown, began with game development (Unity, Godot, GameGuru)
- Self-taught, studied at Caritas University, Enugu, Nigeria (BSc Computer Science, 2022-2026)
- Philosophy: "Software as a Solution" — software is not just code, it's the universal tool for solving problems
- Ex-seminarian, proud Catholic, Altar Knight, WWE fan, interested in psychology, history, philosophy

Skills: Python, JavaScript/TypeScript, Rust, Solidity, Django, FastAPI, React, Next.js, Tailwind CSS, PostgreSQL, MySQL, Redis, Celery, Docker, Web3.js, Web3.py, LangChain, OpenAI API, React Native

Flagship Product: Stella AI (stellaai.pro) — The AI Learning Operating System. Transforms lectures, PDFs, and knowledge sources into intelligent learning systems (notes, flashcards, exams, summaries, knowledge graphs).

Other notable builds: Portal Web3 Game Site, HackerAutoTradeBot (crypto trading), Vybe Whale Alert Bot, OMPH Catholic Church Website, Caritas Catholic Church Website, Signet (signet.xyz), ZK Compression Cost Visualizer, Zugis Cake Ordering Website, game prediction bot, token launch scanner bot, whale wallet tracker, audiobook for girlfriend.

Contact: ogekcfrankie@gmail.com | GitHub: github.com/frankdotdev | X: @frankdotdev | WhatsApp: +2348059474901

Respond in a friendly, intelligent, slightly witty tone that reflects Frank's personality. Keep responses concise (2-4 sentences). Never make up facts about Frank. If asked about something you don't know, admit it and suggest they contact Frank directly.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "No message" }, { status: 400 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: FRANK_CONTEXT,
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    const reply =
      data?.content?.[0]?.text ||
      "I'm having trouble responding right now. Please reach out to Frank directly at ogekcfrankie@gmail.com.";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: "Something went wrong. Please contact Frank directly." },
      { status: 500 }
    );
  }
}
