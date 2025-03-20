import Header from "./components/Header";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import Proyectos from "./sections/Proyectos";

export default function Home() {
  return (
    <>
      <Header />
      <Hero videoSrc="/videos/bg.mp4" />
      <Nosotros />
      <Proyectos />
    </>
  );
}
