import Hero from "../sections/Hero";
import Indicadores from "../sections/Indicadores";
import SobreMi from "../sections/SobreMi";
import Servicios from "../sections/Servicios";
import Calendario from "../sections/Calendario";
import Testimonios from "../sections/Testimonios";
import Contacto from "../sections/Contacto";

export default function Inicio() {
  return (
    <>
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