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
    year: "2025",
    title: "Subestación Trolley Hualtatas",
    description:
      "Sistema de asistencia para Trolley en botadero Hualtatas, asociado a subestación eléctrica de potencia 6 MVA.",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription:
      "Sistema de asistencia para Trolley en botadero Hualtatas, asociado a subestación eléctrica de potencia 6 MVA. El proyecto incluye diseño e instalación de infraestructura eléctrica robusta para soportar operaciones de alta demanda energética en ambiente industrial minero.",
    dimensiones: "18x3,6 metros",
    detalles: "",
  },
  {
    id: 2,
    year: "2025",
    title: "Sala Eléctrica Boleros-AES",
    client: "",
    description:
      "Sala eléctrica destinada a la operación y conexión de sistema fotovoltaico, compuesto por paneles solares.",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription:
      "Sala eléctrica destinada a la operación y conexión de sistema fotovoltaico, compuesto por paneles solares.",
    dimensiones: "33x3,5 metros",
    detalles: "3 módulos",
  },
  {
    id: 3,
    year: "2025",
    title: "Sala Eléctrica TNT Centinela",
    client: "",
    description:
      "Infraestructura eléctrica destinada al soporte del Proyecto TNT Nueva Centinela.",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica",
    fullDescription:
      "Infraestructura eléctrica destinada al soporte del Proyecto TNT Nueva Centinela.",
    dimensiones: "21x5 metros",
    detalles: "2 módulos",
  },
  {
    id: 4,
    year: "2025",
    title: "Sala Eléctrica Arenales-AES",
    client: "",
    description:
      "Sala eléctrica destinada a la operación y conexión del sistema fotovoltaico mediante paneles solares.",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription:
      "Sala eléctrica destinada a la operación y conexión del sistema fotovoltaico mediante paneles solares.",
    dimensiones: "45x3,5 metros",
    detalles: "4 módulos",
  },
  {
    id: 5,
    year: "2025",
    title: "Sala Eléctrica SUE STWM-BHP",
    client: "",
    description:
      "Desarrollo de la segunda etapa de subestaciones eléctricas STWM.",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription:
      "Desarrollo de la segunda etapa de subestaciones eléctricas STWM.",
    dimensiones: "",
    detalles: "5 unidades",
  },
  {
    id: 6,
    year: "2025",
    title: "Envolventes Proyectos Arqueros",
    client: "",
    description:
      "Envolvente para SWG el cual cuenta con SSAA, HVAC y control de acceso",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription:
      "Envolvente para SWG el cual cuenta con SSAA, HVAC y control de acceso",
    dimensiones: "6x3,5 metros",
    detalles: "4 unidades",
  },
  {
    id: 7,
    year: "2024",
    title: "Subestación 123D, Chuquicamata",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription:
      "Diseño e implementación de subestaciones eléctricas de 1000 kVA para distribución de energía en media tensión.",
    dimensiones: "6,1x3 metros",
    detalles: "5 unidades",
  },
  {
    id: 8,
    year: "2024",
    title: "Sala Eléctrica, Codelco RT",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription: "",
    dimensiones: "6x2,7 metros",
    detalles: "2 unidades",
  },
  {
    id: 9,
    year: "2024",
    title: "Celda Eléctrica Clip",
    client: "",
    description: "Celda de protección para proyecto Clip.",
    images: [
      "/images/projects/9/1.jpeg",
      "/images/projects/9/2.jpeg",
      "/images/projects/9/3.jpeg",
      "/images/projects/9/4.jpeg",
    ],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription:
      "Celda de protección para proyecto Clip, tensiones 15.5KV, 4000A, 110KV BIL, 80KA",
    dimensiones: "3,27x1,84 metros",
    detalles: "Tensiones 15.5KV, 4000A, 110KV BIL, 80KA, 2 Módulos",
  },
  {
    id: 10,
    year: "2024",
    title: "Celda Eléctrica, Arqueros",
    client: "",
    description: "Envolvente SWITCHGEAR",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Mecánico y Eléctrico",
    fullDescription: "Envolvente SWITCHGEAR",
    dimensiones: "6x2,7m",
    detalles: "1 unidad",
  },
  {
    id: 11,
    year: "2023",
    title: "Sala Eléctrica Bombeo de agua",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 12,
    year: "2023",
    title: "Subestación 5000 KVA",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 13,
    year: "2023",
    title: "Subestación BHP-STW, 300 KVA",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 14,
    year: "2023",
    title: "Subestación 123D, 1000 KVA, Chuquicamata",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Metalmecánica y Eléctrica",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 15,
    year: "2023",
    title: "Sala Eléctrica Sierra Gorda",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Eléctrica",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 16,
    year: "2023",
    title: "Sala Eléctrica Planta Piloto",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Eléctrica",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 17,
    year: "2024",
    title: "Sala Eléctrica Collahuasi",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Eléctrica",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 18,
    year: "2022",
    title: "Sala Eléctrica proyecto ventilación y extracción 7 peralte",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Salas Eléctricas",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 19,
    year: "2022",
    title: "Sala Eléctrica proyecto ventilación y extracción 7 peralte",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Salas Eléctricas",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 20,
    year: "2022",
    title: "Sala Eléctrica proyecto mantos verdes",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Salas Eléctricas",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 21,
    year: "2022",
    title: "Sala Eléctrica planta piloto",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Salas Eléctricas",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 22,
    year: "2025",
    title: "Sala Eléctrica Arqueros",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Salas Eléctricas",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 23,
    year: "2025",
    title: "Sala Eléctrica TNT centinela",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Salas Eléctricas",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 24,
    year: "2025",
    title: "Sala Eléctrica Pucobre",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Salas Eléctricas",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 25,
    year: "",
    title: "Proyecto los olmos y mesamavida",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Montaje en Terreno",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 26,
    year: "",
    title: "Celdas GIS proyecto Sol de lila",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Montaje en Terreno",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 27,
    year: "",
    title: "Celdas GIS proyecto Sol de lila",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Montaje en Terreno",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 28,
    year: "",
    title: "Antenas GPS Metro L2",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Montaje en Terreno",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
  },
  {
    id: 29,
    title: "Interconexión comunicación, Metro L3",
    client: "",
    description: "",
    images: ["/images/projects/1/1.jpeg", "/images/projects/1/2.jpeg"],
    alcance: "Montaje en Terreno",
    fullDescription: "",
    dimensiones: "",
    detalles: "",
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
    .filter(
      (year): year is string =>
        typeof year === "string" &&
        year !== undefined &&
        year !== "" &&
        year.trim() !== ""
    )
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
      className="min-h-screen bg-white text-gray-900 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <SectionTitle invertBadgeColor className="flex items-center mb-4">
            Proyectos
          </SectionTitle>
          <div className={`text-lg mb-12`}>Experiencia en acción</div>
        </div>

        {/* Filtros por año */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedYear === null
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              Todos los años
            </button>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
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
            className="flex overflow-x-auto scrollbar-hide overflow-y-hidden gap-6"
            ref={scrollContainerRef}
          >
            {filteredProjects.map((proyecto) => (
              <motion.div
                key={proyecto.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="min-w-[300px] max-w-[350px] bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/50 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl"
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
                  <h3
                    className={`text-xl font-bold mb-3 text-gray-900 ${monument.className}`}
                  >
                    {proyecto.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {proyecto.description}
                  </p>
                  <div className="text-xs text-gray-500 mb-3">
                    {proyecto.alcance}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navegación de scroll */}
          <button
            onClick={scrollLeft}
            className="absolute -left-2 top-1/2 -translate-y-1/2 bg-gray-100 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-gray-200 transition-colors z-10 shadow-lg"
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
            className="absolute -right-2 top-1/2 -translate-y-1/2 bg-gray-100 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-gray-200 transition-colors z-10 shadow-lg"
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
              className="max-w-4xl w-full mx-4 bg-white rounded-2xl overflow-hidden border border-gray-200 max-h-[90vh] overflow-y-auto shadow-2xl"
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
                  className={`text-3xl font-bold mb-4 text-gray-900 ${monument.className}`}
                >
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="text-primary font-semibold mb-2">
                      Dimensiones
                    </h4>
                    <p className="text-gray-700">
                      {selectedProject.dimensiones
                        ? selectedProject.dimensiones
                        : "N/A"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="text-primary font-semibold mb-2">
                      Detalles
                    </h4>
                    <p className="text-gray-700">
                      {selectedProject.detalles
                        ? selectedProject.detalles
                        : "N/A"}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-3">Alcance</h4>
                </div>

                <div className="mb-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                    {selectedProject.alcance}
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
