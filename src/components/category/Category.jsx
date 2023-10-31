import Link from 'next/link';
import styles from './category.module.css';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};
const Category = async () => {
  const categories = await getData();
  return (
    <div className={styles.categories}>
      <h1 className={styles.categories__title}>Popular Categories</h1>
      <div className={styles.categories__content}>
        {categories?.map(category => (
          <Link
            key={category._id}
            href='/blog?cat=style'
            className={`${styles.content__category} ${styles[category.slug]}`}
          >
            <Image
              src={category.img}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Category;
