import React from "react";
import Logo from "../Global/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#395962]">
      <div className="max-w-[1140px] py-16">
        <div className="flex flex-col gap-1 text-sm text-white">
          <div className="relative mb-2 w-[204px] h-[44px]">
            <Logo className="object-cover" color="pb" />
          </div>
          <span>Rua João Abbot, 109</span>
          <span>Cep 90460-150 - Porto Alegre - RS</span>
          <span>
            <strong>Telefone: (51) 3012.0575 / (51) 99977.3601</strong>
          </span>
        </div>
        <div></div>
        <div></div>
      </div>
      <span>
        © Scientific Linguagem. Todos os direitos reservados. Desenvolvido por{" "}
        <a href="https://vinceveras.com/">Vince Veras</a>
      </span>
    </footer>
  );
};

export default Footer;
