"use client";

import { useEffect, useState } from "react";
import FormModal from "./FormModal";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        aria-label="Me sumo al compromiso"
        className="fixed bottom-6 right-6 z-50 font-black text-base px-6 py-3.5 rounded-2xl hover:opacity-90 active:scale-95"
        style={{
          backgroundColor: "#f79256",
          color: "#000020",
          boxShadow: "0 8px 32px rgba(247,146,86,0.5)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        Me sumo →
      </button>

      {showModal && (
        <FormModal onClose={() => setShowModal(false)} onSuccess={() => setShowModal(false)} />
      )}
    </>
  );
}
