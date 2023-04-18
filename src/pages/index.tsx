import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Global/Title";
import InstagramFeed from "@/components/Instagram";
import INSvg from "@/components/Global/instagram";
import Stripe from "@/components/Global/Stripe";
import InfoBlock from "@/components/Infoblock";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Form } from "@/components/Contact/Form";
import type { GetStaticProps } from "next";
import axios from "axios";

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
  return (
    <>
      <Header />
      <Hero />
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
          <Title>Sobre a Scientific</Title>
          <p>
            A <strong>Scientific</strong> atua desde 1998 na revisão, tradução,
            edição, padronização e formatação de textos em português e inglês
            nas Ciências da Saúde e compreende duas entidades corporativas — uma
            voltada para produção textual (<strong>Scientific Linguagem</strong>
            ) e outra para projetos editoriais (
            <strong>Editora Scientific</strong>). Nosso trabalho envolve:
          </p>
          <ul className="grid gap-4 my-4 list-disc list-outside [&>li]:ml-8">
            <li>
              Apoio em todas as etapas de preparação de artigos científicos para
              submissão em periódicos especializados, incluindo adequação do
              texto (tradução, revisão ou edição, dependendo das necessidades de
              cada projeto/cliente) até formatação de acordo com as normas do
              periódico, passando por montagem de bibliotecas em software de
              gestão de referências, coordenação da submissão e acompanhamento
              do trabalho de resposta aos pareceres.
            </li>
            <li>
              Revisão, tradução, edição, padronização e formatação de
              protocolos, diretrizes, relatórios e textos institucionais no
              contexto das Ciências da Saúde.
            </li>
            <li className="[&>a]:text-sciblue [&>a]:font-medium">
              Apoio aos projetos editoriais de revistas científicas, com mix
              variado de serviços, incluindo secretaria editorial, tradução,
              revisão, copidescagem e padronização de artigos. Entre as revistas{" "}
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
            </li>
          </ul>
          <p>
            A equipe da Scientific inclui profissionais de texto especializados
            nas Ciências da Saúde (tradutores, jornalistas, bibliotecária),
            apoio administrativo e parceiros com formação em Medicina e outras
            áreas da saúde, Estatística, Epidemiologia, Design Gráfico e
            secretaria para atuação em projetos específicos.
          </p>
        </div>
      </section>
      <section
        id="insta"
        className="max-w-[1140px] mx-auto my-14 px-4 [&>h2]:pb-8"
      >
        <Title hasDetail>Últimas</Title>

        <InstagramFeed posts={data} />
        <Link
          className="flex items-center px-3 text-white transition-all rounded-md py-[6px] gap-2 w-fit mx-auto mt-8 bg-sciblue hover:scale-110"
          href="https://www.instagram.com/scientific_linguagem/"
        >
          <INSvg /> Siga-nos no Instagram
        </Link>
      </section>
      <section
        id="servicos"
        className="pt-40 my-20 -mt-20 max-md:pt-24 max-md:-mt-24"
      >
        <Stripe text="Nossos Serviços" />
        <div className="max-w-[1140px] mx-auto my-20 grid gap-8 max-md:mt-0">
          <InfoBlock
            title="Edição"
            image={"/assets/BLOCO_2.webp"}
            position="left"
          >
            {" "}
            <p>
              A edição envolve reescritura ou reestruturação do conteúdo com
              identificação de lacunas na exposição lógica de ideias. Vale notar
              que a edição pode ser feita tanto durante o processo de tradução
              quanto a partir de um texto já escrito na língua de publicação
              (por exemplo, inglês).
            </p>{" "}
            <p>
              No caso de tradução de artigos científicos, o texto de partida em
              português frequentemente deixará de existir, passando o texto em
              inglês a ser o conteúdo original. Nesses casos, a tradução
              acompanhada de edição pode ser vantajosa para a produção de um
              texto bem ajustado aos seus propósitos finais.
            </p>{" "}
            <p>
              O trabalho de edição envolve participação ativa dos autores para
              esclarecimento de dúvidas e aprovação e compreende ao menos duas
              rodadas de ajuste textual.
            </p>
          </InfoBlock>
          <InfoBlock
            title="Tradução"
            image={"/assets/BLOCO_3.webp"}
            position="right"
          >
            {" "}
            <p>
              A Scientific é especializada na tradução para português, inglês e
              espanhol de diversos tipos de texto nas Ciências da Saúde: artigos
              para submissão em periódicos revisados por pares, protocolos,
              diretrizes, relatórios e textos institucionais, entre outros.
            </p>
          </InfoBlock>
          <InfoBlock
            title="Revisão"
            image={"/assets/BLOCO_4.webp"}
            position="left"
          >
            <p>
              A equipe de revisão utiliza ferramentas consagradas para revisão
              ortográfica e gramatical em português e inglês. A equipe trabalha
              em sintonia utilizando checklists desenvolvidas pela Scientific,
              que são atualizadas periodicamente e podem ser adaptadas para
              projetos específicos.
            </p>
            <p>
              Os textos revisados são entregues ao cliente em duas versões: uma
              com marcação de alterações e comentários e outra limpa. O fluxo
              tradicional envolve revisão e entrega dos arquivos, retorno do
              cliente, ajustes e entrega das versões finais para aprovação.
            </p>
          </InfoBlock>
          <InfoBlock
            title="Formatação"
            position="right"
            image={"/assets/BLOCO_5.webp"}
          >
            <p>
              A formatação é a adequação do artigo científico às normas da
              revista para a qual ele será submetido. A atividade de formatação
              envolve padronização do texto com tipo e tamanho de fonte,
              espaçamentos, verificação de limites de palavras/caracteres,
              apresentação de tabelas e materiais suplementares, edição de
              figuras e forma de apresentação dos dados dos autores.
            </p>
            <p>
              Envolve ainda a conferência e formatação das referências e a
              montagem de bibliotecas em software de gerenciamento de
              referências.
            </p>
          </InfoBlock>
          <InfoBlock
            title="submissão"
            position="left"
            image={"/assets/BLOCO_6.webp"}
          >
            <p>
              O trabalho de submissão consiste na realização dos cadastros do
              autor e do artigo no sistema de peer review do periódico
              científico e no envio dos arquivos finais a serem avaliados pela
              revista.
            </p>
            <p>
              Durante o processo de preenchimento dos cadastros, surgem inúmeras
              questões que precisam ser verificadas juntos aos autores, como
              dados pessoais e profissionais, termos de classificação, indicação
              de revisores e outras informações.
            </p>
          </InfoBlock>
        </div>
      </section>
      <section
        id="contato"
        className="pt-40 my-20 -mt-20 max-md:pt-24 max-md:-mt-24"
      >
        <Stripe text="Entre em Contato" />
        <ContactForm />
        {/* <div className="text-center max-w-[1140px] mx-auto mt-10 px-4">
          <p className="mb-8">
            Fale conosco para solicitar um orçamento ou contratar algum serviço.
          </p>
          <Form />
          <div className="flex flex-col max-w-xl gap-4 mx-auto mt-16 text-xs text-left text-[#54595f] [&_span]:text-sciblue [&_span]:font-semibold">
            <p>
              Para <span>ORÇAMENTOS</span>, anexe o arquivo de texto ou informe
              o número de palavras a serem revisadas, editadas ou traduzidas.
              Informe ainda se deseja receber orçamento para formatação e
              submissão e o nome da revista de interesse.
            </p>
            <p>
              Para <span>CONTRATAÇÃO</span>, anexe o arquivo de texto.
              Entraremos em contato pelo telefone para confirmar detalhes e
              combinar pagamento e prazo. O projeto será iniciado após esse
              contato.
            </p>
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<InstagramProps> = async () => {
  try {
    const { data: response } = await axios.get<InstagramProps>(
      "https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=IGQVJXMUZAlQkFQbi1vTlBJSFdYOXFHZA2p4UFdVc1pMZAlpDU0U4Q3FUaElxaS1ZAaTZAhTW1JNXNNNVlvOFgxRFA5NHdlU1dVZAGg5ZAm1JRjRrM1J3cFRvSWVYTk1CRmpGYUs5bGRSMHNmZA0hFa1kxTGdWQwZDZD"
    );
    console.log(response.data);
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
