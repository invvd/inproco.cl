"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const monument = localFont({
  src: "../fonts/Monument.woff2",
});

const proyectos = [
  {
    id: 1,
    year: "2024",
    title: "Sistema de Automatización Minera Codelco",
    client: "CODELCO - División El Teniente",
    description:
      "Implementación de sistema automatizado de control de procesos para optimización de la extracción de mineral. Incluye sensores IoT, dashboard en tiempo real y sistemas de seguridad avanzados.",
    image: "/images/ingenieria.jpg",
    category: "Automatización",
    status: "Completado",
    technologies: ["PLC Siemens", "SCADA", "IoT Sensors", "Python"],
  },
  {
    id: 2,
    year: "2023",
    title: "Planta de Tratamiento de Aguas Industriales",
    client: "Empresa Sanitaria Regional",
    description:
      "Diseño e implementación de planta de tratamiento de aguas residuales industriales con capacidad de 50,000 L/día. Sistema incluye filtración avanzada y monitoreo automático de calidad.",
    image: "/images/integracion.jpg",
    category: "Ingeniería Ambiental",
    status: "Completado",
    technologies: [
      "Sistemas de Filtración",
      "Sensores pH",
      "Control Automático",
      "Telemetría",
    ],
  },
  {
    id: 3,
    year: "2023",
    title: "Modernización de Sistemas Eléctricos Industriales",
    client: "Compañía Manufacturera del Norte",
    description:
      "Actualización completa del sistema eléctrico de planta industrial, incluyendo tableros de distribución, sistemas de respaldo y eficiencia energética.",
    image: "/images/mecanica.jpg",
    category: "Ingeniería Eléctrica",
    status: "Completado",
    technologies: [
      "Tableros MT/BT",
      "UPS Industrial",
      "Análisis de Calidad",
      "Eficiencia Energética",
    ],
  },
  {
    id: 4,
    year: "2022",
    title: "Sistema de Transporte Automatizado",
    client: "Puerto de Valparaíso",
    description:
      "Desarrollo de sistema automatizado de transporte de contenedores con grúas robóticas y software de gestión logística integrado.",
    image: "/images/terreno.jpg",
    category: "Automatización",
    status: "Completado",
    technologies: [
      "Robótica Industrial",
      "RFID Tracking",
      "Software Logístico",
      "Sistemas Hidráulicos",
    ],
  },
  {
    id: 5,
    year: "2022",
    title: "Planta de Generación Solar Industrial",
    client: "Minera Los Andes",
    description:
      "Instalación de planta fotovoltaica de 5MW para autoconsumo industrial con sistema de almacenamiento y conexión a red nacional.",
    image: "/images/ingenieria.jpg",
    category: "Energías Renovables",
    status: "Completado",
    technologies: [
      "Paneles Fotovoltaicos",
      "Inversores",
      "Baterías de Litio",
      "Smart Grid",
    ],
  },
  {
    id: 6,
    year: "2021",
    title: "Centro de Control de Operaciones Mineras",
    client: "Minera Escondida",
    description:
      "Construcción de centro de control centralizado para operaciones mineras remotas con tecnología de realidad aumentada y monitoreo 24/7.",
    image: "/images/integracion.jpg",
    category: "Control de Procesos",
    status: "Completado",
    technologies: [
      "AR/VR",
      "Sistemas de Comunicación",
      "Videowall",
      "Redundancia N+1",
    ],
  },
];

function Proyectos() {
  return (
    <section
      id="proyectos"
      className="text-neutral-900 bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 md:px-12 lg:px-20 py-20 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <SectionTitle invertBadgeColor>Nuestros Proyectos</SectionTitle>
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-700">
          Descubre algunos de nuestros proyectos más destacados que han
          transformado la industria chilena
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-px"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:gap-8`}
            >
              {/* Timeline Year Badge */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 md:translate-y-0">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  {proyecto.year}
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={proyecto.image}
                      alt={proyecto.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {proyecto.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        {proyecto.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3
                        className={`${monument.className} text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300`}
                      >
                        {proyecto.title}
                      </h3>
                      <p className="text-sm text-primary font-semibold">
                        {proyecto.client}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {proyecto.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Tecnologías utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proyecto.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-between items-center">
                      <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-300 flex items-center gap-1">
                        Ver detalles
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                      </button>
                      <div className="text-xs text-gray-400">
                        Proyecto {proyecto.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-16"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-gray-600 mb-6">
            Únete a las empresas que han confiado en nosotros para transformar
            sus operaciones
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Conversemos sobre tu proyecto
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
        </div>
      </motion.div>
    </section>
  );
}

export default Proyectos;
