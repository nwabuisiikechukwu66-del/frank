import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Option A: Resend (recommended — install: npm install resend)
    // Uncomment and fill in your API key to activate.
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "contact@frankoge.com",
    //   to: "ogekcfrankie@gmail.com",
    //   subject: `[Portfolio] ${subject || "New message"} from ${name}`,
    //   html: `
    //     <p><strong>From:</strong> ${name} (${email})</p>
    //     <p><strong>Subject:</strong> ${subject || "N/A"}</p>
    //     <hr />
    //     <p>${message.replace(/\n/g, "<br />")}</p>
    //   `,
    // });
    // ─────────────────────────────────────────────────────────────────────────

    // Option B: Log to console (default — replace with Resend above for production)
    console.log("[Contact Form]", { name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
