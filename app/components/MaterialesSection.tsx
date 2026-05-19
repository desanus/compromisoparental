"use client";

import { useEffect, useState } from "react";

interface Material {
  id: number;
  titulo: string;
  descripcion: string;
  icon: string;
  bg: string;
  url: string;
}

export default function MaterialesSection() {
  const [materiales, setMateriales] = useState<Material[]>([]);

  useEffect(() => {
    fetch("/api/materiales").then(r => r.json()).then(d => Array.isArray(d) && setMateriales(d));
  }, []);

  if (materiales.length === 0) return null;

  return (
    <section id="materiales" className="py-20" style={{ backgroundColor: "#f5e1ce" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-5 uppercase tracking-widest" style={{ backgroundColor: "#00b2ca", color: "#000020" }}>
            Recursos
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: "#000020" }}>
            Materiales descargables
          </h2>
          <div className="w-14 h-1.5 rounded-full mx-auto mb-5" style={{ backgroundColor: "#7dcfb6" }} />
          <p className="max-w-xl mx-auto font-medium" style={{ color: "#171a4a" }}>
            Al sumarte al compromiso recibís acceso a todos estos recursos de forma gratuita.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {materiales.map(m => (
            <div
              key={m.id}
              className="rounded-2xl overflow-hidden flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 16px rgba(0,0,32,0.07)", cursor: m.url ? "pointer" : "default" }}
            >
              <div className="w-full h-1.5" style={{ backgroundColor: m.bg }} />
              <div className="p-6 flex flex-col items-center flex-1 w-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm" style={{ backgroundColor: m.bg }}>
                  {m.icon}
                </div>
                <h3 className="font-bold leading-snug mb-2" style={{ color: "#000020" }}>{m.titulo}</h3>
                <p className="text-sm flex-1 font-medium" style={{ color: "#171a4a" }}>{m.descripcion}</p>
                {m.url ? (
                  <a href={m.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-bold transition-opacity hover:opacity-70" style={{ color: "#1d4e89" }}>
                    Descargar →
                  </a>
                ) : (
                  <span className="mt-4 text-sm font-bold" style={{ color: "#e8c39e" }}>Próximamente</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #000020 0%, #171a4a 50%, #2f2c79 100%)" }}>
          <p className="text-lg font-bold mb-2" style={{ color: "#fbd1a2" }}>¿Querés recibir todos los materiales por email?</p>
          <p className="text-sm mb-6 font-medium" style={{ color: "#7dcfb6" }}>Sumate al compromiso y te los enviamos de forma gratuita.</p>
          <button
            onClick={() => document.querySelector<HTMLButtonElement>("button[data-hero-btn]")?.click()}
            className="font-black text-lg px-10 py-3.5 rounded-xl hover:opacity-90 transition-opacity active:scale-95"
            style={{ backgroundColor: "#f79256", color: "#000020" }}
          >
            Me sumo al compromiso
          </button>
        </div>
      </div>
    </section>
  );
}
