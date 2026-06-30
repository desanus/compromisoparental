import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin, getAdminUsername } from "@/lib/adminAuth";
import { hashPassword } from "@/lib/password";
import { USERNAME_RE } from "@/lib/auth";

const publicSelect = { id: true, username: true, name: true, createdAt: true } as const;

export async function GET() {
  const err = await requireAdmin();
  if (err) return err;
  const users = await prisma.adminUser.findMany({
    orderBy: { username: "asc" },
    select: publicSelect,
  });
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { username, name, password } = await req.json();

  if (typeof username !== "string" || !USERNAME_RE.test(username)) {
    return NextResponse.json({ error: "Usuario inválido (3-30 caracteres: letras, números, _ o -)" }, { status: 400 });
  }
  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "El nombre es requerido" }, { status: 400 });
  }
  if (typeof password !== "string" || password.length < 6) {
    return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 });
  }

  const exists = await prisma.adminUser.findUnique({ where: { username } });
  if (exists) {
    return NextResponse.json({ error: "Ya existe un usuario con ese nombre de usuario" }, { status: 409 });
  }

  const user = await prisma.adminUser.create({
    data: { username, name: name.trim(), passwordHash: hashPassword(password) },
    select: publicSelect,
  });
  return NextResponse.json(user);
}

export async function PUT(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id, name, password } = await req.json();

  if (typeof id !== "number") {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  const data: { name?: string; passwordHash?: string } = {};
  if (typeof name === "string" && name.trim()) data.name = name.trim();
  if (typeof password === "string" && password) {
    if (password.length < 6) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 });
    }
    data.passwordHash = hashPassword(password);
  }

  if (!data.name && !data.passwordHash) {
    return NextResponse.json({ error: "Nada para actualizar" }, { status: 400 });
  }

  const user = await prisma.adminUser.update({ where: { id }, data, select: publicSelect });
  return NextResponse.json(user);
}

export async function DELETE(req: NextRequest) {
  const err = await requireAdmin();
  if (err) return err;
  const { id } = await req.json();

  if (typeof id !== "number") {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  const target = await prisma.adminUser.findUnique({ where: { id } });
  if (!target) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  const current = await getAdminUsername();
  if (target.username === current) {
    return NextResponse.json({ error: "No podés eliminar tu propio usuario" }, { status: 400 });
  }

  const count = await prisma.adminUser.count();
  if (count <= 1) {
    return NextResponse.json({ error: "No podés eliminar el último usuario" }, { status: 400 });
  }

  await prisma.adminUser.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
