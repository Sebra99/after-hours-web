import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://jsb05.app.n8n.cloud/webhook/8ce27d52-4e4e-4bc2-b08d-59df60e54c46";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Error al contactar N8N" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}