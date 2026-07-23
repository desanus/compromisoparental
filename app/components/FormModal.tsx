"use client";

import { useState, useEffect } from "react";
import EscuelaCombobox from "./EscuelaCombobox";

interface FormModalProps {
  onClose: () => void;
  onSuccess: (newCount: number) => void;
}

const LOCALIDADES = ["Sarandí", "Villa Domínico", "Wilde", "Avellaneda", "Dock Sud", "Isla Maciel", "Gerli", "Piñeyro"];

const COMPROMISOS = [
  "Postergar lo máximo posible el acceso a dispositivos personales, por lo menos hasta los 12 años.",
  "Establecer límites claros sobre el tiempo de pantallas y respetar las recomendaciones médicas.",
  "Conversar sobre el uso responsable de los dispositivos y de internet.",
  "Dar el ejemplo, priorizar el encuentro familiar y actividades sin pantallas.",
  "Compartir este compromiso con otras familias para promover la acción conjunta.",
];

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

  const inputClass = "w-full border rounded-lg px-3 py-2 text-sm transition-all outline-none focus:ring-2";
  const inputStyle = { borderColor: "#e8c39e", backgroundColor: "#fffdf9" };
  const labelClass = "block text-xs font-semibold mb-1 uppercase tracking-wide";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3"
      style={{ backgroundColor: "rgba(0,0,32,0.75)" }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col"
        style={{ maxHeight: "calc(100dvh - 1.5rem)" }}
      >
        {!done ? (
          <>
            {/* Header fijo */}
            <div className="flex justify-between items-start px-5 pt-5 pb-3 flex-shrink-0">
              <div>
                <h2 className="text-xl font-black leading-tight" style={{ color: "#000020" }}>Me sumo al compromiso</h2>
                <p className="text-xs mt-0.5 font-medium" style={{ color: "#2f2c79" }}>
                  Juntos acompañamos a niños, niñas y adolescentes en su relación con la tecnología.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-2xl leading-none ml-4 hover:opacity-60 transition-opacity flex-shrink-0"
                style={{ color: "#e8c39e" }}
              >
                ×
              </button>
            </div>

            {/* Contenido scrollable */}
            <div className="overflow-y-auto flex-1 px-5 pb-2">
              <div className="rounded-xl p-3 mb-4 text-xs" style={{ backgroundColor: "#f5e1ce" }}>
                <p className="font-bold mb-1.5" style={{ color: "#000020" }}>Al sumarte te comprometés a:</p>
                <ul className="space-y-1" style={{ color: "#171a4a" }}>
                  {COMPROMISOS.map((punto, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="flex-shrink-0" style={{ color: "#2f2c79" }}>•</span>
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form id="compromiso-form" onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass} style={{ color: "#171a4a" }}>Nombre *</label>
                    <input
                      name="nombre" required value={form.nombre} onChange={handleChange}
                      className={inputClass} style={inputStyle} placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "#171a4a" }}>Apellido *</label>
                    <input
                      name="apellido" required value={form.apellido} onChange={handleChange}
                      className={inputClass} style={inputStyle} placeholder="García"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass} style={{ color: "#171a4a" }}>Email *</label>
                    <input
                      name="mail" type="email" required value={form.mail} onChange={handleChange}
                      className={inputClass} style={inputStyle} placeholder="juan@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "#171a4a" }}>Teléfono</label>
                    <input
                      name="telefono" type="tel" value={form.telefono} onChange={handleChange}
                      className={inputClass} style={inputStyle} placeholder="11 1234 5678"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass} style={{ color: "#171a4a" }}>Localidad</label>
                    <select
                      name="localidad" value={form.localidad} onChange={handleChange}
                      className={inputClass} style={inputStyle}
                    >
                      <option value="">Seleccioná…</option>
                      {LOCALIDADES.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "#171a4a" }}>
                      Colegio <span style={{ color: "#e8933e" }}>*</span> <span className="normal-case font-normal" style={{ color: "#e8c39e" }}>(opcional)</span>
                    </label>
                    <EscuelaCombobox
                      value={form.colegio}
                      onChange={(v) => setForm(prev => ({ ...prev, colegio: v }))}
                      inputClass={inputClass}
                      inputStyle={inputStyle}
                    />
                  </div>
                </div>
                <p className="text-xs font-normal normal-case leading-snug" style={{ color: "#6b6f8a" }}>
                  <span style={{ color: "#e8933e" }}>*</span> Te preguntamos la escuela a la que asisten los chicos para conectar a las familias de una misma comunidad educativa y fortalecer este compromiso.
                </p>
              </form>
            </div>

            {/* Footer fijo con botón */}
            <div className="px-5 pb-5 pt-3 flex-shrink-0">
              {error && <p className="text-red-500 text-xs font-medium mb-2">{error}</p>}
              <button
                type="submit"
                form="compromiso-form"
                disabled={loading}
                className="w-full font-black text-base py-3 rounded-xl transition-all active:scale-95 disabled:opacity-60"
                style={{ backgroundColor: "#e8c39e", color: "#000020" }}
              >
                {loading ? "Enviando…" : "Confirmar mi compromiso"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center p-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
              style={{ backgroundColor: "#f5e1ce" }}
            >
              🤝
            </div>
            <h2 className="text-2xl font-black mb-2" style={{ color: "#000020" }}>¡Gracias por sumarte!</h2>
            <p className="mb-5 font-medium text-sm" style={{ color: "#2f2c79" }}>
              Tu compromiso ya suma a la comunidad que trabaja por una infancia más saludable.
            </p>
            <div className="rounded-xl p-4 mb-5 text-sm" style={{ backgroundColor: "#f5e1ce" }}>
              <p className="font-bold" style={{ color: "#000020" }}>Materiales descargables</p>
              <p className="mt-1 text-xs" style={{ color: "#171a4a" }}>Te enviamos los recursos a tu email para que puedas empezar hoy mismo.</p>
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
  );
}
