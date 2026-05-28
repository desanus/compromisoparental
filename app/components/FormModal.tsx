"use client";

import { useState, useEffect } from "react";

interface FormModalProps {
  onClose: () => void;
  onSuccess: (newCount: number) => void;
}

export default function FormModal({ onClose, onSuccess }: FormModalProps) {
  const [form, setForm] = useState({ nombre: "", apellido: "", telefono: "", mail: "", localidad: "", colegio: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/compromiso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al enviar");
      setDone(true);
      onSuccess(data.count);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al enviar");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full border rounded-xl px-3 py-2.5 text-sm transition-all outline-none focus:ring-2";
  const inputStyle = { borderColor: "#e8c39e", backgroundColor: "#fffdf9" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,32,0.75)" }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          {!done ? (
            <>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-black" style={{ color: "#000020" }}>Me sumo al compromiso</h2>
                  <p className="text-sm mt-1 font-medium" style={{ color: "#2f2c79" }}>
                    Juntos acompañamos a niños, niñas y adolescentes en su relación con la tecnología.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-2xl leading-none ml-4 hover:opacity-60 transition-opacity"
                  style={{ color: "#e8c39e" }}
                >
                  ×
                </button>
              </div>

              <div className="rounded-xl p-4 mb-6 text-sm" style={{ backgroundColor: "#f5e1ce" }}>
                <p className="font-bold mb-2" style={{ color: "#000020" }}>Al sumarte te comprometés a:</p>
                <ul className="space-y-1.5" style={{ color: "#171a4a" }}>
                  {[
                    "Postergar lo máximo posible el acceso a dispositivos personales, por lo menos hasta los 12 años.",
                    "Establecer límites claros sobre el tiempo de pantallas y respetar las recomendaciones médicas.",
                    "Conversar sobre el uso responsable de los dispositivos y de internet.",
                    "Dar el ejemplo, priorizar el encuentro familiar y actividades sin pantallas.",
                    "Compartir este compromiso con otras familias para promover la acción conjunta.",
                  ].map((punto, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#2f2c79" }}>•</span>
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Nombre *</label>
                    <input
                      name="nombre" required value={form.nombre} onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, "--tw-ring-color": "#2f2c79" } as React.CSSProperties}
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Apellido *</label>
                    <input
                      name="apellido" required value={form.apellido} onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="García"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Email *</label>
                  <input
                    name="mail" type="email" required value={form.mail} onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="juan@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Teléfono</label>
                  <input
                    name="telefono" type="tel" value={form.telefono} onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="11 1234 5678"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>Localidad</label>
                  <select
                    name="localidad" value={form.localidad} onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  >
                    <option value="">Seleccioná tu localidad…</option>
                    {["Sarandí", "Villa Domínico", "Wilde", "Avellaneda", "Dock Sud", "Isla Maciel", "Gerli", "Piñeyro"].map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>
                    Colegio{" "}
                    <span className="normal-case font-normal text-xs" style={{ color: "#e8c39e" }}>(para mapear el compromiso)</span>
                  </label>
                  <input
                    name="colegio" value={form.colegio} onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="Nombre del colegio"
                  />
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button
                  type="submit" disabled={loading}
                  className="w-full font-black text-lg py-3.5 rounded-xl transition-all active:scale-95 disabled:opacity-60 mt-2"
                  style={{ backgroundColor: "#e8c39e", color: "#000020" }}
                >
                  {loading ? "Enviando…" : "Confirmar mi compromiso"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5"
                style={{ backgroundColor: "#f5e1ce" }}
              >
                🤝
              </div>
              <h2 className="text-2xl font-black mb-2" style={{ color: "#000020" }}>¡Gracias por sumarte!</h2>
              <p className="mb-6 font-medium" style={{ color: "#2f2c79" }}>
                Tu compromiso ya suma a la comunidad que trabaja por una infancia más saludable.
              </p>
              <div className="rounded-xl p-4 mb-6 text-sm" style={{ backgroundColor: "#f5e1ce" }}>
                <p className="font-bold" style={{ color: "#000020" }}>Materiales descargables</p>
                <p className="mt-1" style={{ color: "#171a4a" }}>Te enviamos los recursos a tu email para que puedas empezar hoy mismo.</p>
              </div>
              <button
                onClick={onClose}
                className="font-bold py-2.5 px-10 rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2f2c79", color: "#ffffff" }}
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
