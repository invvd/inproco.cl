"use client";
import { IconBuilding, IconMail, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import FormInputTextArea from "../components/FormInputTextArea";

const correo = "contacto@inproco.cl";
const telefono = "+56 9 8765 4321";

function Contacto() {
  return (
    <section
      id="contacto"
      className="w-full relative overflow-hidden bg-gradient-to-br from-primary/20 via-black/90 to-black/95"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Contact Information */}
        <div className="w-full lg:w-1/2 relative">
          <div className="h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 py-8 lg:py-12 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Contáctanos
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                ¿Tienes un proyecto en mente? Estamos aquí para convertir tus
                ideas en realidad.
              </p>
            </motion.div>

            <div className="space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  href={"https://maps.app.goo.gl/WB6YB8GWYsBrs6QZ8"}
                  className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                  target="_blank"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/80 transition-colors duration-300">
                    <IconBuilding stroke={1.5} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-primary transition-colors duration-300">
                      Nuestra oficina
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Cam. La Vara 03395, San Bernardo
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Región Metropolitana, Chile
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href={`mailto:${correo}`}
                  className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                  target="_blank"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-secondary/80 transition-colors duration-300">
                    <IconMail stroke={1.5} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-secondary transition-colors duration-300">
                      Correo electrónico
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {correo}
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href={`tel:${telefono}`}
                  className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                  target="_blank"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/80 transition-colors duration-300">
                    <IconPhone stroke={1.5} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-primary transition-colors duration-300">
                      Teléfono
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {telefono}
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <Image
                alt="Logo Inproco"
                draggable={false}
                src={"/logos/logo-full-white.webp"}
                width={300}
                height={150}
                className="opacity-80"
              />
            </motion.div>
          </div>
        </div>
<<<<<<< HEAD

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 md:p-10 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg"
          >
            <div className="mb-6 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-gray-300">
                Cuéntanos sobre tu proyecto y te contactaremos a la brevedad
              </p>
            </div>

            <form className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FormInput
                  label="Nombre completo"
                  placeholder="Ej: Juan Pérez"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FormInput
                  label="Correo electrónico"
                  placeholder="ejemplo@mail.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FormInput
                  label="Teléfono (opcional)"
                  placeholder="+56 9 1234 5678"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <FormInputTextArea
                  label="Mensaje"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <SubmitButton label="Enviar mensaje" />
              </motion.div>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 text-center text-sm text-gray-400"
            >
              Al enviar este formulario, aceptas que nos pongamos en contacto
              contigo
            </motion.div>
          </motion.div>
        </div>
      </div>
=======
      </div>
      <div className="flex flex-col gap-4 w-full justify-center items-center bg-gradient-to-br from-neutral-950  to-neutral-800 py-20">
        <form className="flex flex-col gap-8 w-full items-center max-w-md">
          <FormInput label="Nombre" placeholder="Jorge Sánchez" />
          <FormInput
            label="Correo electrónico"
            placeholder="ejemplo@mail.com"
          />
          <FormInputTextArea label="Mensaje" placeholder="Mensaje..." />
          <SubmitButton label="Enviar" />
        </form>
      </div>
>>>>>>> 163b8d7eee36ff247c4c83e6a3fbab0549307d26
    </section>
  );
}

export default Contacto;
