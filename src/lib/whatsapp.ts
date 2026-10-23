import { sitio } from "../data/sitio";

// Arma un enlace de WhatsApp con un mensaje ya escrito.
export function enlaceWhatsApp(mensaje = "Hola Angie, quiero información sobre tus servicios.") {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
