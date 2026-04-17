import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET() {
  const err = await requireAdmin();
  if (err) return err;
  const noticias = await prisma.noticia.findMany({ orderBy: { orden: "asc" } });
  return NextResponse.json(noticias);
}

export async function POST(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const body = await req.json();
  const noticia = await prisma.noticia.create({ data: body });
  return NextResponse.json(noticia);
}

export async function PUT(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id, ...data } = await req.json();
  const noticia = await prisma.noticia.update({ where: { id }, data });
  return NextResponse.json(noticia);
}

export async function DELETE(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id } = await req.json();
  await prisma.noticia.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
