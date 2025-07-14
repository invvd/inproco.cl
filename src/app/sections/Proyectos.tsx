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
    year: "2024",
    title: "Automatización Minera",
    client: "CODELCO",
    description:
      "Sistema automatizado de control de procesos mineros con IoT y dashboard en tiempo real.",
    image: "/images/lightroom.jpg",
    category: "Automatización",
    fullDescription:
      "Implementación completa de sistema automatizado de control de procesos para optimización de la extracción de mineral. Incluye sensores IoT distribuidos, dashboard en tiempo real para monitoreo 24/7, sistemas de seguridad avanzados y algoritmos de machine learning para predicción de mantenimiento.",
    technologies: [
      "PLC Siemens",
      "SCADA",
      "IoT Sensors",
      "Python",
      "Machine Learning",
    ],
    duration: "8 meses",
    team: "12 ingenieros",
    budget: "$2.5M USD",
  },
  {
    id: 2,
    year: "2024",
    title: "Centro de Datos Inteligente",
    client: "Banco de Chile",
    description:
      "Implementación de sistema de refrigeración inteligente y monitoreo predictivo para centro de datos.",
    image: "/images/integracion.jpg",
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
    image: "/images/terreno.jpg",
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
    image: "/images/integracion.jpg",
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
    image: "/images/mecanica.jpg",
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
    image: "/images/ingenieria.jpg",
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
    image: "/images/terreno.jpg",
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
    image: "/images/terreno.jpg",
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
    image: "/images/mecanica.jpg",
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
    image: "/images/ingenieria.jpg",
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Obtener años únicos y ordenarlos
  const availableYears = Array.from(new Set(proyectos.map((p) => p.year)))
    .sort()
    .reverse();

  // Filtrar proyectos según el año seleccionado
  const filteredProyectos = selectedYear
    ? proyectos.filter((proyecto) => proyecto.year === selectedYear)
    : proyectos;

  const handleYearFilter = (year: string) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -340, // Width of card + gap
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 340, // Width of card + gap
        behavior: "smooth",
      });
    }
  };

  const openModal = (proyecto: (typeof proyectos)[0]) => {
    // Guardar la posición actual del scroll
    const currentScrollY = window.scrollY;
    setScrollPosition(currentScrollY);

    setSelectedProject(proyecto);
    setIsModalOpen(true);

    // Prevent background scroll sin mover la página
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.width = "100%";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);

    // Restaurar scroll a la posición guardada
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    // Usar múltiples métodos para asegurar la restauración
    requestAnimationFrame(() => {
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "instant",
      });

      // Backup con setTimeout
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0);
    });
  };

  return (
    <section
      id="proyectos"
      className="text-neutral-900 bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 md:px-12 lg:px-20 py-16 relative"
    >
<<<<<<< HEAD
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <SectionTitle invertBadgeColor>Proyectos</SectionTitle>
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-700">
          Algunos de nuestros proyectos que han transformado la industria
          chilena
        </p>
      </motion.div>

      {/* Interactive Years Filter */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            {/* Botón "Todos" */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedYear(null)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedYear === null
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-primary hover:bg-primary/10"
              }`}
=======
      <SectionTitle invertBadgeColor>Proyectos</SectionTitle>
      <p className="text-center mb-10 max-w-[80vw]">
        Descubre nuestros proyectos y enamórate de cada detalle!
      </p>
      <div
        className={`w-full max-w-[1000px] grid grid-flow-row grid-cols-1 md:grid-cols-2 md:grid-rows-2 min-h-96 [&>div]:h-52 [&>div]:overflow-hidden [&>div]:shadow-md text-white/90`}
      >
        <div>
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[20%] transition duration-300 group-hover:blur-xs"
              src={"/images/integracion.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-2xl text-shadow group-hover:text-white transition duration-300 ${monument.className} uppercase text-center`}
>>>>>>> 163b8d7eee36ff247c4c83e6a3fbab0549307d26
            >
              Todos
            </motion.button>

            {/* Separador */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Botones de años */}
            {availableYears.map((year, index) => (
              <motion.button
                key={year}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleYearFilter(year)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-primary text-white shadow-md"
                    : "text-primary hover:bg-primary/10"
                }`}
              >
                {year}
                {index < availableYears.length - 1 && (
                  <div className="hidden"></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
<<<<<<< HEAD

        {/* Projects Counter */}
        <motion.div
          key={selectedYear || "all"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <p className="text-gray-600">
            {selectedYear
              ? `Mostrando ${filteredProyectos.length} proyecto${
                  filteredProyectos.length !== 1 ? "s" : ""
                } de ${selectedYear}`
              : `Mostrando todos los ${filteredProyectos.length} proyectos`}
          </p>
        </motion.div>

        {/* Horizontal Scrolling Projects with Navigation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear || "all"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Navigation Buttons */}
            {filteredProyectos.length > 3 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg
                    className="w-6 h-6 text-primary group-hover:text-primary/80"
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

                {/* Right Arrow */}
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg
                    className="w-6 h-6 text-primary group-hover:text-primary/80"
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
              </>
            )}

            {/* Scroll container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide pb-4 px-14 relative"
              style={{
                maxHeight: "480px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div
                className="flex gap-6"
                style={{ width: "max-content", minHeight: "460px" }}
              >
                {filteredProyectos.map((proyecto, index) => (
                  <motion.div
                    key={`${selectedYear || "all"}-${proyecto.id}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex-shrink-0"
                    style={{ width: "320px", height: "440px" }}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03] h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <Image
                          src={proyecto.image}
                          alt={proyecto.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Year Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                            {proyecto.year}
                          </span>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                            {proyecto.category}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3
                          className={`${monument.className} text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2`}
                        >
                          {proyecto.title}
                        </h3>

                        <p className="text-sm text-primary font-semibold mb-3">
                          {proyecto.client}
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {proyecto.description}
                        </p>

                        {/* Action Button */}
                        <button
                          onClick={() => openModal(proyecto)}
                          className="w-full text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-300 flex items-center justify-center gap-2 py-2 border border-primary/20 rounded-lg hover:bg-primary/5 mt-auto"
                        >
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
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Hint */}
            <div className="flex justify-center mt-4">
              {filteredProyectos.length > 3 && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Usa las flechas para navegar</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* No results message */}
        {filteredProyectos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">
              No se encontraron proyectos para el año {selectedYear}
            </div>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                75+
              </div>
              <div className="text-gray-600 font-medium">
                Proyectos Completados
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                15+
              </div>
              <div className="text-gray-600 font-medium">
                Años de Experiencia
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">
                Clientes Satisfechos
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ¿Tienes un proyecto en mente?
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
=======
        <div className="">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[20%] transition duration-300 group-hover:blur-xs"
              src={"/images/ingenieria.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-2xl text-shadow group-hover:text-white transition duration-300 ${monument.className} uppercase text-center`}
            >
              Ingeniería
            </h3>
          </Link>
        </div>
        <div className="">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              loading="lazy"
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[20%] transition duration-300 group-hover:blur-xs"
              src={"/images/mecanica.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-2xl text-shadow group-hover:text-white transition duration-300 ${monument.className} uppercase text-center`}
            >
              Mecánica
            </h3>
          </Link>
        </div>
        <div className="">
          <Link
            target="_blank"
            href="/"
            className="group flex flex-col justify-center items-center size-full relative bg-black"
          >
            <Image
              alt=""
              className="group-hover:scale-105 size-full absolute object-cover opacity-60 group-hover:opacity-[20%] transition duration-300 group-hover:blur-xs"
              src={"/images/terreno.jpg"}
              width={500}
              height={500}
            />
            <h3
              className={`z-10 text-2xl text-shadow group-hover:text-white transition duration-300 ${monument.className} uppercase text-center`}
>>>>>>> 163b8d7eee36ff247c4c83e6a3fbab0549307d26
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
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button - Outside Modal */}
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 z-60 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl flex-shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1.5 rounded-full text-sm font-bold">
                    {selectedProject.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h2
                    className={`${monument.className} text-2xl md:text-3xl font-bold text-white mb-1`}
                  >
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-primary font-semibold bg-white/90 px-3 py-1 rounded-lg inline-block">
                    {selectedProject.client}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div
                className="p-6 flex-1 overflow-y-auto scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Descripción del Proyecto
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-primary mb-1">
                      {selectedProject.duration}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      Duración
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-secondary mb-1">
                      {selectedProject.team}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      Equipo
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-primary mb-1">
                      {selectedProject.budget}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      Presupuesto
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Tecnologías Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <a
                    href="#contacto"
                    onClick={closeModal}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 text-center text-sm"
                  >
                    Solicitar Cotización Similar
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Proyectos;
