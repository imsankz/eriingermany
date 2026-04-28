import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, enquiry, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Eri in Germany";

  if (!apiKey || apiKey === "your-brevo-api-key-here" || !senderEmail) {
    console.error("Brevo: BREVO_API_KEY or BREVO_SENDER_EMAIL not set in .env.local");
    return NextResponse.json({ error: "Server misconfiguration — Brevo API key not configured" }, { status: 500 });
  }

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px;">
      <h2 style="color: #181415;">New contact from ${name}</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666; width: 140px;"><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;"><strong>Enquiry type</strong></td><td>${enquiry || "—"}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;"><strong>Subject</strong></td><td>${subject}</td></tr>
      </table>
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #f0e9e3;" />
      <p style="white-space: pre-wrap; color: #181415;">${message}</p>
    </div>
  `;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: senderEmail, name: senderName }],
      replyTo: { email, name },
      subject: `[Contact] ${subject}`,
      htmlContent,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Brevo send error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
