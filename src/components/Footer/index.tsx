import Logo from "../Global/Logo";
import SocialIcon from "../Header/SocialIcon";
import FBSvg from "../Global/facebook";
import INSvg from "../Global/instagram";
import LKSvg from "../Global/linkedin";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#395962]">
      <div className="max-w-[1140px] mx-auto px-4 py-16 flex flex-wrap max-md:grid max-md:gap-6 max-md:justify-center justify-between">
        <div className="flex flex-col gap-1 text-sm text-white max-md:mb-8 max-md:items-center">
          <div className="relative mb-2 w-[204px] h-[44px] ">
            <Logo className="object-cover" color="pb" />
          </div>
          <span>Rua João Abbot, 109</span>
          <span>Cep 90460-150 - Porto Alegre - RS</span>
          <span>
            <strong>Telefone: (51) 3012.0575 / (51) 99977.3601</strong>
          </span>
        </div>
        <div className="flex flex-col items-center justify-start">
          <span className="mb-2 text-white uppercase">
            <strong>Siga a Scientific</strong>
          </span>
          <div className="flex justify-between gap-2">
            <SocialIcon link="https://www.facebook.com/ScientificLinguagem/">
              <FBSvg />
            </SocialIcon>
            <SocialIcon link="https://www.instagram.com/scientific_linguagem/">
              <INSvg />
            </SocialIcon>
            <SocialIcon link="https://www.linkedin.com/company/scientific-linguagem/">
              <LKSvg />
            </SocialIcon>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {" "}
          <span className="mb-2 text-white uppercase">
            <strong>Trabalhe Conosco</strong>
          </span>{" "}
          <Link
            className="px-6 py-3 text-center text-white transition-all bg-sciblue min-w-fit hover:scale-105"
            href="mailto:maristela@scientific.com.br"
          >
            Mande seu currículo
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-fit">
        <span className="block w-full pb-2 text-sm text-center text-white">
          © Scientific Linguagem. Todos os direitos reservados. Desenvolvido por{" "}
          <Link className="ml-1 text-sciblue" href="https://vinceveras.com/">
            Vince Veras
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
