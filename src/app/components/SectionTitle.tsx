import React, { ReactNode } from "react";
import BadgeInproco from "./BadgeInproco";
import localFont from "next/font/local";

const monument = localFont({
  src: "../fonts/Monument.woff2",
});

type SectionTitleProps = {
  children?: ReactNode;
  invertBadgeColor?: boolean;
  className?: string;
};

function SectionTitle({
  children,
  invertBadgeColor,
  className,
}: SectionTitleProps) {
  return (
    <div className={"flex justify-center items-center" + className}>
      <BadgeInproco style={invertBadgeColor ? "dark" : "light"} />
      <h2 className={`${monument.className} text-4xl`}>{children}</h2>
    </div>
  );
}

export default SectionTitle;
