import Button from "../components/Button";
import Icon from "../components/Icons";
import { proximosVencimientos } from "../data/calendario";
import { enlaceWhatsApp } from "../lib/whatsapp";
import { DateCard } from "../sections/Calendario";

export default function CalendarioTributario() {
  const fechas = proximosVencimientos();

  return (
    <>
      <section className="bg-[#F5F7F5] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[900px]">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Calendario tributario</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5d635e]">
            Fechas de referencia de impuestos nacionales y distritales. Tu fecha exacta depende de los últimos dígitos de tu NIT; si tienes dudas, escríbeme y la revisamos.
          </p>
          {fechas.length > 0 ? (
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {fechas.map((v) => <DateCard key={`${v.fecha}-${v.titulo}`} date={v} />)}
            </div>
          ) : (
            <p className="mt-10 text-sm text-[#687069]">Pronto publicaremos las fechas del próximo periodo.</p>
          )}
        </div>
      </section>

      <section className="bg-[#0B6B1E] px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-[900px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="text-3xl font-extrabold tracking-tight">¿No sabes cuál es tu fecha?</h2>
          <Button variant="white" href={enlaceWhatsApp("Hola Angie, quiero saber mis fechas de vencimiento.")}>
            <Icon name="whatsapp" className="size-5" /> Escríbeme por WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}