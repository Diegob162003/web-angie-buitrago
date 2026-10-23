import { Link, useParams } from "react-router";
import Button from "../components/Button";
import Icon from "../components/Icons";
import { buscarServicio, servicios } from "../data/servicios";
import { enlaceWhatsApp } from "../lib/whatsapp";
import NoEncontrada from "./NoEncontrada";

export default function ServicioDetalle() {
  // 1. Leer el slug de la dirección: /servicios/declaracion-de-renta → "declaracion-de-renta"
  const { slug } = useParams();

  // 2. Buscar el servicio que tiene ese slug
  const servicio = buscarServicio(slug);

  // 3. Si no existe (alguien escribió mal la dirección), mostrar el 404
  if (!servicio) return <NoEncontrada />;

  // 4. Los demás servicios, para mostrarlos abajo
  const otros = servicios.filter((s) => s.slug !== servicio.slug);

  return (
    <>
      {/* Encabezado */}
      <section className="bg-[#F5F7F5] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[900px]">
          <Link to="/#servicios" className="inline-flex items-center gap-2 text-sm font-bold text-[#0B6B1E]">
            <Icon name="chevron" className="size-4 rotate-180" /> Todos los servicios
          </Link>
          <div className="mt-8 flex size-14 items-center justify-center rounded-xl bg-[#0B6B1E] text-white">
            <Icon name={servicio.icono} className="size-7" />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">{servicio.titulo}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d635e]">{servicio.resumen}</p>
        </div>
      </section>

      {/* Descripción y qué incluye */}
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-[900px] gap-12 md:grid-cols-[1.4fr_1fr]">
          <p className="text-base leading-7 text-[#3f443f]">{servicio.descripcion}</p>
          <div>
            <h2 className="text-lg font-bold">¿Qué incluye?</h2>
            <ul className="mt-4 space-y-3">
              {servicio.incluye.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e6f3e8] text-[#0B6B1E]">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Llamado a WhatsApp con mensaje según el servicio */}
      <section className="bg-[#0B6B1E] px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-[900px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="text-3xl font-extrabold tracking-tight">¿Te ayudo con {servicio.titulo.toLowerCase()}?</h2>
          <Button variant="white" href={enlaceWhatsApp(`Hola Angie, quiero información sobre ${servicio.titulo.toLowerCase()}.`)}>
            <Icon name="whatsapp" className="size-5" /> Escríbeme por WhatsApp
          </Button>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-lg font-bold">Otros servicios</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {otros.map((s) => (
              <Link key={s.slug} to={`/servicios/${s.slug}`} className="rounded-full border border-[#0B6B1E]/45 px-4 py-2 text-xs font-bold text-[#0B6B1E] hover:bg-[#edf7ef]">
                {s.titulo}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}