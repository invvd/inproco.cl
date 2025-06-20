import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
const monument = localFont({
  src: "../fonts/Monument.woff2",
});
// PENDIENTE: Reemplazar fotos

function Proyectos() {
  return (
    <section
      id="proyectos"
      className="text-neutral-900 bg-neutral-200 flex px-10 lg:px-20 py-20 flex-col relative items-center"
    >
      <SectionTitle invertBadgeColor>Proyectos</SectionTitle>
      <p className="text-center mb-10 max-w-[80vw]">
        Descubre nuestros proyectos y enamórate de cada detalle!
      </p>
      <div
        className={`w-full max-w-[1000px] grid grid-flow-row grid-cols-1 md:grid-cols-2 md:grid-rows-2 min-h-96 [&>div]:h-52 [&>div]:overflow-hidden [&>div]:shadow-md text-white/90`}
      >
        <div>
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[20%] transition duration-300 group-hover:blur-xs"
              src={"/images/integracion.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-2xl text-shadow group-hover:text-white transition duration-300 ${monument.className} uppercase text-center`}
            >
              Integración
            </h3>
          </Link>
        </div>
        <div className="">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[20%] transition duration-300 group-hover:blur-xs"
              src={"/images/ingenieria.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-2xl text-shadow group-hover:text-white transition duration-300 ${monument.className} uppercase text-center`}
            >
              Ingeniería
            </h3>
          </Link>
        </div>
        <div className="">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[20%] transition duration-300 group-hover:blur-xs"
              src={"/images/mecanica.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-2xl text-shadow group-hover:text-white transition duration-300 ${monument.className} uppercase text-center`}
            >
              Mecánica
            </h3>
          </Link>
        </div>
        <div className="">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[20%] transition duration-300 group-hover:blur-xs"
              src={"/images/terreno.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-2xl text-shadow group-hover:text-white transition duration-300 ${monument.className} uppercase text-center`}
            >
              Servicios en terreno
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
