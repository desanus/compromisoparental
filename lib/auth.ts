const SECRET = process.env.ADMIN_SECRET || "dev-secret-change-in-production";
export const COOKIE_NAME = "admin_session";

// Usernames are restricted to this charset so they can travel in the token
// (which is dot-separated) without ambiguity. Validate before creating users.
export const USERNAME_RE = /^[a-zA-Z0-9_-]{3,30}$/;

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

export async function createToken(username: string): Promise<string> {
  const ts = Date.now().toString();
  const payload = `${username}.${ts}`;
  const sig = await hmac(payload);
  return `${payload}.${sig}`;
}

/** Returns the username carried by a valid token, or null if invalid/expired. */
export async function verifyToken(token: string): Promise<string | null> {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [username, ts, sig] = parts;
  const expected = await hmac(`${username}.${ts}`);
  if (sig !== expected) return null;
  const age = Date.now() - parseInt(ts);
  if (age >= 24 * 60 * 60 * 1000) return null;
  return username;
}
