"use client";

import { useEffect, useState } from "react";

interface Video {
  id?: number;
  titulo: string;
  especialista: string;
  youtubeUrl: string;
  duracion: string;
  orden: number;
}

const empty: Video = { titulo: "", especialista: "", youtubeUrl: "", duracion: "", orden: 0 };

function getYoutubeId(url: string) {
  const m = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Video>(empty);
  const [saving, setSaving] = useState(false);

  const load = () => fetch("/api/admin/videos").then(r => r.json()).then(setVideos);
  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(empty); setModal(true); };
  const openEdit = (v: Video) => { setEditing(v); setModal(true); };

  const handleSave = async () => {
    setSaving(true);
    const method = editing.id ? "PUT" : "POST";
    await fetch("/api/admin/videos", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(editing) });
    await load();
    setModal(false);
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar este video?")) return;
    await fetch("/api/admin/videos", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  };

  return (
    <div className="p-8">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black" style={{ color: "#000020" }}>Videos</h1>
          <p className="font-medium mt-1" style={{ color: "#2f2c79" }}>Videos de especialistas en la home</p>
        </div>
        <button onClick={openNew} className="font-bold text-sm px-5 py-2.5 rounded-xl" style={{ backgroundColor: "#f79256", color: "#000020" }}>
          + Agregar video
        </button>
      </div>

      <div className="grid gap-4">
        {videos.map(v => {
          const ytId = getYoutubeId(v.youtubeUrl);
          return (
            <div key={v.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 items-center">
              {ytId && (
                <img src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`} alt="" className="w-24 h-14 object-cover rounded-lg flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate" style={{ color: "#000020" }}>{v.titulo}</p>
                <p className="text-sm font-medium" style={{ color: "#2f2c79" }}>{v.especialista}</p>
                <p className="text-xs" style={{ color: "#e8c39e" }}>{v.duracion} · Orden: {v.orden}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => openEdit(v)} className="font-bold text-xs px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#fbd1a2", color: "#000020" }}>Editar</button>
                <button onClick={() => handleDelete(v.id!)} className="font-bold text-xs px-3 py-1.5 rounded-lg text-red-500 border border-red-100">Eliminar</button>
              </div>
            </div>
          );
        })}
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,32,0.7)" }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <h2 className="text-xl font-black mb-5" style={{ color: "#000020" }}>{editing.id ? "Editar video" : "Nuevo video"}</h2>
            <div className="space-y-4">
              {[
                { key: "titulo", label: "Título", placeholder: "El impacto de las pantallas…" },
                { key: "especialista", label: "Especialista", placeholder: "Dra. María González · Psicóloga" },
                { key: "youtubeUrl", label: "URL de YouTube", placeholder: "https://www.youtube.com/watch?v=..." },
                { key: "duracion", label: "Duración", placeholder: "12 min" },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>{f.label}</label>
                  <input
                    value={(editing as unknown as Record<string, string>)[f.key]}
                    onChange={e => setEditing(prev => ({ ...prev, [f.key]: e.target.value }))}
                    placeholder={f.placeholder}
                    className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                    style={{ borderColor: "#e8c39e" }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Orden</label>
                <input
                  type="number"
                  value={editing.orden}
                  onChange={e => setEditing(prev => ({ ...prev, orden: parseInt(e.target.value) || 0 }))}
                  className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                  style={{ borderColor: "#e8c39e" }}
                />
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
