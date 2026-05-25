"use client";

import { useEffect, useState } from "react";

interface Stats {
  compromisos: number;
  videos: number;
  noticias: number;
  materiales: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/compromisos").then(r => r.json()),
      fetch("/api/admin/videos").then(r => r.json()),
      fetch("/api/admin/noticias").then(r => r.json()),
      fetch("/api/admin/materiales").then(r => r.json()),
    ]).then(([c, v, n, m]) => {
      setStats({ compromisos: c.count, videos: v.length, noticias: n.length, materiales: m.length });
    });
  }, []);

  const cards = [
    { label: "Compromisos firmados", value: stats?.compromisos, icon: "🤝", color: "#2f2c79", href: "/admin/panel/compromisos" },
    { label: "Videos de especialistas", value: stats?.videos, icon: "🎥", color: "#171a4a", href: "/admin/panel/videos" },
    { label: "Noticias publicadas", value: stats?.noticias, icon: "📰", color: "#e8c39e", href: "/admin/panel/noticias" },
    { label: "Materiales disponibles", value: stats?.materiales, icon: "📁", color: "#f5e1ce", href: "/admin/panel/materiales" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black" style={{ color: "#000020" }}>Dashboard</h1>
        <p className="font-medium mt-1" style={{ color: "#2f2c79" }}>Resumen general del sitio</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map(card => (
          <a key={card.label} href={card.href} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 block">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: card.color + "25" }}>
              {card.icon}
            </div>
            <p className="text-4xl font-black mb-1" style={{ color: "#000020" }}>
              {stats === null ? "…" : card.value}
            </p>
            <p className="text-sm font-semibold" style={{ color: "#2f2c79" }}>{card.label}</p>
          </a>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-black mb-4" style={{ color: "#000020" }}>Accesos rápidos</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { label: "Exportar compromisos a CSV", href: "/api/admin/compromisos?format=csv", icon: "⬇️", external: true },
            { label: "Ver sitio web", href: "/", icon: "🌐", external: true },
            { label: "Editar configuración", href: "/admin/panel/config", icon: "⚙️", external: false },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              className="flex items-center gap-3 p-4 rounded-xl border font-semibold text-sm transition-all hover:shadow-sm"
              style={{ borderColor: "#e8c39e", color: "#171a4a" }}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
