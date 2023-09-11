import MenuItem from "./MenuItem";
import SocialIcon from "./SocialIcon";
import FBSvg from "../Global/facebook";
import INSvg from "../Global/instagram";
import LKSvg from "../Global/linkedin";
import Logo from "../Global/Logo";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

const Header = ({ isBr, setIsBr }: { isBr: boolean; setIsBr: Function }) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    setTimeout(() => {
      setShowMenu(false);
    }, 5000);
  }

  function handleLang(language: string) {
    if (language == "BR") {
      setIsBr(true);
      localStorage.setItem("prefLang", language);
    } else {
      setIsBr(false), localStorage.setItem("prefLang", language);
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-sm:hidden max-w-[1140px] mx-auto p-4 flex justify-between items-center">
        <div className="relative w-[146px] h-[31px] max-sm:hidden">
          <Logo className="object-cover" color="color" />
        </div>
        <nav className="max-sm:top-0 max-sm:sticky max-sm:w-screen max-sm:bg-white max-sm:flex max-sm:justify-between">
          <MenuItem anchor="#sobre" text={isBr ? "Sobre" : "About"} />
          <MenuItem
            anchor="#servicos"
            text={isBr ? "Serviços" : "What we do"}
          />
          <MenuItem anchor="#contato" text={isBr ? "Contato" : "Contact"} />
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

      <div className="flex justify-between p-4 sm:hidden">
        {" "}
        <div className="relative w-[146px] h-[31px]">
          <Logo className="object-cover" color="color" />
        </div>
        <div className="flex gap-2">
          <nav className="flex bg-white rounded-xl right-5 top-40 [&>button]:p-2 overflow-hidden shadow-md">
            <button
              className="hover:bg-slate-200"
              onClick={() => setIsBr(false)}
            >
              EN
            </button>
            <button
              className="hover:bg-slate-200"
              onClick={() => setIsBr(true)}
            >
              PT
            </button>
          </nav>
          <button
            className="flex items-center justify-center m-auto"
            onClick={() => handleClick()}
          >
            <BiMenu size={32} />
          </button>
          {showMenu ? (
            <nav className="absolute right-0 grid transition bg-white top-[72px] animate-fade">
              <MenuItem anchor="#sobre" text={isBr ? "Sobre" : "About"} />
              <MenuItem
                anchor="#servicos"
                text={isBr ? "Serviços" : "What we do"}
              />
              <MenuItem anchor="#contato" text={isBr ? "Contato" : "Contact"} />
              <ul className="flex gap-3 px-2 py-2">
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
            </nav>
          ) : (
            ""
          )}
        </div>
      </div>
      <nav className="fixed grid bg-white rounded-xl right-5 top-40 [&>button]:p-2 overflow-hidden max-sm:hidden shadow-md">
        <button className="hover:bg-slate-200" onClick={() => handleLang("EN")}>
          EN
        </button>
        <button className="hover:bg-slate-200" onClick={() => handleLang("BR")}>
          PT
        </button>
      </nav>
    </header>
  );
};

export default Header;
