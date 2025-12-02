"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import { useRef } from "react";
import Link from "next/link";
import {
  IconExternalLink,
  IconHeartHandshake,
  IconShield,
} from "@tabler/icons-react";

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
          <SectionTitle className="mb-6 text-3xl">Nosotros</SectionTitle>

          <div className="space-y-8 text-gray-200 text-left text-pretty text-base leading-relaxed">
            <motion.p
              className="text-sm"
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
              className="text-center text-lg font-bold text-white pt-4"
            >
              Somos Inproco y, juntos, damos forma a la energía que mueve al
              mundo.
            </motion.p>
          </div>

          <div className="flex gap-8 my-4">
            <Link
              href="/files/politicas-inproco.pdf"
              target="_blank"
              className="px-6 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 mt-8"
            >
              Ver políticas de la empresa <IconExternalLink size={28} />
            </Link>
            <Link
              href="/files/iso-inproco.pdf"
              target="_blank"
              className="px-6 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 mt-8"
            >
              Empresa certificada ISO <IconExternalLink size={28} />
            </Link>
          </div>

          <h3 className="text-4xl font-bold mt-16">Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                EXCELENCIA Y MEJORA CONTINUA
              </h4>
              <p className="text-white/60">
                Refleja el compromiso de INPROCO con la calidad, la innovación,
                la eficiencia y la satisfacción del cliente. Promueve el trabajo
                en equipo, la orientación al cliente, la responsabilidad social
                interna y la búsqueda constante de la mejora en cada proceso.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <IconShield />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                SEGURIDAD Y BIENESTAR INTEGRAL
              </h4>
              <p className="text-white/60">
                Representa la prioridad de proteger la vida, la salud y el
                bienestar de todos los colaboradores, clientes y comunidades,
                manteniendo entornos de trabajo seguros, saludables y
                equitativos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <IconHeartHandshake color="white" className="size-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                RESPONSABILIDAD Y SOSTENIBILIDAD
              </h4>
              <p className="text-white/60">
                Refleja el compromiso con el entorno, la sociedad y las futuras
                generaciones, fomentando prácticas responsables, éticas y
                sostenibles en todas las operaciones y relaciones.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
