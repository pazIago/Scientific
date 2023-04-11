import { any } from "prop-types";
import React, { ReactNode } from "react";

interface childrenProps {
  children: ReactNode;
  link: string;
}

const SocialIcon = ({ children, link }: childrenProps) => {
  return (
    <a
      className="flex justify-center items-center text-white bg-sciblue h-[34px] w-[34px] hover:scale-90 transition-all"
      href={link}
    >
      {children}
    </a>
  );
};

export default SocialIcon;
