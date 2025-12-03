"use client";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";

type HeroProps = {
  videoSrc: string;
};

export default function Hero({ videoSrc }: HeroProps) {
  const sectionRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (section) {
        section.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <video
        ref={sectionRef}
        controlsList="nodownload"
        loop
        className="absolute inset-0 w-full aspect-[4/3] h-full object-cover opacity-80"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto space-y-8 translate-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-4xl md:text-6xl m-0 font-bold text-shadow-lg leading-tight"
          >
            INGENIERÍA & DESARROLLO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-lg text-gray-200 mx-auto leading-relaxed text-shadow m-0"
          >
            Expertos en diseño, fabricación y desarrollo de productos y
            servicios para la minería, industria y obras civiles
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Link
              href="#nosotros"
              className="px-8 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Conoce más
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Contáctanos
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
