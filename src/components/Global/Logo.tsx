import Image from "next/image";

interface logoProps {
  color: "color" | "pb";
  className?: string;
}

const Logo = ({ color, className }: logoProps) => {
  if (color === "color") {
    return (
      <Image
        className={className}
        src={"/assets/logo_color.webp"}
        alt="logo"
        fill
      />
    );
  } else {
    return (
      <Image
        className={className}
        src={"/assets/logo_pb.png"}
        alt="logo"
        fill
      />
    );
  }
};

export default Logo;
