import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const videos = await prisma.video.findMany({ orderBy: { orden: "asc" } });
    return NextResponse.json(videos);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
