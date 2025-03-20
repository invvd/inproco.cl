"use client";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import Link from "next/link";
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";

const secciones = [
  {
    nombre: "Inicio",
    url: "/",
  },
  {
    nombre: "Nosotros",
    url: "/nosotros",
  },
  {
    nombre: "Proyectos",
    url: "/proyectos",
  },
  {
    nombre: "Servicios",
    url: "/Servicios",
  },
  {
    nombre: "Contacto",
    url: "/contacto",
  },
];

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="z-10 backdrop-brightness-75 flex fixed w-auto h-16 justify-between items-center p-4 rounded-lg top-2 left-2 right-2 max-w-[calc(100%-1rem)] backdrop-blur-sm">
        <Link className="hover:scale-105 transition" href="/">
          <Image
            draggable={false}
            width={100}
            height={100}
            src={"/logos/logo-fade.webp"}
            alt="Logo de Inproco"
            loading="eager"
          />
        </Link>

        <button
          title="Menu"
          className="md:hidden cursor-pointer hover:text-primary transition-colors"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <IconMenu />
        </button>

        <nav className="hidden md:block">
          <ul className="[&>li]:hover:text-secondary [&>li]:transition flex space-x-4">
            {secciones.map(({ nombre, url }) => (
              <li key={nombre}>
                <Link href={url}>{nombre}</Link>
              </li>
            ))}
          </ul>
        </nav>
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
