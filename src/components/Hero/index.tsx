import Image from "next/image";
import React from "react";
import HeroIMG from "../../../public/assets/HERO2.webp";
const Hero = () => {
  return (
    <div className="w-full h-[420px] max-sm:h-[200px]">
      <div className="relative flex items-center justify-center h-full">
        <Image
          className="object-cover z-[-1]"
          src={HeroIMG}
          alt="hero banner"
          fill
        />
        <h2 className="z-10 text-6xl font-medium text-center text-white max-md:text-5xl max-sm:text-2xl">
          PRECISAMENTE O QUE <br></br> VOCÊ QUER DIZER
        </h2>
      </div>
    </div>
  );
};

export default Hero;
