import nodemailer from "nodemailer";

// URL base del sitio (para armar los links de descarga). Configurable por env.
const BASE = (process.env.SITE_URL || "https://compromisoparentalavellaneda.com.ar").replace(/\/$/, "");

// Materiales que se enlazan en el email. Los PDF viven en public/materiales/ del sitio.
const MATERIALES = [
  {
    descripcion:
      "Guía para acompañar a niños y adolescentes en su relación con la tecnología. Herramientas prácticas, información y mecanismos de control parental.",
    url: `${BASE}/materiales/Guia-acompanamiento-tecnologia.pdf`,
  },
  {
    descripcion:
      "Información sobre la Ley Provincial n° 15.534 que regula el uso de celulares en escuelas primarias.",
    url: `${BASE}/materiales/Ley-15534-celulares-escuelas.pdf`,
  },
];

// Transporter SMTP (Hostinger). Singleton reutilizable entre invocaciones.
const globalForMail = globalThis as unknown as { mailer?: nodemailer.Transporter };

function getTransporter(): nodemailer.Transporter | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null; // sin credenciales => email deshabilitado

  if (!globalForMail.mailer) {
    const port = Number(process.env.SMTP_PORT) || 465;
    globalForMail.mailer = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = SSL, 587 = STARTTLS
      auth: { user, pass },
    });
  }
  return globalForMail.mailer;
}

function plantillaHtml(nombre: string): string {
  const p = "margin:0 0 16px;color:#171a4a;font-size:15px;line-height:1.6;";
  const items = MATERIALES.map(
    (m) => `
      <li style="margin-bottom:12px;">
        ${m.descripcion}<br>
        <a href="${m.url}" style="display:inline-block;margin-top:4px;color:#2f2c79;font-weight:bold;text-decoration:none;">Descargar →</a>
      </li>`
  ).join("");

  return `
  <div style="background:#f5e1ce;padding:32px 12px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="background:linear-gradient(135deg,#000020 0%,#171a4a 50%,#2f2c79 100%);padding:28px 32px;">
          <div style="color:#f5e1ce;font-size:13px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Compromiso Parental Avellaneda</div>
          <div style="color:#ffffff;font-size:22px;font-weight:bold;margin-top:6px;">Infancia sin pantallas 🤝</div>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 32px;">
          <p style="${p}">Hola, <strong>${nombre}</strong>.</p>
          <p style="${p}">Gracias por sumarte al compromiso parental por una infancia sin pantallas en Avellaneda.</p>
          <p style="${p}">Te compartimos los siguientes materiales para descargar:</p>
          <ul style="margin:0 0 16px;padding-left:18px;color:#171a4a;font-size:15px;line-height:1.6;">${items}</ul>
          <p style="${p}">El acompañamiento cotidiano, el diálogo y la construcción de confianza son las herramientas más importantes para promover un uso seguro, saludable y responsable de las tecnologías.</p>
          <p style="${p}">Organizarnos entre las familias es la forma más efectiva de cuidar a nuestros hijos.</p>
          <p style="${p}">Quedamos en contacto a través de este medio por cualquier consulta.</p>
        </td>
      </tr>
      <tr>
        <td style="background:#f5e1ce;padding:18px 32px;text-align:center;color:#2f2c79;font-size:13px;line-height:1.5;">
          <strong>Compromiso Parental</strong><br>Infancia sin pantallas en Avellaneda
        </td>
      </tr>
    </table>
  </div>`;
}

// Versión en texto plano (fallback para clientes sin HTML).
function plantillaTexto(nombre: string): string {
  const items = MATERIALES.map((m) => `- ${m.descripcion}\n  Descargar: ${m.url}`).join("\n\n");
  return `Hola, ${nombre}.

Gracias por sumarte al compromiso parental por una infancia sin pantallas en Avellaneda.

Te compartimos los siguientes materiales para descargar:

${items}

El acompañamiento cotidiano, el diálogo y la construcción de confianza son las herramientas más importantes para promover un uso seguro, saludable y responsable de las tecnologías.

Organizarnos entre las familias es la forma más efectiva de cuidar a nuestros hijos.

Quedamos en contacto a través de este medio por cualquier consulta.

Compromiso Parental
Infancia sin pantallas en Avellaneda`;
}

/**
 * Envía el email de bienvenida con los links a los materiales.
 * No lanza: si falla o no hay credenciales, devuelve false y loguea.
 */
export async function enviarMaterialesPorMail(nombre: string, destino: string): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("[mailer] SMTP no configurado — no se envía el email de materiales.");
    return false;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: destino,
      subject: "Gracias por sumarte · Compromiso Parental Avellaneda 📚",
      text: plantillaTexto(nombre),
      html: plantillaHtml(nombre),
    });
    return true;
  } catch (e) {
    console.error("[mailer] Error enviando el email de materiales:", e);
    return false;
  }
}
