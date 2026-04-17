import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const videos = await prisma.video.findMany({ orderBy: { orden: "asc" } });
  return NextResponse.json(videos);
}
