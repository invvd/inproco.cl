import Header from "./components/Header";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";

export default function Home() {
  return (
    <>
      <Header />
      <Hero videoSrc="/videos/bg.mp4" />
      <Nosotros />
    </>
  );
}
