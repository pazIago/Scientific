import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Global/Title";
import InstagramFeed from "@/components/Instagram";
import INSvg from "@/components/Global/instagram";
import Stripe from "@/components/Global/Stripe";
import InfoBlock from "@/components/Infoblock";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Form } from "@/components/Contact/Form";
import type { GetStaticProps } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

export type Post = {
  id: string;
  permalink: string;
  media_url: string;
  thumbnail_url?: string;
};

interface InstagramProps {
  data: Post[];
}

export default function Home({ data }: InstagramProps) {
  const [isBr, setIsBr] = useState<boolean>(false);

  useEffect(() => {
    const prefLang = localStorage.getItem("prefLang");
    if (prefLang == "BR") {
      setIsBr(true);
    } else {
      const lang = navigator.language;
      if (lang == "pt-BR") {
        setIsBr(true);
        localStorage.setItem("prefLang", "BR");
      } else {
        setIsBr(false), localStorage.setItem("prefLang", "EN");
      }
    }
  }, []);

  return (
    <>
      <Header isBr={isBr} setIsBr={setIsBr} />
  
      <Hero isBr={isBr} />
      <section
        className="max-w-[1140px] mx-auto max-md:pt-24 max-md:-mt-24 my-20 -mt-20 pt-40 grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-0"
        id="sobre"
      >
        <div className="relative block min-h-[210px]">
          <Image
            className="object-cover "
            src={"/assets/BLOCO_1.webp"}
            fill
            alt=""
          />
        </div>
        
        <div className="pt-10 pl-8 pr-4 max-md:px-4 [&>h2]:mb-8">
          <Title>{isBr ? "Sobre a Scientific" : "About Us"}</Title>
          {isBr ? (
            <p>
              A <strong>Scientific</strong> atua desde 1998 na revisão,
              tradução, edição, padronização e formatação de textos em português
              e inglês nas Ciências da Saúde e compreende duas entidades
              corporativas — uma voltada para produção textual (
              <strong>Scientific Linguagem</strong>) e outra para projetos
              editoriais (<strong>Editora Scientific</strong>). Nosso trabalho
              envolve:
            </p>
          ) : (
            <p>
              Since 1998, <strong>Scientific</strong> has been providing
              translation, editing, copyediting, proofreading, and formatting
              services for the health sciences in Brazilian Portuguese and
              English. The umbrella name Scientific comprises two corporate
              entities—one focused on text production (
              <strong>Scientific Linguagem</strong>) and one focused on
              editorial projects (<strong>Editora Scientific</strong>). Our work
              involves:
            </p>
          )}
          <ul className="grid gap-4 my-4 list-disc list-outside [&>li]:ml-8">
            <li>
              {isBr ? (
                <>
                  Apoio em todas as etapas de preparação de artigos científicos
                  para submissão em periódicos especializados, incluindo
                  adequação do texto (tradução, revisão ou edição, dependendo
                  das necessidades de cada projeto/cliente) até formatação de
                  acordo com as normas do periódico, passando por montagem de
                  bibliotecas em software de gestão de referências, coordenação
                  da submissão e acompanhamento do trabalho de resposta aos
                  pareceres. :
                </>
              ) : (
                <>
                  Support in the preparation of scientific manuscripts for
                  submission to specialized journals, including textual
                  adjustment (translation, copyediting, proofreading, or
                  editing), formatting according to journal guidelines,
                  reference management, coordination of submission, and support
                  in responding to journal editors and reviewers.
                </>
              )}
            </li>
            <li>
              {isBr ? (
                <>
                  Revisão, tradução, edição, padronização e formatação de
                  protocolos, diretrizes, relatórios e textos institucionais no
                  contexto das Ciências da Saúde.
                </>
              ) : (
                <>
                  Proofreading, copyediting, translation, editing,
                  standardization, and preparation (formatting) of protocols,
                  guidelines, reports, and institutional texts in the context of
                  the health sciences.
                </>
              )}
            </li>
            <li className="[&>a]:text-sciblue [&>a]:font-medium">
              {isBr ? (
                <>
                  Apoio aos projetos editoriais de revistas científicas, com mix
                  variado de serviços, incluindo secretaria editorial, tradução,
                  revisão, copidescagem e padronização de artigos. Entre as
                  revistas{" "}
                  <Link href="https://www.bjp.org.br/">
                    <em>Brazilian Journal of Psychiatry</em>
                  </Link>
                  , o{" "}
                  <Link href="https://www.jvascbras.org/">
                    <em>Jornal Vascular Brasileiro</em>
                  </Link>
                  , o{" "}
                  <Link href="https://jfootankle.com/">
                    <em>Journal of the Foot & Ankle</em>
                  </Link>
                  , os{" "}
                  <Link href="https://abccardiol.org/">
                    <em>Arquivos Brasileiros de Cardiologia</em>
                  </Link>
                  , o{" "}
                  <Link href="https://ijcscardiol.org/">
                    <em>International Journal of Cardiovascular Sciences</em>
                  </Link>
                  , a{" "}
                  <Link href="https://www.mdpi.com/journal/geriatrics">
                    <em>Geriatrics</em>
                  </Link>
                  , a{" "}
                  <Link href="https://ggaging.com/">
                    <em>Geriatrics, Gerontology and Ageing</em>
                  </Link>{" "}
                  e a{" "}
                  <Link href="https://www.rbmt.org.br/">
                    <em>Revista Brasileira de Medicina do Trabalho</em>
                  </Link>
                  .
                </>
              ) : (
                <>
                  Editorial assistance covering administrative support,
                  translation, copyediting, proofreading, and text
                  standardization. Clients include the{" "}
                  <Link href="https://www.bjp.org.br/">
                    <em>Brazilian Journal of Psychiatry</em>
                  </Link>
                  ,{" "}
                  <Link href="https://www.jvascbras.org/">
                    <em>Jornal Vascular Brasileiro</em>
                  </Link>
                  ,{" "}
                  <Link href="https://jfootankle.com/">
                    <em>Journal of the Foot & Ankle</em>
                  </Link>
                  ,{" "}
                  <Link href="https://abccardiol.org/">
                    <em>Arquivos Brasileiros de Cardiologia</em>
                  </Link>
                  ,{" "}
                  <Link href="https://ijcscardiol.org/">
                    <em>International Journal of Cardiovascular Sciences</em>
                  </Link>
                  ,{" "}
                  <Link href="https://www.mdpi.com/journal/geriatrics">
                    <em>Geriatrics</em>
                  </Link>
                  ,{" "}
                  <Link href="https://ggaging.com/">
                    <em>Geriatrics, Gerontology and Ageing</em>
                  </Link>{" "}
                  and{" "}
                  <Link href="https://www.rbmt.org.br/">
                    <em>Revista Brasileira de Medicina do Trabalho</em>
                  </Link>
                  .
                </>
              )}
            </li>
          </ul>
          <p>
            {isBr ? (
              <>
                A equipe da Scientific inclui profissionais de texto
                especializados nas Ciências da Saúde (tradutores, jornalistas,
                bibliotecária), apoio administrativo e parceiros com formação em
                Medicina e outras áreas da saúde, Estatística, Epidemiologia,
                Design Gráfico e secretaria para atuação em projetos
                específicos.
              </>
            ) : (
              <>
                Our team members are text specialists (translators, journalists,
                librarians), administrative staff, and partners with training in
                medicine, statistics, epidemiology, graphic design, and
                administrative assistance (for specific projects).
              </>
            )}
          </p>
        </div>
      </section>
      <section
        id="insta"
        className="max-w-[1140px] mx-auto my-14 px-8 [&>h2]:pb-8 hidden"
      >
        <Title hasDetail> {isBr ? "Últimas" : "News"}</Title>

        <InstagramFeed posts={data} />
        <Link
          className="flex items-center px-3 text-white transition-all rounded-md py-[6px] gap-2 w-fit mx-auto mt-8 bg-sciblue hover:scale-110"
          href="https://www.instagram.com/scientific_linguagem/"
        >
          <INSvg /> {isBr ? "Siga-nos no Instagram" : "Follow us on Instagram"}
        </Link>
      </section>
      <section
        id="servicos"
        className="pt-40 my-20 -mt-20 max-md:pt-24 max-md:-mt-24"
      >
        <Stripe text={isBr ? "Nossos Serviços" : "What we do"} />
        <div className="max-w-[1140px] mx-auto my-20 grid gap-8 max-md:mt-0">
          <InfoBlock
            title={isBr ? "Edição" : "Language Editing"}
            image={"/assets/BLOCO_2.webp"}
            position="left"
          >
            {" "}
            {isBr ? (
              <>
                <p>
                  A edição envolve reescritura ou reestruturação do conteúdo com
                  identificação de lacunas na exposição lógica de ideias. Vale
                  notar que a edição pode ser feita tanto durante o processo de
                  tradução quanto a partir de um texto já escrito na língua de
                  publicação (por exemplo, inglês).
                </p>{" "}
                <p>
                  No caso de tradução de artigos científicos, o texto de partida
                  em português frequentemente deixará de existir, passando o
                  texto em inglês a ser o conteúdo original. Nesses casos, a
                  tradução acompanhada de edição pode ser vantajosa para a
                  produção de um texto bem ajustado aos seus propósitos finais.
                </p>{" "}
                <p>
                  O trabalho de edição envolve participação ativa dos autores
                  para esclarecimento de dúvidas e aprovação e compreende ao
                  menos duas rodadas de ajuste textual.
                </p>
              </>
            ) : (
              <>
                <p>
                  Editing involves rewriting or restructuring content with the
                  identification of gaps in the logical expression of ideas.
                  Editing can be done both during the translation process and
                  from a text already written in the target language.
                </p>{" "}
                <p>
                  In the case of scientific articles, the source text (for
                  example, in Brazilian Portuguese) is often discarded after the
                  translation, with the target text (for example, in English)
                  becoming the original content. In these cases, translation
                  accompanied by editing may be the most advantageous process.
                </p>{" "}
                <p>
                  Editing requires authors to play an active role and includes
                  at least two rounds of textual adjustment.
                </p>
              </>
            )}
          </InfoBlock>
          <InfoBlock
            title={isBr ? "Tradução" : "Translation"}
            image={"/assets/BLOCO_3.webp"}
            position="right"
          >
            {" "}
            {isBr ? (
              <p>
                A Scientific é especializada na tradução para português, inglês
                e espanhol de diversos tipos de texto nas Ciências da Saúde:
                artigos para submissão em periódicos revisados por pares,
                protocolos, diretrizes, relatórios e textos institucionais,
                entre outros.
              </p>
            ) : (
              <p>
                Scientific specializes in translating manuscripts, protocols,
                guidelines, reports, and institutional texts, among others, from
                and into Brazilian Portuguese, English, and Spanish.
              </p>
            )}
          </InfoBlock>
          <InfoBlock
            title={isBr ? "Revisão" : "COPYEDITING AND PROOFREADING"}
            image={"/assets/BLOCO_4.webp"}
            position="left"
          >
            {isBr ? (
              <>
                <p>
                  A equipe de revisão utiliza ferramentas consagradas para
                  revisão ortográfica e gramatical em português e inglês. A
                  equipe trabalha em sintonia utilizando checklists
                  desenvolvidas pela Scientific, que são atualizadas
                  periodicamente e podem ser adaptadas para projetos
                  específicos.
                </p>
                <p>
                  Os textos revisados são entregues ao cliente em duas versões:
                  uma com marcação de alterações e comentários e outra limpa. O
                  fluxo tradicional envolve revisão e entrega dos arquivos,
                  retorno do cliente, ajustes e entrega das versões finais para
                  aprovação.
                </p>
              </>
            ) : (
              <>
                <p>
                  The work of our copy editors and proofreaders is guided by
                  standard dictionaries, grammar books, and style manuals. The
                  team also works together to develop checklists which are
                  updated periodically and can be adapted for specific projects.
                </p>
                <p>
                  Proofed texts are delivered in two versions, with and without
                  tracked changes. The usual workflow involves proofing,
                  delivery, client check and approval, with an adjustment round
                  if required.
                </p>
              </>
            )}
          </InfoBlock>
          <InfoBlock
            title={isBr ? "Formatação" : "MANUSCRIPT PREPARATION"}
            position="right"
            image={"/assets/BLOCO_5.webp"}
          >
            {isBr ? (
              <>
                <p>
                  A formatação é a adequação do artigo científico às normas da
                  revista para a qual ele será submetido. A atividade de
                  formatação envolve padronização do texto com tipo e tamanho de
                  fonte, espaçamentos, verificação de limites de
                  palavras/caracteres, apresentação de tabelas e materiais
                  suplementares, edição de figuras e forma de apresentação dos
                  dados dos autores.
                </p>
                <p>
                  Envolve ainda a conferência e formatação das referências e a
                  montagem de bibliotecas em software de gerenciamento de
                  referências.
                </p>
              </>
            ) : (
              <>
                <p>
                  Manuscript preparation means formatting a file according to
                  the requirements of each specific journal: font type and size,
                  spacing, word or character counts, author information and
                  forms, references, tables, figures, and supplementary
                  materials. Reference libraries can also be assembled upon
                  request.
                </p>
              </>
            )}
          </InfoBlock>
          <InfoBlock
            title={isBr ? "submissão" : "submission"}
            position="left"
            image={"/assets/BLOCO_6.webp"}
          >
            {isBr ? (
              <>
                {" "}
                <p>
                  O trabalho de submissão consiste na realização dos cadastros
                  do autor e do artigo no sistema de peer review do periódico
                  científico e no envio dos arquivos finais a serem avaliados
                  pela revista.
                </p>
                <p>
                  Durante o processo de preenchimento dos cadastros, surgem
                  inúmeras questões que precisam ser verificadas juntos aos
                  autores, como dados pessoais e profissionais, termos de
                  classificação, indicação de revisores e outras informações.
                </p>
              </>
            ) : (
              <>
                We provide support throughout the process of manuscript
                submission. including author registration, clarification
                regarding requirements, file adjustment and upload, contact with
                the journal if needed.{" "}
              </>
            )}
          </InfoBlock>
        </div>
      </section>
      <section
        id="contato"
        className="pt-40 my-20 -mt-20 max-md:pt-24 max-md:-mt-24"
      >
        <Stripe text={isBr ? "Entre em Contato" : "Talk to us"} />
        <div className="text-center max-w-[1140px] mx-auto mt-10 px-4">
          <p className="mb-8 [&>a]:text-sciblue [&>a]:font-medium">
            {isBr ? (
              <>
                Fale conosco para solicitar um orçamento ou contratar algum
                serviço.
              </>
            ) : (
              <>
                Questions, estimates, comments? Please send an email to
                <a href="mailto:artigos@scientific.com.br">
                  {" "}
                  artigos@scientific.com{" "}
                </a>
              </>
            )}
          </p>
          <Form isBr={isBr} />
          <div className="flex flex-col max-w-xl gap-4 mx-auto mt-16 text-xs text-left text-[#54595f] [&_span]:text-sciblue [&_span]:font-semibold">
            {isBr ? (
              <p>
                Para <span>ORÇAMENTOS</span>, informe o número de palavras a
                serem revisadas, editadas ou traduzidas. Informe ainda se deseja
                receber orçamento para formatação e submissão e o nome da
                revista de interesse.
              </p>
            ) : (
              <p>
                For <span>ESTIMATES</span>, enter the number of words to be
                reviewed, edited or translated. Also inform if you would like to
                receive a quote for formatting and submission and the name of
                the journal of interest.
              </p>
            )}
            {/*<p>
              Para <span>CONTRATAÇÃO</span>, anexe o arquivo de texto.
              Entraremos em contato pelo telefone para confirmar detalhes e
              combinar pagamento e prazo. O projeto será iniciado após esse
              contato.
            </p>  */}
          </div>
        </div>
      </section>
      <Footer isBr={isBr} />
    </>
  );
}

export const getStaticProps: GetStaticProps<InstagramProps> = async () => {
  try {
    const { data: response } = await axios.get<InstagramProps>(
      `https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${process.env.INSTA_TOKEN}`
    );

    if (!response.data) throw new Error("Failed to fetch data");

    return {
      props: {
        data: response.data.slice(0, 3),
      },
      revalidate: 60 * 60 * 24, // 24 hours
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        data: [],
      },
      revalidate: 30, // 30 seconds
    };
  }
};
