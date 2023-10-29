import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.singlePage}>
      <div className={styles.singlePage__info}>
        <div className={styles.info__text}>
          <h1 className={styles.info__title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
            recusandae?
          </h1>
          <div className={styles.user__container}>
            <div className={styles.user__image}>
              <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.user__text}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.info__image}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.singlePage__content}>
        <div className={styles.content__post}>
          <div className={styles.post__desc}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              molestiae quae inventore excepturi labore impedit fuga nihil
              voluptas? Consequatur cum quisquam eaque quo consequuntur tempora,
              maiores iste aut officiis! Quod ea suscipit voluptas vel nihil.
            </p>
            <h2>Lorem ipsum dolor sit</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              molestiae quae inventore excepturi labore impedit fuga nihil
              voluptas? Consequatur cum quisquam eaque quo consequuntur tempora,
              maiores iste aut officiis! Quod ea suscipit voluptas vel nihil.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              molestiae quae inventore excepturi labore impedit fuga nihil
              voluptas? Consequatur cum quisquam eaque quo consequuntur tempora,
              maiores iste aut officiis! Quod ea suscipit voluptas vel nihil.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              molestiae quae inventore excepturi labore impedit fuga nihil
              voluptas? Consequatur cum quisquam eaque quo consequuntur tempora,
              maiores iste aut officiis! Quod ea suscipit voluptas vel nihil.
            </p>
          </div>
          <div className={styles.post__comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SinglePage;
