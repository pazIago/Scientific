import Image from "next/image";
import Link from "next/link";

interface frameProps {
  permalink: string;
  media_url: string;
}

const Frame = ({ permalink, media_url }: frameProps) => {
  return (
    <Link
      href={permalink}
      className="relative block aspect-square w-full max-w-[368px] min-w-[300px] border-[1px]"
    >
      <Image
        className="object-cover object-center"
        src={media_url}
        alt=""
        fill
      />
    </Link>
  );
};

export default Frame;
