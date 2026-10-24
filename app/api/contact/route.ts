import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  needs?: string[];
  onErpnext?: string;
  timeline?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field — pretend success.
  if (body.website) return NextResponse.json({ ok: true });

  const name = body.name?.trim().slice(0, 140);
  const email = body.email?.trim().slice(0, 200);
  if (!name || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please add your name and a valid email." }, { status: 422 });
  }

  const summary = [
    body.needs?.length ? "Needs: " + body.needs.join(", ") : null,
    body.onErpnext ? "On ERPNext: " + body.onErpnext : null,
    body.timeline ? "Timeline: " + body.timeline : null,
    body.message ? "Message:\n" + body.message.slice(0, 5000) : null,
  ]
    .filter(Boolean)
    .join("\n");

  const { FRAPPE_URL, FRAPPE_API_KEY, FRAPPE_API_SECRET } = process.env;

  if (!FRAPPE_URL || !FRAPPE_API_KEY || !FRAPPE_API_SECRET) {
    console.info("[contact] FRAPPE_* env not set — enquiry logged only", { name, email, company: body.company, summary });
    return NextResponse.json({ ok: true });
  }

  const base = FRAPPE_URL.replace(/\/$/, "");
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "token " + FRAPPE_API_KEY + ":" + FRAPPE_API_SECRET,
  };

  try {
    // 1) Create the Lead
    const leadRes = await fetch(base + "/api/resource/Lead", {
      method: "POST",
      headers,
      body: JSON.stringify({
        first_name: name,
        email_id: email,
        company_name: body.company || undefined,
        mobile_no: body.phone || undefined,
      }),
    });
    if (!leadRes.ok) {
      console.error("[contact] Lead create failed", leadRes.status, await leadRes.text());
      return NextResponse.json({ ok: false, error: "We couldn’t send that just now. Please email us instead." }, { status: 502 });
    }
    const lead = (await leadRes.json()) as { data?: { name?: string } };

    // 2) Attach the enquiry details as a comment on the Lead
    if (lead.data?.name && summary) {
      await fetch(base + "/api/resource/Comment", {
        method: "POST",
        headers,
        body: JSON.stringify({
          comment_type: "Comment",
          reference_doctype: "Lead",
          reference_name: lead.data.name,
          content: summary.replace(/\n/g, "<br>"),
        }),
      }).catch((e) => console.error("[contact] Comment failed", e));
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] ERPNext unreachable", e);
    return NextResponse.json({ ok: false, error: "We couldn’t send that just now. Please email us instead." }, { status: 502 });
  }
}
