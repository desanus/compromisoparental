import "dotenv/config";
import { enviarMaterialesPorMail } from "../lib/mailer";

async function main() {
  const ok = await enviarMaterialesPorMail("Alan", "alan.d.salvatori@gmail.com");
  console.log(ok ? "EMAIL ENVIADO OK -> alan.d.salvatori@gmail.com" : "EMAIL NO ENVIADO (ver logs)");
}

main().catch((e) => { console.error(e); process.exit(1); });
