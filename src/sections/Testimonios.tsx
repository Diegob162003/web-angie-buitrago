import Icon from "../components/Icons";
import { useState } from "react";

const testimonials = [
  { quote: "Angie convirtió mis obligaciones tributarias en un proceso claro y sin estrés. Siempre está atenta a cada fecha.", name: "Laura Martínez", role: "Emprendedora" },
  { quote: "Su asesoría fue muy cercana y profesional. Ahora tengo la contabilidad de mi negocio realmente organizada.", name: "Carlos Ramírez", role: "Comerciante" },
  { quote: "La recomiendo por su precisión y puntualidad. Explica cada tema de forma sencilla y genera mucha confianza.", name: "Diana Herrera", role: "Profesional independiente" },
];

export default function Testimonios() {
const [testimonial, setTestimonial] = useState(0);
  return (
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
  );
}


