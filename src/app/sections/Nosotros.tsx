"use client";
import { motion } from "motion/react";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="flex flex-col bg-black/80 py-20 px-10 md:px-20 justify-center items-center"
    >
      <Image
        alt="Foto de la oficina de Inproco"
        loading="lazy"
        draggable={false}
        src="/images/nosotros.webp"
        width={1134}
        height={2016}
        className="object-cover flex h-screen blur-xs w-screen fixed top-0 -z-20"
      />
      <div className="space-y-10 text-white max-w-[1000px] lg:gap-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-center flex w-full flex-col items-center justify-center"
        >
          <SectionTitle className="mb-10">Nosotros</SectionTitle>
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
