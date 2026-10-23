import Icon from "./Icons";
import { enlaceWhatsApp } from "../lib/whatsapp";

export default function WhatsAppFlotante() {
  return (
      <a href={enlaceWhatsApp()} aria-label="Contactar por WhatsApp" className="fixed bottom-5 left-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#18a63d] text-white shadow-[0_8px_28px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:bg-[#128c32]">
        <Icon name="whatsapp" className="size-7" />
      </a>
  );
}
