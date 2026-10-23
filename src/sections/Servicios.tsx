import { Link } from "react-router";
import Icon from "../components/Icons";
import { servicios, type Servicio } from "../data/servicios";

function ServiceCard({ service }: { service: Servicio }) {
  return (
    <article className="group flex min-h-[260px] flex-col rounded-2xl border border-black/7 bg-white p-7 shadow-[0_12px_35px_rgba(17,17,17,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#0B6B1E]/30 hover:shadow-[0_18px_45px_rgba(11,107,30,0.10)]">
      <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#edf7ef] text-[#0B6B1E] transition group-hover:bg-[#0B6B1E] group-hover:text-white">
        <Icon name={service.icono} className="size-6" />
      </div>
      <h3 className="text-xl font-bold tracking-tight text-[#111111]">{service.titulo}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5d635e]">{service.resumen}</p>
      <Link to={`/servicios/${service.slug}`} className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#0B6B1E]">
        Saber más <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white px-5 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Servicios</p>
            <h2 className="section-title mt-4 max-w-2xl">Soluciones contables y tributarias para cada necesidad.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#687069]">Acompañamiento integral para cumplir tus obligaciones nacionales y distritales.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </div>
    </section>
  );
}