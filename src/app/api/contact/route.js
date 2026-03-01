import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
    try {
        const { name, message } = await req.json();

        const cleanName = (name ?? "").trim();
        const cleanMessage = (message ?? "").trim();

        const errors = {};
        if (!cleanName) errors.name = "Name is required";
        if (!cleanMessage) errors.message = "Message is required";
        if (cleanMessage.length > 2000) errors.message = "Message is too long.";

        if (Object.keys(errors).length > 0) {
            return NextResponse.json({ ok: false, errors}, { status: 400 });
        }

        const apiKey = process.env.RESEND_API_KEY;
        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.CONTACT_FROM_EMAIL;

        if (!process.env.RESEND_API_KEY || !to || !from) {
            return NextResponse.json(
                { ok: false, error: "Server email config missing" },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        const subject = `Portfolio Contact: ${cleanName}`;
        const text = `Name: ${cleanName}\n\nMessage:\n${cleanMessage}`;

        const result = await resend.emails.send({
            from,
            to,
            subject,
            text,
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