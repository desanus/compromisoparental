"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/admin/panel", label: "Dashboard", icon: "📊" },
  { href: "/admin/panel/compromisos", label: "Compromisos", icon: "🤝" },
  { href: "/admin/panel/videos", label: "Videos", icon: "🎥" },
  { href: "/admin/panel/noticias", label: "Noticias", icon: "📰" },
  { href: "/admin/panel/materiales", label: "Materiales", icon: "📁" },
  { href: "/admin/panel/usuarios", label: "Usuarios", icon: "👥" },
  { href: "/admin/panel/config", label: "Configuración", icon: "⚙️" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  };

  return (
    <aside className="w-60 flex flex-col shadow-lg" style={{ backgroundColor: "#000020", minHeight: "100vh" }}>
      <div className="px-6 py-6 border-b" style={{ borderColor: "rgba(232,195,158,0.15)" }}>
        <p className="font-black text-sm" style={{ color: "#e8c39e" }}>Compromiso Parental</p>
        <p className="text-xs font-medium mt-0.5" style={{ color: "#f5e1ce" }}>Panel de administración</p>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={isActive
                ? { backgroundColor: "#2f2c79", color: "#ffffff" }
                : { color: "#f5e1ce" }
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(232,195,158,0.15)" }}>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
          style={{ color: "#e8c39e" }}
        >
          <span>🚪</span>
          Cerrar sesión
        </button>
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80 mt-1"
          style={{ color: "#e8c39e" }}
        >
          <span>🌐</span>
          Ver sitio
        </Link>
      </div>
    </aside>
  );
}
