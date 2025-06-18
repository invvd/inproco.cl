import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex justify-center items-center gap-2">
        <Image
          draggable={false}
          loading="lazy"
          alt="Insignia de Inproco"
          className="drop-shadow-md -translate-y-0.5 object-cover h-full invert"
          src={"/logos/badge-white.webp"}
          width={50}
          height={50}
        />
        <h2
          className={`${monument.className} font-bold uppercase text-center text-3xl md:text-4xl lg:text-5xl z-10`}
        >
          Nosotros
        </h2>
      </div>
      <p className="text-center mb-10 max-w-[80vw]">
        Descubre nuestros proyectos y enamórate de cada detalle!
      </p>
      <div
        className={`w-full max-w-[1000px] grid grid-flow-row grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-5 [&>div]:rounded-sm min-h-80 [&>div]:h-52 [&>div]:overflow-hidden [&>div]:shadow-md text-white/90`}
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
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[30%] transition duration-300 group-hover:blur-xs"
              src={"/images/integracion.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-xl text-shadow group-hover:text-primary transition duration-300 ${monument.className} uppercase text-center`}
            >
              Integración
            </h3>
          </Link>
        </div>
        <div className="md:col-span-4">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[30%] transition duration-300 group-hover:blur-xs"
              src={"/images/ingenieria.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-xl text-shadow group-hover:text-primary transition duration-300 ${monument.className} uppercase text-center`}
            >
              Ingeniería
            </h3>
          </Link>
        </div>
        <div className="md:col-span-4 md:row-start-2">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[30%] transition duration-300 group-hover:blur-xs"
              src={"/images/mecanica.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-xl text-shadow group-hover:text-primary transition duration-300 ${monument.className} uppercase text-center`}
            >
              Mecánica
            </h3>
          </Link>
        </div>
        <div className="md:col-start-3 md:row-start-2 ">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[30%] transition duration-300 group-hover:blur-xs"
              src={"/images/terreno.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-xl text-shadow group-hover:text-primary transition duration-300 ${monument.className} uppercase text-center`}
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
