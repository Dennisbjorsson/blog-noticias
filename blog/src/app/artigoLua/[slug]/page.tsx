import { lua } from '@/libis/luaPage/luaPage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import styles from './page.module.css';
import Image from 'next/image';

export async function generateStaticParams() {
  return lua.map((item) => ({
    slug: item.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = lua.find((item) => item.slug === slug);

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

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const page = lua.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const {
    titulo,
    autor,
    dataPublicacao,
    conteudo,
    imagem,
    creditoImagem,
    artemiImagem,
    creditoArtemis,
    lancamentoImagem,
    creditoLancamento,
    astronautasImagem,
    creditoAstronautas,
  } = page;

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{titulo}</h1>

      <p className={styles.meta}>
        <strong>Autor:</strong> {autor} • {dataPublicacao}
      </p>

      <figure className={styles.figure}>
        <Image src={imagem} alt={titulo} className={styles.image} />
        <figcaption className={styles.caption}>
          Crédito da imagem: {creditoImagem}
        </figcaption>
      </figure>

      <p className={styles.intro}>{conteudo}</p>

      <h2 className={styles.subtitle}> O que é a Artemis II</h2>

      <figure className={styles.figure}>
        <Image src={artemiImagem} alt={titulo} className={styles.image} />
        <figcaption className={styles.caption}>
          Crédito da imagem: {creditoArtemis}
        </figcaption>
      </figure>

      <p className={styles.text}>
        A Artemis II é a primeira missão tripulada do programa Artemis, que
        busca devolver humanos ao espaço lunar e, no futuro, pousá-los novamente
        na superfície. Esta missão não pousará na Lua, mas orbitará e circundará
        o satélite natural da Terra, abrindo caminho para pousos mais ambiciosos
        nas próximas etapas do programa.
      </p>

      <h2 className={styles.subtitle}> Quando vai acontecer?</h2>

      <figure className={styles.figure}>
        <Image src={lancamentoImagem} alt={titulo} className={styles.image} />
        <figcaption className={styles.caption}>
          Crédito da imagem: {creditoLancamento}
        </figcaption>
      </figure>

      <p className={styles.text}>
        A NASA mira o dia 6 de março de 2026 como a data mais próxima possível
        para o lançamento da Artemis II, após testes críticos bem-sucedidos.
      </p>

      <h2 className={styles.subtitle}> Quem vai na missão</h2>

      <figure className={styles.figure}>
        <Image src={astronautasImagem} alt={titulo} className={styles.image} />
        <figcaption className={styles.caption}>
          Crédito da imagem: {creditoAstronautas}
        </figcaption>
      </figure>

      <p className={styles.text}>
        Quatro astronautas participam da missão — três da NASA e um do Canadá —
        reforçando a cooperação internacional na exploração espacial.
      </p>
    </article>
  );
}
