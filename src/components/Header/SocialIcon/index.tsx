import type { PropsWithChildren } from "react";
import Link from "next/link";

interface ChildrenProps {
  link: string;
}

const SocialIcon = ({ children, link }: PropsWithChildren<ChildrenProps>) => {
  return (
    <Link
      className="flex justify-center items-center text-white bg-sciblue h-[34px] w-[34px] hover:scale-90 transition-all"
      href={link}
      passHref
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default SocialIcon;
