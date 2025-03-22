import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const monument = localFont({
  src: "../../fonts/Monument.woff2",
});

// PENDIENTE: Reemplazar fotos

function Proyectos() {
  return (
    <section className="text-neutral-900 bg-gradient-to-br from-neutral-100 pt-10 to bg-neutral-400 flex flex-col items-center">
      <div className="flex justify-center items-center gap-2">
        <Image
          loading="lazy"
          alt="Insignia de Inproco"
          className="drop-shadow-md -translate-y-0.5 w-10 sm:w-12"
          src={"/logos/badge-gray.webp"}
          width={50}
          height={50}
        />
        <h2
          className={`${monument.className} font-bold uppercase text-center text-4xl xs:text-5xl`}
        >
          Proyectos
        </h2>
      </div>

      <div
        className={`p-10 w-full max-w-[800px] grid grid-flow-row grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 min-h-80 [&>div]:rounded-xl [&>div]:h-52 [&>div]:overflow-hidden [&>div]:shadow-md`}
      >
        <div>
          <Link
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-30 group-hover:opacity-[15%] transition duration-300 group-hover:blur-xs"
              src={"/images/nosotros.webp"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-xl text-shadow text-secondary ${monument.className} uppercase text-center`}
            >
              Integración
            </h3>
          </Link>
        </div>
        <div className="md:col-span-2">
          <Link
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-30 group-hover:opacity-[15%] transition duration-300 group-hover:blur-xs"
              src={"/images/nosotros.webp"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-xl text-shadow text-secondary ${monument.className} uppercase text-center`}
            >
              Ingeniería
            </h3>
          </Link>
        </div>
        <div className="md:col-span-2 md:row-start-2">
          <Link
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-30 group-hover:opacity-[15%] transition duration-300 group-hover:blur-xs"
              src={"/images/nosotros.webp"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-xl text-shadow text-secondary ${monument.className} uppercase text-center`}
            >
              Mecánica
            </h3>
          </Link>
        </div>
        <div className="md:col-start-3 md:row-start-2 ">
          <Link
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-30 group-hover:opacity-[15%] transition duration-300 group-hover:blur-xs"
              src={"/images/nosotros.webp"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-xl text-shadow text-secondary ${monument.className} uppercase text-center`}
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
