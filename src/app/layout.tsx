import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "INPROCO - Expertos en diseño, fabricación y desarrollo de productos y servicios para la minería, industria y obras civiles.",
  description:
    "Somos una empresa de ingeniería mecánica y eléctrica dedicada al diseño, la fabricación y el desarrollo de productos y servicios para su uso en minería, industria y las obras civiles.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
