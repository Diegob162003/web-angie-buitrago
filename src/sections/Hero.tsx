import Button from "../components/Button";
import Icon from "../components/Icons";

export default function Hero() {
  return (
    <section id="inicio" className="relative mx-auto max-w-[1440px] p-3 md:p-5">
          <div className="relative min-h-[630px] overflow-hidden rounded-[24px] bg-[#e8eee8] md:min-h-[680px]">
            <img
              src="https://images.unsplash.com/photo-1758876201660-103984519266?auto=format&fit=crop&w=1800&q=86"
              alt="Profesional revisando documentos contables en su oficina"
              className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,249,247,0.98)_0%,rgba(247,249,247,0.90)_38%,rgba(247,249,247,0.15)_72%),linear-gradient(0deg,rgba(11,107,30,0.62)_0%,transparent_35%)]" />
            <div className="relative z-10 mx-auto flex min-h-[630px] max-w-[1200px] items-start px-5 py-16 md:min-h-[680px] md:items-center md:px-10 lg:px-12">
              <div className="max-w-[670px]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#0B6B1E]" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B6B1E] md:text-sm">Angie Julieth Buitrago Muñoz · Contadora Pública</p>
                </div>
                <h1 className="text-[44px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#111111] md:text-[66px] lg:text-[76px]">
                  Tu contabilidad e impuestos en buenas manos
                </h1>
                <div className="mt-7 inline-flex rounded-xl bg-[#0B6B1E] px-5 py-3 text-sm font-semibold text-white shadow-lg md:text-base">
                  13 años de experiencia en asesoría contable y tributaria, nacional y distrital
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/#contacto">Habla conmigo <Icon name="arrow" className="size-4" /></Button>
                  <Button href="/#servicios" variant="outline">Ver servicios</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}