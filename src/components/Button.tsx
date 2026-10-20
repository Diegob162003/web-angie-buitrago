   import SmartLink from "./SmartLink";

export default function Button({
  children,
    href = "/#contacto",
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "white";
  className?: string;
}) {
  const styles = {
    solid: "bg-[#0B6B1E] text-white border-[#0B6B1E] hover:bg-[#074f16] hover:border-[#074f16]",
    outline: "bg-white/80 text-[#0B6B1E] border-[#0B6B1E] hover:bg-[#edf7ef]",
    white: "bg-white text-[#0B6B1E] border-white hover:bg-[#eef7ef]",
  };
return (
  <SmartLink
    to={href}
    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-6 text-sm font-bold transition duration-200 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
  >
    {children}
  </SmartLink>
);
}

// Menú principal y enlaces rápidos del footer
export const navegacion = [
  { texto: "Inicio", ruta: "/" },
  { texto: "Servicios", ruta: "/#servicios" },
  { texto: "Sobre mí", ruta: "/#sobre-mi" },
  { texto: "Recursos", ruta: "/#recursos" },
  { texto: "Contacto", ruta: "/#contacto" },
];

// Botones redondos debajo del menú
export const accesosRapidos = [
  { texto: "Consulta RUT", ruta: "/servicios/tramites-dian" },
  { texto: "Renta Persona Natural", ruta: "/servicios/declaracion-de-renta" },
  { texto: "Renta Persona Jurídica", ruta: "/servicios/declaracion-de-renta" },
  { texto: "Información Exógena", ruta: "/servicios/impuestos-nacionales" },
  { texto: "Impuestos Distritales", ruta: "/servicios/impuestos-distritales" },
  { texto: "Calendario Tributario", ruta: "/calendario-tributario" },
];