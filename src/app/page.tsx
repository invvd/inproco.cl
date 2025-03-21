import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Nosotros from "./components/sections/Nosotros";
import Proyectos from "./components/sections/Proyectos";

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
