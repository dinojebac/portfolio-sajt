import { NextRequest } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  contact?: string;
  brandName?: string;
  city?: string;
  business?: string;
  service?: string;
  productCount?: string;
  instagram?: string;
  logoPhotos?: string;
  references?: string;
  siteStyle?: string;
  animations?: string;
  deadline?: string;
  message?: string;
  website?: string;
};

const serviceLabels: Record<string, string> = {
  vebsajt: "Vebsajt",
  prodavnica: "Online prodavnica",
  seo: "SEO optimizacija",
};

const logoPhotoLabels: Record<string, string> = {
  imam: "Imam, poslaću na Instagram odmah",
  instagram: "Na Instagramu imam sve što želim da ubacim u sajt",
};

const styleLabels: Record<string, string> = {
  dark: "Dark (tamna tema)",
  light: "Light (svetla tema)",
  minimal: "Minimal",
  bold: "Bold/upečatljivo",
};

const animationLabels: Record<string, string> = {
  dynamic: "Da, želim dinamičan sajt sa animacijama",
  simple: "Ne, želim jednostavan i brz sajt",
  advisor: "Nisam siguran, prepuštam tebi",
};

const deadlineLabels: Record<string, string> = {
  "two-days": "Želim sajt za 2 dana maks",
  "this-week": "Želim sajt ove nedelje",
  flexible: "Nije mi bitno kad ćeš završiti",
};

function clean(value?: string) {
  return value?.trim() || "—";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: "Podaci iz forme nisu ispravni. Osveži stranicu i pokušaj ponovo." },
      { status: 400 }
    );
  }

  if (payload.website?.trim()) {
    return Response.json({ ok: true });
  }

  if (
    !payload.name?.trim() ||
    !payload.contact?.trim() ||
    !payload.brandName?.trim() ||
    !payload.city?.trim() ||
    !payload.service?.trim() ||
    !payload.instagram?.trim() ||
    !payload.logoPhotos?.trim() ||
    !payload.siteStyle?.trim() ||
    !payload.animations?.trim() ||
    !payload.deadline?.trim() ||
    !payload.message?.trim()
  ) {
    return Response.json(
      { error: "Popuni sva obavezna polja i pokušaj ponovo." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY nije podešen.");
    return Response.json(
      { error: "Slanje trenutno nije podešeno. Pokušaj ponovo kasnije." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const service = serviceLabels[payload.service] || clean(payload.service);
  const logoPhotos = logoPhotoLabels[payload.logoPhotos || ""] || clean(payload.logoPhotos);
  const siteStyle = styleLabels[payload.siteStyle || ""] || clean(payload.siteStyle);
  const animations = animationLabels[payload.animations || ""] || clean(payload.animations);
  const deadline = deadlineLabels[payload.deadline || ""] || clean(payload.deadline);
  const rows = [
    ["Ime i prezime", clean(payload.name)],
    ["Kontakt", clean(payload.contact)],
    ["Naziv biznisa/brenda", clean(payload.brandName)],
    ["Grad/lokacija", clean(payload.city)],
    ["Delatnost", clean(payload.business)],
    ["Usluga", service],
    ["Broj proizvoda", clean(payload.productCount)],
    ["Instagram", clean(payload.instagram)],
    ["Logo i fotke", logoPhotos],
    ["Reference sajtovi", clean(payload.references)],
    ["Stil sajta", siteStyle],
    ["Animacije", animations],
    ["Kada treba sajt", deadline],
    ["Poruka", clean(payload.message)],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#171717;line-height:1.6">
      <h2>Novi upit sa BSB sajta</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding:10px;border-bottom:1px solid #ddd;font-weight:700;vertical-align:top">${escapeHtml(label)}</td>
                <td style="padding:10px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td>
              </tr>`
          )
          .join("")}
      </table>
    </div>`;

  try {
    const { error } = await resend.emails.send({
      from: "Kontakt forma <kontakt@bitsitebuilder.com>",
      to: ["deki152@proton.me"],
      subject: `Novi BSB upit — ${service}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend greška:", error);
      return Response.json(
        { error: "Upit nije poslat. Pokušaj ponovo ili nam piši na Instagramu." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[contact] Greška pri slanju:", error);
    return Response.json(
      { error: "Upit nije poslat. Proveri vezu i pokušaj ponovo." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
