import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const noticias = await prisma.noticia.findMany({ orderBy: { orden: "asc" } });
    return NextResponse.json(noticias);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
