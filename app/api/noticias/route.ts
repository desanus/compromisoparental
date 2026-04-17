import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const noticias = await prisma.noticia.findMany({ orderBy: { orden: "asc" } });
  return NextResponse.json(noticias);
}
