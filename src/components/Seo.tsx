import { useEffect } from "react";

// Cambia el título de la pestaña y la descripción para Google en cada página.
export default function Seo({ titulo, descripcion }: { titulo: string; descripcion: string }) {
  useEffect(() => {
    document.title = titulo;
    document.querySelector('meta[name="description"]')?.setAttribute("content", descripcion);
  }, [titulo, descripcion]);

  return null;
}