import { StaticImageData } from "next/image";
import React, { ReactElement } from "react";

interface buttonProps {
  text: string;
  link: string;
  icon: ReactElement;
}

const Button = ({ text, link, icon }: buttonProps) => {
  return (
    <a href={link}>
      {icon}
      {text}
    </a>
  );
};

export default Button;
