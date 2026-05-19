import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideosSection from "./components/VideosSection";
import NoticiasSection from "./components/NoticiasSection";
import MaterialesSection from "./components/MaterialesSection";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";

function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div aria-hidden style={{ backgroundColor: to, lineHeight: 0, marginTop: "-1px" }}>
      <svg viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
        <path d="M0,28 C360,55 1080,0 1440,28 L1440,0 L0,0 Z" fill={from} />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="compromiso">
          <HeroSection />
        </div>
        <VideosSection />
        <WaveDivider from="#f5e1ce" to="#ffffff" />
        <NoticiasSection />
        <WaveDivider from="#ffffff" to="#f5e1ce" />
        <MaterialesSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
