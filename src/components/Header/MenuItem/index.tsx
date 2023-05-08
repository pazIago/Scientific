import Link from "next/link";

interface MenuItemProps {
  text: string;
  anchor: string;
}

const MenuItem = ({ text, anchor }: MenuItemProps) => {
  return (
    <Link
      className="inline-flex justify-center items-center p-4 text-sm transition-all border-b-4 border-b-transparent hover:text-sciblue hover:border-b-4 hover:border-b-sciblue"
      href={anchor}
    >
      {text}
    </Link>
  );
};

export default MenuItem;
