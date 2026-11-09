import { NextRequest, NextResponse } from "next/server";

type Locale = "en" | "ru" | "uz";

// Keys are the service slugs the contact form sends (the expertise pages' slugs);
// tax, legal, finance, hr, funding and other are also what earlier versions of the form sent.
const serviceLabels: Record<Locale, Record<string, string>> = {
  en: {
    tax: "Tax consulting",
    legal: "Legal advisory",
    finance: "Accounting",
    hr: "Human resources",
    funding: "Funding and grants",
    "ma-advisory": "M&A advisory",
    "due-diligence": "Due diligence",
    "entity-management": "Entity management",
    corporate: "Corporate services",
    eor: "Employer of Record",
    payroll: "Payroll bureau",
    immigration: "Work permits and immigration",
    "virtual-office": "Virtual office",
    compliance: "Compliance monitoring",
    other: "Other",
  },
  ru: {
    tax: "Налоговый консалтинг",
    legal: "Юридический консалтинг",
    finance: "Бухгалтерия",
    hr: "HR-услуги",
    funding: "Финансирование и гранты",
    "ma-advisory": "M&A консалтинг",
    "due-diligence": "Due diligence",
    "entity-management": "Управление компанией",
    corporate: "Корпоративные услуги",
    eor: "Employer of Record",
    payroll: "Расчёт зарплаты",
    immigration: "Разрешения на работу",
    "virtual-office": "Виртуальный офис",
    compliance: "Комплаенс-мониторинг",
    other: "Другое",
  },
  uz: {
    tax: "Soliq konsaltingi",
    legal: "Yuridik konsalting",
    finance: "Buxgalteriya",
    hr: "HR xizmatlari",
    funding: "Moliyalashtirish va grantlar",
    "ma-advisory": "M&A konsaltingi",
    "due-diligence": "Due diligence",
    "entity-management": "Kompaniyani boshqarish",
    corporate: "Korporativ xizmatlar",
    eor: "Employer of Record",
    payroll: "Ish haqi hisob-kitobi",
    immigration: "Ishlash uchun ruxsatnomalar",
    "virtual-office": "Virtual ofis",
    compliance: "Komplayens monitoringi",
    other: "Boshqa",
  },
};

// No reply-time promises here: the site does not commit to response times.
const autoreply: Record<Locale, {
  subject: string; heading: string; body: string;
  summaryLabel: string; nameLabel: string; emailLabel: string; phoneLabel: string;
  companyLabel: string; serviceLabel: string; messageLabel: string;
  urgent: string; signature: string;
}> = {
  en: {
    subject: "Thank you for contacting Advizen",
    heading: "Thank you for reaching out",
    body: "We have received your message, and we will reply to this email address. Here is a copy of what you sent, for your records.",
    summaryLabel: "Your submission",
    nameLabel: "Name", emailLabel: "Email", phoneLabel: "Phone", companyLabel: "Company",
    serviceLabel: "Service", messageLabel: "Message",
    urgent: "You can also write to us on Telegram (@advizen) or WhatsApp. Our hours are Mon–Fri, 9:00–18:00 Tashkent time.",
    signature: "Advizen team",
  },
  ru: {
    subject: "Спасибо за обращение в Advizen",
    heading: "Спасибо за обращение",
    body: "Мы получили ваше сообщение и ответим на этот адрес эл. почты. Ниже — копия вашей заявки.",
    summaryLabel: "Ваша заявка",
    nameLabel: "Имя", emailLabel: "Email", phoneLabel: "Телефон", companyLabel: "Компания",
    serviceLabel: "Услуга", messageLabel: "Сообщение",
    urgent: "Также можно написать нам в Telegram (@advizen) или WhatsApp. Мы работаем Пн–Пт, 9:00–18:00 по ташкентскому времени.",
    signature: "Команда Advizen",
  },
  uz: {
    subject: "Advizen bilan bogʻlanganingiz uchun rahmat",
    heading: "Murojaatingiz uchun rahmat",
    body: "Xabaringizni qabul qildik va javobni shu elektron pochta manziliga yuboramiz. Quyida soʻrovingiz nusxasi.",
    summaryLabel: "Sizning soʻrovingiz",
    nameLabel: "Ism", emailLabel: "Email", phoneLabel: "Telefon", companyLabel: "Kompaniya",
    serviceLabel: "Xizmat", messageLabel: "Xabar",
    urgent: "Bizga Telegram (@advizen) yoki WhatsApp orqali ham yozishingiz mumkin. Ish vaqtimiz: Du–Ju, 9:00–18:00, Toshkent vaqti bilan.",
    signature: "Advizen jamoasi",
  },
};

type SummaryRow = { label: string; value: string };

type BrandedEmailParams = {
  preheader: string;
  heading: string;
  intro: string;
  summary: SummaryRow[];
  messageLabel?: string;
  messageText?: string;
  outro?: string;
  signature?: string;
  timestamp: string;
};

function brandedEmail(p: BrandedEmailParams): string {
  const FONT = "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif";
  const BG = "#0A0A0A";
  const SURFACE = "#0F0F0F";
  const SURFACE_INNER = "#141414";
  const BORDER = "#1F1F1F";
  const BORDER_SOFT = "#2A2A2A";
  const TEXT = "#D9D4CE";
  const MUTED = "#8A8680";
  const MUTED_DEEP = "#5A5752";
  const ACCENT = "#940e27";

  const summaryRows = p.summary
    .map(
      (row) => `
        <tr>
          <td style="padding:9px 0;font-size:12px;color:${MUTED_DEEP};width:96px;vertical-align:top;letter-spacing:0.04em;font-family:${FONT}">${escapeHtml(row.label)}</td>
          <td style="padding:9px 0;font-size:14px;color:${TEXT};vertical-align:top;font-weight:500;font-family:${FONT};line-height:1.5">${escapeHtml(row.value)}</td>
        </tr>`
    )
    .join("");

  const messageBlock =
    p.messageLabel && p.messageText
      ? `
        <tr>
          <td style="padding:0">
            <div style="margin-top:18px;padding-top:18px;border-top:1px solid ${BORDER_SOFT}">
              <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${MUTED_DEEP};font-weight:600;font-family:${FONT}">${escapeHtml(p.messageLabel)}</p>
              <p style="margin:0;font-size:14px;line-height:1.7;color:${TEXT};white-space:pre-wrap;font-family:${FONT}">${escapeHtml(p.messageText)}</p>
            </div>
          </td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>Advizen</title>
</head>
<body style="margin:0;padding:0;background:${BG};font-family:${FONT};color:${TEXT}">
<div style="display:none;font-size:1px;color:${BG};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">${escapeHtml(p.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG}">
  <tr>
    <td align="center" style="padding:56px 16px">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:${SURFACE};border:1px solid ${BORDER};border-radius:6px">
        <tr>
          <td align="center" style="padding:44px 32px 0">
            <div style="font-family:${FONT};font-size:16px;letter-spacing:0.48em;color:${TEXT};font-weight:600;padding-left:0.48em">ADVIZEN</div>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:18px 32px 0">
            <div style="width:28px;height:1px;background:${ACCENT};line-height:1px;font-size:0">&nbsp;</div>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px 0">
            <h1 style="margin:0 0 14px;font-family:${FONT};font-size:24px;font-weight:500;letter-spacing:-0.015em;color:${TEXT};line-height:1.35">${escapeHtml(p.heading)}</h1>
            <p style="margin:0;font-size:15px;line-height:1.7;color:${MUTED};font-family:${FONT}">${escapeHtml(p.intro)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 40px 0">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SURFACE_INNER};border:1px solid ${BORDER};border-radius:4px">
              <tr>
                <td style="padding:22px 24px">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${summaryRows}</table>
                  ${messageBlock}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        ${p.outro ? `
        <tr>
          <td style="padding:28px 40px 0">
            <p style="margin:0;font-size:13px;line-height:1.7;color:${MUTED};font-family:${FONT}">${escapeHtml(p.outro)}</p>
          </td>
        </tr>` : ""}
        ${p.signature ? `
        <tr>
          <td style="padding:24px 40px 0">
            <p style="margin:0;font-size:14px;color:${TEXT};font-family:${FONT};font-weight:500">— ${escapeHtml(p.signature)}</p>
          </td>
        </tr>` : ""}
        <tr>
          <td style="padding:40px 40px 36px">
            <div style="border-top:1px solid ${BORDER};padding-top:24px;text-align:center">
              <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:${MUTED_DEEP};font-family:${FONT};margin-bottom:8px;font-weight:600">advizenco.com</div>
              <div style="font-size:11px;color:${MUTED_DEEP};font-family:${FONT};letter-spacing:0.02em">${escapeHtml(p.timestamp)} · Tashkent</div>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

// Submissions faster than this after the form appeared are treated as automated.
const MIN_FILL_MS = 3000;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object") throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // The form sends a single `name`; earlier versions sent firstName and lastName.
  const firstNameField = str(body.firstName);
  const lastNameField = str(body.lastName);
  const name = str(body.name) || `${firstNameField} ${lastNameField}`.trim();
  const email = str(body.email);
  const company = str(body.company);
  const phone = str(body.phone);
  const service = str(body.service);
  const message = str(body.message);
  const locale = body.locale;

  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // ── Spam checks: answer as if sent, deliver nothing ───────────────
  // A hidden "website" field that people never see, so only bots fill it.
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }
  // startedAt and sentAt both come from the browser's clock, so clock skew
  // between browser and server does not matter; sentAt is optional.
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : null;
  if (startedAt !== null && startedAt > 0) {
    const sentAt = typeof body.sentAt === "number" ? body.sentAt : Date.now();
    if (sentAt - startedAt < MIN_FILL_MS) {
      return NextResponse.json({ ok: true });
    }
  }

  const firstName = firstNameField || name.split(/\s+/)[0];
  const lang: Locale = locale === "ru" || locale === "uz" ? locale : "en";
  const t = autoreply[lang];
  const timestamp = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Tashkent",
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  const errors: string[] = [];
  // True once the message has reached the team through at least one channel.
  let delivered = false;

  // ── Telegram ──────────────────────────────────────────────────────
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat  = process.env.TELEGRAM_CHAT_ID;

  if (tgToken && tgChat) {
    const lines = [
      `🔔 <b>New Contact Request</b>`,
      ``,
      `👤 <b>Name:</b> ${escapeHtml(name)}`,
      `📧 <b>Email:</b> ${escapeHtml(email)}`,
      phone ? `📞 <b>Phone:</b> ${escapeHtml(phone)}` : null,
      company ? `🏢 <b>Company:</b> ${escapeHtml(company)}` : null,
      service ? `📋 <b>Service:</b> ${escapeHtml(serviceLabels.en[service] ?? service)}` : null,
      message ? `\n💬 <b>Message:</b>\n${escapeHtml(message)}` : null,
      ``,
      `🕐 <i>${timestamp} (Tashkent)</i>`,
    ].filter(Boolean).join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChat, text: lines, parse_mode: "HTML" }),
      }
    ).catch(() => null);

    if (tgRes?.ok) delivered = true;
    else errors.push("telegram");
  }

  // ── Resend email ──────────────────────────────────────────────────
  const resendKey  = process.env.RESEND_API_KEY;
  const toEmail    = process.env.RESEND_TO_EMAIL    ?? "info@advizenco.com";
  const fromEmail  = process.env.RESEND_FROM_EMAIL  ?? "Advizen Contact <noreply@advizenco.com>";

  if (resendKey) {
    const serviceEn = service ? (serviceLabels.en[service] ?? service) : null;
    const serviceLoc = service ? (serviceLabels[lang][service] ?? service) : null;

    const adminSummary: SummaryRow[] = [
      { label: "Name", value: name },
      { label: "Email", value: email },
    ];
    if (phone) adminSummary.push({ label: "Phone", value: phone });
    if (company) adminSummary.push({ label: "Company", value: company });
    if (serviceEn) adminSummary.push({ label: "Service", value: serviceEn });

    const autoSummary: SummaryRow[] = [
      { label: t.nameLabel, value: name },
      { label: t.emailLabel, value: email },
    ];
    if (phone) autoSummary.push({ label: t.phoneLabel, value: phone });
    if (company) autoSummary.push({ label: t.companyLabel, value: company });
    if (serviceLoc) autoSummary.push({ label: t.serviceLabel, value: serviceLoc });

    const adminHtml = brandedEmail({
      preheader: `New contact request from ${name}${serviceEn ? ` — ${serviceEn}` : ""}`,
      heading: "New contact request",
      intro: `A new submission has come in from the website contact form.`,
      summary: adminSummary,
      messageLabel: "Message",
      messageText: message || undefined,
      timestamp,
    });

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Contact: ${name}${serviceEn ? ` — ${serviceEn}` : ""}`,
        html: adminHtml,
      }),
    }).catch(() => null);

    if (emailRes?.ok) delivered = true;
    else errors.push("email");

    // ── Autoreply to the submitter ────────────────────────────────
    // Only once the team has the message, so nobody is thanked for a
    // message that went nowhere.
    if (delivered) {
      const autoHtml = brandedEmail({
        preheader: t.body,
        heading: `${t.heading}, ${firstName}`,
        intro: t.body,
        summary: autoSummary,
        messageLabel: t.messageLabel,
        messageText: message || undefined,
        outro: t.urgent,
        signature: t.signature,
        timestamp,
      });

      const autoRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [email],
          reply_to: toEmail,
          subject: t.subject,
          html: autoHtml,
        }),
      }).catch(() => null);

      if (!autoRes?.ok) errors.push("autoreply");
    }
  }

  // Success means the team has the message (Telegram or the admin email).
  // A failed autoreply alone does not count as a failure. If nothing reached
  // the team — every channel failed, or none is configured — say so, so the
  // form can tell the person and keep their text.
  if (!delivered) {
    console.error("contact: delivery failed", errors.length ? errors : "no channel configured");
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, errors: errors.length ? errors : undefined });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
