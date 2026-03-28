import Contacto from "./sections/Contacto";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import Proyectos from "./sections/Proyectos";
import Servicios from "./sections/Servicios";
import Script from "next/script";

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Diseño, fabricación y montaje de salas eléctricas",
    name: "Salas eléctricas, subestaciones y tableros en Chile",
    provider: {
      "@type": "Organization",
      name: "INPROCO",
      url: "https://inproco.cl",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de ingeniería eléctrica",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diseño y cálculo de salas eléctricas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fabricación de subestaciones y celdas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Montaje e integración eléctrica",
          },
        },
      ],
    },
  };

  return (
    <main className="overflow-hidden">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero videoSrc="/videos/hero.webm" />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Contacto />
    </main>
  );
}
