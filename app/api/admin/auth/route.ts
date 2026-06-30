import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";
import { createToken, COOKIE_NAME, USERNAME_RE } from "@/lib/auth";

// Used only to create the very first admin when the users table is empty.
const BOOTSTRAP_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
    return NextResponse.json({ error: "Usuario y contraseña requeridos" }, { status: 400 });
  }

  let user = await prisma.adminUser.findUnique({ where: { username } });

  if (user) {
    if (!verifyPassword(password, user.passwordHash)) {
      return NextResponse.json({ error: "Usuario o contraseña incorrectos" }, { status: 401 });
    }
  } else {
    // Bootstrap: while there are no admins yet, the first valid login with the
    // ADMIN_PASSWORD creates the initial admin account.
    const count = await prisma.adminUser.count();
    if (count > 0 || password !== BOOTSTRAP_PASSWORD || !USERNAME_RE.test(username)) {
      return NextResponse.json({ error: "Usuario o contraseña incorrectos" }, { status: 401 });
    }
    user = await prisma.adminUser.create({
      data: { username, name: username, passwordHash: hashPassword(password) },
    });
  }

  const token = await createToken(user.username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
    path: "/",
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(COOKIE_NAME);
  return res;
}
