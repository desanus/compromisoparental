"use client";

import { useEffect, useState } from "react";

interface Video {
  id: number;
  titulo: string;
  especialista: string;
  youtubeUrl: string;
  duracion: string;
}

function getYoutubeId(url: string) {
  const m = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

export default function VideosSection() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("/api/videos").then(r => r.json()).then(d => Array.isArray(d) && setVideos(d));
  }, []);

  if (videos.length === 0) return null;

  return (
    <section id="videos" className="py-20" style={{ backgroundColor: "#f5e1ce" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-5 uppercase tracking-widest" style={{ backgroundColor: "#7dcfb6", color: "#000020" }}>
            Especialistas
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: "#000020" }}>
            Lo que dicen los expertos
          </h2>
          <div className="w-14 h-1.5 rounded-full mx-auto mb-5" style={{ backgroundColor: "#f79256" }} />
          <p className="max-w-xl mx-auto font-medium" style={{ color: "#171a4a" }}>
            Profesionales de la salud y la educación explican por qué acompañar el uso de pantallas es fundamental.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map(v => {
            const ytId = getYoutubeId(v.youtubeUrl);
            const thumbnail = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "";
            return (
              <div key={v.id} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group" style={{ backgroundColor: "#ffffff" }}>
                <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: "#e8c39e" }}>
                  {thumbnail && (
                    <img src={thumbnail} alt={v.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,32,0.25)" }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#f79256" }}>
                      <svg className="w-6 h-6 ml-1" fill="#ffffff" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded font-semibold" style={{ backgroundColor: "#000020", color: "#fbd1a2" }}>
                    {v.duracion}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold leading-snug mb-1" style={{ color: "#000020" }}>{v.titulo}</h3>
                  <p className="text-sm font-medium" style={{ color: "#2f2c79" }}>{v.especialista}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
