"use client";
import { useEffect, useRef } from "react";

type HeroProps = {
  videoSrc: string;
};

export default function Hero({ videoSrc }: HeroProps) {
  const sectionRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (section) {
        section.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, []);
  return (
    <section id="hero" className="w-full max-h-svh top-0 z-0 bg-black">
      <video
        ref={sectionRef}
        controlsList="nodownload"
        loop
        className="aspect-[4/3] max-h-svh -z-10 top-0 w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} />
      </video>
    </section>
  );
}
