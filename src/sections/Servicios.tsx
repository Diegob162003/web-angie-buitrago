 import Icon, { type IconName } from "../components/Icons"
 
const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "calculator", title: "Contabilidad integral", text: "Organización, registro y seguimiento contable para personas y empresas." },
  { icon: "document", title: "Declaración de renta", text: "Preparación y presentación para personas naturales y jurídicas, sin contratiempos." },
  { icon: "shield", title: "Impuestos nacionales", text: "Gestión de IVA, retención en la fuente e información exógena nacional." },
  { icon: "calendar", title: "Impuestos distritales", text: "Acompañamiento en ICA, impuesto predial y retención de ICA." },
  { icon: "briefcase", title: "Trámites DIAN", text: "Inscripción, actualización y gestión de trámites ante la DIAN de principio a fin." },
  { icon: "payroll", title: "Asesoría tributaria", text: "Acompañamiento permanente para cumplir cada obligación de forma correcta y oportuna." },
];

export default function Servicios() {
  return (
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
  );
}

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