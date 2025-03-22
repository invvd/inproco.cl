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
      {/* Menu */}
      <nav
        className={`fixed backdrop-blur-sm flex backdrop-brightness-[25%] justify-center items-center text-center top-0 z-50 right-0 w-screen h-full ${
          showMenu ? "" : "translate-y-full"
        } transition`}
      >
        <ul className="text-xl [&>li]:hover:text-secondary [&>li]:transition-colors flex flex-col space-y-4">
          <li>
            <button
              onClick={() => setShowMenu(!showMenu)}
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
          <li className="flex space-x-4">
            <Link className="group" href="https://www.facebook.com/inproco.cl/">
              <Facebook className="fill-white group-hover:fill-secondary transition rounded-xs size-4.5" />
            </Link>
            <Link
              className="group"
              href="https://www.linkedin.com/company/inproco-ltda"
            >
              <LinkedIn className="fill-white group-hover:fill-secondary transition rounded-xs size-4.5" />
            </Link>
            <Link className="group" href="https://www.facebook.com/inproco.cl/">
              <Instagram className="fill-white group-hover:fill-secondary transition rounded-xs size-4.5" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
