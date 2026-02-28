import { NextResponse } from "next/server";

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

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch {
        return NextResponse.json(
            { ok: false, error: "Invalid JSON" },
            { status: 400 }
        );
    }
}