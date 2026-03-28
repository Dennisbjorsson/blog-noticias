import { artigosDispositivo } from '@/types/typesDispositivo';
import Link from 'next/link';
import styles from './cardDispositivo.module.css';
import Image from "next/image";

type Props = {
  dispositivo: artigosDispositivo;
};

const CardDispositivo = ({ dispositivo }: Props) => {
  const { titulo, dataPublicacao, descricao, imagem, slug } = dispositivo;

  return (
    <div className={styles.card}>
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

        <Link href={`/artigoDispositivo/${slug}`}>
          <strong className={styles.link}>Continue lendo »</strong>
        </Link>
      </div>
    </div>
  );
};

export default CardDispositivo;
