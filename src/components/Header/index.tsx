import MenuItem from "./MenuItem";
import SocialIcon from "./SocialIcon";
import FBSvg from "../Global/facebook";
import INSvg from "../Global/instagram";
import LKSvg from "../Global/linkedin";
import Logo from "../Global/Logo";

const Header = ({ isBr, setIsBr }: { isBr: boolean; setIsBr: Function }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-[1140px] mx-auto p-4 flex justify-between items-center">
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
      <nav className="fixed grid bg-white rounded-xl right-5 top-40 [&>button]:p-2 overflow-hidden opacity-10  hover:opacity-100 transition">
        <button className="hover:bg-slate-200" onClick={() => setIsBr(false)}>
          US
        </button>
        <button className="hover:bg-slate-200" onClick={() => setIsBr(true)}>
          BR
        </button>
      </nav>
    </header>
  );
};

export default Header;
