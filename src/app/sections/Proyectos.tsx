import localFont from "next/font/local";
import Image from "next/image";

const monument = localFont({
  src: "../fonts/Monument.woff2",
});

function Proyectos() {
  return (
    <section className="text-neutral-900 bg-gradient-to-br from-neutral-100 py-10 to bg-neutral-300">
      <div className="flex justify-center items-center gap-2">
        <Image
          alt="Insignia de Inproco"
          className="-translate-y-0.5 w-10 sm:w-12"
          src={"/logos/badge-gray.webp"}
          width={50}
          height={50}
        />
        <h2
          className={`${monument.className} font-bold uppercase text-center text-4xl sm:text-5xl`}
        >
          Proyectos
        </h2>
      </div>
    </section>
  );
}

export default Proyectos;
