import Contacto from "./sections/Contacto";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import Proyectos from "./sections/Proyectos";
import Servicios from "./sections/Servicios";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero videoSrc="/videos/bg.mp4" />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Contacto />
    </main>
  );
}
