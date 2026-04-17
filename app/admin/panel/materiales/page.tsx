"use client";

import { useEffect, useState } from "react";

interface Material {
  id?: number;
  titulo: string;
  descripcion: string;
  icon: string;
  bg: string;
  url: string;
  orden: number;
}

const empty: Material = { titulo: "", descripcion: "", icon: "📄", bg: "#00b2ca", url: "", orden: 0 };

const ICONS = ["📖", "🛡️", "⚖️", "📋", "📄", "🎓", "💡", "🏫", "📱", "🔒"];
const BG_COLORS = [
  { label: "Cyan", value: "#00b2ca" },
  { label: "Navy", value: "#1d4e89" },
  { label: "Purple", value: "#2f2c79" },
  { label: "Mint", value: "#7dcfb6" },
  { label: "Orange", value: "#f79256" },
  { label: "Peach", value: "#fbd1a2" },
];

export default function MaterialesPage() {
  const [materiales, setMateriales] = useState<Material[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Material>(empty);
  const [saving, setSaving] = useState(false);

  const load = () => fetch("/api/admin/materiales").then(r => r.json()).then(setMateriales);
  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(empty); setModal(true); };
  const openEdit = (m: Material) => { setEditing(m); setModal(true); };

  const handleSave = async () => {
    setSaving(true);
    const method = editing.id ? "PUT" : "POST";
    await fetch("/api/admin/materiales", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(editing) });
    await load();
    setModal(false);
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar este material?")) return;
    await fetch("/api/admin/materiales", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  };

  return (
    <div className="p-8">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black" style={{ color: "#000020" }}>Materiales</h1>
          <p className="font-medium mt-1" style={{ color: "#2f2c79" }}>Recursos descargables del sitio</p>
        </div>
        <button onClick={openNew} className="font-bold text-sm px-5 py-2.5 rounded-xl" style={{ backgroundColor: "#f79256", color: "#000020" }}>
          + Agregar material
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {materiales.map(m => (
          <div key={m.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: m.bg }}>
              {m.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm leading-snug" style={{ color: "#000020" }}>{m.titulo}</p>
              <p className="text-xs mt-0.5 font-medium" style={{ color: "#2f2c79" }}>{m.descripcion}</p>
              {m.url && <p className="text-xs mt-0.5 truncate" style={{ color: "#00b2ca" }}>{m.url}</p>}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => openEdit(m)} className="font-bold text-xs px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#fbd1a2", color: "#000020" }}>Editar</button>
              <button onClick={() => handleDelete(m.id!)} className="font-bold text-xs px-3 py-1.5 rounded-lg text-red-500 border border-red-100">Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,32,0.7)" }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-black mb-5" style={{ color: "#000020" }}>{editing.id ? "Editar material" : "Nuevo material"}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Título</label>
                <input value={editing.titulo} onChange={e => setEditing(p => ({ ...p, titulo: e.target.value }))}
                  placeholder="Guía de acompañamiento…" className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none" style={{ borderColor: "#e8c39e" }} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Descripción</label>
                <input value={editing.descripcion} onChange={e => setEditing(p => ({ ...p, descripcion: e.target.value }))}
                  placeholder="Breve descripción…" className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none" style={{ borderColor: "#e8c39e" }} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Ícono</label>
                <div className="flex gap-2 flex-wrap">
                  {ICONS.map(ic => (
                    <button key={ic} onClick={() => setEditing(p => ({ ...p, icon: ic }))}
                      className="w-10 h-10 rounded-lg text-xl transition-all"
                      style={{ backgroundColor: editing.icon === ic ? "#f79256" : "#f5e1ce" }}>
                      {ic}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Color de fondo</label>
                <div className="flex gap-2 flex-wrap">
                  {BG_COLORS.map(c => (
                    <button key={c.value} onClick={() => setEditing(p => ({ ...p, bg: c.value }))}
                      className="w-8 h-8 rounded-lg border-2 transition-all"
                      style={{ backgroundColor: c.value, borderColor: editing.bg === c.value ? "#000020" : "transparent" }}
                      title={c.label} />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>URL de descarga (opcional)</label>
                <input value={editing.url} onChange={e => setEditing(p => ({ ...p, url: e.target.value }))}
                  placeholder="https://…" className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none" style={{ borderColor: "#e8c39e" }} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Orden</label>
                <input type="number" value={editing.orden} onChange={e => setEditing(p => ({ ...p, orden: parseInt(e.target.value) || 0 }))}
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
