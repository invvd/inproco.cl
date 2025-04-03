"use client";
import localFont from "next/font/local";
import Image from "next/image";
import Stack from "../components/Stack";
import Instagram from "../components/icons/Instagram";
import Facebook from "../components/icons/Facebook";
import LinkedIn from "../components/icons/LinkedIn";

const monument = localFont({ src: "../fonts/Monument.woff2" });

const rrss = [
  {
    nombre: "Instagram",
    usuario: "@inproco.cl",
    url: "https://www.instagram.com/inproco.cl/",
    Icon: Instagram,
  },
  {
    nombre: "Facebook",
    usuario: "Inproco",
    url: "https://www.facebook.com/inproco.cl",
    Icon: Facebook,
  },
  {
    nombre: "LinkedIn",
    usuario: "Inproco Ltda.",
    url: "https://www.linkedin.com/company/inproco-chile/",
    Icon: LinkedIn,
  },
];

// Correo, formulario, mapa, redes sociales (en detalle)
function Contacto() {
  return (
    <section
      id="contacto"
      className="p-10 justify-center items-center flex flex-col bg-gradient-to-br from-black/80 via-black/80 to-secondary/20"
    >
      <div className="flex justify-center items-center gap-2">
        <Image
          draggable={false}
          loading="lazy"
          alt="Insignia de Inproco"
          className="drop-shadow-md -translate-y-0.5 w-10 sm:w-12"
          src={"/logos/badge-white.webp"}
          width={50}
          height={50}
        />
        <h2
          className={`${monument.className} font-bold uppercase text-center text-4xl xs:text-5x z-10l`}
        >
          Contacto
        </h2>
      </div>
      <h4 className="text-center mt-2 text-white/80">
        ¿Tienes dudas? ¡Estamos aquí para ayudarte! 👋📞
      </h4>
      <div className="w-full mt-10 gap-10 grid grid-flow-row md:grid-flow-col px-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="text-2xl mb-3 text-white font-bold">Contáctanos!</h3>
          <form className="w-full h-fit max-w-[500px] flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <label className="flex flex-col">
                <span className="font-semibold">Nombre: *</span>
                <input
                  type="text"
                  placeholder="Nombre"
                  required
                  className="p-2 rounded-md border border-secondary border- focus:outline-none focus:ring-2 transition focus:ring-secondary"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-semibold">Correo electrónico: *</span>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  className="p-2 rounded-md border border-secondary focus:outline-none focus:ring-2 transition focus:ring-secondary"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-semibold">Mensaje: *</span>
                <textarea
                  placeholder="Mensaje"
                  required
                  className="p-2 rounded-md border border-secondary focus:outline-none focus:ring-2 transition focus:ring-secondary h-24"
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-primary transition duration-200 ease-in-out cursor-pointer"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="text-2xl text-center mb-3 text-white font-bold">
            También puedes encontrarnos en:
          </h3>
          <div className="grid lg:grid-cols-3 gap-4 mt-4">
            {rrss.map((rrss, index) => (
              <div
                className="p-5 flex flex-col justify-center items-center"
                key={index}
              >
                <h6 className="mb-1 flex items-center gap-2 text-white font-semibold text-lg">
                  <span>
                    <rrss.Icon className="fill-white" />
                  </span>
                  {rrss.nombre}
                </h6>
                <span>{rrss.usuario}</span>

                <Stack />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <h3 className="text-center mt-15 text-3xl font-bold">Direcciones</h3>
      <h4 className="text-center mt-2 mb-8 text-white/80">
        Encuéntranos fácilmente y visítanos cuando quieras! 📍✨
      </h4>
      <div className="flex flex-col transition-all duration-300 ease-in-out">
        <iframe
          className="border-secondary border-2 w-full h-72 rounded-t-lg"
          title="Casa Matriz"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.334441662408!2d-70.71597842343762!3d-33.57066480368034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dbf6f4efb77d%3A0xa04cb532fcf67ad!2sCam.%20Los%20Pinos%203320%2C%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1743223755018!5m2!1ses-419!2scl"
          width="600"
          height="450"
        ></iframe>
        <iframe
          className="w-full border-secondary border-2 border-t-0 h-72 rounded-b-lg"
          title="Planta La Vara"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.4838179884714!2d-70.7166340234378!3d-33.56678530348088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dbf5aaec1543%3A0x44307806dbd8cdeb!2sCam.%20La%20Vara%2003395%2C%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1743224182328!5m2!1ses-419!2scl"
          width="600"
          height="450"
        ></iframe>
      </div> */}
    </section>
  );
}

export default Contacto;
