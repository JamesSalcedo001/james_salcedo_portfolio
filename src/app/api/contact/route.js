import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    console.log("CONTACT FORM PAYLOAD: ", body);

    return NextResponse.json({ ok: true }, { status: 200 });
}