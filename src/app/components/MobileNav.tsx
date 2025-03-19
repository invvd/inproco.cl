"use client";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

type MobileNavProps = {
  secciones: {
    nombre: string;
    url: string;
  }[];
};

export function MobileNav({ secciones }: MobileNavProps) {
  const [showMenu, setShowMenu] = useState(false);

  // Lógica del botón de menú
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // Menu
  return (
    <div className="md:hidden flex items-center">
      {/* Boton del menu */}
      <button onClick={toggleMenu} className="cursor-pointer" title="Menu">
        <IconMenu />
      </button>

      {/* Menu */}
      {/* <nav
        className={`fixed border top-0 z-50 right-0 w-2/3 max-w-[300px] h-full ${
          showMenu ? "translate-x-0" : "translate-x-[120%]"
        } transition-all duration-200`}
      >
        <ul>
          <li>
            <button
              onClick={toggleMenu}
              className="cursor-pointer"
              title="Cerrar"
            >
              <IconX />
            </button>
          </li>
          {secciones.map(({ nombre, url }) => (
            <li key={nombre}>
              <Link href={url}>{nombre}</Link>
            </li>
          ))}
        </ul>
      </nav> */}
    </div>
  );
}
