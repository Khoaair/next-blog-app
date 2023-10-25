import Image from 'next/image';
import styles from './featured.module.css';

const Featured = () => {
  return (
    <div className={styles.featured}>
      <h1 className={styles.featured__title}>
        <b>Hey, John dev here!</b> Discover my stories and creawtive ideas.
      </h1>
      <div className={styles.featured__post}>
        <div className={styles.featured__image}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.featured__content}>
          <h1 className={styles.content__title}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className={styles.content__desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.featured__button}>Read more</button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
