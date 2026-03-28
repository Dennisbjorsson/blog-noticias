import { tesla } from '@/libis/tesla';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';

export async function generateStaticParams() {
  return tesla.map((item) => ({
    slug: item.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = tesla.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: 'Artigo não encontrado',
      description: 'Este artigo não existe.',
    };
  }

  return {
    title: page.titulo,
    description: page.conteudo.slice(0, 150),
  };
}

export default async function ArtigoIa({ params }: Props) {
  const { slug } = await params;
  const page = tesla.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const {
    titulo,
    autor,
    dataPublicacao,
    conteudo,
    imagem,
    xaiImagem,
    xai2Imagem,
  } = page;

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{titulo}</h1>

      <p className={styles.meta}>
        <strong>Autor:</strong> {autor} • {dataPublicacao}
      </p>

      <figure className={styles.figure}>
        <Image src={imagem} alt={titulo} className={styles.image} />
      </figure>

      <p className={styles.intro}>{conteudo}</p>

      <h2 className={styles.subtitle}>Valuation e aquisições importantes</h2>

      <p className={styles.text}>
        Em março de 2025, Musk anunciou que sua startup de IA, xAI, adquiriu a
        plataforma X (antigo Twitter) em um acordo de troca de ações,
        valorizando a xAI em cerca de US$ 80 bilhões.
      </p>

      <figure className={styles.figure}>
        <Image src={xaiImagem} alt={titulo} className={styles.image} />
      </figure>

      <h2 className={styles.subtitle}>Grandes injeções de capital</h2>

      <p className={styles.text}>
        O grupo estatal saudita Humain anunciou um investimento de US$ 3 bilhões
        na rodada de financiamento da xAI, reforçando o poder financeiro por
        trás da estratégia de IA de Musk.
      </p>

      <figure className={styles.figure}>
        <Image src={xai2Imagem} alt={titulo} className={styles.image} />
      </figure>

      <p className={styles.text}>
        A aposta de Musk na IA visa criar um ecossistema tecnológico integrado,
        unindo carros autônomos, redes sociais e exploração espacial sob um
        núcleo de inteligência artificial.
      </p>
    </article>
  );
}
