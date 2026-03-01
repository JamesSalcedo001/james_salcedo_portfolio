import { NextResponse } from "next/server";
import { Resend } from "resend";
const RATE = {
    windowMs: 60_000,
    max: 5,
}

const ipHits = new Map();


export async function POST(req) {
    try {
        const { name, message, email, website } = await req.json();

        if ((website ?? "").trim().length > 0) {
            return NextResponse.json({ ok: true }, { status: 200 });
        }

        const cleanName = (name ?? "").trim();
        const cleanMessage = (message ?? "").trim();
        const cleanEmail = (email ?? "").trim();

        const errors = {};
        if (!cleanName) errors.name = "Name is required";
        if (!cleanMessage) errors.message = "Message is required";
        if (cleanMessage.length > 2000) errors.message = "Message is too long.";
        if (!cleanEmail) errors.email = "Email is required";
        if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
            errors.email = "Please enter a valid email";
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json({ ok: false, errors }, { status: 400 });
        }

        const apiKey = process.env.RESEND_API_KEY;
        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.CONTACT_FROM_EMAIL;

        if (!apiKey || !to || !from) {
            return NextResponse.json(
                { ok: false, error: "Server email config missing" },
                { status: 500 }
            );
        }


        const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";

        const now = Date.now();
        const record = ipHits.get(ip);

        if (!record || now > record.resetAt) {
            ipHits.set(ip, { count: 1, resetAt: now + RATE.windowMs });
        } else {
            record.count += 1;
            if (record.count > RATE.max) {
                return NextResponse.json(
                    { ok: false, error: "Too many messages. Please try again in a minute." },
                    { status: 429 }
                )
            }
        }

        const resend = new Resend(apiKey);

        const subject = `Portfolio Contact: ${cleanName}`;
        const text =
            `Name: ${cleanName}\n` +
            `Email: ${cleanEmail}\n` +
            `Message: ${cleanMessage}`;

        const html = `
  <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5">
    <h2>New Portfolio Message</h2>
    <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space: pre-wrap; background:#f6f6f6; padding:12px; border-radius:8px;">${escapeHtml(cleanMessage)}</pre>
  </div>
`;


        const result = await resend.emails.send({
            from,
            to,
            subject,
            text,
            html,
            replyTo: cleanEmail,
        });

        return NextResponse.json({ ok: true, id: result.data?.id ?? null }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { ok: false, error: "Server error sending email" },
            { status: 500 }
        );
    }
}


function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}