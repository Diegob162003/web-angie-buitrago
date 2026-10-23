import type { IconName } from "../components/Icons";

// TODO: reemplazar "descripcion" e "incluye" por los textos reales de Angie.

export type Servicio = {
  slug: string;
  icono: IconName;
  titulo: string;
  resumen: string;
  descripcion: string;
  incluye: string[];
};

export const servicios: Servicio[] = [
  {
    slug: "contabilidad",
    icono: "calculator",
    titulo: "Contabilidad integral",
    resumen: "Organización, registro y seguimiento contable para personas y empresas.",
    descripcion: "Texto provisional. Aquí va la explicación completa del servicio de contabilidad integral.",
    incluye: ["Registro contable mensual", "Estados financieros", "Conciliaciones bancarias"],
  },
  {
    slug: "declaracion-de-renta",
    icono: "document",
    titulo: "Declaración de renta",
    resumen: "Preparación y presentación para personas naturales y jurídicas, sin contratiempos.",
    descripcion: "Texto provisional. Aquí va la explicación de la declaración de renta para personas naturales y jurídicas.",
    incluye: ["Revisión de si estás obligado a declarar", "Preparación de la declaración", "Presentación ante la DIAN"],
  },
  {
    slug: "impuestos-nacionales",
    icono: "shield",
    titulo: "Impuestos nacionales",
    resumen: "Gestión de IVA, retención en la fuente e información exógena nacional.",
    descripcion: "Texto provisional. Aquí va la explicación de la gestión de impuestos nacionales.",
    incluye: ["IVA", "Retención en la fuente", "Información exógena nacional"],
  },
  {
    slug: "impuestos-distritales",
    icono: "calendar",
    titulo: "Impuestos distritales",
    resumen: "Acompañamiento en ICA, impuesto predial y retención de ICA.",
    descripcion: "Texto provisional. Aquí va la explicación de los impuestos distritales de Bogotá.",
    incluye: ["ICA", "Retención de ICA", "Impuesto predial"],
  },
  {
    slug: "tramites-dian",
    icono: "briefcase",
    titulo: "Trámites DIAN",
    resumen: "Inscripción, actualización y gestión de trámites ante la DIAN de principio a fin.",
    descripcion: "Texto provisional. Aquí va la explicación de los trámites ante la DIAN, incluido el RUT.",
    incluye: ["Inscripción y actualización del RUT", "Firma electrónica", "Solicitudes ante la DIAN"],
  },
  {
    slug: "asesoria-tributaria",
    icono: "payroll",
    titulo: "Asesoría tributaria",
    resumen: "Acompañamiento permanente para cumplir cada obligación de forma correcta y oportuna.",
    descripcion: "Texto provisional. Aquí va la explicación de la asesoría tributaria permanente.",
    incluye: ["Planeación tributaria", "Revisión de obligaciones", "Acompañamiento continuo"],
  },
];

// Busca un servicio por su slug. Si no existe, devuelve undefined (nada).
export function buscarServicio(slug: string | undefined) {
  return servicios.find((s) => s.slug === slug);
}