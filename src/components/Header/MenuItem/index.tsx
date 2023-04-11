import React from "react";

interface menuItemProps {
  text: string;
  anchor: string;
}

const MenuItem = ({ text, anchor }: menuItemProps) => {
  return (
    <a
      className="inline-flex justify-center items-center p-4 text-sm transition-all border-b-4 border-b-transparent hover:text-sciblue hover:border-b-4 hover:border-b-sciblue"
      href={anchor}
    >
      {text}
    </a>
  );
};

export default MenuItem;
