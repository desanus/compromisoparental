"use client";

import { useEffect, useState } from "react";

interface Noticia {
  id?: number;
  titulo: string;
  fuente: string;
  fecha: string;
  descripcion: string;
  tag: string;
  url: string;
  orden: number;
}

const empty: Noticia = { titulo: "", fuente: "", fecha: "", descripcion: "", tag: "", url: "", orden: 0 };

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Iniciativa:  { bg: "#00b2ca", text: "#000020" },
  Legislación: { bg: "#2f2c79", text: "#ffffff" },
  Educación:   { bg: "#7dcfb6", text: "#000020" },
  Comunidad:   { bg: "#f79256", text: "#000020" },
};

export default function NoticiasPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Noticia>(empty);
  const [saving, setSaving] = useState(false);

  const load = () => fetch("/api/admin/noticias").then(r => r.json()).then(setNoticias);
  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(empty); setModal(true); };
  const openEdit = (n: Noticia) => { setEditing(n); setModal(true); };

  const handleSave = async () => {
    setSaving(true);
    const method = editing.id ? "PUT" : "POST";
    await fetch("/api/admin/noticias", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(editing) });
    await load();
    setModal(false);
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar esta noticia?")) return;
    await fetch("/api/admin/noticias", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  };

  const field = (key: keyof Noticia, label: string, placeholder: string, multiline = false) => (
    <div key={key}>
      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>{label}</label>
      {multiline ? (
        <textarea
          value={editing[key] as string}
          onChange={e => setEditing(prev => ({ ...prev, [key]: e.target.value }))}
          placeholder={placeholder}
          rows={3}
          className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 resize-none"
          style={{ borderColor: "#e8c39e" }}
        />
      ) : (
        <input
          value={editing[key] as string}
          onChange={e => setEditing(prev => ({ ...prev, [key]: e.target.value }))}
          placeholder={placeholder}
          className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
          style={{ borderColor: "#e8c39e" }}
        />
      )}
    </div>
  );

  return (
    <div className="p-8">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black" style={{ color: "#000020" }}>Noticias</h1>
          <p className="font-medium mt-1" style={{ color: "#2f2c79" }}>Artículos que aparecen en la sección de medios</p>
        </div>
        <button onClick={openNew} className="font-bold text-sm px-5 py-2.5 rounded-xl" style={{ backgroundColor: "#f79256", color: "#000020" }}>
          + Agregar noticia
        </button>
      </div>

      <div className="grid gap-4">
        {noticias.map(n => {
          const tagStyle = TAG_COLORS[n.tag] || { bg: "#e8c39e", text: "#000020" };
          return (
            <div key={n.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: tagStyle.bg, color: tagStyle.text }}>{n.tag}</span>
                  <span className="text-xs font-medium" style={{ color: "#e8c39e" }}>{n.fuente} · {n.fecha}</span>
                </div>
                <p className="font-bold leading-snug" style={{ color: "#000020" }}>{n.titulo}</p>
                <p className="text-sm mt-1 line-clamp-2" style={{ color: "#171a4a" }}>{n.descripcion}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0 items-start">
                <button onClick={() => openEdit(n)} className="font-bold text-xs px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#fbd1a2", color: "#000020" }}>Editar</button>
                <button onClick={() => handleDelete(n.id!)} className="font-bold text-xs px-3 py-1.5 rounded-lg text-red-500 border border-red-100">Eliminar</button>
              </div>
            </div>
          );
        })}
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,32,0.7)" }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-black mb-5" style={{ color: "#000020" }}>{editing.id ? "Editar noticia" : "Nueva noticia"}</h2>
            <div className="space-y-4">
              {field("titulo", "Título", "Título de la noticia")}
              <div className="grid grid-cols-2 gap-3">
                {field("fuente", "Fuente", "La Nación")}
                {field("fecha", "Fecha", "12 abril 2026")}
              </div>
              {field("descripcion", "Descripción", "Resumen de la noticia…", true)}
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Tag</label>
                <select
                  value={editing.tag}
                  onChange={e => setEditing(prev => ({ ...prev, tag: e.target.value }))}
                  className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{ borderColor: "#e8c39e" }}
                >
                  <option value="">Seleccionar…</option>
                  {["Iniciativa", "Legislación", "Educación", "Comunidad"].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              {field("url", "URL (opcional)", "https://…")}
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Orden</label>
                <input type="number" value={editing.orden} onChange={e => setEditing(prev => ({ ...prev, orden: parseInt(e.target.value) || 0 }))}
                  className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none" style={{ borderColor: "#e8c39e" }} />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(false)} className="flex-1 font-bold py-2.5 rounded-xl border" style={{ borderColor: "#e8c39e", color: "#171a4a" }}>Cancelar</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 font-bold py-2.5 rounded-xl disabled:opacity-60" style={{ backgroundColor: "#f79256", color: "#000020" }}>
                {saving ? "Guardando…" : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
