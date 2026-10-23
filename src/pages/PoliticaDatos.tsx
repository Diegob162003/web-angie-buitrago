import Seo from "../components/Seo";
import { sitio } from "../data/sitio";

// TODO: reemplazar por la política real de Angie (Ley 1581 de 2012).
// Este texto es solo una estructura provisional, no tiene validez legal.

export default function PoliticaDatos() {
  return (
    <>
      <Seo
        titulo="Tratamiento de datos personales | Angie Buitrago"
        descripcion="Política de tratamiento de datos personales de Angie Buitrago, Contadora Pública."
      />
      <section className="px-5 py-20 md:px-8">
        <article className="mx-auto max-w-[760px] space-y-6 text-[#3f443f]">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#111111]">Política de tratamiento de datos personales</h1>
          <p className="rounded-xl bg-[#fff6dd] p-4 text-sm">Texto provisional: aquí irá la política oficial.</p>

          <h2 className="text-xl font-bold text-[#111111]">Responsable del tratamiento</h2>
          <p>{sitio.nombreCompleto}, {sitio.profesion}. Correo: {sitio.correo}. Teléfono: {sitio.telefono}.</p>

          <h2 className="text-xl font-bold text-[#111111]">Finalidad</h2>
          <p>Pendiente.</p>

          <h2 className="text-xl font-bold text-[#111111]">Derechos del titular</h2>
          <p>Pendiente.</p>

          <h2 className="text-xl font-bold text-[#111111]">Cómo ejercer tus derechos</h2>
          <p>Pendiente.</p>
        </article>
      </section>
    </>
  );
}