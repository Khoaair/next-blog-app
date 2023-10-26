import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.card__content}>
        <div className={styles.content__detail}>
          <span className={styles.content__date}>23.10.2023 - </span>
          <span className={styles.content__category}>CULTURE</span>
          <Link href='/'>
            <h1 className={styles.content__title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              odio!
            </h1>
          </Link>
          <p className={styles.content__desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eum
            fugit eaque porro facere libero deserunt a temporibus, aliquid earum
            sint eius illum sunt ullam, dolorum quam rem. Alias, quis.
          </p>
          <Link href='/' className={styles.content__link}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
