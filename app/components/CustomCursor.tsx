"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovered(!!el?.closest("a, button, [role='button'], input, select, textarea, label"));
    };
    const onLeave = () => setVisible(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: "-100px",
        top: "-100px",
        width: hovered ? "44px" : "10px",
        height: hovered ? "44px" : "10px",
        borderRadius: "50%",
        backgroundColor: hovered ? "rgba(232,195,158,0.12)" : "#e8c39e",
        border: hovered ? "2px solid #e8c39e" : "2px solid transparent",
        transform: "translate(-50%, -50%)",
        transition: "width 0.22s ease, height 0.22s ease, background-color 0.22s ease, border-color 0.22s ease, opacity 0.2s ease",
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
