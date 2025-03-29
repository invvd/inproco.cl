import Contacto from "./sections/Contacto";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import Proyectos from "./sections/Proyectos";
import Servicios from "./sections/Servicios";

export default function Home() {
  return (
    <>
      <Hero videoSrc="/videos/bg.mp4" />
      <Nosotros />
      <Proyectos />
      <Servicios />
      <Contacto />
    </>
  );
}
