// TODO: DATOS DE PRUEBA. Reemplazar por las fechas oficiales que valide Angie
// (DIAN y Secretaría de Hacienda de Bogotá). Formato de fecha: "AAAA-MM-DD".

export type Vencimiento = {
  fecha: string;
  titulo: string;
  detalle: string;
  alcance: "Nacional" | "Distrital";
};

export const vencimientos: Vencimiento[] = [
  { fecha: "2026-11-10", titulo: "Retención en la fuente", detalle: "Declaración y pago mensual", alcance: "Nacional" },
  { fecha: "2026-11-17", titulo: "IVA bimestral", detalle: "Periodo septiembre - octubre", alcance: "Nacional" },
  { fecha: "2026-11-24", titulo: "ICA Bogotá", detalle: "Declaración bimestral", alcance: "Distrital" },
  { fecha: "2026-12-09", titulo: "Retención en la fuente", detalle: "Declaración y pago mensual", alcance: "Nacional" },
  { fecha: "2026-12-15", titulo: "Retención de ICA", detalle: "Declaración bimestral", alcance: "Distrital" },
];

// Devuelve solo las fechas que todavía no han pasado, ordenadas de la más cercana a la más lejana.
// Si le das una cantidad, devuelve solo esa cantidad.
export function proximosVencimientos(cantidad?: number) {
  const hoy = new Date().toISOString().slice(0, 10);
  const futuras = vencimientos
    .filter((v) => v.fecha >= hoy)
    .sort((a, b) => a.fecha.localeCompare(b.fecha));
  return cantidad ? futuras.slice(0, cantidad) : futuras;
}