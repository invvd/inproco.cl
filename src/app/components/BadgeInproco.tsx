import Image from "next/image";
import React from "react";

function BadgeInproco({
  className = "",
  style = "light",
}: {
  className?: string;
  style?: "dark" | "light";
}) {
  return (
    <Image
      draggable={false}
      loading="lazy"
      alt="Insignia de Inproco"
      className={
        "drop-shadow-md scale-90 -translate-y-1 gap-2 object-cover " + className
      }
      src={
        style === "light" ? "/logos/badge-white.webp" : "/logos/badge-gray.webp"
      }
      width={50}
      height={50}
    />
  );
}

export default BadgeInproco;
