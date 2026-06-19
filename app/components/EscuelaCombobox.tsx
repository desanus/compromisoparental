"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { ESCUELAS } from "../data/escuelas";

interface EscuelaComboboxProps {
  value: string;
  onChange: (value: string) => void;
  inputClass: string;
  inputStyle: React.CSSProperties;
}

const norm = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// índice de búsqueda precalculado una sola vez
const INDICE = ESCUELAS.map((e) => ({ esc: e, buscar: norm(e.nombre + " " + e.localidad) }));

const MAX_RESULTADOS = 50;

export default function EscuelaCombobox({ value, onChange, inputClass, inputStyle }: EscuelaComboboxProps) {
  const [input, setInput] = useState(value);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [libre, setLibre] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const resultados = useMemo(() => {
    const q = norm(input.trim());
    const base = q
      ? INDICE.filter((i) => i.buscar.includes(q))
      : INDICE;
    return base.slice(0, MAX_RESULTADOS).map((i) => i.esc);
  }, [input]);

  // cerrar al hacer click afuera
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const seleccionar = (nombre: string) => {
    setInput(nombre);
    onChange(nombre);
    setOpen(false);
  };

  // ---- modo texto libre (escuela no listada) ----
  if (libre) {
    return (
      <div>
        <input
          name="colegio"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
          style={inputStyle}
          placeholder="Escribí el nombre del colegio"
          autoFocus
        />
        <button
          type="button"
          onClick={() => { setLibre(false); setInput(""); onChange(""); }}
          className="text-[11px] mt-1 underline hover:opacity-70"
          style={{ color: "#2f2c79" }}
        >
          ← Buscar en la lista
        </button>
      </div>
    );
  }

  // ---- modo buscador ----
  return (
    <div ref={wrapRef} className="relative">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          onChange("");
          setOpen(true);
          setHighlight(0);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") { e.preventDefault(); setOpen(true); setHighlight((h) => Math.min(h + 1, resultados.length - 1)); }
          else if (e.key === "ArrowUp") { e.preventDefault(); setHighlight((h) => Math.max(h - 1, 0)); }
          else if (e.key === "Enter" && open && resultados[highlight]) { e.preventDefault(); seleccionar(resultados[highlight].nombre); }
          else if (e.key === "Escape") setOpen(false);
        }}
        className={inputClass}
        style={inputStyle}
        placeholder="Buscá tu escuela…"
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-controls="escuela-listbox"
        aria-autocomplete="list"
      />
      {value && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs" style={{ color: "#2f2c79" }}>✓</span>
      )}

      {open && (
        <div
          id="escuela-listbox"
          role="listbox"
          className="absolute z-10 left-0 right-0 mt-1 max-h-56 overflow-y-auto rounded-lg border bg-white shadow-lg"
          style={{ borderColor: "#e8c39e" }}
        >
          {resultados.length > 0 ? (
            resultados.map((e, i) => (
              <button
                key={e.nombre}
                type="button"
                onMouseDown={(ev) => { ev.preventDefault(); seleccionar(e.nombre); }}
                onMouseEnter={() => setHighlight(i)}
                className="w-full text-left px-3 py-2 text-xs leading-tight border-b last:border-b-0"
                style={{
                  borderColor: "#f5e1ce",
                  backgroundColor: i === highlight ? "#f5e1ce" : "transparent",
                }}
              >
                <span className="block font-semibold" style={{ color: "#000020" }}>{e.nombre}</span>
                <span className="block" style={{ color: "#2f2c79" }}>{e.localidad}</span>
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-xs" style={{ color: "#171a4a" }}>Sin resultados</div>
          )}
          <button
            type="button"
            onMouseDown={(ev) => { ev.preventDefault(); setLibre(true); setOpen(false); onChange(""); }}
            className="w-full text-left px-3 py-2 text-xs font-semibold border-t"
            style={{ borderColor: "#e8c39e", color: "#2f2c79", backgroundColor: "#fffdf9" }}
          >
            + Mi escuela no está en la lista
          </button>
        </div>
      )}
    </div>
  );
}
