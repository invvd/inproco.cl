import Image from "next/image";
import { MobileNav } from "./MobileNav";
import Link from "next/link";

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
    nombre: "Servicios",
    url: "/servicios",
  },
  {
    nombre: "Contacto",
    url: "/contacto",
  },
];

export function Header() {
  return (
    <header className="z-10 backdrop-brightness-75 flex fixed w-full h-16 justify-between items-center p-4 rounded-lg top-2 left-2 right-2 max-w-[calc(100%-1rem)] backdrop-blur-sm">
      <Image
        draggable={false}
        width={100}
        height={100}
        src={"/logos/logo-white.webp"}
        alt="Logo de Inproco"
        loading="eager"
      />

      <MobileNav secciones={secciones} />

      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {secciones.map(({ nombre, url }) => (
            <li key={nombre}>
              <Link href={url}>{nombre}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
