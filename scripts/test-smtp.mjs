import "dotenv/config";
import nodemailer from "nodemailer";

const port = Number(process.env.SMTP_PORT) || 465;
const t = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

try {
  await t.verify();
  console.log("OK: conexion y login SMTP exitosos ->", process.env.SMTP_USER);
} catch (e) {
  console.error("FALLO SMTP:", e.message);
  process.exit(1);
}
