"use client";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import Link from "next/link";
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";
import LinkedIn from "./icons/LinkedIn";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";

const secciones = [
  {
    nombre: "Inicio",
    url: "/",
  },
  {
    nombre: "Nosotros",
    url: "#nosotros",
  },
  {
    nombre: "Proyectos",
    url: "#proyectos",
  },
  {
    nombre: "Servicios",
    url: "/servicios",
  },
  {
    nombre: "Contacto",
    url: "#contacto",
  },
];

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
<<<<<<< HEAD
      <header className="z-20 fixed w-auto h-20 flex justify-between items-center px-6 py-3 rounded-2xl top-4 left-4 right-4 max-w-[calc(100%-2rem)] border border-white/20 shadow-2xl backdrop-blur-md bg-white/10">
        {/* Logo con efecto mejorado */}
        <Link
          className="hover:scale-110 transition-all duration-300 hover:drop-shadow-lg"
          href="/"
        >
=======
      <header className="z-20 backdrop-brightness-75 flex fixed w-auto h-12 justify-between items-center rounded-xs p-4 top-2 left-2 right-2 max-w-[calc(100%-1rem)] backdrop-blur-sm text-lg">
        <Link className="hover:scale-105 transition" href="/">
>>>>>>> 163b8d7eee36ff247c4c83e6a3fbab0549307d26
          <Image
            draggable={false}
            width={120}
            height={120}
            src={"/logos/logo-fade.webp"}
            alt="Logo de Inproco"
            loading="eager"
            className="filter drop-shadow-md"
          />
        </Link>

        {/* Botón móvil mejorado */}
        <button
          title="Menu"
          className="md:hidden cursor-pointer text-white hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-xl hover:bg-white/10"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <IconMenu size={28} strokeWidth={2.5} />
        </button>

        {/* Navegación desktop mejorada */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {secciones.map(({ nombre, url }) => (
              <li key={nombre} className="relative group">
                <Link
                  href={url}
                  className="text-white font-semibold text-lg tracking-wide transition-all duration-300 hover:text-primary relative"
                >
                  {nombre}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes sociales mejoradas */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            className="group p-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
            href="https://www.facebook.com/inproco.cl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="fill-white group-hover:fill-primary transition-all duration-300 size-5" />
          </Link>
          <Link
            className="group p-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
            href="https://www.linkedin.com/company/inproco-ltda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="fill-white group-hover:fill-primary transition-all duration-300 size-5" />
          </Link>
          <Link
            className="group p-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
            href="https://www.instagram.com/inproco.cl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="fill-white group-hover:fill-primary transition-all duration-300 size-5" />
          </Link>
        </div>
      </header>

      <MobileNav
        secciones={secciones}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </>
  );
}

export default Header;
