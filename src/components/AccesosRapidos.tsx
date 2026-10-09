const quickLinks = [
  "Consulta RUT",
  "Renta Persona Natural",
  "Renta Persona Jurídica",
  "Información Exógena",
  "Impuestos Nacionales y Distritales",
  "Calendario Tributario",
];

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

export default function AccesosRapidos() {
  return (
    <div className="border-b border-black/5 bg-[#F5F7F5]">
      <div className="no-scrollbar mx-auto flex max-w-[1240px] gap-2 overflow-x-auto px-5 py-3 lg:justify-center lg:px-8">
        {quickLinks.map((link) => (
          <Chip key={link}>{link}</Chip>
        ))}
      </div>
    </div>
  );
}
