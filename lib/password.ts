import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

/** Hashes a password with scrypt. Returns "salt:hash" (both hex). */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

/** Constant-time check of a password against a stored "salt:hash". */
export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const hashBuf = Buffer.from(hash, "hex");
  const testBuf = scryptSync(password, salt, 64);
  if (testBuf.length !== hashBuf.length) return false;
  return timingSafeEqual(testBuf, hashBuf);
}
