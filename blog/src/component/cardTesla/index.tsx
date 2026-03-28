import { artigosIa } from '@/types/typesIa';
import Link from 'next/link';
import styles from "./cardTesla.module.css";
import Image from 'next/image';

type Props = {
  blog: artigosIa;
};

const CardTesla = ({ blog }: Props) => {
  const { slug, titulo, dataPublicacao, descricao, imagem } = blog;

  return (
    <article className={styles.card}>
      <Image
      className={styles.image}
        src={imagem}
        alt={titulo}
        width={300}
        height={400}
      />

      <div className={styles.container}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.descricao}>{descricao}</p>
        <p className={styles.date}>{dataPublicacao}</p>

        <Link href={`/artigoIa/${slug}`}>
          <strong className={styles.link}>Continue lendo »</strong>
        </Link>
      </div>
    </article>
  );
};

export default CardTesla;
