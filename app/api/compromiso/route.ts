import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const count = await prisma.compromiso.count();
  return NextResponse.json({ count });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, apellido, telefono, mail, colegio } = body;

  if (!nombre || !apellido || !mail) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  await prisma.compromiso.create({ data: { nombre, apellido, telefono, mail, colegio } });
  const count = await prisma.compromiso.count();
  return NextResponse.json({ ok: true, count });
}
