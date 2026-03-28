import { artigosDispositivo } from '@/types/typesDispositivo';
import CardDispositivo from '../cardDispositivo';
import styles from './gridDispositivo.module.css';

type Props = {
  dispositivo: artigosDispositivo[];
};

const GridDispositivo = ({ dispositivo }: Props) => {
  return (
    <section className={styles.grid}>
      {dispositivo.map((post) => (
        <CardDispositivo key={post.slug} dispositivo={post} />
      ))}
    </section>
  );
};

export default GridDispositivo;
