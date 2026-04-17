"use client";

import { useState, useEffect } from "react";
import FormModal from "./FormModal";

interface Config {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBadge: string;
  counterLabel: string;
  counterSuffix: string;
  ctaText: string;
  ctaSubtext: string;
}

export default function HeroSection() {
  const [count, setCount] = useState<number | null>(null);
  const [config, setConfig] = useState<Config | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/api/compromiso").then(r => r.json()).then(d => setCount(d.count)).catch(() => setCount(0));
    fetch("/api/config").then(r => r.json()).then(setConfig);
  }, []);

  const cfg = config ?? {
    heroTitle: "Compromiso parental:",
    heroSubtitle: "infancia sin pantallas",
    heroDescription: "Sumá tu compromiso para acompañar a niños, niñas y adolescentes en su relación con la tecnología.",
    heroBadge: "Compromiso ciudadano",
    counterLabel: "Ya somos",
    counterSuffix: "familias comprometidas",
    ctaText: "Me sumo",
    ctaSubtext: "Es gratis y solo lleva 2 minutos",
  };

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000020 0%, #171a4a 50%, #2f2c79 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #00b2ca, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f79256, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7dcfb6, transparent 70%)", transform: "translate(-50%, -50%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white py-32">
          <div
            className="inline-block border rounded-full px-4 py-1 text-sm font-medium mb-8"
            style={{ backgroundColor: "rgba(0,178,202,0.15)", borderColor: "rgba(0,178,202,0.3)", color: "#7dcfb6" }}
          >
            {cfg.heroBadge}
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
            {cfg.heroTitle}
            <span className="block mt-1" style={{ color: "#f79256" }}>{cfg.heroSubtitle}</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: "#fbd1a2" }}>
            {cfg.heroDescription}
          </p>

          <div
            className="inline-block rounded-2xl px-10 py-6 mb-12"
            style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <p className="text-sm font-medium mb-1" style={{ color: "#7dcfb6" }}>{cfg.counterLabel}</p>
            <p className="text-6xl md:text-7xl font-black" style={{ color: "#ffffff" }}>
              {count === null ? "…" : count.toLocaleString("es-AR")}
            </p>
            <p className="text-sm mt-1 font-medium" style={{ color: "#fbd1a2" }}>{cfg.counterSuffix}</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              data-hero-btn
              onClick={() => setShowModal(true)}
              className="font-bold text-xl px-14 py-4 rounded-2xl shadow-xl transition-all duration-200 active:scale-95 hover:opacity-90"
              style={{ backgroundColor: "#f79256", color: "#000020" }}
            >
              {cfg.ctaText}
            </button>
            <p className="text-sm font-medium" style={{ color: "#7dcfb6" }}>{cfg.ctaSubtext}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f5e1ce" />
          </svg>
        </div>
      </section>

      {showModal && (
        <FormModal onClose={() => setShowModal(false)} onSuccess={(n) => setCount(n)} />
      )}
    </>
  );
}
