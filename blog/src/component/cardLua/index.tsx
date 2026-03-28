import Link from 'next/link';
import { artigos } from '@/types//types';
import styles from './cardLua.module.css';
import Image from 'next/image';

type Props = {
  lua: artigos;
};

const CardLua = ({ lua }: Props) => {
  const { titulo, descricao, dataPublicacao, imagem, slug } = lua;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imagem} alt={titulo} width={400} height={600} />
      </div>

      <div className={styles.container}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.descricao}>{descricao}</p>

        <p className={styles.data}>{dataPublicacao}</p>

        <Link href={`/artigoLua/${slug}`}>
          <strong className={styles.link}>Continue lendo »</strong>
        </Link>
      </div>
    </article>
  );
};

export default CardLua;
