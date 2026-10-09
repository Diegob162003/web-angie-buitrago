import Button from "../components/Button";
import Icon from "../components/Icons";
import { enlaceWhatsApp } from "../lib/whatsapp";

export default function Contacto() {
  return (
        <section id="contacto" className="bg-[#0B6B1E] px-5 py-16 text-white md:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">Conversemos</p><h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">¿Necesitas ayuda con tu contabilidad o tus impuestos?</h2></div>
            <Button variant="white" href={enlaceWhatsApp()} className="shrink-0"><Icon name="whatsapp" className="size-5" /> Escríbeme por WhatsApp</Button>
          </div>
        </section>
  );
}