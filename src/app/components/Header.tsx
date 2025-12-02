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
    nombre: "Servicios",
    url: "#servicios",
  },
  {
    nombre: "Proyectos",
    url: "#proyectos",
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
      <header className="z-20 fixed w-auto h-16 flex justify-between items-center px-4 py-2 rounded-2xl top-2 left-2 right-2 max-w-[calc(100%-2rem)] border border-white/5 shadow-2xl backdrop-blur-md bg-black/30">
        {/* Logo con efecto mejorado */}
        <Link
          className="hover:scale-105 transition-all duration-300 max-h-full flex shrink w-fit items-center hover:drop-shadow-lg"
          href="/"
        >
          <Image
            draggable={false}
            width={120}
            height={120}
            src={"/logos/logo-fade.webp"}
            alt="Logo de Inproco"
            loading="eager"
            className="filter drop-shadow-md flex-1"
          />
        </Link>

        {/* Botón móvil mejorado */}
        <button
          title="Menu"
          className="lg:hidden cursor-pointer text-white hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-xl hover:bg-white/10"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <IconMenu size={28} strokeWidth={2.5} />
        </button>

        {/* Navegación desktop mejorada */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {secciones.map(({ nombre, url }) => (
              <li key={nombre} className="relative group">
                <Link
                  href={url}
                  className="text-white font-semibold tracking-wide transition-all duration-300 hover:text-primary relative"
                >
                  {nombre}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes sociales mejoradas */}
        <div className="hidden lg:flex items-center space-x-4">
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
