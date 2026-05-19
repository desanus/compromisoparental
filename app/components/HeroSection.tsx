"use client";

import { useState, useEffect, useRef } from "react";
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

function useCountUp(target: number | null, duration = 1600) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (target === null) return;
    if (target === 0) { setValue(0); return; }

    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return value;
}

export default function HeroSection() {
  const [count, setCount] = useState<number | null>(null);
  const [config, setConfig] = useState<Config | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/api/compromiso").then(r => r.json()).then(d => setCount(typeof d.count === "number" ? d.count : 0)).catch(() => setCount(0));
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

  const displayCount = useCountUp(count);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #000020 0%, #171a4a 50%, #2f2c79 100%)" }}
      >
        {/* Blobs + dot grid — overflow contained here, not on the section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Animated blobs */}
          <div
            className="absolute top-0 right-0"
            style={{ transform: "translate(30%, -30%)" }}
          >
            <div
              className="w-[550px] h-[550px] rounded-full animate-float"
              style={{ background: "radial-gradient(circle, rgba(0,178,202,0.28), transparent 70%)" }}
            />
          </div>
          <div
            className="absolute bottom-0 left-0"
            style={{ transform: "translate(-30%, 30%)" }}
          >
            <div
              className="w-[440px] h-[440px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(247,146,86,0.22), transparent 70%)" }}
            />
          </div>
          <div
            className="absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div
              className="w-[650px] h-[650px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(125,207,182,0.1), transparent 70%)" }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16 gap-10">

            {/* Left: text */}
            <div className="flex-1 text-white">

              {/* Title */}
              <h1
                className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5 tracking-tight"
                style={{ animationDelay: "120ms" }}
              >
                {cfg.heroTitle}
                <span className="block mt-2" style={{ color: "#f79256" }}>
                  {cfg.heroSubtitle}
                </span>
              </h1>

              {/* Description */}
              <p
                className="animate-fade-in text-lg md:text-xl leading-relaxed max-w-lg"
                style={{ color: "#fbd1a2", animationDelay: "240ms" }}
              >
                {cfg.heroDescription}
              </p>
            </div>

            {/* Right: counter + CTA */}
            <div
              className="animate-fade-in flex-shrink-0 flex flex-col items-center md:items-end gap-5"
              style={{ animationDelay: "240ms" }}
            >
              <div
                className="counter-pulse rounded-3xl px-12 py-10 text-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(16px)",
                  minWidth: "280px",
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: "#7dcfb6",
                      boxShadow: "0 0 6px rgba(125,207,182,0.8)",
                      animation: "pulse 1.8s ease-in-out infinite",
                    }}
                  />
                  <p
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "#7dcfb6" }}
                  >
                    {cfg.counterLabel}
                  </p>
                </div>

                <p
                  className="text-8xl md:text-9xl font-black tracking-tight leading-none"
                  style={{ color: "#ffffff", textShadow: "0 0 40px rgba(255,255,255,0.15)" }}
                >
                  {count === null ? "—" : displayCount.toLocaleString("es-AR")}
                </p>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <div className="h-px w-10 rounded-full opacity-35" style={{ backgroundColor: "#fbd1a2" }} />
                  <p className="text-sm font-semibold" style={{ color: "#fbd1a2" }}>
                    {cfg.counterSuffix}
                  </p>
                  <div className="h-px w-10 rounded-full opacity-35" style={{ backgroundColor: "#fbd1a2" }} />
                </div>
              </div>

              {/* CTA below counter */}
              <button
                data-hero-btn
                onClick={() => setShowModal(true)}
                className="group font-black text-xl px-14 py-4 rounded-2xl shadow-xl transition-all duration-200 active:scale-95 hover:opacity-90 hover:shadow-2xl w-full"
                style={{
                  backgroundColor: "#f79256",
                  color: "#000020",
                  boxShadow: "0 8px 32px rgba(247,146,86,0.35)",
                }}
              >
                {cfg.ctaText}
                <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* Wave */}
        <div className="absolute left-0 right-0" style={{ bottom: "-2px" }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
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
