import Button from "../components/Button";
import Icon from "../components/Icons";
import { proximosVencimientos, type Vencimiento } from "../data/calendario";

const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

export function DateCard({ date }: { date: Vencimiento }) {
  const [, mes, dia] = date.fecha.split("-");
  return (
    <article className="flex items-center gap-5 rounded-2xl border border-black/6 bg-white p-5 transition hover:border-[#0B6B1E]/30 hover:shadow-lg">
      <div className="min-w-16 border-r border-black/10 pr-5 text-center">
        <span className="block text-3xl font-extrabold leading-none text-[#0B6B1E]">{dia}</span>
        <span className="mt-1 block text-[10px] font-bold tracking-[0.18em] text-[#667068]">{meses[Number(mes) - 1]}</span>
      </div>
      <div>
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="font-bold text-[#111111]">{date.titulo}</h3>
          <span className="rounded-full bg-[#e8f3ea] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#0B6B1E]">{date.alcance}</span>
        </div>
        <p className="mt-1 text-xs text-[#727973]">{date.detalle}</p>
      </div>
    </article>
  );
}

export default function Calendario() {
  const proximas = proximosVencimientos(4);

  return (
    <section id="recursos" className="bg-[#F5F7F5] px-5 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="section-kicker justify-center">Próximas fechas</p>
          <h2 className="section-title mx-auto mt-4 max-w-2xl">Mantente al día con tus obligaciones tributarias.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#687069]">
            Fechas de referencia. Tu fecha exacta depende de los últimos dígitos de tu NIT.
          </p>
        </div>
        {proximas.length > 0 ? (
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {proximas.map((v) => <DateCard key={`${v.fecha}-${v.titulo}`} date={v} />)}
          </div>
        ) : (
          <p className="mt-12 text-center text-sm text-[#687069]">Pronto publicaremos las fechas del próximo periodo.</p>
        )}
        <div className="mt-8 text-center">
          <Button href="/calendario-tributario" variant="outline">
            Ver calendario completo <Icon name="calendar" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}