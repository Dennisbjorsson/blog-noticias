import { dispositivo } from "@/libis/dispositivo";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";



export async function generateStaticParams() {
  return dispositivo.map(item => ({
    slug: item.slug,
  }));
}


type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const page = dispositivo.find(item => item.slug === slug);

  if (!page) {
    return {
      title: "Artigo não encontrado",
      description: "Este artigo não existe.",
    };
  }

  return {
    title: page.titulo,
    description: page.conteudo.slice(0, 150),
  };
}


export default async function ArtigoDispositivo({ params }: Props) {
  const { slug } = await params;
  const page = dispositivo.find(item => item.slug === slug);

  if (!page) {
    notFound();
  }

  const {
    titulo,
    autor,
    dataPublicacao,
    conteudo,
    imagem,
    dispositivoImagem
  } = page;

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{titulo}</h1>

      <p className={styles.meta}>
        <strong>Autor:</strong> {autor} • {dataPublicacao}
      </p>

      <figure className={styles.figure}>
        <img
          src={imagem}
          alt={titulo}
          className={styles.image}
        />
      </figure>

      <p className={styles.intro}>{conteudo}</p>

      <h2 className={styles.subtitle}> O que é o dispositivo?</h2>

      <p className={styles.text}>
        O equipamento, chamado <strong>DermaSensor</strong>, é um dispositivo
        portátil e não invasivo que utiliza espectroscopia com inteligência
        artificial para analisar lesões cutâneas suspeitas. Ele fornece uma
        análise objetiva e quantitativa, auxiliando médicos na decisão clínica.
      </p>

      <figure className={styles.figure}>
        <img
          src={dispositivoImagem}
          alt={titulo}
          className={styles.image}
        />
      </figure>

      <h2 className={styles.subtitle}> Precisão clínica e estudos</h2>

      <p className={styles.text}>
        Avaliado em estudos clínicos com mais de 1.000 pacientes liderados pela
        Mayo Clinic, o DermaSensor apresentou mais de 96% de sensibilidade para
        detecção de câncer de pele e cerca de 97% de precisão para descartar
        lesões benignas.
      </p>

      <p className={styles.text}>
        O dispositivo foi projetado como uma ferramenta auxiliar para médicos
        generalistas, ajudando a reduzir biópsias desnecessárias e acelerar o
        encaminhamento de casos críticos.
      </p>
    </article>
  );
}