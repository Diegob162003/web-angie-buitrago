import { useState } from "react";
import { enlaceWhatsApp } from "./lib/whatsapp";
import Icon, { type IconName } from "./components/Icons";
import Logo from "./components/Logo";
import Button from "./components/Button";
import Hero from "./sections/Hero";
import Indicadores from "./sections/Indicadores";
import SobreMi from "./sections/SobreMi";
import Calendario from "./sections/Calendario";
import Servicios from "./sections/Servicios";
import Testimonios from "./sections/Testimonios";
import Contacto from "./sections/Contacto";


function Chip({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#servicios"
      className="shrink-0 whitespace-nowrap rounded-full border border-[#0B6B1E]/45 bg-white px-4 py-2 text-xs font-bold text-[#0B6B1E] transition hover:border-[#0B6B1E] hover:bg-[#edf7ef]"
    >
      {children}
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const quickLinks = ["Consulta RUT", "Renta Persona Natural", "Renta Persona Jurídica", "Información Exógena", "Impuestos Nacionales y Distritales", "Calendario Tributario"];
  const nav = ["Inicio", "Servicios", "Sobre mí", "Recursos", "Contacto"];

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#111111]">
      <header className="relative z-50 border-b border-black/6 bg-white">
        <div className="mx-auto flex h-[86px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`} className="text-[13px] font-semibold text-[#3f443f] transition hover:text-[#0B6B1E]">
                {item}
              </a>
            ))}
          </nav>
          <Button className="hidden lg:inline-flex">Agenda tu asesoría</Button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-11 items-center justify-center rounded-xl border border-black/10 text-[#111111] lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-black/5 bg-white p-5 shadow-xl lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-[#F5F7F5]">
                  {item}
                </a>
              ))}
              <Button className="mt-3 w-full">Agenda tu asesoría</Button>
            </nav>
          </div>
        )}
      </header>

      <div className="border-b border-black/5 bg-[#F5F7F5]">
        <div className="no-scrollbar mx-auto flex max-w-[1240px] gap-2 overflow-x-auto px-5 py-3 lg:justify-center lg:px-8">
          {quickLinks.map((link) => <Chip key={link}>{link}</Chip>)}
        </div>
      </div>

      <main>
        <Hero />
        <Indicadores />
        <SobreMi />
        <Servicios />
        <Calendario />
        <Testimonios />
        <Contacto />
      </main>

      <footer className="bg-[#111111] px-5 pb-10 pt-16 text-white md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.35fr_0.7fr_0.7fr]">
            <div><Logo light /><p className="mt-6 max-w-sm text-sm leading-6 text-white/55">Asesoría contable profesional, cercana y oportuna para personas y empresas en Colombia.</p></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c582]">Contacto</p>
              <div className="mt-5 space-y-3 text-sm text-white/65">
                <p><a href="tel:+573503982745" className="transition hover:text-white">350 398 2745</a></p>
                <p><a href="mailto:contadora.buitrago09@gmail.com" className="transition hover:text-white">contadora.buitrago09@gmail.com</a></p>
                <p>Bogotá, Colombia</p>
              </div>
            </div>
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c582]">Enlaces rápidos</p><div className="mt-5 grid gap-3 text-sm text-white/65">{["Servicios", "Sobre mí", "Recursos", "Contacto"].map((link) => <a key={link} href="#" className="hover:text-white">{link}</a>)}</div></div>
          </div>
          <div className="flex flex-col gap-6 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2025 Angie Buitrago. Todos los derechos reservados.</p>
            <div className="flex items-center gap-3">
              {(["instagram", "facebook", "linkedin"] as IconName[]).map((social) => <a key={social} href="#" aria-label={social} className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white"><Icon name={social} className="size-4" /></a>)}
            </div>
            <a href="#" className="hover:text-white">Tratamiento de datos personales</a>
          </div>
        </div>
      </footer>

      <a href={enlaceWhatsApp()} aria-label="Contactar por WhatsApp" className="fixed bottom-5 left-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#18a63d] text-white shadow-[0_8px_28px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:bg-[#128c32]">
        <Icon name="whatsapp" className="size-7" />
      </a>
    </div>
  );
}
