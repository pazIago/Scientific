import type { ReactElement } from "react";

interface ButtonProps {
  text: string;
  link: string;
  icon: ReactElement;
}

const Button = ({ text, link, icon }: ButtonProps) => {
  return (
    <a href={link}>
      {icon}
      {text}
    </a>
  );
};

export default Button;
