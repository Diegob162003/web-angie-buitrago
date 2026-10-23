import { Outlet } from "react-router";
import Header from "./Header";
import AccesosRapidos from "./AccesosRapidos";
import Footer from "./Footer";
import WhatsAppFlotante from "./WhatsAppFlotante";
import ControlScroll from "./ControlScroll";

export default function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#111111]">
      <ControlScroll />
      <Header />
      <AccesosRapidos />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFlotante />
    </div>
  );
}