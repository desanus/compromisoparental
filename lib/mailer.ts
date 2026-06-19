import nodemailer from "nodemailer";

export interface MaterialMail {
  titulo: string;
  descripcion: string;
  icon: string;
  url: string;
}

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

function plantillaHtml(nombre: string, materiales: MaterialMail[]): string {
  const filas = materiales
    .map(
      (m) => `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #f5e1ce;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size:22px;width:40px;vertical-align:top;">${m.icon || "📄"}</td>
              <td style="vertical-align:top;">
                <div style="font-weight:bold;color:#000020;font-size:15px;">${m.titulo}</div>
                <div style="color:#171a4a;font-size:13px;margin:2px 0 6px;">${m.descripcion}</div>
                <a href="${m.url}" style="color:#2f2c79;font-weight:bold;font-size:13px;text-decoration:none;">Descargar →</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>`
    )
    .join("");

  return `
  <div style="background:#f5e1ce;padding:32px 12px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="background:linear-gradient(135deg,#000020 0%,#171a4a 50%,#2f2c79 100%);padding:28px 32px;">
          <div style="color:#f5e1ce;font-size:13px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Compromiso Parental Avellaneda</div>
          <div style="color:#ffffff;font-size:22px;font-weight:bold;margin-top:6px;">¡Gracias por sumarte, ${nombre}! 🤝</div>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 32px;">
          <p style="color:#171a4a;font-size:15px;line-height:1.5;margin:0 0 18px;">
            Te sumaste al compromiso de acompañar a niños, niñas y adolescentes en su relación con la tecnología.
            Como te prometimos, acá tenés todos los materiales para descargar de forma gratuita:
          </p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${filas}</table>
          <p style="color:#171a4a;font-size:13px;line-height:1.5;margin:24px 0 0;">
            Compartí este compromiso con otras familias para promover la acción conjunta.
          </p>
        </td>
      </tr>
      <tr>
        <td style="background:#f5e1ce;padding:18px 32px;text-align:center;color:#2f2c79;font-size:12px;">
          Compromiso Parental Avellaneda · Infancia sin pantallas
        </td>
      </tr>
    </table>
  </div>`;
}

/**
 * Envía el email de bienvenida con los links de los materiales.
 * No lanza: si falla o no hay credenciales, devuelve false y loguea.
 */
export async function enviarMaterialesPorMail(
  nombre: string,
  destino: string,
  materiales: MaterialMail[]
): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("[mailer] SMTP no configurado — no se envía el email de materiales.");
    return false;
  }
  if (materiales.length === 0) {
    console.warn("[mailer] No hay materiales con link para enviar.");
    return false;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: destino,
      subject: "Tus materiales del Compromiso Parental Avellaneda 📚",
      html: plantillaHtml(nombre, materiales),
    });
    return true;
  } catch (e) {
    console.error("[mailer] Error enviando el email de materiales:", e);
    return false;
  }
}
