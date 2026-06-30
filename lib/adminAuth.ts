import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";
import { NextResponse } from "next/server";

/** Returns the logged-in admin username, or null if not authenticated. */
export async function getAdminUsername(): Promise<string | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function requireAdmin(): Promise<null | NextResponse> {
  const username = await getAdminUsername();
  if (!username) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  return null;
}
