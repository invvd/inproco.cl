"use client";
import { motion } from "motion/react";
import localFont from "next/font/local";
import Image from "next/image";

const monument = localFont({
  src: "../fonts/Monument.woff2",
});

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="flex flex-col bg-black/80 p-20 justify-center items-center"
    >
      <motion.img
        alt="Foto de la oficina de Inproco"
        loading="lazy"
        draggable={false}
        src="/images/nosotros.webp"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 100, scale: 1 }}
        viewport={{ once: true }}
        className="object-cover flex h-screen blur-xs w-screen fixed top-0 -z-20"
      />
      <div className="px-10 lg:px-20 space-y-10 text-white max-w-[1000px] lg:gap-20 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-center flex w-full flex-col items-center justify-center"
        >
          <div className="flex justify-center items-center gap-2 mb-5">
            <Image
              draggable={false}
              loading="lazy"
              alt="Insignia de Inproco"
              className="drop-shadow-md -translate-y-0.5 object-cover h-full"
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
          <p className="text-[#c4cccf] text-left text-pretty text-sm sm:text-base flex flex-col space-y-6">
            <span>
              Somos una empresa de{" "}
              <strong className="text-primary">
                ingeniería mecánica y eléctrica
              </strong>{" "}
              especializada en el{" "}
              <strong className="text-white">
                diseño, fabricación y desarrollo
              </strong>{" "}
              de productos y servicios para los sectores de{" "}
              <strong className="text-white">
                minería, industria y obras civiles
              </strong>
              .
            </span>

            <span>
              Inproco fue fundada en{" "}
              <strong className="text-white">2016</strong> por su actual{" "}
              <strong className="text-primary">
                gerente general, Pablo Gutiérrez
              </strong>
              , ingeniero eléctrico con más de{" "}
              <strong className="text-white">25 años de trayectoria</strong> en
              el desarrollo de proyectos y la dirección de equipos de{" "}
              <strong className="text-white">
                ingeniería mecánica y eléctrica
              </strong>
              .
            </span>

            <span>
              A lo largo de estos <strong className="text-white">años</strong>,
              hemos diseñado, integrado y fabricado equipamiento mecánico y
              eléctrico para{" "}
              <strong className="text-primary">
                empresas de gran envergadura
              </strong>
              , que han confiado en nosotros para el desarrollo de sus
              proyectos, obteniendo{" "}
              <strong className="text-primary">
                resultados altamente satisfactorios
              </strong>
              . Gracias a este compromiso con la excelencia, hemos experimentado
              un crecimiento sostenido, tendencia que confiamos en seguir
              impulsando en el futuro.
            </span>
            <span>
              <strong className="text-white">
                Somos Inproco y, juntos, damos forma a la energía que mueve al
                mundo.
              </strong>
            </span>
          </p>
          <Image
            loading="eager"
            draggable={false}
            className="w-[300px] mt-10"
            src="/logos/logo-full-white.webp"
            alt="Logo de Inproco en blanco"
            width={200}
            height={200}
          />
        </motion.div>
      </div>
    </section>
  );
}
