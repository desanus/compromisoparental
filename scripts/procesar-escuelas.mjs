import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(__dirname, "escuelas-raw.csv"), "utf8");

// --- arreglar mojibake UTF-8 leído como Latin-1 ---
function fixMojibake(s) {
  return Buffer.from(s, "latin1").toString("utf8");
}

// --- correcciones de mayúsculas acentuadas que perdieron su segundo byte (quedan como �) ---
const CORRECCIONES = {
  "EDUCACI�N": "EDUCACIÓN", "FORMACI�N": "FORMACIÓN", "ASOCIACI�N": "ASOCIACIÓN",
  "EXTENSI�N": "EXTENSIÓN", "INICIACI�N": "INICIACIÓN", "T�CNICA": "TÉCNICA",
  "F�SICA": "FÍSICA", "M�SICA": "MÚSICA", "PL�STICAS": "PLÁSTICAS", "CER�MICA": "CERÁMICA",
  "J�VENES": "JÓVENES", "JOS�": "JOSÉ", "H�ROES": "HÉROES", "H�CTOR": "HÉCTOR",
  "P�REZ": "PÉREZ", "RAM�N": "RAMÓN", "MAR�A": "MARÍA", "MART�N": "MARTÍN",
  "S�MON": "SIMÓN", "REP�BLICA": "REPÚBLICA", "NICOL�S": "NICOLÁS", "M�XICO": "MÉXICO",
  "M�JICO": "MÉJICO", "PIT�GORAS": "PITÁGORAS", "G�EMES": "GÜEMES", "G�NOVA": "GÉNOVA",
  "VALENT�N": "VALENTÍN", "CAR�CTER": "CARÁCTER", "REN�": "RENÉ", "C�CERES": "CÁCERES",
  "COL�N": "COLÓN", "ORO�O": "OROÑO", "MONTA�A": "MONTAÑA", "ESPA�A": "ESPAÑA",
  "ESPA�OL": "ESPAÑOL", "PI�EYRO": "PIÑEYRO", "BAH�A": "BAHÍA", "ECHEVERR�A": "ECHEVERRÍA",
  "YAPEY�": "YAPEYÚ", "TAPALQU�": "TAPALQUÉ", "PE�ALOZA": "PEÑALOZA", "VILLAFA�E": "VILLAFAÑE",
  "ARGA�ARAZ": "ARGAÑARAZ", "NU�EZ": "NUÑEZ", "PI�ERO": "PIÑERO", "G�IFFRA": "GÜIFFRA",
  "V�RTIZ": "VÉRTIZ", "PE�A": "PEÑA", "L�BANO": "LÍBANO", "HIP�LITO": "HIPÓLITO",
  "AZCU�NAGA": "AZCUÉNAGA", "LAMBAR�": "LAMBARÉ", "GARC�A": "GARCÍA",
  "JARD�N": "JARDÍN", "HERN�NDEZ": "HERNÁNDEZ", "SE�ORA": "SEÑORA",
  "PROFESI�NAL": "PROFESIONAL", "FERN�NDEZ": "FERNÁNDEZ", "ARRIBE�OS": "ARRIBEÑOS",
  "ESQUI�": "ESQUIÚ",
};

function corregir(s) {
  let out = s;
  for (const [bad, good] of Object.entries(CORRECCIONES)) {
    out = out.split(bad).join(good);
  }
  return out;
}

// --- parser CSV simple con soporte de comillas ---
function parseCSV(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
      else if (c === "\r") { /* skip */ }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const rows = parseCSV(raw.replace(/^﻿/, ""));
const header = rows.shift();

const byName = new Map();
for (const cols of rows) {
  if (cols.length < 11 || !cols[1]) continue;
  const [distrito, nombre, calle, nro, latDer, latIzq, localidad, lat, lng, modalidad, nivel] =
    cols.map((c) => corregir(fixMojibake(c.trim())));
  const key = nombre;
  if (!byName.has(key)) {
    byName.set(key, {
      nombre,
      direccion: [calle, nro].filter((x) => x && x !== "S/N").join(" ").trim() || calle,
      localidad,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      modalidad,
      niveles: new Set(),
    });
  }
  if (nivel) byName.get(key).niveles.add(nivel);
}

const escuelas = [...byName.values()].map((e) => ({ ...e, niveles: [...e.niveles] }));

// reporte de tokens aún rotos
const rotos = new Set();
for (const e of escuelas) {
  for (const v of [e.nombre, e.direccion, e.localidad, e.modalidad, ...e.niveles]) {
    if (typeof v === "string" && v.includes("�")) {
      for (const tok of v.split(/\s+/)) if (tok.includes("�")) rotos.add(tok);
    }
  }
}

console.log("Filas crudas:", rows.length);
console.log("Escuelas únicas:", escuelas.length);
console.log("Tokens aún rotos (�):", rotos.size ? [...rotos].join("  ") : "NINGUNO ✅");
console.log("\nMuestra de nombres:");
for (const e of escuelas.slice(0, 8)) console.log(" -", e.nombre, "|", e.localidad, "|", e.niveles.join("/"));

// guardar JSON intermedio para inspección
writeFileSync(join(__dirname, "escuelas.json"), JSON.stringify(escuelas, null, 2), "utf8");

// --- filtrar solo escuelas para niñez/adolescencia y generar TS ---
// Modalidades de chicos: Común, Especial, Técnico Profesional. Se excluyen
// adultos, artística, física, psicología comunitaria y los terciarios (Nivel Superior).
const MODALIDADES_NIÑEZ = ["Educación Común", "Educación Especial", "Educación Técnico Profesional"];
const relevantes = escuelas
  .filter((e) => MODALIDADES_NIÑEZ.includes(e.modalidad))
  .filter((e) => e.niveles.some((n) => /Inicial|Primario|Secundario/.test(n)))
  .map((e) => ({
    nombre: e.nombre,
    localidad: e.localidad,
    direccion: e.direccion,
    lat: e.lat,
    lng: e.lng,
    niveles: e.niveles.filter((n) => /Inicial|Primario|Secundario/.test(n)),
  }))
  .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

const ts = `// Generado por scripts/procesar-escuelas.mjs — no editar a mano.
// Base de escuelas de Avellaneda (niveles Inicial / Primario / Secundario).

export interface Escuela {
  nombre: string;
  localidad: string;
  direccion: string;
  lat: number;
  lng: number;
  niveles: string[];
}

export const ESCUELAS: Escuela[] = ${JSON.stringify(relevantes, null, 2)};
`;

const outTs = join(__dirname, "..", "app", "data", "escuelas.ts");
writeFileSync(outTs, ts, "utf8");
console.log("\nGenerado:", outTs, "con", relevantes.length, "escuelas.");
