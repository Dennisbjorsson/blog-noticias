import { artigosIa } from '@/types/typesIa';
import CardTesla from '../cardTesla';
import styles from './gridTesla.module.css';

type Props = {
  blog: artigosIa[];
};

const GridTesla = ({ blog }: Props) => {
  return (
    <section className={styles.grid}>
      {blog.map((post) => (
        <CardTesla key={post.slug} blog={post} />
      ))}
    </section>
  );
};

export default GridTesla;
