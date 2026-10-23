import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ControlScroll() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // La dirección trae una sección (ej. "/#contacto"): bajamos hasta ella
      const id = hash.slice(1);
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timer);
    }
    // No trae sección: subimos al principio de la página
    window.scrollTo({ top: 0 });
  }, [pathname, hash, key]);

  return null;
}