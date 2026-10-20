import Logo from "./Logo";
import Icon, { type IconName } from "./Icons";
import SmartLink from "./SmartLink";
import { navegacion } from "../data/sitio";

export default function Footer() {
  return (
      <footer className="bg-[#111111] px-5 pb-10 pt-16 text-white md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.35fr_0.7fr_0.7fr]">
            <div><Logo light /><p className="mt-6 max-w-sm text-sm leading-6 text-white/55">Asesoría contable profesional, cercana y oportuna para personas y empresas en Colombia.</p></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c582]">Contacto</p>
              <div className="mt-5 space-y-3 text-sm text-white/65">
                <p><a href="tel:+573503982745" className="transition hover:text-white">350 398 2745</a></p>
                <p><a href="mailto:contadora.buitrago09@gmail.com" className="transition hover:text-white">contadora.buitrago09@gmail.com</a></p>
                <p>Bogotá, Colombia</p>
              </div>
            </div>
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c582]">Enlaces rápidos</p><div className="mt-5 grid gap-3 text-sm text-white/65">{navegacion.map((link) => (
  <SmartLink key={link.ruta} to={link.ruta} className="hover:text-white">{link.texto}</SmartLink>
))}</div></div>
          </div>
          <div className="flex flex-col gap-6 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()}</p>
            <div className="flex items-center gap-3">
              {(["instagram", "facebook", "linkedin"] as IconName[]).map((social) => <a key={social} href="#" aria-label={social} className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white"><Icon name={social} className="size-4" /></a>)}
            </div>
            <SmartLink to="/politica-de-datos" className="hover:text-white">Tratamiento de datos personales</SmartLink>
          </div>
        </div>
      </footer>
  );
}
