import React from "react";
import MenuItem from "./MenuItem";
import SocialIcon from "./SocialIcon";
import FBSvg from "../Global/facebook";
import INSvg from "../Global/instagram";
import LKSvg from "../Global/linkedin";
import Logo from "../Global/Logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-[1140px] mx-auto p-4 flex justify-between items-center">
        <div className="relative w-[146px] h-[31px] max-sm:hidden">
          <Logo className="object-cover" color="color" />
        </div>
        <nav className="max-sm:top-0 max-sm:sticky max-sm:w-screen max-sm:bg-white max-sm:flex max-sm:justify-between">
          <MenuItem anchor="#sobre" text="Sobre" />
          <MenuItem anchor="#servicos" text="Servicos" />
          <MenuItem anchor="#contato" text="Contato" />
        </nav>
        <ul className="flex gap-3 max-sm:hidden">
          <SocialIcon link="https://www.facebook.com/ScientificLinguagem/?locale=pt_BR">
            <FBSvg />
          </SocialIcon>
          <SocialIcon link="https://www.instagram.com/scientific_linguagem/">
            <INSvg />
          </SocialIcon>
          <SocialIcon link="https://www.linkedin.com/company/scientific-linguagem/about/">
            <LKSvg />
          </SocialIcon>
        </ul>
      </div>
    </header>
  );
};

export default Header;
