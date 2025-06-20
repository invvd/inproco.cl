"use client";
import { IconBuilding, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import FormInputTextArea from "../components/FormInputTextArea";

const correo = "contacto@inproco.cl";

// Correo, formulario, mapa, redes sociales (en detalle)
function Contacto() {
  return (
    <section
      id="contacto"
      className="w-full grid grid-rows-[auto_auto] grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 bg-gradient-to-br from-black/80 via-black/80 to-secondary/20 "
    >
      <div className="text-neutral-300 py-20 w-full h-full items-center lg:border-r-[1px] border-neutral-900 bg-neutral-950 flex flex-col gap-10">
        <div className="">
          <h2 className="font-bold text-5xl mb-1 text-white">Contáctanos</h2>
          <p className="text-lg">¿Tienes dudas? ¡Estamos aquí para ayudarte!</p>
        </div>
        <div className="gap-4 flex flex-col">
          <Link
            href={"https://maps.app.goo.gl/WB6YB8GWYsBrs6QZ8"}
            className="flex gap-4 group w-fit"
            target="_blank"
          >
            <IconBuilding
              stroke={1}
              className="size-7 object-fill group-hover:text-white transition"
            />
            <div className="flex flex-col w-fit group-hover:text-white transition">
              <span>Cam. La Vara 03395, San Bernardo</span>
              <span>Región Metropolitana</span>
            </div>
          </Link>

          <Link
            href={`mailto:${correo}`}
            className="flex gap-4 w-fit items-center group"
            target="_blank"
          >
            <IconMail
              stroke={1}
              className="size-7 object-fill group-hover:text-white transition"
            />
            <div className="flex flex-col w-fit group-hover:text-white transition">
              <span>{correo}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full justify-center items-center bg-gradient-to-br from-neutral-950  to-neutral-800 py-20">
        <form className="flex flex-col gap-8 w-full items-center max-w-md">
          <FormInput label="Nombre" placeholder="Daniel Mass" />
          <FormInput
            label="Correo electrónico"
            placeholder="ejemplo@mail.com"
          />
          <FormInputTextArea label="Mensaje" placeholder="Mensaje..." />
          <SubmitButton label="Enviar" />
        </form>
      </div>
    </section>
  );
}

export default Contacto;
