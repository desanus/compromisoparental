import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET() {
  const err = await requireAdmin();
  if (err) return err;
  const config = await prisma.config.findUnique({ where: { id: 1 } });
  return NextResponse.json(config);
}

export async function PUT(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const data = await req.json();
  const config = await prisma.config.update({ where: { id: 1 }, data });
  return NextResponse.json(config);
}
