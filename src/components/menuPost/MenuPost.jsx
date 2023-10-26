import styles from './menuPost.module.css';
import Link from 'next/link';
import Image from 'next/image';

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.menu__items}>
      <Link className={styles.menu__item} href='/'>
        {withImage && (
          <div className={styles.menu__image}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
        )}
        <div className={styles.menu__content}>
          <span className={`${styles.menu__category} ${styles.menu__travel}`}>
            Travel
          </span>
          <h3 className={styles.content__title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            laboriosam.
          </h3>
          <div className={styles.content__detail}>
            <span className={styles.content__username}>John Doe</span>
            <span className={styles.content__date}> - 28.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.menu__item} href='/'>
        {withImage && (
          <div className={styles.menu__image}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
        )}
        <div className={styles.menu__content}>
          <span className={`${styles.menu__category} ${styles.menu__culture}`}>
            Travel
          </span>
          <h3 className={styles.content__title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            laboriosam.
          </h3>
          <div className={styles.content__detail}>
            <span className={styles.content__username}>John Doe</span>
            <span className={styles.content__date}> - 28.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.menu__item} href='/'>
        {withImage && (
          <div className={styles.menu__image}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
        )}
        <div className={styles.menu__content}>
          <span className={`${styles.menu__category} ${styles.menu__food}`}>
            Travel
          </span>
          <h3 className={styles.content__title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            laboriosam.
          </h3>
          <div className={styles.content__detail}>
            <span className={styles.content__username}>John Doe</span>
            <span className={styles.content__date}> - 28.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.menu__item} href='/'>
        {withImage && (
          <div className={styles.menu__image}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
        )}
        <div className={styles.menu__content}>
          <span className={`${styles.menu__category} ${styles.menu__fashion}`}>
            Travel
          </span>
          <h3 className={styles.content__title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            laboriosam.
          </h3>
          <div className={styles.content__detail}>
            <span className={styles.content__username}>John Doe</span>
            <span className={styles.content__date}> - 28.10.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MenuPost;
