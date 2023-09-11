import Image from "next/image";

const Hero = ({ isBr }: { isBr: boolean }) => {
  return (
    <div className="w-full h-[420px] max-sm:h-[200px]">
      <div className="relative flex items-center justify-center h-full">
        <Image
          className="object-cover z-[-1]"
          src={"/assets/HERO2.webp"}
          alt="hero banner"
          fill
        />
        <h2 className="z-10 text-6xl font-medium text-center text-white uppercase max-md:text-5xl max-sm:text-2xl">
          {isBr ? (
            <span>
              PRECISAMENTE O QUE <br></br> VOCÊ QUER DIZER
            </span>
          ) : (
            <span>
              PRECISELY <br></br> WHAT YOU MEAN
            </span>
          )}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
