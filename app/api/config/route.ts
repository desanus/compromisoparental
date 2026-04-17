import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const config = await prisma.config.findUnique({ where: { id: 1 } });
  return NextResponse.json(config);
}
