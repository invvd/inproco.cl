import Contacto from "./components/sections/Contacto";
import Hero from "./components/sections/Hero";
import Nosotros from "./components/sections/Nosotros";
import Proyectos from "./components/sections/Proyectos";
import Servicios from "./components/sections/Servicios";

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
