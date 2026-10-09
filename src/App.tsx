import Hero from "./sections/Hero";
import Indicadores from "./sections/Indicadores";
import SobreMi from "./sections/SobreMi";
import Calendario from "./sections/Calendario";
import Servicios from "./sections/Servicios";
import Testimonios from "./sections/Testimonios";
import Contacto from "./sections/Contacto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFlotante from "./components/WhatsAppFlotante";
import AccesosRapidos from "./components/AccesosRapidos";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#111111]">
      <Header />
      <AccesosRapidos />
      <main>
        <Hero />
        <Indicadores />
        <SobreMi />
        <Servicios />
        <Calendario />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFlotante />
    </div>
  );
}
