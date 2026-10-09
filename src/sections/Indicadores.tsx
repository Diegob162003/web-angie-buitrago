import Icon, { type IconName } from "../components/Icons"

export default function Indicadores() {
  return (
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
  );
}