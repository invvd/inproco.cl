"use client";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const monument = localFont({
  src: "../fonts/Monument.woff2",
});

const servicios = [
  {
    id: 1,
    title: "Integración",
    image: "/images/integracion.jpg",
    description:
      "Soluciones integrales de sistemas industriales con tecnología de vanguardia",
  },
  {
    id: 2,
    title: "Ingeniería",
    image: "/images/ingenieria.jpg",
    description:
      "Desarrollo y diseño de proyectos personalizados para cada cliente",
  },
  {
    id: 3,
    title: "Mecánica",
    image: "/images/mecanica.jpg",
    description:
      "Fabricación, mantenimiento y reparación de equipos especializados",
  },
  {
    id: 4,
    title: "Servicios en terreno",
    image: "/images/terreno.jpg",
    description: "Soporte técnico especializado y mantenimiento in-situ",
  },
];

function Servicios() {
  return (
    <section
      id="servicios"
      className="text-neutral-900 bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 md:px-12 lg:px-20 py-20 flex flex-col relative items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <Image
            draggable={false}
            loading="lazy"
            alt="Insignia de Inproco"
            className="drop-shadow-md w-12 sm:w-14 invert"
            src={"/logos/badge-white.webp"}
            width={60}
            height={60}
          />
          <h2
            className={`${monument.className} font-bold uppercase text-center text-4xl md:text-5xl lg:text-6xl text-gray-900`}
          >
            Servicios
          </h2>
        </div>
        <p className="text-center text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Ofrecemos soluciones integrales de ingeniería con la más alta calidad
          y compromiso
        </p>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {servicios.map((servicio, index) => (
          <motion.div
            key={servicio.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={index === 1 ? "md:col-span-2" : ""}
          >
            <Link
              target="_blank"
              href="/"
              className="group flex flex-col h-80 relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  loading="lazy"
                  alt={servicio.description}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  src={servicio.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Service title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    className={`${monument.className} text-xl md:text-2xl uppercase font-bold text-white text-shadow-lg group-hover:text-primary transition-colors duration-300`}
                  >
                    {servicio.title}
                  </h3>
                </div>
              </div>

              {/* Content area */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  {servicio.description}
                </p>

                {/* Action button */}
                <div className="flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Conoce más
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Additional info section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          ¿Por qué elegir nuestros servicios?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
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
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              25+ años de experiencia
            </h4>
            <p className="text-gray-600">
              Trayectoria consolidada en el sector industrial
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Soluciones integrales
            </h4>
            <p className="text-gray-600">
              Desde el diseño hasta la implementación completa
            </p>
          </div>
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Entrega puntual
            </h4>
            <p className="text-gray-600">
              Comprometidos con los plazos de cada proyecto
            </p>
          </div>
        </div>

        <a
          href="#contacto"
          className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Solicita una cotización
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

export default Servicios;
