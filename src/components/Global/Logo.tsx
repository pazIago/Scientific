import Image from "next/image";
import React from "react";
import ColorImage from "../../../public/assets/logo_color.webp";
import PBImage from "../../../public/assets/logo_pb.png";

interface logoProps {
  color: "color" | "pb";
  className?: string;
}

const Logo = ({ color, className }: logoProps) => {
  if (color === "color") {
    return <Image className={className} src={ColorImage} alt="logo" fill />;
  } else {
    return <Image className={className} src={PBImage} alt="logo" fill />;
  }
};

export default Logo;
