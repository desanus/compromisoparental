import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const materiales = await prisma.material.findMany({ orderBy: { orden: "asc" } });
  return NextResponse.json(materiales);
}
