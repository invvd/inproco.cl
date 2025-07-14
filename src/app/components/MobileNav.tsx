import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import Facebook from "./icons/Facebook";
import LinkedIn from "./icons/LinkedIn";
import Instagram from "./icons/Instagram";

type MobileNavProps = {
  secciones: {
    nombre: string;
    url: string;
  }[];
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
};

export function MobileNav({
  secciones,
  showMenu,
  setShowMenu,
}: MobileNavProps) {
  return (
    <div className="md:hidden flex items-center">
      {/* Menu móvil mejorado */}
      <nav
        className={`fixed glass-effect backdrop-blur-lg flex justify-center items-center text-center top-0 z-50 right-0 w-screen h-full ${
          showMenu ? "" : "translate-y-full"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
          <ul className="text-2xl flex flex-col space-y-8">
            {/* Botón cerrar mejorado */}
            <li className="flex justify-center mb-4">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="cursor-pointer p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:text-secondary"
                title="Cerrar"
              >
                <IconX size={32} />
              </button>
            </li>

            {/* Enlaces de navegación mejorados */}
            {secciones.map(({ nombre, url }) => (
              <li key={nombre} className="relative group">
                <Link
                  href={url}
                  className="text-white/90 hover:text-white font-medium text-2xl tracking-wide transition-all duration-300 hover:text-shadow-lg block py-2 px-4 rounded-xl hover:bg-white/5"
                  onClick={() => setShowMenu(false)}
                >
                  {nombre}
                  <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-[calc(100%-2rem)] rounded-full"></span>
                </Link>
              </li>
            ))}

            {/* Redes sociales mejoradas */}
            <li className="flex justify-center space-x-6 mt-8 pt-6 border-t border-white/10">
              <Link
                className="group p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
                href="https://www.facebook.com/inproco.cl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="fill-white/80 group-hover:fill-secondary transition-all duration-300 size-6" />
              </Link>
              <Link
                className="group p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
                href="https://www.linkedin.com/company/inproco-ltda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="fill-white/80 group-hover:fill-secondary transition-all duration-300 size-6" />
              </Link>
              <Link
                className="group p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
                href="https://www.instagram.com/inproco.cl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="fill-white/80 group-hover:fill-secondary transition-all duration-300 size-6" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
