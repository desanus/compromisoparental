"use client";

import { useEffect, useState } from "react";

interface AdminUser {
  id: number;
  username: string;
  name: string;
  createdAt: string;
}

interface EditState {
  id?: number;
  username: string;
  name: string;
  password: string;
}

const empty: EditState = { username: "", name: "", password: "" };

export default function UsuariosPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<EditState>(empty);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = () => fetch("/api/admin/usuarios").then(r => r.json()).then(setUsers);
  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(empty); setError(""); setModal(true); };
  const openEdit = (u: AdminUser) => {
    setEditing({ id: u.id, username: u.username, name: u.name, password: "" });
    setError("");
    setModal(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    const isEdit = !!editing.id;
    const method = isEdit ? "PUT" : "POST";
    const body = isEdit
      ? { id: editing.id, name: editing.name, password: editing.password || undefined }
      : { username: editing.username, name: editing.name, password: editing.password };
    const res = await fetch("/api/admin/usuarios", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setSaving(false);
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      setError(d.error || "Error al guardar");
      return;
    }
    await load();
    setModal(false);
  };

  const handleDelete = async (u: AdminUser) => {
    if (!confirm(`¿Eliminar al usuario "${u.username}"?`)) return;
    const res = await fetch("/api/admin/usuarios", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: u.id }),
    });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      alert(d.error || "No se pudo eliminar");
      return;
    }
    load();
  };

  return (
    <div className="p-8">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black" style={{ color: "#000020" }}>Usuarios</h1>
          <p className="font-medium mt-1" style={{ color: "#2f2c79" }}>Administradores con acceso al panel</p>
        </div>
        <button onClick={openNew} className="font-bold text-sm px-5 py-2.5 rounded-xl" style={{ backgroundColor: "#e8c39e", color: "#000020" }}>
          + Agregar usuario
        </button>
      </div>

      <div className="grid gap-4">
        {users.map(u => (
          <div key={u.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 items-center">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black flex-shrink-0" style={{ backgroundColor: "#f5e1ce", color: "#2f2c79" }}>
              {u.name.trim().charAt(0).toUpperCase() || u.username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold truncate" style={{ color: "#000020" }}>{u.name}</p>
              <p className="text-sm font-medium" style={{ color: "#2f2c79" }}>@{u.username}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => openEdit(u)} className="font-bold text-xs px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#f5e1ce", color: "#000020" }}>Editar</button>
              <button onClick={() => handleDelete(u)} className="font-bold text-xs px-3 py-1.5 rounded-lg text-red-500 border border-red-100">Eliminar</button>
            </div>
          </div>
        ))}
        {users.length === 0 && (
          <p className="text-sm font-medium" style={{ color: "#2f2c79" }}>No hay usuarios cargados.</p>
        )}
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,32,0.7)" }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <h2 className="text-xl font-black mb-5" style={{ color: "#000020" }}>{editing.id ? "Editar usuario" : "Nuevo usuario"}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Usuario</label>
                <input
                  value={editing.username}
                  onChange={e => setEditing(prev => ({ ...prev, username: e.target.value }))}
                  disabled={!!editing.id}
                  placeholder="ej. maria"
                  className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 disabled:opacity-60 disabled:bg-gray-50"
                  style={{ borderColor: "#e8c39e" }}
                />
                {!editing.id && (
                  <p className="text-xs mt-1" style={{ color: "#2f2c79" }}>3-30 caracteres: letras, números, guion y guion bajo.</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Nombre</label>
                <input
                  value={editing.name}
                  onChange={e => setEditing(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="María González"
                  className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                  style={{ borderColor: "#e8c39e" }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>
                  {editing.id ? "Nueva contraseña" : "Contraseña"}
                </label>
                <input
                  type="password"
                  value={editing.password}
                  onChange={e => setEditing(prev => ({ ...prev, password: e.target.value }))}
                  autoComplete="new-password"
                  placeholder={editing.id ? "Dejar en blanco para no cambiar" : "Mínimo 6 caracteres"}
                  className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
                  style={{ borderColor: "#e8c39e" }}
                />
              </div>
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(false)} className="flex-1 font-bold py-2.5 rounded-xl border" style={{ borderColor: "#e8c39e", color: "#171a4a" }}>Cancelar</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 font-bold py-2.5 rounded-xl disabled:opacity-60" style={{ backgroundColor: "#e8c39e", color: "#000020" }}>
                {saving ? "Guardando…" : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
