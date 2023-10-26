import styles from './menuCategories.module.css';
import Link from 'next/link';

const MenuCategories = () => {
  return (
    <div className={styles.menu__categories}>
      <Link
        href='/blog?cat=style'
        className={`${styles.category__item} ${styles.menu__style}`}
      >
        Style
      </Link>
      <Link
        href='/blog'
        className={`${styles.category__item} ${styles.menu__fashion}`}
      >
        Fashion
      </Link>
      <Link
        href='/blog'
        className={`${styles.category__item} ${styles.menu__food}`}
      >
        Food
      </Link>
      <Link
        href='/blog'
        className={`${styles.category__item} ${styles.menu__travel}`}
      >
        Travel
      </Link>
      <Link
        href='/blog'
        className={`${styles.category__item} ${styles.menu__culture}`}
      >
        Culture
      </Link>
      <Link
        href='/blog'
        className={`${styles.category__item} ${styles.menu__coding}`}
      >
        Coding
      </Link>
    </div>
  );
};
export default MenuCategories;
