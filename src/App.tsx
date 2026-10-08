import { useState } from "react";
import angiePhoto from "./assets/angie-buitrago.jpg";
import { enlaceWhatsApp } from "./lib/whatsapp";
import Icon, { type IconName } from "./components/Icons";
import Logo from "./components/Logo";
import Button from "./components/Button";



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

const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "calculator", title: "Contabilidad integral", text: "Organización, registro y seguimiento contable para personas y empresas." },
  { icon: "document", title: "Declaración de renta", text: "Preparación y presentación para personas naturales y jurídicas, sin contratiempos." },
  { icon: "shield", title: "Impuestos nacionales", text: "Gestión de IVA, retención en la fuente e información exógena nacional." },
  { icon: "calendar", title: "Impuestos distritales", text: "Acompañamiento en ICA, impuesto predial y retención de ICA." },
  { icon: "briefcase", title: "Trámites DIAN", text: "Inscripción, actualización y gestión de trámites ante la DIAN de principio a fin." },
  { icon: "payroll", title: "Asesoría tributaria", text: "Acompañamiento permanente para cumplir cada obligación de forma correcta y oportuna." },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="group flex min-h-[260px] flex-col rounded-2xl border border-black/7 bg-white p-7 shadow-[0_12px_35px_rgba(17,17,17,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#0B6B1E]/30 hover:shadow-[0_18px_45px_rgba(11,107,30,0.10)]">
      <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#edf7ef] text-[#0B6B1E] transition group-hover:bg-[#0B6B1E] group-hover:text-white">
        <Icon name={service.icon} className="size-6" />
      </div>
      <h3 className="text-xl font-bold tracking-tight text-[#111111]">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5d635e]">{service.text}</p>
      <a href="#contacto" className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#0B6B1E]">
        Saber más <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
      </a>
    </article>
  );
}

const dates = [
  { day: "12", month: "AGO", title: "Retención en la fuente", detail: "Declaración y pago mensual", scope: "Nacional" },
  { day: "19", month: "AGO", title: "IVA bimestral", detail: "Periodo julio — agosto", scope: "Nacional" },
  { day: "26", month: "AGO", title: "ICA Bogotá", detail: "Declaración bimestral", scope: "Distrital" },
  { day: "05", month: "SEP", title: "Información exógena", detail: "Reporte de información", scope: "Distrital" },
];

function DateCard({ date }: { date: (typeof dates)[number] }) {
  return (
    <article className="flex items-center gap-5 rounded-2xl border border-black/6 bg-white p-5 transition hover:border-[#0B6B1E]/30 hover:shadow-lg">
      <div className="min-w-16 border-r border-black/10 pr-5 text-center">
        <span className="block text-3xl font-extrabold leading-none text-[#0B6B1E]">{date.day}</span>
        <span className="mt-1 block text-[10px] font-bold tracking-[0.18em] text-[#667068]">{date.month}</span>
      </div>
      <div>
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="font-bold text-[#111111]">{date.title}</h3>
          <span className="rounded-full bg-[#e8f3ea] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#0B6B1E]">{date.scope}</span>
        </div>
        <p className="mt-1 text-xs text-[#727973]">{date.detail}</p>
      </div>
    </article>
  );
}

const testimonials = [
  { quote: "Angie convirtió mis obligaciones tributarias en un proceso claro y sin estrés. Siempre está atenta a cada fecha.", name: "Laura Martínez", role: "Emprendedora" },
  { quote: "Su asesoría fue muy cercana y profesional. Ahora tengo la contabilidad de mi negocio realmente organizada.", name: "Carlos Ramírez", role: "Comerciante" },
  { quote: "La recomiendo por su precisión y puntualidad. Explica cada tema de forma sencilla y genera mucha confianza.", name: "Diana Herrera", role: "Profesional independiente" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const quickLinks = ["Consulta RUT", "Renta Persona Natural", "Renta Persona Jurídica", "Información Exógena", "Impuestos Nacionales y Distritales", "Calendario Tributario"];
  const nav = ["Inicio", "Servicios", "Sobre mí", "Recursos", "Contacto"];

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#111111]">
      <header className="relative z-50 border-b border-black/6 bg-white">
        <div className="mx-auto flex h-[86px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`} className="text-[13px] font-semibold text-[#3f443f] transition hover:text-[#0B6B1E]">
                {item}
              </a>
            ))}
          </nav>
          <Button className="hidden lg:inline-flex">Agenda tu asesoría</Button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-11 items-center justify-center rounded-xl border border-black/10 text-[#111111] lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-black/5 bg-white p-5 shadow-xl lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-[#F5F7F5]">
                  {item}
                </a>
              ))}
              <Button className="mt-3 w-full">Agenda tu asesoría</Button>
            </nav>
          </div>
        )}
      </header>

      <div className="border-b border-black/5 bg-[#F5F7F5]">
        <div className="no-scrollbar mx-auto flex max-w-[1240px] gap-2 overflow-x-auto px-5 py-3 lg:justify-center lg:px-8">
          {quickLinks.map((link) => <Chip key={link}>{link}</Chip>)}
        </div>
      </div>

      <main>
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
                  <Button href="#contacto">Habla conmigo <Icon name="arrow" className="size-4" /></Button>
                  <Button href="#servicios" variant="outline">Ver servicios</Button>
                </div>
              </div>
            </div>
            <button type="button" aria-label="Anterior" className="absolute left-5 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[#111111] shadow-sm backdrop-blur transition hover:bg-white md:flex">
              <Icon name="chevron" className="size-5 rotate-180" />
            </button>
            <button type="button" aria-label="Siguiente" className="absolute right-5 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[#111111] shadow-sm backdrop-blur transition hover:bg-white md:flex">
              <Icon name="chevron" className="size-5" />
            </button>
          </div>
        </section>

        <section aria-label="Indicadores de confianza" className="border-y border-black/6 bg-white px-5 md:px-8">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 divide-x divide-y divide-black/8 md:grid-cols-4 md:divide-y-0">
            {[
              { value: "13+", label: "años de experiencia" },
              { icon: "document" as IconName, label: "Impuestos nacionales" },
              { icon: "calendar" as IconName, label: "Impuestos distritales" },
              { icon: "calculator" as IconName, label: "Asesoría contable integral" },
            ].map((item) => (
              <div key={item.label} className="flex min-h-36 flex-col items-center justify-center px-4 py-7 text-center">
                {item.value ? (
                  <span className="text-4xl font-extrabold tracking-tight text-[#0B6B1E]">{item.value}</span>
                ) : (
                  <Icon name={item.icon!} className="size-9 text-[#0B6B1E]" />
                )}
                <p className="mt-3 max-w-36 text-xs font-bold leading-5 text-[#464c47]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section id="servicios" className="bg-white px-5 py-24 md:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><p className="section-kicker">Servicios</p><h2 className="section-title mt-4 max-w-2xl">Soluciones contables y tributarias para cada necesidad.</h2></div>
              <p className="max-w-sm text-sm leading-6 text-[#687069]">Acompañamiento integral para cumplir tus obligaciones nacionales y distritales.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => <ServiceCard key={service.title} service={service} />)}
            </div>
          </div>
        </section>

        <section id="recursos" className="bg-[#F5F7F5] px-5 py-24 md:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center"><p className="section-kicker justify-center">Próximas fechas</p><h2 className="section-title mx-auto mt-4 max-w-2xl">Mantente al día con tus obligaciones tributarias.</h2></div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {dates.map((date) => <DateCard key={`${date.day}-${date.title}`} date={date} />)}
            </div>
            <div className="mt-8 text-center"><Button variant="outline">Ver calendario completo <Icon name="calendar" className="size-4" /></Button></div>
          </div>
        </section>

        <section className="bg-[#0d2513] px-5 py-24 text-white md:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#79c886]">Testimonios</p><h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight md:text-5xl">La tranquilidad de sentirse bien acompañado.</h2></div>
              <div className="hidden gap-2 md:flex">
                <button type="button" onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)} aria-label="Testimonio anterior" className="flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"><Icon name="chevron" className="size-5 rotate-180" /></button>
                <button type="button" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Testimonio siguiente" className="flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"><Icon name="chevron" className="size-5" /></button>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <article key={item.name} className={`rounded-2xl border p-7 transition ${index === testimonial ? "border-[#79c886] bg-white text-[#111111]" : "border-white/10 bg-white/5 text-white/70"}`}>
                  <p className="font-serif text-5xl leading-7 text-[#49a95b]">“</p>
                  <p className="mt-5 min-h-24 text-sm leading-6">{item.quote}</p>
                  <div className="mt-6 border-t border-current/10 pt-5"><p className="font-bold">{item.name}</p><p className="mt-1 text-xs opacity-60">{item.role}</p></div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex justify-center gap-2 md:hidden">
              {testimonials.map((_, index) => <button key={index} onClick={() => setTestimonial(index)} aria-label={`Ver testimonio ${index + 1}`} className={`h-2 rounded-full transition-all ${testimonial === index ? "w-7 bg-[#79c886]" : "w-2 bg-white/30"}`} />)}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#0B6B1E] px-5 py-16 text-white md:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">Conversemos</p><h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">¿Necesitas ayuda con tu contabilidad o tus impuestos?</h2></div>
            <Button variant="white" href={enlaceWhatsApp()} className="shrink-0"><Icon name="whatsapp" className="size-5" /> Escríbeme por WhatsApp</Button>
          </div>
        </section>
      </main>

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
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c582]">Enlaces rápidos</p><div className="mt-5 grid gap-3 text-sm text-white/65">{["Servicios", "Sobre mí", "Recursos", "Contacto"].map((link) => <a key={link} href="#" className="hover:text-white">{link}</a>)}</div></div>
          </div>
          <div className="flex flex-col gap-6 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2025 Angie Buitrago. Todos los derechos reservados.</p>
            <div className="flex items-center gap-3">
              {(["instagram", "facebook", "linkedin"] as IconName[]).map((social) => <a key={social} href="#" aria-label={social} className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white"><Icon name={social} className="size-4" /></a>)}
            </div>
            <a href="#" className="hover:text-white">Tratamiento de datos personales</a>
          </div>
        </div>
      </footer>

      <a href={enlaceWhatsApp()} aria-label="Contactar por WhatsApp" className="fixed bottom-5 left-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#18a63d] text-white shadow-[0_8px_28px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:bg-[#128c32]">
        <Icon name="whatsapp" className="size-7" />
      </a>
    </div>
  );
}
