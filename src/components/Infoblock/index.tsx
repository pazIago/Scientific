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
        <div className="flex gap-8 max-md:flex-col">
          <div className="relative flex items-center justify-center w-full h-full min-h-[404px] max-md:min-h-[280px]">
            <h2 className="text-5xl font-semibold text-white uppercase max-md:text-[40px]">
              {title}
            </h2>
            <Image className="object-cover z-[-1]" src={image} fill alt="" />
          </div>
          <div className="flex flex-col max-w-[444px] max-md:max-w-full justify-center gap-4 ml-[35px] mr-[75px]">
            {children}
          </div>
        </div>
      );

    case "right":
      return (
        <div className="flex gap-8 max-md:flex-col-reverse">
          <div className="flex flex-col max-md:max-w-full justify-center max-w-[444px] gap-4 ml-[35px] mr-[75px]">
            {children}
          </div>
          <div className="relative flex items-center justify-center w-full h-full min-h-[404px] max-md:min-h-[280px]">
            <h2 className="text-5xl font-semibold text-white uppercase max-md:text-[40px]">
              {title}
            </h2>
            <Image className="object-cover z-[-1]" src={image} fill alt="" />
          </div>
        </div>
      );
  }
};

export default InfoBlock;
