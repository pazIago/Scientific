import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface infoBlockProps {
  position: "left" | "right";
  image: StaticImageData;
  children: ReactNode;
  title: string;
}

const InfoBlock = ({ position, image, children, title }: infoBlockProps) => {
  switch (position) {
    case "left":
      return (
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          <div className="relative flex items-center justify-center w-full h-full min-h-[404px] max-md:min-h-[280px]">
            <h2 className="text-5xl font-semibold text-white uppercase">
              {title}
            </h2>
            <Image className="object-cover z-[-1]" src={image} fill alt="" />
          </div>
          <div className="grid items-center gap-4 ml-[35px] mr-[75px]">
            {children}
          </div>
        </div>
      );

    case "right":
      return (
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          <div className="grid max-md:row-start-2 items-center gap-4 ml-[35px] mr-[75px]">
            {children}
          </div>
          <div className="relative flex items-center justify-center w-full h-full min-h-[404px] max-md:min-h-[280px]">
            <h2 className="text-5xl font-semibold text-white uppercase">
              {title}
            </h2>
            <Image className="object-cover z-[-1]" src={image} fill alt="" />
          </div>
        </div>
      );
  }
};

export default InfoBlock;
