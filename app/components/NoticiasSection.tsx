"use client";

import { useEffect, useState } from "react";

interface Noticia {
  id: number;
  titulo: string;
  fuente: string;
  fecha: string;
  descripcion: string;
  tag: string;
  url: string;
}

const tagStyle: Record<string, React.CSSProperties> = {
  Iniciativa:  { backgroundColor: "#00b2ca", color: "#000020" },
  Legislación: { backgroundColor: "#2f2c79", color: "#ffffff" },
  Educación:   { backgroundColor: "#7dcfb6", color: "#000020" },
  Comunidad:   { backgroundColor: "#f79256", color: "#000020" },
};

export default function NoticiasSection() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    fetch("/api/noticias").then(r => r.json()).then(d => Array.isArray(d) && setNoticias(d));
  }, []);

  if (noticias.length === 0) return null;

  return (
    <section id="noticias" className="py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide" style={{ backgroundColor: "#fbd1a2", color: "#000020" }}>
            Medios
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#000020" }}>
            En las noticias
          </h2>
          <p className="max-w-xl mx-auto font-medium" style={{ color: "#171a4a" }}>
            Lo que dicen los medios sobre la iniciativa y el movimiento por una infancia más saludable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {noticias.map(n => (
            <article key={n.id} className="rounded-2xl p-6 flex flex-col border hover:shadow-md transition-shadow" style={{ backgroundColor: "#fffdf9", borderColor: "#fbd1a2" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide" style={tagStyle[n.tag] || { backgroundColor: "#e8c39e", color: "#000020" }}>
                  {n.tag}
                </span>
                <span className="text-xs font-medium" style={{ color: "#e8c39e" }}>{n.fuente} · {n.fecha}</span>
              </div>
              <h3 className="font-black text-lg leading-snug mb-2" style={{ color: "#000020" }}>{n.titulo}</h3>
              <p className="text-sm leading-relaxed flex-1 font-medium" style={{ color: "#171a4a" }}>{n.descripcion}</p>
              {n.url ? (
                <a href={n.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-bold text-left transition-opacity hover:opacity-70" style={{ color: "#00b2ca" }}>
                  Leer nota →
                </a>
              ) : (
                <span className="mt-4 text-sm font-bold" style={{ color: "#e8c39e" }}>Leer nota →</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
