import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });
const siteUrl = "https://inproco.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Salas y Tableros Eléctricos en Chile | Inproco",
  description:
    "Diseño, fabricación y montaje de salas y tableros eléctricos, además de subestaciones para minería e industria en Chile. Cotiza con Inproco.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "VVygJcpmJhd478Rz64qIhN4F6hnHPxsGOHprtZ9OFYU",
  },
  openGraph: {
    title: "Salas y Tableros Eléctricos en Chile | Inproco",
    description:
      "Ingeniería eléctrica y mecánica para salas y tableros eléctricos, subestaciones y soluciones industriales en Chile.",
    url: siteUrl,
    siteName: "INPROCO",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/logos/logo-fade.webp",
        width: 1200,
        height: 630,
        alt: "Inproco salas eléctricas en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salas y Tableros Eléctricos en Chile | Inproco",
    description:
      "Diseño, fabricación y montaje de salas y tableros eléctricos para minería e industria en Chile.",
    images: ["/logos/logo-fade.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "INPROCO",
    description:
      "Empresa chilena de ingeniería eléctrica y mecánica especialista en salas eléctricas, subestaciones y tableros.",
    url: siteUrl,
    image: `${siteUrl}/logos/logo-fade.webp`,
    email: "contacto@inproco.cl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cam. La Vara 03395",
      addressLocality: "San Bernardo",
      addressRegion: "Region Metropolitana",
      addressCountry: "CL",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    sameAs: [
      "https://www.facebook.com/inproco.cl/",
      "https://www.linkedin.com/company/inproco-ltda",
      "https://www.instagram.com/inproco.cl/",
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${montserrat.className} max-w-screen antialiased`}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
