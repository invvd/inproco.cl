"use client";
import { useState, useRef } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const monument = localFont({
  src: "../fonts/Monument.woff2",
});

const proyectos = [
  {
    id: 1,
    year: "2023",
    title: "Subestación Trolley Hualtatas",
    client: "Trolley",
    description:
      "Sistema de asistencia para Trolley en botadero Hualtatas, asociado a subestación eléctrica de potencia 6 MVA.",
    images: [
      "/images/projects/1/1.jpeg",
      "/images/integracion.jpg",
      "/images/terreno.jpg",
    ],
    category: "Metalmecánica y Eléctrico",
    fullDescription:
      "Sistema de asistencia para Trolley en botadero Hualtatas, asociado a subestación eléctrica de potencia 6 MVA. El proyecto incluye diseño e instalación de infraestructura eléctrica robusta para soportar operaciones de alta demanda energética en ambiente industrial minero.",
    technologies: [
      "Subestaciones Eléctricas",
      "Control Industrial",
      "Sistemas de Potencia",
      "Automatización",
    ],
    duration: "8 meses",
    team: "12 especialistas",
    budget: "$2.5M USD",
  },
  {
    id: 2,
    year: "2024",
    title: "Centro de Datos Inteligente",
    client: "Banco de Chile",
    description:
      "Implementación de sistema de refrigeración inteligente y monitoreo predictivo para centro de datos.",
    images: [
      "/images/integracion.jpg",
      "/images/ingenieria.jpg",
      "/images/mecanica.jpg",
    ],
    category: "Tecnología",
    fullDescription:
      "Modernización integral del centro de datos con sistema de refrigeración inteligente, monitoreo predictivo de equipos, automatización de respaldos y implementación de infraestructura cloud híbrida para mejorar la eficiencia energética en un 40%.",
    technologies: [
      "Cloud Computing",
      "Refrigeración Inteligente",
      "Monitoreo Predictivo",
      "Automatización",
    ],
    duration: "6 meses",
    team: "8 especialistas",
    budget: "$1.8M USD",
  },
  {
    id: 3,
    year: "2024",
    title: "Planta Solar Fotovoltaica",
    client: "Energía Renovable SA",
    description:
      "Instalación de 10MW de capacidad solar con sistema de seguimiento automático y almacenamiento.",
    images: [
      "/images/terreno.jpg",
      "/images/ingenieria.jpg",
      "/images/integracion.jpg",
    ],
    category: "Energías Renovables",
    fullDescription:
      "Diseño e instalación de planta fotovoltaica de 10MW con sistema de seguimiento solar automático, banco de baterías de ion-litio de 5MWh, sistema de gestión energética inteligente y conexión a la red nacional con inyección cero.",
    technologies: [
      "Paneles Fotovoltaicos",
      "Sistema de Seguimiento",
      "Baterías Li-ion",
      "Smart Grid",
    ],
    duration: "10 meses",
    team: "15 técnicos",
    budget: "$8.5M USD",
  },
  {
    id: 4,
    year: "2023",
    title: "Tratamiento de Aguas",
    client: "Empresa Sanitaria",
    description:
      "Planta de tratamiento de aguas industriales con capacidad de 50,000 L/día.",
    images: [
      "/images/integracion.jpg",
      "/images/terreno.jpg",
      "/images/mecanica.jpg",
    ],
    category: "Ingeniería Ambiental",
    fullDescription:
      "Diseño e implementación de planta de tratamiento de aguas residuales industriales con tecnología de membranas, sistema de filtración multicapa, control automático de pH y cloro, y monitoreo continuo de calidad del agua tratada.",
    technologies: [
      "Filtración por Membranas",
      "Control de pH",
      "Monitoreo Automático",
      "Telemetría",
    ],
    duration: "7 meses",
    team: "10 ingenieros",
    budget: "$1.2M USD",
  },
  {
    id: 5,
    year: "2023",
    title: "Sistemas Eléctricos",
    client: "Manufacturera del Norte",
    description:
      "Modernización completa de sistemas eléctricos industriales y eficiencia energética.",
    images: [
      "/images/mecanica.jpg",
      "/images/ingenieria.jpg",
      "/images/integracion.jpg",
    ],
    category: "Ingeniería Eléctrica",
    fullDescription:
      "Actualización integral del sistema eléctrico industrial incluyendo tableros de media y baja tensión, sistema UPS redundante, análisis de calidad de energía, implementación de variadores de frecuencia y sistema de gestión energética.",
    technologies: [
      "Tableros MT/BT",
      "UPS Industrial",
      "Variadores VFD",
      "Gestión Energética",
    ],
    duration: "5 meses",
    team: "6 electricistas",
    budget: "$950K USD",
  },
  {
    id: 6,
    year: "2023",
    title: "Automatización de Bodega",
    client: "Retail Líder",
    description:
      "Sistema robotizado de gestión de inventario y picking automatizado para e-commerce.",
    images: [
      "/images/ingenieria.jpg",
      "/images/integracion.jpg",
      "/images/terreno.jpg",
    ],
    category: "Automatización",
    fullDescription:
      "Implementación de sistema de automatización de bodega con robots AGV, estanterías automatizadas, sistema de picking por luz, integración con ERP, trazabilidad RFID y dashboard de gestión en tiempo real para operaciones de e-commerce.",
    technologies: [
      "Robots AGV",
      "RFID",
      "Sistema de Picking",
      "Integración ERP",
    ],
    duration: "9 meses",
    team: "14 especialistas",
    budget: "$3.2M USD",
  },
  {
    id: 7,
    year: "2023",
    title: "Red de Sensores IoT",
    client: "Agricultura Tech",
    description:
      "Implementación de red de sensores para monitoreo de cultivos y riego inteligente.",
    images: [
      "/images/terreno.jpg",
      "/images/mecanica.jpg",
      "/images/ingenieria.jpg",
    ],
    category: "AgTech",
    fullDescription:
      "Despliegue de red de sensores IoT para agricultura de precisión, incluyendo sensores de humedad del suelo, estaciones meteorológicas, cámaras de monitoreo, sistema de riego automatizado y plataforma de análisis predictivo para optimización de cultivos.",
    technologies: [
      "Sensores IoT",
      "LoRaWAN",
      "Riego Automatizado",
      "Análisis Predictivo",
    ],
    duration: "4 meses",
    team: "8 técnicos",
    budget: "$680K USD",
  },
  {
    id: 8,
    year: "2022",
    title: "Transporte Automatizado",
    client: "Puerto de Valparaíso",
    description:
      "Sistema robotizado de transporte de contenedores con gestión logística integrada.",
    images: [
      "/images/terreno.jpg",
      "/images/integracion.jpg",
      "/images/mecanica.jpg",
    ],
    category: "Automatización",
    fullDescription:
      "Automatización completa del sistema de transporte portuario con grúas robotizadas, vehículos AGV para movimiento de contenedores, sistema de gestión de tráfico, integración con sistemas aduaneros y plataforma de tracking en tiempo real.",
    technologies: [
      "Grúas Robotizadas",
      "AGV",
      "Gestión de Tráfico",
      "Tracking RFID",
    ],
    duration: "12 meses",
    team: "18 ingenieros",
    budget: "$5.8M USD",
  },
  {
    id: 9,
    year: "2022",
    title: "Sistema de Seguridad Industrial",
    client: "Petroquímica Chilena",
    description:
      "Implementación de sistema de detección de gases y respuesta automática ante emergencias.",
    images: [
      "/images/mecanica.jpg",
      "/images/ingenieria.jpg",
      "/images/terreno.jpg",
    ],
    category: "Seguridad Industrial",
    fullDescription:
      "Sistema integral de seguridad industrial con detectores de gases multigas, sistema de ventilación automática, alarmas audiovisuales, protocolos de evacuación automatizados, integración con sistemas de emergencia y centro de control 24/7.",
    technologies: [
      "Detectores Multigas",
      "Ventilación Automática",
      "Sistemas de Alarma",
      "Protocolos de Emergencia",
    ],
    duration: "6 meses",
    team: "9 especialistas",
    budget: "$1.4M USD",
  },
  {
    id: 10,
    year: "2022",
    title: "Optimización Energética",
    client: "Hospital Regional",
    description:
      "Sistema inteligente de gestión energética con reducción del 30% en consumo eléctrico.",
    images: [
      "/images/ingenieria.jpg",
      "/images/integracion.jpg",
      "/images/mecanica.jpg",
    ],
    category: "Eficiencia Energética",
    fullDescription:
      "Implementación de sistema de gestión energética inteligente con monitoreo en tiempo real, automatización de climatización, iluminación LED con sensores de presencia, sistema de cogeneración y optimización de cargas eléctricas críticas.",
    technologies: [
      "Gestión Energética",
      "Automatización HVAC",
      "LED Inteligente",
      "Cogeneración",
    ],
    duration: "8 meses",
    team: "11 técnicos",
    budget: "$2.1M USD",
  },
];

function Proyectos() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof proyectos)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Obtener años únicos y ordenarlos
  const availableYears = Array.from(new Set(proyectos.map((p) => p.year)))
    .sort()
    .reverse();

  // Filtrar proyectos por año seleccionado
  const filteredProjects = selectedYear
    ? proyectos.filter((proyecto) => proyecto.year === selectedYear)
    : proyectos;

  const openModal = (project: (typeof proyectos)[0]) => {
    setScrollPosition(window.scrollY);
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

  const nextImage = () => {
    if (
      selectedProject &&
      currentImageIndex < selectedProject.images.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      id="proyectos"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <SectionTitle title="Proyectos" subtitle="Experiencia en acción" />

        {/* Filtros por año */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedYear === null
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-gray-300 border-gray-500 hover:border-primary hover:text-primary"
              }`}
            >
              Todos
            </button>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-gray-300 border-gray-500 hover:border-primary hover:text-primary"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Proyectos */}
        <div className="relative">
          <div
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
            ref={scrollContainerRef}
          >
            {filteredProjects.map((proyecto) => (
              <motion.div
                key={proyecto.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="min-w-[350px] max-w-[350px] bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(proyecto)}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={proyecto.images[0]}
                    alt={proyecto.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {proyecto.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-primary text-sm mb-2">
                    {proyecto.client}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 text-white ${monument.className}`}
                  >
                    {proyecto.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {proyecto.description}
                  </p>
                  <div className="text-xs text-gray-400 mb-3">
                    {proyecto.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.technologies
                      .slice(0, 3)
                      .map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    {proyecto.technologies.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{proyecto.technologies.length - 3} más
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navegación de scroll */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full mx-4 bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Galería de imágenes */}
              <div className="relative h-96">
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />

                {/* Navegación de imágenes */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      disabled={currentImageIndex === 0}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      disabled={
                        currentImageIndex === selectedProject.images.length - 1
                      }
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Indicadores de imágenes */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {selectedProject.year}
                </div>
              </div>

              <div className="p-8">
                <div className="text-primary text-sm mb-2">
                  {selectedProject.client}
                </div>
                <h2
                  className={`text-3xl font-bold mb-4 text-white ${monument.className}`}
                >
                  {selectedProject.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-primary font-semibold mb-2">
                      Duración
                    </h4>
                    <p className="text-gray-300">{selectedProject.duration}</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-primary font-semibold mb-2">Equipo</h4>
                    <p className="text-gray-300">{selectedProject.team}</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-primary font-semibold mb-2">
                      Presupuesto
                    </h4>
                    <p className="text-gray-300">{selectedProject.budget}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-3">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                </div>

                <button
                  onClick={closeModal}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Proyectos;
