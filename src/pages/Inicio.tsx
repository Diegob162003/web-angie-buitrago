import Hero from "../sections/Hero";
import Indicadores from "../sections/Indicadores";
import SobreMi from "../sections/SobreMi";
import Servicios from "../sections/Servicios";
import Calendario from "../sections/Calendario";
import Testimonios from "../sections/Testimonios";
import Contacto from "../sections/Contacto";
import Seo from "@/components/Seo";

export default function Inicio() {
  return (
    <>
      <Seo
        titulo="Angie Buitrago - Contadora Pública en Bogotá"
        descripcion="Contadora pública con 13 años de experiencia en asesoría contable y tributaria: declaración de renta, RUT, información exógena y más."
      />
      <Hero />
      <Indicadores />
      <SobreMi />
      <Servicios />
      <Calendario />
      <Testimonios />
      <Contacto />
    </>
  );
}