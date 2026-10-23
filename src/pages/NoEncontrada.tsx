import Button from "../components/Button";
import Seo from "../components/Seo";

export default function NoEncontrada() {
  return (
    <>
      <Seo titulo="Página no encontrada | Angie Buitrago" descripcion="La página que buscas no existe." />
      <section className="px-5 py-32 text-center md:px-8">
        <p className="text-6xl font-extrabold text-[#0B6B1E]">404</p>
        <h1 className="mt-4 text-2xl font-bold">Esta página no existe</h1>
        <p className="mt-3 text-sm text-[#687069]">
          Puede que el enlace esté mal escrito o que la página se haya movido.
        </p>
        <Button href="/" className="mt-8">Volver al inicio</Button>
      </section>
    </>
  );
}