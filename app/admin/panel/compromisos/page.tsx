"use client";

import { useEffect, useState } from "react";

interface Compromiso {
  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  telefono: string | null;
  colegio: string | null;
  createdAt: string;
}

export default function CompromisosPage() {
  const [compromisos, setCompromisos] = useState<Compromiso[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const load = () => {
    setLoading(true);
    fetch("/api/admin/compromisos")
      .then(r => r.json())
      .then(d => { setCompromisos(d.compromisos); setCount(d.count); })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar este compromiso?")) return;
    await fetch("/api/admin/compromisos", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  };

  const filtered = compromisos.filter(c =>
    [c.nombre, c.apellido, c.mail, c.colegio].join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-black" style={{ color: "#000020" }}>Compromisos</h1>
          <p className="font-medium mt-1" style={{ color: "#2f2c79" }}>{count} personas firmaron el compromiso</p>
        </div>
        <a
          href="/api/admin/compromisos?format=csv"
          className="flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#2f2c79", color: "#ffffff" }}
        >
          ⬇️ Exportar CSV
        </a>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar por nombre, email o colegio…"
            className="w-full border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2"
            style={{ borderColor: "#e8c39e" }}
          />
        </div>

        {loading ? (
          <div className="p-12 text-center font-medium" style={{ color: "#e8c39e" }}>Cargando…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center font-medium" style={{ color: "#e8c39e" }}>Sin resultados</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100" style={{ backgroundColor: "#f5e1ce" }}>
                  {["Nombre", "Email", "Teléfono", "Colegio", "Fecha", ""].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-black text-xs uppercase tracking-wide" style={{ color: "#171a4a" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors" style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fffdf9" }}>
                    <td className="px-4 py-3 font-semibold" style={{ color: "#000020" }}>{c.nombre} {c.apellido}</td>
                    <td className="px-4 py-3" style={{ color: "#171a4a" }}>{c.mail}</td>
                    <td className="px-4 py-3" style={{ color: "#171a4a" }}>{c.telefono || "—"}</td>
                    <td className="px-4 py-3" style={{ color: "#171a4a" }}>{c.colegio || "—"}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "#e8c39e" }}>
                      {new Date(c.createdAt).toLocaleDateString("es-AR")}
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => handleDelete(c.id)} className="text-red-400 hover:text-red-600 text-xs font-bold transition-colors">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
