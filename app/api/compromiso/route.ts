import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { enviarMaterialesPorMail } from "@/lib/mailer";

export async function GET() {
  try {
    const count = await prisma.compromiso.count();
    return NextResponse.json({ count });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, apellido, telefono, mail, localidad, colegio } = body;

    if (!nombre || !apellido || !mail) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    await prisma.compromiso.create({ data: { nombre, apellido, telefono, mail, localidad, colegio } });
    const count = await prisma.compromiso.count();

    // Enviar email con los materiales adjuntos (no bloqueante: si falla, la inscripción ya quedó guardada)
    enviarMaterialesPorMail(nombre, mail).catch((e) =>
      console.error("[compromiso] fallo el envío de materiales:", e)
    );

    return NextResponse.json({ ok: true, count });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
