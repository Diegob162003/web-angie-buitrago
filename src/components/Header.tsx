// ───── ZONA 1: los import (qué piezas necesita este archivo) ─────
import { useState } from "react";
import Button from "./Button";
import Icon from "./Icons";
import Logo from "./Logo";

// ───── ZONA 2: los datos (la lista del menú, cortada de App.tsx) ─────
const nav = ["Inicio", "Servicios", "Sobre mí", "Recursos", "Contacto"];

// ───── ZONA 3: la función (el componente) ─────
export default function Header() {
  // La memoria del menú, cortada de App.tsx
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // El bloque <header> completo, cortado de App.tsx
    <header className="relative z-50 border-b border-black/6 bg-white">
      <div className="mx-auto flex h-[86px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegación principal"
        >
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item
                .toLowerCase()
                .replace(" ", "-")
                .replace("í", "i")}`}
              className="text-[13px] font-semibold text-[#3f443f] transition hover:text-[#0B6B1E]"
            >
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
              <a
                key={item}
                href={`#${item
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace("í", "i")}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-[#F5F7F5]"
              >
                {item}
              </a>
            ))}
            <Button className="mt-3 w-full">Agenda tu asesoría</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
