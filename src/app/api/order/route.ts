import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/products";

type Locale = "en" | "ru" | "uz";

const LANGUAGE_PAIR_LABEL: Record<string, string> = {
  uz_en: "UZ ↔ EN",
  uz_ru: "UZ ↔ RU",
  en_ru: "EN ↔ RU",
};

const autoreply: Record<Locale, {
  subject: string; heading: string; body: string;
  orderLabel: string; typeLabel: string; nameLabel: string;
  companyLabel: string; emailLabel: string; phoneLabel: string;
  languageLabel: string; documentsLabel: string; totalLabel: string;
  typeIndividual: string; typeLegal: string;
  outro: string; signature: string;
}> = {
  en: {
    subject: "Your Advizen order has been received",
    heading: "Order received",
    body: "Thank you for your order. We've received your request and will contact you within one business day with payment details and next steps.",
    orderLabel: "Order summary",
    typeLabel: "Order type", nameLabel: "Name", companyLabel: "Company",
    emailLabel: "Email", phoneLabel: "Phone", languageLabel: "Document language",
    documentsLabel: "Documents", totalLabel: "Total",
    typeIndividual: "Individual", typeLegal: "Legal entity",
    outro: "If your matter is urgent, reach us on Telegram or WhatsApp — average response under 30 minutes during business hours.",
    signature: "Advizen Team",
  },
  ru: {
    subject: "Ваш заказ в Advizen получен",
    heading: "Заказ получен",
    body: "Спасибо за ваш заказ. Мы получили вашу заявку и свяжемся с вами в течение одного рабочего дня с деталями оплаты и следующими шагами.",
    orderLabel: "Детали заказа",
    typeLabel: "Тип заказа", nameLabel: "Имя", companyLabel: "Компания",
    emailLabel: "Email", phoneLabel: "Телефон", languageLabel: "Язык документов",
    documentsLabel: "Документы", totalLabel: "Итого",
    typeIndividual: "Физическое лицо", typeLegal: "Юридическое лицо",
    outro: "Если вопрос срочный — напишите нам в Telegram или WhatsApp. Среднее время ответа — менее 30 минут в рабочие часы.",
    signature: "Команда Advizen",
  },
  uz: {
    subject: "Advizen buyurtmangiz qabul qilindi",
    heading: "Buyurtma qabul qilindi",
    body: "Buyurtmangiz uchun rahmat. So'rovingizni qabul qildik va bir ish kuni ichida to'lov tafsilotlari va keyingi qadamlar bilan siz bilan bog'lanamiz.",
    orderLabel: "Buyurtma tafsilotlari",
    typeLabel: "Buyurtma turi", nameLabel: "Ism", companyLabel: "Kompaniya",
    emailLabel: "Email", phoneLabel: "Telefon", languageLabel: "Hujjat tili",
    documentsLabel: "Hujjatlar", totalLabel: "Jami",
    typeIndividual: "Jismoniy shaxs", typeLegal: "Yuridik shaxs",
    outro: "Agar masala shoshilinch bo'lsa — bizga Telegram yoki WhatsApp orqali yozing. Ish vaqtida o'rtacha javob vaqti 30 daqiqadan kam.",
    signature: "Advizen jamoasi",
  },
};

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

type SummaryRow = { label: string; value: string };

function brandedEmail(params: {
  preheader: string; heading: string; intro: string;
  rows: SummaryRow[]; docRows?: { name: string; price: number }[];
  totalPrice?: number; totalLabel?: string;
  outro?: string; signature?: string; timestamp: string;
}): string {
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

  const infoRows = params.rows
    .map(r => `
      <tr>
        <td style="padding:9px 0;font-size:12px;color:${MUTED_DEEP};width:110px;vertical-align:top;letter-spacing:0.04em;font-family:${FONT}">${escapeHtml(r.label)}</td>
        <td style="padding:9px 0;font-size:14px;color:${TEXT};vertical-align:top;font-weight:500;font-family:${FONT};line-height:1.5">${escapeHtml(r.value)}</td>
      </tr>`)
    .join("");

  const docBlock = params.docRows?.length
    ? `<tr><td style="padding:0"><div style="margin-top:18px;padding-top:18px;border-top:1px solid ${BORDER_SOFT}">
        ${params.docRows.map(d => `
          <div style="display:flex;justify-content:space-between;padding:6px 0;font-family:${FONT}">
            <span style="font-size:13px;color:${TEXT};line-height:1.5">${escapeHtml(d.name)}</span>
            <span style="font-size:13px;color:${MUTED};font-weight:500;white-space:nowrap;padding-left:16px">$${d.price}</span>
          </div>`).join("")}
        ${params.totalPrice != null ? `
        <div style="margin-top:10px;padding-top:10px;border-top:1px solid ${BORDER_SOFT};display:flex;justify-content:space-between;font-family:${FONT}">
          <span style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:${MUTED_DEEP};font-weight:600">${escapeHtml(params.totalLabel ?? "Total")}</span>
          <span style="font-size:16px;font-weight:600;color:${TEXT}">$${params.totalPrice}</span>
        </div>` : ""}
      </div></td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<title>Advizen</title>
</head>
<body style="margin:0;padding:0;background:${BG};font-family:${FONT};color:${TEXT}">
<div style="display:none;font-size:1px;color:${BG};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">${escapeHtml(params.preheader)}</div>
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
            <h1 style="margin:0 0 14px;font-family:${FONT};font-size:24px;font-weight:500;letter-spacing:-0.015em;color:${TEXT};line-height:1.35">${escapeHtml(params.heading)}</h1>
            <p style="margin:0;font-size:15px;line-height:1.7;color:${MUTED};font-family:${FONT}">${escapeHtml(params.intro)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 40px 0">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SURFACE_INNER};border:1px solid ${BORDER};border-radius:4px">
              <tr>
                <td style="padding:22px 24px">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${infoRows}</table>
                  ${docBlock}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        ${params.outro ? `
        <tr>
          <td style="padding:28px 40px 0">
            <p style="margin:0;font-size:13px;line-height:1.7;color:${MUTED};font-family:${FONT}">${escapeHtml(params.outro)}</p>
          </td>
        </tr>` : ""}
        ${params.signature ? `
        <tr>
          <td style="padding:24px 40px 0">
            <p style="margin:0;font-size:14px;color:${TEXT};font-family:${FONT};font-weight:500">— ${escapeHtml(params.signature)}</p>
          </td>
        </tr>` : ""}
        <tr>
          <td style="padding:40px 40px 36px">
            <div style="border-top:1px solid ${BORDER};padding-top:24px;text-align:center">
              <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:${MUTED_DEEP};font-family:${FONT};margin-bottom:8px;font-weight:600">advizenco.com</div>
              <div style="font-size:11px;color:${MUTED_DEEP};font-family:${FONT};letter-spacing:0.02em">${escapeHtml(params.timestamp)} · Tashkent</div>
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

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    orderType,
    firstName, lastName, email, phone, pinfl,
    companyName, inn, legalEmail, legalPhone,
    selectedDocs,
    totalPrice,
    language,
    locale,
    source, currency, totalUzs, country, contactPerson, kits, discountUsd,
  } = body;

  if (!Array.isArray(selectedDocs) || selectedDocs.length === 0) {
    return NextResponse.json({ ok: false, error: "No documents in the order" }, { status: 400 });
  }
  const isStore = source === "store";
  const totalLabel = currency === "UZS" && typeof totalUzs === "number"
    ? `${totalUzs.toLocaleString("en-US")} UZS ($${totalPrice})`
    : `$${totalPrice}`;

  const lang: Locale = locale === "ru" || locale === "uz" ? locale : "en";
  const t = autoreply[lang];

  const contactEmail: string = orderType === "individual" ? email : legalEmail;
  const contactPhone: string = orderType === "individual" ? phone : legalPhone;
  const displayName: string = orderType === "individual"
    ? `${firstName} ${lastName}`.trim()
    : companyName;

  const docItems = (selectedDocs as string[]).map(id => {
    const p = PRODUCTS.find(p => p.id === id);
    return { name: p?.nameEn ?? id, price: p?.price ?? 0 };
  });

  const langLabel = LANGUAGE_PAIR_LABEL[language] ?? language;

  const timestamp = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Tashkent",
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  const errors: string[] = [];

  // ── Telegram ──────────────────────────────────────────────────────────────
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat  = process.env.TELEGRAM_CHAT_ID;

  if (tgToken && tgChat) {
    const docLines = docItems
      .map(d => `  • ${escapeHtml(d.name)} — $${d.price}`)
      .join("\n");

    const lines = [
      `🛒 <b>New Store Order</b>`,
      ``,
      `👤 <b>${orderType === "individual" ? "Name" : "Company"}:</b> ${escapeHtml(displayName)}`,
      `📧 <b>Email:</b> ${escapeHtml(contactEmail)}`,
      `📱 <b>Phone:</b> ${escapeHtml(contactPhone)}`,
      orderType === "individual" && pinfl ? `🪪 <b>PINFL:</b> ${escapeHtml(pinfl)}` : null,
      orderType === "legal" && inn ? `🏢 <b>INN:</b> ${escapeHtml(inn)}` : null,
      isStore && orderType === "legal" && contactPerson ? `🙋 <b>Contact:</b> ${escapeHtml(String(contactPerson))}` : null,
      isStore && orderType === "individual" && companyName ? `🏢 <b>Company:</b> ${escapeHtml(String(companyName))}` : null,
      isStore && country ? `🌍 <b>Country:</b> ${escapeHtml(String(country))}` : null,
      isStore ? `💱 <b>Pays in:</b> ${currency === "UZS" ? "UZS (bank transfer)" : "USD"}` : null,
      Array.isArray(kits) && kits.length ? `🧰 <b>Kits:</b> ${escapeHtml(kits.join(", "))}` : null,
      langLabel ? `🌐 <b>Language:</b> ${escapeHtml(langLabel)}` : null,
      ``,
      `📄 <b>Documents:</b>\n${docLines}`,
      ``,
      typeof discountUsd === "number" && discountUsd > 0 ? `🏷 <b>Discount:</b> −$${discountUsd}` : null,
      `💰 <b>Total: ${escapeHtml(totalLabel)}</b>`,
      ``,
      `🕐 <i>${timestamp} (Tashkent)</i>`,
      ``,
      `<code>━━━━━━━━━━━━━━━━━━━━━━━━━━━━</code>`,
    ].filter(Boolean).join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChat, text: lines, parse_mode: "HTML" }),
      }
    ).catch(() => null);

    if (!tgRes?.ok) errors.push("telegram");
  }

  // ── Resend auto-reply to customer ─────────────────────────────────────────
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Advizen <noreply@advizenco.com>";
  const toAdminEmail = process.env.RESEND_TO_EMAIL ?? "info@advizenco.com";

  if (resendKey) {
    const infoRows: SummaryRow[] = [
      { label: t.typeLabel, value: orderType === "individual" ? t.typeIndividual : t.typeLegal },
    ];
    if (orderType === "individual") {
      infoRows.push({ label: t.nameLabel, value: displayName });
    } else {
      infoRows.push({ label: t.companyLabel, value: displayName });
    }
    infoRows.push(
      { label: t.emailLabel, value: contactEmail },
      { label: t.phoneLabel, value: contactPhone },
      { label: t.languageLabel, value: langLabel },
    );

    const autoHtml = brandedEmail({
      preheader: t.body,
      heading: t.heading,
      intro: t.body,
      rows: infoRows,
      docRows: docItems,
      totalPrice,
      totalLabel: t.totalLabel,
      outro: t.outro,
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
        to: [contactEmail],
        bcc: [toAdminEmail],
        reply_to: toAdminEmail,
        subject: t.subject,
        html: autoHtml,
      }),
    }).catch(() => null);

    if (!autoRes?.ok) errors.push("autoreply");
  }

  // The order counts as received only if the team got it: by Telegram, or as the copy of the email.
  const telegramOk = Boolean(tgToken && tgChat) && !errors.includes("telegram");
  const emailOk = Boolean(resendKey) && !errors.includes("autoreply");
  if (!telegramOk && !emailOk) {
    return NextResponse.json({ ok: false, errors }, { status: 502 });
  }

  return NextResponse.json({ ok: true, errors: errors.length ? errors : undefined });
}
