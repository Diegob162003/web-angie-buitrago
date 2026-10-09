import Icon, { type IconName } from "../components/Icons"
import angiePhoto from "../assets/angie-buitrago.jpg";


export default function SobreMi() {
  return (
    <section id="sobre-mi" className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-32">
              <div className="relative mx-auto w-full max-w-[470px]">
                <div className="absolute -bottom-5 -left-5 h-3/4 w-3/4 rounded-3xl bg-[#0B6B1E]" />
                <img
                  src={angiePhoto}
                  alt="Angie Julieth Buitrago Muñoz en su oficina"
                  className="relative z-10 aspect-[4/5] w-full rounded-3xl object-cover object-center shadow-2xl"
                />
                <div className="absolute -right-4 top-8 z-20 rounded-xl bg-white px-5 py-4 shadow-xl">
                  <p className="text-2xl font-extrabold text-[#0B6B1E]">13+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#555d56]">años de experiencia</p>
                </div>
              </div>
              <div>
                <p className="section-kicker">Sobre mí</p>
                <h2 className="section-title mt-4">Experiencia integral para acompañarte con confianza.</h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#606761]">
                  Soy contadora pública con 13 años de experiencia acompañando exitosamente a grandes, medianas y pequeñas empresas de diferentes sectores: salud, transporte, alimentos, servicios, comercialización, entre otros.
                </p>
                <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#0B6B1E]">
                  Mi objetivo es que cumplas oportunamente con tus obligaciones, gracias a una previa planeación y organización tributaria.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {["Compromiso", "Confidencialidad", "Puntualidad"].map((value) => (
                    <div key={value} className="flex items-center gap-3 font-bold">
                      <span className="flex size-7 items-center justify-center rounded-full bg-[#e6f3e8] text-[#0B6B1E]"><Icon name="check" className="size-4" /></span>
                      <span className="text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
    </section>
  );
}