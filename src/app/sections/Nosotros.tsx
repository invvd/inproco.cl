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
      className="from-neutral-900 via-black flex flex-col justify-center items-center to-neutral-900 bg-gradient-to-br"
    >
      <Image
        loading="eager"
        draggable={false}
        className="w-[300px] mt-10"
        src="/logos/logo-full-white.webp"
        alt="Logo de Inproco en blanco"
        width={200}
        height={200}
      />

      <div className="px-10 lg:px-20 py-10 space-y-10 text-white place-items-center grid place-content-center lg:grid-cols-2 max-w-[1300px] lg:gap-20 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center flex w-full flex-col items-center justify-center"
        >
          <h2
            className={`text-shadow ${monument.className} font-bold uppercase text-center text-3xl mb-5`}
          >
            Nosotros
          </h2>
          <p className="text-[#c4cccf] text-left text-pretty max-w-[500px] text-sm sm:text-base flex flex-col space-y-6">
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
        </motion.div>
        <motion.img
          alt="Foto de la oficina de Inproco"
          loading="lazy"
          draggable={false}
          src="/images/nosotros.webp"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 100, scale: 1 }}
          viewport={{ once: true }}
          className="max-h-[500px] object-cover max-w-[400px] flex shadow-black/50 shadow-xl justify-center items-center w-full mb-20"
        />
      </div>
    </section>
  );
}
