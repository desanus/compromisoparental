import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;

  const { searchParams } = new URL(req.url);
  const format = searchParams.get("format");

  const compromisos = await prisma.compromiso.findMany({ orderBy: { createdAt: "desc" } });

  if (format === "csv") {
    const header = "ID,Nombre,Apellido,Email,Teléfono,Colegio,Fecha\n";
    const rows = compromisos.map(c =>
      `${c.id},"${c.nombre}","${c.apellido}","${c.mail}","${c.telefono ?? ""}","${c.colegio ?? ""}","${c.createdAt.toISOString()}"`
    ).join("\n");
    return new NextResponse(header + rows, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="compromisos.csv"`,
      },
    });
  }

  const count = compromisos.length;
  return NextResponse.json({ count, compromisos });
}

export async function DELETE(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id } = await req.json();
  await prisma.compromiso.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
