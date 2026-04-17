import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const materiales = await prisma.material.findMany({ orderBy: { orden: "asc" } });
    return NextResponse.json(materiales);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
