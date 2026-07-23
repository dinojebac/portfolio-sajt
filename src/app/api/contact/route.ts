// Contact form endpoint — placeholder implementacija.
//
// TODO: povezati pravi email servis. Preporuka: Resend (https://resend.com)
//   1. npm install resend
//   2. dodati RESEND_API_KEY u .env.local
//   3. u POST handleru: await resend.emails.send({ from, to, subject, html })
// Do tada se upiti loguju na serverskoj konzoli i vraća se 200.

import { NextRequest } from "next/server";

type ContactPayload = {
  name?: string;
  contact?: string;
  business?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(request: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Honeypot popunjen → bot. Vraćamo 200 da ne uči.
  if (payload.website?.trim()) {
    return Response.json({ ok: true });
  }

  const { name, contact, message } = payload;
  if (!name?.trim() || !contact?.trim() || !message?.trim()) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("[contact] Novi upit:", {
    name: name.trim(),
    contact: contact.trim(),
    business: payload.business?.trim() || "—",
    budget: payload.budget || "—",
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  });

  return Response.json({ ok: true });
}
