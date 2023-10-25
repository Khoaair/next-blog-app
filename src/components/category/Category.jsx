import Link from 'next/link';
import styles from './category.module.css';
import Image from 'next/image';
const Category = () => {
  return (
    <div className={styles.categories}>
      <h1 className={styles.categories__title}>Popular Categories</h1>
      <div className={styles.categories__content}>
        <Link
          href='/blog?cat=style'
          className={`${styles.content__category} ${styles.style}`}
        >
          <Image
            src='/style.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href='/blog?cat=fashion'
          className={`${styles.content__category} ${styles.fashion}`}
        >
          <Image
            src='/fashion.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          href='/blog?cat=food'
          className={`${styles.content__category} ${styles.food}`}
        >
          <Image
            src='/food.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
        <Link
          href='/blog?cat=travel'
          className={`${styles.content__category} ${styles.travel}`}
        >
          <Image
            src='/travel.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href='/blog?cat=culture'
          className={`${styles.content__category} ${styles.culture}`}
        >
          <Image
            src='/culture.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
        <Link
          href='/blog?cat=coding'
          className={`${styles.content__category} ${styles.coding}`}
        >
          <Image
            src='/coding.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};
export default Category;
