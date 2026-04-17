export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000020" }} className="text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-black text-lg mb-3" style={{ color: "#f79256" }}>Compromiso Parental</h3>
            <p className="text-sm leading-relaxed font-medium" style={{ color: "#e8c39e" }}>
              Una iniciativa ciudadana para acompañar a niños, niñas y adolescentes en su relación con la tecnología.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3" style={{ color: "#7dcfb6" }}>Secciones</h3>
            <ul className="space-y-2 text-sm">
              {[["Especialistas", "#videos"], ["Noticias", "#noticias"], ["Materiales", "#materiales"]].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="font-medium hover:opacity-70 transition-opacity" style={{ color: "#fbd1a2" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3" style={{ color: "#7dcfb6" }}>Contacto</h3>
            <p className="text-sm font-medium" style={{ color: "#fbd1a2" }}>
              Provincia de Buenos Aires
            </p>
          </div>
        </div>
        <div className="pt-6 text-center text-sm font-medium" style={{ borderTop: "1px solid rgba(125,207,182,0.2)", color: "#e8c39e" }}>
          © 2026 Compromiso Parental
        </div>
      </div>
    </footer>
  );
}
