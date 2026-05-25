"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const d = await res.json();
        setError(d.error || "Error al iniciar sesión");
        return;
      }
      router.push("/admin/panel");
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "linear-gradient(135deg, #000020 0%, #171a4a 50%, #2f2c79 100%)" }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4" style={{ backgroundColor: "#f5e1ce" }}>
            🔒
          </div>
          <h1 className="text-2xl font-black" style={{ color: "#000020" }}>Panel Admin</h1>
          <p className="text-sm font-medium mt-1" style={{ color: "#2f2c79" }}>Compromiso Parental</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#171a4a" }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: "#e8c39e", backgroundColor: "#fffdf9" }}
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full font-black text-lg py-3 rounded-xl transition-all active:scale-95 disabled:opacity-60"
            style={{ backgroundColor: "#2f2c79", color: "#ffffff" }}
          >
            {loading ? "Ingresando…" : "Ingresar"}
          </button>
        </form>

        <p className="text-center text-xs mt-6 font-medium" style={{ color: "#e8c39e" }}>
          Contraseña por defecto: <span className="font-black" style={{ color: "#2f2c79" }}>admin123</span>
        </p>
      </div>
    </div>
  );
}
