const SECRET = process.env.ADMIN_SECRET || "dev-secret-change-in-production";
const PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
export const COOKIE_NAME = "admin_session";

export function checkPassword(input: string): boolean {
  return input === PASSWORD;
}

async function hmac(message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, "0")).join("");
}

export async function createToken(): Promise<string> {
  const ts = Date.now().toString();
  const sig = await hmac(ts);
  return `${ts}.${sig}`;
}

export async function verifyToken(token: string): Promise<boolean> {
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [ts, sig] = parts;
  const expected = await hmac(ts);
  if (sig !== expected) return false;
  const age = Date.now() - parseInt(ts);
  return age < 24 * 60 * 60 * 1000;
}
