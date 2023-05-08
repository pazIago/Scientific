import Link from "next/link";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-4 py-10 [&>p]:text-center [&>p]:px-4">
      <p>
        Formulário temporariamente indisponível, desculpe pelo inconveniente.
      </p>
      <p> Clique em um dos botões abaixo para abrir o modelo de e-mail.</p>
      <div className="flex items-center justify-center gap-8 mt-8 text-center max-md:flex-col">
        <Link
          className="px-3 text-lg font-medium text-white bg-sciblue py-[6px] min-w-fit rounded-md w-[320px] hover:scale-105 transition-all"
          href="mailto:artigos@scientific.com.br?subject=Solicitação - Orçamento&body=
Para ORÇAMENTOS, anexe o arquivo de texto ou informe o número de palavras a serem revisadas, editadas ou traduzidas. Informe ainda se deseja receber orçamento para formatação e submissão e o nome da revista de interesse."
        >
          Orçamentos
        </Link>
        <Link
          className="px-3 text-lg font-medium text-white bg-sciblue py-[6px] min-w-fit rounded-md w-[320px] hover:scale-105 transition-all"
          href="mailto:artigos@scientific.com.br?subject=Solicitação - Contratação&body=
        Para CONTRATAÇÃO, anexe o arquivo de texto. Entraremos em contato pelo telefone para confirmar detalhes e combinar pagamento e prazo. O projeto será iniciado após esse contato."
        >
          Contratação
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
