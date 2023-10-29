import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';

const Comments = () => {
  const status = 'authenticated';
  return (
    <div className={styles.comment}>
      <h1 className={styles.comment__title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.comment__write}>
          <textarea
            placeholder='write a comment...'
            className={styles.comment__input}
          ></textarea>
          <button className={styles.comment__button}>Send</button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments__list}>
        <div className={styles.comment}>
          <div className={styles.comment__user}>
            <Image
              className={styles.user__image}
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
            />
            <div className={styles.user__info}>
              <div className={styles.user__name}>John Doe</div>
              <div className={styles.user__date}></div>
            </div>
          </div>
          <div className={styles.comment__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptates eius incidunt repudiandae nobis architecto,
            officiis rem corrupti, ad nemo harum, maxime odio veniam amet
            suscipit error labore! Minus, adipisci.
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.comment__user}>
            <Image
              className={styles.user__image}
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
            />
            <div className={styles.user__info}>
              <div className={styles.user__name}>John Doe</div>
              <div className={styles.user__date}></div>
            </div>
          </div>
          <div className={styles.comment__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptates eius incidunt repudiandae nobis architecto,
            officiis rem corrupti, ad nemo harum, maxime odio veniam amet
            suscipit error labore! Minus, adipisci.
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.comment__user}>
            <Image
              className={styles.user__image}
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
            />
            <div className={styles.user__info}>
              <div className={styles.user__name}>John Doe</div>
              <div className={styles.user__date}></div>
            </div>
          </div>
          <div className={styles.comment__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptates eius incidunt repudiandae nobis architecto,
            officiis rem corrupti, ad nemo harum, maxime odio veniam amet
            suscipit error labore! Minus, adipisci.
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.comment__user}>
            <Image
              className={styles.user__image}
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
            />
            <div className={styles.user__info}>
              <div className={styles.user__name}>John Doe</div>
              <div className={styles.user__date}></div>
            </div>
          </div>
          <div className={styles.comment__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptates eius incidunt repudiandae nobis architecto,
            officiis rem corrupti, ad nemo harum, maxime odio veniam amet
            suscipit error labore! Minus, adipisci.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
