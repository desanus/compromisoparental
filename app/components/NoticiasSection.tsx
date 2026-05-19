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

const TAG_PALETTE: React.CSSProperties[] = [
  { backgroundColor: "#00b2ca", color: "#000020" },
  { backgroundColor: "#2f2c79", color: "#ffffff" },
  { backgroundColor: "#7dcfb6", color: "#000020" },
  { backgroundColor: "#f79256", color: "#000020" },
  { backgroundColor: "#fbd1a2", color: "#000020" },
  { backgroundColor: "#171a4a", color: "#ffffff" },
];

const tagCache: Record<string, React.CSSProperties> = {
  Iniciativa:  TAG_PALETTE[0],
  Legislación: TAG_PALETTE[1],
  Educación:   TAG_PALETTE[2],
  Comunidad:   TAG_PALETTE[3],
};

function getTagStyle(tag: string): React.CSSProperties {
  if (tagCache[tag]) return tagCache[tag];
  const idx = Object.keys(tagCache).length % TAG_PALETTE.length;
  tagCache[tag] = TAG_PALETTE[idx];
  return tagCache[tag];
}

function getTagAccentColor(tag: string): string {
  return getTagStyle(tag).backgroundColor as string;
}

const PAGE_SIZE = 4;

export default function NoticiasSection() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch("/api/noticias").then(r => r.json()).then(d => Array.isArray(d) && setNoticias(d));
  }, []);

  if (noticias.length === 0) return null;

  const visible = expanded ? noticias : noticias.slice(0, PAGE_SIZE);

  return (
    <section id="noticias" className="py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-5 uppercase tracking-widest" style={{ backgroundColor: "#fbd1a2", color: "#000020" }}>
            Medios
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: "#000020" }}>
            En las noticias
          </h2>
          <div className="w-14 h-1.5 rounded-full mx-auto mb-5" style={{ backgroundColor: "#00b2ca" }} />
          <p className="max-w-xl mx-auto font-medium" style={{ color: "#171a4a" }}>
            Lo que dicen los medios sobre la iniciativa y el movimiento por una infancia más saludable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map(n => (
            <article
              key={n.id}
              className="rounded-2xl p-6 flex flex-col hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              style={{
                backgroundColor: "#fffdf9",
                borderLeft: `4px solid ${getTagAccentColor(n.tag)}`,
                boxShadow: "0 2px 16px rgba(0,0,32,0.07)",
                cursor: n.url ? "pointer" : "default",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide" style={getTagStyle(n.tag)}>
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

        {noticias.length > PAGE_SIZE && (
          <div className="text-center mt-10">
            <button
              onClick={() => setExpanded(prev => !prev)}
              className="font-bold px-10 py-3 rounded-2xl border-2 transition-all duration-200 hover:shadow-md active:scale-95"
              style={{ borderColor: "#00b2ca", color: "#00b2ca", backgroundColor: "transparent" }}
            >
              {expanded ? "Ver menos ↑" : "Ver más ↓"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
