"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import { useRef } from "react";

export default function Nosotros() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background image
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative flex flex-col py-20 px-6 md:px-12 lg:px-20 justify-center items-center overflow-hidden"
    >
      {/* Background image with parallax effect */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Image
          alt="Foto de la oficina de Inproco"
          loading="lazy"
          draggable={false}
          src="/images/nosotros.webp"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />
      </motion.div>

      <div className="relative z-10 space-y-10 text-white max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex w-full flex-col items-center justify-center"
        >
          <SectionTitle className="mb-6">Nosotros</SectionTitle>

          <div className="space-y-8 text-gray-200 text-left text-pretty text-base md:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Somos una empresa de{" "}
              <strong className="text-primary font-semibold">
                ingeniería mecánica y eléctrica
              </strong>{" "}
              especializada en el{" "}
              <strong className="text-white font-semibold">
                diseño, fabricación y desarrollo
              </strong>{" "}
              de productos y servicios para los sectores de{" "}
              <strong className="text-white font-semibold">
                minería, industria y obras civiles
              </strong>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Inproco fue fundada en{" "}
              <strong className="text-white font-semibold">2016</strong> por su
              actual{" "}
              <strong className="text-primary font-semibold">
                gerente general, Pablo Gutiérrez
              </strong>
              , ingeniero eléctrico con más de{" "}
              <strong className="text-white font-semibold">
                25 años de trayectoria
              </strong>{" "}
              en el desarrollo de proyectos y la dirección de equipos de{" "}
              <strong className="text-white font-semibold">
                ingeniería mecánica y eléctrica
              </strong>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A lo largo de estos{" "}
              <strong className="text-white font-semibold">años</strong>, hemos
              diseñado, integrado y fabricado equipamiento mecánico y eléctrico
              para{" "}
              <strong className="text-primary font-semibold">
                empresas de gran envergadura
              </strong>
              , que han confiado en nosotros para el desarrollo de sus
              proyectos, obteniendo{" "}
              <strong className="text-primary font-semibold">
                resultados altamente satisfactorios
              </strong>
              . Gracias a este compromiso con la excelencia, hemos experimentado
              un crecimiento sostenido, tendencia que confiamos en seguir
              impulsando en el futuro.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center text-xl md:text-2xl font-bold text-white pt-4"
            >
              Somos Inproco y, juntos, damos forma a la energía que mueve al
              mundo.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10"
          >
            <Image
              loading="eager"
              draggable={false}
              className="w-80 md:w-96 drop-shadow-2xl"
              src="/logos/logo-full-white.webp"
              alt="Logo de Inproco en blanco"
              width={400}
              height={200}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
