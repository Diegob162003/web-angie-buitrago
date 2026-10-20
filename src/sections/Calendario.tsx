import Icon, { type IconName } from "../components/Icons"
import Button from "../components/Button"

export default function Calendario() {
  return (
        <section id="recursos" className="bg-[#F5F7F5] px-5 py-24 md:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center"><p className="section-kicker justify-center">Próximas fechas</p><h2 className="section-title mx-auto mt-4 max-w-2xl">Mantente al día con tus obligaciones tributarias.</h2></div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {dates.map((date) => <DateCard key={`${date.day}-${date.title}`} date={date} />)}
            </div>
            <div className="mt-8 text-center"><Button href="/calendario-tributario" variant="outline">Ver calendario completo <Icon name="calendar" className="size-4" /></Button></div>
          </div>
        </section>
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
