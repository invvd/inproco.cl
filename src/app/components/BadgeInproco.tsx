import Image from "next/image";
import React from "react";

function BadgeInproco({ className = "" }) {
  return (
    <Image
      draggable={false}
      loading="lazy"
      alt="Insignia de Inproco"
      className={"drop-shadow-md -translate-y-0.5 object-cover " + className}
      src={"/logos/badge-white.webp"}
      width={50}
      height={50}
    />
  );
}

export default BadgeInproco;
