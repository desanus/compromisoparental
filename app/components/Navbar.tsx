"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "El compromiso", href: "#compromiso" },
    { label: "Especialistas", href: "#videos" },
    { label: "Noticias", href: "#noticias" },
    { label: "Materiales", href: "#materiales" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={scrolled
        ? { backgroundColor: "#ffffff", boxShadow: "0 2px 16px rgba(0,0,32,0.10)" }
        : { backgroundColor: "transparent" }
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-black text-lg tracking-tight transition-colors"
          style={{ color: scrolled ? "#000020" : "#ffffff" }}
        >
          Compromiso Parental
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: scrolled ? "#171a4a" : "#fbd1a2" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#compromiso"
            onClick={e => {
              e.preventDefault();
              document.querySelector<HTMLButtonElement>("button[data-hero-btn]")?.click();
            }}
            className="text-sm font-bold px-5 py-2 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#f79256", color: "#000020" }}
          >
            Me sumo
          </a>
        </div>

        <button
          className="md:hidden transition-colors"
          style={{ color: scrolled ? "#000020" : "#ffffff" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,32,0.12)" }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
              style={{ color: "#171a4a" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="font-bold text-center px-5 py-2.5 rounded-xl"
            style={{ backgroundColor: "#f79256", color: "#000020" }}
          >
            Me sumo
          </a>
        </div>
      )}
    </nav>
  );
}
