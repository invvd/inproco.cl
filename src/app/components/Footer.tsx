"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";

const correo = "contacto@inproco.cl";
const telefono = "+56 9 8765 4321";

function Footer() {
  const currentYear = new Date().getFullYear();

  const enlaces = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const redesSociales = [
    { name: "LinkedIn", icon: IconBrandLinkedin, href: "#" },
    { name: "Instagram", icon: IconBrandInstagram, href: "#" },
    { name: "Facebook", icon: IconBrandFacebook, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <Image
                  src="/logos/logo-fade.webp"
                  alt="Logo Inproco"
                  width={180}
                  height={90}
                  className="mb-3"
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expertos en ingeniería con más de 25 años de experiencia en
                  soluciones para minería e industria.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-2">
                <Link
                  href={`mailto:${correo}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <IconMail className="w-4 h-4 text-primary flex-shrink-0" />
                  {correo}
                </Link>

                <Link
                  href={`tel:${telefono}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <IconPhone className="w-4 h-4 text-primary flex-shrink-0" />
                  {telefono}
                </Link>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-base font-semibold mb-4 text-white">
                Enlaces
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {enlaces.map((enlace, index) => (
                  <Link
                    key={index}
                    href={enlace.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {enlace.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-base font-semibold mb-4 text-white">
                Ubicación
              </h3>
              <div className="flex items-start gap-2 mb-4">
                <IconMapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Cam. La Vara 03395</p>
                  <p>San Bernardo, RM</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-sm font-medium mb-3 text-white">
                  Síguenos
                </h4>
                <div className="flex gap-2">
                  {redesSociales.map((red, index) => {
                    const IconComponent = red.icon;
                    return (
                      <Link
                        key={index}
                        href={red.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-105"
                      >
                        <IconComponent className="w-4 h-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-center gap-2"
            >
              <div className="text-xs text-gray-500 text-center md:text-left">
                <p>
                  &copy; {currentYear} INPROCO. Todos los derechos reservados.
                </p>
              </div>

              <div className="text-xs text-gray-500 text-center md:text-right">
                <p>Desarrollado para la industria chilena</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
