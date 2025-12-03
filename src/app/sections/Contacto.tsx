"use client";
import { IconBuilding, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import FormInputTextArea from "../components/FormInputTextArea";

const correo = "contacto@inproco.cl";

function Contacto() {
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "5a072647-1200-41e8-84ac-bd451ba307aa");

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
  };
  return (
    <section
      id="contacto"
      className="w-full relative overflow-hidden bg-gradient-to-br from-primary/20 via-black/90 to-black/95"
    >
      <div className="flex flex-col lg:flex-row ">
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
            </div>
          </div>
        </div>

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
              <h3 className="text-2xl font-bold text-white mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-gray-300 text-sm">
                Cuéntanos sobre tu proyecto y te contactaremos a la brevedad
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
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
    </section>
  );
}

export default Contacto;
