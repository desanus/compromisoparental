"use client";

import { useEffect, useState } from "react";

interface Config {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBadge: string;
  counterLabel: string;
  counterSuffix: string;
  ctaText: string;
  ctaSubtext: string;
}

const FIELDS: { key: keyof Config; label: string; hint: string }[] = [
  { key: "heroTitle", label: "Título del hero (línea 1)", hint: "Ej: Compromiso parental:" },
  { key: "heroSubtitle", label: "Título del hero (línea 2, destacada)", hint: "Ej: infancia sin pantallas" },
  { key: "heroDescription", label: "Descripción del hero", hint: "Subtítulo debajo del título principal" },
  { key: "heroBadge", label: "Badge del hero", hint: "Ej: Compromiso ciudadano" },
  { key: "counterLabel", label: "Texto antes del contador", hint: "Ej: Ya somos" },
  { key: "counterSuffix", label: "Texto después del contador", hint: "Ej: familias comprometidas" },
  { key: "ctaText", label: "Texto del botón principal", hint: "Ej: Me sumo" },
  { key: "ctaSubtext", label: "Subtexto debajo del botón", hint: "Ej: Es gratis y solo lleva 2 minutos" },
];

export default function ConfigPage() {
  const [config, setConfig] = useState<Config | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/config").then(r => r.json()).then(setConfig);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/admin/config", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(config) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!config) return <div className="p-8 font-medium" style={{ color: "#e8c39e" }}>Cargando…</div>;

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-black" style={{ color: "#000020" }}>Configuración</h1>
        <p className="font-medium mt-1" style={{ color: "#2f2c79" }}>Textos del sitio editables sin tocar código</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
        {FIELDS.map(f => (
          <div key={f.key}>
            <label className="block text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: "#171a4a" }}>{f.label}</label>
            <p className="text-xs mb-1.5 font-medium" style={{ color: "#e8c39e" }}>{f.hint}</p>
            <input
              value={config[f.key]}
              onChange={e => setConfig(prev => prev ? { ...prev, [f.key]: e.target.value } : prev)}
              className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: "#e8c39e" }}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="font-black text-lg px-8 py-3 rounded-xl transition-all active:scale-95 disabled:opacity-60"
          style={{ backgroundColor: "#f79256", color: "#000020" }}
        >
          {saving ? "Guardando…" : "Guardar cambios"}
        </button>
        {saved && <span className="font-bold text-sm" style={{ color: "#7dcfb6" }}>✓ Cambios guardados</span>}
      </div>
    </div>
  );
}
