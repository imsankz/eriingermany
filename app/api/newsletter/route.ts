import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || apiKey === "your-brevo-api-key-here" || !listId || listId === "your-list-id-here") {
    console.error("Brevo: BREVO_API_KEY or BREVO_LIST_ID not set in .env.local");
    return NextResponse.json({ error: "Server misconfiguration — Brevo not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      attributes: name ? { FIRSTNAME: name.split(" ")[0], LASTNAME: name.split(" ").slice(1).join(" ") } : {},
      listIds: [parseInt(listId, 10)],
      updateEnabled: true,
    }),
  });

  // 204 = already exists but updated (updateEnabled), 201 = created — both are success
  if (!res.ok && res.status !== 204) {
    const err = await res.text();
    console.error("Brevo subscribe error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
