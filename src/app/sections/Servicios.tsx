import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const monument = localFont({
  src: "../fonts/Monument.woff2",
});

// PENDIENTE: Reemplazar fotos

function Servicios() {
  return (
    <section
      id="proyectos"
      className="text-neutral-900 bg-gradient-to-br  from-white pt-10 to-neutral-400 flex flex-col relative items-center"
    >
      <div className="flex justify-center items-center gap-2">
        <Image
          draggable={false}
          loading="lazy"
          alt="Insignia de Inproco"
          className="drop-shadow-md -translate-y-0.5 w-10 sm:w-12 invert"
          src={"/logos/badge-white.webp"}
          width={50}
          height={50}
        />
        <h2
          className={`${monument.className} font-bold uppercase text-center text-4xl xs:text-5x z-10l`}
        >
          Servicios
        </h2>
      </div>
      <p className="text-center mt-2 max-w-[80vw]">
        Descubre nuestros proyectos y enamórate de cada detalle!
      </p>
      {/* <video
        src="/videos/proyectos-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-150 grayscale contrast-150"
      /> */}
      <div
        className={`p-10 w-full max-w-[1050px] grid grid-flow-row grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 [&>div]:rounded-sm min-h-80 [&>div]:h-52 [&>div]:overflow-hidden [&>div]:shadow-md text-white/90`}
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
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[15%] transition duration-300 group-hover:blur-xs"
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
        <div className="md:col-span-2">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[15%] transition duration-300 group-hover:blur-xs"
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
        <div className="md:col-span-2 md:row-start-2">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[15%] transition duration-300 group-hover:blur-xs"
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
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[15%] transition duration-300 group-hover:blur-xs"
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

export default Servicios;
