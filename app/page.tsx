import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideosSection from "./components/VideosSection";
import NoticiasSection from "./components/NoticiasSection";
import MaterialesSection from "./components/MaterialesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="compromiso">
          <HeroSection />
        </div>
        <VideosSection />
        <NoticiasSection />
        <MaterialesSection />
      </main>
      <Footer />
    </>
  );
}
