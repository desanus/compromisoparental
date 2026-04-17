import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET() {
  const err = await requireAdmin();
  if (err) return err;
  const videos = await prisma.video.findMany({ orderBy: { orden: "asc" } });
  return NextResponse.json(videos);
}

export async function POST(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const body = await req.json();
  const video = await prisma.video.create({ data: body });
  return NextResponse.json(video);
}

export async function PUT(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id, ...data } = await req.json();
  const video = await prisma.video.update({ where: { id }, data });
  return NextResponse.json(video);
}

export async function DELETE(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id } = await req.json();
  await prisma.video.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
