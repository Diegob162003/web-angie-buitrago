// Datos generales de la página.
// Si Angie cambia de número, correo o redes, solo se edita este archivo.

export const sitio = {
  nombre: "Angie Buitrago",
  nombreCompleto: "Angie Julieth Buitrago Muñoz",
  profesion: "Contadora Pública",
  ciudad: "Bogotá, Colombia",
  aniosExperiencia: 13, // TODO: confirmar con Angie

  telefono: "350 398 2745",
  telefonoLink: "+573503982745",
  whatsapp: "573503982745", // sin +, sin espacios
  correo: "contadora.buitrago09@gmail.com",

  // Deja la URL vacía ("") si Angie no tiene esa red.
  redes: {
    instagram: "", // TODO: pedir a Angie
    facebook: "", // TODO: pedir a Angie
    linkedin: "", // TODO: pedir a Angie
  },
};


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
