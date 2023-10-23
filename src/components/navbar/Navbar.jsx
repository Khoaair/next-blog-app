import styles from './navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';

import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLink from '../authLink/AuthLink';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        {/* <Image src='/tiktok.png' alt='tiktok' width={24} height={24} /> */}
        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
      </div>
      <div className={styles.navbar__logo}>Daily Blog</div>
      <div className={styles.navbar__links}>
        <ThemeToggle />
        <Link href='/'>Homepage</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/'>About</Link>
        <AuthLink />
      </div>
    </div>
  );
};
export default Navbar;
