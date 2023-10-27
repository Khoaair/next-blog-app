import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        <div className={styles.footer__logo}>
          <Image src='/logo.png' alt='daily blog' height={50} width={50} />
          <h1 className={styles.footer__title}>Daily Blog</h1>
        </div>
        <p className={styles.footer__desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          aspernatur adipisci architecto iusto repellendus minima, pariatur
          deserunt fugiat qui molestiae rem est excepturi quos dicta, esse fuga
          odit. Quidem, laudantium!
        </p>
        <div className={styles.footer__icons}>
          <Image src='/facebook.png' alt='' height={18} width={18} />
          <Image src='/youtube.png' alt='' height={18} width={18} />
          <Image src='/instagram.png' alt='' height={18} width={18} />
        </div>
      </div>
      <div className={styles.footer__links}>
        <div className={styles.footer__list}>
          <span className={styles.list__title}>Link</span>
          <Link href='/'>Home Page</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className={styles.footer__list}>
          <span className={styles.list__title}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/blog'>Fashion</Link>
          <Link href='/about'>Coding</Link>
          <Link href='/contact'>Travel</Link>
        </div>
        <div className={styles.footer__list}>
          <span className={styles.list__title}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/blog'>Instagram</Link>
          <Link href='/about'>Tiktok</Link>
          <Link href='/contact'>Youtube</Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
