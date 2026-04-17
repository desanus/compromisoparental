import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET() {
  const err = await requireAdmin();
  if (err) return err;
  const materiales = await prisma.material.findMany({ orderBy: { orden: "asc" } });
  return NextResponse.json(materiales);
}

export async function POST(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const body = await req.json();
  const material = await prisma.material.create({ data: body });
  return NextResponse.json(material);
}

export async function PUT(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id, ...data } = await req.json();
  const material = await prisma.material.update({ where: { id }, data });
  return NextResponse.json(material);
}

export async function DELETE(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id } = await req.json();
  await prisma.material.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
